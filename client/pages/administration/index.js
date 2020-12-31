import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import AttorneyCard from 'components/attorney-card';
import client from 'utils/graphql-client';
import { allAdministraionQuery } from 'queries/administration';

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
            {admins.map((a) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                key={a.node.administration.phoneExtension}
                className="mb-3"
              >
                <AttorneyCard
                  image={a.node.featuredImage.node.sourceUrl}
                  name={a.node.administration.name}
                  link={a.node.uri}
                  title={a.node.administration.title}
                  number={`201-896-4100 ${a.node.administration.phoneExtension}`}
                  email={a.node.administration.email}
                  width="81px"
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
  const allAdministrationContent = await client.query(allAdministraionQuery, {});

  return {
    props: {
      seo: {
        title: 'Administration Directors & Managers | Scarinci Hollenbeck',
        metaDescription:
          "In Scarinci Hollenbeck's administration archive, you can find the professionals behind the attorneys managing the business aspects of the firm.",
        canonicalLink: 'administration',
      },
      admins: allAdministrationContent.data.administrations.edges,
    },
  };
}
