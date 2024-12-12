import styled from 'styled-components';
import { paragraphStyles, rem } from '../../global_styles/Global.styles';
import { media_breakpoint_down } from '../../mediaBreakpoints.style';

export const WeAdviseThisBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url('/images/smoke_overlay.webp') center/cover no-repeat;
  padding-bottom: 80px;
  padding-top: 80px;

  div {
    ${paragraphStyles};
    position: relative;

    img {
      position: absolute;
      bottom: -22px;
      right: -167px;
      transform: rotate(-17deg);
    }
  }

  ${media_breakpoint_down('lg')} {
    div {
      width: 70%;

      img {
        width: 160px;
        bottom: -42px;
        right: -44px;
      }
    }
  }

  ${media_breakpoint_down('md')} {
    div {
      font-size: ${rem(16)};
    }
  }

  ${media_breakpoint_down('sm')} {
    justify-content: start;
    padding-left: 15px;
    padding-right: 15px;
    div {
      text-align: start;
      width: 100%;

      img {
        right: 8px;
        bottom: -70px;
        transform: rotate(-3deg);
      }
    }
  }
`;
