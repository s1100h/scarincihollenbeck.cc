import dynamic from 'next/dynamic';
import { sortByKey } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

const VirtualizedMembers = dynamic(() => import('components/shared/VirtualizedMembers'));
const RelatedPractices = dynamic(() => import('components/molecules/location/RelatedPractices'));
const Map = dynamic(() => import('components/molecules/location/Map'));

const LocationsBody = ({
  attorneys, practices, map, title,
}) => {
  const officeTitle = title === 'Washington D.C.' ? 'Washington, D.C.' : title;
  return (
    <>
      <h4 className={grayTitleStyles.title}>{officeTitle}</h4>
      <Map title={title} map={map} />
      <h4 className={grayTitleStyles.title}>{`${title} Attorneys`}</h4>
      <VirtualizedMembers members={sortByKey(attorneys, 'lastName')} />
      <RelatedPractices practices={practices} />
    </>
  );
};

export default LocationsBody;
