FROM python:3.10-bullseye

ENV PYTHONBUFFERED = 1

WORKDIR /server

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENTRYPOINT [ "/server/entrypoint.sh" ]