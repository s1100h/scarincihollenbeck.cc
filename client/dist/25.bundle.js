(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{909:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(0)),n=r(a(3)),m=r(a(178));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.main;return l.default.createElement("article",null,t.map((function(e){return l.default.createElement("div",{className:"main",key:e.title},l.default.createElement("a",{href:e.link},l.default.createElement("img",{src:e.image?e.image:m.default,className:"img-fluid",alt:e.title})),l.default.createElement("p",{className:"mt-5 mb-4"},l.default.createElement("a",{href:e.category.link,className:"text-muted ft-01 text-uppercase"},e.category.name)),l.default.createElement("h1",{className:"mb-4 mt-3 display-4"},l.default.createElement("a",{href:e.link},e.title)),l.default.createElement("p",{className:"text-muted mt-4 mb-4 mr-4"},e.excerpt),l.default.createElement("hr",null),l.default.createElement("p",{className:"mt-4 mb-4 ft-13"},l.default.createElement("span",{className:"text-black"},"BY "),e.author.map((function(t,a){return a<e.author.length-1?l.default.createElement("a",{key:t.name,href:t.link,className:"text-black text-uppercase"},l.default.createElement("u",null,t.name+",")," "):l.default.createElement("a",{key:t.name,href:t.link,className:"text-black text-uppercase"},l.default.createElement("u",null,t.name))}))))})))};u.propTypes={main:n.default.arrayOf(n.default.object)},u.defaultProps={main:[]},t.default=u}}]);