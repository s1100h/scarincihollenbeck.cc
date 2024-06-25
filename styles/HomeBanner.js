import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { globalColor, rem } from './global_styles/Global.styles';

export const BannerContainer = styled.div`
  background-size: cover;
  display: flex;
  margin-bottom: 1.5em;
  height: fit-content;
  position: relative;

  :before {
    display: block;
    content: '';
    height: calc(100% + 115px);
    width: 50%;
    position: absolute;
    background: url(/images/photo-first-screen.webp) no-repeat right bottom /
      contain;
    right: 0;
    z-index: -1;
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
    :before {
      height: 100%;
    }
  }

  /** Banner Image **/
  .redBanner {
    width: 1650px;
    margin: 0 auto;
    max-width: 96%;
  }

  .homeBannerContainer {
    color: #fff;
    padding: 1em;
  }

  .text {
    font-family: var(--font-poppins), sans-serif;
    font-weight: 400;
    font-size: ${rem(165)};
    line-height: 151px;
    color: ${globalColor.black};

    > span {
      display: block;
      margin-bottom: 1rem;
    }
  }

  .text:first-child {
    font-family: var(--font-poppins), sans-serif;
    font-size: 45px;
    line-height: 1;
    color: ${globalColor.gray.gray80};
  }

  .quote {
    display: flex;
    width: 65%;
    font-style: italic;
    font-size: 20px;
    line-height: 1.8;
    letter-spacing: 0.05rem;
    color: ${globalColor.gray.gray40};
  }

  .quote:before {
    margin-right: 10px;
    display: block;
    content: url(/images/quote.webp);
  }

  @media (max-width: 1100px) {
    .text {
      font-size: 100px;
    }
    .text:first-child {
      font-size: 36px;
      margin-bottom: 0;
    }
  }
  .rowProfileDetails {
    display: flex;
  }
  .ProfileDetails {
    width: 60%;
  }
  @media (max-width: 768px) {
    .quote {
      width: 80%;
      font-size: 16px;
    }
    .text {
      font-size: 60px;
      line-height: 1;
    }
    .text:first-child {
      font-size: 2.4em;
      margin-bottom: 20px;
    }
  }
`;
