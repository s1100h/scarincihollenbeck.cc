import Form from 'react-bootstrap/Form';

const Keywords = ({ handleChange }) => (
  <Form inline>
    <Form.Control
      type="text"
      placeholder="Search by keyword..."
      onChange={handleChange}
      className="w-100 mb-2"
    />
  </Form>
);

export default Keywords;
