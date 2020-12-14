import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Text.module.css';

export default function CareersResults({ positions }) {
  return (
    <div className="w-100 border mt-0">
      <Container className="mt-2">
        <Row>
          {positions.length < 1 && (
            <div className="w-100 my-5">
              <h3 className="text-center red-title">
                Sorry, no career positions available...
              </h3>
            </div>
          )}
          {positions.map((p) => (
            <Col sm={12} md={4} key={p.title} className="mt-3 mb-2">
              <Link href="/career/[slug]" as={`/career/${p.slug}`}>
                <a className="text-dark">
                  <div className="card d-flex flex-row">
                    <div className="my-2 pl-2">
                      <h5 className={styles.redTitle}>
                        <strong>
                          {p.title}
                        </strong>
                      </h5>
                      <hr className="my-0 py-1" />
                      <p className="my-0">
                        <strong>Location: </strong>
                        {p.careerFields.positionLocation}
                      </p>
                      <p className="my-0">
                        <strong>Type: </strong>
                        {p.careerFields.positionType}
                      </p>
                      <p className="my-0">
                        <strong>Start: </strong>
                        {p.careerFields.startDate}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
