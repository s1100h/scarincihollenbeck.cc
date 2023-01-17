import dynamic from 'next/dynamic';
import { sortByKey } from 'utils/helpers';
import ContentTitle from 'components/atoms/ContentTitle';
import { DownloadTheMap, LinkMapBox, MediaBr } from 'styles/Locations.style';
import { BsDownload } from 'react-icons/bs';

const VirtualizedMembers = dynamic(() => import('components/shared/VirtualizedMembers'));
const RelatedPractices = dynamic(() => import('components/molecules/location/RelatedPractices'));
const Map = dynamic(() => import('components/molecules/location/Map'));
const changeTitle = (title) => title.replace(/(^|\s+)Lawyers(\s+|$)/g, ' ');
const LocationsBody = ({
  attorneys, practices, map, title, linkToPdfMap, locationId,
}) => {
  const officeTitle = title === 'Washington D.C.' ? 'Washington, D.C.' : title;
  const littleFalls = 29436;
  return (
    <>
      <ContentTitle title={officeTitle} />
      <Map title={title} map={map} />
      {locationId === littleFalls && (
        <LinkMapBox>
          <DownloadTheMap href={linkToPdfMap.trainStationsMap} target="_blank" download>
            NJ Transit Rail System Map
            <BsDownload />
          </DownloadTheMap>
          <DownloadTheMap href={linkToPdfMap.autoMap} target="_blank" download>
            Directions to the Overlook
            {' '}
            <MediaBr />
            Corporate Center
            <BsDownload />
          </DownloadTheMap>
        </LinkMapBox>
      )}
      <ContentTitle title={`${changeTitle(title)} Attorneys`} />
      {attorneys && <VirtualizedMembers members={sortByKey(attorneys, 'lastName')} />}
      {practices && <RelatedPractices practices={practices} />}
    </>
  );
};

export default LocationsBody;
