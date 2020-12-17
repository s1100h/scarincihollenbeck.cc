import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import { headers } from 'utils/helpers';

export default function HappyHolidaysNineteen({
  title, content, posts, seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        image="/images/red-snow1900x400.png"
        height="400"
      />
      <FullWidth>
        <div dangerouslySetInnerHTML={createMarkup(bodyContent)} />
      </FullWidth>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const [aJson, postJson] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/2019-happy-holidays`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone/law-firm-insights`, { headers }).then((data) => data.json()),
  ]);

  const { posts } = postJson;
  const { title, content, seo } = aJson;

  return {
    props: {
      title,
      content,
      posts,
      seo,
    },
  };
}
