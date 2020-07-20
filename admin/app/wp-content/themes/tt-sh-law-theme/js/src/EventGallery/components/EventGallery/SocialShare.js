import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const SocialShare = (props) => {
  const { url } = props;
  const to = '';
  const encodeLink = encodeURIComponent(url);

  return (
    <div className="SocialShare">
      <ul className="SocialShare__list d-flex justify-content-end">
        <li className="ml-3">
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeLink}`} target="_blank" aria-label="linkedin" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in fa-2x" aria-hidden="true" alt="linkedin" />
          </a>
        </li>
        <li className="ml-3">
          <a href={`https://facebook.com/sharer/sharer.php?u=${encodeLink}`} target="_blank" aria-label="facebook" rel="noopener noreferrer">
            <i className="fab fa-facebook-f  fa-2x" aria-hidden="true" alt="facebook" />
          </a>
        </li>
        <li className="ml-3">
          <a href={`https://twitter.com/share?url=${encodeLink}`} target="_blank" aria-label="twitter" rel="noopener noreferrer">
            <i className="fab fa-twitter  fa-2x" aria-hidden="true" alt="twitter" />
          </a>
        </li>
        <li className="ml-3">
          <a href={`mailto:${to}?body=${encodeLink}`} aria-label="email">
            <i className="far fa-envelope  fa-2x" aria-hidden="true" alt="email" />
          </a>
        </li>
      </ul>
    </div>
  );
};

SocialShare.propTypes = {
  url: PropTypes.string,
};

SocialShare.defaultProps = {
  url: '',
};

export default SocialShare;