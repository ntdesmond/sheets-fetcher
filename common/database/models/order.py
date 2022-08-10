import datetime
from sqlalchemy import Column, Integer, Numeric, Date

from common.database.models import Base

# We could store money as Integer, but for simplicity let's keep Decimal,
# as we don't do any math on money
MoneyType = Numeric(asdecimal=True)


class Order(Base):
    """
    A model that represents an order.

    Fields:

    - id: int

    - cost_dollars: Decimal

    - cost_roubles: Decimal

    - date: datetime.date
    """

    __tablename__ = "orders"

    id: int = Column(Integer, primary_key=True)
    cost_dollars: int = Column(MoneyType, nullable=False)
    cost_rubles: int = Column(MoneyType, nullable=False)
    date: datetime.date = Column(Date, nullable=False)

    def __repr__(self):
        return f"<Order(id={self.id}, cost=[${self.cost_dollars}, {self.cost_roubles} RUB], date={self.date})>"
