import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import { headers, createMarkup } from 'utils/helpers';

export default function HappyHolidaysTwentyTwenty({ title, content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical="http://scarincihollenbeck.com/holiday/2020-happy-holidays"
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        span={7}
        offset={2}
        isHoliday
      />
      <FullWidth>
        <div dangerouslySetInnerHTML={createMarkup(bodyContent)} />
      </FullWidth>
    </>
  );
}

export async function getStaticProps() {
  const [aJson] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/single-page/page/2020-happy-holidays',
      { headers },
    ).then((data) => data.json()),
  ]);

  const { title, content, seo } = aJson;

  return {
    props: {
      title,
      content,
      seo,
    },
    revalidate: 1,
  };
}
