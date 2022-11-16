import Link from 'next/link';
import Image from 'next/image';
import {
  DetailsContainer,
  BottomLinks,
  Advertising,
  LinkTitle,
  LinkList,
  ContactsBox,
  ContactsContainer,
} from 'styles/Footer.style';

import { SITE_PHONE, SITE_FAX, SITE_EMAIL } from 'utils/constants';
import SocialNetworks from './SocialNetworks';

export default function FooterDetails() {
  const currentYear = new Date().getFullYear();
  return (
    <DetailsContainer>
      <Advertising>
        <section>
          <Image
            src="/images/scarinci-hollenbeck-diamond-badge-SVG.svg"
            alt="sh diamond logo favicon"
            width={100}
            height={100}
          />
          <section>
            <p>ATTORNEY ADVERTISING</p>
            <p>
              Prior results do not guarantee a similar outcome. @
              {currentYear}
              , Scarinci Hollenbeck,
              LLC, all rights reserved
            </p>
            <BottomLinks>
              <li>
                <Link href="/privacy-policy">
                  <a>Privacy policy</a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/terms-of-use">
                  <a>Terms of use</a>
                </Link>
              </li>
            </BottomLinks>
          </section>
        </section>
      </Advertising>
      <ContactsContainer>
        <ContactsBox>
          <LinkTitle>Contact Information</LinkTitle>
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
        </ContactsBox>
        <SocialNetworks />
      </ContactsContainer>
    </DetailsContainer>
  );
}
