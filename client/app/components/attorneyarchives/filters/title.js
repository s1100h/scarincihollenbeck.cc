import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';

export default function Title(props) {
  const { designation, onSelect } = props;

  return (
    <NavDropdown
      title={(
        <>
          Filter by title
          <FontAwesomeIcon icon={faCaretDown} className="ml-5 icon-w8px-h20px" />
        </>
)}
      id="basic-nav-dropdown"
      className="bg-white rounded p-sm-3 p-md-0"
    >
      {designation.map((desig) => (
        <NavDropdown.Item key={desig.id} type="button" name="designation" className="btn btn-link w-100" onClick={(e) => onSelect(e, desig.title)}>
          {desig.title}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}
