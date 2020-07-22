import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BreadCrumb from 'components/singlecareer/breadcrumb';
import Body from 'components/singlecareer/body';
import Sidebar from 'components/singlecareer/sidebar';
import { headers } from 'utils/helpers';

export default function Career({ slides, careerJson }) {
  const router = useRouter();
  return (
    <>
      {(router.isFallback) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <>
          <NextSeo
            title={careerJson.seo.title}
            description={careerJson.seo.metaDescription}
            canonical={`http://scarincihollenbeck.com/${careerJson.seo.canonicalLink}`}
          />
          <SingleSubHeader
            image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg"
            title={careerJson.title}
            subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
          />
          <div id="single-career">
            <LargeSidebar
              body={(
                <>
                  <BreadCrumb title={careerJson.title} />
                  <Body
                    title={careerJson.title}
                    position={careerJson.positionDescription}
                    contact={careerJson.contact}
                  />

                </>
)}
              sidebar={<Sidebar />}
            />
          </div>
          <Footer slides={slides} />
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const [careerJson, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-career/career/${params.slug}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  return {
    props: {
      slides,
      careerJson,
    },
  };
}
