import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from 'styles/Tabs.module.css';

export default function AttorneyBioLinks({ links, slug }) {
  const router = useRouter();
  const activeKey = !router.asPath.includes('content') ? `${router.asPath}/content/biography` : router.asPath;

  return (
    <>
      <div className="d-none d-md-block">
        <Nav justify defaultActiveKey={activeKey} className={styles.tabContainer}>
          {links.main.map((l) => (
            <Nav.Item key={l.label} className={(router.asPath === `/attorney/${slug}${l.link}`) ? styles.tabActive : styles.tab}>
              <Nav.Link href={`/attorney/${slug}${l.link}`}>{l.label}</Nav.Link>
            </Nav.Item>
          ))}
          <Dropdown>
            <Dropdown.Toggle className={`${styles.tab} ${styles.tabsBtn}`} id="nav-dropdown">
              More +
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {links.more.map((m) => <Dropdown.Item key={m.label} href={`/attorney/${slug}${m.link}`}>{m.label}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>

        </Nav>
      </div>
      <div className="d-block d-md-none">
        <Dropdown className={styles.tabContainer}>
          <Dropdown.Toggle variant="danger" id="dropdown-basic" className="w-100">
            Menu Options
          </Dropdown.Toggle>
          <Dropdown.Menu classNmae="w-100">
            {links.main.map((l) => <Dropdown.Item key={l.label} href={`/attorney/${slug}${l.link}`}>{l.label}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
