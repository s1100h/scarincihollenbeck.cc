import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import kwesforms from 'kwesforms';
import { checkboxes } from 'utils/categories';
import fontsStyles from 'styles/Fonts.module.css';
import formsStyles from 'styles/Forms.module.css';
import FormReCaptcha from './google-recaptcha-button';


export default function SubscriptionFormColumn() {
  const [captcha, setCaptcha] = useState(true);
  const router = useRouter();

  // initalize kwesforms
  useEffect(() => kwesforms.init());
  return (
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
        <ul className={`${formsStyles.twoColumns} list-unstyled mx-0 px-0 mt-2`}>
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
        <button
          type="submit"
          className="btn btn-danger px-5"
          disabled={captcha}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
