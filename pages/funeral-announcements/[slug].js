import SitePage from 'components/pages/BasicPageContent';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { basicPagesQuery } from 'requests/graphql-queries';

/** Fetch page data from WP GRAPHQL API */
const getBasicPageContent = async (slug) => {
  const data = await fetchAPI(basicPagesQuery, {
    variables: { slug },
  });
  return data?.pageBy;
};

export async function getStaticPaths() {
  const pages = [
    'passing-attorney-harvey-r-poe',
    'passing-attorney-david-a-einhorn',
    'the-passing-of-harold-friedman',
    'the-passing-of-peter-r-yarem',
  ];
  const paths = pages.map((url) => `/funeral-announcements/${url}`);

  return {
    paths,
    fallback: 'blocking',
  };
}

/** Set funeral page data to props */
export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const request = await getBasicPageContent(slug);

  if (!request) {
    return {
      notFound: true,
    };
  }

  const { title, content, seo } = request;

  return {
    props: {
      title,
      content,
      seo,
      slug: params.slug,
    },
    revalidate: 86400,
  };
};

/** Funeral pages component - passing-attorney-harvey-r-poe, passing-attorney-david-a-einhorn,    */
const FuneralAnnouncement = ({
  title, content, seo, slug,
}) => {
  let extractSubTitle = '';
  let subTitle = '';
  let bodyContent = '';

  if (content) {
    extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    subTitle = extractSubTitle !== null
      ? extractSubTitle[0].replace(/<[^>]*>?/gm, '')
      : '';
    bodyContent = content.replace(subTitle, '');
  }

  const canonicalUrl = `${PRODUCTION_URL}/${slug}`;

  const sitePageProps = {
    bodyContent,
    canonicalUrl,
    seo,
    site: {
      title,
      description: subTitle,
    },
  };

  return <SitePage {...sitePageProps} />;
};

export default FuneralAnnouncement;
