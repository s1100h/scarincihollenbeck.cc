import dynamic from 'next/dynamic';
import { sortByKey } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

const VirtualizedMembers = dynamic(() => import('components/shared/VirtualizedMembers'));
const RelatedPractices = dynamic(() => import('components/molecules/location/RelatedPractices'));

export default function LocationsBody({
  attorneys, practices, map, title,
}) {
  const officeTitle = title === 'Washington D.C.' ? 'Washington, D.C.' : title;
  return (
    <>
      <h4 className={grayTitleStyles.title}>{officeTitle}</h4>
      <div className="w-100 d-block mb-4">
        <iframe
          rel="preconnect"
          title={`${title} office`}
          src={map}
          className="w-100"
          height={300}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <h4 className={grayTitleStyles.title}>{`${title} Attorneys`}</h4>
      <VirtualizedMembers members={sortByKey(attorneys, 'lastName')} />
      <RelatedPractices practices={practices} />
    </>
  );
}
