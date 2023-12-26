import styled from "styled-components";
import { globalColor, rem } from "./global_styles/Global.styles";


export const FaqWrapper = styled.section`
  margin-bottom: 40px;

  .accordion {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    --bs-accordion-btn-icon: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3e%3cpath d='M6 9L12 15L18 9' stroke='%23231E1E' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
    --bs-accordion-btn-active-icon: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3e%3cpath d='M6 9L12 15L18 9' stroke='%23231E1E' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
    --bs-accordion-btn-icon-width: 24px;

    &-item {
      padding-bottom: 8px;
      background-color: #AFDCF5;
      box-shadow: 0px 0px 8px 0px rgba(10, 33, 65, 0.22);
      border-radius: 0;
      border: none;
    }

    &-header {
      margin: 0;
      color: #231E1E;
      font-family: var(--font-poppins);
      font-size: ${rem(16)};
      font-weight: 600;
      line-height: 24px;
    }

    &-button {
      border: none;
      background-color: transparent;
      box-shadow: none;
      padding: 20px 24px 12px 24px;
      border-radius: 0;
      color: #231E1E;
      font-weight: 600;
    }

    &-body {
      padding: 0 24px 12px;
      color: ${globalColor.gray.gray80};
      font-size: ${rem(16)};
      line-height: 24px;
      font-weight: 400;
      font-family: var(--font-poppins);
    }

  }
`;