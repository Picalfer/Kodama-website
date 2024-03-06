import datetime
import uuid

import pytz

# Импорты для работы с Google_API
from google.oauth2.service_account import Credentials
from googleapiclient import discovery

# Работа с Google_API
SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
]
CREDENTIALS_FILE = "kodama-storage-7c07f9d27828.json"
EMAIL_USER = "landfathich@gmail.com"


# Функция для аутентификации
def authenticate_google_api() -> tuple[discovery.Resource, Credentials]:
    credentials = Credentials.from_service_account_file(CREDENTIALS_FILE, scopes=SCOPES)
    service = discovery.build("sheets", "v4", credentials=credentials)

    return service, credentials


# Функция для создания тела spreadsheet
def create_spreadsheet(service) -> str:
    """Запишет адрес созданой таблицы в файл ".env.spreadsheet_id.txt" """
    spreadsheet_body = {
        "properties": {
            "title": "Kodama-admin",
            "locale": "ru_RU",
        },
        "sheets": [
            {
                "properties": {
                    "sheetType": "GRID",
                    "sheetId": 0,
                    "title": "Requests",
                    "gridProperties": {"rowCount": 100, "columnCount": 10},
                }
            }
        ],
    }
    request = service.spreadsheets().create(body=spreadsheet_body)
    response = request.execute()
    spreadsheet_id = response["spreadsheetId"]
    linq_spreadsheet = "https://docs.google.com/spreadsheets/d/" + spreadsheet_id
    print(linq_spreadsheet)
    with open(".env.spreadsheet_id.txt", "w") as f:
        f.write(linq_spreadsheet)

    return spreadsheet_id


# Функция для установки прав доступа для EMAIL_USER
def set_user_permissions(service, spreadsheet_id) -> None:
    permissions_body = {
        "type": "user",
        "role": "writer",
        "emailAddress": EMAIL_USER,
    }
    google_drive_service = discovery.build("drive", "v3", credentials=credentials)
    google_drive_service.permissions().create(
        fileId=spreadsheet_id, body=permissions_body
    ).execute()

    return None


# Функция для получения id sheet получает id отсекая его из ссылки
def get_sheet_id():
    with open(".env.spreadsheet_id.txt", "r") as f:
        linq = f.read()
        return linq.split("/")[-1]


def append_to_sheet(service, spreadsheet_id, **kwargs) -> None:
    timezone = pytz.timezone("Europe/Moscow")
    table_values = [
        [
            kwargs.get("id_request", str(uuid.uuid4())),
            kwargs.get("email", "example@example.com"),
            kwargs.get("phone_number", ""),
            kwargs.get("date", str(datetime.date.today())),
            kwargs.get("time", datetime.datetime.now(timezone).time().strftime("%H:%M")),
            kwargs.get("comment", ""),
            kwargs.get("status", "Ожидает ответа"),
        ],
    ]
    request_body = {"majorDimension": "ROWS", "values": table_values}
    service.spreadsheets().values().append(
        spreadsheetId=spreadsheet_id,
        range="Requests!A1:J100",
        valueInputOption="USER_ENTERED",
        body=request_body,
    ).execute()


# Функция для обновления sheet - Requests
def generate_title_sheet(service, spreadsheet_id) -> None:
    table_values = [  # Здесь объявляются заголовки
        ["id_request", "email", "phone_number", "date", "time", "comment", "status"],
    ]
    request_body = {"majorDimension": "ROWS", "values": table_values}
    service.spreadsheets().values().update(
        spreadsheetId=spreadsheet_id,
        range="Requests!A1:J100",
        valueInputOption="USER_ENTERED",
        body=request_body,
    ).execute()


if __name__ == "__main__":
    service, credentials = authenticate_google_api()

    # Раскомкоментировать create_spreadsheet для создания новой электронной таблицы Google.
    # Запишет адрес созданой таблицы в файл ".env.spreadsheet_id.txt"
    create_spreadsheet(service)

    # Раскомкоментировать для разрешения пользователю(EMAIL_USER) использовать созданную таблицу
    set_user_permissions(service, get_sheet_id())

    # Раскомкоментировать что бы создать заголовки, определенными в массиве table_values
    generate_title_sheet(service, get_sheet_id())

    table_id = get_sheet_id()

    # Раскомкоментировать что бы добавить новую строку в лист "Requests"
    # append_to_sheet(service, table_id, email="example@example.com", phone_number="8(999)999-99-98")
