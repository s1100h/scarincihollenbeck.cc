import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HaroldFriedmanModal() {
  const [preShow, setPreShow] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (preShow) {
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
          <Modal.Title>{' '}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <img src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2013/10/Friedman.jpg" alt="Harold Friedman" className="img-thumbnail mx-auto d-block mb-4" width={500} height={543} />
              <Col sm={12}>
                <p className="lead">
                  Scarinci Hollenbeck is deeply saddened to report the
                  {' '}
                  <span className="proxima-bold">passing of Harold Friedman, Esq.</span>
                  {' '}
                  Mr. Friedman served as Partner to the firm since 2011. His legal career spanned nearly sixty years, twenty of which he spent practicing at his previous law firm, Stryker, Tams & Dill, LLP. Mr. Friedman practiced in a broad range of civil practice areas, having served corporate, business clients, insurance carriers and individuals in a variety of complex business transactions, litigation and personal matters. He will be greatly missed by the firm and remembered fondly for his genuine, kind nature.
                </p>

                <p className="lead proxima-bold"><em>Mr. Friedman is survived by his children, David, Dan and Doug, and their families. We extend our deepest condolences to Mr. Friedman’s family during this difficult time.</em></p>
                <p className="text-center">
                  <Link href="/passing-attorney-harold-friedman">
                    <a className="red-title lead proxima-bold">
                      Click here to find out more details
                    </a>
                  </Link>
                </p>
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
