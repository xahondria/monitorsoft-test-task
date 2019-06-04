#FROM node:8-alpine
#
#WORKDIR /app
#
#COPY package.json /app/package.json
#COPY package-lock.json /app/package-lock.json
#
#RUN npm i
#
#COPY angular.json /app/angular.json
#COPY tsconfig.json /app/tsconfig.json
#COPY tslint.json /app/tslint.json
#COPY src /app/src
#
#RUN npm run build
#
#WORKDIR /app/dist/ms-test-task
#
#RUN npm i -g static-server
#
#EXPOSE 9080
#
#CMD ["/usr/local/bin/static-server", "--not-found", "index.html", "--port", "9080"]


FROM nginx
COPY dist/ms-test-task /usr/share/nginx/html
