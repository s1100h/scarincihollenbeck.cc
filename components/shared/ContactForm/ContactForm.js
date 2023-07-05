import { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FormContainer } from 'styles/attorney-page/GetInTouchForm.styles';
import { StandardRedButton } from 'styles/Buttons.style';
import {
  GET_IN_TOUCH_FORM_API, inputsGetInTouchAttributes, RECAPTCHA_SITE_KEY, THANKS_MESSAGE,
} from 'utils/constants';
import kwesforms from 'kwesforms';
import RenderInputs from './RenderInputs';
import { FormsContext } from '../../../contexts/FormsContext';

const KwesScripts = dynamic(() => import('components/shared/KwesScripts'));

export default function ContactForm({ isPositionRelativeProp }) {
  const { handleCheckDisclaimer, isCheckedDisclaimer } = useContext(FormsContext);
  const router = useRouter();
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <FormContainer isPositionRelative={isPositionRelativeProp && 'true'}>
      <KwesScripts />
      <form action={GET_IN_TOUCH_FORM_API} className="kwes-form d-print-none w-100" has-recaptcha-v3="true" recaptcha-site-key={RECAPTCHA_SITE_KEY} success-message={THANKS_MESSAGE.title}>
        <RenderInputs arrayOfAttributes={inputsGetInTouchAttributes} attorneySlug={router.asPath} />
        <p className="mb-1">* The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.</p>
        <fieldset data-kw-group="true" rules="required" className="mb-2">
          <label htmlFor="disclaimer">
            <input className="disclaimer-input" type="checkbox" name="disclaimer" feedback="You must agree before submitting." value="disclaimer" id="disclaimer" label="I have read the disclaimer" checked={isCheckedDisclaimer} onChange={handleCheckDisclaimer} />
            <span className="disclaimer-checkbox" />
            <span className="ml-2">I have read the disclaimer</span>
          </label>
        </fieldset>
        <StandardRedButton disabled={!isCheckedDisclaimer} className="mt-2" type="submit">
          Submit form
        </StandardRedButton>
      </form>
    </FormContainer>
  );
}
