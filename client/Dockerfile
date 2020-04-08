FROM node:latest

# create api dir for caching workers
RUN mkdir /client

WORKDIR /client
ADD app/package.json /client/package.json
RUN npm rebuild node-sass
RUN npm install


EXPOSE 8500

CMD npm start