import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import kwesforms from 'kwesforms';
import Modal from 'react-bootstrap/Modal';
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
      <button className="btn btn-danger mx-auto p-2 d-block w-50 text-center border-r-5 mb-3 ft-14px" onClick={() => setShow(true)}>
        Subscribe Now!
      </button>
      <Modal show={show} onHide={() => setShow(false)} id="subscription-form">
        <Modal.Header className="sidebar-title d-flex flex-row">
          <img src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png" alt="Scarinci hollenbeck diamond" className="w-15" />
          <h5 id="subscriptionModalLabel" className="mt-2">
            Sign up to get the latest from the Scarinci Hollenbeck attorneys!
          </h5>
        </Modal.Header>
        <Modal.Body>
          <button className="btn btn-secondary proxima-bold float-right mb-2 mt-0" onClick={() => setShow(false)}>Close</button>
          <form className="kwes-form" action="https://kwes.io/api/foreign/forms/zkAM3capOgEtCtFB2fLD">
            <div>
              <input type="hidden" name="currentPage" value={`https://scarincihollenbeck.com${router.asPath}`} />
              <input type="text" className="form-control mb-3" name="firstName" placeholder="First name" rules="required|max:255"></input>
              <input type="text" className="form-control mb-3" name="lastName" placeholder="Last name" rules="required|max:255"></input>
              <input type="email" className="form-control mb-3" name="email" placeholder="Email address" rules="required|max:255"></input>
            </div>
            <fieldset data-kw-group="true" rules="required">
              <label className="small-excerpt">Please select a category(s) below:</label>
              <ul className="no-dots two-column">
                {checkboxes.map((type) => (
                  <li key={type.key}>
                    <input
                      type="checkbox"
                      id={type.key}
                      name="category"
                      label={type.label}
                      value={type.label}
                    />
                    <span className="mx-2">{type.label}</span>
                  </li>
                ))}
              </ul>
            </fieldset>        
            <div className="modal-footer justify-content-start">
              <FormReCaptcha setCaptcha={setCaptcha} />
              {/** disabled={captcha} */}
              <button type="submit" className="btn btn-danger px-5" >Submit</button>
            </div>
          </form> 
        </Modal.Body>
      </Modal>
    </>

  );
}