from typing import TypeVar
import sqlalchemy
from sqlalchemy.orm import sessionmaker

from common.settings import settings
from common.database.models import Base

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
