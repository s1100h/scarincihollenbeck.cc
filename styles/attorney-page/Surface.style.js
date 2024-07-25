import styled from 'styled-components';
import { globalColor, globalIndents, globalShadow, rem } from '../global_styles/Global.styles';

export const SurfaceContainer = styled.section`
  height: ${(props) => (props?.unscrollable ? 'auto' : '100vh')};
  padding: ${globalIndents.attorneyProfilePaddings};
  box-shadow: ${globalShadow.allSideShadow};
  overflow-y: ${(props) => (props?.unscrollable ? 'none' : 'auto')};
  margin-bottom: 30px;

  .red-title {
    margin-right: 15px;
    font-size: ${rem(30)};
    font-weight: 400;
    color: ${globalColor.red.darkRed};
    margin-bottom: 15px;
  }
`;
