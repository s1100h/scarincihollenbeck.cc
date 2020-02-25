import React from 'react';
import loadable from '@loadable/component'

// lazy load components
const JustInCarousel = loadable(() => import(/* webpackChunkName="JustInCarousel", webpackMode="lazy */ './JustInCarousel'));

const currentYear = new Date().getFullYear();

const Footer = () => (
  <div className="container-fluid bk--gray d-print-none">
    <JustInCarousel />
    <footer>
      <div className="container-fluid h-100 mt-5 w-75 bk--gray">
        <div className="row border--red mb-3 align-items-center h-100">
          <div className="col-sm-6 text-right">
            <form className="search-form h-100 justify-content-center" role="search" action={`${process.env.API_URL}`} method="get">
              <label htmlFor="searchSite">
                <span className="screen-reader-text">Search for:</span>
                <input
                  name="s"
                  id="searchSite"
                  title="Search for:"
                  className="search-field footer--search--bar--inner"
                  type="search"
                  placeholder="Search Site..."
                  defaultValue=""
                />
              </label>
            </form>
          </div>
        </div>
        <div className="row pb-3 mb-0">
          <div className="col-sm-6">
            <p className="mr-auto proxima-bold h5 pb-0 mb-0">ATTORNEY ADVERTISING</p>
            <p className="mr-auto proxima-regular mt-0 pt-0">
              Prior results do not guarantee a similar outcome.
              <br />
              © {currentYear}, Scarinci Hollenbeck, LLC, all rights reserved.
            </p>
          </div>
          <div className="col-sm-6 text-center">
            <ul className="float-right no-dots list-inline pb-0 mb-0">
              <li className="list-inline-item">
                <a href="/contact" className="proxima-bold red-title h6">Contact Us</a>
                {' '}
|
                {' '}
              </li>
              <li className="list-inline-item">
                <a href="/careers" className="proxima-bold red-title h6">Careers</a>
                {' '}
|
                {' '}
              </li>
              <li className="list-inline-item"><a href="/awards" className="proxima-bold red-title h6">Awards </a></li>
            </ul>
            <ul className="float-right no-dots list-inline mt-0 pt-0">
              <li className="list-inline-item">
                <a href="https://secure.lawpay.com/pages/scarincihollenbeck/operating" className="proxima-bold red-title h6">
                  Make Payment
                </a>
                {' '}
|
                {' '}
              </li>
              <li className="list-inline-item">
                <a href="/sitemap.xml" className="proxima-bold red-title h6">Sitemap</a>
                {' '}
|
                {' '}
              </li>
              <li className="list-inline-item">
                <a href="/disclaimer" className="proxima-bold red-title h6">Disclaimer</a>
                {' '}
|
                {' '}
              </li>
              <li className="list-inline-item">
                <a href="/terms-of-use" className="proxima-bold red-title h6">Terms of Use</a>
                {' '}
|
                {' '}
              </li>
              <li className="list-inline-item"><a href="/privacy-policy" className="proxima-bold red-title h6">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
