import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import SitePage from 'components/pages/BasicPageContent';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { basicPagesQuery } from 'requests/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch page data from WP GRAPHQL API */
const getBasicPageContent = async (slug) => {
  const data = await fetchAPI(basicPagesQuery, {
    variables: { slug },
  });
  return data?.pageBy;
};

/** Set funeral page data to props */
export const getServerSideProps = async ({ params }) => {
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
  };
};

/** Funeral pages component - passing-attorney-harvey-r-poe, passing-attorney-david-a-einhorn,    */
const FuneralAnnouncement = ({
  title, content, seo, slug,
}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

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

  const canonicalUrl = `${PRODUCTION_URL}/funeral-announcements/${slug}`;

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
