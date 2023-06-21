import { Form } from 'react-bootstrap';
import { BsSearch, BsXLg } from 'react-icons/bs';
import {
  HitsStyled, ResultsContainer, SearchForm, SearchInput, ResultBox,
} from 'styles/GlobalSearch.style';
import { connectStateResults, Pagination } from 'react-instantsearch-dom';
import Hit from './Hit';

function MySearchBox(props) {
  const handleClear = () => {
    props.refine({
      currentTarget: {
        value: '',
      },
    });
  };

  const RenderSearchResults = connectStateResults(({ searchResults }) => (
    <>
      {searchResults?.query.length > 0 && searchResults?.hits.length > 0 && (
        <ResultsContainer>
          <Pagination totalPages={10} />
          <ResultBox onClick={handleClear} className="results-container">
            <HitsStyled hitComponent={Hit} />
          </ResultBox>
        </ResultsContainer>
      )}
    </>
  ));
  return (
    <>
      <SearchForm>
        <Form.Group className="form-group" controlId="siteSearch">
          {!props.currentRefinement ? <BsSearch /> : <BsXLg role="button" onClick={handleClear} />}
          <SearchInput type="text" value={props.currentRefinement} onChange={props.refine} placeholder={props.placeholder} />
        </Form.Group>
      </SearchForm>
      <RenderSearchResults />
    </>
  );
}

export default MySearchBox;
