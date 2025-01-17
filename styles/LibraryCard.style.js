import Link from "next/link";
import styled from "styled-components";
import { globalBorderRadius, globalColor, globalTransition } from "./global_styles/Global.styles";
import { Title20 } from "./common/Typography.style";


export const LibraryCardImage = styled.picture`
  width: 100%;
  height: 240px;
  border-radius: ${globalBorderRadius.middle};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${globalTransition.default};
  }
`;

export const LibraryCardBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  position: relative;

  @media (hover: hover) {
    &:hover {
      ${LibraryCardImage} {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const LibraryCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  ${Title20} {
    text-transform: uppercase;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const LibraryCardText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${globalColor.gray.gray110};

  p {
    margin: 0;
  }
`;

export const LibraryCardTags = styled.ul`
  margin: 8px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const LibraryCardTag = styled.li`
  display: flex;
`;

export const LibraryCardTagLink = styled(Link)`
  padding: 3px 19px;
  border-radius: 80px;
  border: 1px solid currentColor;
  backdrop-filter: blur(2px);
  color: ${globalColor.blue.blue500};
  position: relative;
  z-index: 2;

  &:hover {
    color: ${globalColor.blue.skyBlue};
  }
`;

export const LibraryCardFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  justify-content: space-between;
`;

export const LibraryCardAuthor = styled.p`
  margin: 0;
  color: ${globalColor.gray.gray110};

  a {
    position: relative;
    z-index: 2;
    
    &:hover {
      color: ${globalColor.blue.skyBlue};
    }
  }
`;

export const LibraryCardAuthorLink = styled(Link)`
  font-weight: 300;
  color: inherit;
`;

export const LibraryCardDate = styled.time`
  margin-left: auto;
  color: ${globalColor.gray.gray700};
  font-weight: 600;
`;

export const LibraryCardLink = styled(Link)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;