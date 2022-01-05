import {
  getAdministrationPaths,
  getAttorneyPaths,
  getCareersPaths,
  getAuthorPaths,
  getCategoryPaths,
  getLocationPaths,
  getPracticePaths,
  getCurrentPublishedPages,
} from 'utils/queries';
import { FIRM_PAGES, FUNERAL_SLUGS, CURRENT_DOMAIN } from 'utils/constants';
import { POST_TYPE_REWRITES } from 'utils/rewrites';

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
  const postPaths = POST_TYPE_REWRITES.map((post) => ({
    path: post.source.replace('/:path*', ''),
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
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
            <loc>${baseUrl}${url.path}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `,
    )
    .join('')}
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
      ${attorneyPaths
    .map(
      (url) => `
        <url>
          <loc>${baseUrl}/attorney${url.link}</loc>
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
      ${FIRM_PAGES.map(
    (url) => `
      <url>
        <loc>${baseUrl}${url.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `,
  ).join('')}
    ${FUNERAL_SLUGS.map(
    (url) => `
      <url>
        <loc>${baseUrl}${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `,
  ).join('')}
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
