FROM node:18.16.1-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN if [[ ! -d ./node_modules ]]; then npm ci; fi;
COPY . .
RUN npm run build

FROM node:18.16.1-alpine AS runner
WORKDIR /app

ENV TZ=Asia/Jakarta
RUN apk add --no-cache tzdata
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app

COPY --from=builder --chown=app:app /app /app

USER app
EXPOSE 3000

CMD ["node", "dist/index.js"]