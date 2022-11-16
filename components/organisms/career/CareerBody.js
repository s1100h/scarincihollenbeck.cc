import { Container, Row, Col } from 'react-bootstrap';
import CareerForm from 'components/molecules/CareerForm';
import { createMarkup, formatPageImageToCloudinaryUrl } from 'utils/helpers';

const SingleCareerBody = ({ title, position, contact }) => {
  const modPosition = formatPageImageToCloudinaryUrl(position);

  return (
    <Container className="px-0">
      <Row>
        <Col sm={12}>
          <div className="content" dangerouslySetInnerHTML={createMarkup(modPosition)} />
          <CareerForm contact={contact} title={title} />
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCareerBody;
