import Link from 'next/link';
import { OfficeTabs } from '../../../styles/Locations.style';

const OfficesLinkTabs = ({ officesForTabs }) => (
  <OfficeTabs>
    {officesForTabs.map((office) => (
      <Link key={office.databaseId} href={office.uri}>
        {office.addressLocality}
      </Link>
    ))}
  </OfficeTabs>
);

export default OfficesLinkTabs;
