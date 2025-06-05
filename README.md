# Lens Lounge Microservices

A modular, event-driven microservices architecture built with **NestJS**, **PostgreSQL**, **Kafka**, and **React**, organized as a modern monorepo using **Yarn Workspaces** and **Plug'n'Play**.

This project is a hands-on implementation of microservices architecture, event-based communication, and clean code principles like **SOLID** and **Hexagonal Architecture**.

---

## Tech Stack

### Backend
- **Node.js / NestJS** — Main application framework
- **PostgreSQL** — Database (via TypeORM)
- **Kafka** — Message broker for async communication
- **Docker / Docker Compose** — Kafka, Zookeeper setup
- **TypeORM** — ORM for relational database
- **Yarn Workspaces** — Monorepo package management

### Frontend
- **React + Vite** — Fast and modern frontend setup
- **Fetch API** — Communication with API Gateway
- **CORS & Proxy** — Smooth development setup

---

## Features

- Microservices-based structure: `api-gateway`, `payment-service`, `frontend`
- Asynchronous communication between services via Kafka
- PostgreSQL integration and message persistence
- Monorepo setup with Yarn Berry and Plug'n'Play
- Basic CORS configuration and reverse proxy for frontend
- Ready for CI/CD: Docker, Git, Kubernetes, Jenkins (future-ready)

---

## Architectural Principles

- **SOLID**
- **Hexagonal Architecture**
- **Event-driven architecture**
- **SAGA (planned)**
- **Domain-based modular design**

---

## Monorepo Structure

---

## Dependency Constraints (`constraints.pro`)

This project uses [Yarn Constraints](https://yarnpkg.com/features/constraints) to enforce consistent dependency boundaries across workspaces.

### Enforced Rules:

```prolog
% Enforce exact frontend library versions to avoid version drift
gen_enforced_dependency("frontend", "react", "^19.1.0").
gen_enforced_dependency("frontend", "react-dom", "^19.1.0").
gen_enforced_dependency("frontend", "vite", "^6.3.5").

% Prevent UI libraries from leaking into the shared workspace
% The shared workspace should contain only pure business logic or types
gen_invalid_dependency("shared", "react").
gen_invalid_dependency("shared", "react-dom").
gen_invalid_dependency("shared", "styled-components").
gen_invalid_dependency("shared", "vite").

% Block UI/frontend-specific dependencie

