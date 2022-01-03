import { Container, Row, Col } from 'react-bootstrap';

export default function LargeSidebar({ body, sidebar }) {
  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          {body}
        </Col>
        <Col sm={12} md={4}>
          {sidebar}
        </Col>
      </Row>
    </Container>
  );
}
