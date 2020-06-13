import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FilterForms(props) {
  const {
    locations,
    positionType,
    keyword,
    filterTerm,
    location,
    type,
    selectOption,
    clearFilter,
  } = props;

  const removeDuplicates = (list) => list.filter((v, i) => list.indexOf(v) === i);

  const locs = removeDuplicates(locations);
  const typs = removeDuplicates(positionType);

  return (
    <>
      <Navbar expand="lg" className="bckground-gray border p-2">
        <Form inline className="filter w-40">
          <Form.Control type="text" className="w-85" placeholder="Search by keyword..." onChange={filterTerm} />
        </Form>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="nav-fill w-100">
            <NavDropdown title="Locations" id="basic-nav-dropdown" className="bg-white rounded">
              {locs.map((loc) => (
                <NavDropdown.Item key={loc} type="button" name="location" className="btn btn-link w-100" onClick={(e) => selectOption(e, loc)}>
                  {loc}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Position Type" id="basic-nav-dropdown" className="bg-white rounded">
              {typs.map((typ) => (
                <NavDropdown.Item key={typ} type="button" name="type" className="btn btn-link w-100" onClick={(e) => selectOption(e, typ)}>
                  {typ}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Button variant="danger" className="ml-1 float-right" onClick={() => clearFilter()}>Clear Filters</Button>
    </>
  )    
}