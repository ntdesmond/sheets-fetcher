from common.settings import CommonSettings


class FetcherSettings(CommonSettings):
    update_period: int
    sheets_doc_id: str
    sheets_api_key: str
    currency_info_url: str


settings = FetcherSettings()
