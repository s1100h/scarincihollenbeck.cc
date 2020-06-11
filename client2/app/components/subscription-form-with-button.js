import React, { useState } from 'react';
import { withRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import{ checkboxes }from '../utils/categories';
import useInput from '../utils/input-hook';


function SubscriptionFromWithButton(props, {router}) {
  const { value:firstNameInput, bind:bindFirstNameInput, reset:resetFirstNameInput } = useInput('');
  const { value:lastNameInput, bind:bindLastNameInput, reset:resetLastNameInput } = useInput('');
  const { value:emailInput, bind:bindEmailInput, reset:resetEmailInput } = useInput('');
  const { value:categoryInput, bind:bindCategoryInput, reset:resetCategoryInput } = useInput([]);
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryValues = categoriesInput.map((c) => c.value);

    const subscriberData = {
      firstName:firstNameInput,
      lastName:lastNameInput,
      email:emailInput,
      categoryValues,
      siteUrl: router.pathname,
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
      setDisabled(true);
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
      resetCategoryInput();
    }
  }

  return (
    <>
      <Button variant="danger" className="mx-auto p-2 d-block w-50 text-center border-r-5 mb-3"  onClick={handleShow}>
        Subscribe Now!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
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
              {checkboxes.map((type) => (
                <div key={type.key} className="mb-3">
                  <Form.Check 
                    type="checkbox"
                    id={type.key}
                    label={type.label}
                    {...bindCategoryInput}
                  />
                </div>
              ))}
            </Form.Group>
            <div className="modal-footer">
              {(message) && <p className="text-success proxima-bold mx-auto">Thank you for subscribing!</p>}
              <Button type="button" variant="secondary" className="proxima-bold" closeButton>Close</Button>
              <Button type="submit" variant="danger" disabled={disabled} value="Submit" />
            </div>     
          </Form>
        </Modal.Body>
      </Modal>  
    </>
    
  )
}

export default withRouter(SubscriptionFromWithButton);