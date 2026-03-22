# ts-api BOILERPLATE CODE

REST API built with **Express**, **TypeORM** and **PostgreSQL**, fully containerised with Docker.

---

## Requirements

- [Docker](https://www.docker.com/)
- [Make](https://www.gnu.org/software/make/)
- Node.js 20+ (only needed to run lint/prettier locally)

---

## Getting started with Docker

Copy the environment file and fill in your values:

```bash
cp .env.example .env
```

Then bring everything up:

```bash
make start
```

This builds the Node image and starts both the `api` and `postgres` containers. The API will be available at `http://localhost:3000`.

---

## Environment variables

| Variable | Description |
|---|---|
| `DB_HOST` | Postgres hostname (`postgres` inside Docker) |
| `DB_PORT` | Postgres port (default `5432`) |
| `DB_USERNAME` | Postgres user |
| `DB_PASSWORD` | Postgres password |
| `DB_NAME` | Database name |

---

## Make commands

### App

| Command | Description |
|---|---|
| `make start` | Build images and start all containers |
| `make stop` | Stop and remove containers |

### Migrations

| Command | Description |
|---|---|
| `make migration-run` | Run all pending migrations |
| `make migration-revert` | Revert the last migration |
| `make migration-show` | List migrations and their status |
| `make migration-generate name=MigrationName` | Generate a migration from entity changes |

> Migrations run **inside the `api` container**, so `make start` must be running first.

> You must remove the api container for the code to reload in the container before running migrations.

### Code quality

| Command | Description |
|---|---|
| `make lint` | Check for lint errors |
| `make lint-fix` | Auto-fix lint errors |
| `make prettier` | Check formatting |
| `make prettier-fix` | Auto-fix formatting |

