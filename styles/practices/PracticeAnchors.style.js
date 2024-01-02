import styled, { keyframes } from "styled-components";
import { media_breakpoint_down, media_breakpoint_exactly_down } from "styles/mediaBreakpoints.style";

const fade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PracticeAnchorsHolder = styled.div`
  margin-top: 40px;
  position: relative;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;

  &.fixed {
    width: 100%;
    position: fixed;
    top: 130px;
    left: 0;
    z-index: 10;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease;

    ${media_breakpoint_down("md")} {
      top: 70px;
    }
  }

  ${media_breakpoint_exactly_down(1439)} {
    margin-top: 32px;
  }
`;

export const PracticeAnchorEmpty = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  margin-top: 40px;
  height: ${({ height }) => `${height}px`};

  ${media_breakpoint_exactly_down(1439)} {
    margin-top: 32px;
  }
`;