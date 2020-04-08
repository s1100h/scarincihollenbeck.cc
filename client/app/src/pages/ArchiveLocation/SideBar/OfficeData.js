import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaPlus, FaMinus,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { locationUrl } from '../../../utils/helpers';
import './index.scss';

const OfficeData = (props) => {
  const {
    getLocationDirections,
    title,
    phone,
    fax,
    shortName,
    address,
    currentOffice,
  } = props;

  return (
    <div className="mb-2">
      <Link to={{ pathname: `/location/${locationUrl(title)}`, state: 'desiredState' }} className="sidebar-title">
        {title}
        {(locationUrl(title) === currentOffice.replace(' ', '-')) ? <FaMinus className="float-right" /> : <FaPlus className="float-right" /> }
      </Link>
      <div id={`${locationUrl(title)}`} className={(locationUrl(title) === currentOffice.replace(' ', '-')) ? 'collapse show' : 'collapse'}>
        <div className="off-white p-3">
          <ul className="no-dots ml-0">
            {address.map((a) => <li key={a} className="mb-1">{a}</li>)}
          </ul>
          <p className="mb-0">
            <FaPhone />
            <span className="proxima-regular">{`  ${phone}`}</span>
          </p>
          <p className="mb-2">
            <FaEnvelope />
            <span className="proxima-regular">{`  ${fax}`}</span>
          </p>
          <button type="button" className="red-title proxima-bold btn bg-transparent ml--10" onClick={() => getLocationDirections(shortName)}>
            Directions to
            {' '}
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};


OfficeData.propTypes = {
  getLocationDirections: PropTypes.func,
  title: PropTypes.string,
  phone: PropTypes.string,
  fax: PropTypes.string,
  shortName: PropTypes.string,
  address: PropTypes.arrayOf(PropTypes.string),
  currentOffice: PropTypes.string,
};

OfficeData.defaultProps = {
  getLocationDirections: () => {},
  title: '',
  phone: '',
  fax: '',
  shortName: '',
  address: [],
  currentOffice: '',
};

export default OfficeData;
