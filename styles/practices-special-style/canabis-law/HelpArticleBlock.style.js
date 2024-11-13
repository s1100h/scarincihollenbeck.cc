import styled from 'styled-components';
import { WeAdviseThisBlockContainer } from './WeAdviseThisBlock.style';
import { cannabisLawColors, rem } from '../../global_styles/Global.styles';
import { media_breakpoint_down } from '../../mediaBreakpoints.style';

export const HelpArticleBlockContainer = styled(WeAdviseThisBlockContainer)`
  background-image: none;
  background-color: ${cannabisLawColors.cannabisColorDarkGrayLight};

  article {
    margin-bottom: 0;
  }

  .attorneys-article-box {
    h2 {
      margin: 0 0 48px 0;
      color: ${cannabisLawColors.cannabisColorGray};
      font-family: var(--font-poppins), sans-serif;
      font-size: ${rem(54)};
      line-height: 70px;
      font-weight: 600;
      text-transform: uppercase;

      ${media_breakpoint_down('xxl')} {
        margin: 0 0 32px 0;
        font-size: ${rem(36)};
        line-height: 47px;
      }

      ${media_breakpoint_down('md')} {
        font-size: ${rem(32)};
        line-height: 42px;
      }
    }

    p {
      margin: 0 0 32px 0;
      font-size: ${rem(20)};
      font-weight: 500;
      line-height: 30px;
      color: ${cannabisLawColors.cannabisColorGray};
      width: 100%;
      max-width: 725px;

      ${media_breakpoint_down('xxl')} {
        margin: 0 0 24px 0;
        font-size: ${rem(16)};
        line-height: 24px;
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    .attorneys-article-box {
      width: 80%;

      h2 {
        font-size: 2.3rem;
        text-align: center;
      }

      p {
        width: 100%;
      }
    }
  }

  ${media_breakpoint_down('md')} {
    .attorneys-article-box {
      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1rem;
        max-width: 525px;
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    .attorneys-article-box {
      width: 100%;
      align-items: start;
      h2 {
        font-size: 1.5rem;
        text-align: start;
      }

      p {
        text-align: start;
        line-height: 24px;
      }
    }
  }
`;
