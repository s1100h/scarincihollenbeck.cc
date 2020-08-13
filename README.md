# Scarinci Hollenbeck Website

## Description

This repo contains a family of microservices that make up [scarincihollenbeck.com](https://scarincihollenbeck.com). Below you'll find a breakdown and details of each microserivce.

## Microservices

### Admin

Found in the directory ```admin```, this service is a WordPress installation that contains all the data on scarincihollenbeck.com. In addition to blog posts, and pages this WordPress Install also has a list of Custom Post Types. This service can be accessed by visiting [admin.scarincihollenbeck.com](https://admin.scarincihollenbeck.com/wp-admin). 

#### Custom Post Types

* Attorneys
* Practices
* Offices
* Administration
* Firm Pages

The purpose of this service is to allow site admins to go in and manage the content found on scarincihollenbeck.com. Each bit of content is routed to a custom REST API endpoint. 

### API Endpoins

* Get a list of all categories (returns an array)
  * [GET] /wp-json/all-categories/list
* Get the contents on site page /administration (returns an object)
  * [GET] /wp-json/admin-search/admin
* Get the contents on the site page /attorneys (returns an object)
  * [GET] /wp-json/attorney-search/practices
  * [GET] /wp-json/attorney-search/attorneys
  * [GET] /wp-json/attorney-search/meta
  * [GET] /wp-json/attorney-search/designations
  * [GET] /wp-json/attorney-search/office-locations
* Get the contents on the site page /careers (returns an object)
  * [GET] /wp-json/career-portal/careers
* Get the contents on the site page /locations (returns an object)
  * [GET] /wp-json/location-portal/offices
* Get the contents on the site page /pratices (returns an object)
  * [GET] /wp-json/practice-portal/page
  * [GET] /wp-json/practice-portal/blog-categories
  * [GET] /wp-json/practice-portal/all-links
* Get the contents on the site page /archives. This endpoint takes two parameters the first one is <slug> which is the term, and the offset which defaults to 1.
  * [GET] /wp-json/archive/query/(?P<slug>[a-zA-Z0-9-+.,%20$]+)/(?P<offset>[a-zA-Z0-9-]+)
* Get the contents on the site page /author. This endpoint takes two parameters the first one is <slug> which is the term, and the offset which defaults to 1.
  * [GET] /wp-json/author/posts/(?P<slug>[a-zA-Z0-9-+.,%20$]+)/(?P<offset>[a-zA-Z0-9-]+)

### Client

Found in the ```client``` directory, this microservice servers all the client side code for scarincihollenbeck. This microservice and website is built using the [React.js](https://reactjs.org) framework [Next.js](https://nextjs.org/).

Unlike the rest of the microservices, this service is served and hosted on a Next.js custom hosting service at [Vercel.com](https://vercel.com).

### Feed

### Forms

### Sitemaps


