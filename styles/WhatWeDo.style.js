import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const WhatWeDoWrapper = styled.section`
  padding: 60px 0;
  background-color: ${globalColor.blue.darkBlue};

  ${media_breakpoint_down('md')} {
    padding: 40px 0;
  }
`;

export const WhatWeDoHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  .separated-title {
    .title-text {
      color: ${globalColor.white};
    }
  }
`;

export const WhatWeDoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  > button {
    flex-shrink: 0;
    width: max-content;
  }
`;
