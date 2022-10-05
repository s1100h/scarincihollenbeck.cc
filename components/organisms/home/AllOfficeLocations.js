import dynamic from 'next/dynamic';
import { LocationTitle } from 'styles/LocationCard.style';

const LocationCard = dynamic(() => import('components/molecules/home/LocationCard'));

const AllOfficeLocations = () => (
  <div className="wrapper-section">
    <LocationTitle>OFFICE LOCATIONS</LocationTitle>
    <LocationCard />
  </div>
);
export default AllOfficeLocations;
