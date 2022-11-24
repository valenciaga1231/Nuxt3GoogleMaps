# Dockerfile
FROM node:alpine as builder

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm ci
RUN npm run build

EXPOSE 3000

FROM node:alpine

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /usr/src/nuxt-app/.output  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "node", "server/index.mjs" ]