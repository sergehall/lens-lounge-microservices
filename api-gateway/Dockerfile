# ----------- Build Stage -----------
FROM node:20 AS builder

WORKDIR /app
COPY . .

RUN corepack enable && yarn install

# Собираем API Gateway
WORKDIR /app/api-gateway
RUN yarn build

# ----------- Runtime Stage -----------
FROM node:20-slim AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/.pnp.loader.mjs ./.pnp.loader.mjs

COPY --from=builder /app/api-gateway ./api-gateway

RUN corepack enable && yarn workspaces focus api-gateway

WORKDIR /app/api-gateway
CMD ["node", "dist/main.js"]
