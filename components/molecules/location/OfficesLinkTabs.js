import { useRouter } from 'next/router';
import { BlueLinkTab, OfficeTabs } from '../../../styles/Locations.style';

const OfficesLinkTabs = ({
  officesForTabs,
  isActiveTab,
  isLocationTabs,
  onClick,
}) => {
  const { query } = useRouter();

  return (
    <OfficeTabs>
      {officesForTabs.map((office, index) => (
        <BlueLinkTab
          key={office.databaseId}
          href={office.uri || '/'}
          $isActiveLocation={
            (query.slug && query.slug === office.slug)
            || (isLocationTabs && isActiveTab === index)
          }
          onClick={(e) => onClick(e, index)}
        >
          {office.addressLocality}
        </BlueLinkTab>
      ))}
    </OfficeTabs>
  );
};

export default OfficesLinkTabs;
