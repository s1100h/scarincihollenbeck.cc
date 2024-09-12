import styled from 'styled-components';
import { media_breakpoint_exactly_down } from 'styles/mediaBreakpoints.style';

export const PracticeAnchorsHolder = styled.div`
  margin-top: 40px;
  position: sticky;
  top: ${({ $headerHeight }) => `${$headerHeight + 6}px`};
  left: 0;
  transition: all 0.3s ease-in-out;
  z-index: 3;

  ${media_breakpoint_exactly_down(1439)} {
    margin-top: 32px;
  }
`;
