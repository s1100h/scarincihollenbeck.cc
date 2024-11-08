import SeparatedTitle from 'components/common/SeparatedTitle';
import React, { useState } from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { globalColor } from 'styles/global_styles/Global.styles';
import {
  WhatWeDoHeader,
  WhatWeDoHolder,
  WhatWeDoWrapper,
} from 'styles/WhatWeDo.style';
import { StandardBlueButton } from 'styles/Buttons.style';
import {
  PracticesTabsModal,
  PracticesTabsModalContent,
  PracticesTabsModalHeader,
  PracticesTabsModalTitle,
} from 'styles/PracticesTabs.style';
import ModalWindow from 'components/common/ModalWindow';
import dynamic from 'next/dynamic';
import { useGetPracticesQuery } from '../../../redux/services/project-api';
import PracticesTabs from './PracticesTabs';

const ContactForm = dynamic(() => import('components/shared/ContactForm/ContactForm'));

const WhatWeDoSection = ({ anchorId }) => {
  const [isShowContactModal, setIsShowContactModal] = useState(false);
  const { data: practices, isLoading: isLoadingPractices } = useGetPracticesQuery();

  return (
    <WhatWeDoWrapper
      id={anchorId}
      className="margin-scroll"
      data-testid="what-we-do"
    >
      <ContainerDefault className="practice-container">
        <WhatWeDoHolder>
          <WhatWeDoHeader>
            <SeparatedTitle
              separatorSize={24}
              separatorColor={globalColor.blue.skyBlue}
              title="What we do?"
            />

            <StandardBlueButton onClick={() => setIsShowContactModal(true)}>
              Free consultation
            </StandardBlueButton>
          </WhatWeDoHeader>
          <PracticesTabs
            practices={practices}
            isLoadingPractices={isLoadingPractices}
          />
        </WhatWeDoHolder>
      </ContainerDefault>

      <PracticesTabsModal>
        <ModalWindow
          isOpen={isShowContactModal}
          setOpenModal={setIsShowContactModal}
        >
          <PracticesTabsModalContent>
            <PracticesTabsModalHeader>
              <PracticesTabsModalTitle as="p">
                Let`s get in touch!
              </PracticesTabsModalTitle>
            </PracticesTabsModalHeader>

            <ContactForm blockName="tabs-contact-form" />
          </PracticesTabsModalContent>
        </ModalWindow>
      </PracticesTabsModal>
    </WhatWeDoWrapper>
  );
};

export default WhatWeDoSection;
