import { useRouter } from 'next/router';
import BasicPageContent from 'components/pages/BasicPageContent';
import SiteLoader from 'components/shared/site-loader';
import { SITE_URL } from 'utils/constants';
import { getPageContent, getCurrentPublishedPages } from 'utils/queries';

export default function BasicPage({
  content, seo, slug, title,
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
    site: {
      title,
      description: subTitle,
    },
  };
  return <BasicPageContent {...basicPageProps} />;
}

export async function getStaticPaths() {
  const requestUrls = await getCurrentPublishedPages();
  const modUrls = requestUrls.map((url) => `/basic-page/${url}`);

  return {
    paths: modUrls || [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
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
}
