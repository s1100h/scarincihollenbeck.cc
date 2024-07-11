import SeparatedTitle from 'components/common/SeparatedTitle';
import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { globalColor } from 'styles/global_styles/Global.styles';
import {
  WhatWeDoHolder,
  WhatWeDoTitle,
  WhatWeDoWrapper,
} from 'styles/WhatWeDo.style';

const WhatWeDoSection = ({ groupsPractices }) => (
  <WhatWeDoWrapper>
    <ContainerDefault>
      <WhatWeDoHolder>
        <SeparatedTitle
          separatorSize={24}
          separatorColor={globalColor.blue.skyBlue}
          title="What we do?"
        />
      </WhatWeDoHolder>
    </ContainerDefault>
  </WhatWeDoWrapper>
);

export default WhatWeDoSection;
