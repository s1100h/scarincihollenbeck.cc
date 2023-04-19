import { useState } from 'react';
import Link from 'next/link';
import { CardListBox, LocationsOfficesContainer, OfficeBtn } from '../../../styles/ContactUs.style';
import Map from '../../molecules/location/Map';
import CurrentOfficeCard from '../../molecules/location/CurrentOfficeCard';
import { GradientWrapper } from '../../../styles/SingleSubHeader.style';

const OfficeList = ({ officesArr }) => {
  const [chosenOffice, setOffice] = useState(officesArr[0]);
  return (
    <LocationsOfficesContainer>
      <Map map={chosenOffice.mapLink} />
      <CardListBox>
        <CurrentOfficeCard {...chosenOffice}>
          <Link href={chosenOffice.uri} className="mt-3 mb-0 fw-bold">
            {chosenOffice.title}
          </Link>
        </CurrentOfficeCard>
        <ul>
          {officesArr?.length > 0
            && officesArr.map((office) => (
              <li key={office.databaseId}>
                <OfficeBtn
                  variant="light"
                  onClick={() => setOffice(office)}
                  backimg={{
                    imgOffice: office.featuredImage,
                    isChosen: chosenOffice.databaseId === office.databaseId ? 'true' : '',
                  }}
                >
                  <span>{office.title}</span>
                  <GradientWrapper />
                  {chosenOffice.databaseId !== office.databaseId && <div className="hover-blur" />}
                </OfficeBtn>
              </li>
            ))}
        </ul>
      </CardListBox>
    </LocationsOfficesContainer>
  );
};

export default OfficeList;
