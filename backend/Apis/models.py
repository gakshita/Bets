import os

from blockchain_config import ZERO_ADDRESS
from tortoise import fields
from tortoise.contrib.pydantic.creator import pydantic_model_creator
from tortoise.models import Model


class OptionData(Model):
    signature_timestamp = fields.IntField()
    queued_timestamp = fields.IntField()
    queue_id = fields.IntField(unique=True)
    strike = fields.BigIntField()
    period = fields.IntField()
    target_contract = fields.CharField(max_length=255)
    user_partial_signature = fields.CharField(max_length=500)
    user_full_signature = fields.CharField(max_length=500)
    user_address = fields.CharField(max_length=255)
    trade_size = fields.CharField(max_length=500)
    allow_partial_fill = fields.BooleanField()
    referral_code = fields.CharField(max_length=255)
    trader_nft_id = fields.IntField()
    slippage = fields.IntField()
    settlement_fee = fields.BigIntField(null=True)
    settlement_fee_sign_expiration = fields.IntField(null=True)
    settlement_fee_signature = fields.CharField(max_length=500, null=True)
    expiration_time = fields.IntField(null=True)
    is_above = fields.BooleanField()
    state = fields.CharField(max_length=255)
    option_id = fields.IntField(null=True)
    is_limit_order = fields.BooleanField()
    limit_order_expiration = fields.IntField(null=True)
    environment = fields.CharField(max_length=255)
    expiry_price = fields.BigIntField(null=True)
    payout = fields.CharField(max_length=500, null=True)
    close_time = fields.BigIntField(null=True)
    limit_order_duration = fields.BigIntField(null=True)
    locked_amount = fields.CharField(max_length=500, null=True)
    is_cancelled = fields.BooleanField(default=False)
    cancellation_reason = fields.CharField(max_length=255, null=True)
    cancellation_timestamp = fields.IntField(null=True)
    early_close_signature = fields.CharField(max_length=500, null=True)
    user_close_timestamp = fields.BigIntField(null=True)
    open_timestamp = fields.IntField()
    token = fields.CharField(max_length=500, null=True)
    router = fields.CharField(max_length=500, default=ZERO_ADDRESS)
    strike_timestamp = fields.IntField(null=True)


class AccountData(Model):
    account = fields.CharField(max_length=500, unique=True)
    nonce = fields.IntField(default=0)
    one_ct = fields.CharField(max_length=500, default=ZERO_ADDRESS)
    environment = fields.CharField(max_length=500, null=True)
    registration_signature = fields.CharField(max_length=500)
    state = fields.CharField(max_length=500)


class ApprovalData(Model):
    account = fields.CharField(max_length=500)
    nonce = fields.IntField(default=0)
    allowance = fields.CharField(max_length=500)
    deadline = fields.BigIntField()
    v = fields.IntField()
    r = fields.CharField(max_length=500)
    s = fields.CharField(max_length=500)
    state = fields.CharField(max_length=500)
    environment = fields.CharField(max_length=500, null=True)
    token = fields.CharField(max_length=500, null=True)
    is_locked = fields.BooleanField(default=False)
    spender = fields.CharField(max_length=500, default=ZERO_ADDRESS)


class UserUpdateOperation(Model):
    state = fields.CharField(max_length=500, default="PENDING")
    user_address = fields.CharField(max_length=500)
    operation = fields.CharField(max_length=500)
    data = fields.JSONField()
    update_timestamp = fields.IntField()
    environment = fields.CharField(max_length=500, null=True)


class MarketConstants(Model):
    environment = fields.CharField(max_length=500, unique=True)
    markets = fields.JSONField()
    start_time = fields.IntField()


OptionData_Pydantic = pydantic_model_creator(OptionData, name="OptionData")
AccountData_Pydantic = pydantic_model_creator(AccountData, name="AccountData")
ApprovalData_Pydantic = pydantic_model_creator(ApprovalData, name="ApprovalData")
UserUpdateOperation_Pydantic = pydantic_model_creator(
    UserUpdateOperation, name="UserUpdateOperation"
)
MarketConstants_Pydantic = pydantic_model_creator(
    MarketConstants, name="MarketConstants"
)
