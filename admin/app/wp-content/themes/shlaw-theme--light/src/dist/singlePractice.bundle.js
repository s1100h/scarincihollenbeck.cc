!function(e){function t(t){for(var a,l,i=t[0],o=t[1],s=t[2],u=0,d=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(m&&m(t);d.length;)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={7:0},c=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/wp-content/themes/shlaw-theme--light/src/dist/";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var m=o;c.push([779,0]),n()}({144:function(e,t,n){n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),c=n(12),l=n(75),i=n(98);function o(e){var t=e.link,n=e.image,a=e.name,o=e.title,s=e.number,m=e.email,u=e.height,d=e.width;e.type;return r.a.createElement("div",{className:"d-flex flex-row attorney-card",height:u},r.a.createElement("a",{href:t},r.a.createElement("img",{rel:"preload",src:n,alt:a,className:"mr-1",style:{width:d}})),r.a.createElement("div",{className:"mt-3 ml-3"},r.a.createElement("a",{href:t},r.a.createElement("p",{className:"text-uppercase red-title small-excerpt"},r.a.createElement("strong",null,a)),r.a.createElement("p",{className:"mb-1 small-excerpt"},r.a.createElement("strong",null,o))),r.a.createElement("div",{className:"small-excerpt"},r.a.createElement(c.a,{icon:l.faPhone,className:"icon-w8px-h20px"})," ",s,r.a.createElement("br",null),r.a.createElement(c.a,{icon:i.faEnvelope,className:"icon-w8px-h20px"})," ",m)))}},2:function(e,t,n){n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"j",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return m})),n.d(t,"c",(function(){return u})),n.d(t,"i",(function(){return d}));var a=function(e){return{__html:e}};function r(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))}var c=function(e){return e.toLowerCase().replace(/\s/g,"-")},l=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()};function i(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e}var o={Accept:"application/json","Content-Type":"application/json"},s=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"589 8th Avenue, New York, NY, 10018"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var a=n.coords,r=a.latitude,c=a.longitude,l=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),i=t.filter((function(e){return e.title===l}))[0].address,o="https://www.google.com/maps/dir/".concat(r,"+").concat(c,"/").concat(i);window.open(o,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})};function m(){return window.print(),!1}function u(e){var t=new Date(e);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDay(),", ").concat(t.getFullYear())}function d(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e}},50:function(e,t,n){n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a),c=n(32),l=n(11),i=n(10),o=n(4),s=n(2);function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(",") no-repeat 50%;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  ","\n"]);return m=function(){return e},e}var u=c.a.div(m(),(function(e){return e.image}),(function(e){return e.height}));function d(e){var t=e.title,n=e.subtitle,a=e.image,c=e.height;return r.a.createElement(u,{image:a,height:c,className:"jumbotron jumbotron-fluid d-print-none"},r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement(o.a,{sm:12,md:{span:7,offset:2},className:"bg-black-background text-white"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(s.b)(n)}))))))}},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},71:function(e,t,n){n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("div",{className:"w-100 mt-4"},r.a.createElement("div",{className:"sidebar-title"},"Get the latest from our attorneys!"),r.a.createElement("div",{className:"off-white mh-375"},r.a.createElement("img",{src:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png",alt:"Subscribe Scarinci Hollenbeck attorneys",className:"mx-auto d-block py-4 w-50"}),r.a.createElement("p",{className:"proxima-bold text-center px-3"},"Please fill out our short form to get the latest articles from the Scarinci Hollenbeck attorneys weekly on the cutting-edge legal topics.")))}},779:function(e,t,n){n.r(t);var a=n(0),r=n.n(a),c=n(28),l=n.n(c),i=n(97),o=n.n(i),s=n(143),m=n(40),u=n(37),d=n(11),p=n(10),f=n(4),h=n(3),g=n(33),b=n(2);function E(){return r.a.createElement("div",{className:"mw-447"},r.a.createElement(h.a,{onSubmit:function(e){e.preventDefault();var t;Router.push({pathname:"/search",query:{q:(t=searchInput,t.toLowerCase().replace(/\s/g,"+")),page:1}})}},r.a.createElement(h.a.Group,{controlId:"simplsearch"},r.a.createElement(h.a.Label,null,r.a.createElement("span",{className:"sr-only"},"Search Site")),r.a.createElement(h.a.Control,{type:"text",placeholder:"Keyword.."})),r.a.createElement(g.a,{type:"submit",variant:"danger"},"Search")))}var v=n(71),y=n(85);function w(e){var t=e.content,n=e.tabTitle,a=e.title;return r.a.createElement(y.a,{eventKey:n,title:a},r.a.createElement("div",{dangerouslySetInnerHTML:Object(b.b)(t)}))}var N=n(220),k=n.n(N),x=n(221),j=n.n(x),O=(n(310),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}});function S(e){var t=e.slides;return t.length>0&&r.a.createElement(j.a,{responsive:O,infinite:!0,arrows:!0,swipeable:!0},t.map((function(e){return r.a.createElement("div",{key:parseInt(e.id,10),className:"pb-2 px-4 carousel-slide level-".concat(parseInt(e.id,10))},r.a.createElement("a",{href:e.link?e.link:"#"},r.a.createElement(k.a,{height:150},r.a.createElement("img",{rel:"preconnect",src:e.image?e.image:e.featuredImg?e.featuredImg:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",alt:e.title,className:"img-thumbnail mx-auto d-block"})),r.a.createElement("p",{className:"text-muted small-excerpt text-center"},(t=e.title).length>200?"".concat(t.substring(0,200)," ..."):t)));var t})))}function P(e){var t=e.content.filter((function(e,t){return t<8}));return r.a.createElement("div",{className:"mt-4 w-100 d-block practice-news-list"},t.length>3?r.a.createElement(S,{slides:t}):r.a.createElement(d.a,null,r.a.createElement(p.a,null,t.map((function(e){return r.a.createElement(f.a,{sm:12,md:4,key:Object(b.a)(e.title),className:"article-card"},r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e.image?e.image:e.featuredImg?e.featuredImg:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",alt:e.title,className:"img-thumbnail mt-3"}),r.a.createElement("h5",{className:"my-3 small-excerpt"},e.title)))})))))}var C=n(144);function A(e){var t=e.members,n=e.chair,a=e.title,c=e.handleLink;return r.a.createElement(r.a.Fragment,null,n.length>0&&r.a.createElement(d.a,null,r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,a)),r.a.createElement(p.a,{className:"my-5"},n.map((function(e){return r.a.createElement(f.a,{sm:12,md:12,lg:6,key:e.ID},r.a.createElement(C.a,{link:e.link,image:e.image,name:e.name,title:e.designation,number:e.contact,email:e.email,height:"109px",width:"75%",type:"/attorney/[slug]"}))})))),t?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"Members")),r.a.createElement(h.a,{className:"w-50 py-4"},r.a.createElement(h.a.Group,null,r.a.createElement(h.a.Control,{as:"select",onChange:c,className:"w-100"},t.map((function(e){return r.a.createElement("option",{value:e.link,key:e.ID,className:"w-100"},e.name)}))))),r.a.createElement("div",{className:"row mh-75"},t.map((function(e){return r.a.createElement("div",{key:e.ID,className:"col-sm-12 col-md-12 col-lg-6 mb-3"},r.a.createElement(C.a,{link:e.link,image:e.image,name:e.name,title:e.designation,number:e.contact,email:e.email,height:"109px",width:"75%",type:"/attorney/[slug]"}))})))):"")}var I=n(72),L=n(219),M=n(145);function R(e){var t=e.tabTitle,n=e.title,a=e.content;return r.a.createElement(I.a.Pane,{eventKey:t,title:n},r.a.createElement("h4",{className:"bg-light-gray"},n),r.a.createElement("ul",null,r.a.createElement(M.a,{width:800,height:600,rowCount:a.length,rowHeight:350,rowRenderer:function(e){return function(e,t){var n=t.key,a=t.index,c=(t.isScrolling,t.isVisible,t.style,e[a]);return r.a.createElement("li",{key:n,className:"my-3 pb-3 border-bottom"},r.a.createElement("a",{href:c.link,className:"d-flex flex-row"},r.a.createElement(L.a,{src:c.image?c.image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",className:"w-25 mr-3",rounded:!0}),r.a.createElement("div",null,r.a.createElement("h5",{className:"d-block w-100 mb-0 pt-0"},c.title),r.a.createElement("p",{className:"mt-0 pt-0"},Object(b.c)(c.date)))))}(a,e)}})))}var T=n(44),K=n(35),_=n(63),D=n(12),z=n(100),F=n(99);function J(e){var t=e.children,n=e.eventKey,c=e.callback,l=Object(a.useContext)(K.a),i=Object(_.b)(n,(function(){return c&&c(n)})),o=l===n;return r.a.createElement("button",{type:"button",variant:"link",className:"sidebar-title w-100 p-2 text-left",onClick:i},t,o?r.a.createElement(D.a,{icon:F.faMinus,className:"text-white float-right icon-w8px-h20px"}):r.a.createElement(D.a,{icon:z.faPlus,className:"text-white float-right icon-w8px-h20px"}))}function q(e){var t=e.title,n=e.content,a=e.tabKey;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{defaultActiveKey:0,className:"mt-4"},r.a.createElement(J,{eventKey:a},r.a.createElement("h5",{className:"mb-0 pb-0 float-left text-white"},t)),r.a.createElement(T.a.Collapse,{eventKey:a},r.a.createElement("div",{className:"off-white"},r.a.createElement("ul",{className:"p-1 pt-3 sidebar-content-page"},n.map((function(e){return r.a.createElement("li",{key:e.title,className:"mb--7px--lh-22--ft-14px"},r.a.createElement("a",{href:e.slug,className:"proxima-bold"},e.title))})))))))}var H=n(50);n(111),n(117);function B(e,t,n,a,r,c,l){try{var i=e[c](l),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(a,r)}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Y(){var e=G(Object(a.useState)({}),2),t=e[0],n=e[1],c=G(Object(a.useState)([]),2),l=c[0],i=c[1];return Object(a.useEffect)((function(){var e,t=window.location.search;t.indexOf("preview_id=")>-1&&(e=t.split("preview_id=").pop().split("&")[0]),t.indexOf("p=")>-1&&(e=t.split("p=").pop().split("&")[0]),console.log(e),function(){var t,a=(t=regeneratorRuntime.mark((function t(){var a,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch("".concat("https://admin.scarincihollenbeck.com","/wp-json/preview-practices/practice/").concat(e),{headers:b.e}).then((function(e){return e.json()})),fetch("".concat("https://admin.scarincihollenbeck.com","/wp-json/core-practices/list"),{headers:b.e}).then((function(e){return e.json()})),fetch("".concat("https://admin.scarincihollenbeck.com","/wp-json/just-in/posts"),{headers:b.e}).then((function(e){return e.json()}))]);case 2:a=t.sent,r=G(a,2),c=r[0],l=r[1],n(c),i(l);case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var c=t.apply(e,n);function l(e){B(c,a,r,l,i,"next",e)}function i(e){B(c,a,r,l,i,"throw",e)}l(void 0)}))});return function(){return a.apply(this,arguments)}}()()}),[]),r.a.createElement(r.a.Fragment,null,0===Object.keys(t).length?r.a.createElement(d.a,null,r.a.createElement(p.a,{id:"page-loader-container",className:"justify-content-center align-self-center"},r.a.createElement(o.a,{color:"#DB2220"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-JPG.jpg",title:t.title,subtitle:t.description}),r.a.createElement(s.a,{className:"mb--1",id:"nav-tab",defaultActiveKey:Object(b.j)(t.content[0].title)},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{sm:12},r.a.createElement(u.a,null,t.content.length>0&&t.content.map((function(e){return r.a.createElement(u.a.Link,{eventKey:Object(b.j)(e.title),key:e.title,className:"main-tab"},e.title)})),t.industryTopics.length>0&&r.a.createElement(u.a.Link,{eventKey:"related-updates",className:"main-tab"},"Related Updates"))),r.a.createElement(f.a,{sm:12,md:9,className:"mt-4"},t.content.length>0&&t.content.map((function(e,t){return r.a.createElement(m.a,{key:e.title},r.a.createElement(w,{tabTitle:Object(b.j)(e.title),title:e.title,content:e.content}))})),t.industryTopics.length>0&&r.a.createElement(m.a,null,r.a.createElement(R,{tabTitle:"related-updates",title:"Related Updates",content:t.industryTopics})),r.a.createElement(A,{title:"Practice Chair",members:t.attorneyList,chair:t.chair,handleLink:function(e){router.push(e.target.value)}}),t.highlightReal.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"Represenative Clients")),r.a.createElement(P,{content:t.highlightReal})),t.industryTopics.length>0&&r.a.createElement("div",{className:"w-100 d-block"},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"Latest News & Articles")),r.a.createElement(P,{content:t.industryTopics}))),r.a.createElement(f.a,{sm:12,md:3},r.a.createElement(E,null),r.a.createElement(v.a,null),r.a.createElement(q,{title:"Core Practices",content:l,tabKey:0}),r.a.createElement(q,{title:"Related Sub-Practices",content:t.practiceList,tabKey:1})))))))}n(118),n(54),n(55),n(56),n(57),n(58),n(59),n(83);l.a.render(r.a.createElement(Y,null),document.getElementById("single-practice"))},83:function(e,t,n){}});