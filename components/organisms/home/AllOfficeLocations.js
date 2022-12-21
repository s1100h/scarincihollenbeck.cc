import dynamic from 'next/dynamic';
import { LocationTitle } from 'styles/LocationCard.style';

const LocationCard = dynamic(() => import('components/molecules/home/LocationCard'));

const AllOfficeLocations = ({ offices }) => (
  <div className="wrapper-section">
    <LocationTitle>OFFICE LOCATIONS</LocationTitle>
    <LocationCard officesData={offices} />
  </div>
);
export default AllOfficeLocations;
