import React, { useEffect, useRef, useState } from 'react';
import empty from 'is-empty';
import Link from 'next/link';
import { TitleH2 } from 'styles/common/Typography.style';
import Image from 'next/image';
import {
  CardImageWrapper,
  ProfileDesignation,
  ProfileHeaderRight,
  ProfileTitle,
} from '../../styles/attorney-page/AttorneyProfile.style';
import {
  BioPagePrintContainer,
  InfoPrintBox,
} from '../../styles/attorney-page/AttorneyPrintPage.style';
import ProfileServices from '../molecules/attorney/ProfileServices';
import ProfileBioList from '../molecules/attorney/ProfileBioList';
import { useDesignationHook } from '../organisms/attorney/ProfileHeader';
import ProfileContacts from '../molecules/attorney/ProfileContacts';
import { JSXWithDynamicLinks } from '../atoms/micro-templates/JSXWithDynamicLinks';
import { ProfileAccordionBody } from '../../styles/attorney-page/ProfileAccordion.style';
import FooterPrintVersion from '../shared/Footer/FooterPrintVersion';

const renderAwardsAndRecognitions = (additionalTabsArg) => {
  const filtered = additionalTabsArg.filter(({ title }) => title.includes('Awards & Recognitions'));
  if (empty(filtered[0].content)) {
    return undefined;
  }
  return (
    <div>
      <h3 className="print-pdf-title">Awards & Recognitions</h3>
      <ProfileAccordionBody
        className="print-pdf-representative-matters"
        $columnsCountUl={2}
      >
        <JSXWithDynamicLinks HTML={filtered[0]?.content} />
      </ProfileAccordionBody>
    </div>
  );
};
const AttorneyPrintPage = ({
  name,
  profileImage,
  title,
  offices,
  coChair: coChairs,
  chair: chairs,
  contact,
  practices,
  attorneyBiography,
  education,
  barAdmissions,
  affiliations,
  additionalInfo,
  clients,
  additionalTabs,
  representativeMatters,
  qrCodeBioPage,
  qrCodeLinkedin,
  onReady,
}) => {
  const [designation] = useDesignationHook(title);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const containerRef = useRef();
  const linkedIn = contact.socialMediaLinks.filter(
    (a) => a.channel === 'LinkedIn',
  )[0];
  const profileDetailsProps = {
    offices,
    fax: contact.fax,
    contact,
    linkedIn,
    qrCodeLinkedin,
    qrCodeBioPage,
  };
  const isAwardsExist = additionalTabs.some(({ title }) => title.includes('Awards & Recognitions'));

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const allImages = Array.from(container.querySelectorAll('img'));
    const imageLoadPromises = allImages.map(
      (img) => new Promise((resolve) => {
        if (img.complete && img.naturalHeight !== 0) {
          resolve();
        } else {
          img.onload = resolve;
          img.onerror = resolve;
        }
      }),
    );

    Promise.all(imageLoadPromises).then(() => {
      setAreImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (areImagesLoaded) {
      onReady();
    }
  }, [areImagesLoaded, onReady]);

  return (
    <BioPagePrintContainer ref={containerRef}>
      <div className="wrapper-pdf">
        <CardImageWrapper className="card-image-wrapper">
          {/* // eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profileImage}
            alt={name}
            width={356}
            height={356}
            quality={100}
          />
        </CardImageWrapper>
        <ProfileHeaderRight>
          <ProfileTitle className="profile-title">
            <TitleH2 as="h1">{name}</TitleH2>
            <ProfileDesignation>{designation}</ProfileDesignation>
          </ProfileTitle>
          <ProfileServices
            coChairs={coChairs}
            chairs={chairs}
            services={practices}
          />
        </ProfileHeaderRight>
      </div>
      <div className="bio-list-info-boxes">
        <ProfileContacts {...profileDetailsProps} />
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
      </div>
      {!empty(attorneyBiography.biographyContent) && (
        <div>
          <h3 className="print-pdf-title">Full Biography</h3>
          <InfoPrintBox>
            <JSXWithDynamicLinks HTML={attorneyBiography.biographyContent} />
          </InfoPrintBox>
        </div>
      )}
      {!empty(clients) && (
        <div>
          <h3 className="print-pdf-title">Clients</h3>
          <ProfileAccordionBody
            className="print-pdf-clients"
            $columnsCountUl={3}
          >
            <ul>
              {clients.map(({ clientLink, clientTitle }) => (
                <li key={clientTitle}>
                  {!empty(clientLink) ? (
                    <Link href={clientLink}>{clientTitle}</Link>
                  ) : (
                    clientTitle
                  )}
                </li>
              ))}
            </ul>
          </ProfileAccordionBody>
        </div>
      )}
      {!empty(representativeMatters) && (
        <div>
          <h3 className="print-pdf-title">Representative Matters</h3>
          <ProfileAccordionBody
            className="print-pdf-representative-matters"
            $columnsCountUl={2}
          >
            <JSXWithDynamicLinks HTML={representativeMatters} />
          </ProfileAccordionBody>
        </div>
      )}
      {isAwardsExist && renderAwardsAndRecognitions(additionalTabs)}
      <FooterPrintVersion locations={offices} />
    </BioPagePrintContainer>
  );
};

export default AttorneyPrintPage;
