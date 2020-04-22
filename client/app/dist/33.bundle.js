(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{478:function(e,t,n){n.r(t);var a=n(0),r=n.n(a),o=n(480),c=n(695),i=n(486),l=n(481),s=n(484),u=n(3),d=n.n(u);function f(e){var t=e.list;return r.a.createElement("div",{className:"mt-5"},r.a.createElement("ul",{className:"practices row no-dots"},t.map((function(e){return r.a.createElement("li",{className:"col-sm-12 col-md-4 text-center m-0 mt-2",key:e.ID},r.a.createElement("div",{className:"dropdown-toggle practice-menu-box",id:"menu-item-dropdown-".concat(e.ID)},r.a.createElement("a",{href:e.slug,className:"practice-link"},e.title),e.children.length>0?r.a.createElement("ul",{className:"practice-dropdown dropdown-menu mx-0 w-100 px-0 no-dots mt-2"},e.children.map((function(e){return r.a.createElement("li",{key:e.ID},r.a.createElement("a",{href:e.slug,className:"practice-dropdown-child dropdown-item"},e.title))}))):""))}))))}f.propTypes={list:d.a.arrayOf(d.a.object)},f.defaultProps={list:[]};var p=f;function m(e){var t=e.list;return r.a.createElement("div",{className:"mt-5"},r.a.createElement("ul",{className:"blue-title column-list"},t.map((function(e){return r.a.createElement("li",{key:e.ID},r.a.createElement("a",{href:e.slug,className:"blue-title proxima-bold"},e.title))}))))}m.propTypes={list:d.a.arrayOf(d.a.object)},m.defaultProps={list:[]};var h=m;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(f,e);var t,n,a,u,d=(t=f,function(){var e,n=E(t);if(w()){var a=E(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return v(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=d.call(this,e)).state={core:[],additional:[],business:[],seo:{}},t}return n=f,(a=[{key:"componentDidMount",value:function(){var e=this;Object(c.a)().then((function(t){var n,a={core:(n=t.practices).filter((function(e){return"Core Practices"===e.category})),additional:n.filter((function(e){return"Additional Practices"===e.category})),business:n.filter((function(e){return"Business Related Practices"===e.category}))},r=t.seo,o=a.core,c=a.additional,i=a.business;e.setState({core:o,additional:c,business:i,seo:r})}))}},{key:"render",value:function(){var e=this.state,t=e.core,n=e.additional,a=e.business,c=e.seo,u=Object(o.h)(t,"title"),d=Object(o.h)(n,"title"),f=Object(o.h)(a,"title");return r.a.createElement("div",null,r.a.createElement(i.a,{seo:c}),r.a.createElement(l.a,{title:"Legal Practices",subtitle:"Scarinci Hollenbeck attorneys at law provide a fully scaled platform of law practices for today's businesses. Recognizing the complexity of the law practices, we have staffed each practice group with lawyers experienced in the particular area of your need.",image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg"}),r.a.createElement(s.a,null,r.a.createElement("div",{id:"archive-practice"},r.a.createElement("p",{className:"text-muted lead text-center w-100"},"As you scroll through the law practices and locate the sub-practice groups that most closely identifies with your need, feel free to contact any of the attorneys identified within the sub-practice group. Feel free to contact any of the Section Chiefs identified under each of the named law practices. They will be happy to assist you and guide you to the appropriate attorney for resolution of your issue."),r.a.createElement("div",{className:"mt-4 px-0"},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"CORE PRACTICES"))),r.a.createElement(p,{list:u,id:28270}),r.a.createElement("div",{className:"mt-4 px-0"},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"ADDITIONAL PRACTICES"))),r.a.createElement(p,{list:d,id:28270}),r.a.createElement("div",{className:"mt-4 px-0"},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"BUSINESS RELATED LEGAL SERVICES"))),r.a.createElement(h,{list:f}))))}}])&&b(n.prototype,a),u&&b(n,u),f}(a.Component);t.default=N},480:function(e,t,n){n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d}));var a=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},o=function(e){return e.toLowerCase().replace(/\s/g,"-")},c=function(e){return{__html:e}},i=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},l=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var a=n.coords,r=a.latitude,o=a.longitude,c=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),i=t.filter((function(e){return e.title===c}))[0].address,l="https://www.google.com/maps/dir/".concat(r,"+").concat(o,"/").concat(i);window.open(l,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},u=function(e,t){for(var n=[],a=0;a<e.length;a+=1)e[a].key&&e[a].key===t&&n.push(e[a].selected);return n},d=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},481:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=n(483),l=n(480);function s(){var e=d(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return s=function(){return e},e}function u(){var e=d(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return u=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=function(e){var t=e.title,n=e.subtitle,a=e.image,o=e.height,c=i.a.div(u(),a,o),d=i.a.div(s());return r.a.createElement(c,{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(l.b)(n)}))))))};f.propTypes={image:c.a.string,title:c.a.string,subtitle:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),height:c.a.string},f.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=f},484:function(e,t,n){var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},486:function(e,t,n){var a=n(0),r=n.n(a),o=n(482),c=n(3),i=n.n(c);function l(e){var t=e.seo;return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))}l.propTypes={seo:i.a.objectOf(i.a.string)},l.defaultProps={seo:{}},t.a=l},695:function(e,t,n){(function(e){n.d(t,"a",(function(){return r})),n(132).polyfill(),n(696);var a={Accept:"application/json","Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"},r=function(){return e("".concat("http://localhost:8400","/wp-json/practice-portal/page/"),{headers:a}).then((function(e){return e.json()})).then((function(e){return e}))}}).call(this,n(130))}}]);