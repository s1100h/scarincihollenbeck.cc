import React from 'react';
import PropTypes from 'prop-types';

const ArticleDetails = (props) => {
  const { author, date } = props;

  return (
    <div>
      <strong>Author: </strong>
      {
        (author.length > 0) ? author.map((a, i) => ((i === 0 && author.length > 1) ? (
          <a href={a.link} key={a.name} className="text-underline">
            {a.name}
            ,
          </a>
        ) : <a href={a.link} key={a.name} className="text-underline">{a.name}</a>)) : ''
      }
      <span className="mx-3">|</span>
      {
        (date) || ''
      }
    </div>
  );
};

ArticleDetails.propTypes = {
  author: PropTypes.arrayOf(PropTypes.object),
  date: PropTypes.string,
};

ArticleDetails.defaultProps = {
  author: [],
  date: '',
};

export default ArticleDetails;
