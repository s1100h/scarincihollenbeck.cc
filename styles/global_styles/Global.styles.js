import styled, { createGlobalStyle } from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_up,
} from '../mediaBreakpoints.style';
import 'react-toastify/dist/ReactToastify.css';

const mainFontSize = 16;

export const globalColor = {
  white: 'white',
  black: 'black',
  gray: {
    gray700: '#414141',
    gray500: '#929292',
    gray300: '#E4E4E5',
    gray150: '#B3B3B3',
    gray140: '#555555',
    gray130: '#4D4D4D',
    gray120: '#666',
    gray110: '#6A6A6A',
    gray1002: '#FBFBFB',
    gray100: '#424242',
    gray90: '#4a4a4a',
    gray80: '#5E5E5E',
    gray70: '#656565',
    gray60: '#727272',
    gray50: '#757575',
    gray40: '#888888',
    gray10: '#F2F2F2',
  },

  grayLite: {
    grayLite100: '#8F8F8F',
    grayLite90: '#9A9A9A',
    grayLite80: '#989898',
    grayLite70: '#A2A2A2',
    grayLite60: '#ACACAC',
    grayLite50: '#AAAAAA',
    grayLite40: '#B0B0B0',
  },

  grayExtraLite: {
    grayExtraLite100: '#ABABAB',
    grayExtraLite90: '#AEAEAE',
    grayExtraLite80: '#B8B8B8',
    grayExtraLite70: '#BDBDBD',
    grayExtraLite60: '#C1C1C1',
    grayExtraLite50: '#C3C3C3',
    grayExtraLite40: '#C7C7C7',
  },

  graySmoke: {
    smoke: '#D9D9D9',
    liteSmoke: '#ADADAD',
    extraLiteSmoke: '#BDBDBD',
    whiteSmoke: '#F0F0F0',
    liteWhiteSmoke: '#F5F5F5',
    extraLiteWhiteSmoke: '#FAFAFA',
  },

  red: {
    liteRed: '#D81110',
    darkRed: '#A91110',
    burgundy: '#60191B',
    darkBurgundy: '#381314',
    ultraLiteRed: '#F6A2A2',
    newRed: '#8F1B11',
    сoffee: '#450A05',
  },

  blue: {
    skyBlue: '#8DC0F2',
    greyBlue: '#37B7D7',
    dirtyBlue: '#5787CF',
    ultramarine: '#2564E1',
    darkBlue: '#060B2A',
    darkUltramarine: '#162153',
    lightBlue: '#8AD',
    blue400: '#568EDC',
    blue500: '#164587',
    blue550: '#31364F',
    blue600: '#377EC4',
    blue6002: '#242944',
  },

  yellow: {
    liteYellow: '#FCD503',
  },

  socialNetworks: {
    linkedIn: '#0077B5',
    faceBook: '#4267B2',
    twitter: '#1DA1F2',
  },
  transparentBlack: {
    modal: 'rgba(0,0,0,.75)',
  },
};

export const cannabisLawColors = {
  cannabisColorGray: '#EBE9E4',
  cannabisColorDarkGray: '#202020',
  cannabisTransparentBlack: '#0000009e',
  cannabisColorDarkGrayLight: '#313131',
};

export const entAndMediaColors = {
  entAndMediaColorGold: '#D1C09D',
  entAndMediaColorMediumGray: '#505050',
  entAndMediaColorGray: '#4F4F4F',
};

export const globalGradient = {
  award: 'linear-gradient(180deg, #101113 68.23%, #60191b 94.79%)',
};

export const globalShadow = {
  allSideShadow: `-10px 10px 19px 0px rgba(0, 0, 0, 0.06), 0px -7px 16px 0px rgba(0, 0, 0, 0.06)`,
  hoveredShadow: `-2px 0px 18px rgb(99 98 98 / 90%)`,
  blueShadow: `-2px 0px 18px ${globalColor.blue.ultramarine}`,
  shadowM: '0px 4px 12px 0px rgba(10, 62, 108, 0.06)',
};

