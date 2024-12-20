import styled from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';
import { globalColor } from './global_styles/Global.styles';
import { SearchInput } from './GlobalSearch.style';
import { ContainerDefault } from './Containers.style';
import { LawyerCardWrapper } from './LawyerCard.style';
import { Title32 } from './common/Typography.style';

export const MainAttorneysContainer = styled.section`
  background-color: ${globalColor.gray.gray1002};

  ${SearchInput} {
    background-color: ${globalColor.gray.gray10};
  }
`;

export const ResultsWrapper = styled(ContainerDefault)`
  margin-bottom: 40px;
`;

export const AttorneyCardsHolder = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${Title32} {
    text-transform: capitalize;
  }
`;

export const AttorneyCardsWrapper = styled.div`
  --attorneys-cards-gap: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--attorneys-cards-gap);

  ${LawyerCardWrapper} {
    width: calc((100% - var(--attorneys-cards-gap) * 3) / 4);

    ${media_breakpoint_exactly_down(1440)} {
      width: calc((100% - var(--attorneys-cards-gap) * 2) / 3);
    }

    ${media_breakpoint_down('lg')} {
      width: calc((100% - var(--attorneys-cards-gap)) / 2);
    }

    ${media_breakpoint_down('sm')} {
      width: 100%;
    }
  }

  ${media_breakpoint_down('xl')} {
    --attorneys-cards-gap: 24px;
  }
`;

export const AdministrationsHolder = styled.div`
  padding: 100px 0;

  ${media_breakpoint_down('xxl')} {
    padding: 60px 0;
  }

  ${media_breakpoint_down('md')} {
    padding: 40px 0;
  }
`;
