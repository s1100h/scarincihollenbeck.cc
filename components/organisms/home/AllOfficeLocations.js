import dynamic from 'next/dynamic';
import { Row, Col } from 'react-bootstrap';
import lineStyles from 'styles/LineHeader.module.css';

const LocationCard = dynamic(() => import('components/molecules/home/LocationCard'));

const AllOfficeLocations = ({ offices }) => (
  <div className="wrapper-section">
    <h3 className="title-block">OFFICE LOCATIONS</h3>
    <div className={lineStyles.location}>
      <div className={lineStyles.items}>
        <div className={lineStyles.map} />
        <div className={lineStyles.content}>
          {offices.map(({ node }) => (
            <LocationCard key={node.id} {...node} />
          ))}
        </div>
      </div>
      {}
    </div>
  </div>
);

export default AllOfficeLocations;
