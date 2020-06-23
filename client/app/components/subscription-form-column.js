import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormReCaptcha from './google-recaptcha-button';
import { checkboxes } from '../utils/categories';
import useInput from '../utils/input-hook';
import { shDiamondPNG } from '../utils/next-gen-images';


export default function SubscriptionFormColumn(props) {
  const { value: firstNameInput, bind: bindFirstNameInput, reset: resetFirstNameInput } = useInput('');
  const { value: lastNameInput, bind: bindLastNameInput, reset: resetLastNameInput } = useInput('');
  const { value: emailInput, bind: bindEmailInput, reset: resetEmailInput } = useInput('');

  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [captcha, setCaptcha] = useState(true);
  const [message, setMessage] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCookiesClick();
  };
  const handleShow = () => {
    setShow(true);
    setCookiesClick();
  };

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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control id="firstName" name="firstName" type="text" placeholder="Enter first name" {...bindFirstNameInput} required />
        </Form.Group>
        <Form.Group>
          <Form.Control id="lastName" name="lastName" type="text" placeholder="Enter last name" {...bindLastNameInput} required />
        </Form.Group>
        <Form.Group>
          <Form.Control id="email" name="email" type="text" placeholder="Enter email" {...bindEmailInput} required />
        </Form.Group>
        <Form.Group>
          <Form.Label className="small-excerpt">Please select a category(s) below:</Form.Label>
          <ul className="no-dots two-column">
            {checkboxes.map((type) => (
              <li key={type.key}>
                <Form.Check
                  type="checkbox"
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
          <Button type="submit" variant="danger" disabled={captcha}>Submit</Button>
        </div>
      </Form>
    </>

  );
}
