import styled from 'styled-components'
import { media_breakpoint_exactly } from './mediaBreakpoints.style'

export const LogoWrapper = styled.div`
  display: none;

  a {
    > span {
      bottom: 8px;
    }
  }

  ${media_breakpoint_exactly('430px')} {
    display: flex;
  }
`

export const DiamondWrapper = styled.div`
  display: flex;
  position: relative;
  bottom: 33%;

  ${media_breakpoint_exactly('430px')} {
    display: none;
  }
`
