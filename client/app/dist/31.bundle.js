(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{460:function(e,t,n){n.r(t),function(e){var r=n(0),a=n.n(r),o=n(481),i=n(484),c=n(486),l=n(489);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(b,t);var n,r,s,g,h=(n=b,function(){var e,t=d(n);if(p()){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=h.call(this,e)).state={admins:[],seo:{}},t}return r=b,(s=[{key:"componentDidMount",value:function(){var t=this;e("".concat("http://localhost:8200","/cached/administration-archives"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var n=e.admins,r=e.seo;t.setState({admins:n,seo:r})}))}},{key:"render",value:function(){var e=this.state,t=e.admins,n=e.seo;return a.a.createElement("div",null,a.a.createElement(c.a,{seo:n}),a.a.createElement(o.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/attorney-archive-header.jpg",title:"Administration",subtitle:" In order to fulfill the varying needs of our clients, the firm's group of attorneys rely on the support of Scarinci Hollenbeck's Administration group."}),a.a.createElement(i.a,null,a.a.createElement("div",{id:"archive-admin",className:"container p-3 pt-4 border"},a.a.createElement("div",{className:"row"},t.length>0&&t.map((function(e){return a.a.createElement("div",{key:e.ID,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},a.a.createElement(l.a,{image:e.image.url,name:e.name,link:e.link,title:e.Title,number:"201-896-4100 ".concat(e.phone_extension),email:e.email,height:"112px",width:"107px"}))}))))))}}])&&u(r.prototype,s),g&&u(r,g),b}(r.Component);t.default=g}.call(this,n(130))},480:function(e,t,n){n.d(t,"h",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return m}));var r=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},a=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},o=function(e){return e.toLowerCase().replace(/\s/g,"-")},i=function(e){return{__html:e}},c=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},l=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var r=n.coords,a=r.latitude,o=r.longitude,i=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),c=t.filter((function(e){return e.title===i}))[0].address,l="https://www.google.com/maps/dir/".concat(a,"+").concat(o,"/").concat(c);window.open(l,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},u=function(e,t){for(var n=[],r=0;r<e.length;r+=1)e[r].key&&e[r].key===t&&n.push(e[r].selected);return n},m=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},481:function(e,t,n){var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=n(483),l=n(480);function s(){var e=m(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return s=function(){return e},e}function u(){var e=m(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return u=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=function(e){var t=e.title,n=e.subtitle,r=e.image,o=e.height,i=c.a.div(u(),r,o),m=c.a.div(s());return a.a.createElement(i,{className:"jumbotron jumbotron-fluid"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement(m,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},a.a.createElement("div",{className:"p-3"},a.a.createElement("span",{id:"red-block"}),a.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),a.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(l.b)(n)}))))))};f.propTypes={image:i.a.string,title:i.a.string,subtitle:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),height:i.a.string},f.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=f},484:function(e,t,n){var r=n(0),a=n.n(r);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-12"},t)))}},486:function(e,t,n){var r=n(0),a=n.n(r),o=n(482),i=n(3),c=n.n(i);function l(e){var t=e.seo;return a.a.createElement(o.Helmet,null,a.a.createElement("title",null,t.title),a.a.createElement("meta",{name:"description",content:t.metaDescription}),a.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),a.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))}l.propTypes={seo:c.a.objectOf(c.a.string)},l.defaultProps={seo:{}},t.a=l},489:function(e,t,n){var r=n(0),a=n.n(r),o=n(15),i=n(94),c=n(492),l=n(493),s=n(3),u=n.n(s);function m(e){var t=e.link,n=e.image,r=e.name,s=e.title,u=e.number,m=e.email,f=e.height,p=e.width;return a.a.createElement("div",{className:"d-flex flex-row attorney-card",height:f},a.a.createElement(o.b,{to:t},a.a.createElement("img",{rel:"preload",src:n,alt:r,className:"mr-1",style:{width:p}})),a.a.createElement("div",{className:"mt-3 ml-3"},a.a.createElement(o.b,{to:t},a.a.createElement("p",{className:"text-uppercase red-title small-excerpt"},a.a.createElement("strong",null,r)),a.a.createElement("p",{className:"mb-1 small-excerpt"},a.a.createElement("strong",null,s))),a.a.createElement("div",{className:"small-excerpt"},a.a.createElement(i.a,{icon:c.faPhone})," ",u,a.a.createElement("br",null),a.a.createElement(i.a,{icon:l.faEnvelope})," ",m)))}m.propTypes={image:u.a.string,name:u.a.string,title:u.a.string,number:u.a.string,email:u.a.string,link:u.a.string,height:u.a.string,width:u.a.string},m.defaultProps={image:"",name:"",title:"",number:"",email:"",link:"",height:"",width:""},t.a=m}}]);