(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{462:function(e,t,a){a.r(t),function(e){var n=a(0),r=a.n(n),c=a(698),i=a(522),l=a(523),o=a(484),s=a(699),m=a(700),u=a(702),d=a(703),b=a(480),p=a(833);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(x,t);var a,n,f,h,k=(a=x,function(){var e,t=w(a);if(N()){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function x(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,x),(t=k.call(this,e)).state={bio:[],currentTab:"biography",currentSidebarTab:"Related Practices",matterTab:"",readMore:!1,spinner:!1},t.fetchPostData=t.fetchPostData.bind(T(t)),t.tabClick=t.tabClick.bind(T(t)),t.matterClick=t.matterClick.bind(T(t)),t.toggleReadMore=t.toggleReadMore.bind(T(t)),t.setSideBarTab=t.setSideBarTab.bind(T(t)),t}return n=x,(f=[{key:"componentDidMount",value:function(){var e=this.props.match.params.attorney;this.fetchPostData("".concat("http://localhost:8400","/wp-json/individual-attorney/attorney/").concat(e))}},{key:"fetchPostData",value:function(t){var a=this;e(t,{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var t="";void 0!==e.representativeMatters[0]&&(t=e.representativeMatters[0].title),a.setState({matterTab:t,bio:e,spinner:!1})}))}},{key:"tabClick",value:function(e){var t=e;this.setState({currentTab:t})}},{key:"matterClick",value:function(e){var t=e;this.setState({matterTab:t})}},{key:"setSideBarTab",value:function(e){var t=e;this.setState({currentSidebarTab:t})}},{key:"toggleReadMore",value:function(){this.setState((function(e){return{readMore:!e.readMore}}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.bio,f=a.currentTab,h=a.matterTab,E=a.readMore,v=a.spinner,y=a.currentSidebarTab,T=n.fullName,N=n.designation,w=n.profileImage,k=n.phoneNumber,x=n.email,C=n.biography,S=n.fax,j=n.clients,M=n.socialMediaLinks,O=n.representativeMatters,P=n.representativeClients,R=n.relatedPractices,A=n.additionalInformation,L=n.education,I=n.barAdmissions,_=n.eventPosts,B=n.newsPosts,z=n.blogPosts,H=n.awards,D=n.presentations,F=n.publications,$=n.media,q=n.videos,J=n.tabs,U=n.chair,W=n.pdf,V=n.vizibility,Y=n.seo,G={title:"Education",content:L},Z={title:"Bar Admissions",content:I};void 0!==A&&!1!==A&&(e=[G,Z].concat(g(A))),e=[G,Z];var K,Q,X=[];if(void 0!==B&&void 0!==_&&(X=[].concat(g(B),g(_))),void 0!==J){var ee=J.headers,te=J.body;K=ee.filter((function(e){return"number"!=typeof e})),Q=te.filter((function(e){return""!==e[1]}))}return r.a.createElement("div",{id:"single-attorney"},r.a.createElement(c.a,{seo:Y}),!v&&r.a.createElement("div",null,r.a.createElement(i.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/attorney-header.jpg",profile:r.a.createElement(s.a,{image:w,name:T}),height:"325px",infoCard:r.a.createElement(m.a,{fullName:T,chair:U,designation:N,phoneNumber:k,fax:S,email:x,socialMediaLinks:M,pdf:W,vizibility:V})}),r.a.createElement(o.a,null,r.a.createElement("div",{className:"line-header",id:"nav-tab",role:"tablist"},r.a.createElement(u.a,{currentTab:f,tabTitle:"biography",tabClick:this.tabClick,title:"Biography"}),O&&r.a.createElement(u.a,{currentTab:f,tabTitle:"representative-matters",tabClick:this.tabClick,title:"Representative Matters"}),P&&r.a.createElement(u.a,{currentTab:f,tabTitle:"representative-clients",tabClick:this.tabClick,title:"Representative Clients"}),D&&r.a.createElement(u.a,{currentTab:f,tabTitle:"presentations",tabClick:this.tabClick,title:"Presentations"}),F&&r.a.createElement(u.a,{currentTab:f,tabTitle:"publications",tabClick:this.tabClick,title:"Publications"}),$&&r.a.createElement(u.a,{currentTab:f,tabTitle:"media",tabClick:this.tabClick,title:"Media"}),z&&z.length>0&&r.a.createElement(u.a,{currentTab:f,tabTitle:"blogs",tabClick:this.tabClick,title:"Articles"}),X.length>0&&void 0!==X&&r.a.createElement(u.a,{currentTab:f,tabTitle:"newsevents",tabClick:this.tabClick,title:"News & Events"}),q&&r.a.createElement(u.a,{currentTab:f,tabTitle:"videos",tabClick:this.tabClick,title:"Videos"}),J&&K.map((function(e){return r.a.createElement(u.a,{key:e,currentTab:f,tabTitle:Object(b.i)(e),tabClick:t.tabClick,title:e})})))),r.a.createElement(l.a,{body:r.a.createElement(p.a,{biography:C,currentTab:f,readMore:E,toggleReadMore:this.toggleReadMore,representativeMatters:O,matterClick:this.matterClick,matterTab:h,representativeClients:P,presentations:D,publications:F,media:$,blogPosts:z,newsEventArticles:X,videos:q,tabs:J,clients:j,awards:H,filterBody:Q}),sidebar:r.a.createElement("span",null,r.a.createElement(d.a,{title:"Related Practices",content:R,currentSidebarTab:y,setSideBarTab:this.setSideBarTab,show:!0}),r.a.createElement("br",null),r.a.createElement(d.a,{title:"Additional Information",content:e,currentSidebarTab:y,setSideBarTab:this.setSideBarTab,show:!0}))})))}}])&&E(n.prototype,f),h&&E(n,h),x}(n.Component);t.default=k}.call(this,a(130))},480:function(e,t,a){a.d(t,"h",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"i",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"g",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return m})),a.d(t,"f",(function(){return u}));var n=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},c=function(e){return e.toLowerCase().replace(/\s/g,"-")},i=function(e){return{__html:e}},l=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0})),e},o=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(a){var n=a.coords,r=n.latitude,c=n.longitude,i=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),l=t.filter((function(e){return e.title===i}))[0].address,o="https://www.google.com/maps/dir/".concat(r,"+").concat(c,"/").concat(l);window.open(o,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},m=function(e,t){for(var a=[],n=0;n<e.length;n+=1)e[n].key&&e[n].key===t&&a.push(e[n].selected);return a},u=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},484:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},522:function(e,t,a){var n=a(0),r=a.n(n),c=a(483);function i(){var e=o(["\n  background-color: rgba(0,0,0, .50);\n  border-radius: 4px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);\n  max-height: ",";\n"]);return i=function(){return e},e}function l(){var e=o(["\n  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n"]);return l=function(){return e},e}function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.a=function(e){var t=e.profile,a=e.infoCard,n=e.image,o=e.height,s=c.a.div(l(),n),m=c.a.div(i(),o);return r.a.createElement(s,{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container animated fadeInUp fast mt--1 max-width-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-4 mb-3 mr-4 mh-325"},t),r.a.createElement(m,{className:"col-sm-12 col-md-7"},a))))}},523:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.body,a=e.sidebar;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-9"},t),r.a.createElement("div",{className:"col-sm-12 col-md-3"},a)))}},698:function(e,t,a){var n=a(0),r=a.n(n),c=a(482),i=a(3),l=a.n(i);function o(e){var t=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:site_name",content:"Scarinci Hollenbeck"}),r.a.createElement("meta",{property:"og:type",content:"profile"}),r.a.createElement("meta",{property:"og:locale",content:"en_US"}),r.a.createElement("meta",{property:"og:url",content:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("meta",{property:"og:image",content:t.featuredImg}),r.a.createElement("meta",{property:"og:image:secure_url",content:t.featuredImg}),r.a.createElement("meta",{property:"og:image:width",content:t.imgWidth}),r.a.createElement("meta",{property:"og:image:height",content:t.imgHeight}),r.a.createElement("meta",{property:"og:image:type",content:"image/jpg"}),r.a.createElement("meta",{property:"profile:first_name",content:t.firstName}),r.a.createElement("meta",{property:"profile:last_name",content:t.lastName}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:description",content:t.metaDescription}),r.a.createElement("meta",{name:"twitter:title",content:t.title}),r.a.createElement("meta",{name:"twitter:site",content:"@S_H_Law"}),r.a.createElement("meta",{name:"twitter:image",content:t.featuredImg}),r.a.createElement("meta",{name:"twitter:creator",content:"@S_H_Law"}),r.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "http://schema.org",\n          "@type": "LegalService",\n          "name": '.concat(t.fullName,',\n          "description": ').concat(t.schemaDescription,',\n          "url": ').concat(window.location.origin,"/").concat(t.canonicalLink,',\n          "image": ').concat(t.featuredImg,',\n          "priceRange": "$$$$",\n          "telephone": ').concat(t.phone,',\n          "email": ').concat(t.email,',\n          "hasMap": ').concat(t.map,',\n          "address": {\n            "@type": "PostalAddress",\n            "addressLocality": ').concat(t.town,',\n            "addressRegion": ').concat(t.state,',\n            "postalCode": ').concat(t.zip,',\n            "streetAddress": ').concat(t.address,'\n          },\n          "geo": {\n            "@type": "GeoCoordinates",\n            "latitude": ').concat(t.lat,',\n            "longitude": ').concat(t.long,'\n          },\n          "sameAs": ').concat(t.socialMedia,',\n          "openingHours": "Mo,Tu,We,Th,Fr, 8:00-5:00"\n        }\n        ')))}o.propTypes={seo:l.a.objectOf(l.a.oneOfType([l.a.string,l.a.number,l.a.arrayOf(l.a.string)]))},o.defaultProps={seo:{}},t.a=o},699:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),i=a.n(c);function l(e){var t=e.image,a=e.name;return r.a.createElement("img",{rel:"preload",src:t,alt:a,className:"img-fluid white-transparent-border"})}l.propTypes={image:i.a.string,name:i.a.string},l.defaultProps={image:"",name:""},t.a=l},700:function(e,t,a){var n=a(0),r=a.n(n),c=a(94),i=a(492),l=a(536),o=a(493),s=a(701),m=a(539),u=a(505),d=a(506),b=a(507),p=a(537),f=a(538),g=a(3),h=a.n(g);function E(e){var t=e.fullName,a=e.chair,n=e.designation,g=e.phoneNumber,h=e.fax,E=e.email,v=e.socialMediaLinks,y=e.pdf,T=e.vizibility;return r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white border-bottom"},t?"".concat(t," "):"",void 0!==a&&a.length>0?r.a.createElement("span",{className:" h5 text-white"},"-"," ".concat(n)):"")),void 0!==a&&a.length>0?r.a.createElement("div",{className:"my-3"},a.map((function(e){return r.a.createElement("span",{key:e.title,className:"text-white h5"},r.a.createElement("strong",null,"Chair: "),r.a.createElement("a",{href:e.link,className:"text-white chair-link h5"},e.title," ","Practice"),r.a.createElement("br",null))}))):r.a.createElement("div",{className:"col-sm-12 mt-3"},r.a.createElement("h4",{className:"text-white ml--10px"},n)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("ul",{className:"text-white no-dots mt-2 ml-0"},g?r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:i.faPhone,className:"text-white"})," ",r.a.createElement("span",{className:"proxima-regular ft-17px"},"  ".concat(g)))):"",h?r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:l.faFax,className:"text-white"})," ",r.a.createElement("span",{className:"proxima-regular ft-17px"},"  ".concat(h)))):"",E?r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:o.faEnvelope,className:"text-white"}),r.a.createElement("a",{href:"mailto:".concat(E),className:"text-white proxima-regular mail-link ft-17px"}," ".concat(E)))):"")),r.a.createElement("div",{className:"col-sm-12 col-md-6"},v?r.a.createElement("span",null,r.a.createElement("ul",{className:"ml-0 mt-2"},v.map((function(e){return r.a.createElement("li",{key:e.channel,className:"mb-0 lh-1"},r.a.createElement("h5",null,"Twitter"===e.channel&&r.a.createElement(c.a,{icon:u.faTwitter,className:"text-white"}),"Facebook"===e.channel&&r.a.createElement(c.a,{icon:d.faFacebookSquare,className:"text-white"}),"LinkedIn"===e.channel&&r.a.createElement(c.a,{icon:b.faLinkedin,className:"text-white"}),"Skype"===e.channel&&r.a.createElement(c.a,{icon:p.faSkype,className:"text-white"}),"Instagram"===e.channel&&r.a.createElement(c.a,{icon:f.faInstagram,className:"text-white"}),r.a.createElement("a",{href:e.url,className:"text-white mail-link proxima-regular ft-17px position-relative icon"},"  Connect on ".concat(e.channel))))})),y?r.a.createElement("li",{className:"mb-0 lh-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:s.faFile,className:"text-white"})," ",r.a.createElement("a",{href:y,className:"text-white mail-link proxima-regular ft-17px position-relative icon"}," Download Biography"))):"",T?r.a.createElement("li",{className:"mb-0 lh-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:m.faAddressCard,className:"text-white"}),r.a.createElement("a",{href:T,className:"text-white mail-link proxima-regular ft-17px position-relative icon"}," Download Contact"))):"")):"")))}E.propTypes={fullName:h.a.string,chair:h.a.arrayOf(h.a.oneOfType([h.a.string,h.a.object])),designation:h.a.string,phoneNumber:h.a.string,fax:h.a.string,email:h.a.string,socialMediaLinks:h.a.arrayOf(h.a.object),pdf:h.a.string,vizibility:h.a.string},E.defaultProps={fullName:"",chair:[],designation:"",phoneNumber:"",fax:"",email:"",socialMediaLinks:[],pdf:"",vizibility:""},t.a=E},702:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),i=a.n(c);function l(e){var t=e.currentTab,a=e.tabTitle,n=e.tabClick,c=e.title;return r.a.createElement("h3",{className:t===a?"active":"",id:"nav-home-tab","data-toggle":"tab",onClick:function(){return n(a)},href:"#".concat(a),role:"tab",tabIndex:"0","aria-controls":"nav-home","aria-selected":!0,"aria-hidden":!0},c)}l.propTypes={currentTab:i.a.string,tabTitle:i.a.string,tabClick:i.a.func,title:i.a.string},l.defaultProps={currentTab:"",tabTitle:"",tabClick:function(){},title:""},t.a=l},703:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),i=a.n(c),l=a(94),o=a(521),s=a(520),m=a(480);function u(e){var t=e.title,a=e.content,n=e.show,c=e.setSideBarTab,i=e.currentSidebarTab;return r.a.createElement("div",null,r.a.createElement("a",{href:"#".concat(Object(m.i)(t)),onClick:function(){return c(t)},className:"sidebar-title","data-toggle":"collapse"},t,t===i||n?r.a.createElement(l.a,{icon:s.faMinus,className:"sidebar-icon"}):r.a.createElement(l.a,{icon:o.faPlus,className:"sidebar-icon"})),r.a.createElement("div",{id:"".concat(Object(m.i)(t)),className:n?"collapse show":"collapse"},r.a.createElement("div",{className:"off-white"},r.a.createElement("ul",{className:"pl-0 pt-2 pb-1 pr-1 sidebar-content"},a.map((function(e){return r.a.createElement("li",{key:"".concat(Object(m.a)("sbc")),className:"mb-2"},e.link?r.a.createElement("a",{href:e.link,className:"proxima-bold"},e.title):r.a.createElement("strong",null,e.title),e.content&&r.a.createElement("div",{dangerouslySetInnerHTML:Object(m.b)(e.content)}))}))))))}u.propTypes={title:i.a.string,currentSidebarTab:i.a.string,content:i.a.arrayOf(i.a.object),show:i.a.bool,setSideBarTab:i.a.func},u.defaultProps={title:"",currentSidebarTab:"",content:[],show:!1,setSideBarTab:function(){}},t.a=u},833:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),i=a.n(c),l=a(480);function o(e){var t=e.currentTab,a=e.tabTitle,n=e.content,c=e.title,i=e.toggleReadMore,o=e.readMore,s=n.split(/<p[^>]*>/).filter((function(e){return""!==e})),m=s[0].replace("</p>",""),u=s[1],d=s.slice(2,s.length).join("<p>");return r.a.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-bio-tab"},r.a.createElement("h4",{className:"bg-light-gray"},c),r.a.createElement("p",{className:"bio",dangerouslySetInnerHTML:Object(l.b)(m),id:"nav-bio-tab"}),r.a.createElement("p",{className:"bio",dangerouslySetInnerHTML:Object(l.b)(u)}),r.a.createElement("div",{id:"content",className:"collapse mt-4 ml-1"},r.a.createElement("div",{className:"bio",dangerouslySetInnerHTML:Object(l.b)(d)})),r.a.createElement("a",{href:"#content",type:"collapse",className:"red-title proxima-bold","data-toggle":"collapse","data-target":"#content",onClick:function(){return i()}},o?r.a.createElement("u",null,"Read Less >>"):r.a.createElement("u",null,"Read More >>")))}o.propTypes={currentTab:i.a.string,tabTitle:i.a.string,content:i.a.string,title:i.a.string,toggleReadMore:i.a.func,readMore:i.a.bool},o.defaultProps={currentTab:"",tabTitle:"",content:"",title:"",toggleReadMore:function(){},readMore:!1};var s=o;function m(e){var t=e.currentTab,a=e.content,n=e.title,c=e.tabTitle;return r.a.createElement("div",{className:t===c?"tab-pane active":"tab-pane",id:c,role:"tabpanel","aria-labelledby":"nav-matter-tab"},r.a.createElement("h4",{className:"bg-light-gray"},n),a.map((function(e,t){return r.a.createElement("span",{key:Object(l.a)(e.title),className:"mb-4 d-block",id:"nav-matter-tab"},e.title?r.a.createElement("a",{href:"#".concat(Object(l.i)(e.title)),className:"sidebar-title","data-toggle":"collapse"},e.title,r.a.createElement("i",{className:"text-white fas float-right mt-1"})):"",r.a.createElement("div",{id:"".concat(Object(l.i)(e.title)),className:0===t?"collapse show":"collapse"},r.a.createElement("div",{className:"off-white matters px-2 py-3",dangerouslySetInnerHTML:Object(l.b)(e.content)})))})))}m.propTypes={currentTab:i.a.string,tabTitle:i.a.string,content:i.a.arrayOf(i.a.object),title:i.a.string},m.defaultProps={currentTab:"",tabTitle:"",content:[],title:""};var u=m;function d(e){var t=e.title,a=e.currentTab,n=e.tabTitle,c=e.content;return r.a.createElement("div",{className:a===n?"tab-pane active":"tab-pane",id:n,role:"tabpanel","aria-labelledby":"nav-".concat(n,"-tab")},r.a.createElement("h4",{className:"bg-light-gray"},t),r.a.createElement("div",{className:"article-container",id:"nav-".concat(n,"-tab")},r.a.createElement("table",{className:"table mb-5"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,c.header&&c.header.map((function(e){return r.a.createElement("th",{key:e.c,className:"text-uppercase"},e.c)})))),r.a.createElement("tbody",null,c.body&&c.body.map((function(e){return r.a.createElement("tr",{key:Object(l.a)(e[0].c)},r.a.createElement("td",{dangerouslySetInnerHTML:Object(l.b)(e[0].c)}),r.a.createElement("td",{dangerouslySetInnerHTML:Object(l.b)(e[1].c)}),e[2]?r.a.createElement("td",null,e[2].c):r.a.createElement("td",null))}))))))}d.propTypes={title:i.a.string,currentTab:i.a.string,tabTitle:i.a.string,content:i.a.objectOf(i.a.string)},d.defaultProps={title:"",currentTab:"",tabTitle:"",content:{}};var b=d;function p(e){var t=e.title,a=e.link,n=e.img;return r.a.createElement("div",{className:"col-sm-12 col-md-4 my-2 article-card"},r.a.createElement("a",{href:a},r.a.createElement("img",{src:n||"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",className:"img-thumbnail mt-3",alt:t}),r.a.createElement("h5",{className:"my-3 small-excerpt text-center mt-2"},t)))}function f(e){var t=e.currentTab,a=e.tabTitle,n=e.title,c=e.content;return r.a.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-".concat(a,"-tab")},r.a.createElement("h4",{className:"bg-light-gray"},n),r.a.createElement("div",{id:"nav-".concat(a,"-tab"),className:"article-container container"},r.a.createElement("div",{className:"row"},c.map((function(e){return r.a.createElement(p,{key:Object(l.a)(e.title),link:e.link,title:e.title,img:e.featuredImg})})))))}p.propTypes={title:i.a.string,link:i.a.string,img:i.a.oneOfType([i.a.string,i.a.any])},p.defaultProps={title:"",link:"",img:""},f.propTypes={currentTab:i.a.string,tabTitle:i.a.string,title:i.a.string,content:i.a.arrayOf(i.a.object)},f.defaultProps={currentTab:"",tabTitle:"",title:"",content:[]};var g=f,h=function(e){var t=e.currentTab,a=e.tabTitle,n=e.title,c=e.content;return r.a.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-".concat(a,"-tab")},r.a.createElement("h4",{className:"bg-light-gray"},n),r.a.createElement("div",{className:"article-container container",id:"nav-".concat(a,"-tab")},r.a.createElement("div",{className:"row"},c.map((function(e){return r.a.createElement("div",{key:Object(l.a)(e.title),className:"col-sm-12"},r.a.createElement("div",{dangerouslySetInnerHTML:Object(l.b)(e.embed_video),className:"w-100"}),r.a.createElement("h5",{className:"mt-2 mb-4"},"".concat(e.title," "),"-",r.a.createElement("span",{className:"red-title"}," ".concat(e.date))))})))))};h.propTypes={currentTab:i.a.string,tabTitle:i.a.string,title:i.a.string,content:i.a.arrayOf(i.a.object)},h.defaultProps={currentTab:"",tabTitle:"",title:"",content:[]};var E=h;function v(e){var t=e.currentTab,a=e.tabTitle,n=e.title,c=e.content;return r.a.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-".concat(a,"-tab")},r.a.createElement("h4",{className:"bg-light-gray"},n),r.a.createElement("div",{className:"container article-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"nav-".concat(a,"-tab"),dangerouslySetInnerHTML:Object(l.b)(c)}))))}v.propTypes={currentTab:i.a.string,tabTitle:i.a.string,title:i.a.string,content:i.a.string},v.defaultProps={currentTab:"",tabTitle:"",title:"",content:""};var y=v,T=a(131);function N(e){var t=e.content,a=e.title;return r.a.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},r.a.createElement("h4",{className:"bg-light-gray"},"Awards"===a?r.a.createElement("span",null,a," ","-"," ",r.a.createElement("a",{href:"/awards/",className:"small-excerpt position-relative award-link"},"Award Methodology")):a),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t.length>3?r.a.createElement(T.a,{sliderType:"LargeArticle",slides:t}):r.a.createElement("div",{className:"d-flex flex-row"},t.map((function(e){return r.a.createElement("a",{href:e.link,key:e.title,className:"mx-3"},r.a.createElement("img",{src:e.featuredImg,width:"230",alt:e.title,className:"img-fluid"}))})))))))}N.propTypes={content:i.a.arrayOf(i.a.object),title:i.a.string},N.defaultProps={content:[],title:""};var w=N;function k(e){var t=e.title,a=e.content;return r.a.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},r.a.createElement("h4",{className:"bg-light-gray"},t),a.length>3?r.a.createElement("div",{className:"featured-article-attorney-container"},r.a.createElement(T.a,{sliderType:"LargeArticle",slides:a})):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement("div",{key:Object(l.a)(e.title),className:"col-sm-12 col-md-4 article-card"},r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e.featuredImg?e.featuredImg:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",alt:e.title,width:"230",className:"img-thumbnail mt-3"}),r.a.createElement("h5",{className:"my-3 small-excerpt"},e.title)))})))))}k.propTypes={title:i.a.string,content:i.a.arrayOf(i.a.object)},k.defaultProps={title:"",content:[]};var x=k;t.a=function(e){var t=e.biography,a=e.currentTab,n=e.readMore,c=e.toggleReadMore,i=e.representativeMatters,o=e.matterClick,m=e.matterTab,d=e.representativeClients,p=e.presentations,f=e.publications,h=e.media,v=e.blogPosts,T=e.newsEventArticles,N=e.videos,k=e.clients,C=e.awards,S=e.filterBody,j=e.tabs,M=Object(l.g)(v,"date");return r.a.createElement("div",null,r.a.createElement("div",{className:"tab-content"},t&&r.a.createElement(s,{currentTab:a,tabTitle:"biography",title:"Biography",content:t,readMore:n,toggleReadMore:c}),i&&r.a.createElement(u,{currentTab:a,matterClick:o,matterTab:m,tabTitle:"representative-matters",title:"Representative Matters",content:i}),d&&r.a.createElement(u,{currentTab:a,matterTab:m,tabTitle:"representative-clients",title:"Representative Clients",content:d}),p&&r.a.createElement(b,{currentTab:a,tabTitle:"presentations",title:"Presentations",content:p}),f&&r.a.createElement(b,{currentTab:a,tabTitle:"publications",title:"Publications",content:f}),h&&r.a.createElement(b,{currentTab:a,tabTitle:"media",title:"Media",content:h}),v&&v.length>0&&r.a.createElement(g,{currentTab:a,tabTitle:"blogs",title:"Articles",content:M}),T.length>0&&void 0!==T&&r.a.createElement(g,{currentTab:a,tabTitle:"newsevents",title:"News & Events",content:T}),N&&r.a.createElement(E,{title:"Videos",content:N,currentTab:a,tabTitle:"videos"}),j&&S.map((function(e){return r.a.createElement(y,{key:Object(l.a)(e[1]),title:e[1],content:e[2],currentTab:a,tabTitle:Object(l.i)(e[1])})}))),k&&k.length>0&&r.a.createElement(w,{content:k,title:"Clients"}),C&&C.length>0&&r.a.createElement(w,{content:C,title:"Awards"}),T.length>0&&r.a.createElement(x,{title:"News & Events",content:T}),v&&v.length>0&&r.a.createElement(x,{title:"Recent Articles",content:M}))}}}]);