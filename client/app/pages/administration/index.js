import Head from 'next/head';
import { withRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import AttorneyCard from 'components/attorney-card';
import { headers } from 'utils/helpers';


export default function Administration({ slides, admins, seo }) {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <SingleSubHeader
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/attorney-archive-header-jpg.jpg"
        title="Administration"
        subtitle=" In order to fulfill the varying needs of our clients, the firm's group of attorneys rely on the support of Scarinci Hollenbeck's Administration group."
      />
      <FullWidth>
        <Container id="archive-admin" className="p-3 pt-4 border">
          <Row>
            {admins.map((admin) => (
              <Col sm={12} md={6} lg={4} key={admin.ID} className="mb-2">
                <AttorneyCard
                  image={admin.image.url}
                  name={admin.name}
                  link={admin.link}
                  title={admin.Title}
                  number={`201-896-4100 ${admin.phone_extension}`}
                  email={admin.email}
                  height="112px"
                  width="107px"
                  type="/administration/[admin]"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </FullWidth>
      <Footer slides={slides} />
    </>
  );
}

export async function getServerSideProps() {
  const [aJson, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/admin-search/admin`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  const { admins, seo } = aJson;

  return {
    props: {
      slides,
      seo,
      admins,
    },
  };
}
