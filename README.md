# Scarincihollenbeck.com Front End Microservices

## Description

This repo contains a family of microservices that make up [scarincihollenbeck.com](https://scarincihollenbeck.com). Below you'll find a breakdown and details of each microserivce.

## Microservices

### Client

Found in the ```client``` directory, this microservice serves all the client side code for scarincihollenbeck. This microservice and website is built using the [React.js](https://reactjs.org) framework [Next.js](https://nextjs.org/).

Unlike the rest of the microservices, this service is served and hosted on a Next.js custom hosting service at [Vercel.com](https://vercel.com).

<!-- Add Details About API Endpoints -->

### Sitemaps

Found in the ```sitemaps``` directory, this microservice scrapes all the pages fonud on scarincihollenbeck.com and organizes them into a sitemap file (sitemap.xml). This is a python program that is ran manually from an npm script ```npm run sitemap``` found in the ```client``` directory. Often times, you will run this npm command when you push new code to production, so the live site has an updated copy of the sitemap.xml for indexing.




