import styled from 'styled-components';
import {
  globalColor,
  globalShadow,
  globalTransition,
  rem,
} from 'styles/global_styles/Global.styles';
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style';
import {
  SidebarMenuSubitem,
  SidebarMenuSubitemContentLink,
  SidebarMenuSubitemOpener,
} from 'styles/Sidebar.style';

export const ServicesContentWrapper = styled.section`
  padding: 60px 0;

  ${media_breakpoint_down('xl')} {
    padding: 40px 0;
  }
`;

export const ServicesContentHolder = styled.div`
  display: flex;
  gap: 60px;

  ${media_breakpoint_down('xxl')} {
    gap: 32px;
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
  }
`;

export const ServicesAccordions = styled.ul`
  margin: 0;
  height: fit-content;
  width: 360px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: sticky;
  top: ${({ $headerHeight }) => `${$headerHeight + 24}px`};
  left: 0;
  transition: ${globalTransition.default};

  ${media_breakpoint_down('xl')} {
    width: 100%;
    position: static;
  }

  ${SidebarMenuSubitem} {
    padding: 0;
    background-color: ${globalColor.white};
    border-radius: 12px;
    box-shadow: ${globalShadow.shadowM};

    > ${SidebarMenuSubitemOpener} {
      padding: 20px;
      font-weight: 600;
      color: ${globalColor.blue.darkBlue};

      ${media_breakpoint_down('md')} {
        padding: 16px 12px;
      }
    }

    &.open {
      padding-bottom: 14px;

      > ${SidebarMenuSubitemOpener} {
        padding: 20px 20px 2px;

        ${media_breakpoint_down('md')} {
          padding: 16px 12px 2px;
        }
      }
    }
  }

  ${SidebarMenuSubitemOpener} {
    font-size: inherit;
    line-height: 1.5;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(14)};
    }
  }

  ${SidebarMenuSubitemContentLink} {
    color: ${globalColor.gray.gray700};
    padding: 6px 20px;

    @media (hover: hover) {
      &:hover {
        color: ${globalColor.blue.darkBlue};
      }
    }

    &:active {
      color: ${globalColor.blue.darkBlue};
    }

    ${media_breakpoint_down('md')} {
      padding: 6px 12px;
    }
  }
`;
