# build a production version of the site
# pull official base image
FROM node:alpine

# create api dir for caching workers
RUN mkdir /src

WORKDIR /src
ADD app/package.json /src/package.json
ADD app/package-lock.json /src/package-lock.json



EXPOSE 8500
