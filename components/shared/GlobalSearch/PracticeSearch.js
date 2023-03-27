import { Form } from 'react-bootstrap';
import { BsSearch, BsXLg } from 'react-icons/bs';
import { SearchForm, SearchInput } from '../../../styles/GlobalSearch.style';

const PracticeSearch = (props) => {
  const handleClear = () => {
    props.refine({
      currentTarget: {
        value: '',
      },
    });
  };
  return (
    <SearchForm>
      <Form.Group className="form-group" controlId="siteSearch">
        {!props.currentRefinement ? <BsSearch /> : <BsXLg role="button" onClick={handleClear} />}
        <SearchInput
          type="input"
          value={props.currentRefinement}
          onChange={props.refine}
          placeholder={props.placeholder}
        />
      </Form.Group>
    </SearchForm>
  );
};

export default PracticeSearch;
