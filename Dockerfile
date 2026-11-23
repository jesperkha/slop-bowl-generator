FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY server.js index.html ingredients.json manifest.webmanifest icon-512.png ./

ENV PORT=3000
EXPOSE 3000

RUN corepack enable

CMD ["pnpm", "start"]
