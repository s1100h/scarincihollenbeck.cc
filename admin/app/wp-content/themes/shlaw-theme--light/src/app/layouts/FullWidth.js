import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FullWidth(props) {
  const { children } = props;
  return (
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  );
};