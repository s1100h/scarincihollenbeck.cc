FROM node:latest

# create api dir for caching workers
RUN mkdir /src

WORKDIR /src
ADD app /src
RUN npm install
RUN npm rebuild node-sass

EXPOSE 7900
EXPOSE 3000

CMD npm run start