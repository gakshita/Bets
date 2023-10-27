import json
import logging
import time
from contextvars import ContextVar
from typing import Awaitable, Callable, List, Optional, TypeVar, Union

import redis.asyncio as redis


from contract import to_checksum
from fastapi import APIRouter, Depends, FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi_cache.backends.redis import RedisBackend

from interface import MarketPayoutPair
from lib.settings import settings
from models import OptionData_Pydantic
from pydantic import BaseModel, Field, NonNegativeInt, PositiveInt
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from tortoise import connections


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


@router.get("/")
async def ping():
    return _({"message": "PONG"})
