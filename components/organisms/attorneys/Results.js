import dynamic from 'next/dynamic';

const NonFiltered = dynamic(() => import('components/molecules/attorneys/NonFiltered'));
const Filtered = dynamic(() => import('components/molecules/attorneys/Filtered'));

const Results = ({
  attorneys, select, userInput, attorneysOffices,
}) => (
  <>
    {select.length > 0 ? (
      <Filtered
        offices={attorneysOffices}
        select={select}
        attorneys={attorneys}
        userInput={userInput}
      />
    ) : (
      <NonFiltered offices={attorneysOffices} attorneys={attorneys} />
    )}
  </>
);
export default Results;
