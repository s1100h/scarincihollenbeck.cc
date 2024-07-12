import styled from "styled-components";
import { globalColor, globalTransition, rem } from "./global_styles/Global.styles";

export const CircledProgressBarWrapper = styled.button`
  position: relative;

  @media (hover: hover) {
    &:hover {
      &::after {
        opacity: 1;
      }

      .time {
        opacity: 0;
      }
    }
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${({ $isPaused }) => $isPaused ? 'url(/icons/play-icon.svg)' : 'url(/icons/pause-icon.svg)'};
    background-repeat: no-repeat;
    background-position: center;
    width: 12px;
    height: 12px;
    opacity: ${({ $isPaused }) => $isPaused ? '1' : '0'};
    transition: ${globalTransition.default};
  }

  > .time {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${globalColor.white};
    font-weight: 600;
    font-size: ${rem(14)};
    line-height: 1.43;
    opacity: ${({ $isPaused }) => $isPaused ? '0' : '1'};
    transition: ${globalTransition.default};
  }
`;