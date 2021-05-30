import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from 'styles/Tabs.module.css';

export default function AttorneyBioLinks({ links, slug, mobileLinks }) {
  const router = useRouter();
  const activeKey = !router.asPath.includes('content') ? `${router.asPath}/content/biography` : router.asPath;

  return (
    <>
      <div className="d-none d-md-block">
        <Nav justify defaultActiveKey={activeKey} className={styles.tabContainer}>
          {links.main.map((l) => (
            <Nav.Item
              key={l.label}
              className={(activeKey === `/attorney/${slug}${l.link}`) ? styles.tabActive : styles.tab}
            >
              <Link scroll={false} href={`/attorney/${slug}${l.link}`}>
                <a className="nav-link">{l.label}</a>
              </Link>
            </Nav.Item>
          ))}
          <Dropdown>
            <Dropdown.Toggle className={`${styles.tab} ${styles.tabsBtn}`} id="nav-dropdown">
              More +
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {links.more.map((m) => (
                <Dropdown.Item key={m.label}>
                  <Link scroll={false} href={`/attorney/${slug}${m.link}`}>
                    <a className="text-dark">
                      {m.label}
                    </a>
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

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
          <Dropdown.Menu classNmae="w-100">
            {mobileLinks.map((l) => <Dropdown.Item key={l.label} href={`/attorney/${slug}${l.link}`}>{l.label}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
