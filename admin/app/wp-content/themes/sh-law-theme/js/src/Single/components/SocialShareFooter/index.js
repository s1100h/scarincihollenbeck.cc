import React from 'react';
import PropTypes from 'prop-types';

const SocialShareFooter = (props) => {
  const { title } = props;

  const encodeLink = encodeURIComponent(window.location.href);
  return (
    <span>
      <div className="line-header hide-print mt-5">
        <h3>Please Share This article</h3>
      </div>
      <div className="d-block hide-print">
        <ul className="no-dots hide-print list-inline my-5 text-center">
          <li className="list-inline-item m-3">
            <a href={`https://facebook.com/sharer/sharer.php?u=${encodeLink}`} target="_blank" rel="noopener noreferrer" aria-label="facebook" className="bottom-btn btn-lg fb">
              <i className="fab fa-facebook-f text-white"><span className="proxima-thin smaller-excerpt"> Share on Facebook</span></i>
            </a>
          </li>
          <li className="list-inline-item m-3">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeLink}`} target="_blank" rel="noopener noreferrer" aria-label="linkedin" className="bottom-btn btn-lg li">
              <i className="fab fa-linkedin-in text-white"><span className="proxima-thin smaller-excerpt"> Share on LinkedIn</span></i>
            </a>
          </li>
          <li className="list-inline-item m-3">
            <a href={`https://twitter.com/share?url=${encodeLink}&text=${title}`} target="_blank" rel="noopener noreferrer" aria-label="twitter" className="bottom-btn btn-lg tw">
              <i className="fab fa-twitter text-white"><span className="proxima-thin smaller-excerpt"> Share on Twitter</span></i>
            </a>
          </li>
        </ul>
      </div>
    </span>
  );
};

SocialShareFooter.propTypes = {
  title: PropTypes.string,
};

SocialShareFooter.defaultProps = {
  title: '',
};

export default SocialShareFooter;
