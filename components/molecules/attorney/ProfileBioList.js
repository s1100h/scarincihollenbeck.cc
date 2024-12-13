import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import React from 'react';
import empty from 'is-empty';
import {
  ProfileBioListColumn,
  ProfileBioListColumns,
  ProfileBioListColumnSubtitle,
  ProfileBioListColumnText,
  ProfileBioListColumnTitle,
  ProfileBioListContent,
  ProfileBioListItem,
  ProfileBioListTitle,
} from 'styles/attorney-page/AttorneyProfile.style';

const ProfileBioList = ({ title, content, columns }) => (
  <ProfileBioListItem className="item-info-box">
    {!empty(title) && <ProfileBioListTitle>{title}</ProfileBioListTitle>}
    {!empty(content) && (
      <ProfileBioListContent>
        <JSXWithDynamicLinks HTML={content} />
      </ProfileBioListContent>
    )}

    {!empty(columns) && (
      <ProfileBioListColumns>
        {columns?.map(({ subtitle, title, text }, index) => (
          <ProfileBioListColumn key={`${title}-${index + 1}-column`}>
            {!empty(subtitle) && (
              <ProfileBioListColumnSubtitle>
                {subtitle}
              </ProfileBioListColumnSubtitle>
            )}
            {!empty(title) && (
              <ProfileBioListColumnTitle>{title}</ProfileBioListColumnTitle>
            )}
            {!empty(text) && (
              <ProfileBioListColumnText>
                <JSXWithDynamicLinks HTML={text} />
              </ProfileBioListColumnText>
            )}
          </ProfileBioListColumn>
        ))}
      </ProfileBioListColumns>
    )}
  </ProfileBioListItem>
);

export default ProfileBioList;
