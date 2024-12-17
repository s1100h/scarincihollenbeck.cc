import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  globalShadow,
  globalTransition,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { StandardBlueButton } from './Buttons.style';
import Link from 'next/link';

export const TileContactWrapper = styled.article`
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  border-radius: ${globalBorderRadius.small};
  background-color: ${globalColor.white};
  box-shadow: ${globalShadow.shadowM};
  transition: ${globalTransition.default};
  overflow: hidden;

  &:hover {
    box-shadow: ${globalShadow.hoveredShadow};
  }

  &:has(img) {
    padding: 0 !important;
    border: 0 !important;
  }
`;

export const TileContactHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  &:empty {
    display: none;
  }
`;

export const TileContactIcon = styled.span`
  padding: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${globalColor.blue.blue400};
  color: ${globalColor.white};

  ${media_breakpoint_down('md')} {
    width: 32px;
    height: 32px;
  }

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const TileContactTitle = styled.h4`
  margin: 0;
  color: ${globalColor.blue.blue500};
  font-size: ${rem(32)};
  line-height: 1.5;
  font-weight: 600;
  font-family: var(--font-poppins);
  text-transform: capitalize;

  ${media_breakpoint_down('lg')} {
    font-weight: 500;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(24)};
    line-height: 1.33;
  }
`;

export const TileContactBody = styled.div`
  flex: 1;
  > p {
    margin: 0;
    font-family: var(--font-poppins);
    color: ${globalColor.gray.gray110};

    strong {
      color: ${globalColor.black};
    }

    ${media_breakpoint_down('md')} {
      font-size: ${rem(14)};
      line-height: 1.42;
    }

    > a {
      color: ${globalColor.blue.blue400};
      transition: ${globalTransition.default};

      &:hover {
        color: ${globalColor.red.darkRed};
      }
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContactSection = styled.section`
  padding: 80px 0;
  background-color: ${globalColor.gray.gray300};

  ${media_breakpoint_down('xxl')} {
    padding: 60px 0;
  }

  ${media_breakpoint_down('lg')} {
    padding: 40px 0;
  }

  ${media_breakpoint_down('md')} {
    padding: 24px 0;
  }
`;

export const ContactHolder = styled.div`
  display: flex;
  gap: 60px;

  ${media_breakpoint_down('xxl')} {
    gap: 40px;
  }

  ${media_breakpoint_down('lg')} {
    flex-direction: column;
  }

  ${media_breakpoint_down('md')} {
    gap: 32px;
  }
`;

export const ContactItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: center;
`;

export const ContactItemTitle = styled.h2`
  margin: 0;
  max-width: 70%;
  font-family: var(--font-lato);
  font-size: ${rem(24)};
  line-height: 1.5;
  text-transform: uppercase;
  font-weight: 400;
  transition: ${globalTransition.default};

  ${media_breakpoint_down('lg')} {
    color: ${globalColor.blue.blue500};
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(16)};
  }
`;

export const ContactItemText = styled.p`
  margin: 0;
  max-width: 70%;

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
  }
`;

export const ContactItemImage = styled.picture`
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
  height: 100%;
  z-index: -1;
  opacity: 0;

  img {
    object-fit: cover;
  }

  ${media_breakpoint_down('lg')} {
    opacity: 1;
  }

  ${media_breakpoint_down('sm')} {
    width: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -40%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #FFF 41.12%, rgba(255, 255, 255, 0.75) 68.45%, rgba(255, 255, 255, 0.00) 100%);
    z-index: 1;
  }
`;

export const ContactFormWrapper = styled.div`
  height: 100%;
  flex: 1;
  padding: 32px 60px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  background-color: ${globalColor.white};
  border-radius: ${globalBorderRadius.big};
  box-shadow: 0px 2px 16px 0px rgba(10, 62, 108, 0.08);

  .kwes-form,
  .kwes-form-init {

    .input-group {
      width: 100%;
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
  }

  ${media_breakpoint_down('xxl')} {
    padding: 24px 32px;
  }

  ${media_breakpoint_down('lg')} {
    order: -1;
  }

  ${media_breakpoint_down('md')} {
    padding: 12px;
    row-gap: 8px;
  }
`;

export const ContactItem = styled(Link)`
  min-height: 160px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 4px;
  color: ${globalColor.white};
  background-color: ${globalColor.blue.blue550};
  border-radius: ${globalBorderRadius.middle};
  position: relative;
  z-index: 0;
  overflow: hidden;

  &:hover {
    background-color: ${globalColor.white};
    color: ${globalColor.blue.darkBlue};

    ${ContactItemTitle} {
      color: ${globalColor.blue.blue500};
    }

    ${ContactItemImage} {
      opacity: 1;
      transition: opacity 0.3s cubic-bezier(1, -0.4, 1, 1);
    }
  }

  ${media_breakpoint_down('xxl')} {
    min-height: 144px;
  }

  ${media_breakpoint_down('lg')} {
    min-height: 160px;
    background-color: ${globalColor.white};
    color: ${globalColor.blue.darkBlue};
  }

  ${media_breakpoint_down('md')} {
    min-height: 132px;
    padding: 12px;
  }
`;