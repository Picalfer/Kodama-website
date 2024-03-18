
Добавлен бэкенд с использованием FastAPI, Uvicorn и Google Spreadsheets

## Предварительные требования

Перед тем как начать, убедитесь, что у вас установлены следующие инструменты:

- Python 3.10 или выше
- Poetry - инструмент управления зависимостями Python

## Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Gen121/Kodama-website.git
cd Kodama-website
```
2. Установите зависимости через Poetry:
```bash
poetry install
```
3. Активируйте оболочку Poetry
```bash
poetry shell
```
4. Настройте переменные окружения - Скачайте JSON файл с ключами доступа Google API в корневую директорию проекта и в файле ```src/spreadsheets.py``` измените константу ```CREDENTIALS_FILE``` и личную почту владельца ```EMAIL_USER```:
```bash
CREDENTIALS_FILE="<имя_JSON_файла_Google_API>"
EMAIL_USER="Артур@накурился.кек"
```

5. Что бы создать новую таблицу Google Spreadsheets, запустите скрипт для создания таблицы. Про создание таблицы и доступ к ней написано в коментариях в файле ```spreadsheets.py```
```bash
python src/spreadsheets.py
```

5. Запуск
Для запуска сервера выполните следующую команду:
```bash
python src/main.py
```
Открыть докер
запустить docker build .
далее docker run -d -p 5050:5050 b389bf где последние 6 символов это первые 6 от "writing image sha256:65d7450f6188e08edf954a11c8d8..."
Сервер запустится на http://localhost:5050/.
