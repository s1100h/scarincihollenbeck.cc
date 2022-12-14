import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { SITE_URL } from 'utils/constants';
import HolidayPage from 'components/pages/HolidayPage';
import { fetchAPI } from 'utils/api';
import { holidayPageQuery } from 'utils/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch page data from WP GRAPHQL API */
const getBasicPageContent = async () => {
  const data = await fetchAPI(holidayPageQuery);
  return data?.page;
};

/** Set holiday page data to props */
export const getServerSideProps = async ({ params }) => {
  const request = await getBasicPageContent();

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
    },
  };
};

/** firm holiday page component */
const FirmHoliday = ({ title, content, seo }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  let extractSubTitle = '';
  let subTitle = '';
  let bodyContent = '';

  if (content) {
    extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
    bodyContent = content.replace(subTitle, '');
  }

  const canonicalUrl = `${SITE_URL}/happy-holidays`;

  const holidayPageProps = {
    canonicalUrl,
    title,
    subTitle,
    bodyContent,
    seo,
  };

  return <HolidayPage {...holidayPageProps} />;
};

export default FirmHoliday;
