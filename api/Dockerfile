FROM node:latest

# create api dir for caching workers
RUN mkdir /src

WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

EXPOSE 8200

CMD npm run dev