(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{896:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0});var l=m(t(0)),r=m(t(3)),n=t(14);function m(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var a=e.author;return l.default.createElement("div",{className:"w-100 hide-print mt-5"},a?a.map((function(e){return l.default.createElement("div",{key:(0,n.addRandomKey)(e.name),className:"mb-2"},l.default.createElement("h4",{className:"bg-light-gray"},"About Author"," ",e.name),l.default.createElement("div",{className:"card flex-row flex-wrap mt-4 mh-160"},l.default.createElement("img",{src:e.image,alt:e.name,className:"img-thumbnail m-3 mw-19"}),l.default.createElement("p",{className:"small-excerpt w-75 mt-3 mb--1"},l.default.createElement("span",{dangerouslySetInnerHTML:(0,n.createMarkup)(e.bio),className:"d-block mb-3"}),"Scarinci Hollenbeck"!==e.name?l.default.createElement("a",{href:e.link,className:"btn-sm small-excerpt btn-danger"},"Full Biography >>"):"")))})):"")};c.propTypes={author:r.default.arrayOf(r.default.object)},c.defaultProps={author:[]},a.default=c}}]);