export const globalBorderRadius = {
  big: '16px',
  middle: '12px',
  small: '8px',
  extraSmall: '4px',
};

const transitionDuration = 300;

export const globalTransition = {
  transitionDuration,
  default: `all ${transitionDuration}ms ease-out`,
};

export const buttonsHoverActive = `
  &:hover {
    background-color: ${globalColor.red.liteRed};
  }

  &:active {
    background-color: ${globalColor.red.burgundy};
  }
`;

export const globalIndents = {
  attorneyProfilePaddings: '20px 30px',
};

// this function adds rules with three dots after overfilling a container.
export const threeDots = (lines) => `
-webkit-line-clamp: ${lines};
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
`;

export const rem = (sizeInPx) => {
  return `${sizeInPx / mainFontSize}rem`;
};

export const imageCoverBlock = (imgUrl) =>
  `url(${imgUrl}) center/cover no-repeat;`;

export const paragraphStyles = `
	font-weight: 500;
	font-size: 1.35rem;
	text-align: center;
  font-family: var(--font-rajdhani), sans-serif;
  color: ${globalColor.white};
	text-transform: uppercase;
  width: 40%;
`;

export const UnderlinedLinkCss = `
  padding: 4px 0 2px;
  display: inline-flex;
  width: fit-content;
  color: ${globalColor.white};
  font-weight: 600;
  border-bottom: 2px solid ${globalColor.blue.skyBlue};
  text-transform: unset;
  transition: ${globalTransition.default};

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.blue.skyBlue};
    }
  }
  
  &:active {
    color: ${globalColor.blue.skyBlue};
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${mainFontSize}px;
    scroll-behavior: smooth;
  }

  * {
    ${media_breakpoint_up('lg')} {
      &::-webkit-scrollbar-track {
        background-color: #cbcbcb;
        border-radius: ${globalBorderRadius.small};
        opacity: 0;
      }

      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        background-color: #0B1136;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #162153;
        border-radius: ${globalBorderRadius.small};
      }

      // FireFox
      @supports not selector(::-webkit-scrollbar-thumb) {
        scrollbar-color: #162153 #cbcbcb;
        scrollbar-width: thin;
      }
    }
  }

  body {
    --bs-body-font-family: var(--font-poppins);
    font-weight: 400;
    background-color: ${globalColor.graySmoke.extraLiteWhiteSmoke};

    &.modal-open {
      padding-right: 0 !important;

      .offcanvas-backdrop {
        z-index: 1019;
      }
    }

    .margin-scroll {
      scroll-margin-top: calc(var(--header-height) + 80px);
    }

    &:has(.modal-open), 
    &:has(.sidebar-open),
    &:has(.navbar-content) {
      overflow: hidden;
    }

    &:has(.navbar-content) {
      ${media_breakpoint_down('lg')} {
        overflow: unset;
      }
    }
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  main {
    flex: 1;
  }

  a {
    text-decoration: none;
    color: ${globalColor.blue.ultramarine};
    transition: ${globalTransition.default};

      :hover {
        color: ${globalColor.red.darkRed};
      }
    }

  ul {
    list-style: none;
    padding: 0;
  }

  h1 {
    font-family: var(--font-poppins), sans-serif;
  }

  h2 {
    font-size: ${rem(38)};
    font-weight: 400;
  }

  h3 {
    color: ${globalColor.black};
    font-weight: 700;
    font-size: ${rem(28)};
    margin: 0;
  }

  h4, h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1.125rem;
  }

  input {
    border-radius: 0;
    border: 1px solid ${globalColor.grayExtraLite.grayExtraLite100};
    background-color: ${globalColor.graySmoke.liteWhiteSmoke};

    ::placeholder {
      color: ${globalColor.grayExtraLite.grayExtraLite80};
    }

    :active {
      border-color: ${globalColor.blue.ultramarine};
    }

    :focus-visible {
      border: 1px solid ${globalColor.blue.ultramarine};
    }
  }

  video {
    width: -webkit-fill-available;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &[disabled] {
      background-color: ${globalColor.grayLite.grayLite100};
    }
  }

  .content {
    h4 {
      font-weight: bold;
    }

    p {
      margin-bottom: 1.125rem;
      line-height: 1.7;
    }

    li {
      font-size: 1rem;
    }

    img {
      max-width: 100%;
    }
  }

  .slick-list {
    text-align: center;
  }

  .smallExcerpt {
    font-size: 13px;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 0;
  }

  .fs-1_2rem {
    font-size: 1.2rem;
  }

  .redTitle {
    color: ${globalColor.red.darkRed};
  }

  .light-scrollbar {
    * {
      &::-webkit-scrollbar-track {
        background-color: ${globalColor.blue.blue6002};
        border-radius: ${globalBorderRadius.small};
        opacity: 0;
      }

      &::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${globalColor.blue.blue400};
        border-radius: ${globalBorderRadius.small};
      }

      // FireFox
      @supports not selector(::-webkit-scrollbar-thumb) {
        scrollbar-color: ${globalColor.blue.blue400} ${
  globalColor.blue.blue6002
};
        scrollbar-width: thin;
      }
    }
  }

  /** Button Styling **/
  .btn-danger {
    font-weight: bold;
    background: linear-gradient(360deg, #901918 60%, #dd2624 100%), #333333;
  }

  /** Hide captcha in print **/
  @media print {
    .grecaptcha-badge {
      display: none !important;
    }
  }

  .kw-border-success {
    margin-left: 0;
  }

  /** Hide captcha in print **/
  @media print {
    .grecaptcha-badge {
      display: none !important;
    }
  }

  /** Handle center button styles from wordpress **/
  .aligncenter > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    height: 100%;
    object-fit: cover;
  }

  .aligncenter > figcaption {
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
  }

  .alignleft {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    float: left;
    margin-right: 24px;
    max-width: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .alignright {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    flex-direction: column;
    float: right;
    margin-left: 24px;
    max-width: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .wp-block-columns {
    display: flex;
  }

  .wp-block-column {
    flex: 1;
  }

  .wp-block-table {
    td {
      padding: 0 10px;
      border: 1px solid ${globalColor.grayExtraLite.grayExtraLite100};
    }
  }

  .has-text-align-center {
    text-align: center;
  }

  .wrapper-section {
    width: 1650px;
    max-width: 96%;
    margin: 0 auto 150px;
  }

  footer .wrapper-section {
    margin-bottom: 0;
  }

  .box-shadow {
    box-shadow: -2px 0 10px rgb(0 0 0 / 13%);
  }

  .dNone {
    display: none;
  }

  .modal-header_my {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 30px;
    position: relative;
    text-align: center;
  }

  .modal-title_my {
    font-weight: bold;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @media (max-width: 992px) {
    .wp-block-columns {
      display: block;
    }
  }

  @media (min-width: 576px) {
    .container {
      max-width: 90%;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 96%;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1440px;
      padding: 0 5%;
    }
  }

  @media only screen and (max-width: 768px) {
    .modal-dialog {
      margin: 0;
    }

    .modal-content {
      width: 90%;
      margin: 0 auto;
    }

    .wrapper-section {
      margin: 0 auto 70px;
    }
  }

  .modal-link {
    font-weight: bold;
    color: #a91110;
    margin-bottom: 10px;
  }

  .modal-link:hover {
    text-decoration: none;
    color: #a91110;
  }

  .hovered-client {
    img {
      :hover {
        border: 1px solid ${globalColor.grayExtraLite.grayExtraLite80};
      }
    }
  }

  .bullets-li {
    padding-left: 20px;
    position: relative;
    
    ::before {
      top: 0;
      left: 0;
      content: '➤';
      position: absolute;
    }
  }

  .slick-track {
    display: flex;
  }

  .key-contacts-title {
    color: ${globalColor.white};
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .attorneys-article-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 140px;

    h3 {
      font-size: ${rem(44)};
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 38px;
      color: ${globalColor.white};
    }

    p {
      ${paragraphStyles};
    }
  }
  
  .error-notify {
    &.Toastify__toast--error {
      border-radius: 0;
      background-color: ${globalColor.red.darkRed};
    }
  }
  
  .disclaimer {
    font-size: 1rem;
    font-weight: 700;
  }
  
  .tostify-custom {
    position: relative;
    border-radius: 0;
    padding: 0;

    .Toastify__progress-bar--wrp {
      position: absolute;
      bottom: auto;
    }
    
    .Toastify__toast-body {
      padding: 0;
    }

    .Toastify__progress-bar-theme--light {
      background: ${globalColor.blue.dirtyBlue};
    }
    .Toastify__progress-bar {
      border-bottom-left-radius: 0;
    }
  }

  .Toastify__close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .tag-two::before {
    content: ' - ';
  }

  .underlined-link {
    ${UnderlinedLinkCss};
  }
`;

