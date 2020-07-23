import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { addRandomKey } from '../utils/helpers';

export default function SimpleSearch() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');
    Router.push({
      pathname: '/search',
      query: { q: formatUrl(searchInput), page: 1 },
    });
  };

  return (
    <div className="mw-447">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="simplsearch">
          <Form.Label>
            <span className="sr-only">
              Search Site
            </span>
          </Form.Label>
          <Form.Control type="text" placeholder="Keyword.."/>
        </Form.Group>
        <Button type="submit" variant="danger">
          Search
        </Button>
      </Form>
    </div>
  );
}