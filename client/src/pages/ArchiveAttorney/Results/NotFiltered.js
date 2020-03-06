import React from 'react';
import PropTypes from 'prop-types';
import AttorneyCard from '../../../components/AttorneyCard';

const NotFiltered = (props) => {
  const { attorneys } = props;

  // managing partners
  const managingPartners = attorneys.filter((a) => a.designation === 'Managing Partner');

  // partners
  const partners = attorneys.filter((a) => a.designation === 'Partner');

  // counsel
  const counsel = attorneys.filter((a) => a.designation === 'Counsel');

  // of counsel & counsel emeritus
  const ofCounsel = attorneys.filter((a) => a.designation.indexOf('Of Counsel') > -1);

  // senior associates
  const seniorAssociates = attorneys.filter((a) => a.designation === 'Senior Associate');

  // associates
  const associates = attorneys.filter((a) => a.designation === 'Associate');

  return (
    <div className="row result-container">
      <div className="col-sm-12 my-4">
        <h3 className="red-title text-uppercase border-bottom mb-0">Managing Partners</h3>
      </div>
      {
      managingPartners.map((m) => (
        <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
          <AttorneyCard
            link={m.link}
            image={m.better_featured_image}
            name={m.title}
            title={m.designation}
            number={m.phone}
            email={m.email}
            width="80px"
            height="112px"
          />
        </div>
      ))
    }
      <div className="col-sm-12 my-4">
        <h3 className="red-title text-uppercase border-bottom mb-0">Partners</h3>

      </div>
      {
        partners.map((m) => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard
              link={m.link}
              image={m.better_featured_image}
              name={m.title}
              title={m.designation}
              number={m.phone}
              email={m.email}
              width="80px"
              height="112px"
            />
          </div>
        ))
      }
      <div className="col-sm-12 my-4">
        <h3 className="red-title text-uppercase border-bottom mb-0">Counsel</h3>

      </div>
      {
        counsel.map((m) => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard
              link={m.link}
              image={m.better_featured_image}
              name={m.title}
              title={m.designation}
              number={m.phone}
              email={m.email}
              width="80px"
              height="112px"
            />
          </div>
        ))
      }
      <div className="col-sm-12 my-4">
        <h3 className="red-title text-uppercase border-bottom mb-0">Of Counsel & Of Counsel Emeritus</h3>

      </div>
      {
        ofCounsel.map((m) => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard
              link={m.link}
              image={m.better_featured_image}
              name={m.title}
              title={m.designation}
              number={m.phone}
              email={m.email}
              width="80px"
              height="112px"
            />
          </div>
        ))
      }
      <div className="col-sm-12 my-4">
        <h3 className="red-title text-uppercase border-bottom mb-0">Senior Associates</h3>

      </div>
      {
        seniorAssociates.map((m) => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard
              link={m.link}
              image={m.better_featured_image}
              name={m.title}
              title={m.designation}
              number={m.phone}
              email={m.email}
              width="80px"
              height="112px"
            />
          </div>
        ))
      }
      <div className="col-sm-12 my-4">
        <h3 className="red-title text-uppercase border-bottom mb-0">Associates</h3>

      </div>
      {
        associates.map((m) => (
          <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <AttorneyCard
              link={m.link}
              image={m.better_featured_image}
              name={m.title}
              title={m.designation}
              number={m.phone}
              email={m.email}
              width="80px"
              height="112px"
            />
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