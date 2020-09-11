import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormReCaptcha from './google-recaptcha-button';
import { checkboxes } from '../utils/categories';
import useInput from '../utils/input-hook';

function SubscriptionFormWithButton(props) {
  const { value: firstNameInput, bind: bindFirstNameInput, reset: resetFirstNameInput } = useInput('');
  const { value: lastNameInput, bind: bindLastNameInput, reset: resetLastNameInput } = useInput('');
  const { value: emailInput, bind: bindEmailInput, reset: resetEmailInput } = useInput('');

  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [captcha, setCaptcha] = useState(true);
  const [message, setMessage] = useState(false);

  const handleShow = () => {
    setShow(true);
    setCookiesClick();
  };

  const handleClose = () => {
    setShow(false);
  }

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subscriberData = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      categoryValues: categories,
      siteUrl: router.asPath,
    };

    const headers = {
      method: 'post',
      body: JSON.stringify(subscriberData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const request = await fetch('https://forms.scarincihollenbeck.com/shlaw/site/subscription/form', headers);
    const status = await request.status;

    if (status === 200) {
      setMessage(true);
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
      setCategories([]);
    }
  };


  function selectCategory(e) {
    const checkedBox = e.target.value;
    setCategories((categories) => [...categories, checkedBox]);
  }

  function setCookiesClick() {
    const cookieId = Math.random().toString(36).substring(7);

    setCookie(null, 'shpuser', cookieId, {
      maxAge: 30 * 24 * 60 * 60,
      path: router.asPath,
    });
  }

  return (
    <>
      <Button variant="danger" className="mx-auto p-2 d-block w-50 text-center border-r-5 mb-3 ft-14px" onClick={handleShow}>
        Subscribe Now!
      </Button>
      <Modal show={show} onHide={handleClose} id="subscription-form">
        <Modal.Header className="sidebar-title d-flex flex-row">
          <img src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png" alt="Scarinci hollenbeck diamond" className="w-15" />
          <h5 id="subscriptionModalLabel" className="mt-2">
            Sign up to get the latest from the Scarinci Hollenbeck attorneys!
          </h5>
        </Modal.Header>
        <Modal.Body>
          <Button type="button" variant="secondary" className="proxima-bold float-right mb-2 mt-0" onClick={handleClose}>Close</Button>
          <Form onSubmit={handleSubmit}  role="search">
            <Form.Group controlId="firstName.ControlInput">
              <Form.Control id="firstName" name="firstName" type="text" placeholder="Enter first name" {...bindFirstNameInput} required />
            </Form.Group>
            <Form.Group controlId="lastName.ControlInput">
              <Form.Control id="lastName" name="lastName" type="text" placeholder="Enter last name" {...bindLastNameInput} required />
            </Form.Group>
            <Form.Group controlId="email.ControlInput">
              <Form.Control id="email" name="email" type="text" placeholder="Enter email" {...bindEmailInput} required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="small-excerpt">Please select a category(s) below:</Form.Label>
              <ul className="no-dots two-column">
                {checkboxes.map((type) => (
                  <li key={type.key}>
                    <Form.Check
                      type="checkbox"
                      name="category"
                      id={type.key}
                      label={type.label}
                      value={type.label}
                      onClick={selectCategory}
                    />
                  </li>
                ))}
              </ul>
            </Form.Group>
            <div className="modal-footer">
              <FormReCaptcha setCaptcha={setCaptcha} className="float-right" />
              {(message) && <p className="text-success proxima-bold mx-auto">Thank you for subscribing!</p>}
              <Button type="button" variant="secondary" className="proxima-bold" onClick={handleClose}>Close</Button>
              <Button type="submit" variant="danger" disabled={captcha}>Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>

  );
}

export default SubscriptionFormWithButton;
