FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY server.js index.html ingredients.json ./

ENV PORT=3000
EXPOSE 3000

RUN corepack enable

CMD ["pnpm", "start"]
