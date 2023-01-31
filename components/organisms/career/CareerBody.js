import { Container, Row, Col } from 'react-bootstrap';
import CareerForm from 'components/molecules/CareerForm';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const SingleCareerBody = ({ title, position, contact }) => {
  const modPosition = formatPageImageToCloudinaryUrl(position);

  return (
    <Container className="px-0">
      <Row>
        <Col sm={12}>
          <div className="content">
            <JSXWithDynamicLinks HTML={modPosition} />
          </div>
          <CareerForm contact={contact} title={title} />
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCareerBody;
