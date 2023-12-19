import {
  DetailsContainer,
  LinkTitle,
  LinkList,
  ContactsContainer,
} from 'styles/Footer.style';

import { SITE_PHONE, SITE_FAX, SITE_EMAIL } from 'utils/constants';
import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsPrinterFill,
} from 'react-icons/bs';
import SocialNetworks from './SocialNetworks';

export default function FooterDetails() {
  return (
    <DetailsContainer>
      <ContactsContainer>
        <LinkTitle>Contact Information</LinkTitle>
        <LinkList>
          <li>
            <BsFillTelephoneFill />
            {' '}
            {SITE_PHONE}
          </li>
          <li>
            <BsPrinterFill />
            {' '}
            {SITE_FAX}
          </li>
          <li>
            <BsFillEnvelopeFill />
            {' '}
            {SITE_EMAIL}
          </li>
        </LinkList>
      </ContactsContainer>
      <SocialNetworks />
    </DetailsContainer>
  );
}
