import ModalWindow from 'components/common/ModalWindow';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import React, { useState } from 'react';
import { FormBox } from 'styles/AboutAuthorFormCard.style';
import { TitleH2 } from 'styles/common/Typography.style';
import { ContainerDefault } from 'styles/Containers.style';
import {
  ServicesIndustriesCards,
  ServicesIndustriesHolder,
  ServicesIndustriesSection,
} from 'styles/services/ServicesIndustries.style';
import empty from 'is-empty';
import { getIndustryLink } from 'utils/helpers';
import ServicesIndustriesCard from './ServicesIndustriesCard';

const ServicesIndustries = ({ industries }) => {
  if (empty(industries)) return null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModalOpener = () => {
    setIsModalOpen(true);
  };

  return (
    <ServicesIndustriesSection id="industries">
      <ContainerDefault>
        <ServicesIndustriesHolder>
          <TitleH2>Industries we work with</TitleH2>

          <ServicesIndustriesCards>
            {industries.map((item) => (
              <ServicesIndustriesCard
                key={item?.databaseId}
                title={item?.title}
                link={getIndustryLink(item?.uri, null)}
                onClickModalOpener={onClickModalOpener}
              />
            ))}
          </ServicesIndustriesCards>
        </ServicesIndustriesHolder>
      </ContainerDefault>

      <ModalWindow isOpen={isModalOpen} setOpenModal={setIsModalOpen}>
        <FormBox>
          <p className="contact-form-title">Let`s get in touch!</p>
          <ContactForm blockName="services-industries-cards" />
        </FormBox>
      </ModalWindow>
    </ServicesIndustriesSection>
  );
};

export default ServicesIndustries;
