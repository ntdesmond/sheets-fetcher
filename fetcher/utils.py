import dateutil.parser

from common.database.models.order import Order
from fetcher.currency import str_to_decimal, convert_usd_to_rub


def row_to_order(row: list[str]) -> Order:
    """
    Convert a raw row data to an Order

    :param row: list of strings
    """
    decimal_dollar_cost = str_to_decimal(row[1])
    date = dateutil.parser.parse(row[2], dayfirst=True)
    cost_rubles = convert_usd_to_rub(decimal_dollar_cost, date)
    # noinspection PyTypeChecker
    return Order(
        id=int(row[0]),
        cost_dollars=decimal_dollar_cost,
        cost_rubles=cost_rubles,
        date=date,
    )
