# SaasPro landing page: Next.js 15, served from its standalone build.
#
# Build and run from this folder:
#   docker build -t saas-landing .
#   docker run -p 3030:3030 saas-landing
#
# The NEXT_PUBLIC_* values are compiled into the JavaScript the browser loads,
# so they are build arguments, and changing one is a rebuild:
#   docker build -t saas-landing \
#     --build-arg NEXT_PUBLIC_SITE_URL=https://www.your-domain.com \
#     --build-arg NEXT_PUBLIC_API_BASE_URL=https://api.your-domain.com/api .

FROM node:24-alpine AS base
WORKDIR /app
ENV YARN_ENABLE_IMMUTABLE_INSTALLS=false \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

FROM base AS deps
# sharp, which next/image uses, resolves to the platform it is installed on.
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install

FROM base AS build
# Nothing secret may be passed this way: it ends up in the shipped JavaScript.
# The public address of the site, used for the canonical and Open Graph URLs.
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3030
# The API that receives newsletter sign-ups; empty means the form sends nothing
# and shows its error message.
ARG NEXT_PUBLIC_API_BASE_URL=
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL \
    BUILD_STANDALONE=true \
    NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM base AS runtime
ENV NODE_ENV=production
RUN apk add --no-cache libc6-compat
# The standalone bundle carries its own server and only the files it traced.
# It serves public/ and .next/static only when both sit beside it.
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
# next/image writes its optimised copies into .next/cache, which needs a tree
# the unprivileged user owns.
USER node
# HOSTNAME too: a server bound to localhost inside a container is unreachable
# from outside it.
ENV PORT=3030 \
    HOSTNAME=0.0.0.0
EXPOSE 3030
CMD ["node", "server.js"]
