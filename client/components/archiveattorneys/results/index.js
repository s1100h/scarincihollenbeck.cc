import Filtered from './filtered';
import NotFiltered from './non-filtered';

export default function Results({
  attorneys,
  select,
  userInput,
}) {
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
