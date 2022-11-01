FROM node:17.6.0

WORKDIR /usr/src/app

RUN npm install -g npm@latest && npm install create-next-app