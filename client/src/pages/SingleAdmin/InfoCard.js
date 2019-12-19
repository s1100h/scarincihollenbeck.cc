import React from 'react';
import PropTypes from 'prop-types';

const InfoCard = (props) => {
  const {
    Title,
    phone_extension,
    email,
    social_media_links,
    vizibility,
    name,
  } = props; 

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 my-3">
          <span id="red-block" />
          <h1 className="text-white proxima-bold border-bottom">{name}</h1>
        </div>
        <div className="col-sm-12 mt--1 mb-2 mx-0">
          <h5 className="text-white">
            {Title}
          </h5>
        </div>
        <div className="col-sm-12 col-md-6">
          <ul className="text-white no-dots ml-0">
            <li className="mb-1">
              <h5>
                <i className="fas fa-phone text-white">
                  <span className="proxima-regular ft-18">
                    {' '}
                    201-896-4100
                    {' '}
                    {`  ${phone_extension}`}
                  </span>
                </i>
              </h5>
            </li>
            <li className="mb-1">
              <h5>
                <i className="fas fa-envelope text-white">
                  <a href={`mailto:${email}`} className="text-white proxima-regular mail-link ft-18">
                    {' '}
                    {email}
                  </a>
                </i>
              </h5>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6">
          {
            (social_media_links) ? (
              <span>
                <ul className="ml-0 mt-2">
                  {
                    social_media_links.map(v => (
                      <li key={v.channel} className="mb-0 lh-1">
                        <h5>
                          <i className={`fab text-white fa-${v.channel.toLowerCase()}`}>
                            <a href={v.url} className="text-white mail-link proxima-regular ft-18 position-relative icon">
                              <strong>{`  Connect on ${v.channel}`}</strong>
                            </a>
                          </i>
                        </h5>
                      </li>
                    ))
                  }
                  {
                    (vizibility)
                      ? (
                        <li className="mb-0 lh-1">
                          <h5>
                            <i className="fas fa-address-book text-white">
                              <a href={vizibility} className="text-white mail-link proxima-regular ft-18 position-relative icon">
                                {' Download Contact'}
                              </a>
                            </i>
                          </h5>
                        </li>
                      ) : ''
                  }

                </ul>
              </span>
            ) : ''
          }
        </div>
      </div>
    </div>              
  )
};

InfoCard.propTypes = {
  name: PropTypes.string,
  Title: PropTypes.string,
  phone_extension: PropTypes.string,
  email: PropTypes.string,
  social_media_links: PropTypes.arrayOf(PropTypes.object),
  vizibility: PropTypes.string,
};

InfoCard.defaultProps = {
  Title: '',
  name: '',
  phone_extension: '',
  email: '',
  social_media_links: [],
  vizibility: '',
};

export default InfoCard;
