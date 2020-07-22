/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import FeaturedAdmin from './FeaturedAdmin';
import ContactInfo from './ContactInfo';
import MainInformation from './MainInformation';

const SideBar = (props) => {
  const {
    name,
    title,
    email,
    image,
    phoneExtension,
    vizibility,
    socialMediaLinks,
  } = props;

  return (
    <div>
      {(window.innerWidth >= 768)
        ? (
          <Sticky enabled={true} top="#stick-start" bottomBoundary="#stop-scrolling">
            <FeaturedAdmin img={image} />
            <ContactInfo
              email={email}
              phone={phoneExtension}
              socialMedia={socialMediaLinks}
              vCard={vizibility}
            />
          </Sticky>
        ) : (
          <span className="Sidebar__mobile mobile--only">
            <FeaturedAdmin img={image} />
            <MainInformation
              name={name}
              title={title}
            />
            <ContactInfo
              mail={email}
              phone={phoneExtension}
              socialMedia={socialMediaLinks}
              vCard={vizibility}
            />
          </span>
        )

      }
    </div>
  );
};

SideBar.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.objectOf(PropTypes.string),
  phoneExtension: PropTypes.string,
  vizibility: PropTypes.string,
  socialMediaLinks: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

SideBar.defaultProps = {
  name: '',
  email: '',
  title: '',
  image: {},
  phoneExtension: '',
  vizibility: '',
  socialMediaLinks: [],
};

export default SideBar;
