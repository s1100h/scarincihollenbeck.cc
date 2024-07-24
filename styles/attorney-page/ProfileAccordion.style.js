import styled, { css } from "styled-components";
import { StandardLightBlueButton } from "styles/Buttons.style";
import { globalBorderRadius, globalColor, globalShadow, globalTransition, rem } from "styles/global_styles/Global.styles";
import { media_breakpoint_down } from "styles/mediaBreakpoints.style";

export const ProfileAccordionWrapper = styled.section`
  padding: 60px 0;

  ${media_breakpoint_down('md')} {
    padding: 40px 0;
  }
`;

export const ProfileAccordionHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .accordion {
    margin: 0;
    display: flex;
    flex-direction: column;
    row-gap: inherit;
    --bs-accordion-btn-icon: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3e%3cpath d='M6 9L12 15L18 9' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
    --bs-accordion-btn-active-icon: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3e%3cpath d='M6 9L12 15L18 9' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
    --bs-accordion-btn-icon-width: 24px;
  }

  .accordion-item {
    border-radius: 0;
    border: none;
  }

  .accordion-button {
    padding: 16px;
    background-color: ${globalColor.blue.blue6002};
    color: ${globalColor.white};
    font-size: ${rem(20)};
    line-height: 1.6;
    font-weight: 600;
    border-radius: ${globalBorderRadius.small};
    border: none;
    box-shadow: ${globalShadow.shadowM};

    &:not(.collapsed) {
      border-radius: ${globalBorderRadius.small} ${globalBorderRadius.small} 0 0;
    }

    ${media_breakpoint_down('md')} {
      padding: 12px;
      font-size: ${rem(18)};
      line-height: 1.56;
    }
  }

  .accordion-body {
    padding: 12px 16px;
    border-radius: 0 0 ${globalBorderRadius.small} ${globalBorderRadius.small};
    background-color: ${globalColor.white};
    box-shadow: ${globalShadow.shadowM};

    ${media_breakpoint_down('md')} {
      padding: 12px;
    }
  }

  .disclaimer {
    margin: 0;
    text-align: center;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(14)};
    }
  }
`;

export const ProfileAccordionBody = styled.div`

  ul {
    margin: 0 0 12px 0;
    list-style: disc;
    display: grid;
    row-gap: 8px;
    column-gap: 24px;
    grid-template-columns: ${({ $columnsCount = 1 }) => `repeat(${$columnsCount}, 1fr)`};

    li {
      margin: 0 0 0 20px;
      color: ${globalColor.blue.darkBlue};

      &.bullets-li {
        padding-left: 0;
        position: static;

        &::before {
          content: none;
        }
      }

      &::marker {
        color: ${globalColor.blue.blue400};
      }

      a {
        color: inherit;
        font-weight: 500;
        transition: ${globalTransition.default};

        &:hover {
          color: ${globalColor.blue.skyBlue};
        }
      }

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(14)};
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    ${media_breakpoint_down('lg')} {
      grid-template-columns: ${({ $columnsCount }) => `${$columnsCount > 0 ? `repeat(2, 1fr)` : '1fr'}`};
    }

    ${media_breakpoint_down('sm')} {
      grid-template-columns: 1fr;
    }
  }

  p {
    margin: 0 0 12px 0;
    color: ${globalColor.blue.darkBlue};

    &:last-child {
      margin-bottom: 0;
    }

    a {
      transition: ${globalTransition.default};
    }
  }

  h5 {
    margin: 12px 0 4px 0;
    color: ${globalColor.blue.darkBlue};
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 600;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${StandardLightBlueButton} {
    margin-bottom: 12px;
    width: max-content;
  }
`;

export const ProfileClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ClientsSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const ClientsSliderTitle = styled.h2`
  margin: 0;
  color: ${globalColor.blue.darkBlue};
  font-size: ${rem(20)};
  line-height: 1.6;
  font-weight: 600;

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(18)};
    line-height: 1.56;
  }
`;

export const ClientsSliderCard = styled.div`
  width: 162px;
  height: 162px;
  background-color: ${globalColor.white};
  border-radius: ${globalBorderRadius.small};
  overflow: hidden;
  border: 1px solid transparent;
  transition: ${globalTransition.default};

  ${({ $isLink }) =>
    $isLink &&
    css`
      &:hover {
        border-color: ${globalColor.blue.skyBlue};
      }
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;