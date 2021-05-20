import { useRouter } from 'next/router'
import Nav from 'react-bootstrap/Nav';
import styles from 'styles/Tabs.module.css';

export default function AttorneyBioLinks({ links, slug }) {
  const router = useRouter();
  const activeKey = !router.asPath.includes('content') ? `${router.asPath}/content/biography` : router.asPath;

  return (
    <Nav justify variant="tabs" defaultActiveKey={activeKey} style={{ position: 'relative', top: '-4.1em' }}>
      {links.map((l) => (
        <Nav.Item key={l.label} style={{ width: '100px'}} className={styles.tab}>
          <Nav.Link href={`/attorney/${slug}${l.link}`}>{l.label}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  // <style jsx>
  //   {`
  //   a.tab-link {
  //     width: 100%;
  //   }

  //   @media (min-width:768px) {
  //     a.tab-link {
  //       width: 210px;
  //     }
  //   }

  //   @media (min-width:1200px) {
  //     a.tab-link {
  //       width: 220px;
  //     }
  //   }

  // `}
  // </style>
  );
}
