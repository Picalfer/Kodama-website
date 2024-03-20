from typing import Annotated

from fastapi import FastAPI, Request, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn


from dependencies import get_spreadsheet_service
from spreadsheets import append_to_sheet

from config import settings

# Подключение шаблонизатора Jinja2
templates = Jinja2Templates(directory=settings.root_directory)


# Создание экземпляра приложения
def make_up():
    app = FastAPI()

    path_for_static = settings.root_directory / "res"
    app.mount(
        str(path_for_static), StaticFiles(directory=str(path_for_static)), name="static"
    )
    app.mount(
        str(settings.root_directory),
        StaticFiles(directory=str(settings.root_directory)),
        name="root",
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
        return templates.TemplateResponse("main.html", {"request": request})

    # хендлер добавляющий запись в sheet Request
    @app.post("/request/")
    async def post_request(
        email: Annotated[str, Form()],
        tel: Annotated[str, Form()],
        text: Annotated[str, Form()],
        spreadsheet_service=get_spreadsheet_service()
    ):
        append_to_sheet(
            spreadsheet_service,
            settings.sheet_id,
            email=email,
            phone_number=tel,
            comment=text,
        )

        return RedirectResponse("/", status_code=303)

    return app


app = make_up()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=5050, reload=True)
