import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import SimpleSearch from '../components/simple-search';
import { headers } from 'utils/helpers';

export default function CustomError({ statusCode }) {
  const [errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    const handleErrorMessage = async () => {
      if(statusCode === 404) {
        setErrorMessage('404: Page Not Found');
      }

      if(statusCode === 500) {
        setErrorMessage('500: Internal Server Error');
      }
    }

    handleErrorMessage();
  }, [statusCode]);
  
  return (
    <>
      <div id="404">
        <SingleSubHeader
          title={errorMessage}
          subtitle="Sorry, the page you are looking for cannot be found or there is an internal server issue on our end."
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
          <div className="w-50 my-3 p-4 border">
            <h5>
              <strong>
                Or try visiting one of these pages on our site to narrow your search.
              </strong>
            </h5>            
            <ul className="mb-0">
              <li>
                <Link href="/attorneys">
                  <a className="u-hover h5">
                    Attorneys
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/practice">
                  <a className="u-hover h5">
                    Practices
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  <a className="u-hover h5">
                    Locations
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/category/firm-news">
                  <a className="u-hover h5">
                    Firm News
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/category/firm-events">
                  <a className="u-hover h5">
                    Firm Events
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/category/firm-insights">
                  <a className="u-hover h5">
                    Firm Insights
                  </a>
                </Link>
              </li>
            </ul>
          </div>         
        </FullWidth>
      </div>
      <Footer />
    </>
  );
}

function getInitialProps({ res, err }) {
  let statusCode;
  // If the res variable is defined it means nextjs
  // is in server side
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    // Something really bad/weird happen and status code
    // cannot be determined.
    statusCode = null;
  }
  return { statusCode };
}