import Link from 'next/link';
import React, { useState } from 'react';
import {
  Contact, ContactInfoCard, ContactInfoContent, LinkToAttorneys, LocationCardMain, LocationFooter, LocationHeader, LocationOffices, MapBox,
} from 'styles/LocationCard.style';
import {
  BsCaretDownFill, BsFillPrinterFill, BsFillSignpostFill, BsFillTelephoneFill,
} from 'react-icons/bs';
import { globalColor } from 'styles/global_styles/Global.styles';
import empty from 'is-empty';
import Map from '../location/Map';

const colorActiveIcons = globalColor.red.darkRed;
const colorInactiveIcons = globalColor.gray.gray90;

const sizeIcons = 30;

export default function LocationCard({ officesData }) {
  const [cardIndex, setCardId] = useState(0);

  return (
    <LocationCardMain>
      <MapBox>
        <Map title={!cardIndex ? officesData[0].title : officesData[`${cardIndex}`].title} map={!cardIndex ? officesData[0].mapLink : officesData[`${cardIndex}`].mapLink} />
      </MapBox>
      <LocationOffices>
        {officesData.map((office, idx) => (
          <ContactInfoCard key={office.databaseId} openCard={cardIndex === idx}>
            <LocationHeader onClick={() => setCardId(idx)} isActive={cardIndex === idx}>
              <h5>{office.title}</h5>
              <BsCaretDownFill color={cardIndex === idx ? colorActiveIcons : colorInactiveIcons} size={20} />
            </LocationHeader>
            <ContactInfoContent isOpen={cardIndex === idx}>
              <Contact>
                <div>
                  <BsFillSignpostFill color={globalColor.red.darkRed} size={sizeIcons} />
                </div>
                {office.streetAddress}
                {!empty(office.streetAddress) && ', '}
                {office.floor}
                {!empty(office?.floor) && ', '}
                {office.title.split(',')[0].trim()}
                {', '}
                {office.addressRegion}
                {' '}
                {office.postCode}
              </Contact>
              <Contact>
                <BsFillTelephoneFill color={colorActiveIcons} size={sizeIcons} />
                Phone:
                {` ${office.phone}`}
              </Contact>
              <Contact>
                <BsFillPrinterFill color={colorActiveIcons} size={sizeIcons} />
                Fax:
                {` ${office.fax}`}
              </Contact>
            </ContactInfoContent>
            <LocationFooter isActive={cardIndex === idx}>
              <Link href={office?.slug ? `location/${office.slug}` : '/location'} passHref legacyBehavior>
                <LinkToAttorneys>Attorneys</LinkToAttorneys>
              </Link>
            </LocationFooter>
          </ContactInfoCard>
        ))}
      </LocationOffices>
    </LocationCardMain>
  );
}
