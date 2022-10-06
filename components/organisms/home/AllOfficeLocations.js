import React, { Suspense } from 'react';
import { LocationTitle } from 'styles/LocationCard.style';

const LocationCard = React.lazy(() => import('components/molecules/home/LocationCard'));

const AllOfficeLocations = () => (
  <div className="wrapper-section">
    <LocationTitle>OFFICE LOCATIONS</LocationTitle>
    <Suspense fallback={<div>Loading...</div>}>
      <LocationCard />
    </Suspense>
  </div>
);
export default AllOfficeLocations;
