import {
  DetailsContainer,
  LinkTitle,
  LinkList,
  ContactsContainer,
  FooterColumn,
} from 'styles/Footer.style';

import { SITE_PHONE, SITE_FAX, SITE_EMAIL } from 'utils/constants';
import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsPrinterFill,
} from 'react-icons/bs';
import { MdLocalPhone } from 'react-icons/md';
import { IoPrintSharp } from 'react-icons/io5';
import SocialNetworks from './SocialNetworks';

export default function FooterDetails() {
  return (
    <DetailsContainer>
      <ContactsContainer>
        <FooterColumn>
          <LinkTitle>Contact Information</LinkTitle>
          <LinkList>
            <li>
              <a className="phone-mail-footer" href={`tel:${SITE_PHONE}`}>
                <MdLocalPhone size={20} />
                <span>{SITE_PHONE}</span>
              </a>
            </li>
            <li>
              <IoPrintSharp size={20} />
              {SITE_FAX}
            </li>
            <li>
              <a className="phone-mail-footer" href={`mailto:${SITE_EMAIL}`}>
                <BsFillEnvelopeFill size={20} />
                <span>{SITE_EMAIL}</span>
              </a>
            </li>
          </LinkList>
        </FooterColumn>
      </ContactsContainer>
      <SocialNetworks />
    </DetailsContainer>
  );
}
