import dynamic from 'next/dynamic';

const NonFiltered = dynamic(() => import('components/molecules/attorneys/NonFiltered'));
const Filtered = dynamic(() => import('components/molecules/attorneys/Filtered'));

const Results = ({ attorneys, select, userInput }) => <>{select.length > 0 || userInput.length > 0 ? <Filtered select={select} attorneys={attorneys} userInput={userInput} /> : <NonFiltered attorneys={attorneys} />}</>;
export default Results;
