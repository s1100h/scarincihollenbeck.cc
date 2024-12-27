import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: ${({ $isSmaller }) => ($isSmaller ? '8px' : '12px')};

  ${media_breakpoint_down('xxl')} {
    row-gap: 8px;
  }
`;

export const ContentContainer = styled.div`
  --content-text-color: ${globalColor.gray.gray700};
  color: var(--content-text-color);

  p,
  ul {
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

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  strong {
    font-weight: 500;
  }

  &.two-columns {
    columns: 2;
    gap: 40px;

    ${media_breakpoint_down('xxl')} {
      gap: 32px;
    }

    ${media_breakpoint_down('lg')} {
      columns: 1;
    }
  }

  &.grid-two-columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    ${media_breakpoint_down('xxl')} {
      gap: 32px;
    }
  }

  &.why-choose-us {
    --content-text-color: ${globalColor.white};

    p {
      margin: 0 0 16px 0;

      ${media_breakpoint_down('md')} {
        margin: 0 0 12px 0;
      }
    }
  }
`;
