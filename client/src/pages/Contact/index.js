/* eslint-disable max-len */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import SingleSubHeader from '../../components/SingleSubHeader';
import FullWidth from '../../components/FullWidth';
import styled from 'styled-components';
import Form from './Form';
import contactHeaderBckGround from './citybackground.jpg';
import './index.scss';

const Contact = () => {

  const seo = {
    title: 'Contact A Scarinci Hollenbeck Attorney',
    metaDescription: 'Contact an attorney at Scarinci Hollenbeck, business law firm, at their offices in Lyndhurst NJ, New York City, Red Bank, Jersey City, Washington D.C.'
  };   
    
    return (
      <div>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription}/>
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
          <link rel="canonical" href={window.location.href} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={seo.title} />
          <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
          <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="350" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seo.metaDescription} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta name="twitter:creator" content="@S_H_Law" /> 
        </Helmet>
        <SingleSubHeader
          title="Contact Us"
          subtitle="Looking To Get In Touch With Someone At Scarinci Hollenbeck? Feel free to navigate to any one of our directory pages or fill out the form below."
          image={contactHeaderBckGround}
          height="325px"
        /> 
        <FullWidth>
          <div className="w-100">
            <p className="lead">
              For media inquiries, please visit
              {' '}
              <a href={`${window.location.origin}/category/law-firm-insights/`} className="blue-title">
                <u>Firm Insights.</u>
              </a>
              {' '}
              For job opportunities please visit our
              {' '}
              <a href={`${window.location.origin}/careers`} className="blue-title">
                <u>Careers page.</u>
              </a>
            </p>
            <p className="lead">
              {' '}
              If you are a client, please get in touch with your
              {' '}
              <a href={`${window.location.origin}/attorneys`} className="blue-title"><u>Scarinci Hollenbeck attorney</u></a>
              {' '}
              contact directly.
            </p>
            <p className="lead">
              If you are looking to get in touch with an attorney under the terms as to becoming a new client please call 201-896-4100.
            </p>
            <h3 className="proxima-bold text-center mt-4"></h3>
            <h4 class="bg-light-gray">All other inquires please fill out the form below.</h4>
            <div className="w-75 mt-6">
              <Form />
            </div>
          </div>
        </FullWidth>
      </div>
    );
  }

export default Contact;
