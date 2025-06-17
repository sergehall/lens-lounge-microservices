# Lens Lounge Microservices

A modular, event-driven microservices architecture built with **NestJS**, **PostgreSQL**, **Kafka**, and **React**, structured as a modern **monorepo** using **Yarn Workspaces** and **Plug'n'Play (PnP)**.

This project is a hands-on implementation of scalable microservices with clean boundaries, async messaging, and strong code architecture principles including **SOLID**, **Hexagonal Architecture**, and **event-driven design**.

---

## Tech Stack

### Backend
- **Node.js / NestJS** — Scalable application framework
- **PostgreSQL** — Primary relational database (via TypeORM)
- **Apache Kafka** — Event broker for async communication
- **Zookeeper** — Kafka coordination layer (via Docker Compose)
- **TypeORM** — ORM for DB access and migrations
- **Docker Compose** — Local orchestration of services

### Frontend
- **React + Vite** — Fast modern UI build toolchain
- **Fetch API / Axios** — Communication with API Gateway
- **Zod** — Schema validation for runtime config (.env)
- **CORS / Proxy** — Seamless local-to-API development via proxying

### Tooling & Structure
- **Yarn Workspaces (Berry v4+)** — Monorepo management
- **Plug'n'Play (PnP)** — Fast, deterministic dependency resolution
- **yarn.config.cjs** — Code-based dependency constraints
- **Heroku / Vercel** — Deployment targets (Heroku: backend, Vercel: frontend)
- **GitHub Actions** — CI/CD workflows for build, test, and deploy

---

## Features

- Microservices-based structure: `api-gateway`, `payment-service`, `frontend`
- Kafka-powered async communication between services
- Monorepo with shared types, logic (`shared/`)
- Environment validation via Zod (frontend) and `.env`
- Dockerized infrastructure (Kafka, PostgreSQL)
- Integrated constraints validation with `yarn.config.cjs`
- CI/CD pipelines (GitHub Actions)
- Production deployment targets (Heroku, Vercel)

---

## Architecture Principles

- **SOLID** – Robust OOP practices
- **Hexagonal Architecture** – Ports & Adapters separation
- **Event-Driven Design** – Kafka as a messaging backbone
- **SAGA Pattern** – Planned support for long-running transactions
- **Domain-Driven Design** – Modular boundaries by responsibility

---

## Project Structure

```text
lens-lounge-microservices/
├── api-gateway/           # NestJS-based API Gateway service
├── payment-service/       # Backend microservice (NestJS)
├── frontend/              # React + Vite frontend application
├── shared/                # Shared DTOs, types, and logic
├── .github/workflows/     # CI/CD pipelines for GitHub Actions
├── .yarn/                 # Yarn v4 metadata
├── .yarnrc.yml            # Yarn configuration (e.g., nodeLinker)
├── yarn.config.cjs        # Dependency constraints (replacement for constraints.pro)
├── .pnp.cjs               # Plug'n'Play manifest (optional)
├── .env                   # Global environment variables for local use
├── .gitignore             # Git ignore rules
├── .dockerignore          # Docker ignore rules
├── docker-compose.yml     # Local development orchestration
├── package.json           # Root manifest and workspaces config
├── Procfile               # Heroku startup instruction
├── README.md              # Project overview and usage
├── yarn.lock              # Unified dependency lockfile
└── LICENSE                # License file
``` 

## Dependency Constraints (`yarn.config.cjs`)

This project uses [Yarn Constraints](https://yarnpkg.com/features/constraints) via `yarn.config.cjs`  
to enforce strict dependency boundaries, version consistency, and architectural isolation across all workspaces.

### Enforced Rules:

- **Required Yarn version**
    - All workspaces must declare `"packageManager": "yarn@4.9.2"` in their `package.json`

- **Frontend dependencies must use pinned versions**
    - `frontend` must use:
        - `react@^19.1.0`
        - `react-dom@^19.1.0`
        - `vite@^6.3.5`

- **UI libraries are disallowed in `shared`**
    - Workspaces like `shared` must not include:
        - `react`, `react-dom`, `vite`, `styled-components`

- **Backend services cannot depend on frontend tools**
    - `api-gateway` and `payment-service` must not include:
        - `react`, `vite`

- **No local version pins for `@nestjs/microservices`**
    - Only the root (`lens-lounge-microservices`) should manage `@nestjs/microservices`
    - Other workspaces must declare it as `"*"` or omit it entirely

- **Type support hinting**
    - Backend services (`api-gateway`, `payment-service`) should declare:
        - `"@nestjs/microservices": "*"`  
          for better TypeScript support with PnP mode

### Running Constraints

To validate constraints locally or in CI:

```bash
yarn constraints

