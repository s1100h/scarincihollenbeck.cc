import styled from 'styled-components'
import { globalIndents, globalShadow } from '../global_styles/Global.styles'

export const SurfaceContainer = styled.section`
  height: 100vh;
  padding: ${globalIndents.attorneyProfilePaddings};
  box-shadow: ${globalShadow.allSideShadow};
  overflow-y: auto;
  margin-bottom: 30px;
`
