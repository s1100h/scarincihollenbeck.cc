import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { locationUrl, sortByKey } from '../../utils/helpers';


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
  const {
    offices,   
    posts,
    title,   
  } = props;

  const officeList = sortByKey(offices, 'title');
  const currentEventKey = useContext(AccordionContext);

  return (
    <div id="practice-sidebar">
      <Accordion defaultActiveKey={0}>
        <HeaderToggle eventKey={i}>
          <h5 className="mb-0 pb-0 float-left text-white">{office.title}</h5>
        </HeaderToggle>
        <Accordion.Collapse eventKey={0}>  
            Stuff...
        </Accordion.Collapse>
      </Accordion>
      <TrendingStories title={`News from ${title}`} content={posts} />
    </div>
  );
}