/* eslint-disable */
import { BsDownload } from 'react-icons/bs';
import {
  DownloadTheMap,
  LinkMapBox,
  MediaBr,
} from '../../styles/Locations.style';

const DirectionsFilesLink = ({ currentOffice }) => (
  <>
    {(currentOffice.autoMap?.length > 0 ||
      currentOffice.trainStationsMap?.length > 0) && (
      <LinkMapBox className="link-map-box">
        {currentOffice?.trainStationsMap.length > 0 && (
          <DownloadTheMap
            href={currentOffice.trainStationsMap}
            target="_blank"
            download
          >
            NJ Transit Rail System Map
            <BsDownload />
          </DownloadTheMap>
        )}
        {currentOffice?.autoMap.length > 0 && (
          <DownloadTheMap href={currentOffice.autoMap} target="_blank" download>
            Directions to the Overlook <MediaBr />
            Corporate Center
            <BsDownload />
          </DownloadTheMap>
        )}
      </LinkMapBox>
    )}
  </>
);

export default DirectionsFilesLink;
