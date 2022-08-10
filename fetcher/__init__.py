import asyncio
import logging

from fetcher import database, sheets
from fetcher.database.models.order import Order
from fetcher.database.utils import add_or_update
from fetcher.settings import settings


async def update_db() -> None:
    """
    Update the DB with fetched rows from Google Sheets document.

    - deleted rows won't be deleted from the DB.

    - changed row will be updated in the DB as long as their ID remains the same.

    - rows with the new ID that have not been seen before will be added to the DB.
    """
    logging.info("Fetching the data from Google Sheets...")
    orders = [Order.from_sheets_row(*row) for row in sheets.get_rows()]
    logging.info(f"Fetched {len(orders)} rows, updating the DB.")
    add_or_update(orders)


async def run() -> None:
    """
    The main task.
    Creates the DB tables, and updates them once in a period.
    """
    await database.create_tables()
    while True:
        await update_db()
        await asyncio.sleep(settings.update_period)


async def main() -> None:
    """
    Launch the task defined in run().
    Cancel it when KeyboardInterrupt is caught.
    """
    task = asyncio.create_task(run())
    try:
        await task
    except (asyncio.CancelledError, KeyboardInterrupt):
        logging.info("Stopping the fetcher.")
        task.cancel()
        raise
