import styled from 'styled-components';
import { globalColor, globalShadow, threeDots } from 'styles/global_styles/Global.styles';
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style';

export const MoreTabContainer = styled.section`
  display: flex;
  height: 535px;
  padding: 0 5px 0 15px;
  justify-content: center;
  align-items: flex-start;
  box-shadow: ${globalShadow.allSideShadow};
  gap: 10px;

  ${media_breakpoint_down('sm')} {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: fit-content;
  }
`;
export const ButtonBox = styled.nav`
  margin-top: 20px;
  .btn-group-vertical {
    div {
      margin: 0;
      border-bottom: none;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      overflow: hidden;
      overflow-x: auto;
    }
    :last-child {
      border-bottom: 1px solid ${globalColor.gray.gray80};
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 15px 0;
`;
