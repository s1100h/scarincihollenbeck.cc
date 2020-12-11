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
import styles from 'styles/AttorneyArchives.module.css'

export default function Filter({
  practices,
  alphabet,
  locations,
  designation,
  userInput,
  handleChange,
  onSelect,
  letterClick,
  clearAll
}) {

  return (
    <>
      <Navbar expand="lg" className={`${styles.lightGrayBackground } border p-2`}>
        <Keyword userInput={userInput} handleChange={handleChange} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="nav-fill w-100">
            {/* <Practices practices={practices} onSelect={onSelect} /> */}
            {/* <Location locations={locations} onSelect={onSelect} />
            <Title designation={designation} onSelect={onSelect} /> */}            
            <Button
              variant="danger"
              className="mx-2 my-1"
              onClick={() => clearAll()}
            >
              Filter Attorneys
            </Button>
            <Button
              variant="danger"
              className="mx-2 my-1"
              onClick={() => clearAll()}
            >
              Clear All
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className={`${styles.darkGrayBackground} border`}>
        <Row className="mt-2 mb-0">
          <Col sm={12}>
            <Letter alphabet={alphabet} letterClick={letterClick} />
          </Col>          
        </Row>
      </Container>
    </>
  );
}
