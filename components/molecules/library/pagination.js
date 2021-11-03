import Button from 'react-bootstrap/Button';
import React from 'react';

export default function ArticlePagination({
  handleNextPage,
  handlePrevPage,
  page,
  setPage,
  nrofpages,
}) {
  return (
    <>
      <div className="d-flex mb-3">
        <Button variant="link" className="text-dark" onClick={handlePrevPage}>
          &laquo; Previous
        </Button>
        <span className="m-2">
          {page}
          <span className="mx-1">of</span>
          {nrofpages}
        </span>
        <Button variant="link" className="text-dark" onClick={handleNextPage}>
          Next &raquo;
        </Button>
      </div>
      <style jsx>
        {`
          font-size: 14px;
        `}
      </style>
    </>
  );
}
