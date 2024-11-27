import styled from 'styled-components';
import {
  cannabisLawColors,
  globalBorderRadius,
  globalColor,
  rem,
} from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';

export const AttorneysAreaContainer = styled.div`
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'auto')};
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, 188px);
  align-items: end;

  ${media_breakpoint_exactly_down(1850)} {
    gap: 12px;
  }

  ${media_breakpoint_exactly_down(1439)} {
    gap: 20px;
  }

  ${media_breakpoint_down('md')} {
    justify-content: flex-start;
  }

  ${media_breakpoint_down('sm')} {
    gap: 0;
    grid-template-columns: repeat(auto-fit, 175px);
  }
`;

export const AttorneysAreaChair = styled.div`
  height: 100%;
  margin: 0;
  background-color: ${globalColor.blue.blue500};
  border-radius: ${globalBorderRadius.extraSmall};
`;

export const AttorneyAreaTitle = styled.h3`
  padding: 2px 4px 0;
  margin: 0;
  color: ${globalColor.gray.gray10};
  font-family: var(--font-poppins);
  font-size: ${rem(20)};
  line-height: 32px;
  font-weight: 600;
`;

export const AttorneysAreaBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 48px;

  ${media_breakpoint_down('xxl')} {
    row-gap: 32px;
  }
`;

export const AttorneysAreaCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--cards-gap);
`;

export const AttorneysCannabisAreaContainer = styled.div`
  --cards-gap: 40px;
  display: flex;
  gap: var(--cards-gap);
  position: relative;
  z-index: 1;

  ${media_breakpoint_down('xxl')} {
    --cards-gap: 32px;
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
    row-gap: 60px;
  }

  ${media_breakpoint_down('md')} {
    --cards-gap: 24px;
    row-gap: 40px;
  }

  ${AttorneyAreaTitle} {
    padding: 0;
    color: ${cannabisLawColors.cannabisColorGray};
    font-size: ${rem(54)};
    line-height: 1.3;
    text-transform: uppercase;

    ${media_breakpoint_down('xxl')} {
      font-size: ${rem(36)};
    }

    ${media_breakpoint_down('md')} {
      font-size: ${rem(32)};
    }
  }
`;

export const AttorneysMediaAreaContainer = styled.div`
  --cards-gap: 40px;
  display: flex;
  gap: 40px;

  ${media_breakpoint_exactly_down(1440)} {
    --cards-gap: 32px;
    flex-direction: column;
    gap: 32px;
  }

  ${media_breakpoint_down('lg')} {
    gap: 28px;
    --cards-gap: 16px;
  }

  ${AttorneyAreaTitle} {
    padding: 0;
    color: ${globalColor.black};
    font-family: var(--font-poppins), sans-serif;
    font-size: ${rem(36)};
    font-weight: 500;
    line-height: 1.5;
    text-transform: none;

    ${media_breakpoint_exactly_down(1440)} {
      font-size: ${rem(32)};
    }

    ${media_breakpoint_down('md')} {
      font-size: ${rem(24)};
    }
  }

  ${AttorneysAreaBlock} {
    row-gap: 32px;

    ${media_breakpoint_down('xxl')} {
      row-gap: 28px;
    }

    ${media_breakpoint_down('xl')} {
      row-gap: 24px;
    }

    ${media_breakpoint_down('md')} {
      row-gap: 20px;
    }
  }

  ${AttorneysAreaCards} {
    ${media_breakpoint_exactly_down(1440)} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 16px;
      row-gap: 20px;
    }

    ${media_breakpoint_down('md')} {
      grid-template-columns: 1fr;
      row-gap: 16px;
    }
  }
`;
