import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileTitle from 'components/molecules/attorney/ProfileTitle';
import ProfileDetails from 'components/molecules/attorney/ProfileDetails';
import ProfileImage from 'components/molecules/attorney/ProfileImage';
import ContactIcons from 'components/molecules/attorney/ContactIcons';
import styles from 'styles/Banner.module.css';

const useDesignationHook = (title) => {
  const [designation, setDesignation] = useState(title);
  useEffect(() => {
    if (title === 'Red Bank, NJ Managing Partner') {
      setDesignation('Red Bank, NJ  Office Managing Partner');
    }

    if (title === 'NYC Managing Partner') {
      setDesignation('NYC Office Managing Partner');
    }

    if (title === 'Managing Partner') {
      setDesignation('Firm Managing Partner');
    }

    if (title === 'Washington, D.C. Managing Partner') {
      setDesignation('Washington, D.C. Office Managing Partner');
    }
  }, [title]);

  return [designation, setDesignation];
};
const ProfileHeader = ({
  name, profileImage, title, offices, pdf, coChair, chair, contact,
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
  };
  const contactProps = {
    slug,
    pdf: contact.pdf,
    vizibility: contact.vizibility,
    linkedIn,
  };

  return (
    <div className={styles.backPageBanner}>
      <Container className={`${styles.multiBackBanner} pt-3 pb-5`}>
        <Row>
          <Col sm={12} lg={9} className="text-white">
            <Row>
              <Col sm={12} md={4}>
                <ProfileImage {...profileImageProps} />
              </Col>
              <Col sm={12} md={8} lg={7}>
                <div className="my-3">
                  <ProfileTitle {...profileTitleProps} />
                  <div className="d-flex flex-column flex-md-row mt-2">
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
