import Nav from 'react-bootstrap/Nav';
import styles from 'styles/Tabs.module.css';
import { urlify } from 'utils/helpers';

export default function PracticeLinks({ links, practiceUrl }) {
  const tabLinks = links.content;
  console.log(practiceUrl);

  return (
    // <Nav id="practice-navigation" className={styles.tabContainer}>
    //   {links.content.map((item) => (
    //     <Nav.Link
    //       eventKey={urlify(item.title)}
    //       className={`${styles.tab} ${styles.practice} text-white`}
    //       key={item.title}
    //     >
    //       {item.title}
    //     </Nav.Link>
    //   ))}
    //    <Nav.Link

    //   >
    //     Related Updates
    //   </Nav.Link>
    // </Nav>
    <Nav defaultActiveKey="/home" as="ul" className={styles.tabContainer}>
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          href={`/library?term=${urlify(practiceUrl)}`}
          className={`${styles.tab} ${styles.practice} text-white`}
        >
          Related Updates
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
