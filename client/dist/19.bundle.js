(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{889:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0});var a=s(l(0)),n=s(l(3)),i=s(l(178)),o=l(22),r=s(l(179));function s(e){return e&&e.__esModule?e:{default:e}}l(951);var u=function(e){var t=e.onClick;return a.default.createElement(o.FaAngleDoubleRight,{className:"featured-slider-arrow right",role:"button",tabIndex:"0",onKeyPress:t,onClick:t})},c=function(e){var t=e.onClick;return a.default.createElement(o.FaAngleDoubleLeft,{className:"featured-slider-arrow left",role:"button",tabIndex:"0",onKeyPress:t,onClick:t})},d=function(e){var t=e.highlightReal,l={centerMode:!0,infinite:!0,slidesToShow:3,dots:!1,autoplay:!0,autoplaySpeed:4e3,adaptiveHeight:!0,nextArrow:a.default.createElement(u,null),prevArrow:a.default.createElement(c,null),responsive:[{breakpoint:1690,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1}}]};return a.default.createElement("div",{className:"mt-4 w-100 d-block practice-news-list"},a.default.createElement(i.default,l,t.map((function(e){return a.default.createElement("div",{key:e.id,className:"article-card"},a.default.createElement("img",{src:e.image?e.image:r.default,alt:e.title,width:"212",className:"img-thumbnail mx-auto d-block mt-3"}),a.default.createElement("h5",{className:"my-3 text-center small-excerpt"},e.title))}))))};u.propTypes={onClick:n.default.func},u.defaultProps={onClick:function(){}},c.propTypes={onClick:n.default.func},c.defaultProps={onClick:function(){}},d.propTypes={highlightReal:n.default.arrayOf(n.default.object)},d.defaultProps={highlightReal:[]},t.default=d},951:function(e,t,l){}}]);