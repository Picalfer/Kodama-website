import configparser
import json
from pathlib import Path


ROOT_DIRECTORY = Path(__file__).resolve().parent


def get_file_path(file_name: str) -> Path | None:
    files = list(ROOT_DIRECTORY.rglob(file_name))
    print(f"{files=}")
    if not files:
        print(f'<---Файл "{file_name}" не найден!--->')
        return
    return files[0]


def set_value_in_env(file_name: str, key: str, value: str) -> None:
    path = get_file_path(file_name) or ROOT_DIRECTORY / file_name
    config = configparser.ConfigParser(interpolation=None)
    if path.exists():
        config.read(path)
    else:
        path.touch()
    print(f"{value=}")
    config["DEFAULT"][key] = '"{}"'.format(value.replace("\n", "\\n"))
    with open(path, "w") as configfile:
        config.write(configfile)


def set_settings_env():
    print(
        "---------------------------------------------",
        "Файл .env не содержит данных о конфигурации!",
        "Такое возможно, если таблица не была создана.",
        "Внесите в файл верные данные или создайте новую таблицу.",
        "---------------------------------------------",
        "Заполнить .env? [yes(y)/no(n)]: ",
        "---------------------------------------------",
        sep="\n",
    )
    choice = input()
    if choice in ["yes", "y"]:
        for field in ("email", "sheet_id"):
            print(f"Введите значение поля {field}:")
            choice = input()
            set_value_in_env(".env", field, choice)


if __name__ == "__main__":
    path_env = get_file_path(".env")
    if not path_env:
        set_settings_env()
    path_env_api = get_file_path(".env.api")
    if not path_env_api:
        try:
            path_google_api_json = get_file_path(
                "*.json") or ROOT_DIRECTORY / "*.json"
            with open(path_google_api_json, "r") as j_f:
                api_key_settings = json.load(j_f)
                for k, v in api_key_settings.items():
                    set_value_in_env(".env.api", k, v)
        except FileExistsError:
            print(
                """<---Файл .env.api не может быть создан,
                так как json-файл ключа не найден!--->"""
            )
            raise
