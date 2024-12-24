import React, { Fragment, useId } from 'react';
import dynamic from 'next/dynamic';
import empty from 'is-empty';
import { ContainerDefault } from 'styles/Containers.style';
import { Title32 } from 'styles/common/Typography.style';
import LogoSeparator from 'components/common/LogoSeparator';
import PositionCard from '../../molecules/careers/PositionCard';
import {
  CareersBlockSubtitle,
  CareersBlock,
  CareersBlockHeader,
  CareersBlocks,
  CareersSection,
  CareersBlockCards,
} from '../../../styles/Careers.style';

const EmptyResults = dynamic(() => import('components/molecules/careers/EmptyResults'));

const addPluralToEnd = (title) => {
  const titleMap = {
    attorney: 'attorneys',
  };

  return titleMap[title] || title;
};

const renderSubTitle = (title) => {
  const subTitleMap = {
    attorneys: 'Open attorney positions at Scarinci Hollenbeck, LLC.',
  };

  return subTitleMap[title] || `Open position in our ${title} team`;
};
const renderCareersBlocks = (careersObj) => Object.keys(careersObj).map((careerType, index) => (
  <Fragment key={useId()}>
    <CareersBlock>
      <CareersBlockHeader>
        <Title32>{addPluralToEnd(careerType)}</Title32>
        <CareersBlockSubtitle>
          {renderSubTitle(addPluralToEnd(careerType))}
        </CareersBlockSubtitle>
      </CareersBlockHeader>
      <CareersBlockCards>
        {careersObj[careerType].map((position) => (
          <PositionCard
            key={position.databaseId}
            title={position.position}
            miniDescription={position.jobSummaryForCard}
            locations={position.locations}
            duration={position.duration}
            href={`careers/${position.slug}`}
          />
        ))}
      </CareersBlockCards>
    </CareersBlock>
    {index < Object.entries(careersObj).length - 1 && (
    <LogoSeparator direction="row" isBig />
    )}
  </Fragment>
));

const CareersResults = ({ positions }) => (
  <CareersSection>
    <ContainerDefault>
      {!empty(positions) ? (
        <CareersBlocks>{renderCareersBlocks(positions)}</CareersBlocks>
      ) : (
        <EmptyResults />
      )}
    </ContainerDefault>
  </CareersSection>
);

export default CareersResults;
