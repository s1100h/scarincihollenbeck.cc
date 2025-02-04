import ContentSection from 'components/molecules/ContentSection';
import React from 'react';
import { Title60 } from 'styles/common/Typography.style';
import { ContainerDefault } from 'styles/Containers.style';
import { FilledSectionBox } from 'styles/industries/FilledSection.style';
import empty from 'is-empty';

const FilledSection = ({ title, content, anchorId }) => {
  if (empty(content)) return null;
  return (
    <FilledSectionBox id={anchorId} className="margin-scroll">
      <ContainerDefault>
        <ContentSection
          title={title}
          content={content}
          TitleComponent={Title60}
        />
      </ContainerDefault>
    </FilledSectionBox>
  );
};

export default FilledSection;
