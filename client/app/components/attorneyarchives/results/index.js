import Filtered from './filtered';
import NotFiltered from './non-filtered';

export default function Results(props) {
  const {
    attorneys,
    select,
    userInput,
  } = props;

  return (
    <div className="container mt-2">
      {
        (select.length > 0) ? (
          <Filtered
            select={select}
            attorneys={attorneys}
            userInput={userInput}
          />
        ) : <NotFiltered attorneys={attorneys} />
      }
    </div>
  );
}
