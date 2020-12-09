import React, { useContext } from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { createMarkup, addRandomKey } from '../../utils/helpers';
import styles from 'styles/SidebarTitle.module.css'

function SideBarHeaderToggle({ children, eventKey, callback }) {
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
      {(isCurrentEventKey) ? (
        <FontAwesomeIcon icon={faMinus} className="text-white float-right icon-w8px-h20px" />
      ) : (
        <FontAwesomeIcon icon={faPlus} className="text-white float-right icon-w8px-h20px" />

      )}
    </Button>
  );
}

export default function SidebarInformationList({ content, itemKey }) {
  const { affiliations, barAdmissions, education, additionalInformation } = content
  console.log({ affiliations, barAdmissions, education, additionalInformation })
  return (
    <>
      <Accordion defaultActiveKey={2}>
        <div key="Related Practices" className="mb-3">
          <SideBarHeaderToggle eventKey={itemKey}>
            <>
              Additional Information
            </>
          </SideBarHeaderToggle>
          <Accordion.Collapse eventKey={itemKey}>
            <div className="off-white">
              <ul className="px-4 py-2">
                {(additionalInformation) && <>Additional information</>}
                {(affiliations) && <>affiliations</>}
                {(barAdmissions) && <>barAdmissions</>}
                {(education) && <>education</>}
                {(additionalInformation) && <>additionalInformation</>}               
              </ul>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </>
  );
}
