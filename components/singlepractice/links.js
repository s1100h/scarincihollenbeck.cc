import { useRouter } from 'next/router';
import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from 'styles/Tabs.module.css';
import { urlify } from 'utils/helpers';

export default function PracticeLinks({ links, practiceUrl }) {
  const router = useRouter();
  const tabLinks = links.content;
  const relatedArticlesLink = urlify(practiceUrl);
  const isArticlesPage = router.asPath.includes('articles');

  return (
    <>
      <div className="d-none d-md-block">
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
      </div>
      <div className=" my-3 d-block d-md-none mobile-menu">
        <Dropdown size="lg" className={styles.mobileTabContainer}>
          <Dropdown.Toggle
            variant="danger"
            id="dropdown-basic"
            className="px-5"
          >
            <strong>Menu Options</strong>
            <style jsx>{'strong{ font-size: 1.25rem}'}</style>
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {tabLinks.map((t) => (
              <Dropdown.Item key={t.title} eventKey={urlify(t.title)}>
                {t.title}
              </Dropdown.Item>
            ))}
            <Dropdown.Item
              className="text-dark"
              href={isArticlesPage ? `/practice/${relatedArticlesLink}` : `/practice/${relatedArticlesLink}/articles`}
            >
              Related Updates
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>



    </>
  );
}

{/* <div className="d-none d-md-block">
<Nav
  justify
  defaultActiveKey={activeKey}
  className={styles.tabContainer}
> */}
{/* {links.main.map((l) => (
    <Nav.Item
      key={l.label}
      className={
        activeKey === `/attorney/${slug}${l.link}`
          ? styles.tabActive
          : styles.tab
      }
    >
      {(l.label === 'News Press Releases' || l.label === 'Blogs') ? (
        <a href={`/attorney/${slug}${l.link}`} className="nav-link">
          {(l.label === 'News Press Releases') ? 'News & Press Releases' : l.label}
        </a>
      ) : (
        <Link scroll={false} href={`/attorney/${slug}${l.link}`}>
          <a className="nav-link">{l.label}</a>
        </Link>
      )}

    </Nav.Item>
  ))}
  {links.more.length > 0 && (
    <Dropdown>
      <Dropdown.Toggle
        className={`${styles.tab} ${styles.tabsBtn}`}
        id="nav-dropdown"
      >
        More +
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{ fontSize: '1rem', backgroundColor: '#e9e9e9' }}
      >
        {links.more.map((m) => (m.label === 'News Press Releases' || m.label === 'Blogs') ? (
          <a key={m.label} href={`/attorney/${slug}${m.link}`} className="text-dark dropdown-item" role="button">
          {(m.label === 'News Press Releases') ? 'News & Press Releases' : m.label}
          </a>
        ) :(
          <Link
          key={m.label}
          scroll={false}
          href={`/attorney/${slug}${m.link}`}
        >
          <a className="text-dark dropdown-item" role="button">
          {m.label}
          </a>
        </Link>
        ))}



      </Dropdown.Menu>
    </Dropdown>
  )}
</Nav>
</div>
<div className="d-block d-md-none mobile-menu">
<Dropdown size="lg" className={styles.mobileTabContainer}>
  <Dropdown.Toggle
    variant="danger"
    id="dropdown-basic"
    className="px-5"
  >
    <strong>Menu Options</strong>
    <style jsx>{'strong{ font-size: 1.25rem}'}</style>
  </Dropdown.Toggle>
  <Dropdown.Menu className="w-100">
    {mobileLinks.map((l) => (
      <Dropdown.Item key={l.label} href={`/attorney/${slug}${l.link}`}>
        {(l.label === 'News Press Releases') ? 'News & Press Releases' : l.label}
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown>
</div> */}
