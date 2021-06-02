import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/Banner.module.css';

export default function SingleSubHeader({
  title,
  subtitle,
  isBlog,
  isHoliday,
  isTabs = false,
  span,
  offset,
}) {
  return (
    <div className={!isHoliday ? styles.backPageBanner : styles.holidayBanner}>
      <Container className={isTabs ? styles.tabBanner : styles.noTabBanner}>
        <Row>
          <Col sm={12} md={{ span, offset }}>
            <h1
              className="text-white animate__animated animate__fadeInDown animate__fast"
              style={{
                fontSize: !isBlog ? '3rem' : null,
                textShadow: '2px 3px 3px #000',
              }}
            >
              <strong>{title}</strong>
            </h1>
            <h2
              className="text-white animate__animated animate__fadeInUp animate__fast"
              style={{ fontSize: '1.2rem' }}
              dangerouslySetInnerHTML={createMarkup(subtitle)}
            />
          </Col>
          <style jsx>
            {`
              h1 {
                border-bottom: 3px solid #db2220;
                margin-bottom: 20px;
                display: block;
              }
            `}
          </style>
        </Row>
      </Container>
    </div>
  );
}
