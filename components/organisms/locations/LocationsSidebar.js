import React, { useContext } from 'react';
import { LocationContext } from 'contexts/LocationContext';
import OfficeDetails from 'components/molecules/location/OfficeDetails';
import { sortByKey } from 'utils/helpers';

const LocationsSidebar = () => {
  const { locations } = useContext(LocationContext);

  if (locations) {
    return (
      <>
        <ul>
          {sortByKey(locations, 'title').map((office) => (
            <li key={office.ID || office.id} className="mb-3">
              <OfficeDetails office={office} />
            </li>
          ))}
        </ul>
      </>
    );
  }
  return null;
};

export default LocationsSidebar;
