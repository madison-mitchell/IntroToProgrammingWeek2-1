FROM node:16.15.1-slim as build
WORKDIR /dist/src/app

RUN npm i -g npm@8.13.2
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest as final
COPY --from=build /dist/src/app/dist/playlists-app /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
