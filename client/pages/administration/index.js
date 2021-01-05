import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import AttorneyCard from 'components/attorney-card';
import { headers, sortByKey } from 'utils/helpers';

export default function Administration({ admins, seo }) {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <SingleSubHeader
        image="/images/attorney-archive-header-jpg.jpg"
        title="Administration"
        subtitle=" In order to fulfill the varying needs of our clients, the firm's group of attorneys rely on the support of Scarinci Hollenbeck's Administration group."
      />
      <FullWidth>
        <Container className="p-3 pt-4 border">
          <Row>
            {sortByKey(admins, 'orderBy').map((admin) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                key={admin.id}
                className="mb-3"
              >
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
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [restResponse] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/admin-search/admin', { headers }).then((data) => data.json()),
  ]);

  return {
    props: {
      seo: {
        title: 'Administration Directors & Managers | Scarinci Hollenbeck',
        metaDescription:
          "In Scarinci Hollenbeck's administration archive, you can find the professionals behind the attorneys managing the business aspects of the firm.",
        canonicalLink: 'administration',
      },
      admins: restResponse.admins,
    },
  };
}
