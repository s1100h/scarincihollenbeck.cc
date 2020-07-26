import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import SimpleSearch from '../components/simple-search';
import { headers } from 'utils/helpers';

export default function Custom404() {
  const [ slides, setSlides ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [slides] = await Promise.all([
        fetch(`http://localhost:8400/wp-json/just-in/posts`, { headers }).then((data) => data.json())
      ]);

      setSlides(slides);
    };

    fetchData();
  }, []);
  
  return (
    <>
      <div id="404">
        <SingleSubHeader
          title="404: Page Not Found"
          subtitle="Sorry, the page you are looking for cannot be found."
          image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg"
          height="325px"
        />
        <FullWidth>
          <div className="w-100">
            <p className="lead">
              It&apos;s possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for.
            </p>
            <p className="lead">
              {' '}
              If you are a client, please get in touch with your
              {' '}
              <Link href="/attorneys">
                <a className="blue-title">
                  <u>Scarinci Hollenbeck attorney</u>
                </a>
              </Link>
              {' '}
              contact directly.
            </p>
            <p className="lead">
              If you are looking to get in touch with an attorney under the terms as to becoming a new client please call 201-896-4100.
            </p>            
          </div>
          <SimpleSearch />
          <div className="off-white w-50 p-3">
              <h5 className="proxima-bold my-3">
                Or try visiting one of these pages on our site to narrow your search.
              </h5>
              <ul className="m-6">
                <li>
                  <p className="mb-0">
                    <Link href="/attorneys">
                      <a className="u-hover h5">
                        Attorneys
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="mb-0">
                    <Link href="/practice">
                      <a className="u-hover h5">
                        Practices
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="mb-0">
                    <Link href="/locations">
                      <a className="u-hover h5">
                        Locations
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="mb-0">
                    <Link href="/category/firm-news">
                      <a className="u-hover h5">
                        Firm News
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="mb-0">
                    <Link href="/category/firm-events">
                      <a className="u-hover h5">
                        Firm Events
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="mb-0">
                    <Link href="/category/firm-insights">
                      <a className="u-hover h5">
                        Firm Insights
                      </a>
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
        </FullWidth>
      </div>
      {(slides.length > 0) && <Footer slides={slides} />}
    </>
  );
}

// export async function getServerSideProps() {
  

//   return {
//     props: {
//       slides,
//     },
//   };
// }
