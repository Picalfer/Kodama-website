from google.oauth2.service_account import Credentials
from googleapiclient import discovery

from config import settings

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
]
CREDENTIALS_INFO = settings.api_key
EMAIL_USER = settings.email


# Функция для создания сервиса
def get_credentials():  # -> Credentials
    return Credentials.from_service_account_info(
        CREDENTIALS_INFO.model_dump(), scopes=SCOPES
    )


def get_spreadsheet_service(credentials: Credentials = get_credentials()):
    return discovery.build("sheets", "v4", credentials=credentials)


def get_drive_service(credentials: Credentials = get_credentials()):
    return discovery.build("drive", "v3", credentials=credentials)


if __name__ == "__main__":
    print(get_spreadsheet_service())
