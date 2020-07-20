import React from 'react';
import PropTypes from 'prop-types';
import AttorneyCard from './AttorneyCard';

const NotFiltered = (props) => {
  const { attorneys } = props;

  // managing partners  
  const managingPartners = attorneys.filter(a => a.designation === 'Managing Partner');

  // partners
  const partners = attorneys.filter(a => a.designation === 'Partner');

  // counsel
  const counsel = attorneys.filter(a => a.designation === 'Counsel');

  // of counsel & counsel emeritus
  const ofCounsel = attorneys.filter(a => a.designation.indexOf('Of Counsel') > -1);

  // senior associates
  const seniorAssociates = attorneys.filter(a => a.designation === 'Senior Associate');

  // associates
  const associates = attorneys.filter(a => a.designation === 'Associate');


  return (
    <div className="row result-container">
      <div className="col-sm-12">
        <h3 className="red-title text-uppercase border-bottom my-4 pb-2">Managing Partner</h3>        
      </div>
      {
      managingPartners.map(m => (
        <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
          <AttorneyCard m={m} />
        </div>
      ))
    }
      <div className="col-sm-12">
        <h3 className="red-title text-uppercase border-bottom my-4 pb-2">Partners</h3>
      </div>
      {
        partners.map(m => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard m={m} />
          </div>
        ))
      }
      <div className="col-sm-12">
        <h3 className="red-title text-uppercase border-bottom my-4 pb-2">Counsel</h3>
      </div>
      {
        counsel.map(m => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard m={m} />
          </div>
        ))
      }
      <div className="col-sm-12">
        <h3 className="red-title text-uppercase border-bottom my-4 pb-2">Of Counsel & Of Counsel Emeritus</h3>        
      </div>
      {
        ofCounsel.map(m => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard m={m} />
          </div>
        ))
      }
      <div className="col-sm-12">
        <h3 className="red-title text-uppercase border-bottom my-4 pb-2">Senior Associates</h3>        
      </div>
      {
        seniorAssociates.map(m => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard m={m} />
          </div>
        ))
      }
      <div className="col-sm-12">
        <h3 className="red-title text-uppercase border-bottom my-4 pb-2">Associates</h3>        
      </div>
      {
        associates.map(m => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard m={m} />
          </div>
        ))
      }
    </div>
  );
};

NotFiltered.propTypes = {
  attorneys: PropTypes.arrayOf(PropTypes.object),
};

NotFiltered.defaultProps = {
  attorneys: [],
};

export default NotFiltered;
