import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Banner.module.css';

export default function MultiSubHeader({ profile, infoCard, isAdmin }) {
  return (
    <div className={styles.backPageBanner}>
      <div className="animate__animated animate__fadeInUp animate__fast">
        <Container>
          <Row>
            <Col sm={12} md={4} className="mr-4 my-3">
              {profile}
            </Col>
            <Col sm={12} md={6} className={isAdmin ? styles.adminBio : ''}>
              {infoCard}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
