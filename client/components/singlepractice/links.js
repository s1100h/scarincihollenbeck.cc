import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import styles from 'styles/Tabs.module.css';
import { urlify } from 'utils/helpers';

export default function PracticeLinks({ links, practiceUrl }) {
  const tabLinks = links.content;

  return (
    <Nav
      defaultActiveKey={urlify(tabLinks[0].title)}
      as="ul"
      className={styles.tabContainer}
    >
      {tabLinks.map((tab) => (
        <Nav.Item as="li" key={tab.title}>
          <Nav.Link
            eventKey={urlify(tab.title)}
            className={`${styles.tab} ${styles.practice} text-white`}
          >
            {tab.title}
          </Nav.Link>
        </Nav.Item>
      ))}
      <Nav.Item as="li">
        <Link href={`/library?term=${urlify(practiceUrl)}`}>
          <a
            className={`${styles.tab} ${styles.practice} text-white`}
            style={{ display: 'block', padding: '.5rem 1rem' }}
          >
            Related Updates
          </a>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
