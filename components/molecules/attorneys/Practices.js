import dynamic from 'next/dynamic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from 'styles/AttorneyArchives.module.css';
import megaMenuStyles from 'styles/MegaMenu.module.css';

const PracticeListItem = dynamic(() => import('components/atoms/PracticeListItem'));
const Practices = ({ practices, onSelect }) => {
  /**
   *
   * Filter each item into a column
   *
   * */

  // bankruptcy, intel, public
  const bce = practices.filter((b) => (b.ID === 28345 || b.ID === 29587 || b.ID === 28276 ? b : ''));

  // commercial, labor, tax
  const cl = practices.filter((b) => (b.ID === 29624 || b.ID === 28271 || b.ID === 29588 ? b : ''));

  // corporate
  const li = practices.filter((b) => b.ID === 28270);

  // env, litigation
  const pt = practices.filter((b) => (b.ID === 28273 || b.ID === 28274 ? b : ''));

  return (
    <DropdownButton
      variant="link"
      title="Filter by practice"
      className={`${styles.filter} ${megaMenuStyles.menu} my-3 my-md-0`}
    >
      <Container className="mt--1 p-0" fluid>
        <Row className="rounded-0 m-0">
          <Col sm={12} lg={3} className="mt-md-3">
            {bce.map((ft) => (
              <PracticeListItem
                key={ft.ID}
                title={ft.title}
                onSelect={onSelect}
                pChildren={ft.children}
              />
            ))}
          </Col>
          <Col sm={12} lg={3} className="mt-md-3">
            {cl.map((ft) => (
              <PracticeListItem
                key={ft.ID}
                title={ft.title}
                onSelect={onSelect}
                pChildren={ft.children}
              />
            ))}
          </Col>
          <Col sm={12} lg={3} className="mt-md-3">
            {li.map((ft) => (
              <PracticeListItem
                key={ft.ID}
                title={ft.title}
                onSelect={onSelect}
                pChildren={ft.children}
              />
            ))}
          </Col>
          <Col sm={12} md={3} className="mt-md-3">
            {pt.map((ft) => (
              <PracticeListItem
                key={ft.ID}
                title={ft.title}
                onSelect={onSelect}
                pChildren={ft.children}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </DropdownButton>
  );
};
export default Practices;
