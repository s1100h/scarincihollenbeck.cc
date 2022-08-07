import dynamic from 'next/dynamic';

const LocationCard = dynamic(() => import('components/molecules/home/LocationCard'));

const AllOfficeLocations = () => (
  <div className="wrapper-section">
    <h3 className="title-block">OFFICE LOCATIONS</h3>
    <LocationCard />
  </div>
);
export default AllOfficeLocations;
