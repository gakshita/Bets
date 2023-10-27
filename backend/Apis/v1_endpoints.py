import json
import logging
import time
from contextvars import ContextVar
from typing import Awaitable, Callable, List, Optional, TypeVar, Union

import redis.asyncio as redis
from pipe import select

from fastapi import APIRouter, Depends, FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi_cache.backends.redis import RedisBackend

from lib.settings import settings
from pydantic import BaseModel, Field, NonNegativeInt, PositiveInt
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from tortoise import connections
from models import Trade, Trade_Pydantic


def get_cache() -> RedisBackend:
    redis_url = f"redis://{settings.REDISUSER}:{settings.REDISPASSWORD}@{settings.REDISHOST}:{settings.REDISPORT}"
    try:
        red = redis.from_url(redis_url, encoding="utf-8", decode_responses=True)
    except Exception:
        raise Exception(
            "Redis connection failed, ensure redis is running on the default port 6379"
        )
    return RedisBackend(red)


cache: RedisBackend = get_cache()


logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

router = APIRouter()


def _(content, status_code=200):
    return JSONResponse(
        content=content,
        status_code=status_code,
    )


limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["1/minute"],
)
custom_rate_limit = "30/10second"

# HELPER
def serialize(data):
    return list(data | select(lambda x: x.dict()))


@router.get("/")
async def ping():
    return _({"message": "PONG"})


@router.get("/trades")
async def get_trades(player: str):
    trades = await Trade_Pydantic.from_queryset(
        Trade.filter(player=player).order_by("-p_id")
    )
    if trades is None:
        trades = []

    return _(serialize(trades))


class TradeInput(BaseModel):
    player: str
    time: int
    bet_size: float
    bet: str
    payout: float
    result: str


@router.post("/create/trade")
async def create_trade(
    trade: TradeInput,
):
    logger.info(trade)
    trade = await Trade.create(
        player=trade.player,
        time=trade.time,
        bet_size=trade.bet_size,
        bet=trade.bet,
        payout=trade.payout,
        result=trade.result,
    )
    result = await Trade_Pydantic.from_tortoise_orm(trade)
    return _(result.dict())
