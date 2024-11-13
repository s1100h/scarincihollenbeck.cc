import styled from 'styled-components';
import { PracticeTitle } from './PracticeCommon.style';
import { globalColor, rem } from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const WhyChooseUsSection = styled.div`
  padding: 40px 0;

  ${PracticeTitle} {
    margin: 0 0 12px 0;

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(28)};
      font-weight: 600;
      line-height: 36px;
      color: #000;
    }
  }

  ${media_breakpoint_down('md')} {
    margin: 0 0 32px 0;
  }
`;

export const WhyChooseUsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;

  ${media_breakpoint_exactly_down(1850)} {
    gap: 20px;
  }

  ${media_breakpoint_down('xl')} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 32px;
  }

  ${media_breakpoint_down('md')} {
    row-gap: 20px;
  }
`;
export const WhyChooseUsCardWrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 48px;
  border-radius: 4px;
  background: linear-gradient(98deg, #060b2a -0.14%, #377ec4 108.53%);
  overflow: hidden;

  ${media_breakpoint_exactly_down(1850)} {
    column-gap: 16px;
  }
`;
export const WhyChooseUsCardContent = styled.div`
  flex: 1;
  padding: 24px 0 24px 24px;
  color: ${globalColor.white};
  font-family: var(--font-poppins);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    margin: 0 0 4px 0;
    font-size: ${rem(24)};
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 1px;
    color: inherit;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(16)};
      line-height: 20px;
      letter-spacing: 0.64px;
    }
  }

  p {
    margin: 0;
    font-size: ${rem(16)};
    line-height: 28px;
    font-weight: 400;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(14)};
      line-height: 20px;
    }
  }

  ${media_breakpoint_exactly_down(1850)} {
    padding: 16px 0 16px 20px;
  }

  ${media_breakpoint_down('xl')} {
    padding: 12px 0 12px 16px;
  }

  ${media_breakpoint_down('sm')} {
    padding: 4px 8px;
  }
`;
export const WhyChooseUsCardImage = styled.div`
  width: 42%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  ${media_breakpoint_exactly_down(1850)} {
    width: 34%;
  }

  ${media_breakpoint_down('xl')} {
    width: 31%;
  }

  ${media_breakpoint_down('sm')} {
    display: none;
  }
`;
