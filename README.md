# Routis

Anonymous course review platform for the University of Oulu. Students can submit reviews of courses without creating an account, with optional email-based verification for added credibility.

## Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS 4, TypeScript
- **Backend:** FastAPI, SQLAlchemy, Pydantic v2, Python 3.13
- **Database:** PostgreSQL 18, Alembic (migrations)
- **Cache:** Redis 7
- **Infrastructure:** Docker Compose

## Getting Started

Read [Contributing Guidelines](CONTRIBUTING.md)

```bash
cp .env.example .env
docker compose up
```

- Web: http://localhost:3000
- API: http://localhost:8000
- API docs: http://localhost:8000/docs

## Project Structure

```
apps/
  web/          # Next.js frontend
  api/          # FastAPI backend
packages/
  shared/       # Shared schemas & generated types
docs/           # Architecture docs, ADRs, runbooks
infra/          # Deployment config
```

## Development

**Frontend:**

```bash
cd apps/web
npm ci
npm run dev
```

**Backend:**

```bash
cd apps/api
uv sync
uv run fastapi dev main.py
```

**Lint & Test:**

```bash
# Frontend
cd apps/web && npm run lint

# Backend
cd apps/api && ruff check . && ruff format --check . && uv run pytest
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Architecture Decision Records](docs/decisions/)
- [Runbooks](docs/runbooks/)

## License

[AGPL-3.0](COPYING)
