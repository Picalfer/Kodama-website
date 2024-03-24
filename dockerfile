FROM python:3.11-slim
RUN pip install poetry==1.4.2
ENV POETRY_NO_INTERACTION=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

COPY pyproject.toml poetry.lock README.md ./
RUN poetry install --only main --no-root && rm -rf $POETRY_CACHE_DIR

COPY res ./res/
COPY src ./src/
COPY templates ./templates/
COPY base.html script.js ./

COPY .env ./src/.env
COPY .env.api ./src/.env.api



RUN poetry install --without dev 
WORKDIR /app/src

CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5050"]