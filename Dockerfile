ARG APP_HOME=/home/node/app

# ビルド
FROM node:14.17 as build
WORKDIR ${APP_HOME}

COPY ./app ${APP_HOME}
RUN yarn install
RUN yarn build

# nginxでデプロイ
FROM nginx:alpine
COPY --from=build ${APP_HOME}/build /var/www/html
COPY ./nginx /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]