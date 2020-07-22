/* eslint-disable max-len */
import React, { Component } from 'react';
import Form from './Form';
import './index.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Contact Us',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <div className="jumbotron jumbotron-fluid city-background">
          <div className="container animated fadeInUp fast mt--1">
            <div className="row">
              <div className="bg-black col-sm-12 col-md-8 offset-md-2">
                <div className="px-5 pt-4 pb-5">
                  <span id="red-block" />
                  <h1 className="text-white proxima-bold">{title}</h1>
                  <span id="white-border" />
                  <h2 className="proxima-regular mt-3 mb-5">
                  Looking To Get In Touch With Someone At Scarinci Hollenbeck?
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12">
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
              <h3 className="proxima-bold text-center mt-4">All other inquires please fill out the form below.</h3>
            </div>
            <div className="col-sm-12 col-md-10 mt-5 offset-md-1">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
