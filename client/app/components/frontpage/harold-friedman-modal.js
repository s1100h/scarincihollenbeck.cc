import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HaroldFriedmanModal() {
  const [preShow, setPreShow ] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(preShow) {
      setShow(true);
      setPreShow(false);
    }
  });

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        animation
        size="lg"
        aria-labelledby="passing-of-harold-friedman"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col sm={12}>
                 All the info will go here...
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
