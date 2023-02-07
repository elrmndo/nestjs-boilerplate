# NestJS Boilerplate

This is my NestJS Boilerplate made with ❤️.

## Prerequisites

* [Node.js](https://nodejs.org/en/) 16 (if you use nvm: `nvm use`)
* [Docker](https://www.docker.com/) 19.03.0+ (Docker Compose Version: Compose Specification)
* [Nest CLI](https://docs.nestjs.com/cli/overview) 9

## Getting Started

1. Make sure port: `8080` is available for adminer.
2. Clone the repository

```bash
## via SSH
git clone git@github.com:elrmndo/nestjs-boilerplate.git

## via HTTP
git clone https://github.com/elrmndo/nestjs-boilerplate.git
```

3. Setup environment variables

```bash
cp .env.example .env
```

4. Build the docker services (PostgreSQL, Adminer)

```bash
docker compose build
```

5. Install the dependencies

```bash

npm install
```

6. Run database migrations and seeders

```bash
# Migrations
npm run migration:run

# Seeders
npm run seeders:run
```

## Running locally

Note: Make sure docker services are running and you have installed the dependencies.

```bash
# Non watch mode
npm start

# With watch mode
npm run start:dev

# Debug mode
npm run start:debug
```

## Running tests

```bash
# Non watch mode
npm test

# With watch mode
npm run test:watch

# e2e Non watch mode
npm run test:e2e


# e2e watch mode
npm run test:e2e:watch

# coverage
npm run test:cov
```

## Swagger Documentation

TBD
