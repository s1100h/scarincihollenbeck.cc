import dynamic from 'next/dynamic';
import { sortAttorneysByCategory, sortByKey } from 'utils/helpers';

const NonFiltered = dynamic(() => import('components/molecules/attorneys/NonFiltered'));
const Filtered = dynamic(() => import('components/molecules/attorneys/Filtered'));

const Results = ({
  attorneys,
  attorneysContext,
  select,
  userInput,
  attorneyArchives,
}) => {
  const sortedTitlesByOrder = sortByKey(
    attorneyArchives?.designationSectionTitles,
    'order',
  );
  const sortedAttorneysByCategory = sortAttorneysByCategory(
    attorneysContext,
    sortedTitlesByOrder,
  );
  return select.length > 0 || userInput.length > 0 ? (
    <Filtered select={select} attorneys={attorneys} userInput={userInput} />
  ) : (
    <NonFiltered attorneys={sortedAttorneysByCategory} />
  );
};
export default Results;
