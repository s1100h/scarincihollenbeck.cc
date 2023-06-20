import { useState } from 'react';
import ContactForm from '../../shared/ContactForm/ContactForm';
import { AboutAuthorFormCardContainer, ContactNowBtn, FormBox } from '../../../styles/AboutAuthorFormCard.style';
import ModalWindow from '../../common/ModalWindow';

const AboutAuthorFormCard = () => {
  const [show, setShow] = useState(false);

  return (
    <AboutAuthorFormCardContainer className="d-print-none mt-4">
      <ContactNowBtn onClick={() => setShow(true)}>
        <span>Contact now</span>
      </ContactNowBtn>
      <ModalWindow isOpen={show} setOpenModal={setShow}>
        <FormBox>
          <h4>Let`s get in touch!</h4>
          <ContactForm />
        </FormBox>
      </ModalWindow>
    </AboutAuthorFormCardContainer>
  );
};

export default AboutAuthorFormCard;
