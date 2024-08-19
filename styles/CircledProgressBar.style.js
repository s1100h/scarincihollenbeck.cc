import styled from 'styled-components';
import {
  globalColor,
  globalTransition,
  rem,
} from './global_styles/Global.styles';

export const CircledProgressBarWrapper = styled.button`
  position: relative;

  @media (hover: hover) {
    &:hover {
      & .circle-timer-icon {
        opacity: 1;
      }

      .time {
        opacity: 0;
      }
    }
  }

  > .time {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${globalColor.white};
    font-weight: 600;
    font-size: ${rem(14)};
    opacity: ${({ $isPaused }) => ($isPaused ? '0' : '1')};
    transition: ${globalTransition.default};
  }
`;

export const CircledProgressBarIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${globalTransition.default};
  opacity: ${({ $isPaused }) => ($isPaused ? '1' : '0')};
`;
