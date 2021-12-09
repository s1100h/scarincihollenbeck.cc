import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from 'styles/AttorneyArchives.module.css';

const Locations = ({ locations, onSelect }) => (
  <DropdownButton
    variant="link"
    title="Filter by location"
    className={`${styles.filter} my-3 my-md-0`}
  >
    {locations
      && locations.map((location) => (
        <Dropdown.Item
          key={location.ID}
          value={location.title}
          name="location"
          className="font-weight-bold"
          onClick={(e) => onSelect(e, location.title)}
        >
          {location.title}
        </Dropdown.Item>
      ))}
  </DropdownButton>
);

export default Locations;
