import React, { useState, useEffect } from 'react';
import ProfileContacts from 'components/molecules/attorney/ProfileContacts';
import ProfileImage from 'components/molecules/attorney/ProfileImage';
import {
  ProfileActions,
  ProfileBio,
  ProfileBioListItems,
  ProfileBioText,
  ProfileBioTitle,
  ProfileButtons,
  ProfileDesignation,
  ProfileHeaderHolder,
  ProfileHeaderLeft,
  ProfileHeaderRight,
  ProfileHeaderSection,
  ProfileName,
  ProfileTitle,
} from 'styles/attorney-page/AttorneyProfile.style';
import { ContainerDefault } from 'styles/Containers.style';
import PDFIcon from 'components/common/icons/PDFIcon';
import BusinessCard from 'components/common/icons/BusinessCard';
import Link from 'next/link';
import { StandardBlueButton } from 'styles/Buttons.style';
import ModalWindow from 'components/common/ModalWindow';
import { FormBox } from 'styles/AboutAuthorFormCard.style';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import ProfileServices from 'components/molecules/attorney/ProfileServices';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import empty from 'is-empty';
import WhiteButton from 'components/molecules/attorney/WhiteButton';
import ProfileBioList from 'components/molecules/attorney/ProfileBioList';
import PostBreadCrumbs from '../post/PostBreadcrumbs';

const useDesignationHook = (title) => {
  const [designation, setDesignation] = useState(title);
  useEffect(() => {
    if (title === 'Red Bank, NJ Managing Partner') {
      setDesignation('Red Bank, NJ  Office Managing Partner');
    }

    if (title === 'Managing Partner') {
      setDesignation('Firm Managing Partner');
    }

    if (title === 'Washington, D.C. Managing Partner') {
      setDesignation('Washington, D.C. Office Managing Partner');
    }
    setDesignation(title);
  }, [title]);

  return [designation, setDesignation];
};

const ProfileHeader = ({
  name,
  profileImage,
  title,
  offices,
  coChair: coChairs,
  chair: chairs,
  contact,
  representativeVideo,
  practices,
  attorneyBiography,
  education,
  barAdmissions,
  biography,
  affiliations,
  additionalInfo,
}) => {
  const [designation] = useDesignationHook(title);
  const [isContactModal, setIsContactModal] = useState(false);
  const linkedIn = contact.socialMediaLinks.filter(
    (a) => a.channel === 'LinkedIn',
  )[0];
  const profileImageProps = {
    name,
    profileImage,
    representativeVideo,
  };

  const profileDetailsProps = {
    offices,
    fax: contact.fax,
    contact,
    linkedIn,
  };

  return (
    <ProfileHeaderSection>
      <ContainerDefault>
        <PostBreadCrumbs />
        <ProfileHeaderHolder>
          <ProfileHeaderLeft>
            <ProfileImage {...profileImageProps} />

            <ProfileActions>
              {!empty(contact?.pdf) && !empty(contact?.vizibility) && (
                <ProfileButtons>
                  {!empty(contact?.pdf) && (
                    <WhiteButton
                      as={Link}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={contact?.pdf}
                      text="Print Bio"
                      icon={<PDFIcon />}
                    />
                  )}
                  {!empty(contact?.vizibility) && (
                    <WhiteButton
                      as={Link}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={contact?.vizibility}
                      text="Business Card"
                      icon={<BusinessCard />}
                    />
                  )}
                </ProfileButtons>
              )}

              <StandardBlueButton onClick={() => setIsContactModal(true)}>
                Contact now
              </StandardBlueButton>

              <ModalWindow
                isOpen={isContactModal}
                setOpenModal={setIsContactModal}
              >
                <FormBox>
                  <p className="contact-form-title">Let`s get in touch!</p>
                  <ContactForm blockName="profile-contact-form" />
                </FormBox>
              </ModalWindow>

              <ProfileContacts {...profileDetailsProps} />
            </ProfileActions>
          </ProfileHeaderLeft>

          <ProfileHeaderRight>
            <ProfileTitle>
              <ProfileName>{name}</ProfileName>
              <ProfileDesignation>{designation}</ProfileDesignation>
            </ProfileTitle>

            <ProfileServices
              coChairs={coChairs}
              chairs={chairs}
              services={practices}
            />

            {(!empty(attorneyBiography?.miniBio) || !empty(biography)) && (
              <ProfileBio>
                <ProfileBioTitle>Bio Overview</ProfileBioTitle>
                <ProfileBioText as={!empty(biography) && 'div'}>
                  <JSXWithDynamicLinks
                    HTML={attorneyBiography?.miniBio || biography}
                  />
                </ProfileBioText>
              </ProfileBio>
            )}

            <ProfileBioListItems>
              {!empty(education) && (
                <ProfileBioList title="Education" content={education} />
              )}
              {!empty(barAdmissions) && (
                <ProfileBioList title="Admissions" content={barAdmissions} />
              )}
              {!empty(affiliations) && (
                <ProfileBioList title="Affiliations" content={affiliations} />
              )}
              {!empty(additionalInfo)
                && additionalInfo.map(
                  (item) => !empty(item?.content) && (
                  <ProfileBioList
                    key={`${item?.title}-additional-info`}
                    title={item?.title}
                    content={item?.content}
                  />
                  ),
                )}
            </ProfileBioListItems>
          </ProfileHeaderRight>
        </ProfileHeaderHolder>
      </ContainerDefault>
    </ProfileHeaderSection>
  );
};

export default ProfileHeader;
