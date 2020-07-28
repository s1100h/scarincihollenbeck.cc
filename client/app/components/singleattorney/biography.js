 import React, { useContext } from 'react';
import TabPane from 'react-bootstrap/TabPane';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { createMarkup } from '../../utils/helpers';

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      variant="transparent"
      className="red-title proxima-bold mb-3 read-more-btn"  
      onClick={decoratedOnClick}
    >
      {(isCurrentEventKey) ? children : <u>Read More &gt;&gt;</u>} 
    </button>
  );
}

export default function Biography({title, content}) {
  const c = content.split(/<p[^>]*>/).filter((a) => a !== '');
  const excerpt = c[0].replace('</p>', '');
  const excerptTwo = c[1];
  const full = c.slice(2, c.length).join('<p>');

  return (
   <TabPane eventKey="biography" title={title}>
     <h4 className="bg-light-gray">{title}</h4>
      <p className="bio" dangerouslySetInnerHTML={createMarkup(excerpt)} id="nav-bio-tab" />
      <p className="bio" dangerouslySetInnerHTML={createMarkup(excerptTwo)} />      
      <Accordion>
        <ContextAwareToggle eventKey="1">Read Less &gt;&gt;</ContextAwareToggle>
        <Accordion.Collapse eventKey="1">
          <div id="example-fade-text" className="bio" dangerouslySetInnerHTML={createMarkup(full)} />
        </Accordion.Collapse>
      </Accordion>
    </TabPane>
  );
}