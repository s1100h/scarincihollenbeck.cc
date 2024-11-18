import { useState } from 'react';
import { useRouter } from 'next/router';
import { FormContainer } from 'styles/attorney-page/GetInTouchForm.styles';
import { StandardBlueButton } from 'styles/Buttons.style';
import {
  GET_IN_TOUCH_FORM_API,
  inputsGetInTouchAttributes,
  RECAPTCHA_SITE_KEY,
  THANKS_MESSAGE,
} from 'utils/constants';
import empty from 'is-empty';
import RenderInputs from './RenderInputs';

export default function ContactForm({
  isPositionRelativeProp,
  blockName = 'default',
  buttonText = 'Submit form',
}) {
  const [isCheckedDisclaimer, setIsCheckedDisclaimer] = useState('');

  const handleCheck = (event) => {
    const target = event.target;
    const isChecked = target.checked;

    if (blockName === target.dataset.id) {
      setIsCheckedDisclaimer(isChecked ? blockName : '');
    }
  };

  const router = useRouter();

  return (
    <FormContainer isPositionRelative={isPositionRelativeProp && 'true'}>
      <form
        action={GET_IN_TOUCH_FORM_API}
        className="kwes-form d-print-none w-100"
        has-recaptcha-v3="true"
        recaptcha-site-key={RECAPTCHA_SITE_KEY}
        success-message={THANKS_MESSAGE.title}
      >
        <RenderInputs
          arrayOfAttributes={inputsGetInTouchAttributes}
          attorneySlug={router.asPath}
        />
        <p className="mb-1">
          * The use of the Internet or this form for communication with the firm
          or any individual member of the firm does not establish an
          attorney-client relationship. Confidential or time-sensitive
          information should not be sent through this form.
        </p>
        {!empty(blockName) && (
          <fieldset data-kw-group="true" rules="required" className="mb-2">
            <label htmlFor={`disclaimer-${blockName}`}>
              <input
                className="disclaimer-input"
                type="checkbox"
                name={`disclaimer-${blockName}`}
                feedback="You must agree before submitting."
                value={`disclaimer-${blockName}`}
                id={`disclaimer-${blockName}`}
                label="I have read the disclaimer"
                data-id={blockName}
                checked={isCheckedDisclaimer === blockName}
                onChange={handleCheck}
                required
              />
              <span className="disclaimer-checkbox" />
              <span className="ml-2">I have read the disclaimer</span>
            </label>
          </fieldset>
        )}
        <StandardBlueButton
          disabled={!(isCheckedDisclaimer === blockName)}
          className="mt-2"
          type="submit"
        >
          {buttonText}
        </StandardBlueButton>
      </form>
    </FormContainer>
  );
}
