import React, { useState } from 'react';
import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SimpleSearch({ searchId = 'simplesearch' }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');
    Router.push({
      pathname: '/search',
      query: { q: formatUrl(term), page: 1 },
    }).then(() => window.scrollTo(0, 0));
  };

  return (
    <div className="my-0 py-0">
      <Form onSubmit={handleSubmit} role="search" className="my-0 py-0">
        <Form.Group controlId={searchId}>
          <Form.Label>
            <span className="sr-only">Search Site</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Keyword.."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="danger">
          Search
        </Button>
      </Form>
    </div>
  );
}
