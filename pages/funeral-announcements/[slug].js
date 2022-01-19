import { useRouter } from 'next/router';
import SitePage from 'components/pages/BasicPageContent';
import SiteLoader from 'components/shared/SiteLoader';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';

/** Set funeral page data to props */
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
    subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
    bodyContent = content.replace(subTitle, '');
  }

  const canonicalUrl = `${SITE_URL}/funeral-announcements/${slug}`;

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
