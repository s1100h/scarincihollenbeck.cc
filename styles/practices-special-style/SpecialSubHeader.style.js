import styled from 'styled-components';

export const SpecialSubHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 155px 10% 0;
  height: 100vh;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat;
  position: relative;
  align-items: center;
  overflow: hidden;

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  h1 {
    width: 44%;
    position: absolute;
    bottom: -32px;
    font-size: 12rem;
    font-weight: 300;
    line-height: 142px;
    color: ${globalColor.white};
  }

  ul {
    position: relative;
    margin-bottom: 40px;

    > :last-child {
      span {
        color: ${globalColor.white};
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    padding: 155px 2% 0;

    h1 {
      font-size: 10rem;
      bottom: -32px;
    }
  }

  ${media_breakpoint_down('lg')} {
    height: 770px;

    h1 {
      font-size: 8rem;
      bottom: -38px;
      line-height: 112px;
    }
  }

  ${media_breakpoint_down('md')} {
    height: 670px;

    h1 {
      font-size: 8rem;
    }
  }

  ${media_breakpoint_exactly_down(645)} {
    height: 770px;
  }

  ${media_breakpoint_exactly_down(630)} {
    h1 {
      font-size: 6rem;
      bottom: -44px;
      line-height: 100px;
    }
  }

  ${media_breakpoint_down('sm')} {
    h1 {
      font-size: 5rem;
      bottom: -20px;
      line-height: 69px;
    }
  }

  ${media_breakpoint_exactly_down(396)} {
    h1 {
      font-size: 4rem;
      line-height: 56px;
    }
  }
`;
import { globalColor } from '../global_styles/Global.styles';

import { media_breakpoint_down, media_breakpoint_exactly_down } from '../mediaBreakpoints.style';

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: relative;

  ${media_breakpoint_exactly_down(645)} {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;

    :last-child {
      align-items: start;
    }
  }
`;
