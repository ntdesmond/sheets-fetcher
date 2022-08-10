import datetime
from decimal import Decimal
from functools import cache
import pandas

from fetcher.settings import settings


def convert_usd_to_rub(cost_dollars: Decimal, date: datetime.date) -> Decimal:
    """
    Converts USD cost to RUB, using an external service to get the conversion rate on a specific date.
    """
    return cost_dollars * get_conversion_rate(date)


@cache
def get_conversion_rate(date: datetime.date) -> Decimal:
    """
    Get USD to RUB conversion rate for a specific date.
    Uses cache to memoize the values fetched before.
    """
    table = pandas.read_xml(
        settings.currency_info_url.format(date=date.strftime("%d/%m/%Y")),
        encoding="windows-1251",
        parser="etree",
    )
    return Decimal(table[table["CharCode"] == "USD"]["Value"].iloc[0].replace(",", "."))
