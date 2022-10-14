import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const NavbarStyled = styled(Navbar)`
  display: flex;
  width: 46%;
  margin-top: 20px;
  margin-right: 8px;
  margin-bottom: 20px;

  ${media_breakpoint_down('lg')} {
    display: none;
  }
`
