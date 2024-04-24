import styled from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const PracticeAnchorsHolder = styled.div`
  margin-top: 40px;
  position: sticky;
  top: 155px;
  left: 0;
  transition: all 0.3s ease;
  z-index: 2;

  ${media_breakpoint_exactly_down(1439)} {
    margin-top: 32px;
  }

  ${media_breakpoint_down('lg')} {
    top: 115px;
  }

  ${media_breakpoint_down('md')} {
    top: 75px;
  }

  ${media_breakpoint_exactly_down(640)} {
    top: 125px;
  }
`;
