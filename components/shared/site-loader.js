import BarLoader from 'react-spinners/BarLoader';
import { Container, Row } from 'react-bootstrap';

const SiteLoader = () => (
  <Container>
    <Row className="justify-content-center align-self-center">
      <BarLoader color="#DB2220" />
    </Row>
  </Container>
);

export default SiteLoader;
