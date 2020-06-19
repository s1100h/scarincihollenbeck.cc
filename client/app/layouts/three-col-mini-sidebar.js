import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ThreeColMiniSidebar(props) {
  const { body, OneSidebar, TwoSidebar } = props;

  return (
    <Container className="container mt-5">
      <Row>
        {OneSidebar}
        <Col sm={12} md={7}>
          {body}
        </Col>
        <Col sm={12} md={4}>
          {TwoSidebar}
        </Col>
      </Row>
    </Container>
  );
};