import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PagesBody from 'components/pages/body';
import SingleSubHeader from 'layouts/single-sub-header';
import { headers } from 'utils/helpers';

export default function Disclaimer({ content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical="http://scarincihollenbeck.com/awards"
      />
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
  const request = await fetch(
    'https://wp.scarincihollenbeck.com/wp-json/single-page/page/disclaimer',
    { headers },
  ).then((data) => data.json());

  const { content, seo } = request;

  return {
    props: {
      content,
      seo,
    },
    revalidate: 1,
  };
}
