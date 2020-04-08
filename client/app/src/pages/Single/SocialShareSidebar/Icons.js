import React from 'react';
import PropTypes from 'prop-types';
import {
  FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope, FaPrint,
} from 'react-icons/fa';
import './index.scss';

const Icons = (props) => {
  const {
    encodeLink,
    to,
    title,
    printScreen,
  } = props;

  return (
    <ul className="no-dots hide-print ss-list">
      <li>
        <a href={`https://facebook.com/sharer/sharer.php?u=${encodeLink}`} target="_blank" aria-label="facebook" rel="noopener noreferrer" className="btn-lg fb">
          <FaFacebookF className="text-white fb " />
        </a>
      </li>
      <li className="mt-2">
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeLink}`} target="_blank" aria-label="linkedin" rel="noopener noreferrer" className="btn li">
          <FaLinkedinIn className="text-white" />
        </a>
      </li>
      <li className="mt-2">
        <a href={`https://twitter.com/share?url=${encodeLink}&text=${title}`} target="_blank" aria-label="twitter" rel="noopener noreferrer" className="btn tw">
          <FaTwitter className="text-white" />
        </a>
      </li>
      <li className="mt-2">
        <a href={`mailto:${to}?subject=${title}&body=${encodeLink}`} aria-label="email" className="btn bg-gray">
          <FaEnvelope />
        </a>
      </li>
      <li className="mt-2">
        <button type="button" aria-label="Print Page" onClick={() => printScreen()} className="btn bg-gray">
          <FaPrint />
        </button>
      </li>
    </ul>
  );
};

Icons.propTypes = {
  printScreen: PropTypes.func,
  title: PropTypes.string,
  to: PropTypes.string,
  encodeLink: PropTypes.string,
};

Icons.defaultProps = {
  printScreen: () => {},
  title: '',
  to: '',
  encodeLink: '',
};

export default Icons;
