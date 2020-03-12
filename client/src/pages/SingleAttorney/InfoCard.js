import React from 'react';
import {
  FaPhone,
  FaFax,
  FaEnvelope,
  FaRegFileAlt,
  FaAddressCard,
  FaTwitter,
  FaFacebookSquare,
  FaLinkedin,
  FaSkype,
  FaInstagram
} from "react-icons/fa";
import PropTypes from 'prop-types';

const InfoCard = (props) => {
  const {
    fullName,
    chair,
    designation,
    phoneNumber,
    fax,
    email,
    socialMediaLinks,
    pdf,
    vizibility,
  } = props;


  return (
    <div className="col-sm-12">
      <div className="mt-3">
        <span id="red-block" />
        <h1 className="text-white border-bottom">
          {
            (fullName) ? `${fullName} ` : ''
          }
          {
            (chair !== undefined && chair.length > 0) ? (
              <span className=" h5 text-white">
                -
                {` ${designation}`}
              </span>
            ) : ''
          }
        </h1>
      </div>
      {/** Chair section -- start */}
      { (chair !== undefined && chair.length > 0) ? (
        <div className="my-3">
          { chair.map((ch) => (
            <span key={ch.title} className="text-white h5">
              <strong>Chair: </strong>
              <a href={ch.link} className="text-white chair-link h5">
                {ch.title}
                {' '}
                Practice
              </a>
              <br />
            </span>
          ))}
        </div>
      ) : (
        <div className="col-sm-12 mt-3">
          <h4 className="text-white ml--10px">{designation}</h4>
        </div>
      )}
      {/** Chair section -- end */}
      {/** Col One phone, email, fax -- start */}
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <ul className="text-white no-dots mt-2 ml-0">
            { (phoneNumber) ? <li className="mb-1"><h5><FaPhone className="text-white" /> <span className="proxima-regular ft-17px">{`  ${phoneNumber}`}</span></h5></li> : '' }
            { (fax) ? <li className="mb-1"><h5><FaFax className="text-white" /> <span className="proxima-regular ft-17px">{`  ${fax}`}</span></h5></li> : '' }
            { (email) ? <li className="mb-1"><h5><FaEnvelope className="text-white" /><a href={`mailto:${email}`} className="text-white proxima-regular mail-link ft-17px">{` ${email}`}</a></h5></li> : '' }
          </ul>
        </div>
        {/** Col One phone, email, fax -- end */}
        {/** Col Two socila media, vizibility, pdf bio  -- start */}
        <div className="col-sm-12 col-md-6">
          { (socialMediaLinks) ? (
            <span>
              <ul className="ml-0 mt-2">
                { socialMediaLinks.map((v) => (
                  <li key={v.channel} className="mb-0 lh-1">
                    <h5>
                      {(v.channel === 'Twitter') && <FaTwitter className="text-white" />} 
                      {(v.channel === 'Facebook') && <FaFacebookSquare className="text-white" />}
                      {(v.channel === 'LinkedIn') && <FaLinkedin className="text-white" />}
                      {(v.channel === 'Skype') && <FaSkype className="text-white" />}
                      {(v.channel === 'Instagram') &&  <FaInstagram className="text-white" />}
                      <a href={v.url} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                        {`  Connect on ${v.channel}`}
                      </a>
                    </h5>
                  </li>
                )) }
                { (pdf) ? (
                  <li className="mb-0 lh-1">
                    <h5>
                      <FaRegFileAlt className="text-white" />
                      {' '}
                      <a href={pdf} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                        {' Download Biography'}
                      </a>
                    </h5>
                  </li>
                ) : '' }
                { (vizibility) ? (
                  <li className="mb-0 lh-1">
                    <h5>
                      <FaAddressCard className="text-white" />
                      <a href={vizibility} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                        {' Download Contact'}
                      </a>
                    </h5>
                  </li>
                ) : '' }
              </ul>
            </span>
          ) : ''}
        </div>
        {/** Col Two socila media, vizibility, pdf bio  -- end */}
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  fullName: PropTypes.string,
  chair: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])),
  designation: PropTypes.string,
  phoneNumber: PropTypes.string,
  fax: PropTypes.string,
  email: PropTypes.string,
  socialMediaLinks: PropTypes.arrayOf(PropTypes.object),
  pdf: PropTypes.string,
  vizibility: PropTypes.string,
};

InfoCard.defaultProps = {
  fullName: '',
  chair: [],
  designation: '',
  phoneNumber: '',
  fax: '',
  email: '',
  socialMediaLinks: [],
  pdf: '',
  vizibility: '',
};

export default InfoCard;
