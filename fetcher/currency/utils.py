from decimal import Decimal


def str_to_decimal(cost: str | Decimal) -> Decimal:
    if isinstance(cost, Decimal):
        return cost
    return Decimal(cost.replace(',', '.'))
