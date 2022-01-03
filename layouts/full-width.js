import { Container, Row, Col } from 'react-bootstrap';

const FullWidth = ({ children }) => (
  <Container>
    <Row>
      <Col sm={12}>{children}</Col>
    </Row>
  </Container>
);

export default FullWidth;
