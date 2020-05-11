/* eslint-disable max-len */
import React from 'react';
import FullWidth from '../../layouts/FullWidth';
import SimpleSearch from '../../components/SimpleSearch';
import PageHead from '../../components/Head/page';
import SingleSubHeader from '../../layouts/SingleSubHeader';

const cityBckGroundImg = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg';


function Page404() {
  const seo = {
    title: 'Page Not Found | Scarinci Hollenbeck',
    metaDescription: 'Sorry, it looks this like this page no longer exists on scarincihollenbeck.com',
    canonicalLink: '/',
  };

  return (
    <div>
      <PageHead seo={seo} />
      <SingleSubHeader
        title="404: Resource Not Found"
        subtitle="Sorry, the page you are looking for cannot be found."
        image={cityBckGroundImg}
        height="auto"
      />
      <FullWidth>
        <p className="lead">
          It&apos;s possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 offset-md-3">
              <SimpleSearch />
            </div>
            <div className="col-sm-12 col-md-8 mt-5 offset-md-2 off-white">
              <h4 className="proxima-bold p-3 pb-0 mb-0 text-center">Or try visiting one of these pages on our site to narrow your search.</h4>
              <ul className="ml-6">
                <li>
                  <p>
                    <a href={`${window.location.origin}/attorneys`} className="u-hover h5">
                        Attorneys
                      </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href={`${window.location.origin}/practices`} className="u-hover h5">
                        Practices
                      </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href={`${window.location.origin}/locations`} className="u-hover h5">
                        Locations
                      </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href={`${window.location.origin}/category/firm-news`} className="u-hover h5">
                        Firm News
                      </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href={`${window.location.origin}/category/firm-events`} className="u-hover h5">
                        Firm Events
                      </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href={`${window.location.origin}/category/firm-insights`} className="u-hover h5">
                        Firm Insights
                      </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FullWidth>
    </div>
  );
}

export default Page404;
