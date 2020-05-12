FROM node:latest

# create api dir for caching workers
RUN mkdir /src

WORKDIR /src
ADD app /src
RUN npm install

EXPOSE 8700

CMD npm run start
