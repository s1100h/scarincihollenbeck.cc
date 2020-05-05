import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup, locationUrl } from '../../../utils/helpers';
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
    setNewLocation,
  } = props;


  return (
    <div className="mb-2">
      <a href={`/#${locationUrl(title)}`} onClick={() => setNewLocation(title)} className="sidebar-title" data-toggle="collapse">
        {title}
        <i className="text-white fas float-right mt-1" />
      </a>
      <div id={`${locationUrl(title)}`} className={(title === currentOffice) ? 'collapse show' : 'collapse'}>
        <div className="off-white p-3">
          <p className="mb-2" dangerouslySetInnerHTML={createMarkup(address)} />
          <p className="mb-0"><i className="fas fa-phone"><span className="proxima-thin ft-18">{`  ${phone}`}</span></i></p>
          <p className="mb-2"><i className="fas fa-fax"><span className="proxima-thin ft-18">{`  ${fax}`}</span></i></p>
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
  address: PropTypes.string,
  currentOffice: PropTypes.string,
  setNewLocation: PropTypes.func,
};

OfficeData.defaultProps = {
  getLocationDirections: () => {},
  setNewLocation: () => {},
  title: '',
  phone: '',
  fax: '',
  shortName: '',
  address: '',
  currentOffice: '',
};

export default OfficeData;
