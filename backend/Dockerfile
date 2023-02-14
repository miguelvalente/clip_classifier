FROM  python:3.10-slim as base

ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y gcc libffi-dev g++
WORKDIR /backend

RUN pip install poetry

COPY . .

RUN poetry config virtualenvs.create false
RUN poetry install --no-interaction --no-ansi

EXPOSE 8000
