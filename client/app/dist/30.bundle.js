(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{470:function(e,t,n){n.r(t),function(e){var r=n(0),a=n.n(r),o=n(494),c=n(487),l=n(485),i=n(719),s=n(490);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(v,t);var n,r,u,f,g=(n=v,function(){var e,t=d(n);if(h()){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=g.call(this,e)).state={posts:[]},t}return r=v,(u=[{key:"componentDidMount",value:function(){var t=this;e("".concat("https://admin.legalmarketinghouse.com","/wp-json/category/posts/law-firm-insights"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var n=e.main,r=e.latest,a=e.archives.filter((function(e,t){return t<=1&&e})),o=[].concat(m(n),m(r),m(a));console.log("posts"),console.log(o),t.setState({posts:o})}))}},{key:"render",value:function(){var e=this.state.posts;return a.a.createElement("div",{id:"subscribe"},a.a.createElement(c.a,{seo:{title:"Subscribe To Firm Mailing List | Scarinci Hollenbeck",metaDescription:"Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements.",canonical:"/subscribe"}}),a.a.createElement(o.a,{body:a.a.createElement(i.a,null),sidebar:a.a.createElement("div",null,a.a.createElement(l.a,null),a.a.createElement(s.a,{title:"Latest From Firm Insights",content:e}))}))}}])&&p(r.prototype,u),f&&p(r,f),v}(r.Component);t.default=g}.call(this,n(130))},480:function(e,t,n){n.d(t,"h",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return m}));var r=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},a=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},o=function(e){return e.toLowerCase().replace(/\s/g,"-")},c=function(e){return{__html:e}},l=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},i=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var r=n.coords,a=r.latitude,o=r.longitude,c=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),l=t.filter((function(e){return e.title===c}))[0].address,i="https://www.google.com/maps/dir/".concat(a,"+").concat(o,"/").concat(l);window.open(i,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},u=function(e,t){for(var n=[],r=0;r<e.length;r+=1)e[r].key&&e[r].key===t&&n.push(e[r].selected);return n},m=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},485:function(e,t,n){(function(e){var r=n(0),a=n.n(r),o=n(480);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(b,t);var n,r,c,p,y=(n=b,function(){var e,t=f(n);if(m()){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=y.call(this,e)).state={searchTerm:"",attorneys:[],practices:[],categories:[],t:{keyword:"",attorney:"",practice:"",category:""}},t.onChange=t.onChange.bind(u(t)),t.onSubmit=t.onSubmit.bind(u(t)),t}return r=b,(c=[{key:"onChange",value:function(e){var t=e.target,n=t.value,r=t.name,a=this.state.t;a[r]=n,this.setState({t:a})}},{key:"onSubmit",value:function(){var e,t,n,r,a,o,c=this.state.t;window.location=(t=(e=c).keyword,n=e.practice,r=e.attorney,a=e.category,o="".concat(void 0!==t?t:""," ").concat(void 0!==n?n:""," ").concat(void 0!==r?r:""," ").concat(void 0!==a?a:"").trim().replace(/[^\w\s]/gi,""),"/s?=".concat(o.toLowerCase().replace(/\s/g,"+")))}},{key:"componentDidMount",value:function(){var t=this;e("".concat("http://142.93.73.211:8200","/cached/search-options")).then((function(e){return e.json()})).then((function(e){var n=e.attorneys,r=e.categories,a=e.practices;t.setState({attorneys:n,categories:r,practices:a})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.attorneys,r=t.categories,c=t.practices,l=t.searchTerm,i=t.t;return a.a.createElement("div",{className:"w-100"},a.a.createElement("form",{onChange:this.onChange},a.a.createElement("label",{htmlFor:"searchSite",className:"w-100"},a.a.createElement("input",{name:"keyword",type:"search",id:"searchSite",value:l||"",placeholder:"Keyword...",className:"form-control p-2"}),a.a.createElement("span",{className:"sr-only"},"Search Site")),a.a.createElement("label",{htmlFor:"searchPractice",className:"d-block w-100"},a.a.createElement("select",{name:"practice",id:"searchPractice",className:"form-control p-2"},a.a.createElement("option",{defaultValue:"Filter by practice"},i.practice||"Filter by practice"),c.map((function(e){return a.a.createElement("option",{value:e.title||"",key:Object(o.a)(e.title)},e.title)}))),a.a.createElement("span",{className:"sr-only"},"Filter by Practice")),a.a.createElement("label",{htmlFor:"searchAttorney",className:"d-block w-100"},a.a.createElement("select",{name:"attorney",id:"searchAttorney",className:"form-control p-2"},a.a.createElement("option",{defaultValue:"Filter by attorney"},i.attorney||"Filter by attorney"),n.map((function(e){return a.a.createElement("option",{value:e.title||"",key:Object(o.a)(e.title)},e.title)}))),a.a.createElement("span",{className:"sr-only"},"Filtery by Attorney")),a.a.createElement("label",{htmlFor:"searchCategory",className:"d-block w-100"},a.a.createElement("select",{name:"category",id:"searchCategory",className:"form-control p-2"},a.a.createElement("option",{defaultValue:"Filter by category"},i.category||"Filter by category"),r.map((function(e){return"Uncategorized"!==e.title?a.a.createElement("option",{value:e.title||"",key:Object(o.a)(e.title)},e.title):""}))),a.a.createElement("span",{className:"sr-only"},"Filtery by Category")),a.a.createElement("button",{type:"button",className:"btn btn-secondary proxima-bold px-5 my-2 mr-2"},"Clear"),a.a.createElement("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-danger my-2 px-5"},"Search")))}}])&&l(r.prototype,c),p&&l(r,p),b}(r.Component);t.a=p}).call(this,n(130))},487:function(e,t,n){var r=n(0),a=n.n(r),o=n(482),c=n(3),l=n.n(c);function i(e){var t=e.seo;return a.a.createElement(o.Helmet,null,a.a.createElement("title",null,t.title),a.a.createElement("meta",{name:"description",content:t.metaDescription}),a.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),a.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": '.concat(t.title,',\n          "description": {').concat(t.metaDescription,',\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))}i.propTypes={seo:l.a.objectOf(l.a.string)},i.defaultProps={seo:{}},t.a=i},490:function(e,t,n){var r=n(0),a=n.n(r),o=n(15),c=n(3),l=n.n(c),i=n(483),s=n(480);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: 545px;\n  overflow:hidden;\n  overflow-y: auto;\n"]);return m=function(){return e},e}var f=i.a.div(m());function p(e){var t=e.split(" "),n=t[0][0]+t[t.length-1];return Object(s.i)(n.toLowerCase())}function y(e){var t=e.title,n=e.content;return a.a.createElement("div",{className:"w-100 mt-4"},a.a.createElement("div",{className:"sidebar-title"},t),a.a.createElement(f,{className:"off-white"},n.length>0?n.map((function(e){return a.a.createElement("div",{key:e.ID||Object(s.a)(e.title),className:"p-2"},a.a.createElement("a",{href:e.link,className:"top-article"},a.a.createElement("p",{className:"proxima-bold mb-0"},e.title)),(e.hasOwnProperty("author")||"Scarinci Hollenbeck"===e.author)&&a.a.createElement(a.a.Fragment,null,"string"==typeof e.author&&a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,"Author: "),a.a.createElement(o.b,{to:"/author/".concat(p(e.author))},e.author)),"object"===u(e.author)&&a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,"Author: "),a.a.createElement(o.b,{to:"/author/".concat(p(e.author[0].name))},e.author[0].name))),e.hasOwnProperty("pubDate")&&a.a.createElement("p",{className:"my-0"},e.pubDate.substring(0,17)),e.hasOwnProperty("source")&&a.a.createElement("div",{className:"mt-0",dangerouslySetInnerHTML:Object(s.b)(e.source)}))})):a.a.createElement("div",{className:"mx-5 p-5"},a.a.createElement("p",null,"Articles loading..."))))}y.propTypes={content:l.a.arrayOf(l.a.object),title:l.a.string},y.defaultProps={content:[],title:""},t.a=y},494:function(e,t,n){var r=n(0),a=n.n(r);t.a=function(e){var t=e.body,n=e.sidebar;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-12 col-md-8"},t),a.a.createElement("div",{className:"col-sm-12 col-md-4"},n)))}},719:function(e,t,n){(function(e){var r=n(0),a=n.n(r),o=n(3),c=n.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=[{key:"business",label:"Business Law",name:"Business Law",property:"column_1"},{key:"firmnews",label:"Firm News",name:"Firm News",property:"column_1"},{key:"publiclaw",label:"Public Law",name:"Public Law",property:"column_1"},{key:"technology",label:"Technology",name:"Technology",property:"column_1"},{key:"tax",label:"Tax",name:"Tax",property:"column_1"},{key:"firmevents",label:"Firm Events",name:"Firm Events",property:"column_1"},{key:"cannabis",label:"Cannabis Law",name:"Cannabis Law",property:"column_1"},{key:"covid19alerts",label:"COVID-19 Alerts",name:"COVID-19 Alerts",property:"column_two"},{key:"commercialRealEstate",label:"Commercial Real Estate",name:"Commercial Real Estate",property:"column_two"},{key:"entertainmentSports",label:"Entertainment & Sports",name:"Entertainment & Sports",property:"column_two"},{key:"environmentalLandUse",label:"Environmental & Land Use",name:"Environmental & Land Use",property:"column_two"},{key:"intellectualProperty",label:"Intellectual Property",name:"Intellectual Property",property:"column_two"},{key:"laboremployment",label:"Labor Employment",name:"Labor Employment",property:"column_two"},{key:"litigation",label:"Litigation",name:"Litigation",property:"column_two"}],d=function(e){var t=e.property,n=e.name,r=e.onChange;return a.a.createElement("input",{type:"checkbox",property:t,name:n,onChange:r})},g=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(s,t);var n,r,o,c,l=(n=s,function(){var e,t=b(n);if(y()){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={email:"",firstName:"",lastName:"",categories:[],message:!1},t.handleChange=t.handleChange.bind(p(t)),t.handleSubmit=t.handleSubmit.bind(p(t)),t.handleCategoryChange=t.handleCategoryChange.bind(p(t)),t}return r=s,(o=[{key:"handleChange",value:function(e){var t=e.target,n=t.name,r=t.value;"firstName"===n&&this.setState({firstName:r}),"lastName"===n&&this.setState({lastName:r}),"email"===n&&this.setState({email:r})}},{key:"handleCategoryChange",value:function(e){var t=this.state.categories,n=e.target.name,r=e.target.getAttribute("property"),a=e.target.checked;!0===a&&this.setState({categories:[].concat(i(t),[{property:r,value:n}])}),!1===a&&this.setState({categories:t.filter((function(e){return e.value!==n}))})}},{key:"handleSubmit",value:function(t){var n=this;t.preventDefault();var r=this.state,a={firstName:r.firstName,lastName:r.lastName,email:r.email,categoryValues:r.categories.map((function(e){return e.value})),siteUrl:window.location.href};e("http://165.227.220.15/shlaw/site/subscription/form",{method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&n.setState({message:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.email,r=t.message,o=t.lastName,c=t.firstName;return a.a.createElement("div",null,a.a.createElement("div",{className:"w-100"},a.a.createElement("h1",null,"Scarinci Hollenbeck Mailing List"),a.a.createElement("h2",{className:"text-dark my-4 font-normal red-title ft-17"},"As the legal world continues to evolve, it is important to stay aware of its various and regular updates."),a.a.createElement("p",{className:"h4"},"Be the the first to know when: "),a.a.createElement("ul",{className:"h4 my-4"},a.a.createElement("li",{className:"mb-4"},"When our",a.a.createElement("strong",null,"attorney's blog posts")),a.a.createElement("li",{className:"mb-4"},"Various",a.a.createElement("strong",null,"legal updates")," ","that may pertain to your business"),a.a.createElement("li",{className:"mb-4"},"Any annoucements and press releases from the attorneys at the firm")),a.a.createElement("h4",{className:"red-title mb-4"},"Sign up Today!")),a.a.createElement("div",{className:"w-100 border"},a.a.createElement("form",{onSubmit:this.handleSubmit,method:"post",className:"p-3"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"firstName",className:"sr-only"}," Email:"),a.a.createElement("input",{id:"firstName",name:"firstName",type:"text",value:c,onChange:this.handleChange,className:"form-control","aria-describedby":"firstName",placeholder:"Enter first name"})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"lastName",className:"sr-only"}," last Name:"),a.a.createElement("input",{id:"lastName",name:"lastName",type:"text",value:o,onChange:this.handleChange,className:"form-control","aria-describedby":"lastName",placeholder:"Enter last name"})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"email",className:"sr-only"}," Email:"),a.a.createElement("input",{id:"email",name:"email",type:"text",value:n,onChange:this.handleChange,className:"form-control","aria-describedby":"email",placeholder:"Enter email",required:!0})),a.a.createElement("div",{className:"form-group mb-0"},a.a.createElement("p",{className:"small-excerpt"},"Please select a category(s) below:")),a.a.createElement("ul",{className:"no-dots two-column mt-2"},h.map((function(t){return a.a.createElement("li",{key:t.key},a.a.createElement("label",{htmlFor:t.name},a.a.createElement(d,{id:t.name,className:"d-block",name:t.name,property:t.property,onChange:e.handleCategoryChange})," ",t.name))}))),a.a.createElement("div",null,r&&a.a.createElement("p",{className:"text-success"},"Thank you for subscribing!"),a.a.createElement("input",{type:"submit",className:"btn btn-danger",value:"Submit"})))))}}])&&u(r.prototype,o),c&&u(r,c),s}(r.Component);d.propTypes={property:c.a.string,name:c.a.string,onChange:c.a.func},d.defaultProps={property:"",name:"",onChange:function(){}},t.a=g}).call(this,n(130))}}]);