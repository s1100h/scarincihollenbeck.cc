import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PagesBody from 'components/pages/body';
import SingleSubHeader from 'layouts/single-sub-header';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import CommonSidebarLinks from 'components/common-sidebar-links';
import SiteLoader from 'components/site-loader';
import { FUNERAL_SLUGS, SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';

export default function FuneralAnnouncement({
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

  const canonicalUrl = `${SITE_URL}/funeral-announcements/${slug}`;

  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      <SingleSubHeader title={title} subtitle={subTitle} offset={0} span={8} />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <PagesBody content={bodyContent} />
          </Col>
          <Col sm={12} md={3} style={{ marginTop: '-1.5em' }}>
            <SimpleSearch />
            <hr />
            <SubscriptionMessage />
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const urls = FUNERAL_SLUGS.map((slug) => slug);

  return {
    paths: urls || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const request = getPageContent(params.slug);

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
