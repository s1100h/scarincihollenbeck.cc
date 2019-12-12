/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';


const RelatedAttorneys = (props) => {
  const { members, chair, handleLink } = props;

  return (
    <span>
      {
          (chair.length > 0) ? (
            <div className="container">
              <div className="row bg-light-gray">
                <div className="col-sm-12">
                  <h4 className="c-title">Practice Chair</h4>                
                </div>
              </div>
              <div className="row">
                {
                  chair.map(v => (
                    <div key={v.ID} className="col-sm-12 col-md-12 col-lg-6">
                      <div className="attorney-card">
                        <a href={v.link}>
                          <img src={v.image} alt={v.name} />
                        </a>
                        <div className="attorney-card-body">
                          <a href={v.link}>
                            <p className="text-uppercase red-title mb-0 mt-2 small-excerpt"><strong>{v.name}</strong></p>
                            <p className="mb-3 small-excerpt"><strong>{v.designation}</strong></p>
                            <i className="fas fa-phone d-block mt---5 small-excerpt">
                              <span className="proxima-thin">{` ${v.contact}`}</span>
                            </i>
                            <i className="fas fa-envelope d-block small-excerpt">
                              <span className="proxima-thin">{` ${v.email}`}</span>
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ) : ''
        }
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
                      members.map(v => <option value={v.link} key={v.ID} className="w-100">{v.name}</option>)
                    }
                  </select>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 members-container">
                {
                  members.map(v => (
                    <div key={v.ID} className="w-45 float-left mr-4 mb-3">
                      <div className="attorney-card">
                        <a href={v.link}>
                          <img src={v.image} alt={v.name} />
                        </a>
                        <div className="attorney-card-body">
                          <a href={v.link}>
                            <p className="text-uppercase red-title mb-0 mt-2 small-excerpt"><strong>{v.name}</strong></p>
                            <p className={(v.designation.length >= 27) ? 'mb-3 smaller-excerpt' : 'mb-3 small-excerpt'}><strong>{v.designation}</strong></p>
                            <i className="fas fa-phone d-block mt---5">
                              <span className="proxima-thin">{` ${v.contact}`}</span>
                            </i>
                            <i className="fas fa-envelope d-block">
                              <span className="proxima-thin">{` ${v.email}`}</span>
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ) : ''
      }
    </span>
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
