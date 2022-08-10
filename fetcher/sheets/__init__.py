from googleapiclient.discovery import build
from google.oauth2.service_account import Credentials

from fetcher.settings import settings

api = build(
    "sheets",
    "v4",
    credentials=Credentials.from_service_account_file(
        settings.sheets_service_account_key
    ),
)


def get_rows(range: str = "B2:D"):
    return (
        api.spreadsheets()
        .values()
        .get(spreadsheetId=settings.sheets_doc_id, range=range)
        .execute()
        .get("values", [])
    )
