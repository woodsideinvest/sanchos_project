FROM node:lts as builder

WORKDIR /app

COPY . .

RUN rm -rf .nuxt

# Install dependencies for both development and production
RUN yarn install --prefer-offline --non-interactive

RUN yarn build


FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

ENV NODE_ENV production
ENV HOST 0.0.0.0
EXPOSE 3000

RUN yarn install --prefer-offline --pure-lockfile --non-interactive --production

CMD [ "yarn", "start" ]
