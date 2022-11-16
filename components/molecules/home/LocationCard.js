import Link from 'next/link';
import React, { useState } from 'react';
import {
  Contact,
  ContactInfoCard,
  ContactInfoContent,
  LinkToAttorneys,
  LocationCardMain,
  LocationHeader,
  LocationOffices,
  MapBox,
} from 'styles/LocationCard.style';
import {
  BsCaretDownFill,
  BsFillPrinterFill,
  BsFillSignpostFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import Map from '../location/Map';
import { OFFICE_LOCATIONS } from '../../../utils/constants';

const colorIcons = '#a91110';
const sizeIcons = 30;

export default function LocationCard() {
  const [cardIndex, setCardId] = useState(0);

  return (
    <LocationCardMain>
      <MapBox>
        <Map
          title={!cardIndex ? OFFICE_LOCATIONS[0].label : OFFICE_LOCATIONS[`${cardIndex}`].label}
          map={!cardIndex ? OFFICE_LOCATIONS[0].mapUrl : OFFICE_LOCATIONS[`${cardIndex}`].mapUrl}
        />
      </MapBox>
      <LocationOffices>
        {OFFICE_LOCATIONS.map((office, idx) => (
          <ContactInfoCard key={office.id} openCard={cardIndex === idx}>
            <LocationHeader onClick={() => setCardId(idx)}>
              <h3>{office.label}</h3>
              <BsCaretDownFill color={cardIndex === idx ? '#a91110' : '#4a4a4a'} size={20} />
            </LocationHeader>
            <ContactInfoContent open={cardIndex === idx}>
              <Contact>
                <p>
                  <BsFillSignpostFill color={colorIcons} size={sizeIcons} />
                </p>
                {office.address}
              </Contact>
              <Contact>
                <BsFillTelephoneFill color={colorIcons} size={sizeIcons} />
                Phone:
                {` ${office.tel}`}
              </Contact>
              <Contact>
                <BsFillPrinterFill color={colorIcons} size={sizeIcons} />
                Fax:
                {` ${office.fax}`}
              </Contact>
            </ContactInfoContent>
            <footer>
              <Link href={`${office.slug}`} passHref>
                <LinkToAttorneys>Attorneys</LinkToAttorneys>
              </Link>
            </footer>
          </ContactInfoCard>
        ))}
      </LocationOffices>
    </LocationCardMain>
  );
}
