import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { titleH2Styles } from './common/Typography.style';

export const SeparatedTitleWrapper = styled.h2`
  margin: 0;
  display: flex;
  align-items: center;
  column-gap: 4px;
  text-wrap: balance;

  .title-text {
    ${titleH2Styles};
  }

  .title-separator {
    margin: 10px;

    ${media_breakpoint_down('md')} {
      margin: 6px;
      --size: 16px;
    }
  }
`;
