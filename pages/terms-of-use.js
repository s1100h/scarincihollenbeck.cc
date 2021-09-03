import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PagesBody from 'components/pages/body';
import SingleSubHeader from 'layouts/single-sub-header';
import { headers } from 'utils/helpers';
import { SITE_URL, BASE_API_URL } from 'utils/constants';

export default function TermsOfUse({ content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/terms-of-use`;

  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      <SingleSubHeader
        title="Terms of use"
        subtitle="This Terms of Use Agreement (the “Agreement”) and the Privacy Policy state the terms and conditions under which you may view, access or otherwise use the blog and all content available therein (the “Blog”)."
        span={7}
        offset={2}
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
  const request = await fetch(`${BASE_API_URL}/wp-json/single-page/page/terms-of-use`, {
    headers,
  }).then((data) => data.json());

  const { title, content, seo } = request;

  return {
    props: {
      title,
      content,
      seo,
    },
    revalidate: 1,
  };
}
