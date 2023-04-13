import { useContext, useEffect, useState } from 'react';
import { LocationContext } from 'contexts/LocationContext';
import { sortByKey } from 'utils/helpers';
import { BigGrayTitle } from 'styles/BigGrayTitle.style';
import Link from 'next/link';
import { LocationsOfficesContainer, OfficeBtn } from '../../../styles/ContactUs.style';
import Map from '../../molecules/location/Map';
import CurrentOfficeCard from '../../molecules/location/CurrentOfficeCard';

const OfficeList = ({ officesArr }) => {
  const [chosenOffice, setOffice] = useState(officesArr[0]);
  return (
    <LocationsOfficesContainer>
      <div className="mt-5">
        <Map map={chosenOffice.mapLink} />
        <CurrentOfficeCard {...chosenOffice}>
          <Link href={chosenOffice.uri} className="mt-3 mb-0 fw-bold">
            {chosenOffice.title}
          </Link>
        </CurrentOfficeCard>
        <ul>
          {officesArr?.length > 0
            && officesArr.map((office) => (
              <li>
                <OfficeBtn onClick={() => setOffice(office)}>{office.title}</OfficeBtn>
              </li>
            ))}
        </ul>
      </div>
    </LocationsOfficesContainer>
  );
};

export default OfficeList;
