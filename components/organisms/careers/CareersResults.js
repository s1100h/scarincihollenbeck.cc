import dynamic from 'next/dynamic';

const EmptyResults = dynamic(() => import('components/molecules/careers/EmptyResults'));
const RenderResults = dynamic(() => import('components/molecules/careers/RenderResults'));

const CareersResults = ({ positions }) => {
  if (positions.length <= 0) {
    return <EmptyResults />;
  }

  if (positions.length > 0) {
    return <RenderResults positions={positions} />;
  }

  return null;
};

export default CareersResults;
