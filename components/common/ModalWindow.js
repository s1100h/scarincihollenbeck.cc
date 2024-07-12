import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import {
  ChildrenBox,
  ModalCloser,
  ModalContainer,
  ModalContent,
} from '../../styles/ModalWindow.style';
import { FormsContext } from '../../contexts/FormsContext';

const ModalWindow = ({ children, isOpen, setOpenModal }) => {
  const { handleCheckDisclaimer, isCheckedDisclaimer } = useContext(FormsContext);

  const handleCloseModal = () => {
    setOpenModal(false);
    handleCheckDisclaimer('');
  };

  const autoStopPropagation = (event) => event.stopPropagation();

  return (
    <ModalContainer isOpen={isOpen} onClick={handleCloseModal}>
      <ModalContent
        isOpen={isOpen}
        className={isOpen ? 'modal-open' : ''}
        onClick={autoStopPropagation}
      >
        <ModalCloser onClick={handleCloseModal} className="modal-closer" />
        <ChildrenBox>{children}</ChildrenBox>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalWindow;
