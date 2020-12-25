import React, { useContext } from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import styles from 'styles/SidebarTitle.module.css';
import SideBarHeaderToggle from 'components/sidebar-header-toggle';

export default function PracticeSidebar({ title, content, tabKey }) {
  return (
    <>
      <Accordion defaultActiveKey={2}>
        <SideBarHeaderToggle eventKey={tabKey}>{title}</SideBarHeaderToggle>
        <Accordion.Collapse eventKey={tabKey}>
          <div className="off-white">
            <ul className="px-4 py-2">
              {content.map((c) => (
                <li key={c.id} className="mb-2">
                  <Link href={c.uri}>
                    <a className={`${styles.lh22px} text-dark`}>
                      <strong>{c.title}</strong>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
}
