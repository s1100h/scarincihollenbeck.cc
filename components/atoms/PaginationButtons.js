import Button from 'react-bootstrap/Button';
import { GrNext, GrPrevious } from 'react-icons/gr';

const PaginationButtons = ({ handleNextPagination, handlePrevPagination }) => (
  <div
    className="d-flex flex-row justify-content-between"
    style={{
      position: 'relative',
      top: '-20px',
      left: '-10px',
    }}
  >
    <Button variant="link" className="text-dark" onClick={() => handlePrevPagination()}>
      <GrPrevious style={{ fontSize: '15px' }} />
      <strong
        style={{
          fontSize: '20px',
          position: 'relative',
          left: '6px',
          top: '1px',
        }}
      >
        Previous
      </strong>
    </Button>
    <Button variant="link" className="text-dark" onClick={() => handleNextPagination()}>
      <strong style={{ fontSize: '20px', position: 'relative', top: '1px' }}>Next</strong>
      <GrNext style={{ fontSize: '15px', position: 'relative', left: '6px' }} />
    </Button>
  </div>
);

export default PaginationButtons;
