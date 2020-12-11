import Container from 'react-bootstrap/Container'
import Filtered from './filtered';
import NotFiltered from './non-filtered';

export default function Results({
  filtered,
  attorneys
}) { 
  return (
    <Container className="mt-2">
      {(filtered) ? <Filtered attorneys={attorneys} /> : <NotFiltered attorneys={attorneys} /> }
    </Container>
  );
}
