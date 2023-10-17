import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import {
  ChildrenBox,
  ModalContainer,
  ModalContent,
} from '../../styles/ModalWindow.style';
import { FormsContext } from '../../contexts/FormsContext';

const ModalWindow = ({ children, isOpen, setOpenModal }) => {
  const { handleCheckDisclaimer, isCheckedDisclaimer } = useContext(FormsContext);

  const handleCloseModal = () => {
    setOpenModal(false);
    return isCheckedDisclaimer && handleCheckDisclaimer(false);
  };

  const autoStopPropagation = (event) => event.stopPropagation();

  return (
    <ModalContainer isOpen={isOpen} onClick={handleCloseModal}>
      <ModalContent isOpen={isOpen} onClick={autoStopPropagation}>
        <Button variant="light" onClick={handleCloseModal}>
          <strong>╳</strong>
        </Button>
        <ChildrenBox>{children}</ChildrenBox>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalWindow;
