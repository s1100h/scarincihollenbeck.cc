import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleSubHeader from '../layouts/single-sub-header';
import FullWidth from '../layouts/full-width';
import SimpleSearch from '../components/simple-search';
import { headers } from '../utils/helpers';

export default function Custom404({ slides }) {
  const seo = {
    title: 'Page Not Found | Scarinci Hollenbeck',
    metaDescription: 'Sorry, it looks this like this page no longer exists on scarincihollenbeck.com',
    canonicalLink: '/',
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <link rel="canonical" href={`http://scarincihollenbeck.com/${seo.canonicalLink}`} />
      </Head>
      <div id="error">
        <SingleSubHeader
          title="404: Resource Not Found"
          subtitle="Sorry, the page you are looking for cannot be found."
          image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg"
          height="auto"
        />
        <FullWidth>
          <p className="lead">
            It&apos;s possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for.
          </p>


        </FullWidth>
        <Container>
          <Row>
            <Col sm={12} md={{ span: 9, offset: 3 }} className="mb-3">
              <SimpleSearch />
            </Col>
            <Col sm={12} md={{ span: 8, offset: 3 }} className="off-white">
              <h4 className="proxima-bold p-3 pb-0 mb-0 text-center">
                Or try visiting one of these pages on our site to narrow your search.
              </h4>
              <ul className="m-6">
                <li>
                  <p>
                    <Link href="/attorneys">
                      <a className="u-hover h5">
                        Attorneys
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/practice">
                      <a className="u-hover h5">
                        Practices
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/locations">
                      <a className="u-hover h5">
                        Locations
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/category/firm-news">
                      <a className="u-hover h5">
                        Firm News
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/category/firm-events">
                      <a className="u-hover h5">
                        Firm Events
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/category/firm-insights">
                      <a className="u-hover h5">
                        Firm Insights
                      </a>
                    </Link>
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();

  return {
    props: {
      slides,
    },
  };
}
