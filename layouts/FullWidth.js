import { Container, Row, Col } from 'react-bootstrap';

const FullWidth = ({ children, classes }) => (
  <Container className={classes}>
    <Row>
      <Col sm={12}>{children}</Col>
    </Row>
  </Container>
);

export default FullWidth;
