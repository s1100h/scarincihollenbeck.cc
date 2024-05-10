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
            <a className="phone-mail-footer" href={`tel:${SITE_PHONE}`}>
              {SITE_PHONE}
            </a>
          </li>
          <li>
            <BsPrinterFill />
            {' '}
            {SITE_FAX}
          </li>
          <li>
            <BsFillEnvelopeFill />
            {' '}
            <a className="phone-mail-footer" href={`mailto:${SITE_EMAIL}`}>
              {SITE_EMAIL}
            </a>
          </li>
        </LinkList>
      </ContactsContainer>
      <SocialNetworks />
    </DetailsContainer>
  );
}
