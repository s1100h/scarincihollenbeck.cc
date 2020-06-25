import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addRandomKey, headers } from '../utils/helpers';
import useInput from '../utils/input-hook';

const request = require('superagent');

export default function Search() {
  const { value: searchInput, bind: bindSearchInput, reset: resetSearchInput } = useInput('');
  const { value: practiceInput, bind: bindPracticeInput, reset: resetPracticeInput } = useInput('');
  const { value: attorneyInput, bind: bindAttorneyInput, reset: resetAttorneyInput } = useInput('');
  const { value: categoryInput, bind: bindCategoryInput, reset: resetCategoryInput } = useInput('');
  const [attorneys, setAttorneys] = useState([]);
  const [practices, setPractices] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // fetch query results
      const fetchQuery = request.get('http://localhost:8200/cached/search-options')
        .set(headers)
        .then((res) => ({
          status: res.status,
          body: JSON.parse(res.text),
        }))
        .catch((err) => err);

      fetchQuery.then((results) => {
        const { status, body } = results;

        if (status === 200) {
          const { attorneys, categories, practices } = body;
          setAttorneys(attorneys);
          setCategories(categories);
          setPractices(practices);
        }
      });
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `${(searchInput !== '') ? searchInput : ''} ${(practiceInput !== '') ? practiceInput : ''} ${(attorneyInput !== '') ? attorneyInput : ''} ${(categoryInput !== '') ? categoryInput : ''}`;
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');

    Router.push({
      pathname: '/search',
      query: { q: formatUrl(query), page: 1 },
    });

    resetSearchInput();
    resetPracticeInput();
    resetAttorneyInput();
    resetCategoryInput();
  };

  function clearFields() {
    resetSearchInput();
    resetPracticeInput();
    resetAttorneyInput();
    resetCategoryInput();
  }

  return (
    <div className="w-100">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="textSearch">
          <Form.Label>
            <span className="sr-only">
              Search Site
            </span>
          </Form.Label>
          <Form.Control type="text" placeholder="Keyword.." {...bindSearchInput} />
        </Form.Group>
        <Form.Group controlId="practices.ControlSelect1">
          <Form.Control as="select" {...bindPracticeInput}>
            <option>Filter by practice</option>
            {practices.map((p) => <option key={addRandomKey(p.title)}>{p.title}</option>) }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="attorneys.ControlSelect1">
          <Form.Control as="select" {...bindAttorneyInput}>
            <option>Filter by attorney</option>
            {attorneys.map((p) => <option key={addRandomKey(p.title)}>{p.title}</option>) }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="category.SelectCategory">
          <Form.Control as="select" {...bindCategoryInput}>
            <option>Filter by category</option>
            {categories.map((p) => ((p.title !== 'Uncategorized') && <option key={addRandomKey(p.title)}>{p.title}</option>)) }
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="secondary" onClick={() => clearFields()} className="proxima-bold px-5 my-2 mr-2">Clear</Button>
        <Button type="submit" variant="danger" className="my-2 px-5">Search</Button>
      </Form>
    </div>
  );
}
