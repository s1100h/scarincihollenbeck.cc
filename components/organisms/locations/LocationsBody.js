import dynamic from 'next/dynamic';
import { sortByKey } from 'utils/helpers';
import ContentTitle from 'components/atoms/ContentTitle';

const VirtualizedMembers = dynamic(() => import('components/shared/VirtualizedMembers'));
const RelatedPractices = dynamic(() => import('components/molecules/location/RelatedPractices'));
const Map = dynamic(() => import('components/molecules/location/Map'));

const LocationsBody = ({
  attorneys, practices, map, title,
}) => {
  const officeTitle = title === 'Washington D.C.' ? 'Washington, D.C.' : title;

  return (
    <>
      <ContentTitle title={officeTitle} />
      <Map title={title} map={map} />
      <ContentTitle title={`${title} Attorneys`} />
      {attorneys && <VirtualizedMembers members={sortByKey(attorneys, 'lastName')} />}
      {practices && <RelatedPractices practices={practices} />}
    </>
  );
};

export default LocationsBody;
