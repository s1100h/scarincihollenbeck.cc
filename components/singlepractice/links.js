import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import styles from 'styles/Tabs.module.css';
import { urlify } from 'utils/helpers';

export default function PracticeLinks({ links, practiceUrl }) {
  const router = useRouter();
  const tabLinks = links.content;
  const relatedArticlesLink = urlify(practiceUrl);

  function handleRelatedArticlesLink(term) {
    router.push({
      pathname: '/library',
      query: { term },
    })
  }

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
        <button
          onClick={() => handleRelatedArticlesLink(relatedArticlesLink)}
          className={`${styles.tab} ${styles.practice} text-white`}
          style={{ display: 'block', padding: '.5rem 1rem', border: 0 }}
        >
          Related Updates
        </button>
      </Nav.Item>
    </Nav>
  );
}
