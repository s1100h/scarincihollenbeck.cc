import React, {
  Fragment, useEffect, useId, useRef, useState,
} from 'react';
import empty from 'is-empty';
import {
  VerticalTabsHolder,
  VerticalTabsSection,
  OpenersList,
  OpenersListItem,
  TabOpener,
  VerticalTabsContent,
  TabContent,
  TabMobileOpener,
  TabTitle,
} from 'styles/VerticalTabs.style';
import { ContainerDefault } from 'styles/Containers.style';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import VerticalTabsContentColumns from './VerticalTabsContentColumns';

const VerticalTabs = ({ contentTabs, anchorId }) => {
  if (empty(contentTabs)) return null;
  const componentId = useId();
  const containerRef = useRef();
  const [activeTab, setActiveTab] = useState(0);

  const handleOpenerClick = (index) => {
    setActiveTab(index);

    if (!containerRef.current) return;
    const offsetTop = containerRef.current.offsetTop - 135;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeTab >= contentTabs.length) {
      setActiveTab(0);
    }
  }, [contentTabs, activeTab]);

  return (
    <VerticalTabsSection
      ref={containerRef}
      id={anchorId}
      className="margin-scroll"
    >
      <ContainerDefault>
        <VerticalTabsHolder>
          <OpenersList>
            {contentTabs.map((opener, index) => (
              <OpenersListItem
                key={`${opener?.openerTitle}-${componentId}-opener`}
              >
                <TabOpener
                  className={activeTab === index ? 'active' : ''}
                  onClick={() => handleOpenerClick(index)}
                >
                  {`${index + 1}. ${opener?.openerTitle}`}
                </TabOpener>
              </OpenersListItem>
            ))}
          </OpenersList>

          <VerticalTabsContent>
            {contentTabs.map((content, index) => (
              <Fragment key={`${content?.openerTitle}-${componentId}-content`}>
                <TabMobileOpener
                  className={activeTab === index ? 'active' : ''}
                  onClick={() => setActiveTab(index)}
                >
                  {`${index + 1}. ${content?.openerTitle}`}
                </TabMobileOpener>
                <TabContent className={activeTab === index ? 'active' : ''}>
                  {!empty(content?.tabContent)
                    && content?.tabContent?.map((item, itemIndex) => (
                      <Fragment
                        key={`${content?.openerTitle}-${componentId}-${
                          itemIndex + 1
                        }-content-item`}
                      >
                        {item?.title && <TabTitle>{item?.title}</TabTitle>}
                        {item?.description && (
                          <JSXWithDynamicLinks HTML={item?.description} />
                        )}

                        <VerticalTabsContentColumns columns={item?.columns} />
                      </Fragment>
                    ))}
                </TabContent>
              </Fragment>
            ))}
          </VerticalTabsContent>
        </VerticalTabsHolder>
      </ContainerDefault>
    </VerticalTabsSection>
  );
};

export default VerticalTabs;
