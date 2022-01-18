import { Container, Row, Col } from 'react-bootstrap';
import CareerForm from 'components/molecules/CareerForm';
import styles from 'styles/BasicContent.module.css';
import { createMarkup, formatPageImageToCloudinaryUrl } from 'utils/helpers';

export default function SingleCareerBody({ title, position, contact }) {
  const modPosition = formatPageImageToCloudinaryUrl(position);

  return (
    <Container className="px-0">
      <Row>
        <Col sm={12}>
          <div className={styles.content} dangerouslySetInnerHTML={createMarkup(modPosition)} />
          <CareerForm contact={contact} title={title} />
        </Col>
      </Row>
    </Container>
  );
}
