import React from 'react';
import {
  AttorneyAreaTitle,
  AttorneysAreaBlock,
  AttorneysAreaCards,
  AttorneysMediaAreaContainer,
} from 'styles/AttorneysArea.style';
import empty from 'is-empty';
import AttorneyEntAndMediaCard from 'components/molecules/ent-and-media/AttorneyEntAndMediaCard';

const AttorneysMediaArea = ({ attorneys }) => {
  const { chairs, attorneysList } = attorneys;
  const chair = chairs[0];

  return (
    <AttorneysMediaAreaContainer>
      {!empty(chair) && (
        <AttorneysAreaBlock>
          <AttorneyAreaTitle>Chair</AttorneyAreaTitle>
          <AttorneyEntAndMediaCard
            key={chair?.databaseId}
            link={chair?.link}
            image={chair?.profileImage}
            name={chair?.title}
            designation={chair?.designation}
            number={chair?.phoneNumber}
            email={chair?.email}
            width={180}
            height={210}
            cardTag="h4"
          />
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
              }) => (
                <AttorneyEntAndMediaCard
                  key={databaseId}
                  link={link}
                  image={profileImage}
                  name={title}
                  designation={designation}
                  number={phoneNumber}
                  email={email}
                  width={180}
                  height={210}
                  cardTag="h4"
                />
              ),
            )}
          </AttorneysAreaCards>
        </AttorneysAreaBlock>
      )}
    </AttorneysMediaAreaContainer>
  );
};

export default AttorneysMediaArea;
