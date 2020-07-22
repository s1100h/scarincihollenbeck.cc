import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function ContactForm() {
  return (
    <>
      <Form>
        <Form.Row>
          <Form.Group as={Col} sm={12} md="6" controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm={12} md="6" controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={12} md="6" controlId="validationCustom03">
            <Form.Control
              required
              type="email"
              placeholder="Email"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm={12} md="6" controlId="validationCustom04">
            <Form.Control
              required
              type="phone"
              placeholder="phone"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={12} controlId="validationCustom05">
            <Form.Control
              required
              type="text"
              placeholder="Subject"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm={12} controlId="validationCustom06">
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Message"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>
            * The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.
          </Form.Label>
          <Form.Check
            required
            label="I have read the disclaimer"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button variant="danger" className="ml-2 w-25 mt-2" type="submit">Submit form</Button>
      </Form>
    </>
  );
}