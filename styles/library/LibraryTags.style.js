import Link from "next/link";
import styled from "styled-components";
import { globalColor, rem } from "styles/global_styles/Global.styles";
import { media_breakpoint_down } from "styles/mediaBreakpoints.style";


export const LibraryTags = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const LibraryTag = styled.li`
  display: flex;
`;

export const LibraryTagLink = styled(Link)`
  padding: 3px 19px;
  border-radius: 80px;
  border: 1px solid currentColor;
  backdrop-filter: blur(2px);
  color: ${globalColor.blue.blue500};
  position: relative;
  font-size: ${rem(16)};
  z-index: 2;

  &:hover {
    color: ${globalColor.blue.skyBlue};
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
  }
`;