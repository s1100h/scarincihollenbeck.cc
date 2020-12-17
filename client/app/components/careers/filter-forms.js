import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';

export default function FilterForms({
  locations,
  positionType,
  filterTerm,
  clearFilter,
  onSelect,
}) {
  const removeDuplicates = (list) => list.filter((v, i) => list.indexOf(v) === i);
  const locs = removeDuplicates(locations);
  const typs = removeDuplicates(positionType);

  return (
    <>
      <Navbar expand="lg" className="bk--gray border p-2">
        <Form inline className="filter w-40">
          <Form.Control type="text" className="w-85" placeholder="Search by keyword..." onChange={filterTerm} />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="nav-fill w-100">
            <NavDropdown
              title={(
                <>
                  <span className="ml-2 my-3">Filter by location</span>
                  <FontAwesomeIcon icon={faCaretDown} className="ml-4em icon-w8px-h20px" />
                </>
              )}
              id="basic-nav-dropdown"
              className="bg-white rounded text-left maxw-225"
            >
              {locs.map((loc) => (
                <NavDropdown.Item key={loc} type="button" name="locations" className="btn btn-link w-100" onClick={(e) => onSelect(e)}>
                  {loc}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown
              title={(
                <>
                  <span className="ml-2 my-3">Filter by type</span>
                  <FontAwesomeIcon icon={faCaretDown} className="ml-5em icon-w8px-h20px" />
                </>
              )}
              id="basic-nav-dropdown"
              className="bg-white rounded text-left maxw-225"
            >
              {typs.map((typ) => (
                <NavDropdown.Item key={typ} type="button" name="type" className="btn btn-link w-100" onClick={(e) => onSelect(e)}>
                  {typ}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="danger" className="ml-1 float-right" onClick={() => clearFilter()}>Clear Filters</Button>
      </Navbar>
    </>
  );
}
