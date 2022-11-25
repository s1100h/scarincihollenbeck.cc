import { Container, Row, Col } from 'react-bootstrap';

const EmptyResults = () => (
  <Container className="mt-2">
    <Row>
      <Col sm={12}>
        <div className="my-5">
          <h3 className="redTitle text-center">
            <strong>Sorry, no career positions available</strong>
          </h3>
        </div>
      </Col>
    </Row>
  </Container>
);

export default EmptyResults;
