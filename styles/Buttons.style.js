import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const RedButtonLink = styled.a`
  padding: 15px 40px;
  background: #a91110;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-decoration: none;

  :hover {
    color: #ffffff;
    text-decoration: none;
  }
`

export const RedButtonBootstrap = styled(RedButtonLink)`
  margin-left: 20px;
`

export const ButtonStandardWidth = styled(Button)`
  width: 200px;
  border-radius: 5px;
`

export const ClearButton = styled(ButtonStandardWidth)`
  margin-right: 0;
  margin-left: auto;

  ${media_breakpoint_down('sm')} {
    margin-right: 7px;
  }
`
