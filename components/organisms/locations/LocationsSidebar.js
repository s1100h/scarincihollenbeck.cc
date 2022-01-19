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
            <li key={office.ID || office.id} className="list-unstyled py-2">
              <OfficeDetails office={office} />
            </li>
          ))}
          <style jsx>
            {`
              ul {
                margin-left: -2.48em;
                margin-top: -10px;
              }
              ul li {
                margin-bottom: 6px;
              }

              ul li:not(:last-child) {
                border-bottom: 0.5px solid #e9e9e9;
              }
            `}
          </style>
        </ul>
      </>
    );
  }
  return null;
};

export default LocationsSidebar;
