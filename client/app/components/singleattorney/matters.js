import React, { useState, useContext } from 'react';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { createMarkup } from '../../utils/helpers';

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
        <FontAwesomeIcon icon={faMinus} className="text-white float-right mw-18" />
      ) : (
        <FontAwesomeIcon icon={faPlus} className="text-white float-right mw-18" />

      )}
    </button>
  );
}

export default function Matters(props) {
  const [repOpen, setRepOpen] = useState(false);
  const {
    content,
    title,
    tabTitle,
  } = props;

  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <h4 className="bg-light-gray">{title}</h4>
      {(content.length > 0) ? (
        <Accordion defaultActiveKey="primary">
          {content.map((m, i) => (
            <div key={m.title} className="mb-3" id={i}>
              <HeaderToggle eventKey={(i === 0) ? 'primary': i}>
                <h5 className="mb-0 pb-0 float-left">{m.title}</h5>
              </HeaderToggle>
              <Accordion.Collapse eventKey={(i === 0) ? 'primary': i}>
                <div className="off-white matters px-2 py-4" dangerouslySetInnerHTML={createMarkup(m.content)} />
              </Accordion.Collapse>
            </div>
          ))}
        </Accordion>
      ) : <div className="off-white matters px-2 py-4" dangerouslySetInnerHTML={createMarkup(content[0].content)} />}
    </Tab.Pane>

  );
}
