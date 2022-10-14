import dynamic from 'next/dynamic';

const EmptyResults = dynamic(() => import('components/molecules/careers/EmptyResults'));
const PositionCards = dynamic(() => import('components/molecules/careers/PositionCards'));

const CareersResults = ({ positions }) => {
  if (positions.length <= 0) {
    return <EmptyResults />;
  }

  if (positions.length > 0) {
    return <PositionCards positions={positions} />;
  }

  return null;
};

export default CareersResults;
