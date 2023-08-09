import React, { useId } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Col } from 'react-bootstrap';
import empty from 'is-empty';
import Loader from '../../atoms/Loader';
import PositionCard from '../../molecules/careers/PositionCard';
import { CareerBlockSubtitle, CareerBlockTitle, CareersBlock } from '../../../styles/Careers.style';
import { OptionalIndent } from '../../../styles/global_styles/Global.styles';

const EmptyResults = dynamic(() => import('components/molecules/careers/EmptyResults'));
const renderCareersBlocks = (careersObj, handleClickCareerCallback) => Object.keys(careersObj).map((careerType) => (
  <CareersBlock key={useId()}>
    <CareerBlockTitle>{`${careerType}s`}</CareerBlockTitle>
    <CareerBlockSubtitle>
      Open position in our
      {`${careerType}s`}
      {' '}
      team.
    </CareerBlockSubtitle>
    {careersObj[careerType].map((position) => (
      <Col sm={12} md={6} xl={4} className="mt-3 mb-2" key={position.databaseId}>
        <PositionCard
          handleClickToCareer={handleClickCareerCallback}
          slug={`careers/${position.slug}`}
          title={position.position}
          miniDescription={position.jobSummaryForCard}
          positionLocation={position.positionLocation}
          positionType={position.positionType}
          startDate={position.startDate}
          duration={position.duration}
        />
      </Col>
    ))}
  </CareersBlock>
));

const CareersResults = ({ positions }) => {
  const { push } = useRouter();
  const handleClickCareer = (slug) => push(slug);

  return (
    <>
      {empty(positions) ? (
        <Loader />
      ) : !empty(positions) ? (
        <>
          <OptionalIndent mt={30} />
          {renderCareersBlocks(positions, handleClickCareer)}
        </>
      ) : (
        <EmptyResults />
      )}
    </>
  );
};

export default CareersResults;
