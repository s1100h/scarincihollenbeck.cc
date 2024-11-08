import CurrentOfficeCard from 'components/molecules/location/CurrentOfficeCard';
import OfficesLinkTabs from 'components/molecules/location/OfficesLinkTabs';
import React from 'react';
import empty from 'is-empty';
import { globalColor } from 'styles/global_styles/Global.styles';
import { SubHeaderInteractive } from 'styles/practices/SubHeader.style';

const SubHeaderLocations = ({ locations, title, officeInfo }) => {
  if (empty(locations)) return null;
  return (
    <SubHeaderInteractive>
      <div className="d-flex gap-4">
        <CurrentOfficeCard
          {...officeInfo}
          backgroundColor={globalColor.blue.darkUltramarine}
        >
          <h3 className="current-office-card-title">{title}</h3>
        </CurrentOfficeCard>
        {locations?.length > 0 && (
          <OfficesLinkTabs officesForTabs={locations} isBlueVariant />
        )}
      </div>
    </SubHeaderInteractive>
  );
};

export default SubHeaderLocations;
