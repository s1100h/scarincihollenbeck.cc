import CookieConsentMessage from 'components/shared/CookieConsentMessage';
import {
  FIRM_PAGES,
  OFFICE_LOCATIONS,
  CORE_PRACTICES,
  MAKE_A_PAYMENT_URLS,
} from 'utils/constants';
import { FooterContainer, HiddenSEOBox } from 'styles/Footer.style';
import { useRouter } from 'next/router';
import LinksBox from './LinksBox';
import FooterDetails from './FooterDetails';
import { cannabisLawColors } from '../../../styles/global_styles/Global.styles';
import { getSlugFromUrl } from '../../../utils/helpers';

const setFooterBackgroundColor = (page) => {
  const footerColorsMap = {
    'new-jersey-cannabis-law': cannabisLawColors.cannabisColorDarkGray,
  };
  return footerColorsMap[page];
};
export default function Footer() {
  const colOnePractices = CORE_PRACTICES.filter((_, i) => i <= 4);
  const colTwoPractices = CORE_PRACTICES.filter((_, i) => i >= 5);

  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);

  const backgroundFooterColor = setFooterBackgroundColor(slug);

  return (
    <FooterContainer backgroundFooterColor={backgroundFooterColor}>
      <HiddenSEOBox>
        <LinksBox title="Firm Pages" linksArr={FIRM_PAGES} />
        <LinksBox title="Office Locations" linksArr={OFFICE_LOCATIONS} />
        <LinksBox
          title="Client Services"
          linksArr={MAKE_A_PAYMENT_URLS}
          isTargetBlank
        />
        <LinksBox title="Core Practices" linksArr={colOnePractices} />
        <LinksBox linksArr={colTwoPractices} />
      </HiddenSEOBox>
      <FooterDetails />
      <CookieConsentMessage />
    </FooterContainer>
  );
}
