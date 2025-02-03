import styled from "styled-components";
import { media_breakpoint_down } from "styles/mediaBreakpoints.style";
import { PostSidebarAnchors } from "./PostSideBar.style";
import { globalTransition } from "styles/global_styles/Global.styles";
import { articleSectionPadding } from "styles/Article.style";

export const PostContentSection = styled.section`
  ${articleSectionPadding};
  
  @media print {
    display: none;
  }
`;

export const PostContentHolder = styled.div`
  display: flex;
  gap: 40px;
  transition: ${globalTransition.default};

  &:has(${PostSidebarAnchors}:empty) {
    gap: 0;
  }

  ${media_breakpoint_down('lg')} {
    flex-direction: column;
  }

  ${media_breakpoint_down('md')} {
    gap: 32px;
  }
`;

export const PostContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .disclaimer {
    margin: 0;
  }

  .wp-block-heading {
    scroll-margin-top: calc(var(--header-height) + 16px);
  }
`;