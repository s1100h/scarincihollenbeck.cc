import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { addRandomKey } from '../utils/helpers';
import useInput from '../utils/input-hook';

export default function SimpleSearch({ searchId="simplesearch" }) {
  const { value: searchInput, bind: bindSearchInput, reset: resetSearchInput } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');
    Router.push({
      pathname: '/search',
      query: { q: formatUrl(searchInput), page: 1 }     
    })
    .then(() => window.scrollTo(0, 0))
  };

  return (
    <div className="mw-447">
      <Form onSubmit={handleSubmit} role="search">
        <Form.Group controlId={searchId}>
          <Form.Label>
            <span className="sr-only">
              Search Site
            </span>
          </Form.Label>
          <Form.Control type="text" placeholder="Keyword.." {...bindSearchInput} />
        </Form.Group>
        <Button type="submit" variant="danger">
          Search
        </Button>
      </Form>
    </div>
  );
}
