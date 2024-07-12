import styled from 'styled-components';
import { globalColor, globalShadow, rem } from '../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';

export const WhyChooseUsSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${globalColor.gray.gray10};

  ${media_breakpoint_exactly_down(1280)} {
    > div {
      justify-content: space-between;
    }
  }
  ${media_breakpoint_exactly_down(1080)} {
    > div {
      flex-direction: column;
    }
  }
`;

export const ArticleBlock = styled.div`
  padding-top: 76px;
  width: 50%;
  margin-right: 60px;

  ${media_breakpoint_down('xxl')} {
    width: 39%;
  }
  ${media_breakpoint_exactly_down(1440)} {
    margin-right: 32px;
  }

  ${media_breakpoint_exactly_down(1280)} {
    width: 32%;
    margin-right: 0;
  }

  ${media_breakpoint_exactly_down(1080)} {
    padding-top: 0;
    width: 100%;
  }
`;

export const ArticleBoxSimple = styled.article`
  margin-bottom: 40px;

  h3 {
    font-size: ${rem(32)};
    font-weight: 600;
    line-height: 44px;
    margin-bottom: 16px;
  }
  p {
    color: ${globalColor.gray.gray110};
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
  }

  ${media_breakpoint_exactly_down(1080)} {
    margin-bottom: 24px;
  }
`;

export const ArticleList = styled.ul`
  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: var(--font-lato);
    text-transform: uppercase;
    color: ${globalColor.blue.blue500};
    margin-bottom: 28px;

    p {
      margin: 0;
      padding: 0;
      font-size: ${rem(24)};
      line-height: 36px;
    }
  }

  ${media_breakpoint_exactly_down(1080)} {
    column-count: 2;
  }

  ${media_breakpoint_exactly_down(494)} {
    column-count: initial;

    p {
      font-size: 1rem;
    }
  }
`;

export const FocusedServicesCards = styled.ul`
  display: flex;
  gap: 40px;
  flex-direction: column;
  height: 640px;
  flex-wrap: wrap;

  > :nth-child(3) {
    margin-top: 32px;
  }

  li {
    width: 360px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    gap: 32px;
    height: 681px;
    li {
      width: 320px;
    }
  }

  ${media_breakpoint_exactly_down(1080)} {
    width: fit-content;
  }

  ${media_breakpoint_exactly_down(768)} {
    height: 776px;
    margin-left: auto;
    margin-right: auto;
    li {
      width: 260px;
    }
  }

  ${media_breakpoint_exactly_down(576)} {
    flex-wrap: nowrap;
    height: auto;

    li {
      width: 100%;
    }
    > :nth-child(3) {
      margin-top: 0;
    }
  }
`;
export const FocusedCardBox = styled.article`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  border-radius: 12px;
  box-shadow: ${globalShadow.shadowM};
  background-color: ${globalColor.white};

  & > :first-child {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  .focused-card-title {
    font-size: ${rem(20)};
    font-weight: 600;
  }

  p {
    color: ${globalColor.gray.gray110};
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
  }
`;
