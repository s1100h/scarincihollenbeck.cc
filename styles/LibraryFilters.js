import Link from "next/link";
import styled from "styled-components";
import { globalColor, globalTransition, rem } from "./global_styles/Global.styles";
import { UnderlinedLink } from "./common/Typography.style";
import { SelectInput } from "./CustomSelect.style";

export const LibraryFiltersSection = styled.section`
  margin-top: 40px;
  padding: 20px 0;
  background-color: ${globalColor.blue.blue6002};
  box-shadow: 0px 0px 12px 0px rgba(22, 58, 107, 0.08);
`;

export const LibraryFiltersHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const LibraryFiltersNav = styled.ul`
  margin: 0;
  display: flex;
  gap: 28px;
`;

export const LibraryFiltersNavItem = styled.li``;

export const LibraryFiltersNavLink = styled(Link)`
  padding: 4px 0;
  color: ${({$active}) => $active ? globalColor.blue.blue200 : globalColor.white};
  font-family: var(--font-lato);
  font-size: ${rem(24)};
  line-height: 1.5;
  font-weight: ${({$active}) => $active ? 900 : 500};
  border-bottom: 3px solid;
  border-color: ${({$active}) => $active ? globalColor.blue.blue200 : 'transparent'};
  transition: ${globalTransition.default};
  pointer-events: ${({$active}) => $active ? 'none' : 'all'};

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.blue.blue200};
    }
  }

  &:active {
    color: ${globalColor.blue.blue200};
  }
`;

export const LibraryFiltersLine = styled.form`
  --filters-gap: 16px;
  display: flex;
  align-items: center;
  gap: var(--filters-gap);

  ${UnderlinedLink} {
    color: ${globalColor.white};

    @media (hover: hover) {
      &:hover {
        color: ${globalColor.blue.blue400};
      }
    }
    
    &:active {
      color: ${globalColor.blue.skyBlue};
    }
  }
`;

export const LibraryFiltersFields = styled.ul`
  margin: 0;
  display: flex;
  gap: var(--filters-gap);
`;

export const LibraryFiltersField = styled.li`
  flex: 1;
`;

export const LibraryFiltersInput = styled(SelectInput)`
  padding: 14px 16px;
  cursor: unset;
`;