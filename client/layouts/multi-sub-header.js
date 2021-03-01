import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Banner.module.css';

export default function MultiSubHeader({
  profile,
  infoCard,
  isAdmin,
}) {
  return (
    <div className={styles.backPageBanner}>
      <div className={`${styles.bannerContainer} animate__animated animate__fadeInUp animate__fast`}>
      <Container>
        <Row>
          <Col sm={12} md={4} className="mr-4">
            {profile}
          </Col>
          <Col
            sm={12}
            md={7}
            className={`${styles.bgBlackBackground} ${
              isAdmin ? styles.adminBio : ''
            }`}
          >
            {infoCard}
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}
