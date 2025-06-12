# ----------- Build Stage -----------
FROM node:20 AS builder

WORKDIR /app

# Copy the entire monorepo to allow dependency resolution across workspaces
COPY . .

# Enable Corepack and install dependencies (strictly matching yarn.lock)
RUN corepack enable && yarn install --immutable

# Focus dependencies only for frontend workspace
RUN yarn workspaces focus frontend

# Build the frontend workspace
WORKDIR /app/frontend
RUN yarn build

# ----------- Runtime Stage -----------
FROM nginx:alpine AS runner

# Clean default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built frontend assets from builder
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

# Optional: custom Nginx config for SPA (React Router)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
