# ----------- BUILD STAGE ----------- #
FROM node:20 AS builder

WORKDIR /app

# Copy the entire monorepo to allow dependency resolution across workspaces
COPY . .

# Enable Corepack and install dependencies (strictly matching yarn.lock)
RUN corepack enable && yarn install --immutable

# Focus dependencies only for payment-service workspace
RUN yarn workspaces focus payment-service

# Build the payment-service workspace
WORKDIR /app/payment-service
RUN yarn build

# ----------- RUNTIME STAGE ----------- #
FROM node:20-slim AS runner

WORKDIR /app

# Enable Corepack
RUN corepack enable

# Copy monorepo root files needed for PnP resolution
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/.pnp.loader.mjs ./.pnp.loader.mjs

# Copy the built payment-service code
COPY --from=builder /app/payment-service ./payment-service

# Set NODE_OPTIONS to enable Plug'n'Play resolution at runtime
ENV NODE_OPTIONS="--require /app/.pnp.cjs"

WORKDIR /app/payment-service
CMD ["node", "dist/main.js"]
