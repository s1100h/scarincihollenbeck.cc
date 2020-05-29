import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faFax } from '@fortawesome/free-solid-svg-icons/faFax';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import PropTypes from 'prop-types';
import { locationUrl } from '../../../utils/helpers';


function OfficeData(props) {
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
      <a href={`/location/${locationUrl(title)}`} className="sidebar-title">
        {(title === 'Washington Dc') ? 'Washington DC' : title }
        {(locationUrl(title) === currentOffice.replace(' ', '-')) ? <FontAwesomeIcon icon={faMinus} className="text-white location-toggle-icon" /> : <FontAwesomeIcon icon={faPlus} className="text-white location-toggle-icon" /> }
      </a>
      <div id={`${locationUrl(title)}`} className={(locationUrl(title) === currentOffice.replace(' ', '-')) ? 'collapse show' : 'collapse'}>
        <div className="off-white p-3">
          <ul className="no-dots ml-0">
            {address.map((a) => <li key={a} className="mb--10">{a}</li>)}
          </ul>
          <p className="mb-0">
            <FontAwesomeIcon icon={faPhone} />
            <span className="proxima-regular">{`  ${phone}`}</span>
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faFax} />
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
}


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
