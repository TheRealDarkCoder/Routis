# Contributing to Routis

## Prerequisites

- Docker + Docker Compose plugin
- Node.js 22+
- Python 3.13+ with [uv](https://docs.astral.sh/uv/getting-started/installation/)
- Git

## Local setup

```bash
git clone git@github.com:TheRealDarkCoder/routis.git
cd routis
cp .env.example .env
docker compose up
```

| Service  | URL                          |
|----------|------------------------------|
| Web      | http://localhost:3000        |
| API      | http://localhost:8000        |
| API docs | http://localhost:8000/docs   |

**Run API tests:**
```bash
docker compose exec api uv run pytest
```

**Regenerate the TypeScript API client** after any backend route or schema change (from root folder):
```bash
npm run codegen
```
Commit the generated output — CI will catch drift if you forget.

## Picking up an issue

- Issues labelled `difficulty/starter` are a good entry point
- Leave a comment on the issue before starting so we don't duplicate work
- If you have a question, ask it on the issue — not in a private message

## Opening a pull request

Branch naming: `feat/M1/short-description`, `fix/M0/short-description`, `chore/short-description`

```bash
git checkout develop
git pull
git checkout -b feat/M1/your-feature
```

Open your PR against `develop`, not `main`. Fill in the [PR template](/.github/pull_request_template.md) — the checklist is short. A maintainer will review within a few days.

`main` is the production branch. It only receives merges from `develop` via maintainers.
