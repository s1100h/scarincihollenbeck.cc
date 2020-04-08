/* eslint-disable max-len */
import React from 'react';
import PageHead from '../../components/Head/page';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import ContactForm from '../../components/ContactForm';
import contactHeaderBckGround from './citybackground.jpg';
import './index.scss';

const Contact = () => {
  const seo = {
    title: 'Contact A Scarinci Hollenbeck Attorney',
    metaDescription: 'Contact an attorney at Scarinci Hollenbeck, business law firm, at their offices in Lyndhurst NJ, New York City, Red Bank, Jersey City, Washington D.C.',
    canonicalLink: 'contact',
  };

  return (
    <div>
      <PageHead seo={seo} />
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
          <h4 className="bg-light-gray">All other inquires please fill out the form below.</h4>
          <div className="w-75 mt-6">
            <ContactForm />
          </div>
        </div>
      </FullWidth>
    </div>
  );
};

export default Contact;
