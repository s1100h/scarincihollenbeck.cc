import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  rem,
} from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';
import { TitleH2 } from './common/Typography.style';

export const FaqWrapper = styled.section`
  margin-bottom: 40px;

  ${TitleH2} {
    margin-bottom: 12px;
  }

  .accordion {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    --bs-accordion-btn-icon: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3e%3cpath d='M6 9L12 15L18 9' stroke='%23231E1E' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
    --bs-accordion-btn-active-icon: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3e%3cpath d='M6 9L12 15L18 9' stroke='%23231E1E' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
    --bs-accordion-btn-icon-width: 24px;

    &-item {
      padding-bottom: 8px;
      background-color: #afdcf5;
      border-radius: ${globalBorderRadius.small};
      border: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: -10px 10px 19px 0px rgba(0, 0, 0, 0.06),
          0px -7px 16px 0px rgba(0, 0, 0, 0.06);
      }

      ${media_breakpoint_exactly_down(1439)} {
        padding-bottom: 4px;
      }

      ${media_breakpoint_down('sm')} {
        padding-bottom: 0;
      }
    }

    &-header {
      margin: 0;
      color: #231e1e;
      font-family: var(--font-poppins);
      font-size: ${rem(16)};
      font-weight: 600;
      line-height: 24px;

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(14)};
        line-height: 20px;
        font-weight: 400;
        color: #0d0d0d;
      }
    }

    &-button {
      border: none;
      background-color: transparent;
      box-shadow: none;
      padding: 20px 24px 12px 24px;
      border-radius: 0;
      color: #231e1e;
      font-weight: 600;

      ${media_breakpoint_exactly_down(1850)} {
        padding: 16px 16px 12px 16px;
      }

      ${media_breakpoint_down('sm')} {
        padding: 12px 8px 12px 8px;
        font-size: ${rem(14)};
        line-height: 20px;
        font-weight: 400;
        color: #0d0d0d;
      }
    }

    &-body {
      padding: 0 24px 12px;
      color: ${globalColor.gray.gray80};
      font-size: ${rem(16)};
      line-height: 24px;
      font-weight: 400;
      font-family: var(--font-poppins);

      p {
        &:last-child {
          margin: 0;
        }
        line-height: 24px;
      }

      ul {
        &:last-child {
          margin-bottom: 0;
        }
      }

      ${media_breakpoint_exactly_down(1850)} {
        padding: 0 16px 12px;
      }

      ${media_breakpoint_down('sm')} {
        padding: 0 8px 12px;
        font-size: ${rem(14)};
        line-height: 24px;
        font-weight: 400;
      }
    }
  }

  &.two-columns {
    .accordion {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(550px, 100%), 1fr));
      gap: 20px;

      ${media_breakpoint_down('md')} {
        gap: 16px;
      }
    }

    .accordion-item {
      height: fit-content;
    }
  }
`;
