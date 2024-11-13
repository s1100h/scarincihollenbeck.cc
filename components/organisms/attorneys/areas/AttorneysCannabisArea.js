import React, { useState } from 'react';
import empty from 'is-empty';
import {
  AttorneyAreaTitle,
  AttorneysAreaBlock,
  AttorneysAreaCards,
  AttorneysCannabisAreaContainer,
} from 'styles/AttorneysArea.style';
import AttorneyCannabisCard from 'components/molecules/cannabis-law/AttorneyCannabisCard';
import useStateScreen from 'hooks/useStateScreen';
import AttorneyCard from 'components/shared/AttorneyCard';

const AttorneysCannabisArea = ({ attorneys }) => {
  const { chairs, attorneysList } = attorneys;
  const { isMobileScreen } = useStateScreen();
  const chair = chairs[0];
  const [cardIdHovered, setCardIdHovered] = useState();

  return (
    <AttorneysCannabisAreaContainer>
      {!empty(chair) && (
        <AttorneysAreaBlock>
          <AttorneyAreaTitle>Chair</AttorneyAreaTitle>
          {isMobileScreen ? (
            <AttorneyCard
              key={chair.databaseId}
              link={`${chair.link}`}
              image={chair.profileImage}
              name={chair.title}
              designation={chair.designation}
              officeLocations={chair.officeLocation}
              number={chair.phoneNumber}
              email={chair.email}
              width={80}
              height={112}
              type="/attorneys/[slug]"
            />
          ) : (
            <AttorneyCannabisCard
              key={chair?.databaseId}
              link={chair?.link}
              image={chair?.profileImage}
              name={chair?.title}
              designation={chair?.designation}
              number={chair?.phoneNumber}
              email={chair?.email}
              width={180}
              height={210}
              // locations={chair?.officeLocation}
              setterId={setCardIdHovered}
              cardIdHovered={cardIdHovered}
              databaseId={chair?.databaseId}
            />
          )}
        </AttorneysAreaBlock>
      )}

      {attorneysList?.length > 0 && (
        <AttorneysAreaBlock>
          <AttorneyAreaTitle>Attorneys</AttorneyAreaTitle>
          <AttorneysAreaCards>
            {attorneysList.map(
              ({
                databaseId,
                link,
                profileImage,
                title,
                designation,
                officeLocation,
                phoneNumber,
                email,
                phone,
              }) => (isMobileScreen ? (
                <AttorneyCard
                  key={databaseId}
                  link={link}
                  image={profileImage}
                  name={title}
                  designation={designation}
                  officeLocations={officeLocation}
                  number={phoneNumber}
                  email={email}
                  width={80}
                  height={112}
                  type="/attorneys/[slug]"
                />
              ) : (
                <AttorneyCannabisCard
                  key={databaseId}
                  link={link}
                  image={profileImage}
                  name={title}
                  designation={designation}
                  number={phoneNumber || phone}
                  email={email}
                  width={180}
                  height={210}
                    // locations={officeLocation}
                  setterId={setCardIdHovered}
                  cardIdHovered={cardIdHovered}
                  databaseId={databaseId}
                />
              )),
            )}
          </AttorneysAreaCards>
        </AttorneysAreaBlock>
      )}
    </AttorneysCannabisAreaContainer>
  );
};

export default AttorneysCannabisArea;
