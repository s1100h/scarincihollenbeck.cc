import CookieConsentMessage from 'components/shared/CookieConsentMessage';
import { FIRM_PAGES, OFFICE_LOCATIONS, CORE_PRACTICES } from 'utils/constants';
import {
  Advertising,
  BottomLinks,
  FooterDoubleColumn,
  FooterHolder,
  FooterWrapper,
  LinksSEOBox,
} from 'styles/Footer.style';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerDefault } from 'styles/Containers.style';
import LinksBox from './LinksBox';
import FooterDetails from './FooterDetails';
import { cannabisLawColors } from '../../../styles/global_styles/Global.styles';
import { getSlugFromUrl } from '../../../utils/helpers';
import NavigationAndSubscription from './NavigationAndSubscription';
import { FooterContent } from '../../../styles/Footer.style';

const setFooterBackgroundColor = (page) => {
  const footerColorsMap = {
    'new-jersey-cannabis-law': cannabisLawColors.cannabisColorDarkGray,
    // 'entertainment-and-media': globalColor.black, // page ready for deploy in prod but paused, commit 26.12.2023
  };
  return footerColorsMap[page];
};
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);

  const backgroundFooterColor = setFooterBackgroundColor(slug);

  return (
    <FooterWrapper backgroundFooterColor={backgroundFooterColor}>
      <NavigationAndSubscription />

      <ContainerDefault>
        <FooterHolder>
          <FooterContent>
            <LinksSEOBox>
              <LinksBox title="Core Practices" linksArr={CORE_PRACTICES} />
              <LinksBox title="Industries" linksArr={CORE_PRACTICES} />

              <FooterDoubleColumn>
                <LinksBox title="Firm Pages" linksArr={FIRM_PAGES} />
                <LinksBox
                  title="Office Locations"
                  linksArr={OFFICE_LOCATIONS}
                />
              </FooterDoubleColumn>
            </LinksSEOBox>

            <FooterDetails />
          </FooterContent>

          <Advertising>
            <Image
              src="/images/sh-mini-diamond-PNG.svg"
              alt="sh diamond logo favicon"
              width={110}
              height={100}
            />
            <section>
              <p className="advertising-title">ATTORNEY ADVERTISING</p>
              <p className="advertising-text">
                No Aspect of the advertisement on this website or any of its
                pages, including awards and accolades, has been approved by the
                Supreme Court of NJ or NY.
              </p>
              <p className="advertising-text">
                Prior results do not guarantee a similar outcome. @
                {currentYear}
                , Scarinci Hollenbeck, LLC, all rights reserved
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
        </FooterHolder>

        <CookieConsentMessage />
      </ContainerDefault>
    </FooterWrapper>
  );
}
