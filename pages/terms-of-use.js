import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PagesBody from 'components/pages/body';
import SingleSubHeader from 'layouts/single-sub-header';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';

const site = {
  title: 'Terms of use',
  description:
    'This Terms of Use Agreement (the “Agreement”) and the Privacy Policy state the terms and conditions under which you may view, access or otherwise use the blog and all content available therein (the "Blog").',
};
export default function TermsOfUse({ content, seo }) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/terms-of-use`;

  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={2} />
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
  const request = await getPageContent('terms-of-use');

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
