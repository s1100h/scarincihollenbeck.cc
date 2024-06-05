import styled from 'styled-components';
import {
  entAndMediaColors,
  globalColor,
  rem,
} from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const PracticesSection = styled.section`
  padding: 140px 0 120px;
  background-color: ${globalColor.black};

  ${media_breakpoint_exactly_down(1850)} {
    padding: 120px 0 100px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding: 100px 0 80px;
  }

  ${media_breakpoint_down('md')} {
    padding: 80px 0 60px;
  }
`;

export const PracticesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5%;

  ${media_breakpoint_exactly_down(1440)} {
    flex-direction: column;
    align-items: start;
    row-gap: 48px;
  }
`;
export const PracticesPreview = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  ${media_breakpoint_exactly_down(1440)} {
    align-items: flex-start;
    width: 380px;
  }

  ${media_breakpoint_down('md')} {
    align-items: flex-start;
    max-width: 343px;
    width: 100%;
  }
`;
export const PracticesTitle = styled.h2`
  font-family: var(--font-carilo);
  font-size: ${rem(84)};
  line-height: 100px;
  font-style: italic;
  font-weight: 400;
  color: ${entAndMediaColors.entAndMediaColorGold};

  ${media_breakpoint_exactly_down(1850)} {
    font-size: ${rem(64)};
  }

  ${media_breakpoint_exactly_down(1440)} {
    font-size: ${rem(48)};
    line-height: 72px;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(32)};
    line-height: 48px;
  }
`;
export const PracticesImage = styled.div`
  margin-left: auto;
  width: 428px;
  height: 98px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media_breakpoint_exactly_down(1850)} {
    width: 260px;
    height: 80px;
  }

  ${media_breakpoint_down('md')} {
    margin-left: 80px;
  }
`;
export const PracticesLinks = styled.ul`
  margin: 0;
  flex: 1;
  column-gap: 5%;
  column-count: 3;

  li {
    display: flex;
    align-items: flex-start;
    break-inside: avoid;

    ::before {
      content: '•';
      color: white;
      margin-right: 0.5em;
    }

    a {
      font-size: ${rem(16)};
      font-family: var(--font-poppins), sans-serif;
      font-weight: 400;
      line-height: 24px;
      color: ${globalColor.white};
      text-decoration: underline;
      transition: all 0.3s ease;
      display: block;

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    width: 100%;
  }

  ${media_breakpoint_down('md')} {
    column-count: 1;
  }
`;
