import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Col, Row } from 'react-bootstrap';
import kwesforms from 'kwesforms';
import { StandardRedButton } from '../../styles/Buttons.style';
import { FormsContext } from '../../contexts/FormsContext';
import { THANKS_MESSAGE } from '../../utils/constants';
import { CareerFormContainer } from '../../styles/Careers.style';

const KwesScripts = dynamic(() => import('components/shared/KwesScripts'));

const CareerForm = ({ contact, title }) => {
  const router = useRouter();
  const { handleCheckDisclaimer, isCheckedDisclaimer } = useContext(FormsContext);
  const [isFileAdded, setIsFileAdded] = useState({
    coverLetter: false,
    resume: false,
  });

  const resumeInputName = 'resume';
  const coverLetterInputName = 'coverLetter';

  useEffect(() => {
    kwesforms.init();
  }, []);

  const handleAddFile = (event) => {
    const inputName = event.target.name;
    if (inputName === resumeInputName) {
      setIsFileAdded((prev) => ({
        resume: true,
        coverLetter: prev.coverLetter,
      }));
    }
    if (inputName === coverLetterInputName) {
      setIsFileAdded((prev) => ({
        resume: prev.resume,
        coverLetter: true,
      }));
    }
  };

  const isDisabledSubmitButton = !isCheckedDisclaimer || !isFileAdded.resume || !isFileAdded.coverLetter;

  return (
    <CareerFormContainer>
      <KwesScripts />
      <form method="POST" action="https://kwes.io/api/foreign/forms/rKYfR2fNcm68wzPCSiyW" encType="multipart/form-data" className="kwes-form d-print-none px-1" has-recaptcha-v3="true" recaptcha-site-key="6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY" success-message={THANKS_MESSAGE.title}>
        <input type="hidden" name="currentPage" value={`https://scarincihollenbeck.com${router.asPath}`} />
        <input type="hidden" name="currentTitle" value={title} />
        <input type="hidden" name="currentContact" value={contact} />
        <Row className="mb-3">
          <Col sm={12} md={6} className="mx-0 px-1">
            <input type="text" className="form-control mx-0" name="firstName" placeholder="First name" rules="required|max:255" />
          </Col>
          <Col sm={12} md={6} className="mx-0 px-1">
            <input type="text" className="form-control mx-0" name="lastName" placeholder="Last name" rules="required|max:255" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={12} md={6} className="mx-0 px-1">
            <input type="email" className="form-control mx-0" name="email" placeholder="Email address" rules="required|max:255" />
          </Col>
          <Col sm={12} md={6} className="mx-0 px-1">
            <input
              type="phone"
              className="form-control mx-0"
              name="phone"
              placeholder="Phone number"
              rules="required|regex:/^(\+?1[-.\s]?)?(\()?\d{3}(\))?[-.\s]?\d{3}[-.\s]?\d{4}$/"
              title="Please use these formats:
                    (123) 456-7890
                    123-456-7890
                    123.456.7890
                    123 456 7890
                    +1 123-456-7890
                    +1 (123) 456-7890"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mx-0 px-1">
            <label htmlFor="coverLetter">
              <span className="d-flex w-100 my-2 gap-1 flex-wrap">
                <strong>Upload your cover letter</strong>
                <span>(this is required field)</span>
              </span>
              <input onChange={handleAddFile} type="file" name={coverLetterInputName} id="coverLetter" rules="required" />
            </label>
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <label htmlFor="resume">
              <span className="d-flex w-100 my-2 gap-1 flex-wrap">
                <strong>Upload your resume</strong>
                <span>(this is required field)</span>
              </span>
              <input onChange={handleAddFile} type="file" name={resumeInputName} id="resume" rules="required" />
            </label>
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <label htmlFor="writing">
              <span className="d-block w-100 my-2">
                <strong>Upload a writing sample</strong>
              </span>
              <input type="file" name="writing" id="writing" />
            </label>
          </Col>
          <Col sm={12} className="mx-0 px-1">
            <label htmlFor="transcript">
              <span className="d-block w-100 my-2">
                <strong>Upload a transcript</strong>
              </span>
              <input type="file" name="transcript" id="transcript" />
            </label>
          </Col>
        </Row>
        <Row className="mb-0">
          <Col sm={12} className="mx-0 px-1">
            <p className="mb-1">* The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.</p>
            <fieldset data-kw-group="true" rules="required" className="mb-2">
              <label htmlFor="disclaimer">
                <input type="checkbox" name="disclaimer" feedback="You must agree before submitting." value="disclaimer" id="disclaimer" label="I have read the disclaimer" checked={isCheckedDisclaimer} onChange={handleCheckDisclaimer} />
                <span className="p-2">I have read the disclaimer</span>
              </label>
            </fieldset>
          </Col>
        </Row>
        <StandardRedButton disabled={isDisabledSubmitButton} className="mt-2 ml-0" type="submit">
          Submit form
        </StandardRedButton>
      </form>
    </CareerFormContainer>
  );
};

export default CareerForm;
