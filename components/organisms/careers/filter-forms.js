import React, { useState } from 'react';
import {
  Container, Row, Col, DropdownButton, Dropdown, Button, Form,
} from 'react-bootstrap';
import styles from 'styles/AttorneyArchives.module.css';

export default function ArchiveCareersFilterForms({
  setQuery,
  query,
  executeSearch,
  locations,
  positionTypes,
  setPositionType,
  setLocation,
}) {
  const [locationTitle, setLocationTitle] = useState('Filter by location');
  const [positionTitle, setPositionTitle] = useState('Filter by type');
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
            <DropdownButton
              variant="link"
              title={locationTitle}
              className={`${styles.filter} my-3 my-md-0`}
            >
              {locations.map((location) => (
                <Dropdown.Item
                  key={location}
                  value={location}
                  onClick={() => {
                    setLocationTitle(location);
                    setLocation(location);
                  }}
                >
                  {location}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
          <Col sm={12} md={3}>
            <DropdownButton
              variant="link"
              title={positionTitle}
              className={`${styles.filter} mb-3 mb-md-0`}
            >
              {positionTypes.map((position) => (
                <Dropdown.Item
                  key={position}
                  value={position}
                  onClick={() => {
                    setPositionTitle(position);
                    setPositionType(position);
                  }}
                >
                  {position}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
          <Col sm={12} md={2}>
            <Button variant="danger" className="w-100" onClick={executeSearch}>
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
