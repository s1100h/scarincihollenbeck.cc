import { useRouter } from 'next/router';
import {
  BlueLinkTab,
  OfficeTab,
  OfficeTabs,
} from '../../../styles/Locations.style';
import { GradientWrapper } from '../../../styles/SingleSubHeader.style';

const OfficesLinkTabs = ({ officesForTabs, officeImage, isBlueVariant }) => {
  const { query } = useRouter();
  return (
    <OfficeTabs isBlueVariant={isBlueVariant ? 'true' : ''}>
      {officesForTabs.map((office) => (
        <>
          {!isBlueVariant ? (
            <OfficeTab
              key={office.databaseId * 3}
              href={office.uri}
              imgurl={
                (officeImage?.length > 0
                  && query.slug === office.slug
                  && officeImage)
                || ''
              }
            >
              {query.slug === office.slug && <GradientWrapper />}
              <span>{office.addressLocality}</span>
            </OfficeTab>
          ) : (
            <BlueLinkTab
              key={office.databaseId * 2}
              href={office.uri}
              locationturned={query.slug === office.slug ? 'true' : ''}
            >
              {office.addressLocality}
            </BlueLinkTab>
          )}
        </>
      ))}
    </OfficeTabs>
  );
};

export default OfficesLinkTabs;
