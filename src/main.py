from pathlib import Path
from typing import Annotated

from fastapi import FastAPI, Request, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn

from spreadsheets import authenticate_google_api, append_to_sheet, get_sheet_id


# Подключение шаблонизатора Jinja
templatу_directory = Path(__file__).resolve().parent.parent
print(templatу_directory)
templates = Jinja2Templates(directory=templatу_directory)


# Создание экземпляра приложения
def make_up():
    app = FastAPI()

    path_for_static = Path(__file__).parent.parent / "res"
    app.mount(
        str(path_for_static), StaticFiles(directory=str(path_for_static)), name="static"
    )
    root_directory = Path(__file__).parent.parent
    app.mount(
        str(root_directory), StaticFiles(directory=str(root_directory)), name="root"
    )
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/")
    async def index(request: Request):
        return templates.TemplateResponse("base.html", {"request": request})

    # хендлер добавляющий запись в sheet Request
    @app.post("/request/")
    async def post_request(
        email: Annotated[str, Form()],
        tel: Annotated[str, Form()],
        text: Annotated[str, Form()],
    ) -> None:
        table_id = get_sheet_id()
        service, credentials = authenticate_google_api()
        print(email, tel, text)
        append_to_sheet(
            service, table_id, email=email, phone_number=tel, comment=text
        )

        return RedirectResponse("/", status_code=303)

    return app


app = make_up()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=5050, reload=True)
