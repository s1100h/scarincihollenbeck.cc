import { Container, Row, Col } from 'react-bootstrap';
import CareerForm from 'components/molecules/career-form';
import styles from 'styles/BasicContent.module.css';
import { createMarkup } from 'utils/helpers';

export default function SingleCareerBody({ title, position, contact }) {
  return (
    <Container className="px-0">
      <Row>
        <Col sm={12}>
          <div className={styles.content} dangerouslySetInnerHTML={createMarkup(position)} />
          <CareerForm contact={contact} title={title} />
        </Col>
      </Row>
    </Container>
  );
}
