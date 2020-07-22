import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addRandomKey, headers } from '../utils/helpers';

export default function Search() {
  const [attorneys, setAttorneys] = useState([]);
  const [practices, setPractices] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [attorneys, practices, categories] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/attorney-search/attorneys`, { headers }).then((data) => data.json()),
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/attorney-search/practices`, { headers }).then((data) => data.json()),
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/wp/v2/categories?per_page=100`, { headers}).then((data) => data.json())
      ]);

      setAttorneys(attorneys);
      setCategories(categories);
      setPractices(practices);
    };

    fetchData();
  }, []);

  return (
    <div className="w-100">
      <Form>
        <Form.Group controlId="textSearch">
          <Form.Label>
            <span className="sr-only">
              Search Site
            </span>
          </Form.Label>
          <Form.Control type="text" placeholder="Keyword.."/>
        </Form.Group>
        <Form.Group controlId="practices.ControlSelect1">
          <Form.Control as="select">
            <option>Filter by practice</option>
            {(practices.length > 0) && practices.map((practice) => <option key={addRandomKey(practice.title)}>{practice.title}</option>) }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="attorneys.ControlSelect1">
          <Form.Control as="select">
            <option>Filter by attorney</option>
            {(attorneys.length > 0) && attorneys.map((attorney) => <option key={addRandomKey(attorney.title)}>{attorney.title}</option>) }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="category.SelectCategory">
          <Form.Control as="select">
            <option>Filter by category</option>
            {(categories.length > 0) && categories.map((category) => ((category.name !== 'Uncategorized') && <option key={addRandomKey(category.name)}>{category.name}</option>)) }
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="secondary" className="proxima-bold px-5 my-2 mr-2">Clear</Button>
        <Button type="submit" variant="danger" className="my-2 px-5">Search</Button>
      </Form>
    </div>
  );
}