import React, { useState, useEffect } from 'react';
import kwesforms from 'kwesforms';
import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FormReCaptcha from 'components/google-recaptcha-button';

export default function AttorneyProfileContactForm({ forwardEmail, currentAttorney }) {
  const [captcha, setCaptcha] = useState(true);
  const router = useRouter();
  const forwardEmailStr = forwardEmail.join(',')

  // initalize kwesforms
  useEffect(() => kwesforms.init());

  return (
    <div className="px-2 mb-3">
      <form
        action="https://kwes.io/api/foreign/forms/m015EzO4b4EtOvYSTRlK"
        className="kwes-form d-print-none px-1"
        style={{ maxWidth: '90%' }}
      >
        <input
          type="hidden"
          name="currentPage"
          value={`https://scarincihollenbeck.com${router.asPath}`}
        />
        <input
          type="hidden"
          name="forwardEmail"
          value={forwardEmailStr}
        />
        <input
          type="hidden"
          name="currentAttorney"
          value={currentAttorney}
        />
        <Row className="mb-3">
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="text"
              className="form-control mx-0"
              name="firstName"
              placeholder="First name"
              rules="required|max:255"
            />
          </Col>
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="text"
              className="form-control mx-0"
              name="lastName"
              placeholder="Last name"
              rules="required|max:255"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="email"
              className="form-control mx-0"
              name="email"
              placeholder="Email address"
              rules="required|max:255"
            />
          </Col>
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="phone"
              className="form-control mx-0"
              name="phone"
              placeholder="Phone number"
              rules="required|max:255"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={12} className="mx-0 px-1 mb-4">
            <input
              type="text"
              className="form-control mx-0"
              name="subject"
              placeholder="Subject"
              rules="required|max:1000"
            />
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <textarea
              type="textarea"
              rows="8"
              cols="4"
              className="form-control mx-0"
              name="message"
              placeholder="Message"
              rules="required|max:1000"
            />
          </Col>
        </Row>
        <Row className="mb-0">
          <Col sm={12} className="mx-0 px-1">
            <p className="mb-1">
              * The use of the Internet or this form for communication with the
              firm or any individual member of the firm does not establish an
              attorney-client relationship. Confidential or time-sensitive
              information should not be sent through this form.
            </p>
            <fieldset data-kw-group="true" rules="required" className="mb-2">
              <label htmlFor="disclaimer">
                <input
                  type="checkbox"
                  name="disclaimer"
                  feedback="You must agree before submitting."
                  value="disclaimer"
                  id="disclaimer"
                  label="I have read the disclaimer"
                />
                <span className="ml-2">I have read the disclaimer</span>
              </label>
            </fieldset>
          </Col>
          <Col sm={12}>
            <FormReCaptcha setCaptcha={setCaptcha} />
          </Col>
        </Row>
        <Button
          variant="danger"
          className="mt-2 px-4"
          type="submit"
          disabled={captcha}
        >
          Submit form
        </Button>
      </form>
    </div>
  );
}
