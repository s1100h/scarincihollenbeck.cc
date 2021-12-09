import Container from 'react-bootstrap/Container';
import dynamic from 'next/dynamic';

const NonFiltered = dynamic(() => import('components/molecules/attorneys/NonFiltered'));
const Filtered = dynamic(() => import('components/molecules/attorneys/Filtered'));

const Results = ({ attorneys, select, userInput }) => (
  <Container className="mt-2">
    {select.length > 0 ? (
      <Filtered select={select} attorneys={attorneys} userInput={userInput} />
    ) : (
      <NonFiltered attorneys={attorneys} />
    )}
  </Container>
);
export default Results;
