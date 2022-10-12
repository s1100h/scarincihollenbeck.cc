import { Container, Row, Col } from 'react-bootstrap';
import styles from 'styles/AttorneyArchives.module.css';
import Keyword from 'components/molecules/attorneys/Keywords';
import Letter from 'components/molecules/attorneys/Letter';
import Practices from 'components/molecules/attorneys/Practices';
import Title from 'components/molecules/attorneys/Title';
import Location from 'components/molecules/attorneys/Location';

const Filters = ({
  practices,
  alphabet,
  locations,
  designation,
  userInput,
  handleChange,
  onSelect,
  letterClick,
}) => (
  <>
    <Container className={`${styles.darkGrayBackground} border`}>
      <Row className="mt-2 mb-0">
        <Col sm={12} md={4}>
          <Keyword userInput={userInput} handleChange={handleChange} />
        </Col>
        <Col sm={12} md={8} className="mx-0 px-0">
          <Letter alphabet={alphabet} letterClick={letterClick} />
        </Col>
      </Row>
    </Container>
    <Container className={`${styles.lightGrayBackground} p-2`}>
      <Row>
        <Col sm={12} md={4}>
          <Practices practices={practices} onSelect={onSelect} />
        </Col>
        <Col sm={12} md={4}>
          <Location locations={locations} onSelect={onSelect} />
        </Col>
        <Col sm={12} md={4}>
          <Title designation={designation} onSelect={onSelect} />
        </Col>
      </Row>
    </Container>
  </>
);

export default Filters;
