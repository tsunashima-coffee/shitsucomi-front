FROM node:12.12.0-alpine

WORKDIR /usr/src/app

RUN apk update && \
    npm install -g npm @vue/cli && \
    npm install -g drakov && \
    npm install vuex --save && \
    npm install axios && \
    npm install --save axios-mock-adapter
