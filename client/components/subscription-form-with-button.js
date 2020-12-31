import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import kwesforms from 'kwesforms';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import fontsStyles from 'styles/Fonts.module.css';
import formsStyles from 'styles/Forms.module.css';
import { checkboxes } from 'utils/categories';
import FormReCaptcha from './google-recaptcha-button';

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
        className="mx-auto p-1 d-block w-50 text-center border-r-5 mb-3 ft-14px"
        onClick={() => setShow(true)}
      >
        Subscribe Now!
      </Button>
      <Modal show={show} onHide={() => setShow(false)} id="subscription-form">
        <Modal.Header className="sidebar-title d-flex flex-row">
          <Image
            src="/images/sh-mini-diamond-PNG.png"
            width={170}
            height={147}
            alt="Scarinci Hollenbeck diamond logo"
            layout="intrinsic"
          />
          <h5 id="subscriptionModalLabel" className="mt-2">
            Sign up to get the latest from the Scarinci Hollenbeck attorneys!
          </h5>
        </Modal.Header>
        <Modal.Body>
          <Button
            variant="secondary"
            className="float-right mb-2 mt-0"
            onClick={() => setShow(false)}
          >
            <strong>Close</strong>
          </Button>
          <form
            className="kwes-form"
            action="https://kwes.io/api/foreign/forms/zkAM3capOgEtCtFB2fLD"
          >
            <input
              type="hidden"
              name="currentPage"
              value={`https://scarincihollenbeck.com${router.asPath}`}
            />
            <input
              type="text"
              className="form-control mb-2"
              name="firstName"
              placeholder="First name"
              rules="required|max:255"
            />
            <input
              type="text"
              className="form-control mb-2"
              name="lastName"
              placeholder="Last name"
              rules="required|max:255"
            />
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              placeholder="Email address"
              rules="required|max:255"
            />
            <fieldset data-kw-group="true" rules="required">
              <span className={fontsStyles.smallExcerpt}>
                Please select a category(s) below:
              </span>
              <ul
                className={`${formsStyles.twoColumns} list-unstyled mx-0 px-0 mt-2`}
              >
                {checkboxes.map((type) => (
                  <li key={type.key}>
                    <label htmlFor={type.key} className="mb-0">
                      <input
                        type="checkbox"
                        id={type.key}
                        name="category"
                        label={type.label}
                        value={type.label}
                      />
                      <span className="mx-2">{type.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
            <div className="modal-footer justify-content-start">
              <FormReCaptcha setCaptcha={setCaptcha} />
              <Button
                variant="danger"
                type="submit"
                className="px-5"
                disabled={captcha}
              >
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
