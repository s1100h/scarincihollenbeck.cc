import React from 'react';
import empty from 'is-empty';
import Image from 'next/image';
import { CURRENT_DOMAIN, SITE_PHONE } from '../../../utils/constants';
import {
  ContactsPrintVersion,
  ContactsWrapperPrintVersion,
  FooterPrintVersionContainer,
} from '../../../styles/attorney-page/AttorneyPrintPage.style';
import Logo from '../../organisms/Navbar/Logo';

const FooterPrintVersion = ({ locations }) => {
  const qrCodeProduction = '/images/qrCodeHome.png';
  return (
    <FooterPrintVersionContainer>
      <div>
        <div className="d-flex flex-column">
          <p className="advertising-title-print">ATTORNEY ADVERTISING</p>
          <p className="advertising-text-print">
            No Aspect of the advertisement on this website or any of its pages,
            including awards and accolades, has been approved by the Supreme
            Court of NJ or NY.
          </p>
        </div>
        <Logo whiteVariant />
      </div>

      <ContactsWrapperPrintVersion>
        <ContactsPrintVersion>
          <div className="d-flex flex-column align-items-end">
            <div className="location-print-list mb-1">
              {!empty(locations)
                && locations.map(({ name }) => (
                  <div key={name} className="location-print-item">
                    {name}
                  </div>
                ))}
            </div>
            <div className="location-print-list">
              <div className="location-print-item">
                {CURRENT_DOMAIN.replace(/^https?:\/\//, '')}
              </div>
              <div className="location-print-item">{SITE_PHONE}</div>
            </div>
          </div>
        </ContactsPrintVersion>
        <div>
          <Image
            src={qrCodeProduction}
            alt="the Bio page"
            width={140}
            height={120}
          />
        </div>
      </ContactsWrapperPrintVersion>
    </FooterPrintVersionContainer>
  );
};

export default FooterPrintVersion;
