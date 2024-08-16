import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
// import dynamic from 'next/dynamic';
import { Col, Row } from 'react-bootstrap';
import kwesforms from 'kwesforms';
import { FormContainer } from 'styles/attorney-page/GetInTouchForm.styles';
import { StandardRedButton } from '../../styles/Buttons.style';
import { FormsContext } from '../../contexts/FormsContext';
import {
  THANKS_MESSAGE,
  inputsCareerForm,
  GET_IN_TOUCH_FORM_API,
  RECAPTCHA_SITE_KEY,
} from '../../utils/constants';
import { CareerFormContainer } from '../../styles/Careers.style';
import RenderInputs from '../shared/ContactForm/RenderInputs';
import { TwoColumnsForm } from '../../styles/attorney-page/GetInTouchForm.styles';

// const KwesScripts = dynamic(() => import('components/shared/KwesScripts'));

const CareerForm = () => {
  const router = useRouter();
  const { handleCheckDisclaimer, isCheckedDisclaimer } = useContext(FormsContext);

  useEffect(() => {
    kwesforms.init();
  }, []);

  const isDisabledSubmitButton = !isCheckedDisclaimer;

  return (
    <CareerFormContainer>
      {/* <KwesScripts /> */}
      <FormContainer isPositionRelative>
        <TwoColumnsForm
          action={GET_IN_TOUCH_FORM_API}
          className="kwes-form d-print-none w-100"
          has-recaptcha-v3="true"
          recaptcha-site-key={RECAPTCHA_SITE_KEY}
          success-message={THANKS_MESSAGE.title}
        >
          <div className="career-form-wrapper">
            <RenderInputs
              arrayOfAttributes={inputsCareerForm}
              attorneySlug={router.asPath}
            />
          </div>

          <Row className="mb-0">
            <Col sm={12}>
              <p className="mb-1">
                * The use of the Internet or this form for communication with
                the firm or any individual member of the firm does not establish
                an attorney-client relationship. Confidential or time-sensitive
                information should not be sent through this form.
              </p>
              <fieldset data-kw-group="true" rules="required" className="mb-2">
                <label htmlFor="disclaimer">
                  <input
                    type="checkbox"
                    name="disclaimer"
                    feedback="You must agree before submitting."
                    value="disclaimer"
                    id="disclaimer"
                    label="I have read the disclaimer"
                    checked={isCheckedDisclaimer}
                    onChange={handleCheckDisclaimer}
                  />
                  <span className="p-2">I have read the disclaimer</span>
                </label>
              </fieldset>
            </Col>
          </Row>
          <StandardRedButton
            disabled={isDisabledSubmitButton}
            className="mt-2 ml-0"
            type="submit"
          >
            Submit form
          </StandardRedButton>
        </TwoColumnsForm>
      </FormContainer>
    </CareerFormContainer>
  );
};

export default CareerForm;
