(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{477:function(e,t,a){a.r(t),function(e){var n=a(61),c=a.n(n),r=a(82),i=a.n(r),o=a(57),s=a.n(o),l=a(58),m=a.n(l),u=a(83),f=a.n(u),p=a(59),d=a.n(p),h=a(60),g=a.n(h),b=a(39),E=a.n(b),v=a(0),y=a.n(v),N=a(139),w=a(495),k=a(509),O=a(716),x=a(717),L=a(869);function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var D=function(t){d()(l,t);var a,n,r,o=(a=l,function(){var e,t=E()(a);if(j()){var n=E()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g()(this,e)});function l(e){var t;return s()(this,l),(t=o.call(this,e)).state={currentOffice:"Lyndhurst",currentOfficeMap:"",currentOfficeAttorneys:[],currentOfficePractice:[],offices:[],posts:[],seo:{}},t.getLocationDirections=t.getLocationDirections.bind(f()(t)),t}return m()(l,[{key:"componentDidMount",value:(r=i()(c.a.mark((function t(){var a,n,r,i,o,s,l,m=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.state.currentOffice,n=this.props.match.params.location,t.next=4,e("".concat("https://api.scarincihollenbeck.com","/cached/office-locations"),{headers:N.e});case 4:return r=t.sent,t.next=7,r.json();case 7:i=t.sent,o=i.offices,s=i.seo,this.setState({offices:o,seo:s}),this.fetchOfficeData(a),void 0!==n&&(l=n.replace("-"," "),this.setState({currentOffice:l},(function(){return m.fetchOfficeData(n)})));case 12:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;if("desiredState"===e.location.state){var a=e.match.params.location,n=a.replace("-"," ");this.setState({currentOffice:n},(function(){return t.fetchOfficeData(a)}))}}},{key:"getLocationDirections",value:function(e){return Object(N.d)(e)}},{key:"fetchOfficeData",value:(n=i()(c.a.mark((function t(a){var n,r,i,o,s,l,m,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/individual-location/office/").concat(a),{headers:N.e});case 2:return n=t.sent,t.next=5,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/individual-location/posts/").concat(a),{headers:N.e});case 5:return r=t.sent,t.next=8,n.json();case 8:return i=t.sent,t.next=11,r.json();case 11:o=t.sent,s=i.mapLink,l=i.attorneys,m=i.practices,u=i.seo,this.setState({currentOfficeMap:s,currentOfficeAttorneys:l,currentOfficePractice:m,seo:u,posts:o});case 14:case"end":return t.stop()}}),t,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.offices,a=e.posts,n=e.currentOfficeMap,c=e.currentOfficeAttorneys,r=e.currentOfficePractice,i=e.currentOffice,o=e.seo;return y.a.createElement("div",null,y.a.createElement(O.a,{seo:o}),y.a.createElement(w.a,{title:"Office Locations",subtitle:"To best serve our clients, Scarinci Hollenbeck has ".concat(t.length.toString()," offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C. and San Francisco, CA, with our head quarters in Lyndhurst, NJ."),image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg"}),y.a.createElement(k.a,{body:y.a.createElement(x.a,{attorneys:c,practices:r,map:n,title:i}),sidebar:y.a.createElement(L.a,{title:i,posts:a,offices:t,getLocationDirections:this.getLocationDirections,setNewLocation:this.setNewLocation})}))}}]),l}(v.Component);t.default=D}.call(this,a(140))},495:function(e,t,a){var n=a(498),c=a.n(n),r=a(0),i=a.n(r),o=a(2),s=a.n(o),l=a(499),m=a(139);function u(){var e=c()(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return u=function(){return e},e}function f(){var e=c()(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return f=function(){return e},e}var p=function(e){var t=e.title,a=e.subtitle,n=e.image,c=e.height,r=l.a.div(f(),n,c),o=l.a.div(u());return i.a.createElement(r,{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(o,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},i.a.createElement("div",{className:"p-3"},i.a.createElement("span",{id:"red-block"}),i.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),i.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(m.b)(a)}))))))};p.propTypes={image:s.a.string,title:s.a.string,subtitle:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),height:s.a.string},p.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=p},504:function(e,t,a){var n=a(0),c=a.n(n),r=a(15),i=a(104),o=a(507),s=a(508),l=a(2),m=a.n(l);function u(e){var t=e.link,a=e.image,n=e.name,l=e.title,m=e.number,u=e.email,f=e.height,p=e.width;return c.a.createElement("div",{className:"d-flex flex-row attorney-card",height:f},c.a.createElement(r.b,{to:t},c.a.createElement("img",{rel:"preload",src:a,alt:n,className:"mr-1",style:{width:p}})),c.a.createElement("div",{className:"mt-3 ml-3"},c.a.createElement(r.b,{to:t},c.a.createElement("p",{className:"text-uppercase red-title small-excerpt"},c.a.createElement("strong",null,n)),c.a.createElement("p",{className:"mb-1 small-excerpt"},c.a.createElement("strong",null,l))),c.a.createElement("div",{className:"small-excerpt"},c.a.createElement(i.a,{icon:o.faPhone})," ",m,c.a.createElement("br",null),c.a.createElement(i.a,{icon:s.faEnvelope})," ",u)))}u.propTypes={image:m.a.string,name:m.a.string,title:m.a.string,number:m.a.string,email:m.a.string,link:m.a.string,height:m.a.string,width:m.a.string},u.defaultProps={image:"",name:"",title:"",number:"",email:"",link:"",height:"",width:""},t.a=u},509:function(e,t,a){var n=a(0),c=a.n(n);t.a=function(e){var t=e.body,a=e.sidebar;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-8"},t),c.a.createElement("div",{className:"col-sm-12 col-md-4"},a)))}},716:function(e,t,a){var n=a(0),c=a.n(n),r=a(497),i=a(2),o=a.n(i);function s(e){var t=e.seo;return c.a.createElement(r.Helmet,null,c.a.createElement("title",null,t.title),c.a.createElement("meta",{name:"description",content:t.metaDescription}),c.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),c.a.createElement("script",{type:"application/ld+json"},' {\n        "@context": "https://schema.org",\n        "@type": "LegalService",\n        "name": "'.concat(t.title,'",\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "').concat(t.streetAddress,'",\n          "addressLocality": "').concat(t.addressLocality,'",\n          "addressRegion": "').concat(t.addressRegion,'",\n          "postalCode": "').concat(t.postalCode,'"\n        },\n        "image": "').concat(t.image,'",\n        "email": "info@sh-law.com",\n        "telePhone": ').concat(t.telephone,',\n        "url": "').concat(window.location.origin,"/").concat(t.canonicalLink,'",\n        "paymentAccepted": [ "check", "credit card", "invoice" ],\n        "openingHours": "Mo,Tu,We,Th,Fr 08:00-06:00",\n        "openingHoursSpecification": [ {\n          "@type": "OpeningHoursSpecification",\n          "dayOfWeek": [\n            "Monday",\n            "Tuesday",\n            "Wednesday",\n            "Thursday",\n            "Friday"\n          ],\n          "opens": "08:00",\n          "closes": "06:00"\n        } ],\n        "geo": {\n          "@type": "GeoCoordinates",\n          "latitude": "').concat(t.latitude,'",\n          "longitude": "').concat(t.longitude,'"\n        },\n        "priceRange":"$$$$$"\n\n      }\n \n  ')))}s.propTypes={seo:o.a.objectOf(o.a.string)},s.defaultProps={seo:{}},t.a=s},717:function(e,t,a){var n=a(0),c=a.n(n),r=a(2),i=a.n(r),o=a(504),s=a(139);function l(e){var t=e.attorneys,a=e.practices,n=e.map,r=e.title,i=Object(s.i)(t,"lastName");return c.a.createElement("div",{id:"location-body"},c.a.createElement("h4",{className:"bg-light-gray text-capitalize"},r," ","Office"),c.a.createElement("div",{className:"w-100"},c.a.createElement("iframe",{rel:"preconnect",title:"".concat(r," office"),src:n,className:"w-100 h-300",frameBorder:"0",allowFullScreen:!0})),c.a.createElement("h4",{className:"bg-light-gray text-capitalize mt-5"},r," ","Attorneys"),c.a.createElement("div",{className:"container limit-location-container"},c.a.createElement("div",{className:"row"},i.map((function(e){return c.a.createElement("div",{key:e.ID,className:"ccol-sm-12 col-md-12 col-lg-6 mb-2"},c.a.createElement(o.a,{link:e.link,image:e.image,name:e.name,title:e.designation,number:e.contact,email:e.email,height:"109px",width:"75%"}))})))),c.a.createElement("h4",{className:"bg-light-gray mt-5"},"Services We Offer"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("ul",{className:"blue-title"},a.map((function(e,t){return a.length/2>t?c.a.createElement("li",{key:e.ID},c.a.createElement("a",{href:e.slug,className:"proxima-bold blue-title"},c.a.createElement("u",null,e.title))):""})))),c.a.createElement("div",{className:"col-sm-12  col-md-6"},c.a.createElement("ul",{className:"blue-title"},a.map((function(e,t){return a.length/2<=t?c.a.createElement("li",{key:e.ID},c.a.createElement("a",{href:e.slug,className:"proxima-bold blue-title"},c.a.createElement("u",null,e.title))):""})))))))}l.propTypes={attorneys:i.a.arrayOf(i.a.object),practices:i.a.arrayOf(i.a.object),map:i.a.string,title:i.a.string},l.defaultProps={attorneys:[],practices:[],map:"",title:""},t.a=l},869:function(e,t,a){var n=a(0),c=a.n(n),r=a(2),i=a.n(r),o=a(139),s=a(15),l=a(104),m=a(507),u=a(555),f=a(538),p=a(537);function d(e){var t=e.getLocationDirections,a=e.title,n=e.phone,r=e.fax,i=e.shortName,d=e.address,h=e.currentOffice;return c.a.createElement("div",{className:"mb-2"},c.a.createElement(s.b,{to:{pathname:"/location/".concat(Object(o.f)(a)),state:"desiredState"},className:"sidebar-title"},a,Object(o.f)(a)===h.replace(" ","-")?c.a.createElement(l.a,{icon:p.faMinus,className:"text-white location-toggle-icon"}):c.a.createElement(l.a,{icon:f.faPlus,className:"text-white location-toggle-icon"})),c.a.createElement("div",{id:"".concat(Object(o.f)(a)),className:Object(o.f)(a)===h.replace(" ","-")?"collapse show":"collapse"},c.a.createElement("div",{className:"off-white p-3"},c.a.createElement("ul",{className:"no-dots ml-0"},d.map((function(e){return c.a.createElement("li",{key:e,className:"mb--10"},e)}))),c.a.createElement("p",{className:"mb-0"},c.a.createElement(l.a,{icon:m.faPhone}),c.a.createElement("span",{className:"proxima-regular"},"  ".concat(n))),c.a.createElement("p",{className:"mb-2"},c.a.createElement(l.a,{icon:u.faFax}),c.a.createElement("span",{className:"proxima-regular"},"  ".concat(r))),c.a.createElement("button",{type:"button",className:"red-title proxima-bold btn bg-transparent ml--10",onClick:function(){return t(i)}},"Directions to"," ",a))))}d.propTypes={getLocationDirections:i.a.func,title:i.a.string,phone:i.a.string,fax:i.a.string,shortName:i.a.string,address:i.a.arrayOf(i.a.string),currentOffice:i.a.string},d.defaultProps={getLocationDirections:function(){},title:"",phone:"",fax:"",shortName:"",address:[],currentOffice:""};var h=d;function g(e){var t=e.posts,a=e.title;return c.a.createElement("div",{className:"mt-5"},c.a.createElement("div",{className:"sidebar-title text-capitalize"},"Latest from"," ",a),c.a.createElement("div",{className:"off-white"},t.length>0?t.map((function(e){return c.a.createElement("div",{className:"p-2 pt-3",key:Object(o.a)(e.title)},c.a.createElement("a",{href:e.link},c.a.createElement("p",{className:"proxima-bold mb-0"},e.title)),c.a.createElement("span",{className:"mt-0 mb-3 z-99"},e.author.map((function(t,a){return c.a.createElement("a",{href:t.link,key:Object(o.a)(t.name)},c.a.createElement("span",{className:"article-link small-excerpt"},t.name),a<e.author.length-1?" | ":"")}))))})):c.a.createElement("h5",{className:"p-3 d-block mx-auto text-center"},"Sorry, no recent articles for this office")))}g.propTypes={posts:i.a.arrayOf(i.a.object),title:i.a.string},g.defaultProps={posts:[],title:""};var b=g;function E(e){var t=e.offices,a=e.getLocationDirections,n=e.posts,r=e.title,i=e.setNewLocation,s=Object(o.i)(t,"title");return c.a.createElement("div",{id:"location-sidebar"},s.map((function(e){return c.a.createElement(h,{key:Object(o.a)(e.title),setNewLocation:i,getLocationDirections:a,currentOffice:r,title:e.title,phone:e.phone,fax:e.fax,shortName:e.shortName,address:e.address})})),c.a.createElement(b,{title:r,posts:n}))}E.propTypes={offices:i.a.arrayOf(i.a.object),getLocationDirections:i.a.func,setNewLocation:i.a.func,posts:i.a.arrayOf(i.a.object),title:i.a.string},E.defaultProps={offices:[],posts:[],title:"",getLocationDirections:function(){},setNewLocation:function(){}};t.a=E}}]);