!function(e){function t(t){for(var n,c,i=t[0],o=t[1],m=t[2],u=0,d=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(s&&s(t);d.length;)d.shift()();return l.push.apply(l,m||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={4:0},l=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/wp-content/themes/shlaw-theme--light/src/dist/";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var s=o;l.push([776,0]),a()}({119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},170:function(e,t,a){a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),l=a(32),c=a(11),i=a(10),o=a(4);function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(",") no-repeat 50%;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  min-height: ","\n"]);return m=function(){return e},e}var s=l.a.div(m(),(function(e){return e.image}),(function(e){return e.height}));function u(e){var t=e.profile,a=e.infoCard,n=e.image,l=e.height;return r.a.createElement(s,{image:n,height:l,className:"jumbotron jumbotron-fluid"},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(o.a,{sm:12,md:4,className:"mr-4 mh-325"},t),r.a.createElement(o.a,{sm:12,md:7,className:"bg-black-background"},a))))}},171:function(e,t,a){a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n);function l(e){var t=e.image,a=e.name;return r.a.createElement("img",{rel:"preload",src:t,alt:a,className:"img-fluid white-transparent-border"})}},172:function(e,t,a){a.d(t,"a",(function(){return y}));var n=a(0),r=a.n(n),l=a(10),c=a(4),i=a(12),o=a(75),m=a(138),s=a(98),u=a(214),d=a(215),f=a(139),p=a(140),b=a(141),h=a(212),E=a(213);function y(e){var t=e.fullName,a=e.chair,n=e.designation,y=e.phoneNumber,v=e.fax,g=e.email,w=e.socialMediaLinks,N=e.pdf,x=e.vizibility;return r.a.createElement(c.a,{sm:12},r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white border-bottom"},t&&"".concat(t," "),void 0!==a&&a.length>0&&r.a.createElement("span",{className:" h5 text-white"},"-"," ".concat(n)))),void 0!==a&&a.length>0?r.a.createElement("div",{className:"my-3"},a.map((function(e){return r.a.createElement("span",{key:e.title,className:"text-white h5"},r.a.createElement("strong",null,"Chair: "),r.a.createElement("a",{href:e.link,className:"text-white chair-link h5"},e.title," ","Practice"),r.a.createElement("br",null))}))):r.a.createElement(c.a,{sm:12,className:"mt-3"},r.a.createElement("h4",{className:"text-white ml--10px"},n)),r.a.createElement(l.a,null,r.a.createElement(c.a,{sm:12,md:6},r.a.createElement("ul",{className:"text-white no-dots mt-2 ml-0"},y&&r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(i.a,{icon:o.faPhone,className:"text-white icon-w8px-h20px"})," ",r.a.createElement("span",{className:"proxima-regular ft-17px"},"  ".concat(y)))),v&&r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(i.a,{icon:m.faFax,className:"text-white icon-w8px-h20px"})," ",r.a.createElement("span",{className:"proxima-regular ft-17px"},"  ".concat(v)))),g&&r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(i.a,{icon:s.faEnvelope,className:"text-white icon-w8px-h20px"}),r.a.createElement("a",{href:"mailto:".concat(g),className:"text-white proxima-regular mail-link ft-17px"}," ".concat(g)))))),r.a.createElement(c.a,{sm:12,md:6},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ml-0 mt-2"},w.map((function(e){return r.a.createElement("li",{key:e.channel,className:"mb-0 lh-1"},r.a.createElement("h5",null,"Twitter"===e.channel&&r.a.createElement(i.a,{icon:f.faTwitter,className:"text-white icon-w8px-h20px"}),"Facebook"===e.channel&&r.a.createElement(i.a,{icon:p.faFacebookSquare,className:"text-white icon-w8px-h20px"}),"LinkedIn"===e.channel&&r.a.createElement(i.a,{icon:b.faLinkedin,className:"text-white icon-w8px-h20px"}),"Skype"===e.channel&&r.a.createElement(i.a,{icon:h.faSkype,className:"text-white icon-w8px-h20px"}),"Instagram"===e.channel&&r.a.createElement(i.a,{icon:E.faInstagram,className:"text-white icon-w8px-h20px"}),r.a.createElement("a",{href:e.url,className:"text-white mail-link proxima-regular ft-17px position-relative icon"},"  Connect on ".concat(e.channel))))})),N&&r.a.createElement("li",{className:"mb-0 lh-1"},r.a.createElement("h5",null,r.a.createElement(i.a,{icon:u.faFile,className:"text-white icon-w8px-h20px"})," ",r.a.createElement("a",{href:N,rel:"nofollow",className:"text-white mail-link proxima-regular ft-17px position-relative icon"}," Download Biography"))),x&&r.a.createElement("li",{className:"mb-0 lh-1"},r.a.createElement("h5",null,r.a.createElement(i.a,{icon:d.faAddressCard,className:"text-white icon-w8px-h20px"}),r.a.createElement("a",{href:x,className:"text-white mail-link proxima-regular ft-17px position-relative icon"}," Download Contact"))))))))}},2:function(e,t,a){a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"j",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"h",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"d",(function(){return m})),a.d(t,"g",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"i",(function(){return d}));var n=function(e){return{__html:e}};function r(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))}var l=function(e){return e.toLowerCase().replace(/\s/g,"-")},c=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()};function i(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0})),e}var o={Accept:"application/json","Content-Type":"application/json"},m=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"589 8th Avenue, New York, NY, 10018"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(a){var n=a.coords,r=n.latitude,l=n.longitude,c=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),i=t.filter((function(e){return e.title===c}))[0].address,o="https://www.google.com/maps/dir/".concat(r,"+").concat(l,"/").concat(i);window.open(o,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})};function s(){return window.print(),!1}function u(e){var t=new Date(e);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDay(),", ").concat(t.getFullYear())}function d(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0})),e}},207:function(e,t,a){a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),l=a(11),c=a(10),i=a(4);function o(e){var t=e.children;return r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,t)))}},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},69:function(e,t,a){},776:function(e,t,a){a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),i=a(143),o=a(40),m=a(37),s=a(10),u=a(4),d=a(11),f=a(97),p=a.n(f),b=a(170);a(207);var h=a(171),E=a(172),y=a(85),v=a(44),g=a(35),w=a(63),N=a(2);function x(e){var t=e.children,a=e.eventKey,l=e.callback,c=Object(n.useContext)(g.a),i=Object(w.b)(a,(function(){return l&&l(a)})),o=c===a;return r.a.createElement("button",{type:"button",variant:"transparent",className:"red-title proxima-bold mb-3 read-more-btn",onClick:i},o?t:r.a.createElement("u",null,"Read More >>"))}function k(e){e.tabTitle;var t=e.content,a=e.title,n=(e.toggleReadMore,e.readMore,t.split(/<p[^>]*>/).filter((function(e){return""!==e}))),l=n[0].replace("</p>",""),c=n[1],i=n.slice(2,n.length).join("<p>");return r.a.createElement(y.a,{eventKey:"biography",title:a},r.a.createElement("h4",{className:"bg-light-gray"},a),r.a.createElement("p",{className:"bio",dangerouslySetInnerHTML:Object(N.b)(l),id:"nav-bio-tab"}),r.a.createElement("p",{className:"bio",dangerouslySetInnerHTML:Object(N.b)(c)}),r.a.createElement(v.a,null,r.a.createElement(x,{eventKey:0},r.a.createElement("u",null,"Read Less >>")),r.a.createElement(v.a.Collapse,{eventKey:0},r.a.createElement("div",{id:"example-fade-text",className:"bio",dangerouslySetInnerHTML:Object(N.b)(i)}))))}var j=a(72),O=a(12),S=a(100),M=a(99);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function T(e){var t=e.children,a=e.eventKey,l=e.callback,c=Object(n.useContext)(g.a),i=Object(w.b)(a,(function(){return l&&l(a)})),o=c===a;return r.a.createElement("button",{type:"button",variant:"link",className:"sidebar-title w-100 p-2 text-left",onClick:i},t,o?r.a.createElement(O.a,{icon:M.faMinus,className:"text-white float-right mw-18"}):r.a.createElement(O.a,{icon:S.faPlus,className:"text-white float-right mw-18"}))}function C(e){var t=P(Object(n.useState)(!1),2),a=(t[0],t[1],e.content),l=e.title,c=e.tabTitle;return r.a.createElement(j.a.Pane,{eventKey:c,title:l},r.a.createElement("h4",{className:"bg-light-gray"},l),a.length>1?r.a.createElement(v.a,{defaultActiveKey:0},a.map((function(e,t){return r.a.createElement("div",{key:e.title,className:"mb-3"},r.a.createElement(T,{eventKey:t},r.a.createElement("h5",{className:"mb-0 pb-0 float-left"},e.title)),r.a.createElement(v.a.Collapse,{eventKey:t},r.a.createElement("div",{className:"off-white matters px-2 py-4",dangerouslySetInnerHTML:Object(N.b)(e.content)})))}))):r.a.createElement("div",{className:"off-white matters px-2 py-4",dangerouslySetInnerHTML:Object(N.b)(a[0].content)}))}var I=a(379);function L(e){var t=e.title,a=e.tabTitle,n=e.content;return r.a.createElement(y.a,{eventKey:a,title:t},r.a.createElement("h4",{className:"bg-light-gray"},t),r.a.createElement("div",{className:"article-container",id:"nav-".concat(a,"-tab")},r.a.createElement(I.a,{responsive:"sm",className:"mb-5"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,n.header&&n.header.map((function(e){return r.a.createElement("th",{key:e.c,className:"text-uppercase"},e.c)})))),r.a.createElement("tbody",null,n.body&&n.body.map((function(e){return r.a.createElement("tr",{key:Object(N.a)(e[0].c)},r.a.createElement("td",{dangerouslySetInnerHTML:Object(N.b)(e[0].c)}),r.a.createElement("td",{dangerouslySetInnerHTML:Object(N.b)(e[1].c)}),e[2]?r.a.createElement("td",null,e[2].c):r.a.createElement("td",null))}))))))}var K=a(219),R=a(145);function H(e){var t=e.tabTitle,a=e.title,n=e.content;return r.a.createElement(j.a.Pane,{eventKey:t,title:a},r.a.createElement("h4",{className:"bg-light-gray"},a),r.a.createElement("ul",null,r.a.createElement(R.a,{width:800,height:600,rowCount:n.length,rowHeight:250,rowRenderer:function(e){return function(e,t){var a=t.key,n=t.index,l=(t.isScrolling,t.isVisible,t.style,e[n]);return r.a.createElement("li",{key:a,className:"my-3 pb-3 border-bottom"},r.a.createElement("a",{href:l.link,className:"d-flex flex-row"},r.a.createElement(K.a,{src:l.featuredImg,className:"w-25 mr-3",rounded:!0}),r.a.createElement("div",null,r.a.createElement("h5",{className:"d-block w-100 mb-0 pt-0"},l.title),void 0!==l.date&&r.a.createElement("p",{className:"mt-0 pt-0"},Object(N.c)(l.date)))))}(n,e)}})))}function _(e){var t=e.tabTitle,a=e.title,n=e.content;return r.a.createElement(j.a.Pane,{eventKey:t,title:a},r.a.createElement("h4",{className:"bg-light-gray"},a),r.a.createElement("ul",null,r.a.createElement(R.a,{width:800,height:600,rowCount:n.length,rowHeight:600,rowRenderer:function(e){return function(e,t){var a=t.key,n=t.index,l=(t.isScrolling,t.isVisible,t.style,e[n]);return r.a.createElement("li",{key:a,className:"my-5 pb-5 border-bottom"},r.a.createElement("div",{dangerouslySetInnerHTML:Object(N.b)(l.embed_video),className:"mx-auto d-block mb-0 pb-0 w-500                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "}),r.a.createElement("h5",{className:"text-center my-0 p-y0"},l.title),r.a.createElement("h5",{className:"py-0 my-0 text-center"},Object(N.c)(l.date)))}(n,e)}})))}function z(e){var t=e.tabTitle,a=e.title,n=e.content;return r.a.createElement(j.a.Pane,{eventKey:t,title:a},r.a.createElement("h4",{className:"bg-light-gray"},a),r.a.createElement(d.a,{className:"container article-container"},r.a.createElement(s.a,null,r.a.createElement(u.a,{sm:12,dangerouslySetInnerHTML:Object(N.b)(n)}))))}function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){var t=e.children,a=e.eventKey,l=e.callback,c=Object(n.useContext)(g.a),i=Object(w.b)(a,(function(){return l&&l(a)})),o=c===a;return r.a.createElement("button",{type:"button",variant:"link",className:"sidebar-title w-100 p-2 text-left",onClick:i},t,o?r.a.createElement(O.a,{icon:M.faMinus,className:"text-white float-right icon-w8px-h20px"}):r.a.createElement(O.a,{icon:S.faPlus,className:"text-white float-right icon-w8px-h20px"}))}function J(e){var t=e.title,a=e.content,n=e.itemKey;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{defaultActiveKey:0},r.a.createElement("div",{key:t,className:"mb-3"},r.a.createElement(D,{eventKey:n},r.a.createElement("h5",{className:"mb-0 pb-0 float-left"},t)),r.a.createElement(v.a.Collapse,{eventKey:n},r.a.createElement("div",{className:"off-white"},r.a.createElement("ul",{className:"p-1 pt-3 sidebar-content-page"},a.map((function(e){return Object.keys(e).length>0&&r.a.createElement("li",{key:Object(N.a)("bio-info"),className:"mb--7px--lh-22--ft-14px"},e.link?r.a.createElement("a",{href:e.link,className:"proxima-bold"},e.title):r.a.createElement("strong",null,e.title),e.content&&"object"===F(e.content)?e.content.map((function(e){return r.a.createElement("div",{key:Object(N.a)("sub-bio-info")},r.a.createElement("span",{className:"proxima-bold"},e.title),r.a.createElement("div",{dangerouslySetInnerHTML:Object(N.b)(e.content)}))})):r.a.createElement("div",{dangerouslySetInnerHTML:Object(N.b)(e.content)}))}))))))))}var B=a(220),V=a.n(B),q=a(221),U=a.n(q),Y=(a(310),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}});function G(e){var t=e.slides;return t.length>0&&r.a.createElement(U.a,{responsive:Y,infinite:!0,arrows:!0,swipeable:!0},t.map((function(e){return r.a.createElement("div",{key:parseInt(e.id,10),className:"pb-2 px-4 carousel-slide level-".concat(parseInt(e.id,10))},r.a.createElement("a",{href:e.link},r.a.createElement(V.a,{height:150},r.a.createElement("img",{rel:"preconnect",src:e.image?e.image:e.featuredImg?e.featuredImg:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",alt:e.title,className:"img-thumbnail mx-auto d-block"})),r.a.createElement("h5",{className:"mt-3 mb-2 text-center"},e.category||""),r.a.createElement("p",{className:"text-muted small-excerpt text-center"},(t=e.title).length>200?"".concat(t.substring(0,200)," ..."):t)));var t})))}function W(e){var t=e.content,a=e.title;return r.a.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},r.a.createElement("div",{className:"line-header mb-3"},r.a.createElement("h3",null,a," ")),r.a.createElement(d.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{sm:12},t.length>3?r.a.createElement(G,{slides:t}):r.a.createElement("div",{className:"d-flex flex-row"},t.map((function(e){return r.a.createElement("a",{className:"mx-3",href:e.link},r.a.createElement("img",{src:e.featuredImg,width:"230",alt:e.title,className:"img-fluid"}))})))),"Awards"===a&&r.a.createElement(u.a,{sm:12},r.a.createElement(Link,{href:"/awards"},r.a.createElement("a",{className:"text-center d-block proxima-bold red-title"},"Award Methodology"))))))}function $(e){var t=e.title,a=e.content;return r.a.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},r.a.createElement("div",{className:"line-header mb-4"},r.a.createElement("h3",null,t)),a.length>3?r.a.createElement("div",{className:"featured-article-attorney-container"},r.a.createElement(G,{slides:a})):r.a.createElement(d.a,null,r.a.createElement(s.a,null,a.map((function(e){return r.a.createElement(u.a,{sm:12,md:4,key:Object(N.a)(e.title),className:"article-card"},r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e.featuredImg?e.featuredImg:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png",alt:e.title,width:"230",className:"img-thumbnail mt-3"}),r.a.createElement("h5",{className:"my-3 small-excerpt"},e.title)))})))))}a(111),a(117);function Z(e){return function(e){if(Array.isArray(e))return te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||ee(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t,a,n,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(n,r)}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||ee(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){if(e){if("string"==typeof e)return te(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?te(e,t):void 0}}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ae(){var e,t,a=X(Object(n.useState)({}),2),l=a[0],c=a[1],f=[];if(Object(n.useEffect)((function(){(function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,a,n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=window.location.search).indexOf("preview_id=")>-1&&(t=a.split("preview_id=").pop().split("&")[0]),a.indexOf("p=")>-1&&(t=a.split("p=").pop().split("&")[0]),e.next=4,Promise.all([fetch("".concat("https://admin.scarincihollenbeck.com","/wp-json/preview-attorney/attorney/").concat(t),{headers:N.e}).then((function(e){return e.json()}))]);case 4:n=e.sent,r=X(n,1),l=r[0],c(l);case 8:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function c(e){Q(l,n,r,c,i,"next",e)}function i(e){Q(l,n,r,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}})()()}),[]),void 0!==l&&(void 0!==l.newsPosts&&void 0!==l.eventPosts&&(f=[].concat(Z(l.newsPosts),Z(l.eventPosts))),void 0!==l.tabs)){var y=l.tabs,v=y.headers,g=y.body;e=v.filter((function(e){return"number"!=typeof e})),t=g.filter((function(e){return""!==e[1]}))}return r.a.createElement(r.a.Fragment,null,0===Object.keys(l).length?r.a.createElement(d.a,null,r.a.createElement(s.a,{id:"page-loader-container",className:"justify-content-center align-self-center"},r.a.createElement(p.a,{color:"#DB2220"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg",profile:r.a.createElement(h.a,{image:l.profileImage,name:l.fullName}),height:"auto",infoCard:r.a.createElement(E.a,{fullName:l.fullName,chair:l.chair,designation:l.designation,phoneNumber:l.phoneNumber,fax:l.fax,email:l.email,socialMediaLinks:l.socialMediaLinks,pdf:l.pdf,vizibility:l.vizibility})}),r.a.createElement(i.a,{className:"mb--1",id:"nav-tab",defaultActiveKey:"biography"},r.a.createElement(d.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{sm:12},r.a.createElement(m.a,null,r.a.createElement(m.a.Link,{eventKey:"biography",className:"main-tab"},"Biography"),l.representativeMatters&&r.a.createElement(m.a.Link,{eventKey:"representative-matters",className:"main-tab"},"Representative Matters"),l.representativeClients&&r.a.createElement(m.a.Link,{eventKey:"represntative-clients",className:"main-tab"},"Representative Clients"),l.presentations&&r.a.createElement(m.a.Link,{eventKey:"presentations",className:"main-tab"},"Presentations"),l.publications&&r.a.createElement(m.a.Link,{eventKey:"publications",className:"main-tab"},"Publications"),l.media&&r.a.createElement(m.a.Link,{eventKey:"media",className:"main-tab"},"Media"),l.blogPosts.length&&r.a.createElement(m.a.Link,{eventKey:"blogs",className:"main-tab"},"Articles"),f.length>0&&void 0!==f&&r.a.createElement(m.a.Link,{eventKey:"newsevents",className:"main-tab"},"News & Events"),l.videos&&r.a.createElement(m.a.Link,{eventKey:"videos",className:"main-tab"},"Videos"),l.tabs&&e.map((function(e){return r.a.createElement(m.a.Link,{key:Object(N.j)(e),eventKey:Object(N.j)(e),className:"main-tab"},e)})))),r.a.createElement(u.a,{sm:12,md:9,className:"mt-4"},r.a.createElement(o.a,null,r.a.createElement(k,{tabTitle:"biography",title:"Biography",content:l.biography})),l.representativeMatters&&r.a.createElement(o.a,null,r.a.createElement(C,{tabTitle:"representative-matters",title:"Representative Matters",content:l.representativeMatters})),l.representativeClients&&r.a.createElement(o.a,null,r.a.createElement(C,{tabTitle:"representative-clients",title:"Representative Clients",content:l.representativeClients})),l.presentations&&r.a.createElement(o.a,null,r.a.createElement(L,{tabTitle:"presentations",title:"Presentations",content:l.presentations})),l.publications&&r.a.createElement(o.a,null,r.a.createElement(L,{tabTitle:"publications",title:"Publications",content:l.publications})),l.media&&r.a.createElement(o.a,null,r.a.createElement(L,{tabTitle:"media",title:"Media",content:l.media})),l.blogPosts.length>0&&r.a.createElement(o.a,null,r.a.createElement(H,{tabTitle:"blogs",title:"Articles",content:Object(N.h)(l.blogPosts,"date")})),f.length>0&&void 0!==f&&r.a.createElement(o.a,null,r.a.createElement(H,{tabTitle:"newsevents",title:"News & Events",content:f})),l.videos&&r.a.createElement(o.a,null,r.a.createElement(_,{title:"Videos",content:l.videos,tabTitle:"videos"})),l.tabs&&r.a.createElement(o.a,null,t.map((function(e){return r.a.createElement(z,{key:Object(N.a)(e[1]),title:e[1],content:e[2],tabTitle:Object(N.j)(e[1])})}))),l.clients&&l.clients.length>0&&r.a.createElement(W,{content:l.clients,title:"Clients"}),l.awards&&l.awards.length>0&&r.a.createElement(W,{content:l.awards,title:"Awards"}),f.length>0&&r.a.createElement($,{title:"News & Events",content:f}),l.blogPosts&&l.blogPosts.length>0&&r.a.createElement($,{title:"Recent Articles",content:Object(N.h)(l.blogPosts,"date")})),r.a.createElement(u.a,{sm:12,md:3,className:"mt-4"},r.a.createElement(J,{title:"Related Practices",content:l.relatedPractices,itemKey:0}),r.a.createElement("br",null),r.a.createElement(J,{title:"Additional Information",content:l.sidebar,itemKey:1})))))))}a(118),a(119),a(54),a(120),a(55),a(56),a(57),a(58),a(59),a(121),a(122),a(123),a(124),a(69),a(83),a(125),a(126);c.a.render(r.a.createElement(ae,null),document.getElementById("single-attorney"))},83:function(e,t,a){}});