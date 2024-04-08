import CookieConsentMessage from 'components/shared/CookieConsentMessage';
import { FIRM_PAGES, OFFICE_LOCATIONS, CORE_PRACTICES } from 'utils/constants';
import {
  Advertising,
  BottomLinks,
  FooterContainer,
  FooterWrapper,
  LinksSEOBox,
} from 'styles/Footer.style';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import LinksBox from './LinksBox';
import FooterDetails from './FooterDetails';
import { cannabisLawColors } from '../../../styles/global_styles/Global.styles';
import { getSlugFromUrl } from '../../../utils/helpers';
import NavigationAndSubscription from './NavigationAndSubscription';

const setFooterBackgroundColor = (page) => {
  const footerColorsMap = {
    'new-jersey-cannabis-law': cannabisLawColors.cannabisColorDarkGray,
    // 'entertainment-and-media': globalColor.black, // page ready for deploy in prod but paused, commit 26.12.2023
  };
  return footerColorsMap[page];
};
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const colOnePractices = CORE_PRACTICES.filter((_, i) => i <= 5);
  const colTwoPractices = CORE_PRACTICES.filter((_, i) => i >= 6);

  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);

  const backgroundFooterColor = setFooterBackgroundColor(slug);

  return (
    <FooterWrapper>
      <FooterContainer backgroundFooterColor={backgroundFooterColor}>
        <NavigationAndSubscription />
        <div className="footer-wrapper">
          <LinksSEOBox>
            <LinksBox title="Core Practices" linksArr={colOnePractices} />
            <LinksBox classList="list-without-title" linksArr={colTwoPractices} />
            <LinksBox title="Firm Pages" linksArr={FIRM_PAGES} />
            <LinksBox title="Office Locations" linksArr={OFFICE_LOCATIONS} />
          </LinksSEOBox>
          <FooterDetails />
          <Advertising>
            <Image
              src="/images/sh-mini-diamond-PNG.svg"
              alt="sh diamond logo favicon"
              width={110}
              height={100}
            />
            <section>
              <p>ATTORNEY ADVERTISING</p>
              <p>
                Prior results do not guarantee a similar outcome. @
                {currentYear}
                ,
                Scarinci Hollenbeck, LLC, all rights reserved
              </p>
              <BottomLinks>
                <li>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/terms-of-use">Terms of use</Link>
                </li>
              </BottomLinks>
            </section>
          </Advertising>
        </div>
        <CookieConsentMessage />
      </FooterContainer>
    </FooterWrapper>
  );
}
