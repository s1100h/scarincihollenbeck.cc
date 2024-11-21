import { useRouter } from 'next/router';
import { BlueLinkTab, OfficeTabs } from '../../../styles/Locations.style';

const OfficesLinkTabs = ({ officesForTabs }) => {
  const { query } = useRouter();
  return (
    <OfficeTabs>
      {officesForTabs.map((office) => (
        <BlueLinkTab
          key={office.databaseId}
          href={office.uri}
          $isActiveLocation={query.slug === office.slug}
        >
          {office.addressLocality}
        </BlueLinkTab>
      ))}
    </OfficeTabs>
  );
};

export default OfficesLinkTabs;
