import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormReCaptcha from './google-recaptcha-button';
import { checkboxes } from '../utils/categories';
import useInput from '../utils/input-hook';

export default function SubscriptionPageForm() {
  const { value: firstNameInput, bind: bindFirstNameInput, reset: resetFirstNameInput } = useInput('');
  const { value: lastNameInput, bind: bindLastNameInput, reset: resetLastNameInput } = useInput('');
  const { value: emailInput, bind: bindEmailInput, reset: resetEmailInput } = useInput('');
  const [categories, setCategories] = useState([]);
  const [captcha, setCaptcha] = useState(true);


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

    const request = await fetch('/api/form-submission-subscription', headers);
    const status = await request.status;

    if (status === 200) {
      setMessage(true);
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
      resetCategoryInput();
      setCategories([]);
      alert('Thank you for subscribing!');
      setCaptcha(true);
    }
  };

  function selectCategory(e) {
    const checkedBox = e.target.value;
    setCategories((categories) => [...categories, checkedBox]);
  }


  return (
    <>
      <Form onSubmit={handleSubmit} role="search">
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
        <div className="modal-footer justify-content-start">
          <FormReCaptcha setCaptcha={setCaptcha} />
          <Button type="submit" variant="danger" className="px-5" disabled={captcha}>Submit</Button>
        </div>
      </Form>
    </>

  );
}