from pydantic import BaseSettings


class CommonSettings(BaseSettings):
    db_password: str
    db_host: str

    class Config:
        env_file = ".env"  # Use .env file for local development


settings = CommonSettings()
