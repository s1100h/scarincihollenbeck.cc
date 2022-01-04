import {
  getAdministrationPaths,
  getAttorneyPaths,
  getCareersPaths,
  getAuthorPaths,
  getCategoryPaths,
  getLocationPaths,
  getPracticePaths,
} from 'utils/queries';
import { FIRM_PAGES, FUNERAL_SLUGS, CURRENT_DOMAIN } from 'utils/constants';

import fs from 'fs';

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

  const staticPages = fs
    .readdirSync('pages')
    .filter(
      (staticPage) => ![
        '_app.js',
        '_document.js',
        '_error.js',
        'sitemap.xml.js',
        'career',
        'attorney',
        'api',
        'post',
        'site-forms',
        'index.js',
        'firm-pages',
        'location',
        'library',
        'holiday',
      ].includes(staticPage),
    )
    .map((staticPagePath) => `${baseUrl}/${staticPagePath.replace('.js', '')}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
    .map(
      (url) => `
        <url>
          <loc>${url}</loc>
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
