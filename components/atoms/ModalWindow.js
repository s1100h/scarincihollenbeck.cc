import React, { useEffect, useState } from 'react';
import { Modal, ModalFooter } from 'reactstrap';
import { RedButtonBootstrap } from 'styles/Buttons.style';
import Cookies from 'universal-cookie';

const ModalWindow = () => {
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
              Our Lyndhurst Office Moved!
            </h5>
            <p>Effective September 6, 2022, our new address is:</p>
            <a
              className="modal-link"
              href="https://scarincihollenbeck.com/firm-news/scarinci-moving-to-overlook-corporate-center"
            >
              150 Clove Road 9th Floor Little Falls, NJ, 07424
            </a>
            <p>
              Scarinci Hollenbeck`s contact information, such as email addresses and phone numbers,
              remains the same. For any questions regarding the move, contact the attorney with whom
              you work, or call us at 201-896-4100.
            </p>
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
