import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentTitle from 'components/atoms/ContentTitle';

const RelatedPractices = ({ practices }) => (
  <Container className="mb-5 mt-5 pl-0">
    <ContentTitle title="Services We Offer" />
    <Row>
      <Col sm={12} md={6} className="col-sm-12 col-md-6">
        <ul className="mx-0 px-0">
          {practices.map(
            (p, i) => practices.length / 2 > i && (
            <li key={p.title} className="mb-3">
              <Link href={p.slug}>
                <a className="fs-1_2rem">
                  <strong>
                    <u>{p.title}</u>
                  </strong>
                </a>
              </Link>
            </li>
            ),
          )}
        </ul>
      </Col>
      <Col sm={12} md={6}>
        <ul className="mx-0 px-0">
          {practices.map(
            (p, i) => practices.length / 2 <= i && (
            <li key={p.title} className="mb-3">
              <Link href={p.slug}>
                <a className="fs-1_2rem">
                  <strong>
                    <u>{p.title}</u>
                  </strong>
                </a>
              </Link>
            </li>
            ),
          )}
        </ul>
      </Col>
    </Row>
  </Container>
);

export default RelatedPractices;
