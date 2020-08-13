# Scarinci Hollenbeck Website

## Description

This repo contains a family of microservices that make up [scarincihollenbeck.com](https://scarincihollenbeck.com). Below you'll find a breakdown and details of each microserivce.

## Microservices

### Admin

Found in the directory ```admin```, this service is a WordPress installation that contains all the data on scarincihollenbeck.com. In addition to blog posts, and pages this WordPress Install also has a list of Custom Post Types.

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
  *[GET] /wp-json/admin-search/admin
* Get the contents on the site page /attorneys (returns an object)
  * [GET] /wp-json/attorney-search/practices
  * [GET] /wp-json/attorney-search/attorneys
  * [GET] /wp-json/attorney-search/meta
  * [GET] /wp-json/attorney-search/designations
  * [GET] /wp-json/attorney-search/office-locations

### Client

Contains the client side application fo scarincihollenbeck. This app is built using the React.js framework Next.js.


