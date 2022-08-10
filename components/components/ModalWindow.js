import React, { useEffect } from 'react';
import {
  Button, Modal, ModalBody, ModalFooter,
} from 'reactstrap';
import Cookies from 'universal-cookie';

function ModalWindow() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const cookies = new Cookies();
  const handleClick = (event) => {
    setModalOpen(!modalOpen);
    cookies.set('ModalWindow', 'yes', { maxAge: 86400 });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(!modalOpen);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (cookies.get('ModalWindow') !== 'yes') {
    return (
      <>
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
          <div className="modal-header modal-header_my">
            <h5 className="modal-title_my" id="exampleModalLabel">
              Our Office is Moving!
            </h5>
            <p>Effective September 6, 2022, our Lyndhurst office is moving to:</p>
            <a
              className="modal-link"
              href="https://scarincihollenbeck.com/firm-news/scarinci-moving-to-overlook-corporate-center"
            >
              150 Clove Road 9th Floor Little Falls, NJ, 07424
            </a>
            <p>
              Please be advised that there will be no disruption of service. Scarinci Hollenbeck’s
              contact information, such as email addresses and phone numbers, will remain the same.
              For any questions regarding the move, contact the attorney with whom you work, or call
              us at 201-896-4100.
              {' '}
            </p>
            <button
              aria-label="Close"
              className=" close close_modal"
              type="button"
              onClick={handleClick}
            >
              <span aria-hidden>×</span>
            </button>
          </div>
          <ModalFooter>
            <Button className="btn-red" color="secondary" type="button" onClick={handleClick}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
  return null;
}

export default ModalWindow;
