from tortoise import fields
from tortoise.contrib.pydantic.creator import pydantic_model_creator
from tortoise.models import Model


class Trade(Model):
    p_id = fields.IntField(pk=True)
    player = fields.CharField(
        max_length=500,
    )
    time = fields.IntField()
    bet_size = fields.FloatField()
    bet = fields.CharField(
        max_length=500,
    )
    result = fields.CharField(
        max_length=500,
    )
    payout = fields.FloatField()


Trade_Pydantic = pydantic_model_creator(Trade, name="Trade")
