FROM oven/bun:latest AS build

WORKDIR /app
COPY bun.lockb package.json ./

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:latest AS production

WORKDIR /app

COPY --from=build /app .

EXPOSE 4173

CMD ["bun", "run","preview","--host"]
