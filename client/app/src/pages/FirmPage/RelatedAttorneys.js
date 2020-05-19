/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import AttorneyCard from '../../components/AttorneyCard';

const attorneySlug = (string) => string.split('/attorneys/').pop();

function RelatedAttorneys(props) {
  const { members, chair, handleLink } = props;

  return (
    <div>
      {
          (chair.length > 0) && (
            <div className="w-100">
              <div className="line-header">
                <h3>Group Chair</h3>
              </div>
              <div className="row">
                {
                  chair.map((v) => (
                    <div key={v.ID} className="col-sm-12 col-md-12 col-lg-6 my-3">
                      <AttorneyCard
                        link={v.link}
                        image={v.image}
                        name={v.name}
                        title={v.designation}
                        number={v.contact}
                        email={v.email}
                        height="112px"
                        width="81px"
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
      {
        (members) && (
          <div className="w-100">
            <div className="line-header">
              <h3>Members</h3>
            </div>
            <form className="w-50 pt-2">
              <select onChange={handleLink} className="w-100">
                {
                  members.map((v) => <option value={v.link} key={v.ID} className="w-100">{v.name}</option>)
                }
              </select>
            </form>
            <div className="container">
            <div className="row members-container">

              {
                members.map((v) => (
                  <div key={v.ID} className="col-sm-12 col-md-12 col-lg-6 my-3">
                    <AttorneyCard
                      link={v.link}
                      image={v.image}
                      name={v.name}
                      title={v.designation}
                      number={v.contact}
                      email={v.email}
                      height="112px"
                      width="81px"
                    />
                  </div>
                ))
              }
            </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

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
