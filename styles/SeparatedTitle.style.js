import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const SeparatedTitleWrapper = styled.h2`
  margin: 0;
  display: flex;
  align-items: flex-start;
  column-gap: 4px;

  .title-text {
    color: ${globalColor.blue.darkBlue};
    font-size: ${rem(32)};
    line-height: 1.38;
    font-weight: 600;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(20)};
      line-height: 1.4;
    }
  }

  .title-separator {
    margin: 10px;

    ${media_breakpoint_down('md')} {
      margin: 6px;
      --size: 8px;
    }
  }
`;
