FROM python:3.10
WORKDIR /app

# Install requirements
COPY ./docker/fetcher/requirements.txt /tmp
RUN python -m venv .venv && \
    ./.venv/bin/python -m pip install --no-cache-dir --upgrade pip setuptools wheel && \
    ./.venv/bin/python -m pip install --no-cache-dir -r /tmp/requirements.txt && \
    rm /tmp/requirements.txt

# Create a non-root user
RUN groupadd app && useradd app -g app

# Copy the app, common part and google credentials
COPY ./fetcher ./fetcher
COPY ./common ./common

ENTRYPOINT ["./.venv/bin/python", "-m", "fetcher"]