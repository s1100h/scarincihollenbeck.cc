import Accordion from 'react-bootstrap/Accordion';
import { createMarkup, addRandomKey } from 'utils/helpers';
import SideBarHeaderToggle from 'components/sidebar-header-toggle';

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
