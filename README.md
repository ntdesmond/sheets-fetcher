# Google sheets fetcher

## Launching

### Prerequisites

- Docker
- Docker Compose
- Google Cloud API key with access to Sheets API ([see StackOverflow](https://stackoverflow.com/a/46583300))

### Process

1. Clone the repo
2. Copy/Rename `.env.example` to `.env` and modify it to use your own settings
3. Run `docker compose up -d` to run containers in background

With default settings backend will be started at port 8000, and frontend at port 80, accessible by address <http://127.0.0.1>.

## Запуск

### Требования

- Docker
- Docker Compose
- API ключ Google Cloud с доступом к Sheets API ([см. StackOverflow](https://stackoverflow.com/a/46583300))

### Процесс

1. Склонируйте репозиторий
2. Скопируйте/переименуйте `.env.example` в `.env` и поменяйте настройки в файле на свои
3. Выполните `docker compose up -d` чтобы запустить контейнеры в фоне.

При стандартных настройках бэкэнд будет запущен на порту 8000, а фронтэнд — на порту 80, и будет доступен по адресу <http://127.0.0.1>.
