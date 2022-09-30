import { CURRENT_DOMAIN, BASE_API_URL, headers } from 'utils/constants';
import { POST_TYPE_REWRITES } from 'utils/rewrites';

/** get all the administration urls */
const getAdministrationPaths = async () => {
  const url = `${BASE_API_URL}/wp-json/admin-search/admin`;
  const request = await fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.admins.map((a) => a.link);

  return paths;
};

/** get all the attorney urls */
const getAttorneyPaths = async () => {
  const url = `${BASE_API_URL}/wp-json/attorney-search/attorneys`;
  const request = await fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
};

/** get all the careers urls */
const getCareersPaths = async () => {
  const url = `${BASE_API_URL}/wp-json/career-portal/careers`;
  const request = await fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.careers.map((c) => `/career${c.slug}`);

  return paths;
};

/** get all the author urls */
const getAuthorPaths = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/author/list`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.map((a) => `/library/author/${a}`);

  return paths;
};

/** get all the category urls */
const getCategoryPaths = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/wp/v2/categories?per_page=100`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.map(({ slug }) => `/library/category/${slug}`);

  return paths;
};

/** get all the location urls for a category */
const getLocationPaths = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/location-portal/offices`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  const paths = request.offices.map((o) => o.slug);

  return paths;
};

/** get all the practice page urls */
const getPracticePaths = async (isArticles) => {
  const request = await fetch(`${BASE_API_URL}/wp-json/practice-portal/all-links`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const genPath = (slug) => (isArticles ? `/practice/${slug}/articles` : `/practice/${slug}`);

  const paths = await request.map((slug) => genPath(slug));
  return paths;
};

/** get all page urls from the site */
const getCurrentPublishedPages = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/wp/v2/pages?per_page=100`)
    .then((data) => data.json())
    .catch((err) => err);

  const publishedPages = request
    .filter((page) => page.status === 'publish')
    .map((page) => page.slug);

  return publishedPages;
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
  const postPaths = POST_TYPE_REWRITES.map(({ source }) => source.replace('/:path*', ''));

  const modAttorneyPaths = attorneyPaths.map(({ link }) => `/attorney${link}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
        ${adminPaths
    .map(
      (url) => `
              <url>
                <loc>${baseUrl}${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
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
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
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
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
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
                      <priority>1.0</priority>
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
                      <changefreq>monthly</changefreq>
                      <priority>1.0</priority>
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
                        <changefreq>monthly</changefreq>
                        <priority>1.0</priority>
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
                          <changefreq>monthly</changefreq>
                          <priority>1.0</priority>
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
                            <changefreq>monthly</changefreq>
                            <priority>1.0</priority>
                          </url>
                        `,
    )
    .join('')} 
        ${postPaths
    .map(
      (url) => `
                            <url>
                              <loc>${baseUrl}${url}</loc>
                              <lastmod>${new Date().toISOString()}</lastmod>
                              <changefreq>monthly</changefreq>
                              <priority>1.0</priority>
                            </url>
                          `,
    )
    .join('')}      
    </urlset>
  `;
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400, stale-while-revalidate');
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
