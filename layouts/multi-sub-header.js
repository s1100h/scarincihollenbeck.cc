import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Banner.module.css';

export default function MultiSubHeader({
  profile, infoCard, isAdmin,
}) {
  return (
    <div className={styles.backPageBanner}>
      <div className={styles.multiBackBanner}>
        <Row>
          <Col sm={12} md={4}>
            {profile}
          </Col>
          <Col sm={12} md={8} className={isAdmin ? styles.adminBio : ''}>
            {infoCard}
          </Col>
        </Row>
      </div>
    </div>
  );
}
