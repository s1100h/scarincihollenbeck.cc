import dynamic from 'next/dynamic';
import { Row, Col } from 'react-bootstrap';
import lineStyles from 'styles/LineHeader.module.css';

const LocationCard = dynamic(() => import('components/molecules/home/LocationCard'));

const AllOfficeLocations = ({ offices }) => (
  <Row className="mt-5">
    <Col sm={12} className="mt-5 mb-0 pb-0">
      <div className={lineStyles.lineHeader}>
        <h3>Office Locations</h3>
      </div>
    </Col>
    {offices.map(({ node }) => (
      <LocationCard key={node.id} {...node} />
    ))}
  </Row>
);

export default AllOfficeLocations;
