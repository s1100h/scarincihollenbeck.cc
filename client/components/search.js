import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addRandomKey, headers } from 'utils/helpers';
import useInput from 'utils/input-hook';

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
      const [attorneys, practices, categories] = await Promise.all([
        fetch('https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys', { headers }).then((data) => data.json()),
        fetch('https://wp.scarincihollenbeck.com/wp-json/attorney-search/practices', { headers }).then((data) => data.json()),
        fetch('https://wp.scarincihollenbeck.com/wp-json/wp/v2/categories?per_page=100', { headers }).then((data) => data.json())
      ]);

      setAttorneys(attorneys);
      setCategories(categories);
      setPractices(practices);
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `${(searchInput !== '') ? searchInput : ''} ${(practiceInput !== '') ? practiceInput : ''} ${(attorneyInput !== '') ? attorneyInput : ''} ${(categoryInput !== '') ? categoryInput : ''}`;
    const formatUrl = (str) => str.toLowerCase().replace(',',' ').replace('&', '').replace('’', "'").replace('.', '').replace("'",'').replace(/\s+/g,' ').replace(/\s/g, '+');

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
      <Form onSubmit={handleSubmit} role="search">
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
            {(practices.length > 0) && practices.map((practice) => <option key={addRandomKey(practice.title)}>{practice.title}</option>) }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="attorneys.ControlSelect1">
          <Form.Control as="select" {...bindAttorneyInput}>
            <option>Filter by attorney</option>
            {(attorneys.length > 0) && attorneys.map((attorney) => <option key={addRandomKey(attorney.title)}>{attorney.title}</option>) }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="category.SelectCategory">
          <Form.Control as="select" {...bindCategoryInput}>
            <option>Filter by category</option>
            {(categories.length > 0) && categories.map((category) => ((category.name !== 'Uncategorized') && <option key={addRandomKey(category.name)}>{category.name}</option>)) }
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="secondary" onClick={() => clearFields()} className="px-5 my-2 mr-2">Clear</Button>
        <Button type="submit" variant="danger" className="my-2 px-5">Search</Button>
      </Form>
    </div>
  );
}
