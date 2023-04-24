import { createGlobalStyle } from 'styled-components'
import { media_breakpoint_down } from '../mediaBreakpoints.style'

const mainFotSize = 16

export const globalColor = {
  white: 'white',
  black: 'black',
  gray: {
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
  },

  blue: {
    greyBlue: '#37B7D7',
    dirtyBlue: '#5787CF',
    ultramarine: '#2564E1',
  },
  socialNetworks: {
    linkedIn: '#0077B5',
    faceBook: '#4267B2',
    twitter: '#1DA1F2',
  },
  trasparents: {
    modal: 'rgba(0,0,0,.175)',
  },
}

export const globalGradient = {
  award: 'linear-gradient(180deg, #101113 68.23%, #60191b 94.79%)',
}

export const globalShadow = {
  allSideShadow: `-10px 10px 19px 0px rgba(0, 0, 0, 0.06), 0px -7px 16px 0px rgba(0, 0, 0, 0.06)`,
  hoveredShadow: `-2px 0px 18px rgb(99 98 98 / 90%)`,
  blueShadow: `-2px 0px 18px ${globalColor.blue.ultramarine}`,
}

export const buttonsHoverActive = `
  &:hover {
    background-color: ${globalColor.red.liteRed};
  }

  &:active {
    background-color: ${globalColor.red.burgundy};
  }
`

export const globalBackgroundImage = {
  subHeader: '/images/skyscraper.png',
}

export const globalIndents = {
  attorneyProfilePaddings: '20px 30px',
}

// this function adds rules with three dots after overfilling a container.
export const threeDots = (lines) => `
-webkit-line-clamp: ${lines};
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
`

export const rem = (sizeInPx) => {
  return `${sizeInPx / mainFotSize}rem`
}

export const GlobalStyle = createGlobalStyle`

body {
  font-weight: 400;
  font-size: ${mainFotSize}px;
  background-color: ${globalColor.graySmoke.extraLiteWhiteSmoke};
  
  * {
    letter-spacing: .02rem;
  }
}

a {
  text-decoration: none;
  color: ${globalColor.blue.dirtyBlue};

  :hover {
    color: ${globalColor.red.darkRed};
  }
}

ul {
	list-style: none;
  padding: 0;
}

h1 {
  font-family: var(--font-KenjoI), sans-serif;
}

h2 {
  font-size: ${rem(38)};
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
    border-radius: 0 !important;
  }
}

video {
  width: var(-webkit-fill-available);
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

/** Handle center button styles from wordpress **/
.aligncenter > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
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
}

.alignright {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  flex-direction: column;
  float: right;
  margin-left: 24px;
}

.wp-block-columns {
  display: flex;
}

.wp-block-column {
  flex: 1;
}

.has-text-align-center {
  text-align: center;
}

@media (max-width: 992px) {
  .wp-block-columns {
    display: block;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 96%;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 92%;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 90%;
  }
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
`

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
`
