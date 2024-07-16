import styled from "styled-components";
import { globalColor, globalTransition, rem } from "./global_styles/Global.styles";
import { media_breakpoint_down } from "./mediaBreakpoints.style";
import Link from "next/link";
import { ChildrenBox } from "./ModalWindow.style";

export const PracticeCardWrapper = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border-radius: 12px;
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
    line-height: 1.43;
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
    line-height: 1.43;
  }
`;

export const PracticeCardModalsWrapper = styled.div`
  .modal-open {
    max-width: 720px;
    width: 100%;
    padding: 0;
    border-radius: 12px;
    background-color: ${globalColor.blue.blue6002};
    transition: all 0.8s, background-color 0s;

    .modal-closer {
      position: absolute;
      top: 20px;
      right: 40px;
      color: ${globalColor.white};

      ${media_breakpoint_down('sm')} {
        right: 16px;
        top: 16px;
      }
    }

    ${ChildrenBox} {
      padding: 0;
      margin: 0;
    }

    ${PracticeCardWrapper} {
      max-height: 100%;
      gap: 0;
    }

    ${PracticeCardContent} {
      overflow: auto;
      padding: 16px 40px 24px;
      row-gap: 12px;

      &.contact-form-container {
        padding-bottom: 0;
      }

      ${media_breakpoint_down('sm')} {
        padding: 12px 16px 16px;
      }
    }

    ${PracticeCardHeader} {
      min-height: 60px;
      padding-right: 44px;
      padding-bottom: 12px;
      border-bottom: 1px solid ${globalColor.blue.blue550};

      ${media_breakpoint_down('sm')} {
        padding-right: 40px;
      }
    }

    .footer-action {
      justify-content: center;
    }
  }

  .kwes-form {
    column-gap: 16px;

    .input-group--0, 
    .input-group--1, 
    .input-group--2, 
    .input-group--3 {
      width: calc(50% - 8px);

      ${media_breakpoint_down('sm')} {
        width: 100%;
      }
    }

    .form-control, .form-control::placeholder {
      font-size: 1rem;
      line-height: 1.5;

      ${media_breakpoint_down('sm')} {
        font-size: 0.875rem;
        line-height: 1.43;
      }
    }

    .form-control {
      background-color: transparent;
      border-color: ${globalColor.gray.gray500};
      color: ${globalColor.white};

      &:hover, &:focus {
        background-color: ${globalColor.blue.blue550};
      }
    }

    textarea.form-control {
      height: 64px;

      ${media_breakpoint_down('sm')} {
        height: 56px;
      }
    }

    > p {
      margin-bottom: 24px!important;
      color: ${globalColor.gray.gray300};
    }

    > fieldset {
      order: 2;
      height: 100%;
      align-self: center;
      margin: 0 0 0 -40px!important;
      width: calc(50% + 32px);
      position: relative;

      > label {
        height: 100%;
        width: 100%;
        padding: 16px 16px 16px 40px;
        display: flex;
        justify-content: center;
        background-color: ${globalColor.blue.blue550};
        border-top: 1px solid transparent;
        transition: ${globalTransition.default};
        cursor: pointer;

        &:hover {
          border-top-color: ${globalColor.blue.skyBlue};
          background-color: ${globalColor.blue.blue6002};
          color: ${globalColor.blue.skyBlue};
        }

        ${media_breakpoint_down('sm')} {
          padding: 16px;
        }
      }
      
      span {
        font-size: ${rem(14)};
        line-height: 1.43;
        color: ${globalColor.gray.gray300};
      }

      + .kw-field-error-message {
        width: 100%;
        order: 1;
      }

      &:hover {
        + button {
          &::before {
            content: none;
          }
        }
      }

      ${media_breakpoint_down('sm')} {
        margin: 0 0 0 -16px!important;
        width: calc(50% + 8px);
      }
    }

    > button {
      order: 3;
      padding: 16px 40px 16px;
      margin: 0 -40px 0 -16px!important;
      width: calc(50% + 48px);
      background-color: ${globalColor.blue.blue550};
      border-radius: 0;
      border-top: 1px solid transparent;
      transition: ${globalTransition.default};

      &::after {
        content: none;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 16px;
        width: 1px;
        height: calc(100% - 32px);
        background-color: ${globalColor.gray.gray110};
      }

      &:hover {
        border-top-color: ${globalColor.blue.skyBlue};
        background-color: ${globalColor.blue.blue6002};
        color: ${globalColor.blue.skyBlue};

        &::before {
          content: none;
        }
      }

      ${media_breakpoint_down('sm')} {
        padding: 16px;
        margin: 0 -16px 0 -16px!important;
        width: calc(50% + 24px);
      }
    }
  }
`;