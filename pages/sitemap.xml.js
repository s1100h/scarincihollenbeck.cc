import {
  CURRENT_DOMAIN,
  BASE_API_URL,
  headers,
  NEXT_PUBLIC_WP_REST_KEY,
} from 'utils/constants';
import fetch from 'node-fetch';
import { attorneysSiteMapQuery } from '../requests/graphql-queries';
import { fetchAPI } from '../requests/api';

/** get all the administration urls */
const getAdministrationPaths = async () => {
  const url = `${BASE_API_URL}/wp-json/admin-search/admin`;
  try {
    const res = await fetch(url, { headers });
    const resToJson = await res.json();
    const paths = resToJson.admins.map((a) => a.link);

    return paths;
  } catch (error) {
    console.error();
  }
};

/** get all the attorney urls */
const getAttorneyPaths = async () => {
  const res = await fetchAPI(attorneysSiteMapQuery, {});
  return res.attorneyProfiles.nodes;
};

/** get all the careers urls */
const getCareersPaths = async () => {
  const url = `${BASE_API_URL}/wp-json/wcra/v1/careers/?secret_key=${NEXT_PUBLIC_WP_REST_KEY}`;
  try {
    const res = await fetch(url, { headers });

    const resToJson = await res.json();

    return resToJson.data.map(({ slug }) => `/careers${slug}`);
  } catch (error) {
    console.error(error);
  }
};

/** get all the author urls */
const getAuthorPaths = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/author/list`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.map((a) => `/library/author/${a}`);

  return paths;
};

/** get all the category urls */
const getCategoryPaths = async () => {
  const request = await fetch(
    `${BASE_API_URL}/wp-json/wp/v2/categories?per_page=100`,
    { headers },
  )
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.map(({ slug }) => `/library/category/${slug}`);

  return paths;
};

/** get all the location urls for a category */
const getLocationPaths = async () => {
  try {
    const res = await fetch(`${BASE_API_URL}/wp-json/location-portal/offices`, {
      headers,
    });
    const resToJson = await res.json();

    return resToJson.offices.map((office) => office.slug);
  } catch (error) {
    console.error(error);
  }
};

/** get all the practice page urls */
const getPracticePaths = async (isArticles) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/wp-json/practice-portal/all-links`,
      { headers },
    );
    const resToJson = await res.json();

    const genPath = (slug) => (isArticles ? `/practices/${slug}/articles` : `/practices/${slug}`);

    return await resToJson.map((slug) => genPath(slug));
  } catch (error) {
    console.error(error);
  }
};

/** get all page urls from the site */
const getCurrentPublishedPages = async () => {
  const exception1 = 'order-confirmation';
  const exception2 = 'order-failed';
  const exception3 = 'front-page';

  const clearArrPages = [];
  try {
    const response = await (
      await fetch(
        `${BASE_API_URL}/wp-json/wcra/v1/pages/?secret_key=${NEXT_PUBLIC_WP_REST_KEY}`,
      )
    ).json();

    const publishedPages = response.data.map((page) => page.slug);
    const withoutExceptions = publishedPages.filter(
      (pageSlag) => pageSlag !== exception1
        && pageSlag !== exception2
        && pageSlag !== exception3,
    );
    return clearArrPages.concat(withoutExceptions);
  } catch (error) {
    console.error(error.message);
  }

  return clearArrPages;
};

const Sitemap = () => null;
export const getServerSideProps = async ({ res }) => {
  const baseUrl = CURRENT_DOMAIN;
  const adminPaths = await getAdministrationPaths();
  const attorneyPaths = await getAttorneyPaths();
  const careerPaths = await getCareersPaths();
  const authorPaths = await getAuthorPaths();
  const categoryPaths = await getCategoryPaths();
  const locationPaths = await getLocationPaths();
  const practicePaths = await getPracticePaths();
  const pagePaths = await getCurrentPublishedPages();

  adminPaths.unshift('/administration');
  attorneyPaths.unshift({ databaseId: 16581501, uri: '/attorneys' });
  careerPaths.unshift('/careers');
  practicePaths.unshift('/practices');
  const modAttorneyPaths = attorneyPaths.map(
    ({ uri }) => `${uri[uri.length - 1] === '/' ? uri.slice(0, -1) : uri}`,
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        ${adminPaths
    .map(
      (url) => `
              <url>
                <loc>${baseUrl}${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.9</priority>
              </url>
            `,
    )
    .join('')}   
    ${modAttorneyPaths
    .map(
      (url) => `
                <url>
                  <loc>${baseUrl}${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>daily</changefreq>
                  <priority>0.9</priority>
                </url>
              `,
    )
    .join('')}      
    ${careerPaths
    .map(
      (url) => `
                  <url>
                    <loc>${baseUrl}${url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>daily</changefreq>
                    <priority>0.9</priority>
                  </url>
                `,
    )
    .join('')}
      ${authorPaths
    .map(
      (url) => `
                    <url>
                      <loc>${baseUrl}${url}</loc>
                      <lastmod>${new Date().toISOString()}</lastmod>
                      <changefreq>monthly</changefreq>
                      <priority>0.9</priority>
                    </url>
                  `,
    )
    .join('')}
          ${categoryPaths
    .map(
      (url) => `
                    <url>
                      <loc>${baseUrl}${url}</loc>
                      <lastmod>${new Date().toISOString()}</lastmod>
                      <changefreq>daily</changefreq>
                      <priority>0.9</priority>
                    </url>
                  `,
    )
    .join('')}
    ${locationPaths
    .map(
      (url) => `
                      <url>
                        <loc>${baseUrl}${url}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>daily</changefreq>
                        <priority>0.9</priority>
                      </url>
                    `,
    )
    .join('')}
    ${practicePaths
    .map(
      (url) => `
                        <url>
                          <loc>${baseUrl}${url}</loc>
                          <lastmod>${new Date().toISOString()}</lastmod>
                          <changefreq>daily</changefreq>
                          <priority>0.9</priority>
                        </url>
                      `,
    )
    .join('')}
      ${pagePaths
    .map(
      (url) => `
                          <url>
                            <loc>${baseUrl}/${url}</loc>
                            <lastmod>${new Date().toISOString()}</lastmod>
                            <changefreq>daily</changefreq>
                            <priority>0.9</priority>
                          </url>
                        `,
    )
    .join('')}
    </urlset>
  `;
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=86400, stale-while-revalidate',
  );
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
