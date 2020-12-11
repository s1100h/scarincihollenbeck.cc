import React, { useState, useEffect } from 'react';
import kwesforms from 'kwesforms';
import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormReCaptcha from './google-recaptcha-button';

export default function ContactForm() {
  const [captcha, setCaptcha] = useState(true);
  const router = useRouter();

  // initalize kwesforms
  useEffect(() => kwesforms.init());
  
  return (
    <>
      <form action="https://kwes.io/api/foreign/forms/oIRf8VAo2KnGHucQmZ1m" className="kwes-form d-print-none px-3">
        <input type="hidden" name="currentPage" value={`https://scarincihollenbeck.com${router.asPath}`} />
        <Row className="mb-3">
          <Col sm={12} md={6} className="mx-0 px-1">
            <input type="text" className="form-control mx-0" name="firstName" placeholder="First name" rules="required|max:255"></input>
          </Col>
          <Col sm={12} md={6} className="mx-0 px-1">
            <input type="text" className="form-control mx-0" name="lastName" placeholder="Last name" rules="required|max:255"></input>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={12} md={6} className="mx-0 px-1">
            <input type="email" className="form-control mx-0" name="email" placeholder="Email address" rules="required|max:255"></input>
          </Col>
          <Col sm={12} md={6} className="mx-0 px-1">
            <input type="phone" className="form-control mx-0" name="phone" placeholder="Phone number" rules="required|max:255"></input>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={12} className="mx-0 px-1 mb-4">
            <input type="text" className="form-control mx-0" name="subject" placeholder="Subject" rules="required|max:1000"></input>
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <textarea type="textarea" rows="8" cols="4" className="form-control mx-0" name="message" placeholder="Message" rules="required|max:1000"></textarea>
          </Col>
        </Row>
        <Row className="mb-0">
          <Col sm={12} className="mx-0 px-1">
            <fieldset data-kw-group="true" rules="required" className="my-1">
              <label>
                <small>* The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.</small>
              </label>
              <input
                type="checkbox"
                name="disclaimer"
                feedback="You must agree before submitting."
                value="disclaimer"
                label="I have read the disclaimer"
              />
              <span className="mx-2 mb-1 mt-0">
                <small>
                  I have read the disclaimer
                </small>
              </span>
          </fieldset>
          </Col>
          <Col sm={12}>
            <FormReCaptcha setCaptcha={setCaptcha} />
          </Col>
        </Row>
        <button className="btn btn-danger w-25 mt-2" type="submit" disabled={captcha}>Submit form</button>
      </form>
    </>
  );
}
