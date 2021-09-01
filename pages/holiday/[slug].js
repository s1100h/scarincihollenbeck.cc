import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import { headers, createMarkup } from 'utils/helpers';
import { HOLIDAY_SLUGS } from 'utils/constants';
import SiteLoader from 'components/site-loader';

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

  const canonicalUrl = `https://scarincihollenbeck.com/holiday/${slug}`;

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
  const [aJson, postJson] = await Promise.all([
    fetch(`https://wp.scarincihollenbeck.com/wp-json/single-page/page/${params.slug}`, {
      headers,
    }).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone/law-firm-insights',
      { headers },
    ).then((data) => data.json()),
  ]);

  const { posts } = postJson;
  const { title, content, seo } = aJson;

  return {
    props: {
      title,
      content,
      posts,
      seo,
      slug: params.slug,
    },
    revalidate: 1,
  };
}
