import styled from 'styled-components'
import { globalColor, globalShadow, rem } from '../global_styles/Global.styles'
import { media_breakpoint_down } from '../mediaBreakpoints.style'

export const CategoriesNavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0 15px 40px;
  gap: 10px;
  font-size: ${rem(20)};
  border-left: 5px solid ${globalColor.blue.ultramarine};
  box-shadow: ${globalShadow.allSideShadow};

  h5 {
    margin-bottom: 0;
  }

  ul {
    margin: 0;
  }

  ${media_breakpoint_down('sm')} {
    flex-direction: column;
    align-items: flex-start;
  }
`
