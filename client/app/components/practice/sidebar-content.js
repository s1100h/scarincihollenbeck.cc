import React, { useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';


function HeaderToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      variant="link"
      className="sidebar-title w-100 p-2 text-left"

      onClick={decoratedOnClick}
    >
      {children}
      {(isCurrentEventKey) ? (
        <FontAwesomeIcon icon={faMinus} className="text-white float-right icon-w8px-h20px" />
      ) : (
        <FontAwesomeIcon icon={faPlus} className="text-white float-right icon-w8px-h20px" />

      )}
    </button>
  );
}


export default function SidebarContent(props) {
  const {
    title, content, tabKey, linkType,
  } = props;

  return (
    <>
      <Accordion defaultActiveKey={0} className="mt-4">
        <HeaderToggle eventKey={tabKey}>
          <div className="mb-0 pb-0 float-left text-white">{title}</div>
        </HeaderToggle>
        <Accordion.Collapse eventKey={tabKey}>
          <div className="off-white">
            <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
              {content.map((item) => (
                <li key={item.title}>
                  <a href={item.slug} className="proxima-bold text-capitalize">
                    {item.title.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
}
