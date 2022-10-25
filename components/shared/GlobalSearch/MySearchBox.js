import { Form } from 'react-bootstrap';
import { SearchForm, SearchInput, SearchSvg } from 'styles/GlobalSearch.style';
import SearchSvgImage from './SearchSvgImage';

function MySearchBox({ currentRefinement, refine }) {
  return (
    <SearchForm>
      <Form.Group controlId="siteSearch">
        <SearchSvgImage />
        <Form.Label className="sr-only">Site Search</Form.Label>
        <SearchInput
          type="input"
          value={currentRefinement}
          onChange={(e) => refine(e.currentTarget.value)}
          placeholder="Search"
        />
      </Form.Group>
    </SearchForm>
  );
}

export default MySearchBox;
