import React, { useState } from 'react';
import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function FrontSearch() {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');
    Router.push({
      pathname: '/library',
      query: { q: formatUrl(term), page: 1 },
    }).then(() => window.scrollTo(0, 0));
  };

  return (
    <div className="my-0 py-0">
      <Form>
        <Form.Row onSubmit={handleSubmit} role="search" className="align-items-center">
          <Col sm={9} className="my-1">
            <Form.Label htmlFor="frontSearch" srOnly>
              Search
            </Form.Label>
            <Form.Control
              id="frontSearch"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Keyword"
              size="lg"
            />
          </Col>
          <Col sm="auto" className="my-1">
            <Button type="submit" size="lg" variant="danger">Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
