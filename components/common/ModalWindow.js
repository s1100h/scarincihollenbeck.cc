import {
  ChildrenBox,
  ModalCloser,
  ModalContainer,
  ModalContent,
} from '../../styles/ModalWindow.style';

const ModalWindow = ({ children, isOpen, setOpenModal }) => {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const autoStopPropagation = (event) => event.stopPropagation();

  return (
    <ModalContainer isOpen={isOpen} onClick={handleCloseModal}>
      <ModalContent
        isOpen={isOpen}
        className={isOpen ? 'modal-open' : ''}
        onClick={autoStopPropagation}
      >
        <ModalCloser
          aria-label="Close modal"
          onClick={handleCloseModal}
          className="modal-closer"
        />
        <ChildrenBox>{children}</ChildrenBox>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalWindow;
