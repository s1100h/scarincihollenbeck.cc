import styled from "styled-components";
import { globalColor, rem } from "./global_styles/Global.styles";
import { media_breakpoint_down } from "./mediaBreakpoints.style";

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  ${media_breakpoint_down('xxl')} {
    row-gap: 8px;
  }
`;

export const ContentContainer = styled.div`
  --content-text-color: ${globalColor.gray.gray700};
  color: var(--content-text-color);

  p, ul {
    &:last-child {
      margin: 0;
    }
  }

  p {
    margin: 0 0 16px 0;
  }

  .bullets-li {
    padding-left: 0;
    position: static;

    &::before {
      content: none;
    }
  }
  
  ul {
    margin: 0 0 16px 0;
    list-style: disc;

    li {
      margin: 0 0 0 24px;

      &::marker {
        color: currentColor;
        font-size: small;

        ${media_breakpoint_down('md')} {
          font-size: smaller;
        }
      }
    }
  }

  a {
    color: currentColor;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  strong {
    font-weight: 500;
  }
`;