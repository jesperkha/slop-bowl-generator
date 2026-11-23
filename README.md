# Slop Bowl Generator

## Run locally

```sh
pnpm start
```

Open http://localhost:3000.

## Build Docker image

```sh
docker build -t slop-bowl-generator .
docker run --rm -p 3000:3000 slop-bowl-generator
```

## Deploy latest build

```sh
ghcr.io/jesperkha/slop-bowl-generator:latest
```
