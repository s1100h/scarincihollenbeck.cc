import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from 'styles/AttorneyArchives.module.css';

export default function CareersFilterForms({
  setQuery,
  query,
  executeSearch
}) {
  return (
    <>
      <Container className={`${styles.lightGrayBackground} border p-2`}>
        <Row>
          <Col sm={12} md={4}>
            <Form inline>
              <Form.Control
                type="text"
                value={query}
                placeholder="Search by keyword..."
                className="w-100"
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form>
          </Col>
          <Col sm={12} md={3}>
            <DropdownButton variant="link" title="Filter by location" className={`${styles.filter} my-3 my-md-0`}>
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col sm={12} md={3}>
            <DropdownButton variant="link" title="Filter by type" className={`${styles.filter} mb-3 mb-md-0`}>
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col sm={12} md={2}>
            <Button
              variant="danger"
              className="w-100"
              onClick={executeSearch}
            >
              Search
            </Button>
          </Col>
         
        </Row>
      </Container>
    </>
  );
}