export const ButtonLinkCss = `
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  width: 168px;
  transition: background 0.8s;
  background: ${globalColor.red.darkRed};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: ${globalColor.white};
  text-decoration: none;
  border-radius: ${globalBorderRadius.small};

  span {
    display: flex;
  }

  svg {
    display: none;
  }

  :hover {
    color: ${globalColor.white};
    text-decoration: none;
  }

  ${media_breakpoint_down('lg')} {
    width: 50px;

    span {
      display: none;
    }

    svg {
      display: block;
      height: 25px;
      width: 25px;
    }
  }
`;

export const beforeDoteStyledList = `
:before {
  content: '';
  width: 3px;
  height: 5px;
  margin-right: 5px;
  background-color: ${globalColor.black};
  position: absolute;
  left: -10px;
  top: 12px;
  border-radius: 1px;
}
`;

export const attorneyCardForCannabis = `
  border: 0;
  padding: 0;
  box-shadow: none;

  :hover {
    box-shadow: none;
  }

  > div {
    img {
      width: 166px;
      height: 166px;
      object-fit: cover;

      ${media_breakpoint_down('sm')} {
        width: 140px;
        height: 150px;
      }
    }

    section {
      h3 {
        margin: 0 0 2px 0;
        color: ${globalColor.white};
        font-family: var(--font-poppins);
        font-size: ${rem(20)};
        font-weight: 700;
        line-height: 30px;

        ${media_breakpoint_down('sm')} {
          font-size: ${rem(18)};
          line-height: 27px;
        }
      }

      p {
        margin: 0 0 20px 0;
        color: ${globalColor.white};
        font-family: var(--font-rajdhani);
        font-size: ${rem(16)};
        line-height: 24px;
        font-weight: 500;

        ${media_breakpoint_down('md')} {
          margin: 0 0 16px 0;
        }
      }

      address {
        row-gap: 8px;
        a {
          column-gap: 8px;

          svg {
            fill: ${globalColor.white};
          }

          span {
            font-size: ${rem(18)};
            font-family: var(--font-rajdhani);
            line-height: 27px;
            font-weight: 600;
            text-transform: uppercase;

            ${media_breakpoint_down('sm')} {
              font-size: ${rem(16)};
              line-height: 24px;
            }
          }
        }
      }
    }
  }
`;

export const successMessage = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: ${globalColor.white};
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  color: ${globalColor.black};

  :before {
    content: '';
    display: inline-block;
    width: 84px;
    height: 75px;
    background-image: url('/images/sh-mini-diamond-PNG.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
  }

  :after {
    content: 'Thank you for reaching out! We will get in touch with you soon.';
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const OptionalIndent = styled.div`
  margin-top: ${({ mt }) => (mt ? `${mt}px` : '0')};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : '0')};
`;
