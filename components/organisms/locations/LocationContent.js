import FAQ from 'components/atoms/FAQ';
import DirectionsFilesLink from 'components/common/DirectionsFilesLink';
import Map from 'components/molecules/location/Map';
import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import {
  LocationPageContainer,
  OfficeLocationBoxTitle,
} from 'styles/Locations.style';
import {
  SplitContentDescription,
  SplitContentHolder,
  SplitContentSidebar,
} from 'styles/practices/PracticeContent.style';
import GetInTouchForm from '../practices/GetInTouchForm';
import SocialShare from '../post/SocialShare';

const changeTitle = (title) => title.replace(/(^|\s+)Lawyers(\s+|$)/g, ' ');

const LocationContent = ({
  title,
  currentOffice,
  mapAddress,
  anchorIdMap,
  anchorIdFaq,
  faqData,
}) => (
  <LocationPageContainer>
    <ContainerDefault>
      <SocialShare isPractice customClass="social-share" />
      <OfficeLocationBoxTitle as="p">
        {changeTitle(title)}
      </OfficeLocationBoxTitle>
      <SplitContentHolder>
        <SplitContentDescription>
          <Map
            title={title}
            map={mapAddress}
            anchorIdMap={anchorIdMap}
            height={600}
          />
          <DirectionsFilesLink currentOffice={currentOffice} />
          <FAQ anchorId={anchorIdFaq} faqArrContent={faqData} />
        </SplitContentDescription>
        <SplitContentSidebar>
          <GetInTouchForm />
        </SplitContentSidebar>
      </SplitContentHolder>
    </ContainerDefault>
  </LocationPageContainer>
);

export default LocationContent;
