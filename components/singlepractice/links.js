import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from 'styles/Tabs.module.css';
import { urlify } from 'utils/helpers';

export default function PracticeLinks({ links, practiceUrl }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const tabLinks = links.content;
  const relatedArticlesLink = urlify(practiceUrl);
  const isArticlesPage = router.asPath.includes('articles');

  function handleRelatedArticlesLink(e) {
    e.preventDefault()
    setLoading(true);

    router.push({
      pathname: '/library',
      query: { 
        term: relatedArticlesLink
      },
    });
  };

  useEffect(() => {
    router.prefetch(`/library?term=${relatedArticlesLink}`);
  }, []);

  return (
    <Nav
      defaultActiveKey={urlify(tabLinks[0].title)}
      role="tablist"
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
          <Link href={isArticlesPage ? `/practice/${relatedArticlesLink}` : `/practice/${relatedArticlesLink}/articles`}>
            <a
              className={`${styles.tab} ${styles.practice} text-white`}
              style={{ display: 'block', padding: '.5rem 1rem', border: 0 }}
            >
               Related Updates
            </a>
          </Link>         
      </Nav.Item>
    </Nav>
  );
}
