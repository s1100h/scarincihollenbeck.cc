import Col from 'react-bootstrap/Col';
import styles from 'styles/Searchbar.module.css';

export default function SearchBar() {
  return (
    <Col sm={12} className={`${styles.container} py-3`}>
      <div>
        Title
      </div>
      <div>
        Search bar
      </div>
      <div>
        Social Media links
      </div>
    </Col>
  );
}
