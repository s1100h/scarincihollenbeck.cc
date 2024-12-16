import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import React from 'react';
import {
  ContactHolder,
  ContactItem,
  ContactItems,
  ContactItemText,
  ContactItemTitle,
  ContactSection,
} from 'styles/ContactUs.style';
import { ContainerDefault } from 'styles/Containers.style';
import { tileContentArr } from 'utils/tileContent';

const ContactBlock = () => (
  <ContactSection>
    <ContainerDefault>
      <ContactHolder>
        <ContactItems>
          {tileContentArr?.map((tile) => (
            <ContactItem>
              <ContactItemTitle>{tile?.title}</ContactItemTitle>

              <ContactItemText>
                <JSXWithDynamicLinks HTML={tile?.textContent} />
              </ContactItemText>
            </ContactItem>
          ))}
        </ContactItems>

        <ContactForm buttonText="Send" blockName="contact-us-contact-form" />
      </ContactHolder>
    </ContainerDefault>
  </ContactSection>
);

export default ContactBlock;
