import datetime
from dateutil.parser import parse as parse_date
from sqlalchemy import Column, Integer, Numeric, Date

from fetcher.database.models import Base
from fetcher.currency import convert_usd_to_rub, str_to_decimal

# We could store money as Integer, but for simplicity let's keep Decimal,
# as we don't do any math on money
MoneyType = Numeric(asdecimal=True)


class Order(Base):
    """
    A model that represents an order.

    Fields:

    - id: int

    - cost_dollars: int

    - cost_roubles: int

    - date: datetime.date
    """

    __tablename__ = "orders"

    id: int = Column(Integer, primary_key=True)
    cost_dollars: int = Column(MoneyType, nullable=False)
    cost_rubles: int = Column(MoneyType, nullable=False)
    date: datetime.date = Column(Date, nullable=False)

    @classmethod
    def from_sheets_row(cls, id: int, cost_dollars: str, date: str):
        """
        Get an Order object from a Google Sheets row.

        :return: Order object
        """
        decimal_dollars = str_to_decimal(cost_dollars)
        date_object = parse_date(date, dayfirst=True).date()
        cost_rubles = convert_usd_to_rub(decimal_dollars, date_object)
        return cls(
            id=id, cost_dollars=cost_dollars, cost_rubles=cost_rubles, date=date_object
        )

    def __repr__(self):
        return f"<Order(id={self.id}, cost=[${self.cost_dollars}, {self.cost_roubles} RUB], date={self.date})>"
