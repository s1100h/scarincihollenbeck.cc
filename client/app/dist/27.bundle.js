(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{466:function(e,t,n){n.r(t),function(e){var a=n(0),r=n.n(a),o=n(481),i=n(487),c=n(484),l=n(480),s=n(711);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(v,t);var n,a,m,b,h=(n=v,function(){var e,t=g(n);if(p()){var a=g(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return f(this,e)});function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=h.call(this,e)).state={mainContent:"",mainTabs:[],additionalInfo:[],members:{},seo:{}},t}return a=v,(m=[{key:"componentDidMount",value:function(){var t=this;e("".concat("http://localhost:8200","/cached/firm-overview"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var n=e.mainTabs,a=e.additionalInfo,r=e.members,o=e.mainContent,i=e.seo;t.setState({mainTabs:n,additionalInfo:a,members:r,seo:i,mainContent:o})}))}},{key:"render",value:function(){var e=this.state,t=e.mainTabs,n=e.additionalInfo,a=e.members,m=e.mainContent,u=e.seo,d=m.match(/<h2(.*?)>(.*?)<\/h2>/g),f=m.replace(d,"");return r.a.createElement("div",null,r.a.createElement(i.a,{seo:u}),r.a.createElement(o.a,{title:"Firm Overview",subtitle:d,image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground-1.jpg",height:"325px"}),r.a.createElement(c.a,{id:"firm-overview"},r.a.createElement("div",{className:"text-muted lead text-center",dangerouslySetInnerHTML:Object(l.b)(f)}),r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{className:"w-100 mt-4 px-0",key:e.title},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,e.subTitle)),r.a.createElement("div",{className:"lead mt-4 text-center body-text",dangerouslySetInnerHTML:Object(l.b)(e.content)}))})),r.a.createElement("div",{className:"border"},r.a.createElement(s.a,{title:"Managing Partners",members:a.managingPartners}),r.a.createElement(s.a,{title:"Partners",members:a.partners}),r.a.createElement(s.a,{title:"Directors",members:a.admin})),n.map((function(e){return r.a.createElement("div",{className:"w-100 mt-4 px-0",key:e.title},r.a.createElement("h4",{className:"bg-light-gray"},e.title),r.a.createElement("div",{className:"lead mt-4 body-text",dangerouslySetInnerHTML:Object(l.b)(e.content)}))})))))}}])&&u(a.prototype,m),b&&u(a,b),v}(a.Component);t.default=b}.call(this,n(130))},480:function(e,t,n){n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return u}));var a=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},o=function(e){return e.toLowerCase().replace(/\s/g,"-")},i=function(e){return{__html:e}},c=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},l=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var a=n.coords,r=a.latitude,o=a.longitude,i=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),c=t.filter((function(e){return e.title===i}))[0].address,l="https://www.google.com/maps/dir/".concat(r,"+").concat(o,"/").concat(c);window.open(l,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},m=function(e,t){for(var n=[],a=0;a<e.length;a+=1)e[a].key&&e[a].key===t&&n.push(e[a].selected);return n},u=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},481:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(483),l=n(480);function s(){var e=u(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return s=function(){return e},e}function m(){var e=u(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return m=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=function(e){var t=e.title,n=e.subtitle,a=e.image,o=e.height,i=c.a.div(m(),a,o),u=c.a.div(s());return r.a.createElement(i,{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(l.b)(n)}))))))};d.propTypes={image:i.a.string,title:i.a.string,subtitle:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),height:i.a.string},d.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=d},484:function(e,t,n){var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},487:function(e,t,n){var a=n(0),r=n.n(a),o=n(482),i=n(3),c=n.n(i);function l(e){var t=e.seo;return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": '.concat(t.title,',\n          "description": {').concat(t.metaDescription,',\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))}l.propTypes={seo:c.a.objectOf(c.a.string)},l.defaultProps={seo:{}},t.a=l},489:function(e,t,n){var a=n(0),r=n.n(a),o=n(15),i=n(94),c=n(492),l=n(493),s=n(3),m=n.n(s);function u(e){var t=e.link,n=e.image,a=e.name,s=e.title,m=e.number,u=e.email,d=e.height,f=e.width;return r.a.createElement("div",{className:"d-flex flex-row attorney-card",height:d},r.a.createElement(o.b,{to:t},r.a.createElement("img",{rel:"preload",src:n,alt:a,className:"mr-1",style:{width:f}})),r.a.createElement("div",{className:"mt-3 ml-3"},r.a.createElement(o.b,{to:t},r.a.createElement("p",{className:"text-uppercase red-title small-excerpt"},r.a.createElement("strong",null,a)),r.a.createElement("p",{className:"mb-1 small-excerpt"},r.a.createElement("strong",null,s))),r.a.createElement("div",{className:"small-excerpt"},r.a.createElement(i.a,{icon:c.faPhone})," ",m,r.a.createElement("br",null),r.a.createElement(i.a,{icon:l.faEnvelope})," ",u)))}u.propTypes={image:m.a.string,name:m.a.string,title:m.a.string,number:m.a.string,email:m.a.string,link:m.a.string,height:m.a.string,width:m.a.string},u.defaultProps={image:"",name:"",title:"",number:"",email:"",link:"",height:"",width:""},t.a=u},711:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(489);function l(e){var t=e.title,n=e.members;return r.a.createElement("div",{className:"col-sm-12 mt-5"},r.a.createElement("h4",{className:"red-title border-bottom"},t),r.a.createElement("div",{className:"container articles-container mt-3"},r.a.createElement("div",{className:"row"},n.map((function(e){return r.a.createElement("div",{key:e.ID,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(c.a,{link:e.link,image:e.image,name:e.name,title:"Directors"===t?e.title:e.designation,number:"Directors"===t?"201-896-4100 ".concat(e.extension):e.phone,email:e.email,height:"auto",width:"81px"}))})))))}l.propTypes={title:i.a.string,members:i.a.arrayOf(i.a.object)},l.defaultProps={title:"",members:[]},t.a=l}}]);