import Dropdown from 'react-bootstrap/Dropdown';
import styles from 'styles/AttorneyArchives.module.css';

const PracticeListItem = ({ title, onSelect, pChildren }) => (
  <div>
    <Dropdown.Item
      name="practices"
      variant="link"
      onClick={(e) => onSelect(e, title)}
      className={styles.practiceTitle}
    >
      {title}
    </Dropdown.Item>
    {pChildren.map((fc) => (
      <Dropdown.Item
        key={fc.ID}
        variant="link"
        name="practices"
        className={styles.childPracticeLink}
        onClick={(e) => onSelect(e, fc.title)}
      >
        {fc.title}
      </Dropdown.Item>
    ))}
  </div>
);

export default PracticeListItem;
