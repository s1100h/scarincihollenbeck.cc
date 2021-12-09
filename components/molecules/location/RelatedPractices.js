import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import textStyles from 'styles/Text.module.css';
import fontStyles from 'styles/Fonts.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

const RelatedPractices = ({ practices }) => (
  <>
    <p className={`${grayTitleStyles.title} mt-5`}>Services We Offer</p>
    <Container className="mb-5">
      <Row>
        <Col sm={12} md={6} className="col-sm-12 col-md-6">
          <ul className={`${textStyles.blueTitle} mx-0 px-0`}>
            {practices.map(
              (p, i) => practices.length / 2 > i && (
              <li key={p.title} className="mb-3">
                <Link href={p.slug}>
                  <a className={`${textStyles.blueTitle} ${fontStyles.ft12rem}`}>
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
          <ul className={`${textStyles.blueTitle} mx-0 px-0`}>
            {practices.map(
              (p, i) => practices.length / 2 <= i && (
              <li key={p.title} className="mb-3">
                <Link href={p.slug}>
                  <a className={`${textStyles.blueTitle} ${fontStyles.ft12rem}`}>
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
  </>
);

export default RelatedPractices;
