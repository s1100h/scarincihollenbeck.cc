import React from 'react';
import { TitleH2 } from 'styles/common/Typography.style';
import { ContainerDefault } from 'styles/Containers.style';
import {
  ServicesIndustriesCards,
  ServicesIndustriesHolder,
  ServicesIndustriesSection,
} from 'styles/services/ServicesIndustries.style';
import empty from 'is-empty';
import { getIndustryLink } from 'utils/helpers';
import { useDispatch } from 'react-redux';
import ServicesIndustriesCard from './ServicesIndustriesCard';
import { handleModalOpener } from '../../../redux/slices/modals.slice';

const ServicesIndustries = ({ industries }) => {
  const dispatch = useDispatch();
  if (empty(industries)) return null;

  const onClickModalOpener = () => {
    dispatch(handleModalOpener({ active: true }));
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
    </ServicesIndustriesSection>
  );
};

export default ServicesIndustries;
