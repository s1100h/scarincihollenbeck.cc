import Link from "next/link";
import styled from "styled-components";
import { globalColor, globalTransition, rem } from "./global_styles/Global.styles";
import { media_breakpoint_down } from "./mediaBreakpoints.style";

export const IndustriesWrapper = styled.section`
  padding: 60px 0;
`;

export const IndustriesHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${media_breakpoint_down('md')} {
    row-gap: 20px;
  }
`;

export const IndustriesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  .separated-title {
    width: calc(33.33% - 12px);

    .title-text {
      max-width: 211px;

      ${media_breakpoint_down('lg')} {
        max-width: 100%;
      }
    }

    ${media_breakpoint_down('lg')} {
      width: 100%;
    }
  }

  > p {
    margin: 0;
    flex: 1;
    color: ${globalColor.blue.darkBlue};

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(14)};
      line-height: 1.43;
    }
  }

  ${media_breakpoint_down('lg')} {
    flex-direction: column;
    align-items: flex-start;

    br {
      display: none;
    }
  }

  ${media_breakpoint_down('md')} {
    row-gap: 8px;
  }
`;

export const IndustriesCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 24px;

  ${media_breakpoint_down('lg')} {
    column-gap: 24px;
  }
`;

export const IndustriesCardWrapper = styled.article`
  flex: 1 1 calc((100% - 80px) / 3);
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border-left: 1px solid ${globalColor.gray.gray500};
  transition: ${globalTransition.default};

  &:hover {
    border-color: ${globalColor.blue.blue400};
    background-color: ${globalColor.gray.gray1002};
    .icon {
      color: ${globalColor.blue.blue400};
    }

    .title {
      color: ${globalColor.blue.blue400};
    }

  }

  ${media_breakpoint_down('lg')} {
    flex-basis: calc((100% - 24px) / 2);
  }

  ${media_breakpoint_down('md')} {
    flex-basis: 100%;
  }

  ${media_breakpoint_down('sm')} {
    padding: 8px;
  }
`;

export const IndustriesCardIcon = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${globalTransition.default};
  color: ${globalColor.blue.darkBlue};
`;

export const IndustriesCardTitle = styled.h3`
  color: ${globalColor.blue.darkBlue};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  transition: ${globalTransition.default};

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(14)};
    line-height: 1.43;
  }
`;

export const IndustriesCardText = styled.p`
  margin: 0;
  color: ${globalColor.gray.gray110};
  font-size: ${rem(12)};
  line-height: 1.67;
  font-family: var(--font-lato);
  text-transform: uppercase;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;