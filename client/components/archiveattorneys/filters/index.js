
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from 'styles/AttorneyArchives.module.css';
import Keyword from './keyword';
import Letter from './letter';
import Practices from './practices';
import ArchiveAttorneyFitlersTitle from './title';
import ArchiveAttorneyFitlersLocation from './location';

export default function ArchiveAttorneyFilters({
  practices,
  alphabet,
  locations,
  designation,
  userInput,
  handleChange,
  onSelect,
  letterClick,
  clearAll,
}) {
  return (
    <>
      <Container className={`${styles.lightGrayBackground} border p-2`}>
        <Row>
          <Col sm={12} md={4}>
            <Keyword userInput={userInput} handleChange={handleChange} />
          </Col>
          <Col sm={12} md={2}>
            <Practices practices={practices} onSelect={onSelect} />
          </Col>
          <Col sm={12} md={2}>
            <ArchiveAttorneyFitlersLocation locations={locations} onSelect={onSelect} />
          </Col>
          <Col sm={12} md={2}>
            <ArchiveAttorneyFitlersTitle designation={designation} onSelect={onSelect} />
          </Col>
          <Col sm={12} md={2}>
            <Button
              variant="danger"
              className="w-100"
              onClick={() => clearAll()}
            >
              Clear All
            </Button>
          </Col>
        </Row>
      </Container>
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
