import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/SingleSubHeader.module.css';

const HeaderBckGround = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.image}) no-repeat 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 50vh;
  border-top: 5px solid #000;
  border-bottom: 5px solid #000;
`;

export default function MultiSubHeader({
  profile,
  infoCard,
  image,
  height,
  isAdmin,
}) {
  return (
    <HeaderBckGround
      image={image}
      height={height}
      className="jumbotron jumbotron-fluid"
    >
      <Container>
        <Row>
          <Col sm={12} md={4} className="mr-4 mh-325">
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
    </HeaderBckGround>
  );
}
