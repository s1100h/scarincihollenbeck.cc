import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'
import { globalColor } from './global_styles/Global.styles'

export const BannerContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
  background-size: cover;
  display: flex;
  margin-bottom: 1.5em;
  height: fit-content;

  :before {
    display: block;
    content: '';
    height: 63vh;
    width: 50%;
    position: absolute;
    background-image: url(/images/photo-first-screen.webp);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    right: 0;
    z-index: -1;
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
    :before {
      height: 77vh;
      bottom: 0;
      background-position: right bottom;
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
    font-family: var(--font-KenjoI);
    font-weight: 400;
    font-size: 150px;
    line-height: 151px;
    color: #000000;
  }

  .text:first-child {
    font-family: var(--font-GothamPro), sans-serif;
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
`
