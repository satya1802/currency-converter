# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `c53c294` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
This is a generated two-part application: a Vite + React 19 single-page frontend with all screens already built against approved designs but currently running on seeded sample data, and a FastAPI backend that is still just a scaffold (only a /health endpoint is implemented; no data model or business routes exist yet). The backend persists to SQLite by default for zero-friction local runs, with PostgreSQL and Redis available via docker-compose for the approved architecture, and the frontend is wired to call the backend through a single fetch helper once screens are connected.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js (for Vite 6 / React 19 / npm scripts)
- Python 3.12
- pip
- Docker and Docker Compose (optional, for Postgres/Redis via docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository
2. Copy .env.example to .env and adjust values as needed
3. cd backend && pip install -r requirements.txt
4. (optional) docker-compose up -d to start Postgres and Redis containers
5. cd frontend && npm install
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `cd backend && uvicorn app.main:app --reload` | Runs the FastAPI backend with auto-reload; serves /health and the OpenAPI docs |
| frontend dev | `cd frontend && npm run dev` | Starts the Vite dev server for the React SPA |
| frontend build | `cd frontend && npm run build` | Bundles the app with Vite (does not typecheck) |
| frontend preview | `cd frontend && npm run preview` | Serves the production build locally |
| docker services | `docker-compose up -d` | Starts PostgreSQL 16 and Redis 7 containers defined in docker-compose.yml |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `backend` | FastAPI service: app package, Dockerfile, requirements, test config |
| `backend/app` | Application code: main.py (entrypoint), database.py (engine/session), models.py (SQLAlchemy models, currently empty), schemas.py (Pydantic schemas, includes StubResponse), routers/ (one router per architecture component), services.py |
| `backend/tests` | Pytest test suite, e.g. test_health.py |
| `frontend` | Vite + React SPA: source, config, Playwright e2e tests |
| `frontend/src` | App source: main.tsx entrypoint, lib/ (api client, UI/icon vocabulary, navigation helpers), index.css (brand tokens) |
| `frontend/e2e` | Playwright acceptance test specs |
| `.quorq` | Platform metadata (handoff.json) for the Quorq AI SDLC platform |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend routes are generated as stubs returning a typed StubResponse until implemented, keeping the OpenAPI document complete from the start
- One FastAPI router per architecture component that owns endpoints (backend/app/routers/)
- SQLAlchemy models all inherit from the shared Base in database.py; tables are created via Base.metadata.create_all on startup (no migrations yet)
- Backend configuration (DATABASE_URL, ALLOWED_ORIGINS) is read from environment variables with local-friendly defaults (SQLite, localhost CORS origins)
- Backend code is linted/formatted with ruff (ruff.toml)
- Frontend screens live under src/screens (one module per approved screen) and currently render seeded sample data rather than calling the API
- Frontend API access is centralized in src/lib/api.ts (apiFetch, API_BASE_URL, API_SECRET_KEY), configured via VITE_API_BASE_URL / VITE_API_SECRET_KEY
- Frontend uses ESLint + Prettier for linting/formatting, and Tailwind CSS v4 via the Vite plugin
- Vitest component tests are colocated with the components they test; Playwright e2e tests live separately under frontend/e2e
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend tests | `cd backend && pytest` | Runs the pytest suite (pythonpath=. so `app` imports correctly) |
| backend lint | `cd backend && ruff check .` | Lints the backend Python code |
| backend format | `cd backend && ruff format .` | Formats the backend Python code |
| frontend unit tests | `cd frontend && npm test` | Runs Vitest component tests |
| frontend lint | `cd frontend && npm run lint` | Runs ESLint over the frontend app |
| frontend typecheck | `cd frontend && npm run typecheck` | Runs tsc --noEmit (not run by the build) |
| frontend e2e | `cd frontend && npm run test:e2e:install && npm run test:e2e` | Installs the Chromium browser then runs Playwright acceptance tests; builds/serves the frontend and starts the backend from backend/.venv unless E2E_BASE_URL is set |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend requests to the backend are blocked by CORS | Set ALLOWED_ORIGINS (comma-separated) to the frontend's origin; the backend defaults to allowing only http://localhost:5173 and http://127.0.0.1:5173 |
| Backend needs a real database instead of the default SQLite file | Set DATABASE_URL (e.g. to the Postgres instance from docker-compose.yml) before starting uvicorn |
| npm run test:e2e fails to start the backend | The Playwright config expects a Python venv at backend/.venv with dependencies installed (backend/.venv/bin/python); create it and install backend/requirements.txt there, or set E2E_BASE_URL to point at an already-running deployment instead |
| `npm run build` succeeds but the app has type errors | Run `npm run typecheck` (tsc --noEmit) separately, since the build does not typecheck |
<!-- sdlc:auto:end troubleshooting -->
