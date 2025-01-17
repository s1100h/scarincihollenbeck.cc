import styled from "styled-components";
import { LogoSeparatorWrapper } from "./Separators.style";

export const LibraryCategoriesWrapper = styled.div`

  ${LogoSeparatorWrapper} {
    margin: 0;
  }
`;

export const LibraryCategorySection = styled.section`
  padding: 40px 0;
`;

export const LibraryCategoryHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const LibraryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(385px, 100%), 1fr));
  gap: 40px;
`;