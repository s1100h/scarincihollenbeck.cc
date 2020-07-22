import React, { useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faFax } from '@fortawesome/free-solid-svg-icons/faFax';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import TrendingStories from '../trending-stories';
import {
  locationUrl, sortByKey, urlify, getDirectionsFromLocation,
} from '../../utils/helpers';


function LocationHeaderToggle({ children, eventKey, callback }) {
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
    offices,
    posts,
    title,
    startingKey,
  } = props;


  const officeList = sortByKey(offices, 'title');
  const currentEventKey = useContext(AccordionContext);

  return (
    <div id="practice-sidebar">
      {officeList.map((office) => (
        <Accordion key={office.title} defaultActiveKey={startingKey}>
          <div key={office.title} className="mb-3">
            <LocationHeaderToggle eventKey={urlify(office.title)}>
              <h5 className="mb-0 pb-0 float-left">{office.title}</h5>
            </LocationHeaderToggle>
            <Accordion.Collapse eventKey={urlify(office.title)}>
              <div className="off-white p-3">
                <ul className="no-dots ml-0">
                  {office.address.map((a) => <li key={a} className="mb--10">{a}</li>)}
                </ul>
                <p className="mb-0">
                  <FontAwesomeIcon icon={faPhone} className="icon-w8px-h20px" />
                  <span className="proxima-regular">{`  ${office.phone}`}</span>
                </p>
                <p className="mb-2">
                  <FontAwesomeIcon icon={faFax} className="icon-w8px-h20px" />
                  <span className="proxima-regular">{`  ${office.fax}`}</span>
                </p>
                <div className="m-2">
                  <a href={office.slug} className="red-title proxima-bold">
                    {`${office.title} Office Details `}
                  </a>
                  <Button variant="transparent" className="red-title proxima-bold ml--10" onClick={() => getDirectionsFromLocation(urlify(office.title))}>
                    Directions to
                    {' '}
                    {office.title}

                  </Button>
                </div>

              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      ))}
      <TrendingStories title={`News from ${title}`} content={posts} />
    </div>
  );
}