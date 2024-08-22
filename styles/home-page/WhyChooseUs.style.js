import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  globalShadow,
  globalTransition,
  rem,
} from '../global_styles/Global.styles';
import { media_breakpoint_down } from '../mediaBreakpoints.style';

export const WhyChooseUsSection = styled.section`
  padding: 60px 0;
  background-color: ${globalColor.gray.gray10};

  ${media_breakpoint_down('md')} {
    padding: 40px 0;
  }
`;

export const WhyChooseUsHolder = styled.div`
  display: flex;
  align-items: center;
  column-gap: 60px;

  ${media_breakpoint_down('xxl')} {
    gap: 32px;
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
  }
`;

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 45%;

  ${media_breakpoint_down('xxl')} {
    width: 39%;
  }

  ${media_breakpoint_down('xl')} {
    width: 100%;
    row-gap: 24px;
  }
`;

export const ArticleBoxSimple = styled.article`
  p {
    margin-bottom: 12px;
    color: ${globalColor.gray.gray110};
    font-weight: 400;
    font-style: normal;
    line-height: 24px;

    &:last-child {
      margin: 0;
    }

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(14)};
    }
  }
`;

export const WhyChooseUsTitle = styled.h2`
  color: ${globalColor.blue.darkBlue};
  font-size: ${rem(32)};
  font-weight: 600;
  line-height: 44px;
  margin-bottom: 16px;

  ${media_breakpoint_down('sm')} {
    margin-bottom: 8px;
    font-size: ${rem(20)};
    line-height: 1.4;
  }
`;

export const ArticleList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: var(--font-lato);
    text-transform: uppercase;
    color: ${globalColor.blue.blue500};

    p {
      margin: 0;
      padding: 0;
      font-size: ${rem(24)};
      line-height: 36px;

      ${media_breakpoint_down('sm')} {
        font-size: 1rem;
        line-height: 1.5;
      }
    }

    > svg {
      flex-shrink: 0;

      ${media_breakpoint_down('sm')} {
        width: 24px;
        height: 24px;
      }
    }

    ${media_breakpoint_down('xl')} {
      width: calc((100% - 24px) / 2);
    }

    ${media_breakpoint_down('md')} {
      width: 100%;
    }
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

export const FocusedServicesCards = styled.ul`
  --focused-cards-gap: 40px;
  margin: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--focused-cards-gap);

  > :nth-child(even) {
    margin-top: var(--focused-cards-gap);

    ${media_breakpoint_down('md')} {
      margin: 0;
    }
  }

  > :nth-child(odd) {
    margin-bottom: var(--focused-cards-gap);

    ${media_breakpoint_down('md')} {
      margin: 0;
    }
  }

  li {
    width: calc((100% - var(--focused-cards-gap)) / 2);

    ${media_breakpoint_down('md')} {
      width: 100%;
    }
  }

  ${media_breakpoint_down('xxl')} {
    --focused-cards-gap: 32px;
  }

  ${media_breakpoint_down('xl')} {
    --focused-cards-gap: 24px;
  }

  ${media_breakpoint_down('md')} {
    row-gap: 24px;
  }
`;

export const FocusedCardBox = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 23px;
  align-items: center;
  border-radius: ${globalBorderRadius.middle};
  box-shadow: ${globalShadow.shadowM};
  background-color: ${globalColor.white};
  border: 1px solid transparent;
  transition: ${globalTransition.default};

  > svg {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    color: ${globalColor.blue.darkBlue};
    transition: ${globalTransition.default};

    ${media_breakpoint_down('sm')} {
      margin-bottom: 12px;
      width: 40px;
      height: 40px;
    }
  }

  .focused-card-title {
    margin-bottom: 12px;
    color: ${globalColor.blue.darkBlue};
    font-size: ${rem(20)};
    line-height: 32px;
    font-weight: 600;
    text-align: center;

    ${media_breakpoint_down('sm')} {
      margin-bottom: 8px;
      font-size: ${rem(18)};
      line-height: 1.56;
    }
  }

  p {
    text-align: center;
    color: ${globalColor.gray.gray110};
    font-weight: 400;
    font-style: normal;
    line-height: 24px;

    &:last-child {
      margin: 0;
    }

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(14)};
    }
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${globalColor.blue.blue400};

      svg {
        color: ${globalColor.blue.blue400};
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    padding: 12px;
  }
`;
