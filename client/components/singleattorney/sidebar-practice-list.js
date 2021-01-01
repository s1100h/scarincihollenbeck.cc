import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import styles from 'styles/SidebarTitle.module.css';
import SideBarHeaderToggle from 'components/sidebar-header-toggle';

export default function SingleAttorneySidebarPracticeList({
  content,
  itemKey,
}) {
  return (
    <>
      <Accordion defaultActiveKey={2}>
        <div key="Related Practices" className="mb-3">
          <SideBarHeaderToggle eventKey={itemKey}>
            <>Related Practices</>
          </SideBarHeaderToggle>
          <Accordion.Collapse eventKey={itemKey}>
            <div className="off-white">
              <ul className="px-4 py-2">
                {content.map((c) => (
                  <li key={c.title} className="mb-2">
                    <Link href={c.link}>
                      <a className={`${styles.lh22px} text-dark`}>
                        <strong>{c.title}</strong>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </>
  );
}
