import styled from 'styled-components';
import { titleH2Styles } from 'styles/common/Typography.style';
import { FaqWrapper } from 'styles/Faq.style';
import { globalColor, globalTransition, rem } from 'styles/global_styles/Global.styles';
import { MapWrapper } from 'styles/LocationCard.style';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const PracticeContentSection = styled.section`
  padding: 40px 0;
  background-color: ${globalColor.white};

  ${FaqWrapper} {
    margin-bottom: 0;
  }

  .social-share {
    display: none;
    margin: 0 0 16px 0;
    gap: 4px;
    font-size: ${rem(14)};

    .second-hr {
      width: calc(100% + 32px);
      color: ${globalColor.blue.darkBlue};
      opacity: 1;
      margin-right: -32px;
      height: 1px;
      order: 3;

      ${media_breakpoint_down('md')} {
        width: calc(100% + 12px);
        margin-right: -12px;
      }
    }

    .react-share__ShareButton, .copy-button {
      margin: 0 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${globalColor.blue.darkBlue};
        transition: ${globalTransition.default};
        width: 20px;
        height: 20px;
      }

      &:first-of-type {
        margin-left: 8px;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }

    ${media_breakpoint_down('xl')} {
      display: flex;
    }
  }

  ${media_breakpoint_exactly_down(1439)} {
    padding: 32px 0;
  }
`;

export const SplitContentHolder = styled.div`
  display: flex;
  column-gap: 60px;

  ${media_breakpoint_exactly_down(1850)} {
    column-gap: 24px;
  }

  ${media_breakpoint_down('lg')} {
    column-gap: 16px;
  }

  ${media_breakpoint_down('sm')} {
    column-gap: 8px;
  }
`;

export const SplitContentDescription = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  .content-block {
    h2,
    h3,
    h4 {
      ${titleH2Styles};
      margin: 0 0 8px 0;

      & * {
        font-style: normal;
        color: #000;
        font-family: var(--font-poppins);
        font-weight: 600;
      }

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(20)};
        line-height: 28px;
        font-weight: 700;
      }
    }

    h3,
    h4,
    h5,
    h6 {
      font-size: ${rem(22)};
      line-height: 30px;

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(18)};
        line-height: 26px;
      }
    }
  }

  strong,
  b {
    font-weight: 600;
    color: ${globalColor.black};
  }

  p {
    margin: 0 0 16px 0;
    color: ${globalColor.gray.gray80};
    font-family: var(--font-poppins);
    font-size: ${rem(16)};
    line-height: 29px;
    font-weight: 400;

    &:last-child {
      margin: 0;
    }

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(14)};
      line-height: 24px;
    }
  }

  ul {
    li {
      color: ${globalColor.gray.gray80};
      font-family: var(--font-poppins);
      font-size: ${rem(16)};
      line-height: 29px;
      font-weight: 400;

      &:last-child {
        margin: 0;
      }

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(14)};
        line-height: 24px;
      }
    }

    &:last-child {
      margin: 0;
    }
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto;

    table {
      min-width: 500px;
    }
  }

  ${MapWrapper} {
    height: auto;
  }

  ${media_breakpoint_down('lg')} {
    max-width: calc(100% - 56px);
  }

  ${media_breakpoint_down('sm')} {
    max-width: calc(100% - 40px);
  }
`;

export const SplitContentSidebar = styled.div`
  width: 420px;

  ${media_breakpoint_down('xl')} {
    width: max-content;
  }
`;
