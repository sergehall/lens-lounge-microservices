# ----------- BUILD STAGE ----------- #
FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN corepack enable && yarn install

WORKDIR /app/payment-service
RUN yarn build

# ----------- RUNTIME STAGE ----------- #
FROM node:20-slim AS runner

WORKDIR /app

# Copy monorepo root files needed for PnP
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.pnp.cjs ./
COPY --from=builder /app/.pnp.loader.mjs ./

# Copy compiled code
COPY --from=builder /app/payment-service ./payment-service

# Enable corepack and focus only required workspace
RUN corepack enable && yarn workspaces focus --production payment-service

# PnP requires setting NODE_OPTIONS
ENV NODE_OPTIONS="--require /app/.pnp.cjs"

WORKDIR /app/payment-service
CMD ["node", "dist/main.js"]
