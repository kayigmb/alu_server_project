FROM oven/bun:latest AS build
WORKDIR /app

COPY bun.lockb package.json ./

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:latest AS production

WORKDIR /app
COPY --from=build /app .

EXPOSE 3000

CMD ["bun", "build/index.js"]
