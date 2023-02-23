import Button from 'react-bootstrap/Button';
import { ChildrenBox, ModalContainer, ModalContent } from '../../styles/ModalWindow.style';

const ModalWindow = ({ children, isOpen, setOpenModal }) => {
  const handleToggleModal = () => {
    setOpenModal(false);
  };

  const autoStopPropagation = (event) => event.stopPropagation();

  return (
    <ModalContainer isOpen={isOpen} onClick={handleToggleModal}>
      <ModalContent isOpen={isOpen} onClick={autoStopPropagation}>
        <Button variant="light" onClick={() => setOpenModal(false)}>
          <strong>╳</strong>
        </Button>
        <ChildrenBox>{children}</ChildrenBox>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalWindow;
