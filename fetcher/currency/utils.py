from decimal import Decimal


def str_to_decimal(cost: str | Decimal) -> Decimal:
    """
    Convert a string to a decimal, handling both comma and dot as a decimal separator.
    """
    if isinstance(cost, Decimal):
        return cost
    return Decimal(cost.replace(",", "."))
