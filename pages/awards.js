import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PagesBody from 'components/pages/page/body';
import SingleSubHeader from 'layouts/single-sub-header';
import SimpleSearch from 'components/shared/simple-search';
import SubscriptionMessage from 'components/shared/subscription-message';
import CommonSidebarLinks from 'components/shared/common-sidebar-links';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';

export default function Awards({ title, content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/awards`;

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

export async function getStaticProps() {
  const request = await getPageContent('awards');
  const { content, seo } = request;

  return {
    props: {
      title: 'Awards',
      content,
      seo,
    },
    revalidate: 1,
  };
}
