import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import { createMarkup } from 'utils/helpers';
import { HOLIDAY_SLUGS, SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';
import SiteLoader from 'components/shared/site-loader';

export default function FirmHoliday({
  title, content, seo, slug,
}) {
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

  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      <SingleSubHeader title={title} subtitle={subTitle} span={7} offset={2} isHoliday />
      <FullWidth>
        <div dangerouslySetInnerHTML={createMarkup(bodyContent)} />
      </FullWidth>
    </>
  );
}

export async function getStaticPaths() {
  const urls = HOLIDAY_SLUGS.map((slug) => slug);

  return {
    paths: urls || [],
    fallback: true,
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
    revalidate: 1,
  };
}
