import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  globalTransition,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import Link from 'next/link';

export const PracticeCardWrapper = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border-radius: ${globalBorderRadius.middle};
  background-color: ${globalColor.blue.blue6002};
  box-shadow: 0px 2px 12px 0px rgba(10, 62, 108, 0.12);
  overflow: hidden;

  &:hover {
    .icon {
      color: ${globalColor.blue.skyBlue};
    }
  }
`;

export const PracticeCardContent = styled.div`
  flex: 1;
  padding: 24px 24px 0;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  ${media_breakpoint_down('lg')} {
    padding: 12px 16px 0;
  }
`;

export const PracticeCardHeader = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const PracticeCardIcon = styled.span`
  flex-shrink: 0;
  color: ${globalColor.white};
  width: 36px;
  height: 36px;
  transition: ${globalTransition.default};

  ${media_breakpoint_down('sm')} {
    width: 32px;
    height: 32px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const PracticeCardTitle = styled.h3`
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(14)};
  }
`;

export const PracticeCardDescription = styled.div`
  min-height: 60px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${globalColor.gray.gray300};
  font-family: var(--font-lato);
  font-size: ${rem(12)};
  line-height: 1.67;
  text-transform: uppercase;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

  p {
    margin: 0;
  }

  a {
    color: ${globalColor.blue.skyBlue};
    transition: ${globalTransition.default};

    &:hover {
      color: ${globalColor.blue.blue400};
    }
  }
`;

export const PracticeCardList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  list-style: disc;
  overflow: auto;
`;

export const PracticeCardListItem = styled.li`
  margin-left: 24px;

  &::marker {
    color: ${globalColor.white};
    font-size: 12px;
  }
`;

export const PracticeCardListLink = styled(Link)`
  color: ${globalColor.white};
  transition: ${globalTransition.default};

  &:hover {
    color: ${globalColor.blue.skyBlue};
  }
`;

export const PracticeCardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  background-color: ${globalColor.blue.blue550};

  &:has(.footer-action:hover) {
    > div {
      &::after {
        content: none;
      }
    }
  }
`;

export const PracticeCardFooterItem = styled.div`
  /* min-width: max-content; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${globalTransition.default};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 16px;
    width: 1px;
    height: calc(100% - 32px);
    background-color: ${globalColor.gray.gray110};
  }

  &:nth-child(2) {
    &::after {
      content: none;
    }

    .footer-action {
      justify-content: flex-start;
    }
  }

  .footer-action {
    padding: 16px;
    border-top: 1px solid transparent;
    transition: ${globalTransition.default};

    &:hover {
      border-top-color: ${globalColor.blue.skyBlue};
      background-color: ${globalColor.blue.blue6002};
      color: ${globalColor.blue.skyBlue};
    }
  }
`;

export const PracticeCardButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(14)};
  }
`;
