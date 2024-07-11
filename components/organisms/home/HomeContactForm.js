import ContactForm from 'components/shared/ContactForm/ContactForm';
import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import {
  ContactFormHolder,
  ContactFormTitle,
  ContactFormWrapper,
} from 'styles/HomeContactForm.style';

const HomeContactForm = () => (
  <ContactFormWrapper>
    <ContainerDefault>
      <ContactFormHolder>
        <ContactFormTitle>Let’s get in touch!</ContactFormTitle>
        <ContactForm buttonText="Send" blockName="homepage-contact-form" />
      </ContactFormHolder>
    </ContainerDefault>
  </ContactFormWrapper>
);

export default HomeContactForm;
