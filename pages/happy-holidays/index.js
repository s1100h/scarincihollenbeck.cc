import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { PRODUCTION_URL } from 'utils/constants';
import HolidayPage from 'components/pages/HolidayPage';
import { fetchAPI } from 'requests/api';
import { holidayPageQuery } from 'requests/graphql-queries';
import { getSubTitleFromHTML } from 'utils/helpers';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch page data from WP GRAPHQL API */
const getBasicPageContent = async () => {
  const data = await fetchAPI(holidayPageQuery);
  if (data.page.status !== 'publish') {
    return null;
  }

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

  const { clearBody, subTitle } = getSubTitleFromHTML(content);

  const canonicalUrl = `${PRODUCTION_URL}/happy-holidays`;

  const holidayPageProps = {
    canonicalUrl,
    title,
    subTitle,
    bodyContent: clearBody,
    seo,
  };

  return <HolidayPage {...holidayPageProps} />;
};

export default FirmHoliday;
