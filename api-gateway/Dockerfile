# ----------- Build Stage -----------
FROM node:20 AS builder

WORKDIR /app

COPY . .
RUN corepack enable && yarn install --immutable
RUN yarn workspaces focus api-gateway
WORKDIR /app/api-gateway
RUN yarn build

# ----------- Runtime Stage -----------
FROM node:20-slim AS runner

WORKDIR /app

RUN corepack enable

# Copy only what's needed for running
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/.pnp.loader.mjs ./.pnp.loader.mjs

# Copy the already-built service
COPY --from=builder /app/api-gateway ./api-gateway

# No need to refocus production deps — everything is already focused and installed
# Set Plug'n'Play loader
ENV NODE_OPTIONS="--require /app/.pnp.cjs"

WORKDIR /app/api-gateway
CMD ["node", "dist/main.js"]
