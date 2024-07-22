FROM oven/bun:slim

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

RUN bun install

CMD [ "bun", "index.ts" ]