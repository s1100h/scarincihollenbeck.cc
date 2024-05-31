import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';

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

  .btn-light {
    margin-left: auto;
    margin-right: 0;
    background-color: ${globalColor.white};
    font-family: var(--font-poppins), sans-serif;
    font-weight: bold;
    :hover {
      border: 1px solid ${globalColor.white};
    }
  }
`;

export const ChildrenBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 5px;
  margin: 0 -5px;
`;
