import React from 'react';
import { CareerHeaderItem, CareerHeaderItems } from 'styles/Careers.style';
import empty from 'is-empty';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

const CareerHeader = ({ locations, duration }) => {
  if (empty(locations) && empty(duration)) return null;
  return (
    <CareerHeaderItems>
      {!empty(duration) && (
        <CareerHeaderItem>
          <BsFillBriefcaseFill />
          <span>{duration}</span>
        </CareerHeaderItem>
      )}
      {!empty(locations) && (
        <CareerHeaderItem>
          <MdLocationPin />
          {locations.map((location, index) => (
            <span key={location.databaseId}>{location?.title}</span>
          ))}
        </CareerHeaderItem>
      )}
    </CareerHeaderItems>
  );
};

export default CareerHeader;
