import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  rem,
  successMessage,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { ContainerDefault } from './Containers.style';
import { Title32 } from './common/Typography.style';

export const CareersSection = styled.section`
  padding: 40px 0;
`;

export const CareersBlocks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CareersBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${Title32} {
    text-transform: capitalize;
  }

  ${media_breakpoint_down('md')} {
    row-gap: 16px;
  }
`;

export const CareersBlockHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  ${media_breakpoint_down('md')} {
    row-gap: 4px;
  }
`;

export const CareersBlockSubtitle = styled.p`
  margin: 0;
  color: ${globalColor.blue.darkBlue};
`;

export const CareersBlockCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  column-gap: 32px;
  row-gap: 24px;

  ${media_breakpoint_down('lg')} {
    gap: 24px;
  }

  ${media_breakpoint_down('md')} {
    gap: 16px;
  }
`;

export const CareersInfoSection = styled.section`
  padding-block: 60px;
  background-color: ${globalColor.gray.gray10};

  ${media_breakpoint_down('md')} {
    padding-block: 40px;
  }
`;

export const CareersInfoHolder = styled(ContainerDefault)`
  display: flex;
  gap: 60px;

  ${media_breakpoint_down('xxl')} {
    gap: 32px;
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
  }
`;

export const CareersInfoContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  ${Title32} {
    margin-bottom: 4px;
  }

  ${media_breakpoint_down('xxl')} {
    width: 39%;
  }

  ${media_breakpoint_down('xl')} {
    width: 100%;
  }
`;

export const CareerFormContainer = styled.div`
  padding: 32px 60px;
  position: relative;
  background-color: ${globalColor.gray.gray1002};
  box-shadow: 0px 2px 16px 0px rgba(10, 62, 108, 0.08);
  border-radius: ${globalBorderRadius.big};

  .career-form-wrapper {
    margin-bottom: 12px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    .input-group {
      height: auto;
      margin: 0;

      &:last-of-type {
        margin: 0;
      }
    }

    .input-group--0,
    .input-group--1,
    .input-group--2,
    .input-group--3 {
      width: calc(50% - 16px);

      ${media_breakpoint_down('sm')} {
        width: 100%;
      }
    }

    .form-control {
      padding: 12px 16px;
      border-bottom: 1px solid ${globalColor.gray.gray300};
      font-size: inherit;
      line-height: 1.5;

      &::placeholder {
        font-size: inherit;
        line-height: inherit;
      }

      ${media_breakpoint_down('xxl')} {
        padding: 10px 16px;
      }

      ${media_breakpoint_down('md')} {
        padding: 8px 12px;
        font-size: ${rem(14)};
      }
    }
  }

  .kw-alert-success {
    ${successMessage}
    :after {
      content: 'Thank you for applying! We have received your application for the job vacancy. Our team will review it and get back to you soon.';
    }
  }

  /* .kwes-form,
  .kwes-form-init {

    .input-group {
      margin-bottom: 32px;

      &:last-of-type {
        margin-bottom: 12px;

        ${media_breakpoint_down('md')} {
          margin-bottom: 8px;
        }
      }

      ${media_breakpoint_down('md')} {
        margin-bottom: 16px;
      }
    }

    .form-control {
      padding: 12px 16px;
      border-bottom: 1px solid ${globalColor.gray.gray300};
      font-size: inherit;
      line-height: 1.5;

      &::placeholder {
        font-size: inherit;
        line-height: inherit;
      }

      ${media_breakpoint_down('xxl')} {
        padding: 10px 16px;
      }

      ${media_breakpoint_down('md')} {
        padding: 8px 12px;
        font-size: ${rem(14)};
      }
    }

    textarea.form-control {
      height: 80px;
    }

    fieldset {
      margin: 8px 0 0 0 !important;

      ${media_breakpoint_down('md')} {
        margin: 4px 0 0 0 !important;
      }
    }

    p {
      color: ${globalColor.gray.gray110};
    }

    label {
      span {
        font-size: ${rem(14)};
        color: ${globalColor.gray.gray110};
      }
    }

    small {
      align-self: flex-end;
    }

    ${StandardBlueButton} {
      margin-top: 32px !important;

      ${media_breakpoint_down('md')} {
        margin-top: 12px !important;
      }
    }
  } */
`;


export const CareerHeaderItems = styled.ul`
  margin: 0;
  padding: 15px 23px;
  display: flex;
  gap: 12px;
  border-radius: ${globalBorderRadius.small};
  border: 1px solid ${globalColor.blue.blue200};
  background-color: ${globalColor.gray.gray1002};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  ${media_breakpoint_down('md')} {
    padding: 7px 11px;
    flex-direction: column;
    gap: 8px;
  }
`;

export const CareerHeaderItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: ${rem(16)};

  &::after {
    content: '';
    display: flex;
    margin-left: 4px;
    width: 1px;
    height: 16px;
    background-color: ${globalColor.gray.gray300};
  }

  &:last-child {
    &::after {
      content: none;
    }
  }

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;

    ${media_breakpoint_down('sm')} {
      display: none;
    }
  }

  > span {
    display: flex;
    align-items: center;
    gap: 8px;

    &::after {
      content: '';
      display: flex;
      width: 1px;
      height: 12px;
      background-color: currentColor;
    }

    &:last-child {
      &::after {
        content: none;
        display: none;
      }
    }
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};

    &::after {
      content: none;
    }
  }
`;