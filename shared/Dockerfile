# ----------- Build Stage -----------
FROM node:20 AS builder

WORKDIR /app

# Copy the full monorepo for workspace resolution
COPY . .

# Enable Corepack and install dependencies (strict to lockfile)
RUN corepack enable && yarn install --immutable

# Focus dependencies only for the shared workspace
RUN yarn workspaces focus @lens-lounge/shared

# Build the shared workspace
WORKDIR /app/shared
RUN yarn build

# ----------- Runtime Stage -----------
FROM node:20-slim AS runner

WORKDIR /app

RUN corepack enable

# Copy only the necessary files for runtime (Yarn PnP)
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/.pnp.loader.mjs ./.pnp.loader.mjs

# Copy the built shared package
COPY --from=builder /app/shared ./shared

# Set PnP loader env var
ENV NODE_OPTIONS="--require /app/.pnp.cjs"

# For this image, we just expose the built dist (no CMD needed)
WORKDIR /app/shared
