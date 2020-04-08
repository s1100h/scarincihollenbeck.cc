# pull official base image
FROM node:13.12.0-alpine

# create api dir for caching workers
RUN mkdir /client

WORKDIR /client
ADD app/package.json /client/package.json
ADD app/package-lock.json /client/package-lock.json
RUN npm install
RUN npm rebuild node-sass

EXPOSE 8500

CMD npm start