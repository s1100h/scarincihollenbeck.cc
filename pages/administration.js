import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import AttorneyCard from 'components/attorney-card';
import { headers, sortByKey } from 'utils/helpers';
import { BASE_API_URL, SITE_URL } from 'utils/constants';

const seo = {
  title: 'Administration Directors & Managers | Scarinci Hollenbeck',
  metaDescription:
    "In Scarinci Hollenbeck's administration archive, you can find the professionals behind the attorneys managing the business aspects of the firm.",
  canonicalUrl: `${SITE_URL}/administration`,
};

const site = {
  title: ' Administration',
  description:
    "In order to fulfill the varying needs of our clients, the firm's group of attorneys rely on the support of Scarinci Hollenbeck's Administration group.",
};

export default function Administration({ admins }) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} offset={2} span={7} />
      <FullWidth>
        <Container className="p-3 pt-4 border">
          <Row>
            {sortByKey(admins, 'orderBy').map((admin) => (
              <Col sm={12} md={6} lg={4} key={admin.id} className="mb-3">
                <AttorneyCard
                  image={admin.image.smallUrl}
                  name={admin.name}
                  link={admin.link}
                  title={admin.title}
                  number={`201-896-4100 ${admin.phoneExtension}`}
                  email={admin.email}
                  type="/administration/[admin]"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </FullWidth>
    </>
  );
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/admin-search/admin`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  return {
    props: {
      admins: request.admins,
    },
    revalidate: 1,
  };
}
