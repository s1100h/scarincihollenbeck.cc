import dynamic from 'next/dynamic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DropdownSelectorBtn } from 'styles/Filters.style';

const PracticeListItem = dynamic(() => import('components/atoms/PracticeListItem'));

const PracticesSelector = ({ practices, onSelect }) => {
  /**
   *
   * Filter each item into a column
   *
   * */

  // bankruptcy, intel, public
  const bce = practices.filter((b) => (b.ID === 28345 || b.ID === 29587 || b.ID === 28276 ? b : ''));

  // commercial, labor, tax
  const cl = practices.filter((b) => (b.ID === 29624 || b.ID === 28271 || b.ID === 29588 ? b : ''));

  // corporate
  const li = practices.filter((b) => b.ID === 28270);

  // env, litigation
  const pt = practices.filter((b) => (b.ID === 28273 || b.ID === 28274 ? b : ''));

  return (
    <DropdownSelectorBtn variant="link" title="Filter by practice" className="my-3 my-md-0" props={{ bigMenu: 'true' }}>
      <Container className="mt--1 p-0" fluid>
        <Row className="rounded-0 m-0">
          <Col sm={12} lg={3} className="mt-md-3">
            {bce.map((ft) => (
              <PracticeListItem key={ft.ID} title={ft.title} onSelect={onSelect} pChildren={ft.children} />
            ))}
          </Col>
          <Col sm={12} lg={3} className="mt-md-3">
            {cl.map((ft) => (
              <PracticeListItem key={ft.ID} title={ft.title} onSelect={onSelect} pChildren={ft.children} />
            ))}
          </Col>
          <Col sm={12} lg={3} className="mt-md-3">
            {li.map((ft) => (
              <PracticeListItem key={ft.ID} title={ft.title} onSelect={onSelect} pChildren={ft.children} />
            ))}
          </Col>
          <Col sm={12} md={3} className="mt-md-3">
            {pt.map((ft) => (
              <PracticeListItem key={ft.ID} title={ft.title} onSelect={onSelect} pChildren={ft.children} />
            ))}
          </Col>
        </Row>
      </Container>
    </DropdownSelectorBtn>
  );
};
export default PracticesSelector;
