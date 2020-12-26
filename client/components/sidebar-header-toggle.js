import React, { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
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
