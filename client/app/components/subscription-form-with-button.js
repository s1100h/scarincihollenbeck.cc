import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import kwesforms from 'kwesforms';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormReCaptcha from './google-recaptcha-button';
import { checkboxes } from '../utils/categories';

export default function SubscriptionFormWithButton() {
  const [show, setShow] = useState(false);
  const [captcha, setCaptcha] = useState(true);
  const router = useRouter();

  // initalize kwesforms
  useEffect(() => kwesforms.init());

  return (
    <>
      <Button
        variant="danger"
        className="mx-auto p-2 d-block w-50 text-center border-r-5 mb-3 ft-14px"
        onClick={() => setShow(true)}
      >
        Subscribe Now!
      </Button>
      <Modal show={show} onHide={() => setShow(false)} id="subscription-form">
        <Modal.Header className="sidebar-title d-flex flex-row">
          <img src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png" alt="Scarinci hollenbeck diamond" className="w-15" />
          <h5 id="subscriptionModalLabel" className="mt-2">
            Sign up to get the latest from the Scarinci Hollenbeck attorneys!
          </h5>
        </Modal.Header>
        <Modal.Body>
          <Button variant="secondary" className="btn btn-secondary proxima-bold float-right mb-2 mt-0" onClick={() => setShow(false)}>Close</Button>
          <form className="kwes-form" action="https://kwes.io/api/foreign/forms/zkAM3capOgEtCtFB2fLD">
            <div>
              <input type="hidden" name="currentPage" value={`https://scarincihollenbeck.com${router.asPath}`} />
              <input type="text" className="form-control mb-3" name="firstName" placeholder="First name" rules="required|max:255" />
              <input type="text" className="form-control mb-3" name="lastName" placeholder="Last name" rules="required|max:255" />
              <input type="email" className="form-control mb-3" name="email" placeholder="Email address" rules="required|max:255" />
            </div>
            <fieldset data-kw-group="true" rules="required">
              <span className="small-excerpt">Please select a category(s) below:</span>
              <ul className="no-dots two-column">
                {checkboxes.map((type) => (
                  <li key={type.key}>
                    <label htmlFor={type.key}>
                      <input
                        type="checkbox"
                        id={type.key}
                        name="category"
                        label={type.label}
                        value={type.label}
                      />
                      {type.label}
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
            <div className="modal-footer justify-content-start">
              <FormReCaptcha setCaptcha={setCaptcha} />
              <Button variant="danger" type="submit" className="px-5" disabled={captcha}>Submit</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>

  );
}
