import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

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
                <FontAwesomeIcon icon={faPhone} className="text-white" />
                <span className="proxima-regular ft-18">
                  {' '}
                  201-896-4100
                  {' '}
                  {`  ${phone_extension}`}
                </span>
              </h5>
            </li>
            <li className="mb-1">
              <h5>
                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                <a href={`mailto:${email}`} className="text-white proxima-regular mail-link ft-18">
                  {' '}
                  {email}
                </a>
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
                    social_media_links.map((v) => (
                      <li key={v.channel} className="mb-0 lh-1">
                        <h5>
                          {(v.channel === 'Twitter') && <FontAwesomeIcon icon={faTwitter} className="text-white" />}
                          {(v.channel === 'Facebook') && <FontAwesomeIcon icon={faFacebookSquare} className="text-white" />}
                          {(v.channel === 'LinkedIn') && <FontAwesomeIcon icon={faLinkedin} className="text-white" />}
                          {(v.channel === 'Skype') && <FontAwesomeIcon icon={faSkype} className="text-white" />}
                          {(v.channel === 'Instagram') && <FontAwesomeIcon icon={faInstagram} className="text-white" />}
                          <a href={v.url} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                            {`  Connect on ${v.channel}`}
                          </a>
                        </h5>
                      </li>
                    ))
                  }
                  {
                    (vizibility)
                      ? (
                        <li className="mb-0 lh-1">
                          <h5>
                            <FontAwesomeIcon icon={faAddressCard} className="text-white" />
                            <a href={vizibility} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                              {' Download Contact'}
                            </a>
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
  );
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
