import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup, addRandomKey } from '../../../utils/helpers';

const AuthorBio = (props) => {
  const { author } = props;

  return (
    <div className="w-100 hide-print mt-5">
      {
        (author) ? author.map((a) => (
          <div key={addRandomKey(a.name)} className="mb-2">
            <h4 className="bg-light-gray">
              About Author
              {' '}
              {a.name}
            </h4>
            <div className="card flex-row flex-wrap mt-4 mh-160">
              <img src={a.image} alt={a.name} className="img-thumbnail m-3 mw-19" />
              <p className="small-excerpt w-75 mt-3 mb--1">
                <span dangerouslySetInnerHTML={createMarkup(a.bio)} className="d-block mb-3" />
                {
                  (a.name !== 'Scarinci Hollenbeck') ? <a href={a.link} className="btn-sm small-excerpt btn-danger">Full Biography &gt;&gt;</a> : ''
                }
              </p>
            </div>
          </div>
        )) : ''
      }
    </div>
  );
};

AuthorBio.propTypes = {
  author: PropTypes.arrayOf(PropTypes.object),
};

AuthorBio.defaultProps = {
  author: [],
};

export default AuthorBio;
