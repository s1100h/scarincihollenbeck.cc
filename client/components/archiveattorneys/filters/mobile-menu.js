import Form from 'react-bootstrap/Form';

export default function ArchiveAttorneyFitlersMobileMenu({
  content, onMobileSelect, title, name,
}) {
  return (
    <Form onChange={onMobileSelect} className="my-2">
      <Form.Group controlId="desingationForm">
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
          {content.map((p) => (
            <option
              key={p.title}
              value={p.title}
              name="practices"
              className="mobile-option"
            >
              {p.title}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
