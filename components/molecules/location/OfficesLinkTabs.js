import { useRouter } from 'next/router';
import { Fragment } from 'react';
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
        <Fragment key={office.databaseId}>
          {!isBlueVariant ? (
            <OfficeTab
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
              href={office.uri}
              locationturned={query.slug === office.slug ? 'true' : ''}
            >
              {office.addressLocality}
            </BlueLinkTab>
          )}
        </Fragment>
      ))}
    </OfficeTabs>
  );
};

export default OfficesLinkTabs;
