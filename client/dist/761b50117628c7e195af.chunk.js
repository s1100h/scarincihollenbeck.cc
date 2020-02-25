(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{872:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=f(a(0)),n=f(a(3)),r=f(a(912)),o=f(a(913)),i=f(a(914)),c=f(a(915)),u=f(a(916)),d=f(a(917));function f(e){return e&&e.__esModule?e:{default:e}}a(909);var s=function(e){var t=e.practices,a=e.alphabet,n=e.locations,f=e.designation,s=e.userInput,m=e.handleChange,p=e.onSelect,b=e.letterClick,y=e.clearAll,v=e.onMobileSelect,g=e.removeVisibilityClass;return l.default.createElement("span",null,window.innerWidth>992?l.default.createElement("nav",{className:"navbar navbar-expand-lg bckground-gray border p-2"},l.default.createElement(r.default,{userInput:s,handleChange:m}),l.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.default.createElement("ul",{className:"navbar-nav nav-fill w-100"},l.default.createElement(i.default,{practices:t,onSelect:p,removeVisibilityClass:g}),l.default.createElement(u.default,{locations:n,onSelect:p}),l.default.createElement(c.default,{designation:f,onSelect:p})))):l.default.createElement("div",{className:"bckground-gray p-2"},l.default.createElement(r.default,{userInput:s,handleChange:m}),l.default.createElement(d.default,{title:"Filter by practice",name:"practices",content:t,onMobileSelect:v}),l.default.createElement(d.default,{title:"Filter by location",name:"location",content:location,onMobileSelect:v}),l.default.createElement(d.default,{title:"Filter by title",name:"designation",content:f,onMobileSelect:v})),l.default.createElement("div",{className:"drkbckground-gray border h-57"},l.default.createElement("div",{className:"row mt-2"},l.default.createElement(o.default,{alphabet:a,letterClick:b}),l.default.createElement("div",{className:"col-sm-12 col-md-2"},l.default.createElement("button",{type:"button",className:"btn btn-danger float-right mx-3",onClick:function(){return y()}},"Clear All")))))};s.propTypes={practices:n.default.arrayOf(n.default.object),alphabet:n.default.arrayOf(n.default.string),locations:n.default.arrayOf(n.default.object),designation:n.default.arrayOf(n.default.object),userInput:n.default.string,handleChange:n.default.func,onSelect:n.default.func,letterClick:n.default.func,clearAll:n.default.func,onMobileSelect:n.default.func,removeVisibilityClass:n.default.func},s.defaultProps={practices:[],alphabet:[],locations:[],designation:[],userInput:"",handleChange:function(){},onSelect:function(){},letterClick:function(){},clearAll:function(){},onMobileSelect:function(){},removeVisibilityClass:function(){}},t.default=s},909:function(e,t,a){},912:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(0)),n=r(a(3));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.userInput,a=e.handleChange;return l.default.createElement("form",{className:"form-inline filter w-40"},l.default.createElement("label",{htmlFor:"searchForAttorney",className:"w-100"},l.default.createElement("input",{type:"text",id:"searchForAttorney",className:"w-100",value:t,placeholder:"Search by keyword...",onChange:a}),l.default.createElement("span",{className:"sr-only"},"Search For Attorney")))};o.propTypes={userInput:n.default.string,handleChange:n.default.func},o.defaultProps={userInput:"",handleChange:function(){}},t.default=o},913:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(0)),n=r(a(3));function r(e){return e&&e.__esModule?e:{default:e}}a(909);var o=function(e){var t=e.alphabet,a=e.letterClick;return l.default.createElement("div",{className:"col-sm-12 col-md-10 mt-2"},l.default.createElement("ul",{className:"list-inline ml-4 "},t.map((function(e){return l.default.createElement("li",{onClick:a,onKeyDown:a,key:e,role:"presentation",className:"text-bg text-white proxima-bold list-inline-item cursor-pointer"},l.default.createElement("h4",null,e))}))))};o.propTypes={alphabet:n.default.arrayOf(n.default.string),letterClick:n.default.func},o.defaultProps={alphabet:[],letterClick:function(){}},t.default=o},914:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(23),o=a(14);function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.title,a=e.onSelect,n=e.pChildren;return l.default.createElement("span",null,l.default.createElement("p",{className:"practice-title"},l.default.createElement("button",{onClick:function(e){return a(e,t)},name:"practices",type:"button",className:"proxima-bold practice-link btn btn-link"},t)),l.default.createElement("div",{className:"practice-children"},n.map((function(e){return l.default.createElement("button",{key:(0,o.addRandomKey)(e.ID.toString()),type:"button",name:"practices",onClick:function(t){return a(t,e.title)},className:"dropdown-item btn btn-link"},e.title)}))))},u=function(e){var t=e.practices,a=e.onSelect,n=e.removeVisibilityClass,i=t.filter((function(e){return 28345===e.id||29587===e.id||28276===e.id?e:""})),u=t.filter((function(e){return 29624===e.id||28271===e.id||29588===e.id?e:""})),d=t.filter((function(e){return 28270===e.id})),f=t.filter((function(e){return 28273===e.id||28274===e.id?e:""}));return l.default.createElement("li",{className:"dropdown nav-item list-inline-item mr-4 megamenu filter"},l.default.createElement("span",{id:"megamneu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onFocus:n,onMouseOver:n,className:"dropdown-toggle btn btn-light my-1"},"Filter by practice",l.default.createElement(r.FaCaretDown,{className:"ml-5 mt-1"})),l.default.createElement("div",{"aria-labelledby":"megamneu",className:"dropdown-menu border-0 p-0 m-0 megamenu-container shadow-sm"},l.default.createElement("div",{className:"container mt--1"},l.default.createElement("div",{className:"row rounded-0 m-0"},l.default.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},i.map((function(e){return l.default.createElement(c,{key:(0,o.addRandomKey)(e.id.toString()),title:e.title,onSelect:a,pChildren:e.children})}))),l.default.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},u.map((function(e){return l.default.createElement(c,{key:(0,o.addRandomKey)(e.id.toString()),title:e.title,onSelect:a,pChildren:e.children})}))),l.default.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},d.map((function(e){return l.default.createElement(c,{key:(0,o.addRandomKey)(e.id.toString()),title:e.title,onSelect:a,pChildren:e.children})}))),l.default.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},f.map((function(e){return l.default.createElement(c,{key:(0,o.addRandomKey)(e.id.toString()),title:e.title,onSelect:a,pChildren:e.children})})))))))};u.propTypes={practices:n.default.arrayOf(n.default.object),onSelect:n.default.func,removeVisibilityClass:n.default.func},u.defaultProps={practices:[],onSelect:function(){},removeVisibilityClass:function(){}},c.propTypes={title:n.default.string,onSelect:n.default.func,pChildren:n.default.arrayOf(n.default.object)},c.defaultProps={title:"",onSelect:function(){},pChildren:[]},t.default=u},915:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(0)),n=a(23),r=o(a(3));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.designation,a=e.onSelect;return l.default.createElement("li",{className:"dropdown w3_megamenu-fw nav-item list-inline-item filter"},l.default.createElement("span",{"data-toggle":"dropdown",id:"titleDropDown",className:"dropdown-toggle btn btn-light my-1"},"Filter by title",l.default.createElement(n.FaCaretDown,{className:"ml-5 mt-1"})),l.default.createElement("div",{className:"dropdown-menu","aria-labelledby":"titleDropDown"},t.map((function(e){return l.default.createElement("button",{type:"button",name:"designation",className:"dropdown-item btn btn-link",key:e.title,onClick:function(t){return a(t,e.title)}},e.title)}))))};i.propTypes={designation:r.default.arrayOf(r.default.object),onSelect:r.default.func},i.defaultProps={designation:[],onSelect:function(){}},t.default=i},916:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(0)),n=a(23),r=o(a(3));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.locations,a=e.onSelect;return l.default.createElement("li",{className:"dropdown nav-item list-inline-item mr-4 filter"},l.default.createElement("span",{"data-toggle":"dropdown",id:"locationDropDown",className:"dropdown-toggle btn btn-light my-1"},"Filter by location",l.default.createElement(n.FaCaretDown,{className:"ml-5 mt-1"})),l.default.createElement("div",{className:"dropdown-menu w-100","aria-labelledby":"locationDropDown"},t.map((function(e){return l.default.createElement("button",{type:"button",name:"location",className:"dropdown-item btn btn-link",key:e.id,onClick:function(t){return a(t,e.title)}},e.title)}))))};i.propTypes={locations:r.default.arrayOf(r.default.object),onSelect:r.default.func},i.defaultProps={locations:[],onSelect:function(){}},t.default=i},917:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(0)),n=r(a(3));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.content,a=e.onMobileSelect,n=e.title,r=e.name;return l.default.createElement("div",{className:"my-2"},l.default.createElement("select",{name:r,onChange:a,className:"mobile-select"},l.default.createElement("option",{value:""},n),t.map((function(e){return l.default.createElement("option",{key:e.ID,value:e.title,name:"practices",className:"mobile-option"},e.title)}))))};o.propTypes={title:n.default.string,name:n.default.string,content:n.default.arrayOf(n.default.object),onMobileSelect:n.default.func},o.defaultProps={title:"",name:"",content:[],onMobileSelect:function(){}},t.default=o}}]);