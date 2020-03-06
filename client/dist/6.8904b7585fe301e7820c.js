(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{425:function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),r=p(l),i=p(n(481)),o=p(n(482)),c=p(n(433)),u=n(429),s=p(n(483)),d=p(n(484)),f=p(n(491)),m=p(n(492));function p(e){return e&&e.__esModule?e:{default:e}}var b=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={userInput:"",select:[],locations:[],designations:[],practices:[],attorneys:[],seo:{},spinner:!1},t.letterClick=t.letterClick.bind(t),t.handleChange=t.handleChange.bind(t),t.onSelect=t.onSelect.bind(t),t.onMobileSelect=t.onMobileSelect.bind(t),t.removeVisibilityClass=t.removeVisibilityClass.bind(t),t.clearQuery=t.clearQuery.bind(t),t.clearAll=t.clearAll.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),a(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({spinner:!0}),e("https://admin.scarincilies.com/wp-json/attorney-search/attorneys/").then((function(e){return e.json()})).then((function(e){t.setState({attorneys:e,spinner:!1})})),e("https://api.scarincilies.com/cached/attorney-filters").then((function(e){return e.json()})).then((function(e){var n=e.locations,a=e.designations,l=e.practices;t.setState({locations:n,designations:a,practices:l})})),e("https://admin.scarincilies.com/wp-json/attorney-search/meta").then((function(e){return e.json()})).then((function(e){return t.setState({seo:e})}))}},{key:"onSelect",value:function(e,t){var n=this.state.select,a=t,l=e.target.name,r={selected:a,key:l},i=n.filter((function(e){return e.key!==l})).concat(r);if(this.setState({select:i}),"location"===l||"designation"===l){var o=document.querySelector(".dropdown.show");o.classList.contains("show")&&(o.classList.remove("show"),o.classList.add("hide"))}"practices"===l&&document.querySelector(".megamenu-container").classList.add("super-hide")}},{key:"onMobileSelect",value:function(e){var t=this.state.select,n=e.target.value,a=e.target.name,l={selected:n,key:a},r=t.filter((function(e){return e.key!==a})).concat(l);this.setState({select:r})}},{key:"removeVisibilityClass",value:function(){document.querySelector(".megamenu-container").classList.remove("super-hide")}},{key:"letterClick",value:function(e){var t=this.state.select,n=e.target.innerHTML,a={selected:n,key:"letter"},l=t.filter((function(e){return"letter"!==e.key})).concat(a);this.setState({select:l})}},{key:"handleChange",value:function(e){var t=this.state.select,n=e.target.value.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})),a={selected:n,key:"query"},l=t.concat(a);this.setState({userInput:n,select:l})}},{key:"clearQuery",value:function(e){var t=this.state.select.filter((function(t){return t.key!==e}));this.setState({select:t,userInput:""})}},{key:"clearAll",value:function(){this.setState({select:[],userInput:""})}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.practices,a=e.designations,l=e.attorneys,p=e.select,b=e.userInput,g=e.seo,y=e.spinner,h=(0,u.sortByKey)(n,"title");return r.default.createElement("div",null,r.default.createElement(i.default,{seo:g}),r.default.createElement(o.default,{title:"Attorneys",image:s.default,subtitle:"Our team of attorneys have a diverse set of legal expertise, please feel free to search our directory to find the right attorney for your business needs.",height:"330px"}),r.default.createElement(c.default,null,r.default.createElement("div",{className:"mb-5"},r.default.createElement(d.default,{practices:h,alphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],locations:t,designation:a,userInput:b,handleChange:this.handleChange,onSelect:this.onSelect,letterClick:this.letterClick,clearAll:this.clearAll,onMobileSelect:this.onMobileSelect,removeVisibilityClass:this.removeVisibilityClass}),r.default.createElement("div",{className:"w-100 border mt-sm-6 mt-md-0"},r.default.createElement(f.default,{select:p,clearQuery:this.clearQuery,userInput:b}),!y&&r.default.createElement(m.default,{attorneys:l,userInput:b,select:p})))))}}]),n}(l.Component);t.default=b}).call(this,n(117))},429:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});t.sortByKey=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},t.addRandomKey=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},t.urlify=function(e){return e.toLowerCase().replace(/\s/g,"-")},t.createMarkup=function(e){return{__html:e}},t.sortByDateKey=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},t.getDirectionsFromLocation=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var a=n.coords,l=a.latitude,r=a.longitude,i=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),o="https://www.google.com/maps/dir/"+l+"+"+r+"/"+t.filter((function(e){return e.title===i}))[0].address;window.open(o,"_blank")}),(function(e){console.warn("ERROR("+e.code+"):"+e.message)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},t.splitUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.split("/"),a=n.filter((function(e){return""!==e}));return null!==t&&(a=a.filter((function(e){return""!==e&&e!==t}))),a},t.locationUrl=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},t.filterByKey=function(e,t){for(var n=[],a=0;a<e.length;a+=1)e[a].key&&e[a].key===t&&n.push(e[a].selected);return n},t.makeTitle=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},433:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,l=n(1),r=(a=l)&&a.__esModule?a:{default:a};t.default=function(e){var t=e.children;return r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-12"},t)))}},438:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,l,r=(a=["\n    height: ",";\n    overflow: hidden;\n    border: .9px solid #e9e9e9;\n    width: 100%;\n  "],l=["\n    height: ",";\n    overflow: hidden;\n    border: .9px solid #e9e9e9;\n    width: 100%;\n  "],Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(l)}}))),i=s(n(1)),o=s(n(430)),c=n(86),u=s(n(46));function s(e){return e&&e.__esModule?e:{default:e}}n(494);var d=function(e){var t=e.link,n=e.image,a=e.name,l=e.title,u=e.number,s=e.email,d=e.height,f=e.width,m=o.default.div(r,d);return i.default.createElement(m,{className:"d-flex flex-row attorney-card"},i.default.createElement("a",{href:t},i.default.createElement("img",{src:n,alt:a,className:"mr-1",style:{width:f}})),i.default.createElement("div",{className:"mt-3 ml-3"},i.default.createElement("a",{href:t},i.default.createElement("p",{className:"text-uppercase red-title small-excerpt"},i.default.createElement("strong",null,a)),i.default.createElement("p",{className:"mb-1 small-excerpt"},i.default.createElement("strong",null,l))),i.default.createElement("div",{className:"small-excerpt"},i.default.createElement(c.FaPhone,null)," ",u,i.default.createElement("br",null),i.default.createElement(c.FaEnvelope,null)," ",s)))};d.propTypes={image:u.default.string,name:u.default.string,title:u.default.string,number:u.default.string,email:u.default.string,link:u.default.string,height:u.default.string,width:u.default.string},d.defaultProps={image:"",name:"",title:"",number:"",email:"",link:"",height:"",width:""},t.default=d},481:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),l=n(432),r=i(n(46));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.seo;return a.default.createElement(l.Helmet,null,a.default.createElement("title",null,t.title),a.default.createElement("meta",{name:"description",content:t.metaDescription}),a.default.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),a.default.createElement("link",{rel:"canonical",href:window.location.origin+"/"+t.canonicalLink}))};o.propTypes={seo:r.default.objectOf(r.default.string)},o.defaultProps={seo:{}},t.default=o},482:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=s(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "],["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]),l=s(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n  "],["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n  "]),r=u(n(1)),i=u(n(46)),o=u(n(430)),c=n(429);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=function(e){var t=e.title,n=e.subtitle,i=e.image,u=e.height,s=o.default.div(a,i,u),d=o.default.div(l);return r.default.createElement(s,{className:"jumbotron jumbotron-fluid"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement(d,{className:"col-sm-12 col-md-7 offset-md-3 text-white"},r.default.createElement("div",{className:"p-3"},r.default.createElement("span",{id:"red-block"}),r.default.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.default.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:(0,c.createMarkup)(n)}))))))};d.propTypes={image:i.default.string,title:i.default.string,subtitle:i.default.oneOfType([i.default.string,i.default.arrayOf(i.default.string)]),height:i.default.string},d.defaultProps={image:"",title:"",subtitle:"",height:""},t.default=d},483:function(e,t,n){e.exports=n.p+"9c30f208b6c8a3e29fb44e7fa2f0cbd8.jpg"},484:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(1)),l=d(n(46)),r=d(n(485)),i=d(n(486)),o=d(n(487)),c=d(n(488)),u=d(n(489)),s=d(n(490));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){var t=e.practices,n=e.alphabet,l=e.locations,d=e.designation,f=e.userInput,m=e.handleChange,p=e.onSelect,b=e.letterClick,g=e.clearAll,y=e.onMobileSelect,h=e.removeVisibilityClass;return a.default.createElement("span",null,window.innerWidth>992?a.default.createElement("nav",{className:"navbar navbar-expand-lg bckground-gray border p-2"},a.default.createElement(r.default,{userInput:f,handleChange:m}),a.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},a.default.createElement("ul",{className:"navbar-nav nav-fill w-100"},a.default.createElement(o.default,{practices:t,onSelect:p,removeVisibilityClass:h}),a.default.createElement(u.default,{locations:l,onSelect:p}),a.default.createElement(c.default,{designation:d,onSelect:p})))):a.default.createElement("div",{className:"bckground-gray p-2"},a.default.createElement(r.default,{userInput:f,handleChange:m}),a.default.createElement(s.default,{title:"Filter by practice",name:"practices",content:t,onMobileSelect:y}),a.default.createElement(s.default,{title:"Filter by location",name:"location",content:location,onMobileSelect:y}),a.default.createElement(s.default,{title:"Filter by title",name:"designation",content:d,onMobileSelect:y})),a.default.createElement("div",{className:"drkbckground-gray border h-57"},a.default.createElement("div",{className:"row mt-2"},a.default.createElement(i.default,{alphabet:n,letterClick:b}),a.default.createElement("div",{className:"col-sm-12 col-md-2"},a.default.createElement("button",{type:"button",className:"btn btn-danger float-right mx-3",onClick:function(){return g()}},"Clear All")))))};f.propTypes={practices:l.default.arrayOf(l.default.object),alphabet:l.default.arrayOf(l.default.string),locations:l.default.arrayOf(l.default.object),designation:l.default.arrayOf(l.default.object),userInput:l.default.string,handleChange:l.default.func,onSelect:l.default.func,letterClick:l.default.func,clearAll:l.default.func,onMobileSelect:l.default.func,removeVisibilityClass:l.default.func},f.defaultProps={practices:[],alphabet:[],locations:[],designation:[],userInput:"",handleChange:function(){},onSelect:function(){},letterClick:function(){},clearAll:function(){},onMobileSelect:function(){},removeVisibilityClass:function(){}},t.default=f},485:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(1)),l=r(n(46));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.userInput,n=e.handleChange;return a.default.createElement("form",{className:"form-inline filter w-40"},a.default.createElement("label",{htmlFor:"searchForAttorney",className:"w-100"},a.default.createElement("input",{type:"text",id:"searchForAttorney",className:"w-100",value:t,placeholder:"Search by keyword...",onChange:n}),a.default.createElement("span",{className:"sr-only"},"Search For Attorney")))};i.propTypes={userInput:l.default.string,handleChange:l.default.func},i.defaultProps={userInput:"",handleChange:function(){}},t.default=i},486:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(1)),l=r(n(46));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.alphabet,n=e.letterClick;return a.default.createElement("div",{className:"col-sm-12 col-md-10 mt-2"},a.default.createElement("ul",{className:"list-inline ml-4 "},t.map((function(e){return a.default.createElement("li",{onClick:n,onKeyDown:n,key:e,role:"presentation",className:"text-bg text-white proxima-bold list-inline-item cursor-pointer"},a.default.createElement("h4",null,e))}))))};i.propTypes={alphabet:l.default.arrayOf(l.default.string),letterClick:l.default.func},i.defaultProps={alphabet:[],letterClick:function(){}},t.default=i},487:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(1)),l=o(n(46)),r=n(86),i=n(429);function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.title,n=e.onSelect,l=e.pChildren;return a.default.createElement("span",null,a.default.createElement("p",{className:"practice-title"},a.default.createElement("button",{onClick:function(e){return n(e,t)},name:"practices",type:"button",className:"proxima-bold practice-link btn btn-link"},t)),a.default.createElement("div",{className:"practice-children"},l.map((function(e){return a.default.createElement("button",{key:(0,i.addRandomKey)(e.ID.toString()),type:"button",name:"practices",onClick:function(t){return n(t,e.title)},className:"dropdown-item btn btn-link"},e.title)}))))},u=function(e){var t=e.practices,n=e.onSelect,l=e.removeVisibilityClass,o=t.filter((function(e){return 28345===e.id||29587===e.id||28276===e.id?e:""})),u=t.filter((function(e){return 29624===e.id||28271===e.id||29588===e.id?e:""})),s=t.filter((function(e){return 28270===e.id})),d=t.filter((function(e){return 28273===e.id||28274===e.id?e:""}));return a.default.createElement("li",{className:"dropdown nav-item list-inline-item mr-4 megamenu filter"},a.default.createElement("span",{id:"megamneu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onFocus:l,onMouseOver:l,className:"dropdown-toggle btn btn-light my-1"},"Filter by practice",a.default.createElement(r.FaCaretDown,{className:"ml-5 mt-1"})),a.default.createElement("div",{"aria-labelledby":"megamneu",className:"dropdown-menu border-0 p-0 m-0 megamenu-container shadow-sm"},a.default.createElement("div",{className:"container mt--1"},a.default.createElement("div",{className:"row rounded-0 m-0"},a.default.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},o.map((function(e){return a.default.createElement(c,{key:(0,i.addRandomKey)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),a.default.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},u.map((function(e){return a.default.createElement(c,{key:(0,i.addRandomKey)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),a.default.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},s.map((function(e){return a.default.createElement(c,{key:(0,i.addRandomKey)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),a.default.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},d.map((function(e){return a.default.createElement(c,{key:(0,i.addRandomKey)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})})))))))};u.propTypes={practices:l.default.arrayOf(l.default.object),onSelect:l.default.func,removeVisibilityClass:l.default.func},u.defaultProps={practices:[],onSelect:function(){},removeVisibilityClass:function(){}},c.propTypes={title:l.default.string,onSelect:l.default.func,pChildren:l.default.arrayOf(l.default.object)},c.defaultProps={title:"",onSelect:function(){},pChildren:[]},t.default=u},488:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),l=n(86),r=i(n(46));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.designation,n=e.onSelect;return a.default.createElement("li",{className:"dropdown w3_megamenu-fw nav-item list-inline-item filter"},a.default.createElement("span",{"data-toggle":"dropdown",id:"titleDropDown",className:"dropdown-toggle btn btn-light my-1"},"Filter by title",a.default.createElement(l.FaCaretDown,{className:"ml-5 mt-1"})),a.default.createElement("div",{className:"dropdown-menu","aria-labelledby":"titleDropDown"},t.map((function(e){return a.default.createElement("button",{type:"button",name:"designation",className:"dropdown-item btn btn-link",key:e.title,onClick:function(t){return n(t,e.title)}},e.title)}))))};o.propTypes={designation:r.default.arrayOf(r.default.object),onSelect:r.default.func},o.defaultProps={designation:[],onSelect:function(){}},t.default=o},489:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),l=n(86),r=i(n(46));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.locations,n=e.onSelect;return a.default.createElement("li",{className:"dropdown nav-item list-inline-item mr-4 filter"},a.default.createElement("span",{"data-toggle":"dropdown",id:"locationDropDown",className:"dropdown-toggle btn btn-light my-1"},"Filter by location",a.default.createElement(l.FaCaretDown,{className:"ml-5 mt-1"})),a.default.createElement("div",{className:"dropdown-menu w-100","aria-labelledby":"locationDropDown"},t.map((function(e){return a.default.createElement("button",{type:"button",name:"location",className:"dropdown-item btn btn-link",key:e.id,onClick:function(t){return n(t,e.title)}},e.title)}))))};o.propTypes={locations:r.default.arrayOf(r.default.object),onSelect:r.default.func},o.defaultProps={locations:[],onSelect:function(){}},t.default=o},490:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(1)),l=r(n(46));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.content,n=e.onMobileSelect,l=e.title,r=e.name;return a.default.createElement("div",{className:"my-2"},a.default.createElement("select",{name:r,onChange:n,className:"mobile-select"},a.default.createElement("option",{value:""},l),t.map((function(e){return a.default.createElement("option",{key:e.ID,value:e.title,name:"practices",className:"mobile-option"},e.title)}))))};i.propTypes={title:l.default.string,name:l.default.string,content:l.default.arrayOf(l.default.object),onMobileSelect:l.default.func},i.defaultProps={title:"",name:"",content:[],onMobileSelect:function(){}},t.default=i},491:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(1)),l=r(n(46));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.select,n=e.userInput,l=e.clearQuery,r=t.filter((function(e){return"query"!==e.key}));return a.default.createElement("ul",{className:"no-dots list-inline my-2 mx-0"},n.length>0?a.default.createElement("li",{className:"list-inline-item"},a.default.createElement("button",{type:"button",className:"btn btn-link red-title",id:n,onClick:function(){return l("query")},"data-toggle":"tooltip","data-placement":"top",title:"Click on link to remove filter"},n)):"",r.map((function(e){return a.default.createElement("li",{className:" list-inline-item",key:e.key},a.default.createElement("button",{type:"button",className:"btn btn-link red-title",id:e.selected,onClick:function(){return l(e.key)},"data-toggle":"tooltip","data-placement":"top","data-html":"true",title:"Click on link to remove filter"},e.selected))})))};i.propTypes={select:l.default.arrayOf(l.default.object),userInput:l.default.string,clearQuery:l.default.func},i.defaultProps={select:[],userInput:"",clearQuery:function(){}},t.default=i},492:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(1)),l=o(n(46)),r=o(n(493)),i=o(n(495));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.attorneys,n=e.select,l=e.userInput;return a.default.createElement("div",{className:"container mt-2"},n.length>0?a.default.createElement(r.default,{select:n,attorneys:t,userInput:l}):a.default.createElement(i.default,{attorneys:t}))};c.propTypes={attorneys:l.default.arrayOf(l.default.object),select:l.default.arrayOf(l.default.object),userInput:l.default.string},c.defaultProps={attorneys:[],select:[],userInput:""},t.default=c},493:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(1)),l=o(n(46)),r=o(n(438)),i=n(429);function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.attorneys,n=e.userInput,l=e.select,o=(0,i.filterByKey)(l,"practices"),c=(0,i.filterByKey)(l,"letter"),u=(0,i.filterByKey)(l,"designation"),s=(0,i.filterByKey)(l,"location"),d=t.filter((function(e){return o.length>0?e.practices_array.indexOf(o[0])>-1:e})).filter((function(e){return s.length>0?e.location.indexOf(s[0])>=0:e})).filter((function(e){return u.length>0?e.designation.indexOf(u[0])>=0:e})).filter((function(e){return c.length>0?e.last_name.charAt(0).toLowerCase()===c[0].toLowerCase():e})).filter((function(e){var t=e.practices.replace(/&amp;/g,"&");return n?e.title.indexOf(n)>=0||t.indexOf(n.trim())>=0?e:void 0:e}));return a.default.createElement("div",{className:"row"},d.map((function(e){return a.default.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},a.default.createElement(r.default,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"81px"}))})),d.length<1?a.default.createElement("h3",{className:"text-center red-title d-block mx-auto my-4"},"Sorry, no attorneys found according to this query."):"")};c.propTypes={attorneys:l.default.arrayOf(l.default.object),select:l.default.arrayOf(l.default.object),userInput:l.default.string},c.defaultProps={attorneys:[],select:[],userInput:""},t.default=c},494:function(e,t,n){},495:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),l=i(n(46)),r=i(n(438));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.attorneys,n=t.filter((function(e){return"Managing Partner"===e.designation})),l=t.filter((function(e){return"Partner"===e.designation})),i=t.filter((function(e){return"Counsel"===e.designation})),o=t.filter((function(e){return e.designation.indexOf("Of Counsel")>-1})),c=t.filter((function(e){return"Senior Associate"===e.designation})),u=t.filter((function(e){return"Associate"===e.designation}));return a.default.createElement("div",{className:"row result-container"},a.default.createElement("div",{className:"col-sm-12 my-4"},a.default.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Managing Partners")),n.map((function(e){return a.default.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},a.default.createElement(r.default,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),a.default.createElement("div",{className:"col-sm-12 my-4"},a.default.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Partners")),l.map((function(e){return a.default.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},a.default.createElement(r.default,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),a.default.createElement("div",{className:"col-sm-12 my-4"},a.default.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Counsel")),i.map((function(e){return a.default.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},a.default.createElement(r.default,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),a.default.createElement("div",{className:"col-sm-12 my-4"},a.default.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Of Counsel & Of Counsel Emeritus")),o.map((function(e){return a.default.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},a.default.createElement(r.default,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),a.default.createElement("div",{className:"col-sm-12 my-4"},a.default.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Senior Associates")),c.map((function(e){return a.default.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},a.default.createElement(r.default,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),a.default.createElement("div",{className:"col-sm-12 my-4"},a.default.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Associates")),u.map((function(e){return a.default.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},a.default.createElement(r.default,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})))};o.propTypes={attorneys:l.default.arrayOf(l.default.object)},o.defaultProps={attorneys:[]},t.default=o}}]);