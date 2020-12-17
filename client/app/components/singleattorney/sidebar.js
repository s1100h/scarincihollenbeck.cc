import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { createMarkup, addRandomKey } from '../../utils/helpers';

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
      <Accordion defaultActiveKey={2}>
        <div key={title} className="mb-3">
          <SideBarHeaderToggle eventKey={itemKey}>
            <div className="mb-0 pb-0 float-left text-white">{title}</div>
          </SideBarHeaderToggle>
          <Accordion.Collapse eventKey={itemKey}>
            <div className="off-white">
              <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
                {content.map((item) => (Object.keys(item).length > 0) && (
                  <li key={addRandomKey('bio-info')} className="lh-25px mb-2">
                    {(item.link) ? (
                      <a href={item.link} className="proxima-bold text-capitalize">{item.title}</a>
                    ) : (
                      <span className="proxima-bold text-capitalize nested-list-items">{item.title}</span>
                    )}
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
