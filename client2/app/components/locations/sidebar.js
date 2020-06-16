import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faFax } from '@fortawesome/free-solid-svg-icons/faFax';
import TrendingStories from '../../components/trending-stories';
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


export default function SideBar(props) {
  const {
    offices,   
    posts,
    title,   
  } = props;

  const officeList = sortByKey(offices, 'title');
  const currentEventKey = useContext(AccordionContext);
  console.log(offices);
  return (
    <div id="location-sidebar">
      <Accordion defaultActiveKey={0}>  
        {offices.map((office, i) => (
          <div key={office.title} className="mb-3">
            <HeaderToggle eventKey={i}>
              <h5 className="mb-0 pb-0 float-left text-white">{office.title}</h5>
            </HeaderToggle>
            <Accordion.Collapse eventKey={i}>
            <div className="off-white p-3">
              <ul className="no-dots ml-0">
                {office.address.map((a) => <li key={a} className="mb--10">{a}</li>)}
              </ul>
              <p className="mb-0">
                <FontAwesomeIcon icon={faPhone} className="mw-18"/>
                <span className="proxima-regular">{`  ${office.phone}`}</span>
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faFax} className="mw-18"/>
                <span className="proxima-regular">{`  ${office.fax}`}</span>
              </p>
              <Link href="/location/[slug]" as={office.slug}>
                <a>
                  <p className="mb-0 pb-0 mt-4 red-title proxima-bold">{office.title} Details &gt;&gt;</p>
                </a>
              </Link>
              <Button variant="link" className="red-title proxima-bold btn bg-transparent pt-0 mt-0 my-0 py-0" onClick={() => console.log('this is the location btn')}>
                Directions to
                {' '}
                {office.title}
                {' '}
                &gt;&gt;
              </Button>
            </div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
      <TrendingStories title={`News from ${title}`} content={posts} />
    </div>
  );
}