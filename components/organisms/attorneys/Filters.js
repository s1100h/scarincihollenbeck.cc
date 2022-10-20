import { Row, Col } from 'react-bootstrap';
import Keyword from 'components/molecules/attorneys/Keywords';
import Letter from 'components/molecules/attorneys/Letter';
import PracticesSelector from 'components/molecules/attorneys/PracticesSelector';
import FilterSelector from 'components/molecules/attorneys/Selector';
import { ContainerFilters } from 'styles/Filters.style';

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
    <ContainerFilters className="border">
      <Row className="mt-2 mb-0">
        <Col sm={12} md={4}>
          <Keyword userInput={userInput} handleChange={handleChange} />
        </Col>
        <Col sm={12} md={8} className="mx-0 px-0">
          <Letter alphabet={alphabet} letterClick={letterClick} />
        </Col>
      </Row>
    </ContainerFilters>
    <ContainerFilters className="p-2" props={{ isDark: 'true' }}>
      <Row>
        <Col sm={12} md={4}>
          <PracticesSelector practices={practices} onSelect={onSelect} />
        </Col>
        <Col sm={12} md={4}>
          <FilterSelector
            selectionList={locations}
            onSelect={onSelect}
            title="Filter by location"
            nameItem="location"
          />
        </Col>
        <Col sm={12} md={4}>
          <FilterSelector
            selectionList={designation}
            onSelect={onSelect}
            title="Filter by title"
            nameItem="title"
          />
        </Col>
      </Row>
    </ContainerFilters>
  </>
);

export default Filters;
