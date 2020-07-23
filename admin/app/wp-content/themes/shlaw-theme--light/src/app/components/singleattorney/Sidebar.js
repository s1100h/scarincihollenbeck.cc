import React, { useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { createMarkup, addRandomKey, urlify } from '../../utils/helpers';

function SideBarHeaderToggle({ children, eventKey, callback }) {
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

export default function SidebarContent({ title, content, itemKey }) {

  return (
    <>
      <Accordion defaultActiveKey={0}>
        <div key={title} className="mb-3">
          <SideBarHeaderToggle eventKey={itemKey}>
            <h5 className="mb-0 pb-0 float-left">{title}</h5>
          </SideBarHeaderToggle>
          <Accordion.Collapse eventKey={itemKey}>
            <div className="off-white">
              <ul className="p-1 pt-3 sidebar-content-page">
                {content.map((item) => (Object.keys(item).length > 0) && (
                  <li key={addRandomKey('bio-info')} className="mb--7px--lh-22--ft-14px">
                    {(item.link) ? <a href={item.link} className="proxima-bold">{item.title}</a> : <strong>{item.title}</strong>}
                    {(item.content) && (typeof item.content === 'object') ? item.content.map((i) => (
                      <div key={addRandomKey('sub-bio-info')}>
                        <span className="proxima-bold">{i.title}</span>
                        <div dangerouslySetInnerHTML={createMarkup(i.content)} />
                      </div>
                    )) : <div dangerouslySetInnerHTML={createMarkup(item.content)} /> }
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