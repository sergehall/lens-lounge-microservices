# Lens Lounge Microservices

A modular, event-driven microservices project built with **NestJS**, **PostgreSQL**, **Kafka**, and **React**, using a modern monorepo setup with **Yarn Workspaces** and **Plug'n'Play**.

This project is a hands-on implementation of microservices architecture, event-based communication, and clean code principles like **SOLID** and **Hexagonal Architecture**.

---

## 📦 Tech Stack

### Backend
- **Node.js / NestJS** — Main application framework
- **PostgreSQL** — Database (via TypeORM)
- **Kafka** — Message broker for async communication
- **Docker / Docker Compose** — Kafka, Zookeeper setup
- **TypeORM** — ORM for relational database
- **Yarn Workspaces** — Monorepo package management

### Frontend
- **React (CRA)** — Frontend app
- **Fetch API** — Communication with API Gateway
- **CORS & Proxy** — Smooth development setup

---

## 🚀 Features

- Microservices-based structure: `api-gateway`, `payment-service`, `frontend`
- Kafka-based communication (`payment-created` topic)
- PostgreSQL integration and message persistence
- Monorepo setup with Yarn Berry and Plug'n'Play
- Basic CORS configuration and reverse proxy for frontend
- Ready for CI/CD: Docker, Git, Kubernetes, Jenkins (future-ready)

---

## 🧠 Architectural Principles

- **SOLID**
- **Hexagonal Architecture**
- **Event-driven architecture**
- **SAGA (planned)**
- **Domain-based modular design**

---

## 📁 Monorepo Structure

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute this code for learning or personal use.  
Attribution appreciated but not required.


