import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { createMarkup, addRandomKey } from 'utils/helpers';
import styles from 'styles/SidebarTitle.module.css';

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
      {isCurrentEventKey ? (
        <FontAwesomeIcon
          icon={faMinus}
          className="text-white float-right icon-w8px-h20px"
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white float-right icon-w8px-h20px"
        />
      )}
    </Button>
  );
}

export default function SingleAttorneySidebarInformationList({
  content,
  itemKey,
}) {
  const {
    affiliations,
    barAdmissions,
    education,
    additionalInformation,
  } = content;

  return (
    <>
      <Accordion defaultActiveKey={2}>
        <div key="Related Practices" className="mb-3">
          <SideBarHeaderToggle eventKey={itemKey}>
            <>Additional Information</>
          </SideBarHeaderToggle>
          <Accordion.Collapse eventKey={itemKey}>
            <div className="off-white">
              {education && (
                <div className="px-2 pt-3">
                  <strong>Education</strong>
                  <div
                    className="attorney-bio-sidebar-list"
                    dangerouslySetInnerHTML={createMarkup(education)}
                  />
                </div>
              )}
              {barAdmissions && (
                <div className="px-2">
                  <strong>Bar Admissions</strong>
                  <div
                    className="attorney-bio-sidebar-list"
                    dangerouslySetInnerHTML={createMarkup(barAdmissions)}
                  />
                </div>
              )}
              {affiliations && (
                <div className="px-2">
                  <strong>Affiliations</strong>
                  <div
                    className="attorney-bio-sidebar-list"
                    dangerouslySetInnerHTML={createMarkup(affiliations)}
                  />
                </div>
              )}
              {additionalInformation && (
                <div className="px-2 pb-1">
                  <strong> Additional Information</strong>
                  {additionalInformation.map((ad, index) => (
                    <span key={addRandomKey(index.toString())}>
                      {ad.title && (
                        <span className="d-block my-1 mx-2">
                          <strong>{ad.title}</strong>
                        </span>
                      )}
                      <div
                        className="attorney-bio-sidebar-list"
                        dangerouslySetInnerHTML={createMarkup(ad.content)}
                      />
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </>
  );
}
