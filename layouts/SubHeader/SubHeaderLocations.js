import CurrentOfficeCard from 'components/molecules/location/CurrentOfficeCard';
import OfficesLinkTabs from 'components/molecules/location/OfficesLinkTabs';
import React from 'react';
import empty from 'is-empty';
import {
  SubHeaderInteractive,
  SubHeaderLocationsHolder,
} from 'styles/practices/SubHeader.style';

const SubHeaderLocations = ({ locations, title, officeInfo }) => {
  if (empty(locations)) return null;
  return (
    <SubHeaderInteractive>
      <SubHeaderLocationsHolder>
        <CurrentOfficeCard {...officeInfo}>
          <p className="current-office-card-title">{title}</p>
        </CurrentOfficeCard>
        {locations?.length > 0 && (
          <OfficesLinkTabs officesForTabs={locations} />
        )}
      </SubHeaderLocationsHolder>
    </SubHeaderInteractive>
  );
};

export default SubHeaderLocations;
