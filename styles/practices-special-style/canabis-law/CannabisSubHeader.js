import styled from 'styled-components';
import {
  globalColor,
  paragraphStyles,
  rem,
} from '../../global_styles/Global.styles';
import { media_breakpoint_down } from '../../mediaBreakpoints.style';

export const CannabisTitles = styled.div`
  max-width: 940px;
  position: relative;

  p {
    margin: 40px 0 0 auto;
    ${paragraphStyles};
    text-align: start;
    font-size: ${rem(20)};
    line-height: 30px;
    color: ${globalColor.white};
    max-width: 680px;
    width: 100%;
  }

  ${media_breakpoint_down('xl')} {
    max-width: 790px;

    p {
      font-size: ${rem(16)};
    }
  }

  ${media_breakpoint_down('lg')} {
    max-width: 620px;

    p {
      font-size: ${rem(12.8)};
    }
  }
`;
