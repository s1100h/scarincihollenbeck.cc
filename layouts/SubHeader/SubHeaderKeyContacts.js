import React, { Fragment } from 'react';
import {
  SubHeaderInteractive,
  SubHeaderKeyContactsCards,
} from 'styles/practices/SubHeader.style';
import empty from 'is-empty';
import AttorneyCard from 'components/shared/AttorneyCard';
import AboutAuthorFormCard from 'components/organisms/post/AboutAuthorFormCard';
import { globalColor } from 'styles/global_styles/Global.styles';
import { QRCodesBoxForPDF } from 'styles/common/PrintStyles.style';

const SubHeaderKeyContacts = ({ keyContacts, isPrint }) => {
  if (empty(keyContacts)) return null;

  return (
    <SubHeaderInteractive $bg={globalColor.blue.blue6002}>
      <h3>Key Contacts</h3>
      <SubHeaderKeyContactsCards>
        {keyContacts?.slice(0, 1)?.map((keyContact) => (
          <Fragment key={keyContact.databaseId}>
            <AttorneyCard
              link={keyContact.uri || keyContact.link}
              name={keyContact.display_name || keyContact.title}
              designation={keyContact.designation}
              image={keyContact.profileImage}
              officeLocations={keyContact.officeLocation}
              number={keyContact.phoneNumber}
              email={keyContact.email}
              width={300}
              height={300}
              isPrint={isPrint}
            />
            {(!empty(keyContact.qrCodeLinkedin)
              || !empty(keyContact.qrCodeBioPage)) && (
              <QRCodesBoxForPDF>
                {!empty(keyContact.qrCodeLinkedin) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={keyContact.qrCodeLinkedin?.sourceUrl}
                    alt="LinkedIn"
                    width={92}
                    height={80}
                  />
                )}
                {!empty(keyContact.qrCodeBioPage) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={keyContact.qrCodeBioPage?.sourceUrl}
                    alt="The bio page"
                    width={92}
                    height={80}
                  />
                )}
              </QRCodesBoxForPDF>
            )}
          </Fragment>
        ))}
      </SubHeaderKeyContactsCards>
      <AboutAuthorFormCard blockName="subheader" />
    </SubHeaderInteractive>
  );
};

export default SubHeaderKeyContacts;
