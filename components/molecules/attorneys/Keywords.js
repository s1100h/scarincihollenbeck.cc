import Form from 'react-bootstrap/Form';

const Keywords = ({ handleChange, userInput }) => (
  <Form inline="true">
    <Form.Control
      value={userInput}
      type="text"
      placeholder="Search by keyword..."
      onChange={handleChange}
      className="w-100 mb-2"
    />
  </Form>
);

export default Keywords;
