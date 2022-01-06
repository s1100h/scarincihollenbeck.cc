import { useContext } from 'react';
import { LocationContext } from 'contexts/LocationContext';
import OfficeDetails from 'components/molecules/location/OfficeDetails';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import { sortByKey } from 'utils/helpers';

const OfficeList = () => {
  const { locations } = useContext(LocationContext);

  if (locations) {
    const officeList = sortByKey(locations, 'title');

    return (
      <div className="mt-5">
        <h4 className={`${grayTitleStyles.title} mb-5`}>Office Locations</h4>
        <div
          className="d-flex flex-column flex-md-row justify-content-between"
          style={{ marginTop: '-18px' }}
        >
          {officeList.map((office) => (
            <OfficeDetails office={office} key={office.id} />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default OfficeList;
