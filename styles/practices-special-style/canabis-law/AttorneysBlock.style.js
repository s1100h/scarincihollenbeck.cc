import styled from 'styled-components';
import { attorneyCardForCannabis, cannabisLawColors } from '../../global_styles/Global.styles';
import { media_breakpoint_down } from '../../mediaBreakpoints.style';

export const AttorneysCannabisContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${cannabisLawColors.cannabisColorDarkGray};
  padding-top: 140px;
  position: relative;

  .cannabis-big-leaf {
    position: absolute;
    width: 500px;
    height: 545px;
    bottom: 0;
    right: 310px;
    transform: rotate(68deg);
  }

  .attorney-card-box {
    ${attorneyCardForCannabis}
  }
	
  .attorneys-article-box {
    ${media_breakpoint_down('xl')} {
      p {
        width: 70%;
      }
    }

    ${media_breakpoint_down('lg')} {
      h3 {
				font-size: 2rem;
				width: 70%;
				text-align: center;
			}

      p {
        font-size: 1.2rem;
      }
    }

    ${media_breakpoint_down('md')} {
      h3 {
				width: 80%;
			}
			
      p {
        font-size: 1.1rem;
      }
		}

    ${media_breakpoint_down('sm')} {
      p {
        width: 90%;
				font-size: 1rem;
      }
    }
`;
