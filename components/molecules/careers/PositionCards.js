import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import PositionCard from './PositionCard';

const PositionCards = ({ positions }) => {
  const { push } = useRouter();
  const handleClickCareer = (slug) => push(slug);
  return (
    <div className="w-100 border mt-0">
      <Container className="mt-2">
        <Row>
          {positions.map((position) => (
            <Col sm={12} md={6} lg={4} key={position.databaseId} className="mt-3 mb-2">
              <PositionCard
                handleClickToCareer={handleClickCareer}
                slug={`careers/${position.slug}`}
                title={position.position}
                positionLocation={position.positionLocation}
                positionType={position.positionType}
                startDate={position.startDate}
                duration={position.duration}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PositionCards;
