import React from 'react';
import {
  CardImageVideoContainer,
  CardImageWrapper,
  ProfileBgImage,
  ProfileBio,
  ProfileBioText,
  ProfileBioTitle,
  ProfileHeaderHolder,
  ProfileHeaderLeft,
  ProfileHeaderRight,
  ProfileHeaderSection,
} from 'styles/attorney-page/AttorneyProfile.style';
import { ContainerDefault } from 'styles/Containers.style';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import empty from 'is-empty';
import ProfileBioList from 'components/molecules/attorney/ProfileBioList';
import { MemorialInfoItems, MemorialTitle } from 'styles/Memorials.style';
import Image from 'next/image';
import PostBreadCrumbs from '../post/PostBreadcrumbs';
import MemorialLifespan from './MemorialLifespan';

const MemorialHeader = ({
  name,
  profileImage,
  additionalInfo,
  descriptionTitle,
  description,
  born,
  death,
}) => (
  <ProfileHeaderSection>
    <ContainerDefault>
      <PostBreadCrumbs />
      <ProfileHeaderHolder>
        <ProfileHeaderLeft>
          <CardImageVideoContainer>
            <CardImageWrapper>
              <Image
                key={profileImage}
                src={profileImage}
                alt={name || 'Profile avatar'}
                width={500}
                height={535}
                quality={100}
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 324px, (max-width: 1680px) 400px, 500px"
                className="animate__animated animate__fadeInUp animate__fast"
                priority
                loading="eager"
              />
            </CardImageWrapper>
          </CardImageVideoContainer>

          <MemorialLifespan born={born} death={death} />

          <ProfileBgImage
            src="/images/profile-attorney-bg.webp"
            width={700}
            height={900}
            alt="Profile background"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1680px) 480px, 700px"
            loading="eager"
          />
        </ProfileHeaderLeft>

        <ProfileHeaderRight>
          {!empty(name) && (
            <MemorialTitle>{`The Passing of ${name}`}</MemorialTitle>
          )}

          <ProfileBio>
            {!empty(descriptionTitle) && (
              <ProfileBioTitle>{descriptionTitle}</ProfileBioTitle>
            )}
            {!empty(description) && (
              <ProfileBioText as="div">
                <JSXWithDynamicLinks HTML={description} />
              </ProfileBioText>
            )}
          </ProfileBio>

          {!empty(additionalInfo) && (
            <MemorialInfoItems>
              {additionalInfo?.map((item) => (
                <ProfileBioList
                  key={`${item?.title}-item`}
                  title={item?.title}
                  content={item?.content}
                  columns={item?.columns}
                />
              ))}
            </MemorialInfoItems>
          )}
        </ProfileHeaderRight>
      </ProfileHeaderHolder>
    </ContainerDefault>
  </ProfileHeaderSection>
);

export default MemorialHeader;
