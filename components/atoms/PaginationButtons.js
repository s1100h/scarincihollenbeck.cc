import { GrNext, GrPrevious } from 'react-icons/gr';
import { PaginationBtn } from '../../styles/PaginationBtn.style';

const PaginationButtons = ({
  handleNextPagination,
  handlePrevPagination,
  countOfArticles,
  disablePrevBtn,
  disabledNextBtn,
}) => (
  <div
    className="d-flex flex-row justify-content-between"
    style={{
      position: 'relative',
      top: '-20px',
      left: '-10px',
    }}
  >
    <PaginationBtn
      variant="link"
      disabled={disablePrevBtn}
      className="text-dark"
      onClick={() => handlePrevPagination(countOfArticles)}
    >
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
    </PaginationBtn>
    <PaginationBtn
      variant="link"
      className="text-dark"
      disabled={disabledNextBtn}
      onClick={() => handleNextPagination(countOfArticles)}
    >
      <strong style={{ fontSize: '20px', position: 'relative', top: '1px' }}>Next</strong>
      <GrNext style={{ fontSize: '15px', position: 'relative', left: '6px' }} />
    </PaginationBtn>
  </div>
);

export default PaginationButtons;
