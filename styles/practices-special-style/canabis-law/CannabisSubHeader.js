import styled from 'styled-components';
import {
  globalColor,
  paragraphStyles,
  rem,
} from '../../global_styles/Global.styles';
import { media_breakpoint_down } from '../../mediaBreakpoints.style';

export const CannabisTitle = styled.div`
  margin: auto 0 0 0;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const CannabisSubTitle = styled.div`
  margin-bottom: 75px;
  margin-left: 20px;

  p {
    margin: 0;
    ${paragraphStyles};
    text-align: start;
    font-size: ${rem(20)};
    line-height: 30px;
    color: ${globalColor.white};
    max-width: 680px;
    width: 100%;
  }

  ${media_breakpoint_down('xxl')} {
    margin-bottom: 50px;
  }

  ${media_breakpoint_down('xl')} {
    margin-left: 0;
    p {
      font-size: 1rem;
    }
  }

  ${media_breakpoint_down('lg')} {
    margin-bottom: 10px;

    p {
      max-width: 505px;
      font-size: 0.8rem;
    }
  }

  ${media_breakpoint_down('md')} {
    p {
      max-width: 364px;
    }
  }

  ${media_breakpoint_down('sm')} {
    display: none;
  }
`;
