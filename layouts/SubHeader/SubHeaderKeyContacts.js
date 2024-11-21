import React from 'react';
import {
  SubHeaderInteractive,
  SubHeaderKeyContactsCards,
} from 'styles/practices/SubHeader.style';
import empty from 'is-empty';
import AttorneyCard from 'components/shared/AttorneyCard';
import AboutAuthorFormCard from 'components/organisms/post/AboutAuthorFormCard';
import { globalColor } from 'styles/global_styles/Global.styles';

const SubHeaderKeyContacts = ({ keyContacts }) => {
  if (empty(keyContacts)) return null;
  return (
    <SubHeaderInteractive $bg={globalColor.blue.blue6002}>
      <h3>Key Contacts</h3>
      <SubHeaderKeyContactsCards>
        {keyContacts?.slice(0, 2)?.map((keyContact) => (
          <AttorneyCard
            key={keyContact.databaseId}
            link={keyContact.uri || keyContact.link}
            name={keyContact.display_name || keyContact.title}
            designation={keyContact.designation}
            image={keyContact.profileImage}
            officeLocations={keyContact.officeLocation}
            number={keyContact.phoneNumber}
            email={keyContact.email}
            width={300}
            height={300}
          />
        ))}
      </SubHeaderKeyContactsCards>
      <AboutAuthorFormCard blockName="subheader" />
    </SubHeaderInteractive>
  );
};

export default SubHeaderKeyContacts;
