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
  * **[GET]** ```/wp-json/all-categories/list```
* Get the contents on site page /administration (returns an object)
  * **[GET]** ```/wp-json/admin-search/admin```
* Get the contents on the site page /attorneys (returns an object)
  * **[GET]** ```/wp-json/attorney-search/practices```
  * **[GET]** ```/wp-json/attorney-search/attorneys```
  * **[GET]** ```/wp-json/attorney-search/meta```
  * **[GET]** ```/wp-json/attorney-search/designations```
  * **[GET]** ```/wp-json/attorney-search/office-locations```
* Get the contents on the site page /careers (returns an object)
  * **[GET]** ```/wp-json/career-portal/careers```
* Get the contents on the site page /locations (returns an object)
  * **[GET]** ```/wp-json/location-portal/offices```
* Get the contents on the site page /pratices (returns an object)
  * **[GET]** ```/wp-json/practice-portal/page```
  * **[GET]** ```/wp-json/practice-portal/blog-categories```
  * **[GET]** ```/wp-json/practice-portal/all-links```
* Get the contents on the site page /archives. This endpoint takes two parameters the first one is <slug> which is the term, and the offset which defaults to 1 and can be a number.
  * **[GET]** ```/wp-json/archive/query/(?P<slug>[a-zA-Z0-9-+.,%20$]+)/(?P<offset>[a-zA-Z0-9-]+)```
* Get the contents on the site page /author. This endpoint takes two parameters the first one is <slug> which is the term, and the offset which defaults to 1 and can be a number.
  * **[GET]** ```/wp-json/author/posts/(?P<slug>[a-zA-Z0-9-+.,%20$]+)/(?P<offset>[a-zA-Z0-9-]+)```
* Get the contents on the site page /category. The main endpoint takes two parameters the first one is <slug> which is the term, and <offset> which defaults to 1 and can be a number.
  * **[GET]** ```/wp-json/category/posts/(?P<slug>[a-zA-Z0-9-+.,%20$]+)```
  * **[GET]** ```/wp-json/category/firm-insights-children```
  * **[GET]** ```/wp-json/category/all```
  * **[GET]** ```/wp-json/category/sorted-categories```
* Get a list of all the firm's core practices (returns an array)
  * **[GET]** ```/wp-json/core-practices/list```
* Get the contents on the site page /firm-overview (returns an object)
  * **[GET]** ```/wp-json/firm-overview/content```
* Get the contents on the site's home page (returns an object)
  * **[GET]** ```/wp-json/front-page/news```
  * **[GET]** ```/wp-json/front-page/events```
  * **[GET]** ```/wp-json/front-page/meta```
* Get the contents for the article scroller found in the footer (returns an array)
  * **[GET]** ```/wp-json/just-in/posts```
* Get the contents on the site page /. The main endpoint take a parameter  <slug> which is the term (returns an object)
  * **[GET]** ```/wp-json/single-page/page/(?P<slug>[a-zA-Z0-9-]+)```
  * **[GET]** ```/wp-json/single-page/page-list```
* Get the contents for the quick news category page. The main endpoint take a parameter <offset> which is a number (returns an object)
  * **[GET]** ```/quick-news/posts/(?P<offset>[a-zA-Z0-9-]+)```
* Get the contents for a single administration profile. The main endpoint take a parameter <slug> which is a term (returns an object)
  * **[GET]** ```/individual-admin/admin/(?P<slug>[a-zA-Z0-9-]+)```
* Get the contents for a single attorney profile. The main endpoint take a parameter <slug> which is a term (returns an object)
  * **[GET]** ```/individual-attorney/attorney/(?P<slug>[a-zA-Z0-9-]+)```
* Get the contents for a single career profile. The main endpoint take a parameter <slug> which is a term (returns an object)
  * **[GET]** ```/individual-career/career/(?P<slug>[a-zA-Z0-9-]+)```
* Get the contents for a single location profile. The main endpoint take a parameter <slug> which is a term (returns an object)
  * **[GET]** ```/individual-location/office/(?P<slug>[a-zA-Z0-9-]+)```
  * **[GET]** ```/individual-location/posts/(?P<slug>[a-zA-Z0-9-]+)```
* Get the contents for a single practice profile. The main endpoint take a parameter <slug> which is a term (returns an object)
  * **[GET]** ```/individual-practices/practice/(?P<slug>[a-zA-Z0-9-]+)```
* Get the contents for a single blog post or news article. The main endpoint take a parameter <slug> which is a term (returns an object)
  * **[GET]** ```/single/post/(?P<slug>[a-zA-Z0-9-+.,%20$]+)/(?P<category>[a-zA-Z0-9-+.,%20$]+```

### Client

Found in the ```client``` directory, this microservice serves all the client side code for scarincihollenbeck. This microservice and website is built using the [React.js](https://reactjs.org) framework [Next.js](https://nextjs.org/).

Unlike the rest of the microservices, this service is served and hosted on a Next.js custom hosting service at [Vercel.com](https://vercel.com).

### Feed

Found in the ```feed``` directory, this microservice serves API endpoints that gather COVID-19 related articles from the following news sources.

* njbiz.com
* rssfeeds.northjersey.com
* rssfeeds.app.com
* observer.com/
* roi-nj.com

### Forms

Found in the ```forms``` directory, this microservices servers API endpoints that manage all forms on scarincihollenbeck.com. This service utilizes GMAIL API to send emails to the selected recipients from the Wordpress backend found on admin.scarincihollenbeck.com/wp-admin. These are the endpoints found in the service

* /shlaw/site/career/form
  * Manages the user's information when they are applying for a job
* /shlaw/site/contact/form
  * Managethe user's information when they fill out the contact form on either the blog posts or the contact page
* /shlaw/site/subscription/form
  * Manages the user's information when the subscribe to the firm's blogs

### Sitemaps

Found in the ```sitemaps``` directory, this microservice scrapes all the pages fonud on scarincihollenbeck.com and organizes them into a sitemap file (sitemap.xml). This is a python program that is ran manually from an npm script ```npm run sitemap``` found in the ```client``` directory. Often times, you will run this npm command when you push new code to production, so the live site has an updated copy of the sitemap.xml for indexing.




