import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PagesBody from 'components/pages/body';
import SingleSubHeader from 'layouts/single-sub-header';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';

export default function Disclaimer({ content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/disclaimer`;

  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      <SingleSubHeader
        title="Disclaimer"
        subtitle="This Terms of Use Agreement (the “Agreement”) and the Privacy Policy state the terms and conditions under which you may view, access or otherwise use the website located at http://www.sh-law.com."
        span={6}
        offset={3}
      />
      <Container>
        <Row>
          <Col sm={12}>
            <PagesBody content={bodyContent} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const request = await getPageContent('disclaimer');

  const { content, seo } = request;

  return {
    props: {
      content,
      seo,
    },
    revalidate: 1,
  };
}
