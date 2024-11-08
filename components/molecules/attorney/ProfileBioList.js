import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import React from 'react';
import {
  ProfileBioListContent,
  ProfileBioListItem,
  ProfileBioListTitle,
} from 'styles/attorney-page/AttorneyProfile.style';

const ProfileBioList = ({ title, content }) => (
  <ProfileBioListItem className="item-info-box">
    <ProfileBioListTitle>{title}</ProfileBioListTitle>
    <ProfileBioListContent>
      <JSXWithDynamicLinks HTML={content} />
    </ProfileBioListContent>
  </ProfileBioListItem>
);

export default ProfileBioList;
