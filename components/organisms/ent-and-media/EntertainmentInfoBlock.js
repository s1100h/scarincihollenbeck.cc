import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import {
  EnterntainmentTabBtn,
  EnterntainmentTabBtns,
  EnterntainmentTabContent,
  EnterntainmentTabDescription,
  EnterntainmentTabHeader,
  EnterntainmentTabImage,
  EnterntainmentTabList,
  EnterntainmentTabListItem,
  EnterntainmentTabNavbar,
  EnterntainmentTabNavbarItem,
  EnterntainmentTabNumber,
  EnterntainmentTabTitle,
  EnterntainmentTabTitleWrapper,
  EntertainmentInfoSection,
} from 'styles/practices-special-style/ent-adn-media/EntertainmentInfoBlock.style';
import {
  EntertainmentModal,
  EntertainmentModalBackground,
  EntertainmentModalClose,
  EntertainmentModalContent,
  EntertainmentModalDescription,
  EntertainmentModalFooter,
  EntertainmentModalList,
  EntertainmentModalListItem,
  EntertainmentModalListNumber,
} from 'styles/practices-special-style/ent-adn-media/EntertainmentModal.style';

const EntertainmentInfoBlock = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  const setTabStyles = (variant) => {
    const tabStyle = {
      first: '',
      second: 'full-image',
      third: 'right-image',
    };
    return tabStyle[variant];
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleModalOpenerClick = () => {
    setIsShowModal(true);
  };

  return (
    <EntertainmentInfoSection>
      <ContainerContent>
        <EnterntainmentTabNumber>
          {tabs.map(
            (tab, index) => activeTab === index && (index < 9 ? `0${index + 1}` : index + 1),
          )}
        </EnterntainmentTabNumber>
        <EnterntainmentTabHeader>
          <EnterntainmentTabTitleWrapper>
            {tabs.map(
              (tab, index) => activeTab === index && (
              <EnterntainmentTabTitle key={tab.id}>
                {tab.title}
              </EnterntainmentTabTitle>
              ),
            )}

            <EnterntainmentTabTitle className="title-indent">
              Law
            </EnterntainmentTabTitle>
          </EnterntainmentTabTitleWrapper>

          <div className="delimiter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 6"
              fill="none"
            >
              <path
                d="M180 3L175 0.113249V5.88675L180 3ZM0 3.5L175.5 3.5V2.5L0 2.5L0 3.5Z"
                fill="black"
              />
            </svg>
          </div>
          <EnterntainmentTabBtns>
            <EnterntainmentTabBtn onClick={handleModalOpenerClick}>
              Know more
            </EnterntainmentTabBtn>
            <EnterntainmentTabBtn className="btn-white">
              See attorneys
            </EnterntainmentTabBtn>
          </EnterntainmentTabBtns>
        </EnterntainmentTabHeader>

        <EnterntainmentTabNavbar>
          {tabs.map((tab, index) => (
            <EnterntainmentTabNavbarItem
              key={tab.id}
              onClick={() => handleTabClick(index)}
              className={activeTab === index ? 'active' : ''}
            >
              {`${tab.title} Law`}
            </EnterntainmentTabNavbarItem>
          ))}
        </EnterntainmentTabNavbar>
        <AnimatePresence exitBeforeEnter>
          {tabs.map(
            (tab, index) => activeTab === index && (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <EnterntainmentTabContent
                className={`${setTabStyles(tab.variant)}`}
              >
                <EnterntainmentTabImage>
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    width={tab.imageWidth}
                    height={tab.imageHeight}
                  />
                </EnterntainmentTabImage>
                <EnterntainmentTabDescription>
                  {tab.description}
                </EnterntainmentTabDescription>
                <EnterntainmentTabList>
                  {tab.listServices.map((item) => (
                    <EnterntainmentTabListItem key={item}>
                      {item}
                    </EnterntainmentTabListItem>
                  ))}
                </EnterntainmentTabList>
              </EnterntainmentTabContent>
            </motion.div>
            ),
          )}
        </AnimatePresence>
      </ContainerContent>

      <AnimatePresence>
        {isShowModal && (
          <div>
            <EntertainmentModalBackground
              onClick={() => setIsShowModal(false)}
            />
            <EntertainmentModal
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
            >
              <EntertainmentModalContent>
                <EntertainmentModalClose
                  onClick={() => setIsShowModal(false)}
                />

                {tabs.map(
                  ({ modalData }, index) => activeTab === index && (
                  <Fragment key={modalData.id}>
                    <EntertainmentModalList>
                      {modalData.modalList.map((item, index) => (
                        <EntertainmentModalListItem key={item.id}>
                          <EntertainmentModalListNumber>
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </EntertainmentModalListNumber>
                          {item.title}
                        </EntertainmentModalListItem>
                      ))}
                    </EntertainmentModalList>
                    <EntertainmentModalDescription>
                      {modalData.modalDescription}
                    </EntertainmentModalDescription>
                  </Fragment>
                  ),
                )}
              </EntertainmentModalContent>
              <EntertainmentModalFooter>
                <EnterntainmentTabBtn>See attorneys</EnterntainmentTabBtn>
              </EntertainmentModalFooter>
            </EntertainmentModal>
          </div>
        )}
      </AnimatePresence>
    </EntertainmentInfoSection>
  );
};

export default EntertainmentInfoBlock;
