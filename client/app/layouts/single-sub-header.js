import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup } from 'utils/helpers';

const HeaderBckGround = styled.div`
  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(${(props) => props.image}) no-repeat 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  height: ${(props) => props.height}
`;

export default function SingleSubHeader({
  title, subtitle, image, height,
}) {
  return (
    <HeaderBckGround image={image} height={height} className="jumbotron jumbotron-fluid d-print-none">
      <Container>
        <Row>
          <Col sm={12} md={{ span: 7, offset: 2 }} className="bg-black-background text-white">
            <div className="p-3">
              <span id="red-block" />
              <h1 className="text-white proxima-bold border-bottom">{title}</h1>
              <h2 className="proxima-regular mt-3 mb-5 h2-italic" dangerouslySetInnerHTML={createMarkup(subtitle)} />
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderBckGround>
  );
}
