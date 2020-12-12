import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import Button from 'react-bootstrap/Button';
import useInput from '../../utils/input-hook';
import styles from '../../styles/frontpage/FrontSearch.module.css';

export default function FrontSearch() {
  const {
    value: searchInput,
    bind: bindSearchInput,
  } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');

    Router.push({
      pathname: '/search',
      query: { q: formatUrl(searchInput), page: 1 },
    });
  };

  return (
    <div className="mx-auto d-block">
      <Form
        onSubmit={handleSubmit}
        role="search"
        className={`${styles.mw75} mx-auto d-block`}
      >
        <Form.Group controlId="front-search">
          <InputGroup size="md" className="mb-3">
            <Form.Label>
              <span className="sr-only">Search Site</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Keyword.."
              {...bindSearchInput}
            />
            <InputGroup.Append>
              <Button type="Submit" variant="danger">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
