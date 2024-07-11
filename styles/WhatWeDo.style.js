import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';

export const WhatWeDoWrapper = styled.section`
  padding: 60px 0;
  background-color: ${globalColor.blue.darkBlue};
`;

export const WhatWeDoHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  .title-text {
    color: ${globalColor.white};
  }
`;

export const WhatWeDoTitle = styled.h2``;
