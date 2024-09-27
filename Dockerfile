FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build \

ENV HOST 0.0.0.0
EXPOSE 3030

CMD [ "yarn", "start" ]