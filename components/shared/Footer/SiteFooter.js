import CookieConsentMessage from 'components/shared/CookieConsentMessage';
import {
  FIRM_PAGES, OFFICE_LOCATIONS, CORE_PRACTICES, MAKE_A_PAYMENT_URLS,
} from 'utils/constants';
import { FooterContainer, HiddenSEOBox } from 'styles/Footer.style';
import LinksBox from './LinksBox';
import FooterDetails from './FooterDetails';

export default function Footer() {
  const colOnePractices = CORE_PRACTICES.filter((_, i) => i <= 4);
  const colTwoPractices = CORE_PRACTICES.filter((_, i) => i >= 5);

  return (
    <FooterContainer>
      <HiddenSEOBox>
        <LinksBox title="Firm Pages" linksArr={FIRM_PAGES} />
        <LinksBox title="Office Locations" linksArr={OFFICE_LOCATIONS} />
        <LinksBox title="Client Services" linksArr={MAKE_A_PAYMENT_URLS} isTargetBlank />
        <LinksBox title="Core Practices" linksArr={colOnePractices} />
        <LinksBox linksArr={colTwoPractices} />
      </HiddenSEOBox>
      <FooterDetails />
      <CookieConsentMessage />
    </FooterContainer>
  );
}
