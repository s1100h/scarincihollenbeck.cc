import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FormContainer } from 'styles/attorney-page/GetInTouchForm.styles';
import { StandardRedButton } from 'styles/Buttons.style';
import {
  GET_IN_TOUCH_FORM_API,
  inputsGetInTouchAttributes,
  RECAPTCHA_SITE_KEY,
} from 'utils/constants';

const KwesScripts = dynamic(() => import('components/shared/KwesScripts'));

const renderInputs = (arrayOfAttributes, attorneySlug) => arrayOfAttributes.map((attributes) => {
  if (attributes.type !== 'textarea') {
    if (attributes.type === 'hidden') {
      return (
        <input
          key={attributes.name}
          {...attributes}
          value={`https://scarincihollenbeck.com${attorneySlug}`}
        />
      );
    }

    return <input key={attributes.name} {...attributes} />;
  }

  return <textarea key={attributes.name} {...attributes} />;
});

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
        {renderInputs(inputsGetInTouchAttributes, router.asPath)}
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
