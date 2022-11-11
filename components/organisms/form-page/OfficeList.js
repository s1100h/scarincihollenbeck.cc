import { useContext, useEffect, useState } from 'react';
import { LocationContext } from 'contexts/LocationContext';
import OfficeDetails from 'components/molecules/location/OfficeDetails';
import { sortByKey } from 'utils/helpers';
import { BigGrayTitle } from 'styles/BigGrayTitle.style';

const OfficeList = () => {
  const { locations } = useContext(LocationContext);

  const [sortableLocations, setLocations] = useState();

  useEffect(() => {
    setLocations(sortByKey(locations, 'title'));
  }, [locations]);

  return (
    <>
      {sortableLocations ? (
        <div className="mt-5">
          <BigGrayTitle className="mb-5">Office Locations</BigGrayTitle>
          <div
            className="d-flex flex-column flex-md-row justify-content-between"
            style={{ marginTop: '-18px' }}
          >
            {sortableLocations.map((office) => (
              <OfficeDetails office={office} key={office.id} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OfficeList;
