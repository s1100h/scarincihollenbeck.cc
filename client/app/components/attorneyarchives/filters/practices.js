import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { addRandomKey } from '../../../utils/helpers';

function PracticeListItem({ title, onSelect, pChildren }) {
  return (
    <>
      <p className="practice-title">
        <button onClick={(e) => onSelect(e, title)} name="practices" type="button" className="proxima-bold practice-link btn btn-link">{title}</button>
      </p>
      <div className="practice-children">
        {pChildren.map((fc) => <button key={addRandomKey(fc.ID.toString())} type="button" name="practices" onClick={(e) => onSelect(e, fc.title)} className="dropdown-item btn btn-link">{fc.title}</button>)}
      </div>
    </>
  );
}

function PracticeItemContainer() {

}

export default function Practices(props) {
  const { practices, onSelect, removeVisibilityClass } = props;

  /**
   *
   * Filter each item into a column
   *
   * */

  // bankruptcy, intel, public
  const bce = practices.filter((b) => ((b.id === 28345 || b.id === 29587 || b.id === 28276) ? b : ''));

  // commerical, labor, tax
  const cl = practices.filter((b) => ((b.id === 29624 || b.id === 28271 || b.id === 29588) ? b : ''));

  // corporate
  const li = practices.filter((b) => b.id === 28270);

  // env, litigation
  const pt = practices.filter((b) => ((b.id === 28273 || b.id === 28274) ? b : ''));

  return (
    <NavDropdown
      title={(
        <>
          Filter by practice
          <FontAwesomeIcon icon={faCaretDown} className="ml-5 icon-w8px-h20px" />
        </>
)}
      id="basic-nav-dropdown"
      className="bg-white rounded position-static"
    >
      <Container className="mt--1 p-0" fluid>
        <Row className="rounded-0 m-0 w-100">
          <Col sm={12} md={3} className=" mt-md-3">
            {bce.map((ft) => <PracticeListItem key={addRandomKey(ft.id.toString())} title={ft.title} onSelect={onSelect} pChildren={ft.children} />)}
          </Col>
          <Col sm={12} md={3} className=" mt-md-3">
            {cl.map((ft) => <PracticeListItem key={addRandomKey(ft.id.toString())} title={ft.title} onSelect={onSelect} pChildren={ft.children} />)}
          </Col>
          <Col sm={12} md={3} className=" mt-md-3">
            {li.map((ft) => <PracticeListItem key={addRandomKey(ft.id.toString())} title={ft.title} onSelect={onSelect} pChildren={ft.children} />)}
          </Col>
          <Col sm={12} md={3} className=" mt-md-3">
            {pt.map((ft) => <PracticeListItem key={addRandomKey(ft.id.toString())} title={ft.title} onSelect={onSelect} pChildren={ft.children} />)}
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  );
}
