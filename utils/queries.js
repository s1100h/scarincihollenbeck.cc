import { BASE_API_URL, headers } from 'utils/constants';

const fetch = require('node-fetch');

/** Get page content by page url */
const getPageContent = async (slug) => {
  const request = await fetch(`${BASE_API_URL}/wp-json/single-page/page/${slug}`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

/** Get office location content */
const getLocationContent = async (slug) => {
  const [locations, currentOffice, currentOfficePosts] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/location-portal/offices`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/individual-location/office/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/individual-location/posts/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [locations, currentOffice, currentOfficePosts];
};

// Queries for pages/covid-19-crisis-management...
const getCovid19BasedPages = async (slug, id) => {
  const [request, posts] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/single-page/page/${slug}`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/posts?categories=${id}&per_page=100`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return [request, posts];
};

module.exports = {
  getPageContent,
  getLocationContent,
  getCovid19BasedPages,
};
