(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{884:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0});var a=s(l(0)),n=s(l(3)),r=s(l(179)),i=l(23),o=l(14),c=s(l(180));function s(e){return e&&e.__esModule?e:{default:e}}l(947);var d=function(e){var t=e.onClick;return a.default.createElement(i.FaAngleDoubleRight,{className:"featured-slider-arrow right",role:"button",tabIndex:"0",onKeyPress:t,onClick:t})},u=function(e){var t=e.onClick;return a.default.createElement(i.FaAngleDoubleLeft,{className:"featured-slider-arrow left",role:"button",tabIndex:"0",onKeyPress:t,onClick:t})},f=function(e){var t=e.content.filter((function(e,t){return t<8})),l={centerMode:!0,infinite:!0,slidesToShow:3,dots:!0,adaptiveHeight:!0,lazyLoad:!0,nextArrow:a.default.createElement(d,null),prevArrow:a.default.createElement(u,null),responsive:[{breakpoint:1690,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1}}]};return a.default.createElement("div",{className:"mt-4 w-100 d-block practice-news-list"},t.length>3?a.default.createElement(r.default,l,t.map((function(e){return a.default.createElement("div",{key:(0,o.addRandomKey)(e.title),className:"article-card"},a.default.createElement("a",{href:e.slug},a.default.createElement("img",{src:e.image?e.image:c.default,alt:e.title,width:"212",className:"img-thumbnail mx-auto d-block mt-3"}),a.default.createElement("h5",{className:"my-3 text-center small-excerpt"},e.title)))}))):a.default.createElement("div",{className:"container"},a.default.createElement("div",{className:"row"},t.map((function(e){return a.default.createElement("div",{key:(0,o.addRandomKey)(e.title),className:"col-sm-12 col-md-4 article-card"},a.default.createElement("a",{href:e.link},a.default.createElement("img",{src:e.image?e.image:c.default,alt:e.title,className:"img-thumbnail mt-3"}),a.default.createElement("h5",{className:"my-3 small-excerpt"},e.title)))})))))};d.propTypes={onClick:n.default.func},d.defaultProps={onClick:function(){}},u.propTypes={onClick:n.default.func},u.defaultProps={onClick:function(){}},f.propTypes={content:n.default.arrayOf(n.default.object)},f.defaultProps={content:[]},t.default=f},947:function(e,t,l){}}]);