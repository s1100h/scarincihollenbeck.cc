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
  VerticalTabsContainer,
} from 'styles/VerticalTabs.style';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import { Title60 } from 'styles/common/Typography.style';
import VerticalTabsContentColumns from './VerticalTabsContentColumns';

const VerticalTabs = ({
  contentTabs = [],
  anchorId,
  title,
  headerOffset = 135,
  activeTab: externalActiveTab,
  setActiveTab: externalSetActiveTab,
}) => {
  const componentId = useId();
  const containerRef = useRef();
  const [internalActiveTab, setInternalActiveTab] = useState(0);

  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  const setActiveTab = externalSetActiveTab || setInternalActiveTab;

  const handleOpenerClick = (index) => {
    setActiveTab(index);

    if (!containerRef.current) return;
    const offsetTop = containerRef.current.offsetTop - headerOffset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeTab >= contentTabs?.length) {
      setActiveTab(0);
    }
  }, [contentTabs, activeTab]);

  if (empty(contentTabs)) return null;

  return (
    <VerticalTabsSection
      ref={containerRef}
      id={anchorId}
      className="margin-scroll"
    >
      <VerticalTabsContainer>
        {!empty(title) && <Title60>{title}</Title60>}
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
                        {item?.title && (
                          <TabTitle as={!empty(title) ? 'h3' : 'h2'}>
                            {item?.title}
                          </TabTitle>
                        )}
                        {item?.description && (
                          <JSXWithDynamicLinks HTML={item?.description} />
                        )}

                        <VerticalTabsContentColumns
                          titleTag={!empty(title) ? 'h4' : 'h3'}
                          columns={item?.columns}
                        />
                      </Fragment>
                    ))}
                </TabContent>
              </Fragment>
            ))}
          </VerticalTabsContent>
        </VerticalTabsHolder>
      </VerticalTabsContainer>
    </VerticalTabsSection>
  );
};

export default VerticalTabs;
