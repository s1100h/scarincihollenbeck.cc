import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup } from '../utils/helpers';

const HeaderBckGround = styled.div`
  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(${props => props.image}) no-repeat 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  height: ${props => props.height}
`;

export default function MultiSubHeader(props) {
  const { profile, infoCard, image, height } = props;

  return (
    <HeaderBckGround image={image} height={height} className="jumbotron jumbotron-fluid">
      <Container>
        <Row>
          <Col sm={12} md={4} className="mr-4 mh-325">
            {profile}
          </Col>
          <Col sm={12} md={7} className="bg-black-background">
            {infoCard}
          </Col>
        </Row>
      </Container>
    </HeaderBckGround>
  );
};