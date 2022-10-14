import { Container, Row, Col } from 'react-bootstrap';
import PositionCard from './PositionCard';

const PositionCards = ({ positions }) => (
  <div className="w-100 border mt-0">
    <Container className="mt-2">
      <Row>
        {positions.map((position) => (
          <Col sm={12} md={6} lg={4} key={position.title} className="mt-3 mb-2">
            <PositionCard
              slug={position.slug}
              title={position.title}
              positionLocation={position.positionLocation}
              positionType={position.positionType}
              startDate={position.startDate}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default PositionCards;
