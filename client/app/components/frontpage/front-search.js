import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useInput from '../../utils/input-hook';

export default function FrontSearch() {
  const { value: searchInput, bind: bindSearchInput, reset: resetSearchInput } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');

    Router.push({
      pathname: '/search',
      query: { q: formatUrl(searchInput), page: 1 },
    });
  };

  return (
    <div className="mw-447 mx-auto d-block">
      <Form onSubmit={handleSubmit} role="search">
        <Form.Group controlId="front-search">
          <Form.Label>
            <span className="sr-only">
              Search Site
            </span>
          </Form.Label>
          <Form.Control type="text" placeholder="Keyword.." {...bindSearchInput} className="w-75 mx-auto d-block" />
        </Form.Group>
        <Button type="submit" variant="danger" className="mt-3 mx-auto d-block btn-lg">
          Search
        </Button>
      </Form>
    </div>
  );
}
