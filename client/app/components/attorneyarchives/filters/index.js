import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Keyword from './keyword';
import Letter from './letter';
import Practices from './practices';
import Title from './title';
import Location from './location';
import MobileMenu from './mobile-menu';

export default function Filter(props) {
  const {
    practices,
    alphabet,
    locations,
    designation,
    userInput,
    handleChange,
    onSelect,
    letterClick,
    clearAll,
    onMobileSelect,
  } = props;

  return (
    <>
      <Navbar expand="lg" className="bk--gray border p-2">
        <Keyword userInput={userInput} handleChange={handleChange} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="nav-fill w-100">
            <Practices practices={practices} onSelect={onSelect} />
            <Location locations={locations} onSelect={onSelect} />
            <Title designation={designation} onSelect={onSelect} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="drkbckground-gray border">
        <Row className="mt-2 mb-0">
          <Letter alphabet={alphabet} letterClick={letterClick} />
          <Col sm={12} md={2}>
            <Button
              variant="danger"
              className="float-md-right mx-3 mb-2"
              onClick={() => clearAll()}
            >
              Clear All
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
