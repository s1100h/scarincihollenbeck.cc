import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap';
import ProfileTitle from 'components/molecules/attorney/ProfileTitle';
import ProfileContacts from 'components/molecules/attorney/ProfileContacts';
import ProfileImage from 'components/molecules/attorney/ProfileImage';
import ContactIcons from 'components/molecules/attorney/ContactIcons';
import { DetailsBox, ProfileHeaderContainer } from 'styles/attorney-page/AttorneyProfile.style';
import ButtonGroupMenu from 'components/molecules/attorney/ButtonGroupMenu';

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
  name,
  profileImage,
  title,
  offices,
  pdf,
  coChair: coChairs,
  chair: chairs,
  contact,
  setActiveTab,
  activeTab,
  primaryPractice,
  tabs,
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
    coChairs,
    chairs,
    primaryPractice,
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
  const buttonGroupProps = {
    setActiveTab,
    activeTab,
    tabs,
  };
  return (
    <ProfileHeaderContainer>
      <Row>
        <Col sm={12} lg={12}>
          <Row>
            <Col sm={12} md={4}>
              <ProfileImage {...profileImageProps} />
            </Col>
            <Col sm={12} md={8} lg={8}>
              <ProfileTitle {...profileTitleProps} />
              <DetailsBox>
                <ProfileContacts {...profileDetailsProps} />
                <ContactIcons {...contactProps} />
              </DetailsBox>
            </Col>
            {tabs?.length > 0 && <ButtonGroupMenu {...buttonGroupProps} />}
          </Row>
        </Col>
      </Row>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;
