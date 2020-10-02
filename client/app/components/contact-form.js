import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormReCaptcha from './google-recaptcha-button';
import useInput from '../utils/input-hook';

export default function ContactForm() {
  const { value: firstNameInput, bind: bindFirstNameInput, reset: resetFirstNameInput } = useInput('');
  const { value: lastNameInput, bind: bindLastNameInput, reset: resetLastNameInput } = useInput('');
  const { value: emailInput, bind: bindEmailInput, reset: resetEmailInput } = useInput('');
  const { value: phoneInput, bind: bindPhoneInput, reset: resetPhoneInput } = useInput('');
  const { value: subjectInput, bind: bindSubjectInput, reset: resetSubjectInput } = useInput('');
  const { value: messageInput, bind: bindMessageInput, reset: resetMessageInput } = useInput('');
  const { value: disclaimerInput, bind: bindDisclaimerInput, reset: resetDisclaimerInput } = useInput([]);
  const [captcha, setCaptcha] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [validated, setValidated] = useState(false);

  const router = useRouter();

  async function sendInquiry(pageTitle, siteUrl) {
    const inquiryData = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      phone: phoneInput,
      subject: subjectInput,
      message: messageInput,
      pageTitle,
      siteUrl,
    };

    const headers = {
      method: 'post',
      body: JSON.stringify(inquiryData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const request = await fetch('/api/form-submission-inquiry', headers);
    const status = await request.status;

    if (status === 200) {
      resetDisclaimerInput();
      resetLastNameInput();
      resetFirstNameInput();
      resetEmailInput();
      resetPhoneInput();
      resetSubjectInput();
      resetMessageInput();
      alert('Thank you for your inquiry one of our representative will reach out to you shortly!');
      setCaptcha(true);      
    }

    if(status === 404) {
      alert('Sorry there was an error with your submission! Please email psmoeller@sh-law.com for further information');
    }

    if(status === 500) {
      alert('Sorry there was an error with your submission! Please email psmoeller@sh-law.com for further information');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pageTitle = document.querySelector('h1.text-white.proxima-bold').innerText;
    const siteUrl = `https://scarincihollenbeck.com/${router.asPath}`;
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (validated === false && form.checkValidity() === true) {
      sendInquiry(pageTitle, siteUrl);
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-print-none">
        <Form.Row>
          <Form.Group as={Col} sm={12} md="6" controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="First name"
              {...bindFirstNameInput}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm={12} md="6" controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              {...bindLastNameInput}

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={12} md="6" controlId="validationCustom03">
            <Form.Control
              required
              type="email"
              placeholder="Email"
              {...bindEmailInput}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm={12} md="6" controlId="validationCustom04">
            <Form.Control
              required
              type="phone"
              placeholder="phone"
              {...bindPhoneInput}

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={12} controlId="validationCustom05">
            <Form.Control
              required
              type="text"
              placeholder="Subject"
              {...bindSubjectInput}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm={12} controlId="validationCustom06">
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Message"
              {...bindMessageInput}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>
            * The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.
          </Form.Label>
          <Form.Check
            required
            label="I have read the disclaimer"
            feedback="You must agree before submitting."
            {...bindDisclaimerInput}
          />
        </Form.Group>
        <FormReCaptcha setCaptcha={setCaptcha} />
        <Button variant="danger" className="ml-2 w-25 mt-2" type="submit" disabled={captcha}>Submit form</Button>
      </Form>
    </>
  );
}
