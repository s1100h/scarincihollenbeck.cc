const request = require('superagent');
const fs = require('fs');

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const SITE_URL = 'https://scarincihollenbeck.com';

// build sitemap
function buildSitemap(urlList) {
  let sitemap = `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  urlList.forEach((site)=> {
    sitemap += `<url><loc>${site}</loc></url>`
  });

  sitemap += `</urlset>`;
  
  return sitemap;
}

function buildRouteLinks(content) {
  results = []
  content.forEach((post) => {

    if(post.hasOwnProperty('slug')) {
      if(post.slug.indexOf(SITE_URL) > -1) {
        results.push(post.slug);
      }else {
        results.push(`${SITE_URL}${post.slug}`);
      }
    };

    if(post.hasOwnProperty('link')) {
      if(post.link.indexOf(SITE_URL) > -1) {
        results.push(post.link)
      }else {
        results.push(`${SITE_URL}${post.link}`);
      }
    }

    if(post.hasOwnProperty('children')) {
      if(post.children.length > 0) {
        post.children.forEach((child) => {
          results.push(child.slug);
        })
      }
    }

  });

  return results
}

async function getSiteLinks() {
  try {    
    // blog posts 
    const sitePosts = await request.get(`${SITE_URL}/wp-json/wp/v2/posts?post_per_page=2`).set(headers).then((res) => JSON.parse(res.text));
    const postLinks = await buildRouteLinks(sitePosts);

    // attorney links
    const siteAttorney = await request.get(`${SITE_URL}/wp-json/attorney-search/attorneys`).set(headers).then((res) => JSON.parse(res.text));
    const attorneyLinks = await buildRouteLinks(siteAttorney);

    // location links
    const siteLocation = await request.get(`${SITE_URL}/wp-json/location-portal/offices`).set(headers).then((res) => JSON.parse(res.text));
    const locationLinks = await buildRouteLinks(siteLocation.offices);

    // practice links
    const sitePractices = await request.get(`${SITE_URL}/wp-json/practice-portal/page`).set(headers).then((res) => JSON.parse(res.text));
    const practiceLinks = await buildRouteLinks(sitePractices.practices);

    // admin links
    const siteAdmins = await request.get(`${SITE_URL}/wp-json/admin-search/admin`).set(headers).then((res) => JSON.parse(res.text));
    const adminsLinks = await buildRouteLinks(siteAdmins.admins);

    // page links
    const sitePages = await request.get(`${SITE_URL}/wp-json/wp/v2/pages`).set(headers).then((res) => JSON.parse(res.text));
    const pagesLinks = await buildRouteLinks(sitePages);

    // all categories
    const categoryPages = await request.get(`${SITE_URL}/wp-json/wp/v2/pages`).then((res) => JSON.parse(res.text));
    const categoryLinks = await buildRouteLinks(categoryPages);
  
    // basic pages
    const basicLinks = [
      `${SITE_URL}`,
      `${SITE_URL}/attorneys`,
      `${SITE_URL}/locations`,
      `${SITE_URL}/careers`,
      `${SITE_URL}/practices`,
      `${SITE_URL}/law-practices`
    ];

    const siteMapLinks = [
      ...basicLinks,
      ...categoryLinks,
      ...postLinks,
      ...attorneyLinks,
      ...locationLinks,
      ...practiceLinks,
      ...adminsLinks,
      ...pagesLinks
    ];

    const sitemap = buildSitemap(siteMapLinks);

    fs.writeFile('./sitemap.xml', sitemap, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
  
      // success case, the file was saved
      console.log('Sitemap created!');
  });

    
  } catch(err) {
    console.log(err);
    return new Error(err);
  }
};

exports.getSiteLinks = getSiteLinks;