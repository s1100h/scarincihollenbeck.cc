import React from 'react';
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
          { chair.map(ch => (
            <span key={ch.title} className="text-white h5">
              <strong>Chair: </strong>
              <a href={ch.link} className="text-white chair-link h5">
                {ch.title}
                {' '}
                Practice
              </a>
              <br />
            </span>
          ))
          }
        </div>
        ) : (
          <div className="col-sm-12 mt-3">
            <h4 className="text-white">{designation}</h4>
          </div>
        )
    }
      {/** Chair section -- end */}
      {/** Col One phone, email, fax -- start */}
      <div className="row">
      <div className="col-sm-12 col-md-6">
        <ul className="text-white no-dots mt-2 ml-0">
          { (phoneNumber) ? <li className="mb-1"><h5><i className="fas fa-phone text-white"><span className="proxima-regular ft-18">{`  ${phoneNumber}`}</span></i></h5></li> : '' }
          { (fax) ? <li className="mb-1"><h5><i className="fas fa-fax text-white"><span className="proxima-regular ft-18">{`  ${fax}`}</span></i></h5></li> : '' }
          { (email) ? <li className="mb-1"><h5><i className="fas fa-envelope"><a href={`mailto:${email}`} className="text-white proxima-regular mail-link ft-18">{` ${email}`}</a></i></h5></li> : '' }
        </ul>
      </div>
      {/** Col One phone, email, fax -- end */}
      {/** Col Two socila media, vizibility, pdf bio  -- start*/}
      <div className="col-sm-12 col-md-6">
      { (socialMediaLinks) ? (
        <span>
          <ul className="ml-0 mt-2">
          { socialMediaLinks.map(v => (
            <li key={v.channel} className="mb-0 lh-1">
              <h5>
                <i className={`fab text-white fa-${v.channel.toLowerCase()}`}>
                  <a href={v.url} className="text-white mail-link proxima-regular ft-18 position-relative icon">
                    <strong>{`  Connect on ${v.channel}`}</strong>
                   </a>
                  </i>
                 </h5>
              </li>
              )) }
              { (pdf) ? (
                <li className="mb-0 lh-1">
                  <h5>
                    <i className="fas fa-file-alt text-white">
                      <a href={pdf} className="text-white mail-link proxima-regular ft-18 position-relative icon">
                        {' Download Biography'}
                      </a>
                    </i>
                  </h5>
                 </li>
                ) : '' }
                { (vizibility)  ? (
                  <li className="mb-0 lh-1">
                    <h5>
                      <i className="fas fa-address-book text-white">
                        <a href={vizibility} className="text-white mail-link proxima-regular ft-18 position-relative icon">
                          {' Download Contact'}
                         </a>
                       </i>
                     </h5>
                  </li>
                 ) : '' }
              </ul>
            </span>
          ) : ''
        }
        </div>
        {/** Col Two socila media, vizibility, pdf bio  -- end */}
      </div>    
    </div>
  );
};

InfoCard.propTypes = {
  fullName: PropTypes.string,
  chair: PropTypes.arrayOf(PropTypes.string),
  designation: PropTypes.string,
  phoneNumber: PropTypes.string,
  fax: PropTypes.string,
  email: PropTypes.string,
  socialMediaLinks: PropTypes.arrayOf(PropTypes.object),
  pdf: PropTypes.string,
  vizibility: PropTypes.string
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