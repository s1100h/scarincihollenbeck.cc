import {
  DetailsContainer,
  LinkTitle,
  LinkList,
  FooterColumn,
} from 'styles/Footer.style';

import { SITE_PHONE, SITE_FAX, SITE_EMAIL } from 'utils/constants';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { MdLocalPhone } from 'react-icons/md';
import { IoPrintSharp } from 'react-icons/io5';
import SocialNetworks from './SocialNetworks';

export default function FooterDetails() {
  return (
    <DetailsContainer>
      <FooterColumn>
        <LinkTitle>Contact Information</LinkTitle>
        <LinkList>
          <li>
            <a className="phone-mail-footer" href={`tel:${SITE_PHONE}`}>
              <span className="icon">
                <MdLocalPhone />
              </span>
              <span className="link-text">{SITE_PHONE}</span>
            </a>
          </li>
          <li>
            <IoPrintSharp size={20} />
            <span>{SITE_FAX}</span>
          </li>
          <li>
            <a className="phone-mail-footer" href={`mailto:${SITE_EMAIL}`}>
              <span className="icon">
                <BsFillEnvelopeFill />
              </span>
              <span className="link-text">{SITE_EMAIL}</span>
            </a>
          </li>
        </LinkList>
      </FooterColumn>

      <SocialNetworks />
    </DetailsContainer>
  );
}
