import ContactForm from 'components/shared/ContactForm/ContactForm';
import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import {
  ContactFormHolder,
  ContactFormWrapper,
} from 'styles/HomeContactForm.style';
import { TitleH2 } from 'styles/common/Typography.style';

const HomeContactForm = () => (
  <ContactFormWrapper data-testid="ContactFormWrapper">
    <ContainerDefault>
      <ContactFormHolder>
        <TitleH2>Let’s get in touch!</TitleH2>
        <ContactForm buttonText="Send" blockName="homepage-contact-form" />
      </ContactFormHolder>
    </ContainerDefault>
  </ContactFormWrapper>
);

export default HomeContactForm;
