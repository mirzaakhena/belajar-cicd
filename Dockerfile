# Builder Stage
FROM node:18.16.1-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runner Stage
FROM node:18.16.1-alpine AS runner
WORKDIR /app

# Set timezone and create a non-root user in a single layer
ENV TZ=Asia/Jakarta
RUN apk add --no-cache tzdata && \
    addgroup --system --gid 1001 app && \
    adduser --system --uid 1001 app

# Copy built application from builder stage
COPY --from=builder --chown=app:app /app /app

# Switch to non-root user
USER app

# Expose port 3000 and define the command to run the app
EXPOSE 3000
CMD ["node", "dist/index.js"]
