import React from 'react';
import PropTypes from 'prop-types';
import Filtered from './Filtered';
import NotFiltered from './NotFiltered';
import './index.scss';


const Results = (props) => {
  const {
    attorneys,
    select,
    userInput,
  } = props;

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
};


Results.propTypes = {
  attorneys: PropTypes.arrayOf(PropTypes.object),
  select: PropTypes.arrayOf(PropTypes.object),
  userInput: PropTypes.string,
};

Results.defaultProps = {
  attorneys: [],
  select: [],
  userInput: '',
};

export default Results;
