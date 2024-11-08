import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const HolidayContentBox = styled.section`
  figure {
    video {
      max-width: 80%;
      min-width: 300px;
      height: fit-content;
    }
  }

  figure:first-of-type {
    text-align: center;
  }
`;

export const HolidayLinkBox = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 70dvh;
  right: -5px;

  h5 {
    display: none;
  }

  :hover {
    cursor: pointer;
    transition: 0.5s;
    scale: 1.05;

    h5 {
      transition: 0.3s;
      display: flex;
      color: ${globalColor.white};
      font-family: var(--font-poppins);
      font-size: ${rem(18)};
      font-weight: 600;
      position: absolute;
      top: 44px;
      right: 1.2vw;
      z-index: 500;
    }
  }

  ${media_breakpoint_down('xl')} {
    :hover {
      h5 {
        font-size: ${rem(14)};
        right: 1.8vw;
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    width: 150px;
    height: 150px;
    top: 55dvh;
    right: -5px;

    :hover {
      h5 {
        font-size: ${rem(12)};
        right: 1.8vw;
        top: 34px;
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    width: 120px;
    height: 120px;
    top: 55dvh;
    right: -5px;

    :hover {
      h5 {
        font-size: ${rem(11)};
        right: 1.8vw;
        top: 26px;
      }
    }
  }
`;
