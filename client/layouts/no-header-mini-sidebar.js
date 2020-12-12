import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NoHeaderMiniSidebar({ body, sidebar }) {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={9}>
          {body}
        </Col>
        <Col sm={12} md={3}>
          {sidebar}
        </Col>
      </Row>
    </Container>
  );
}
