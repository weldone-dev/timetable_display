ARG NODE_VERSION=21

FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
RUN apk add --no-cache libc6-compat

COPY ./app/package.json ./

RUN yarn install --pure-lockfile

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY ./app ./

RUN yarn build


EXPOSE 3000

ENTRYPOINT ["yarn","start"]