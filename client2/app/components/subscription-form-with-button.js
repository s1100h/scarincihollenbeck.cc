import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormReCaptcha from './google-recaptcha-button';
import{ checkboxes }from '../utils/categories';
import useInput from '../utils/input-hook';
import { shDiamondPNG } from '../utils/next-gen-images';


function SubscriptionFormWithButton(props) {
  const { value:firstNameInput, bind:bindFirstNameInput, reset:resetFirstNameInput } = useInput('');
  const { value:lastNameInput, bind:bindLastNameInput, reset:resetLastNameInput } = useInput('');
  const { value:emailInput, bind:bindEmailInput, reset:resetEmailInput } = useInput('');
  const { value:categoryInput, bind:bindCategoryInput, reset:resetCategoryInput } = useInput([]);
  const [show, setShow] = useState(false);
  const [captcha, setCaptcha ] = useState(true);
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
    const categoryValues = categoriesInput.map((c) => c.value);

    const subscriberData = {
      firstName:firstNameInput,
      lastName:lastNameInput,
      email:emailInput,
      categoryValues,
      siteUrl: router.asPath,
    };

    const headers = {
      method: 'post',
      body: JSON.stringify(subscriberData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    };

    const request = await fetch('https://forms.scarincihollenbeck.com/shlaw/site/subscription/form', headers);
    const status = await request.status;
    
    if (status === 200) {
      setMessage(true);
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
      resetCategoryInput();
    }
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
      <Button variant="danger" className="mx-auto p-2 d-block w-50 text-center border-r-5 mb-3"  onClick={handleShow}>
        Subscribe Now!
      </Button>
      <Modal show={show} onHide={handleClose} id="subscription-form">
        <Modal.Header className="sidebar-title d-flex flex-row">
          <img src={shDiamondPNG} alt="Scarinci hollenbeck diamond" className="w-15" />
          <h5 id="subscriptionModalLabel" className="mt-2">
            Sign up to get the latest from the Scarinci Hollenbeck attorneys!
          </h5>
        </Modal.Header>
        <Modal.Body>
          <Button type="button" variant="secondary" className="proxima-bold float-right mb-2 mt-0" onClick={handleClose}>Close</Button>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName.ControlInput">
              <Form.Control id="firstName" name="firstName" type="text" placeholder="Enter first name" {...bindFirstNameInput} required/>
            </Form.Group>
            <Form.Group controlId="lastName.ControlInput">
              <Form.Control id="lastName" name="lastName" type="text" placeholder="Enter last name" {...bindLastNameInput} required/>
            </Form.Group>
            <Form.Group controlId="email.ControlInput">
              <Form.Control id="email" name="email" type="text" placeholder="Enter email" {...bindEmailInput} required/>
            </Form.Group>
            <Form.Group controlId="cateogry.ControlSelect1">
              <Form.Label className="small-excerpt">Please select a category(s) below:</Form.Label>
              <ul className="no-dots two-column">
                {checkboxes.map((type) => (
                  <li key={type.key}>
                    <Form.Check 
                      type="checkbox"
                      id={type.key}
                      label={type.label}
                      {...bindCategoryInput}
                      required
                    />
                  </li>
                ))}
              </ul>              
            </Form.Group>
            <div className="modal-footer">
              <FormReCaptcha setCaptcha={setCaptcha} className="float-right"/>
              {(message) && <p className="text-success proxima-bold mx-auto">Thank you for subscribing!</p>}
              <Button type="button" variant="secondary" className="proxima-bold" onClick={handleClose}>Close</Button>
              <Button type="submit" variant="danger" disabled={captcha}>Submit</Button>
            </div>     
          </Form>
        </Modal.Body>
      </Modal>  
    </>
    
  )
}

export default SubscriptionFormWithButton;