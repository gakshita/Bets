from typing import List

from pydantic import BaseSettings


class Settings(BaseSettings):
    environment: str = "local"

    postgres_host: str = ""
    postgres_port: int = 5432
    postgres_user: str = ""
    postgres_password: str = ""
    postgres_name: str = ""

    publisher_key: str = ""

    polygon_api_key: str = ""

    ws_pushpin_server: str = ""
    pricefeed_channel: str = "pricefeed"
    timescale_db_url: str = ""
    push_interval: int = 250

    sentry_dsn: str = ""
    DATABASE_URL: str = ""

    REDISUSER: str = ""
    REDISPASSWORD: str = ""
    REDISHOST: str = "localhost"
    REDISPORT: int = 6379
    API_V1_STR: str = "/instant-trading"
    MODE: str = "SANDBOX"

    REGISTRAR_ADMIN_PK: str = ""
    REGISTRAR_ADMIN: str = ""
    KEEPERS: str = ""
    ADMINS: str = ""
    DEVELOPERS: str = ""

    SETTLEMENT_FEE_SIGNER_PK: str = ""
    SENTRY_DSN: str = ""
    MIN_BALANCE: float = 0.1

    QUEUE_TIME_LAG: int = 2

    SATSUMA_DB_URL: str = ""

    SETTLEMENT_FEE_SIGNATURE_EXPIRATION: int = 30

    SPREAD_SIGNER_PK: str = ""


settings = Settings()

# replace postgresql with postgres in the settings.DATABASE_URL
settings.DATABASE_URL = settings.DATABASE_URL.replace("postgresql", "postgres")
