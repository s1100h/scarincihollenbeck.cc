import textStyles from 'styles/Text.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import Map from '../location/Map';
import { OFFICE_LOCATIONS } from '../../../utils/constants';

export default function LocationCard() {
  const [score, setScore] = useState(false);

  const handleClick = (event) => {
    document.querySelectorAll('.locationParentJs_active').forEach((item) => {
      if (item.classList.contains('locationParentJs_active')) {
        item.classList.remove('locationParentJs_active');
      }
      const title = item.querySelector('.locationTitleJs');
      if (title.classList.contains('locationTitleJs_active')) {
        title.classList.remove('locationTitleJs_active');
      }
    });

    const parent = event.target.closest('.locationParentJs');
    const title = parent.querySelector('.locationTitleJs');

    parent.classList.add('locationParentJs_active');
    title.classList.add('locationTitleJs_active');
    const ind = event.target.getAttribute('data-id') - 1;
    return setScore(ind);
  };

  return (
    <div className={textStyles.locationCard}>
      <div className={textStyles.locationCardMap}>
        <Map
          title={!score ? OFFICE_LOCATIONS[0].label : OFFICE_LOCATIONS[`${score}`].label}
          map={!score ? OFFICE_LOCATIONS[0].mapUrl : OFFICE_LOCATIONS[`${score}`].mapUrl}
        />
      </div>
      <div className={textStyles.locationOffices}>
        {OFFICE_LOCATIONS.map((office, ind) => (
          <div
            className={`box-shadow  
             ${
               office.label === 'Little Falls, NJ' ? 'locationParentJs_active' : ''
             }  locationParentJs`}
          >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
              className={`${textStyles.locationTitle} ${
                ind === 0 ? 'locationTitleJs_active' : ''
              } locationTitleJs `}
              data-id={office.id}
              onClick={handleClick}
            >
              {office.label}
            </div>
            <div className={textStyles.locationContentWr}>
              <div className={textStyles.locationContent}>
                <div className={textStyles.locationAdress}>{office.address}</div>
                <div className={`${office.tel === undefined ? 'dNone' : textStyles.locationTel}`}>
                  Phone:
                  {` ${office.tel}`}
                </div>
                <div className={`${office.fax === undefined ? 'dNone' : textStyles.locationFax}`}>
                  Fax:
                  {` ${office.fax}`}
                </div>
              </div>
              <div className={textStyles.locationBottom}>
                <Link href={`${office.slug}`}>
                  <a className={textStyles.locationLink}>Attorneys</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
