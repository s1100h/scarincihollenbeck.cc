FROM node:latest as app

WORKDIR /home/app
COPY app /home/app

RUN npm install

ARG ADMIN_SITE
ARG CACHED_API
ARG FORMS_API
ARG FEED_API

ENV ADMIN_SITE=$ADMIN_SITE
ENV CACHED_API=$CACHED_API
ENV FORMS_API=$FORMS_API
ENV FEED_API=$FEED_API

RUN npm run build

FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=app /home/app/dist /usr/share/nginx/html
COPY nginx-conf/ /etc/nginx/conf.d