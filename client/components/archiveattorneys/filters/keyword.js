import Form from 'react-bootstrap/Form';

export default function Keyword({ handleChange }) {
  return (
    <Form inline>
      <Form.Control type="text" placeholder="Search by keyword..." onChange={handleChange} />
    </Form>
  );
}
