import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/HideMobile.module.css';

export default function ThreeColMiniSidebar({ body, OneSidebar, TwoSidebar }) {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} lg={1} className={styles.hideMobile}>
          {OneSidebar}
        </Col>
        <Col sm={12} lg={8}>
          {body}
        </Col>
        <Col sm={12} lg={3}>
          {TwoSidebar}
        </Col>
      </Row>
    </Container>
  );
}
