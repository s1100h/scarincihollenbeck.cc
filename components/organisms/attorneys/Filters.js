import { Row, Col } from 'react-bootstrap';
import PracticesSelector from 'components/molecules/attorneys/PracticesSelector';
import FilterSelector from 'components/molecules/attorneys/Selector';
import { ContainerFilters } from 'styles/Filters.style';
import AuxiliarySearch from '../../shared/GlobalSearch/AuxiliarySearch';

// it was done by request from the client as a temporary solution. 16 Jun 2023. 38 - 45str
const Filters = ({
  practices, locations, designation, userInput, handleChange, onSelect, children,
}) => (
  <>
    <ContainerFilters props={{ isWhite: 'true' }}>
      <Row>
        <Col xl={4} sm={12} md={6}>
          <AuxiliarySearch currentRefinement={userInput} refine={handleChange} placeholder="Search by Attorney name" />
        </Col>
        <Col xl={4} sm={12} md={6}>
          <PracticesSelector practices={practices} onSelect={onSelect} />
        </Col>
        <Col xl={4} sm={12} md={6}>
          <FilterSelector selectionList={locations} onSelect={onSelect} title="Filter by location" nameItem="location" />
        </Col>
        {/* <Col xl={3} sm={12} md={6}> */}
        {/*  <FilterSelector */}
        {/*    selectionList={designation} */}
        {/*    onSelect={onSelect} */}
        {/*    title="Filter by title" */}
        {/*    nameItem="title" */}
        {/*  /> */}
        {/* </Col> */}
      </Row>
      <Row>{children}</Row>
    </ContainerFilters>
  </>
);

export default Filters;
