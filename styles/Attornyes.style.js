import styled from 'styled-components';
import { media_breakpoint_down, media_breakpoint_exactly_down } from './mediaBreakpoints.style';
import { FiltersItems } from './Filters.style';
import { globalColor, globalShadow } from './global_styles/Global.styles';
import { SearchInput } from './GlobalSearch.style';
import { CentralizedBox } from './Containers.style';

export const MainAttorneysContainer = styled.section`
  position: relative;
  z-index: 10;
  top: -94px;

  ${FiltersItems} {
    padding: 20px;
    position: sticky;
    top: ${({ $headerHeight }) => $headerHeight};
    left: 0;
    z-index: 10;
    background-color: ${globalColor.white};
    box-shadow: ${globalShadow.allSideShadow};

    ${media_breakpoint_down('lg')} {
      position: static;
    }
  }

  ${SearchInput} {
    background-color: ${globalColor.gray.gray10};
  }

`;

export const FaqBox = styled.div`
  display: flex;
  justify-content: center;
  width: 87vw;
  margin: auto;

  > section {
    width: 100%;
  }
`;

export const ResultsWrapper = styled.div`
  ${media_breakpoint_exactly_down(612)} {
    ${CentralizedBox} {
      width: 100%;
    }
  }
`;