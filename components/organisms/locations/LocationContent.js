import DirectionsFilesLink from 'components/common/DirectionsFilesLink';
import Map from 'components/molecules/location/Map';
import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { LocationPageContainer } from 'styles/Locations.style';
import {
  SplitContentDescription,
  SplitContentHolder,
  SplitContentSidebar,
  SplitContentText,
} from 'styles/practices/PracticeContent.style';
import { TitleH2 } from 'styles/common/Typography.style';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import empty from 'is-empty';
import GetInTouchForm from '../practices/GetInTouchForm';
import SocialShare from '../post/SocialShare';

const changeTitle = (title) => title.replace(/(^|\s+)Lawyers(\s+|$)/g, ' ');

const LocationContent = ({
  title,
  currentOffice,
  mapAddress,
  anchorIdMap,
  description,
}) => (
  <LocationPageContainer>
    <ContainerDefault>
      <SocialShare isPractice customClass="social-share" />

      <SplitContentHolder>
        <SplitContentDescription>
          <TitleH2>
            {`Your Trusted Legal Partners in ${changeTitle(title)}`}
          </TitleH2>
          <Map
            title={title}
            map={mapAddress}
            anchorIdMap={anchorIdMap}
            height={600}
          />
          <DirectionsFilesLink currentOffice={currentOffice} />

          {!empty(description) && (
            <SplitContentText>
              <JSXWithDynamicLinks HTML={description} />
            </SplitContentText>
          )}
        </SplitContentDescription>
        <SplitContentSidebar>
          <GetInTouchForm />
        </SplitContentSidebar>
      </SplitContentHolder>
    </ContainerDefault>
  </LocationPageContainer>
);

export default LocationContent;
