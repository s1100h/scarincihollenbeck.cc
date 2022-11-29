import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { globalColor } from './global_styles/Global.styles'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const RedButtonLink = styled.a`
  padding: 15px 40px;
  background-color: ${globalColor.red.darkRed};
  font-weight: 600;
  color: ${globalColor.white};
  text-decoration: none;

  :hover {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
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
  margin-right: 12px;
  margin-left: auto;
  border-radius: 0;
  width: 130px;
  height: 33px;
  padding: 5px 22px;
  border: 1px solid ${globalColor.blue.dirtyBlue};
  color: ${globalColor.blue.dirtyBlue};

  :hover {
    border: 1px solid ${globalColor.blue.dirtyBlue};
    color: ${globalColor.blue.dirtyBlue};
  }

  :focus {
    border: 1px solid ${globalColor.blue.dirtyBlue};
    color: ${globalColor.blue.dirtyBlue};
  }

  :active {
    border: 1px solid ${globalColor.blue.dirtyBlue};
    color: ${globalColor.blue.dirtyBlue} !important;
  }

  ${media_breakpoint_down('lg')} {
    margin-bottom: 0 !important;
  }

  ${media_breakpoint_down('sm')} {
    margin-right: 7px;
  }
`
