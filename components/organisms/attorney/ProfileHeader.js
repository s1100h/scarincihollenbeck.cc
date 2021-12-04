import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileTitle from 'components/molecules/attorney/ProfileTitle';
import ProfileDetails from 'components/molecules/attorney/ProfileDetails';
import ProfileImage from 'components/molecules/attorney/ProfileImage';
import ContactIcons from 'components/molecules/attorney/ContactIcons';
import styles from 'styles/Banner.module.css';

const useDesignationHook = (title) => {
  const [designation, setDesiganation] = useState(title);
  useEffect(() => {
    if (title === 'Red Bank, NJ Managing Partner') {
      setDesiganation('Red Bank, NJ  Office Managing Partner');
    }

    if (title === 'NYC Managing Partner') {
      setDesiganation('NYC Office Managing Partner');
    }

    if (title === 'Managing Partner') {
      setDesiganation('Firm Managing Partner');
    }

    if (title === 'Washington, D.C. Managing Partner') {
      setDesiganation('Washington, D.C. Office Managing Partner');
    }
  }, [title]);

  return [designation, setDesiganation];
};
const ProfileHeader = ({
  name,
  firstName,
  profileImage,
  title,
  practices,
  offices,
  vizbility,
  pdf,
  coChair,
  chair,
  additionalHeaderLinks,
  fax,
  contact,
}) => {
  const [designation] = useDesignationHook(title);
  const router = useRouter();
  const slug = router.asPath;
  const linkedIn = contact.socialMediaLinks.filter((a) => a.channel === 'LinkedIn')[0];

  const profileImageProps = {
    name,
    profileImage,
  };

  const profileTitleProps = {
    name,
    designation,
    chair,
    coChair,
  };
  const profileDetailsProps = {
    offices,
    fax: contact.fax,
    contact,
    additionalHeaderLinks: contact.additionalHeaderLinks,
  };
  const contactProps = {
    slug,
    pdf: contact.pdf,
    vizbility: contact.vizbility,
    linkedIn,
  };

  return (
    <div className={styles.backPageBanner}>
      <Container className={styles.multiBackBanner}>
        <Row>
          <Col sm={12} md={9} className="text-white">
            <Row>
              <Col sm={12} md={4}>
                <ProfileImage {...profileImageProps} />
              </Col>
              <Col sm={12} md={7}>
                <div className="my-3">
                  <ProfileTitle {...profileTitleProps} />
                  <div className="d-flex flex-column flex-lg-row mt-2">
                    <ProfileDetails {...profileDetailsProps} />
                    <ContactIcons {...contactProps} />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileHeader;
