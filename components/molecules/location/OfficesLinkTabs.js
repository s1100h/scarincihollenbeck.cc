import { useRouter } from 'next/router';
import { OfficeTab, OfficeTabs } from '../../../styles/Locations.style';
import { GradientWrapper } from '../../../styles/SingleSubHeader.style';

const OfficesLinkTabs = ({ officesForTabs, officeImage }) => {
  const { query } = useRouter();
  return (
    <OfficeTabs>
      {officesForTabs.map((office) => (
        <OfficeTab
          key={office.databaseId}
          href={office.uri}
          imgurl={(officeImage.length > 0 && query.slug === office.slug && officeImage) || ''}
        >
          {query.slug === office.slug && <GradientWrapper />}
          <span>{office.addressLocality}</span>
        </OfficeTab>
      ))}
    </OfficeTabs>
  );
};

export default OfficesLinkTabs;
