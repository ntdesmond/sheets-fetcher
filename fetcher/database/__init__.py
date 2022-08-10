from typing import TypeVar
import sqlalchemy
from sqlalchemy.orm import sessionmaker

from fetcher.settings import settings
from fetcher.database.models import Base
from fetcher.database.models.order import Order

ModelType = TypeVar("ModelType", bound=Base)

db = sqlalchemy.create_engine(
    f"postgresql+psycopg2://postgres:{settings.db_password}@{settings.db_host}/postgres"
)
Session = sessionmaker(bind=db)


async def create_tables():
    """
    Create tables if any of them doesn't exist yet
    """
    meta: sqlalchemy.MetaData = Base.metadata
    meta.create_all(db)
