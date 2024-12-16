import { useRouter } from 'next/router';
import { BlueLinkTab, OfficeTabs } from '../../../styles/Locations.style';

const OfficesLinkTabs = ({
  officesForTabs,
  isActiveTab,
  setIsActiveTab,
  isLocationTabs,
}) => {
  const { query } = useRouter();

  const onClick = (e, index) => {
    if (!isLocationTabs) return null;
    e.preventDefault();
    setIsActiveTab(index);
  };

  return (
    <OfficeTabs>
      {officesForTabs.map((office, index) => (
        <BlueLinkTab
          key={office.databaseId}
          href={office.uri || '#'}
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
