FROM node:latest

# create api dir for caching workers
RUN mkdir /src

WORKDIR /src
ADD app /src
RUN npm install

CMD npm run start
