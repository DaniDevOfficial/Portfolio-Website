FROM node:14 as bobTheBuilder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged

COPY --from=bobTheBuilder /app/build /usr/share/nginx/html

EXPOSE 8080
