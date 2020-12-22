import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/SingleSubHeader.module.css';

const HeaderBckGround = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.image}) no-repeat 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  height: ${(props) => props.height};
`;

export default function SingleSubHeader({
  title, subtitle, image, height,
}) {
  return (
    <HeaderBckGround
      image={image}
      height={height}
      className="jumbotron jumbotron-fluid d-print-none"
    >
      <Container>
        <Row>
          <Col
            sm={12}
            md={{ span: 7, offset: 2 }}
            className={`${styles.bgBlackBackground} text-white`}
          >
            <div className="p-3 animate__animated animate__fadeInUp animate__fast">
              <h1 className="text-white border-bottom">
                <strong>{title}</strong>
              </h1>
              <h2
                className={`${styles.h2Italic} mt-3 mb-5`}
                dangerouslySetInnerHTML={createMarkup(subtitle)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderBckGround>
  );
}
