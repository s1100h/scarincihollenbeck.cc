import styled from 'styled-components';
import { globalColor, globalShadow, rem } from '../global_styles/Global.styles';
import { ContainerDefault } from 'styles/Containers.style';
import { articleSectionPadding } from 'styles/Article.style';

export const RelatedPostsContainer = styled(ContainerDefault)`
  ${articleSectionPadding};
  display: flex;
  flex-direction: column;
  gap: 24px;

  .disclaimer {
    margin: 0;
    text-align: center;
  }
`;

export const RelatedPostsSliderWrapper = styled.div`
  .slide {
    > article {
      height: 100%;
    }
  }
`;
