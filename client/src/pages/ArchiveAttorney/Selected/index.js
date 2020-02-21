import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';


const Selected = (props) => {
  const {
    select,
    userInput,
    clearQuery,
  } = props;

  const nonUserInputResults = select.filter((a) => a.key !== 'query');

  return (
    <ul className="no-dots list-inline my-2 mx-0">
      {
        (userInput.length > 0) ? (
          <li className="list-inline-item">
            <button
              type="button"
              className="btn btn-link red-title"
              id={userInput}
              onClick={() => clearQuery('query')}
              data-toggle="tooltip"
              data-placement="top"
              title="Click on link to remove filter"
            >
              {userInput}
            </button>
          </li>
        ) : ''
      }
      {
       nonUserInputResults.map((s) => (
         <li className=" list-inline-item" key={s.key}>
           <button
             type="button"
             className="btn btn-link red-title"
             id={s.selected}
             onClick={() => clearQuery(s.key)}
             data-toggle="tooltip"
             data-placement="top"
             data-html="true"
             title="Click on link to remove filter"
           >
             {s.selected}
           </button>
         </li>
       ))
      }
    </ul>
  );
};

Selected.propTypes = {
  select: PropTypes.arrayOf(PropTypes.object),
  userInput: PropTypes.string,
  clearQuery: PropTypes.func,
};

Selected.defaultProps = {
  select: [],
  userInput: '',
  clearQuery: () => {},
};

export default Selected;
