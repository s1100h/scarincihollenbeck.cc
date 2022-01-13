import { Container, Row, Col } from 'react-bootstrap';
import AttorneyCard from 'components/shared/AttorneyCard';
import textStyles from 'styles/Text.module.css';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';

const Members = ({ title, members, type }) => (
  <div className="w-100 mt-5 px-3">
    <h3 className={`${textStyles.redTitle} text-uppercase border-bottom mb-0`}>
      <strong>{title}</strong>
    </h3>
    <Container className="articles-container mt-3">
      <Row>
        {members.map(({
          title, uri, lastName, featuredImage, phone, email,
        }) => (
          <Col sm={12} md={6} lg={4} className="mb-3" key={lastName}>
            <AttorneyCard
              link={uri}
              image={featuredImage}
              name={title}
              title=""
              number={phone}
              email={email}
              width={80}
              height={112}
              type={type}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Members;
