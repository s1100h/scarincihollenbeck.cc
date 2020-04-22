FROM node:latest

# create api dir for caching workers
RUN mkdir /src

WORKDIR /src
ADD app /src
RUN npm install

EXPOSE 8100

RUN npm run build
CMD npm run prod