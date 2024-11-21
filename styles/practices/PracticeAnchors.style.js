import styled from 'styled-components';
import { globalColor } from 'styles/global_styles/Global.styles';
import { media_breakpoint_down, media_breakpoint_exactly_down } from 'styles/mediaBreakpoints.style';

export const PracticeAnchorsHolder = styled.div`
  margin-top: 40px;
  position: sticky;
  top: ${({ $headerHeight }) => `${$headerHeight + 6}px`};
  left: 0;
  transition: all 0.3s ease-in-out;
  z-index: 3;
  background-color: ${globalColor.blue.blue6002};
  box-shadow: 0px 0px 12px 0px rgba(22, 58, 107, 0.08);

  ${media_breakpoint_down('lg')} {
    margin-top: 24px;
  }

  ${media_breakpoint_down('md')} {
    margin-top: 20px;
  }
`;
