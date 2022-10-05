import dynamic from 'next/dynamic';

const Results = dynamic(() => import('components/organisms/careers/CareersResults'));

const CareersBody = ({ careers }) => (
  <div className="mb-5">
    <Results positions={careers} />
  </div>
);

export default CareersBody;
