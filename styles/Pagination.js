import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const CustomPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 12px;

  .pagination {
    width: 100%;
    display: flex;
    gap: 8px;
    --bs-pagination-padding-y: 0;
    --bs-pagination-padding-x: 0;
    --bs-pagination-color: ${globalColor.gray.gray130};
    --bs-pagination-bg: transparent;
    --bs-pagination-border-color: transparent;
    --bs-pagination-border-radius: 1px;
    --bs-pagination-active-color: ${globalColor.gray.gray10};
    --bs-pagination-active-border-color: transparent;
    --bs-pagination-active-bg: ${globalColor.blue.blue600};
    --bs-pagination-hover-color: ${globalColor.blue.blue600};
    --bs-pagination-hover-bg: ${globalColor.gray.gray10};
    --bs-pagination-hover-border-color: ${globalColor.gray.gray10};
    --bs-pagination-disabled-color: ${globalColor.grayLite.grayLite90};
    --bs-pagination-disabled-bg: ${globalColor.graySmoke.liteWhiteSmoke};
    --bs-pagination-disabled-border-color: ${globalColor.graySmoke
      .liteWhiteSmoke};
    --bs-pagination-focus-color: ${globalColor.blue.blue600};
    --bs-pagination-focus-bg: ${globalColor.gray.gray10};
    --bs-pagination-focus-box-shadow: none;

    ${media_breakpoint_down('md')} {
      gap: 4px;
    }
  }

  .page-item {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media_breakpoint_down('md')} {
      width: 28px;
      height: 28px;
    }

    &.active {
      .page-link {
        font-weight: 600;
      }
    }

    &.disabled {
      .pagination-icon {
        color: var(--bs-pagination-disabled-color);
      }
    }
  }

  .pagination-prev {
    margin-right: auto;
  }

  .pagination-next {
    margin-left: auto;
  }

  .pagination-ellipsis {
    .page-link {
      border: 0;
      background-color: transparent;
    }
  }

  .page-link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-poppins);
    font-weight: 500;
  }

  .pagination-icon {
    width: 24px;
    height: 24px;
    color: ${globalColor.gray.gray130};

    ${media_breakpoint_down('md')} {
      width: 16px;
      height: 16px;
    }
  }
`;

export const CustomPaginationItemsCount = styled.span`
  align-self: flex-start;
  font-family: var(--font-roboto);
  color: ${globalColor.gray.gray120};
`;
