import styled from 'styled-components';
import {
  globalColor,
  globalTransition,
  rem,
} from './global_styles/Global.styles';
import Link from 'next/link';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const SearchedItem = styled.section`
  border-radius: 4px;
  border-bottom: 1px solid ${globalColor.blue.blue6002};
  transition: ${globalTransition.default};

  :hover {
    background-color: ${globalColor.blue.blue6002};

    > a {
      > span {
        color: ${globalColor.white};
      }
    }
  }
`;

export const SearchedItemLink = styled(Link)`
  padding: 8px 6px;
  display: flex;
  align-items: center;
  column-gap: 12px;

  ${media_breakpoint_down('md')} {
    padding: 8px 2px;
  }
`;

export const SearchedItemIcon = styled.span`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${globalColor.gray.gray500};
  transition: ${globalTransition.default};

  ${media_breakpoint_down('md')} {
    width: 24px;
    height: 24px;
  }

  > svg {
    width: 100%;
    height: 100%;
  }
`;
export const SearchedItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;
export const SearchableItemTitle = styled.h4`
  margin: 0;
  color: ${globalColor.white};
  font-size: ${rem(18)};
  line-height: 1.55;
  font-weight: 500;

  ${media_breakpoint_down('md')} {
    font-size: ${rem(16)};
    line-height: 1.5;
    font-weight: 400;
  }

  .ais-Highlight {
    width: 100%;

    .ais-Highlight-highlighted {
      color: ${globalColor.blue.blue400};
      font-style: normal;
    }
  }
`;
export const SearchableItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 8px;
`;
export const SearchableItemLabel = styled.p`
  margin: 0;
  color: ${globalColor.gray.gray500};
  font-family: var(--font-lato);
  font-size: ${rem(12)};
  line-height: 1.66;
  text-transform: uppercase;
`;
export const SearchableItemText = styled.p`
  margin: 0 0 0 auto;
  color: ${globalColor.gray.gray300};
  font-size: ${rem(16)};
  line-height: 1.5;
  font-weight: 300;

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 1.42;
  }
`;
