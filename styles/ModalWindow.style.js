import styled from 'styled-components';
import { globalColor, globalTransition } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${globalColor.transparentBlack.modal};
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? 1055 : -1)};
  top: 0;
  left: 0;
  pointer-events: all;
  transition: 0.5s opacity, scale;
  scale: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${globalColor.white};
  pointer-events: all;
  transition: 0.8s;
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
  overflow: auto;
  max-height: calc(100dvh - 50px);
`;

export const ModalCloser = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  background: transparent;
  transition: ${globalTransition.default};
  color: ${globalColor.blue.darkBlue};

  ${media_breakpoint_down('md')} {
    width: 36px;
    height: 36px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: scale(1, 1);
    margin-left: -12.5px;
    background-color: currentColor;
    border-radius: 2px;
    height: 3px;
    width: 24px;
    transition: all 0.15s linear;
    transform: translateY(-50%);
  }

  &:before {
    top: 50%;
    transform: rotate(45deg);
  }

  &:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  &:hover {
    transform: rotate(90deg);
  }
`;

export const ChildrenBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 5px;
  margin: 0 -5px;
`;
