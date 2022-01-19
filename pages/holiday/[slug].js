import { useRouter } from 'next/router';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';
import SiteLoader from 'components/shared/SiteLoader';
import HolidayPage from 'components/pages/HolidayPage';

/** Set holiday page data to props */
export const getServerSideProps = async ({ params }) => {
  const request = await getPageContent(params.slug);

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

/** firm holiday page component */
const FirmHoliday = ({
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
    subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
    bodyContent = content.replace(subTitle, '');
  }

  const canonicalUrl = `${SITE_URL}/holiday/${slug}`;

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
