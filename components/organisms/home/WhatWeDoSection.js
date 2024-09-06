import SeparatedTitle from 'components/common/SeparatedTitle';
import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { globalColor } from 'styles/global_styles/Global.styles';
import { WhatWeDoHolder, WhatWeDoWrapper } from 'styles/WhatWeDo.style';
import PracticesTabs from './PracticesTabs';

const WhatWeDoSection = ({ groupsPractices, anchorId }) => (
  <WhatWeDoWrapper id={anchorId} data-testid="what-we-do">
    <ContainerDefault className="practice-container">
      <WhatWeDoHolder>
        <SeparatedTitle
          separatorSize={24}
          separatorColor={globalColor.blue.skyBlue}
          title="What we do?"
        />
        <PracticesTabs groupsPractices={groupsPractices} />
      </WhatWeDoHolder>
    </ContainerDefault>
  </WhatWeDoWrapper>
);

export default WhatWeDoSection;
