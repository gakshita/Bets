import logging
from contextvars import ContextVar
from typing import Awaitable, Callable, List, TypeVar

import redis.asyncio as redis
from fastapi import Depends, FastAPI, Request
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_limiter import FastAPILimiter
from fastapi_limiter.depends import RateLimiter
from lib.settings import settings
from request_context_lib import _request_ctx_var, get_request_context
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address
from starlette.middleware.cors import CORSMiddleware
from tortoise.contrib.fastapi import register_tortoise
from v1_endpoints import router as v1_api_router

limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["30/second"],
)

app = FastAPI()

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

RT = TypeVar("RT")


@app.middleware("http")
async def request_context_middleware(
    request: Request, call_next: Callable[..., Awaitable[RT]]
) -> RT:
    try:
        request_ctx = _request_ctx_var.set(request)
        response = await call_next(request)
        _request_ctx_var.reset(request_ctx)
        return response
    except Exception as e:
        raise e


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

register_tortoise(
    app,
    config={
        "connections": {
            "default": settings.DATABASE_URL,
            "theGraph": settings.SATSUMA_DB_URL,
        },
        "apps": {
            "models": {
                "models": ["models"],
                "default_connection": "default",
            }
        },
    },
    generate_schemas=True,
    add_exception_handlers=True,
)


@app.on_event("startup")
async def startup():
    redis_url = f"redis://{settings.REDISUSER}:{settings.REDISPASSWORD}@{settings.REDISHOST}:{settings.REDISPORT}"
    try:
        red = redis.from_url(redis_url, encoding="utf-8", decode_responses=True)
        await FastAPILimiter.init(red)
    except Exception:
        raise Exception(
            "Redis connection failed, ensure redis is running on the default port 6379"
        )

    FastAPICache.init(RedisBackend(red), prefix="fastapi-cache")


app.include_router(v1_api_router, prefix=settings.API_V1_STR)
app.include_router(v1_api_router, prefix="")
