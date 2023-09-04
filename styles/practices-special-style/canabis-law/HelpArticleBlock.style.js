import styled from 'styled-components';
import { WeAdviseThisBlockContainer } from './WeAdviseThisBlock.style';
import { cannabisLawColors } from '../../global_styles/Global.styles';
import { media_breakpoint_down } from '../../mediaBreakpoints.style';

export const HelpArticleBlockContainer = styled(WeAdviseThisBlockContainer)`
  background-image: none;
  background-color: ${cannabisLawColors.cannabisColorDarkGrayLight};

  article {
    margin-bottom: 0;
  }

  ${media_breakpoint_down('xl')} {
    .attorneys-article-box {
      h3 {
        font-size: 2.3rem;
      }

      p {
        width: 80%;
      }
    }
  }

  ${media_breakpoint_down('md')} {
    .attorneys-article-box {
      h3 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    .attorneys-article-box {
      h3 {
        font-size: 1.5rem;
        width: 70%;
        text-align: center;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;
