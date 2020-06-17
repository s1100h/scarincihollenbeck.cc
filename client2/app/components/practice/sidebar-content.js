import React, { useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';


function HeaderToggle({ children, eventKey, callback }){ 
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
         <FontAwesomeIcon icon={faMinus} className="text-white float-right mw-18" />   
       ) : (
          <FontAwesomeIcon icon={faPlus} className="text-white float-right mw-18" />
          
       )}    
    </button>
  )
}


export default function SidebarContent(props) {
  const { title, content, tabKey, linkType } = props;
  console.log(title);
  console.log(tabKey);

  return (
    <>
      <Accordion defaultActiveKey={0} className="mt-4">  
        <HeaderToggle eventKey={tabKey}>
          <h5 className="mb-0 pb-0 float-left text-white">{title}</h5>
        </HeaderToggle>
        <Accordion.Collapse eventKey={tabKey}>
          <div className="off-white p-3">
            <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
              {content.map((item) => (
                <li key={item.title} className="mb--7px--lh-22">
                  <a href={item.slug} className={(item.title.length > 40) ? 'small-excerpt proxima-bold' : 'proxima-bold'}>
                    {item.title}
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