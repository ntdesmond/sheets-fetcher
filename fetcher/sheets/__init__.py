from googleapiclient.discovery import build

from fetcher.settings import settings

api = build("sheets", "v4", developerKey=settings.sheets_api_key)


def get_rows(range: str = "B2:D") -> list[list[str]]:
    """
    Fetch data from the spreadsheet

    :param range: Range to fetch data from
    :return: List of lists of strings that are stored in the sheet cells
    """
    return (
        api.spreadsheets()
        .values()
        .get(spreadsheetId=settings.sheets_doc_id, range=range)
        .execute()
        .get("values", [])
    )
