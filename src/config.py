from pathlib import Path

from pydantic import ValidationError
from pydantic_settings import BaseSettings, SettingsConfigDict

ROOT_DIRECTORY = Path(__file__).resolve().parent.parent


class ApiKeyJSON(BaseSettings):
    type: str
    project_id: str
    private_key_id: str
    private_key: str
    client_email: str
    client_id: str
    auth_uri: str
    token_uri: str
    auth_provider_x509_cert_url: str
    client_x509_cert_url: str
    universe_domain: str

    model_config = SettingsConfigDict(env_file=None, extra="ignore")


def get_api_key_settings() -> ApiKeyJSON | None:
    try:
        return ApiKeyJSON(_env_file=".env.api", extra="ignore")  # type: ignore
    except ValidationError:
        print("<---Файл .env.api не обнаружен или содержит некорректные данные!--->")
        raise


class Settings(BaseSettings):
    email: str
    sheet_id: str
    root_directory: Path = ROOT_DIRECTORY
    api_key: ApiKeyJSON = get_api_key_settings()  # type: ignore

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


try:
    settings = Settings(_env_file=".env")  # type: ignore
except ValidationError:
    print("<---Файлы .env не обнаруже или содержит некорректные данные!--->")
    raise
