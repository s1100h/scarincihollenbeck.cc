(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{877:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0});var n=u(l(0)),a=u(l(3));function u(e){return e&&e.__esModule?e:{default:e}}l(921);var r=function(e){var t=e.select,l=e.userInput,a=e.clearQuery,u=t.filter((function(e){return"query"!==e.key}));return n.default.createElement("ul",{className:"no-dots list-inline my-2 mx-0"},l.length>0?n.default.createElement("li",{className:"list-inline-item"},n.default.createElement("button",{type:"button",className:"btn btn-link red-title",id:l,onClick:function(){return a("query")},"data-toggle":"tooltip","data-placement":"top",title:"Click on link to remove filter"},l)):"",u.map((function(e){return n.default.createElement("li",{className:" list-inline-item",key:e.key},n.default.createElement("button",{type:"button",className:"btn btn-link red-title",id:e.selected,onClick:function(){return a(e.key)},"data-toggle":"tooltip","data-placement":"top","data-html":"true",title:"Click on link to remove filter"},e.selected))})))};r.propTypes={select:a.default.arrayOf(a.default.object),userInput:a.default.string,clearQuery:a.default.func},r.defaultProps={select:[],userInput:"",clearQuery:function(){}},t.default=r},921:function(e,t,l){}}]);