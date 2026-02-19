FROM node:22-alpine

# Install build tools needed for native addons (better-sqlite3)
RUN apk add --no-cache python3 make g++

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies with frozen lockfile for deterministic builds
RUN pnpm install --frozen-lockfile --prod

# Copy application source
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]


