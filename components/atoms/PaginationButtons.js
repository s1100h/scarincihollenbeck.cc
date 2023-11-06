import { GrNext, GrPrevious } from 'react-icons/gr';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { PaginationBtn } from '../../styles/PaginationBtn.style';

const PaginationButtons = ({
  handleNextPagination,
  handlePrevPagination,
  countOfArticles,
  disablePrevBtn,
  disabledNextBtn,
  justArrow,
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
      {justArrow ? (
        <BsArrowLeft />
      ) : (
        <strong
          style={{
            fontSize: '20px',
            position: 'relative',
            left: '6px',
            top: '1px',
          }}
        >
          <GrPrevious
            style={{ fontSize: '15px', position: 'relative', right: '6px' }}
          />
          Previous
        </strong>
      )}
    </PaginationBtn>
    <PaginationBtn
      variant="link"
      className="text-dark"
      disabled={disabledNextBtn}
      onClick={() => handleNextPagination(countOfArticles)}
    >
      {justArrow ? (
        <BsArrowRight />
      ) : (
        <strong style={{ fontSize: '20px', position: 'relative', top: '1px' }}>
          Next
          <GrNext
            style={{ fontSize: '15px', position: 'relative', left: '6px' }}
          />
        </strong>
      )}
    </PaginationBtn>
  </div>
);

export default PaginationButtons;
