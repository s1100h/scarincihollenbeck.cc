import React from 'react';
import {
  LocationCardList,
  LocationCardItem,
  LocationCardItemIcon,
  LocationCardItemLink,
  LocationCardLink,
  LocationCardTitle,
  LocationCardWrapper,
} from 'styles/LocationCard.style';
import empty from 'is-empty';
import { MdLocalPhone, MdLocationPin } from 'react-icons/md';
import { IoPrintSharp } from 'react-icons/io5';

const LocationCard = ({
  title,
  streetAddress,
  floor,
  addressLocality,
  addressRegion,
  postCode,
  phone,
  fax,
  uri,
  setShowNavContent,
  setIsSidebarOpen,
}) => (
  <LocationCardWrapper>
    <LocationCardTitle>{title}</LocationCardTitle>
    <LocationCardList>
      <LocationCardItem className="location-card-item">
        <LocationCardItemIcon className="location-card-icon">
          <MdLocationPin size={24} />
        </LocationCardItemIcon>
        {streetAddress}
        {streetAddress?.length > 0 && (
        <>
          ,
          {empty(floor) && <br />}
        </>
        )}
        {floor}
        {floor?.length > 0 && (
          <>
            ,
            <br />
          </>
        )}
        {addressLocality}
        {addressLocality?.length > 0 && ', '}
        {`${addressRegion} ${postCode}`}
      </LocationCardItem>

      <LocationCardItem>
        <LocationCardItemLink
          className="location-card-link"
          href={`tel:${phone}`}
        >
          <LocationCardItemIcon className="location-card-icon">
            <MdLocalPhone size={24} />
          </LocationCardItemIcon>
          {phone}
        </LocationCardItemLink>
      </LocationCardItem>

      <LocationCardItem>
        <LocationCardItemLink
          className="location-card-link"
          href={`fax:${phone}`}
        >
          <LocationCardItemIcon className="location-card-icon">
            <IoPrintSharp size={24} />
          </LocationCardItemIcon>
          {fax}
        </LocationCardItemLink>
      </LocationCardItem>
    </LocationCardList>

    <LocationCardLink
      href={uri}
      onClick={() => {
        setShowNavContent(false);
        setIsSidebarOpen(false);
      }}
    />
  </LocationCardWrapper>
);

export default LocationCard;
