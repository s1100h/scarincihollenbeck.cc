import React, { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import styles from 'styles/SidebarTitle.module.css';

export default function SideBarHeaderToggle({ children, eventKey, callback }) {
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
        <strong className={styles.toggleIconOpen}>+</strong>
      ) : (
        <strong className={styles.toggleIconClose}>-</strong>
      )}
    </Button>
  );
}
