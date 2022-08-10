from pydantic import BaseSettings


class Settings(BaseSettings):
    update_period: int
    db_password: str
    db_host: str
    sheets_doc_id: str
    sheets_service_account_key: str
    currency_info_url: str

    class Config:
        env_file = ".env"  # Use .env file for local development


settings = Settings()
