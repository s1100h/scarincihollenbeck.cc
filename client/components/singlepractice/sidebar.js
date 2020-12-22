import React, { useContext } from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import styles from 'styles/SidebarTitle.module.css';

function SideBarHeaderToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Button
      variant="link"
      className={`${styles.header} w-100 p-2 text-left text-white`}
      onClick={decoratedOnClick}
    >
      {children}
      {isCurrentEventKey ? (
        <FontAwesomeIcon
          icon={faMinus}
          className="text-white float-right icon-w8px-h20px"
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white float-right icon-w8px-h20px"
        />
      )}
    </Button>
  );
}

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
