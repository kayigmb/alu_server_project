FROM oven/bun:latest AS base

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 3000

CMD ["bun", "run", "dev"]
