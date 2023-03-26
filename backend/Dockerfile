FROM python:3

ENV PYTHONUNBUFFERED 1
WORKDIR /app/backend

COPY requirements.txt .
COPY docker-entrypoint.sh /

RUN pip install -r requirements.txt
EXPOSE 8000

ENTRYPOINT ["/docker-entrypoint.sh"]
