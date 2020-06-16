import Head from 'next/head';
import { withRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import FullWidth from '../../layouts/full-width';
import AttorneyCard from '../../components/attorney-card';
import { headers } from '../../utils/helpers';
import { attorneyArchiveHeaderJPG } from '../../utils/next-gen-images';


export default function Administration({slides, admins, seo }){
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`http://scarincihollenbeck.com/${seo.canonicalLink}`} />
      </Head>
      <NavBar />
      <SingleSubHeader
        image={attorneyArchiveHeaderJPG}
        title="Administration"
        subtitle=" In order to fulfill the varying needs of our clients, the firm's group of attorneys rely on the support of Scarinci Hollenbeck's Administration group."
      />
      <FullWidth>
        <Container id="archive-admin" className="p-3 pt-4 border">
          <Row>
            { (admins.length > 0) && admins.map((a) => (
              <Col sm={12} md={6} lg={4} key={a.ID} className="mb-2">
                <AttorneyCard
                  image={a.image.url}
                  name={a.name}
                  link={a.link}
                  title={a.Title}
                  number={`201-896-4100 ${a.phone_extension}`}
                  email={a.email}
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
  )
}

export async function getStaticProps() {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const adminResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/administration-archives`, { headers });
  const aJson = await adminResponse.json();
  const slides = await sliderResponse.json();
  const { admins, seo } = aJson;

  return {
    props: {
      slides,
      seo,
      admins
    },
  }
}