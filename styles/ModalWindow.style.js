import styled from 'styled-components'
import { globalColor } from './global_styles/Global.styles'

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${globalColor.trasparents.modal};
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? 1055 : -1)};
  top: 0;
  left: 0;
  pointer-events: all;
  transition: 0.5s opacity;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  padding: 20px;
  border-radius: 0.5rem;
  background-color: ${globalColor.white};
  pointer-events: all;
  transition: 0.8s;
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};

  .btn-light {
    margin-left: auto;
    margin-right: 0;
  }
`

export const ChildrenBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
