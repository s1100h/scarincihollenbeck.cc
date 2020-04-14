/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import AttorneyCard from '../../components/AttorneyCard';

const RelatedAttorneys = (props) => {
  const { members, chair, handleLink } = props;

  return (
    <div>
      { (chair.length > 0) ? (
        <div className="container">
          <div className="row bg-light-gray">
            <div className="col-sm-12">
              <h4 className="c-title">Practice Chair</h4>
            </div>
          </div>
          <div className="row">
            {
                chair.map((v) => (
                  <div key={v.ID} className="col-sm-12 col-md-12 col-lg-6">
                    <AttorneyCard
                      link={v.link}
                      image={v.image}
                      name={v.name}
                      title={v.designation}
                      number={v.contact}
                      email={v.email}
                      height="109px"
                      width="75%"
                    />
                  </div>
                ))
              }
          </div>
        </div>
      ) : ''}
      {
        (members) ? (
          <div className="container">
            <div className="row mt-5 bg-light-gray">
              <div className="col-sm-12 col-md-6">
                <h4 className="c-title">Members</h4>
              </div>
              <div className="col-sm-12 col-md-6">
                <form className="w-100 pt-2">
                  <select onChange={handleLink} className="w-100">
                    {
                      members.map((v) => <option value={v.link} key={v.ID} className="w-100">{v.name}</option>)
                    }
                  </select>
                </form>
              </div>
            </div>
            <div className="row">
              {
                members.map((v) => (
                  <div key={v.ID} className="col-sm-12 col-md-12 col-lg-6 mb-3">
                    <AttorneyCard
                      link={v.link}
                      image={v.image}
                      name={v.name}
                      title={v.designation}
                      number={v.contact}
                      email={v.email}
                      height="109px"
                      width="75%"
                    />
                  </div>
                ))
              }
            </div>
          </div>
        ) : ''
      }
    </div>
  );
};

RelatedAttorneys.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object),
  chair: PropTypes.arrayOf(PropTypes.object),
  handleLink: PropTypes.func,
};

RelatedAttorneys.defaultProps = {
  members: [],
  chair: [],
  handleLink: () => {},
};

export default RelatedAttorneys;
