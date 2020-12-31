import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CareerForm from 'components/career-form';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import styles from 'styles/BasicContent.module.css';
import { createMarkup } from 'utils/helpers';

export default function SingleCareerBody({ title, position, contact }) {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h4 className={grayTitleStyles.title}>{title}</h4>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={createMarkup(position)}
          />
          <CareerForm contact={contact} title={title} />
        </Col>
      </Row>
    </Container>
  );
}
