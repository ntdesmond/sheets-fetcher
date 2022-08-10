FROM python:3.10
WORKDIR /app

# Install requirements
COPY ./docker/backend/requirements.txt /tmp
RUN python -m venv .venv && \
    ./.venv/bin/python -m pip install --no-cache-dir --upgrade pip setuptools wheel && \
    ./.venv/bin/python -m pip install --no-cache-dir -r /tmp/requirements.txt && \
    rm /tmp/requirements.txt

# Create a non-root user
RUN groupadd app && useradd app -g app

# Copy the flask app, common part and config
COPY ./backend ./backend
COPY ./common ./common
COPY ./config ./config

# Run
USER app
EXPOSE 8000

ENTRYPOINT ["./.venv/bin/gunicorn", "--config", "./config/gunicorn.conf.py", "backend:app"]