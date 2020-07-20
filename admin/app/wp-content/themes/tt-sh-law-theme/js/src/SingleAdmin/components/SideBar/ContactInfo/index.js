import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ContactInfo = (props) => {
  const {
    email,
    phone,
    socialMedia,
    vCard,
  } = props;

  return (
    <div className="mt-5 border">
      <p className="text-danger p-2 mb-0 proxima-bold text-capitalize">
        Contact Information
      </p>
      <hr className="mt-0" />
      <ul className="Contact no-dots ml-0 mw-100">
        <li className="my-3 ml-2">
          <h6>
            <a className="text-dark" href={`mailto:${(email) || 'info@sh-law.com'}`}>
              <i className="fa fa-envelope pr-2" aria-hidden="true" />
              {email}
            </a>
          </h6>
        </li>
        <li className="my-3 ml-2">
          <h6>
            <a className="text-dark" href={(phone) || '201-896-4100'}>
              <i className="fa fa-phone pr-2" aria-hidden="true" />
              {(phone) ? `201-896-4100 ${phone}` : '201-896-4100'}
            </a>
          </h6>
        </li>
        <li className="my-3 ml-2">
          <h6 className="card-title">
            <a className="text-dark" href={(vCard) || '#'}>
              <i className="fa fa-folder pr-2" aria-hidden="true" />
                Download V-Card
            </a>
          </h6>
        </li>
        <li className="mw-100">
          <hr />
          {
            (socialMedia)
              ? socialMedia.map(value => (
                <span key={value.channel} className="mx-2 my-0">
                  <a className="text-dark" href={(value.url) || '#'} aria-label={value.channel}>
                    <i className={`fab fa-${value.channel.toLowerCase()} fa-15x pr-2`} aria-hidden="true" />
                  </a>
                </span>
              ))
              : ''
          }
        </li>
      </ul>
    </div>
  );
};

ContactInfo.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  socialMedia: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  vCard: PropTypes.string,
};

ContactInfo.defaultProps = {
  email: '',
  phone: '',
  socialMedia: [],
  vCard: '',
};

export default ContactInfo;
