import styled from 'styled-components'
import { rem } from './global_styles/Global.styles'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const HolidayContent = styled.section`
  figure {
    video {
      max-width: 750px;
      min-width: 300px;
      height: fit-content;
    }
  }
`

export const HolidayLinkBox = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 70vh;
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
      color: white;
      font-family: 'Kenjo I';
      font-size: ${rem(18)};
      font-weight: 600;
      position: absolute;
      top: 44px;
      right: 1.2vw;
      z-index: 500;
    }
  }

  ${media_breakpoint_down('lg')} {
    width: 150px;
    height: 150px;
    top: 55vh;
    right: -5px;
  }

  ${media_breakpoint_down('sm')} {
    width: 120px;
    height: 120px;
    top: 55vh;
    right: -5px;
  }
`
