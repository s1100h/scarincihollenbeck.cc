import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/** Fonts **/
@font-face {
  font-family: 'Proxima Nova Regular';
  src: url('/fonts/proxima-nova-regular.ttf');
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Proxima Nova Bold';
  src: url('/fonts/proxima-nova-bold.ttf');
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'Proxima Nova Italic';
  font-style: italic;
  font-weight: 500;
  src: url('/fonts/proxima-nova-italic.ttf');
  font-display: swap;
}

@font-face {
  font-family: 'Kenjo I';
  src: url('/fonts/KenjoI.eot');
  src: local('Kenjo I'), local('KenjoI'),
    url('/fonts/KenjoI.eot?#iefix') format('embedded-opentype'),
    url('/fonts/KenjoI.woff2') format('woff2'), url('/fonts/KenjoI.woff') format('woff'),
    url('/fonts/KenjoI.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Gotham Pro';
  src: local('Gotham Pro Bold'), local('Gotham-Pro-Bold'),
    url('/fonts/GothamPro-Bold.woff2') format('woff2'),
    url('/fonts/GothamPro-Bold.woff') format('woff'),
    url('/fonts/GothamPro-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Gotham Pro';
  src: local('Gotham Pro Regular'), local('Gotham-Pro-Regular'),
    url('/fonts/GothamPro.woff2') format('woff2'), url('/fonts/GothamPro.woff') format('woff'),
    url('/fonts/GothamPro.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Brand';
  src: local('Brand'), url('/fonts/Brand.otf') format('otf'),
    url('/fonts/Brand.woff') format('woff'), url('/fonts/Brand.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Gotham Pro' !important;
  font-weight: 500;  
}

a {
  color: #3344dd;
}

a:hover {
  color: inherit;
}

strong {
  font-family: 'Gotham Pro';
}

em {
  font-family: 'Proxima Nova Italic';
}

ul {
	list-style: none;
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

.wrapper-section {
  width: 1650px;
  max-width: 96%;
  margin: 0 auto 150px;
}

@media only screen and (max-width: 768px) {
  .wrapper-section {
    margin: 0 auto 70px;
  }
}

footer .wrapper-section {
  margin-bottom: 0;
}

.box-shadow {
  box-shadow: -2px 0px 10px rgb(0 0 0 / 13%);
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

.close_modal {
  position: absolute;
  right: 20px;
  top: 20px;
}

@media only screen and (max-width: 768px) {
  .modal-dialog {
    margin: 0;
  }
  .modal-content {
    width: 90%;
    margin: 0 auto;
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
export const globalColor = {
  black: 'black',
}
