import { useDispatch } from 'react-redux';
import {
  ChildrenBox,
  ModalCloser,
  ModalContainer,
  ModalContent,
} from '../../styles/ModalWindow.style';
import { handleCheckDisclaimer } from '../../redux/slices/forms.slice';

const ModalWindow = ({ children, isOpen, setOpenModal }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setOpenModal(false);
    dispatch(handleCheckDisclaimer(''));
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
