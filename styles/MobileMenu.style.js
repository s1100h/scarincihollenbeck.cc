import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const Visible = styled.div`
  display: none;

  ${media_breakpoint_down('lg')} {
    display: flex;
    margin-left: 50px;

    svg {
      height: 46px;
      width: 46px;
    }
  }
`
