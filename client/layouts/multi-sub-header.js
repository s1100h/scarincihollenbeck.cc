import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Banner.module.css';

export default function MultiSubHeader({
  profile, infoCard, isAdmin, contact,
}) {
  return (
    <div className={styles.backPageBanner}>
      <div className={styles.multiBackBanner}>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              {profile}
            </Col>
            <Col sm={12} md={6} className={isAdmin ? styles.adminBio : ''}>
              {infoCard}
            </Col>
            <Col sm={12} md={2}>
              <span className="mx-3 d-block">
                {contact}
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
