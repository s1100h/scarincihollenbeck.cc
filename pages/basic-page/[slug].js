import { useRouter } from 'next/router';
import BasicPageContent from 'components/pages/BasicPageContent';
import SiteLoader from 'components/shared/SiteLoader';
import { SITE_URL } from 'utils/constants';
// import { getPageContent, getCurrentPublishedPages } from 'utils/queries';
import { getBasicPageContent } from 'utils/api';

export default function BasicPage({
  content, seo, slug, title, pageForm,
}) {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/${slug}`;

  const basicPageProps = {
    bodyContent,
    canonicalUrl,
    seo,
    pageForm,
    site: {
      title,
      description: subTitle,
    },
  };
  return <BasicPageContent {...basicPageProps} />;
}

export async function getServerSideProps({ params }) {
  const request = await getBasicPageContent(params.slug);

  const {
    title, content, seo, addFormToPage,
  } = request;

  return {
    props: {
      title,
      content,
      seo,
      pageForm: {
        enableForm: addFormToPage?.enableForm,
        formLabel: addFormToPage?.formLabel,
      },
      slug: params.slug,
    },
  };
}
