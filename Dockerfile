# Stage 1 — build the React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build optimized production files
RUN npm run build

# Stage 2 — serve the build
FROM nginx:stable-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build from previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose default nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
