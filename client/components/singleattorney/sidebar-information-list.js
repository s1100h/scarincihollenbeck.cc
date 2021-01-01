import Accordion from 'react-bootstrap/Accordion';
import { createMarkup, sortByKey } from 'utils/helpers';
import SideBarHeaderToggle from 'components/sidebar-header-toggle';

export default function SingleAttorneySidebarInformationList({
  content,
  itemKey,
}) {
  const filteredSideBarItems = content.filter((a) => JSON.stringify(a) !== '[]');
  return (
    <>
      <Accordion defaultActiveKey={2}>
        <div key="Additional Information" className="mb-3">
          <SideBarHeaderToggle eventKey={itemKey}>
            <>Additional Information</>
          </SideBarHeaderToggle>
          <Accordion.Collapse eventKey={itemKey}>
            <div className="off-white">
              {sortByKey(filteredSideBarItems, 'title').map((item) => (
                <div className="px-2 pt-3 pt-2" key={item.title}>
                  <strong>{item.title}</strong>
                  {(typeof item.content !== 'string') ? item.content.map((i) => (
                    <div className="d-block w-100 ml-2" key={i.title}>
                      <strong>{i.title}</strong>
                      <div
                        className="attorney-bio-sidebar-list"
                        dangerouslySetInnerHTML={createMarkup(i.content)}
                      />
                    </div>
                  )) : (
                    <div
                      className="attorney-bio-sidebar-list"
                      dangerouslySetInnerHTML={createMarkup(item.content)}
                    />
                  )}
                </div>
              ))}
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </>
  );
}
