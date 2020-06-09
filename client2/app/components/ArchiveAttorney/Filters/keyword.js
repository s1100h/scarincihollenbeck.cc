import Form from 'react-bootstrap/Form';

export default function Keyword(props) {
  const { userInput, handleChange } = props;

  return (
    <Form inline className="filter w-40">
      <Form.Control type="text" className="w-100" placeholder="Search by keyword..." onChange={handleChange} />
    </Form>
  );
}