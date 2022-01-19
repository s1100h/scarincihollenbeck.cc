import { Container, Row, Col } from 'react-bootstrap';
import styles from 'styles/Text.module.css';

const EmptyResults = () => (
  <Container className="mt-2">
    <Row>
      <Col sm={12}>
        <div className="my-5">
          <h3 className={`${styles.redTitle} text-center`}>
            <strong>Sorry, no career positions available</strong>
          </h3>
        </div>
      </Col>
    </Row>
  </Container>
);

export default EmptyResults;
