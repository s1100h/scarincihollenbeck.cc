import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FormContainer } from 'styles/attorney-page/GetInTouchForm.styles';
import { StandardRedButton } from 'styles/Buttons.style';
import { GET_IN_TOUCH_FORM_API, RECAPTCHA_SITE_KEY } from 'utils/constants';

const KwesScripts = dynamic(() => import('components/shared/KwesScripts'));

export default function ContactForm() {
  const router = useRouter();
  return (
    <FormContainer>
      <KwesScripts />
      <form
        action={GET_IN_TOUCH_FORM_API}
        className="kwes-form d-print-none w-100"
        has-recaptcha-v3="true"
        recaptcha-site-key={RECAPTCHA_SITE_KEY}
      >
        <input
          type="hidden"
          name="currentPage"
          value={`https://scarincihollenbeck.com${router.asPath}`}
        />
        <input
          type="text"
          className="form-control mx-0"
          name="firstName"
          placeholder="First name"
          rules="required|max:255"
        />
        <input
          type="text"
          className="form-control mx-0"
          name="lastName"
          placeholder="Last name"
          rules="required|max:255"
        />
        <input
          type="email"
          className="form-control mx-0"
          name="email"
          placeholder="Email address"
          rules="required|max:255"
        />
        <input
          type="phone"
          className="form-control mx-0"
          name="phone"
          placeholder="Phone number"
          rules="required|max:255"
        />
        <input
          type="text"
          className="form-control mx-0"
          name="subject"
          placeholder="Subject"
          rules="required|max:1000"
        />
        <textarea
          type="textarea"
          rows="8"
          cols="4"
          className="form-control mx-0"
          name="message"
          placeholder="Message"
          rules="required|max:1000"
        />

        <p className="mb-1">
          * The use of the Internet or this form for communication with the firm or any individual
          member of the firm does not establish an attorney-client relationship. Confidential or
          time-sensitive information should not be sent through this form.
        </p>
        <fieldset data-kw-group="true" rules="required" className="mb-2">
          <label htmlFor="disclaimer">
            <input
              className="disclaimer-input"
              type="checkbox"
              name="disclaimer"
              feedback="You must agree before submitting."
              value="disclaimer"
              id="disclaimer"
              label="I have read the disclaimer"
            />
            <span className="disclaimer-checkbox" />
            <span className="ml-2">I have read the disclaimer</span>
          </label>
        </fieldset>
        <StandardRedButton className="mt-2" type="submit">
          Submit form
        </StandardRedButton>
      </form>
    </FormContainer>
  );
}
