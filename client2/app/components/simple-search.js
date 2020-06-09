import Router from 'next/router'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { addRandomKey } from '../utils/helpers';
import useInput from '../utils/input-hook';


// creates search url from query
function sumbitSearchForm(term) {
  const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');
  return `/s?=${formatUrl(term)}`;
};

export default function SimpleSearch() {
  const { value:searchInput, bind:bindSearchInput, reset:resetSearchInput } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push({
      pathname: '/search',
      query: { q: searchInput },
    })
  }

  return (
    <div className="mw-447">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="simplsearch">
          <Form.Label>
            <span className="sr-only">
              Search Site
            </span>
          </Form.Label>
          <Form.Control type="text" placeholder="Keyword.." {...bindSearchInput} />
        </Form.Group>
        <Button type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
}