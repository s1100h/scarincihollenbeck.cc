import dynamic from 'next/dynamic';
import { sortByKey } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_TITLE } from '../../../utils/constants';
import SHLogo from '../../../public/images/sh-logo-diamond.svg';

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
      {/* {officeTitle === 'Little Falls, NJ' && ( */}
      {/*  <a download href="\" className={grayTitleStyles.href}> */}
      {/*    Download NJ Transit Rail System Map */}
      {/*  </a> */}
      {/* )} */}
      <h4 className={grayTitleStyles.title}>{`${title} Attorneys`}</h4>
      {attorneys && <VirtualizedMembers members={sortByKey(attorneys, 'lastName')} />}
      {practices && <RelatedPractices practices={practices} />}
    </>
  );
};

export default LocationsBody;
