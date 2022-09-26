import Link from 'next/link';
import Image from 'next/image';
import CookieConsentMessage from 'components/shared/CookieConsentMessage';
import textStyles from 'styles/Text.module.css';
import {
  FIRM_PAGES,
  SITE_FOOTER_NAVIGATION,
  OFFICE_LOCATIONS,
  SITE_PHONE,
  SITE_FAX,
  SITE_EMAIL,
  CORE_PRACTICES,
  SOCIAL_MEDIA_LINKS,
  MAKE_A_PAYMENT_URLS,
} from 'utils/constants';
import { FooterContainer, LinkTitle, LinkList } from 'styles/Footer.style';
import LinksBox from './LinksBox';
import FooterDetails from './FooterDetails';

export default function Footer() {
  const colOnePractices = CORE_PRACTICES.filter((_, i) => i <= 4);
  const colTwoPractices = CORE_PRACTICES.filter((_, i) => i >= 5);

  return (
    <FooterContainer>
      <div>
        <div className="d-flex flex-column flex-md-row justify-content-md-between">
          <div className="mr-0 mr-md-2 mr-lg-0">
            <LinksBox title="Firm Pages" linksArr={FIRM_PAGES} />
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <LinksBox title="Office Locations" linksArr={OFFICE_LOCATIONS} />
            <LinksBox title="Social Media" linksArr={SOCIAL_MEDIA_LINKS} isTargetBlank />
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <LinksBox title="Client Services" linksArr={MAKE_A_PAYMENT_URLS} isTargetBlank />
            <LinkTitle>
              <strong>Contact Information</strong>
            </LinkTitle>
            <LinkList>
              <li>
                <strong>Phone: </strong>
                {' '}
                {SITE_PHONE}
              </li>
              <li>
                <strong>Fax: </strong>
                {' '}
                {SITE_FAX}
              </li>
              <li>
                <strong>Email: </strong>
                {' '}
                {SITE_EMAIL}
              </li>
            </LinkList>
          </div>

          <div className="mr-0 mr-md-2 mr-lg-0">
            <LinksBox title="Core Practices" linksArr={colOnePractices} />
          </div>
          <div className="mr-0 mt-4 mr-md-2 mr-lg-0">
            <LinksBox linksArr={colTwoPractices} />
          </div>
        </div>
      </div>
      <FooterDetails />
      <CookieConsentMessage />
    </FooterContainer>
  );
}
