import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import client from 'utils/graphql-client';
import { getPageContents } from 'queries/pages';
import { createMarkup } from 'utils/helpers';

export default function HappyHolidays2020({
  title, content, seo,
}) {
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
        image="/images/red-snow1900x400.png"
        height="400px"
      />
      <FullWidth>
        <div className="mb-5" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
      </FullWidth>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const Holidays2020PageContent = await client.query(getPageContents('2020-happy-holidays'), {});

  return {
    props: {
      title: Holidays2020PageContent.data.pages.nodes[0].title,
      content: Holidays2020PageContent.data.pages.nodes[0].content,
      seo: Holidays2020PageContent.data.pages.nodes[0].seo,
    },
    revalidate: 1,
  };
}
