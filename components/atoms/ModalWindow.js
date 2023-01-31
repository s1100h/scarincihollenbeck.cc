import React, { useEffect, useState } from 'react';
import { Modal, ModalFooter } from 'reactstrap';
import { RedButtonBootstrap } from 'styles/Buttons.style';
import Cookies from 'universal-cookie';
import Link from 'next/link';

const ModalWindow = ({
  title, miniDescription, link, linkText, description,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isCookie, setIsCookies] = useState(false);
  const cookies = new Cookies();

  const handleClick = () => {
    setModalOpen(!modalOpen);
    cookies.set('ModalWindow', 'yes', { maxAge: 86400 });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(!modalOpen);
    }, 1000);

    if (cookies.get('ModalWindow') !== 'yes' && !isCookie) {
      setIsCookies(true);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isCookie && (
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
          <div className="modal-header modal-header_my">
            <h5 className="modal-title_my" id="exampleModalLabel">
              {title}
            </h5>
            <p>{miniDescription}</p>
            <Link href={link}>
              <a className="modal-link">{linkText}</a>
            </Link>
            <p>{description}</p>
          </div>
          <ModalFooter>
            <RedButtonBootstrap color="secondary" type="button" onClick={handleClick}>
              Close
            </RedButtonBootstrap>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export default ModalWindow;
