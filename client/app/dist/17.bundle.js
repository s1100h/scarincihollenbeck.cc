(window.webpackJsonp=window.webpackJsonp||[]).push([[17,36],{472:function(e,t,a){a.r(t);var n=a(0),r=a.n(n),c=a(496),l=a(142),i=a(500),o=a(495);t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{seo:{title:"Page Not Found | Scarinci Hollenbeck",metaDescription:"Sorry, it looks this like this page no longer exists on scarincihollenbeck.com",canonicalLink:"/"}}),r.a.createElement(o.a,{title:"404: Resource Not Found",subtitle:"Sorry, the page you are looking for cannot be found.",image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg",height:"auto"}),r.a.createElement(c.a,null,r.a.createElement("p",{className:"lead"},"It's possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for."),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 offset-md-3"},r.a.createElement(l.a,null)),r.a.createElement("div",{className:"col-sm-12 col-md-8 mt-5 offset-md-2 off-white"},r.a.createElement("h4",{className:"proxima-bold p-3 pb-0 mb-0 text-center"},"Or try visiting one of these pages on our site to narrow your search."),r.a.createElement("ul",{className:"ml-6"},r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/attorneys"),className:"u-hover h5"},"Attorneys"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/practices"),className:"u-hover h5"},"Practices"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/locations"),className:"u-hover h5"},"Locations"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-news"),className:"u-hover h5"},"Firm News"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-events"),className:"u-hover h5"},"Firm Events"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-insights"),className:"u-hover h5"},"Firm Insights")))))))))}},479:function(e,t,a){a.r(t),function(e){var n=a(511),r=a.n(n),c=a(61),l=a.n(c),i=a(82),o=a.n(i),s=a(57),m=a.n(s),d=a(58),b=a.n(d),u=a(83),p=a.n(u),g=a(59),h=a.n(g),E=a(60),f=a.n(E),v=a(39),y=a.n(v),N=a(0),T=a.n(N),k=a(724),w=a(539),x=a(540),j=a(496),C=a(472),M=a(725),S=a(726),O=a(728),P=a(729),L=a(139),I=a(861);function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var H=function(t){h()(i,t);var a,n,c=(a=i,function(){var e,t=y()(a);if(R()){var n=y()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f()(this,e)});function i(e){var t;return m()(this,i),(t=c.call(this,e)).state={bio:[],currentTab:"biography",currentSidebarTab:"Related Practices",matterTab:"",readMore:!1,error:!1},t.tabClick=t.tabClick.bind(p()(t)),t.matterClick=t.matterClick.bind(p()(t)),t.toggleReadMore=t.toggleReadMore.bind(p()(t)),t.setSideBarTab=t.setSideBarTab.bind(p()(t)),t}return b()(i,[{key:"componentDidMount",value:(n=o()(l.a.mark((function t(){var a,n,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props.match.params.attorney,t.prev=1,t.next=4,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/individual-attorney/attorney/").concat(a),{headers:L.e});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,c="",void 0!==r.representativeMatters[0]&&(i=r.representativeMatters[0].title,c=i),this.setState({matterTab:c,bio:r}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),this.setState({error:!0});case 16:case"end":return t.stop()}}),t,this,[[1,13]])}))),function(){return n.apply(this,arguments)})},{key:"tabClick",value:function(e){var t=e;this.setState({currentTab:t})}},{key:"matterClick",value:function(e){var t=e;this.setState({matterTab:t})}},{key:"setSideBarTab",value:function(e){var t=e;this.setState({currentSidebarTab:t})}},{key:"toggleReadMore",value:function(){this.setState((function(e){return{readMore:!e.readMore}}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.bio,c=a.currentTab,l=a.matterTab,i=a.readMore,o=a.currentSidebarTab,s=a.error,m=n.fullName,d=n.designation,b=n.profileImage,u=n.phoneNumber,p=n.email,g=n.biography,h=n.fax,E=n.clients,f=n.socialMediaLinks,v=n.representativeMatters,y=n.representativeClients,N=n.relatedPractices,R=n.additionalInformation,H=n.education,A=n.barAdmissions,z=n.eventPosts,B=n.newsPosts,D=n.blogPosts,F=n.awards,_=n.presentations,q=n.publications,$=n.media,W=n.videos,J=n.tabs,U=n.chair,V=n.pdf,G=n.vizibility,K=n.seo,Q={title:"Education",content:H},X={title:"Bar Admissions",content:A};void 0!==R&&!1!==R&&(e=[Q,X].concat(r()(R))),e=[Q,X];var Y,Z,ee=[];if(void 0!==B&&void 0!==z&&(ee=[].concat(r()(B),r()(z))),void 0!==J){var te=J.headers,ae=J.body;Y=te.filter((function(e){return"number"!=typeof e})),Z=ae.filter((function(e){return""!==e[1]}))}return s?T.a.createElement(C.default,null):T.a.createElement("div",{id:"single-attorney"},T.a.createElement(k.a,{seo:K}),T.a.createElement("div",null,T.a.createElement(w.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/attorney-header.jpg",profile:T.a.createElement(M.a,{image:b,name:m}),height:"325px",infoCard:T.a.createElement(S.a,{fullName:m,chair:U,designation:d,phoneNumber:u,fax:h,email:p,socialMediaLinks:f,pdf:V,vizibility:G})}),T.a.createElement(j.a,null,T.a.createElement("div",{className:"line-header",id:"nav-tab",role:"tablist"},T.a.createElement(O.a,{currentTab:c,tabTitle:"biography",tabClick:this.tabClick,title:"Biography"}),v&&T.a.createElement(O.a,{currentTab:c,tabTitle:"representative-matters",tabClick:this.tabClick,title:"Representative Matters"}),y&&T.a.createElement(O.a,{currentTab:c,tabTitle:"representative-clients",tabClick:this.tabClick,title:"Representative Clients"}),_&&T.a.createElement(O.a,{currentTab:c,tabTitle:"presentations",tabClick:this.tabClick,title:"Presentations"}),q&&T.a.createElement(O.a,{currentTab:c,tabTitle:"publications",tabClick:this.tabClick,title:"Publications"}),$&&T.a.createElement(O.a,{currentTab:c,tabTitle:"media",tabClick:this.tabClick,title:"Media"}),D&&D.length>0&&T.a.createElement(O.a,{currentTab:c,tabTitle:"blogs",tabClick:this.tabClick,title:"Articles"}),ee.length>0&&void 0!==ee&&T.a.createElement(O.a,{currentTab:c,tabTitle:"newsevents",tabClick:this.tabClick,title:"News & Events"}),W&&T.a.createElement(O.a,{currentTab:c,tabTitle:"videos",tabClick:this.tabClick,title:"Videos"}),J&&Y.map((function(e){return T.a.createElement(O.a,{key:e,currentTab:c,tabTitle:Object(L.j)(e),tabClick:t.tabClick,title:e})})))),T.a.createElement(x.a,{body:T.a.createElement(I.a,{biography:g,currentTab:c,readMore:i,toggleReadMore:this.toggleReadMore,representativeMatters:v,matterClick:this.matterClick,matterTab:l,representativeClients:y,presentations:_,publications:q,media:$,blogPosts:D,newsEventArticles:ee,videos:W,tabs:J,clients:E,awards:F,filterBody:Z}),sidebar:T.a.createElement("span",null,T.a.createElement(P.a,{title:"Related Practices",content:N,currentSidebarTab:o,setSideBarTab:this.setSideBarTab,show:!0}),T.a.createElement("br",null),T.a.createElement(P.a,{title:"Additional Information",content:e,currentSidebarTab:o,setSideBarTab:this.setSideBarTab,show:!0}))})))}}]),i}(N.Component);t.default=H}.call(this,a(140))},495:function(e,t,a){var n=a(498),r=a.n(n),c=a(0),l=a.n(c),i=a(2),o=a.n(i),s=a(499),m=a(139);function d(){var e=r()(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return d=function(){return e},e}function b(){var e=r()(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return b=function(){return e},e}var u=function(e){var t=e.title,a=e.subtitle,n=e.image,r=e.height,c=s.a.div(b(),n,r),i=s.a.div(d());return l.a.createElement(c,{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(i,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},l.a.createElement("div",{className:"p-3"},l.a.createElement("span",{id:"red-block"}),l.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),l.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(m.b)(a)}))))))};u.propTypes={image:o.a.string,title:o.a.string,subtitle:o.a.oneOfType([o.a.string,o.a.arrayOf(o.a.string)]),height:o.a.string},u.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=u},496:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},500:function(e,t,a){var n=a(0),r=a.n(n),c=a(497),l=a(2),i=a.n(l);function o(e){var t=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": "'.concat(t.title,'",\n          "description": "').concat(t.metaDescription,'",\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))}o.propTypes={seo:i.a.objectOf(i.a.string)},o.defaultProps={seo:{}},t.a=o},539:function(e,t,a){var n=a(498),r=a.n(n),c=a(0),l=a.n(c),i=a(499);function o(){var e=r()(["\n  background-color: rgba(0,0,0, .50);\n  border-radius: 4px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);\n  max-height: ",";\n"]);return o=function(){return e},e}function s(){var e=r()(["\n  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n"]);return s=function(){return e},e}t.a=function(e){var t=e.profile,a=e.infoCard,n=e.image,r=e.height,c=i.a.div(s(),n),m=i.a.div(o(),r);return l.a.createElement(c,{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container animated fadeInUp fast mt--1 max-width-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-4 mb-3 mr-4 mh-325"},t),l.a.createElement(m,{className:"col-sm-12 col-md-7"},a))))}},540:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.body,a=e.sidebar;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-9"},t),r.a.createElement("div",{className:"col-sm-12 col-md-3"},a)))}},724:function(e,t,a){var n=a(0),r=a.n(n),c=a(497),l=a(2),i=a.n(l);function o(e){var t=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:site_name",content:"Scarinci Hollenbeck"}),r.a.createElement("meta",{property:"og:type",content:"profile"}),r.a.createElement("meta",{property:"og:locale",content:"en_US"}),r.a.createElement("meta",{property:"og:url",content:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("meta",{property:"og:image",content:t.featuredImg}),r.a.createElement("meta",{property:"og:image:secure_url",content:t.featuredImg}),r.a.createElement("meta",{property:"og:image:width",content:t.imgWidth}),r.a.createElement("meta",{property:"og:image:height",content:t.imgHeight}),r.a.createElement("meta",{property:"og:image:type",content:"image/jpg"}),r.a.createElement("meta",{property:"profile:first_name",content:t.firstName}),r.a.createElement("meta",{property:"profile:last_name",content:t.lastName}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:description",content:t.metaDescription}),r.a.createElement("meta",{name:"twitter:title",content:t.title}),r.a.createElement("meta",{name:"twitter:site",content:"@S_H_Law"}),r.a.createElement("meta",{name:"twitter:image",content:t.featuredImg}),r.a.createElement("meta",{name:"twitter:creator",content:"@S_H_Law"}),r.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "http://schema.org",\n          "@type": "LegalService",\n          "name": "'.concat(t.fullName,'",\n          "description": "').concat(t.schemaDescription,'",\n          "url": "').concat(window.location.origin,"/").concat(t.canonicalLink,'",\n          "image": "').concat(t.featuredImg,'",\n          "priceRange": "$$$$",\n          "telephone": "').concat(t.phone,'",\n          "email": "').concat(t.email,'",\n          "hasMap": "').concat(t.map,'",\n          "address": {\n            "@type": "PostalAddress",\n            "addressLocality": "').concat(t.town,'",\n            "addressRegion": "').concat(t.state,'",\n            "postalCode": "').concat(t.zip,'",\n            "streetAddress": "').concat(t.address,'"\n          },\n          "geo": {\n            "@type": "GeoCoordinates",\n            "latitude": "').concat(t.lat,'",\n            "longitude": "').concat(t.long,'"\n          },\n          "sameAs": "').concat(t.socialMedia,'",\n          "openingHours": "Mo,Tu,We,Th,Fr, 8:00-5:00"\n        }\n        ')))}o.propTypes={seo:i.a.objectOf(i.a.oneOfType([i.a.string,i.a.number,i.a.arrayOf(i.a.string)]))},o.defaultProps={seo:{}},t.a=o},725:function(e,t,a){var n=a(0),r=a.n(n),c=a(2),l=a.n(c);function i(e){var t=e.image,a=e.name;return r.a.createElement("img",{rel:"preload",src:t,alt:a,className:"img-fluid white-transparent-border"})}i.propTypes={image:l.a.string,name:l.a.string},i.defaultProps={image:"",name:""},t.a=i},726:function(e,t,a){var n=a(0),r=a.n(n),c=a(104),l=a(507),i=a(555),o=a(508),s=a(727),m=a(558),d=a(522),b=a(523),u=a(524),p=a(556),g=a(557),h=a(2),E=a.n(h);function f(e){var t=e.fullName,a=e.chair,n=e.designation,h=e.phoneNumber,E=e.fax,f=e.email,v=e.socialMediaLinks,y=e.pdf,N=e.vizibility;return r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white border-bottom"},t?"".concat(t," "):"",void 0!==a&&a.length>0?r.a.createElement("span",{className:" h5 text-white"},"-"," ".concat(n)):"")),void 0!==a&&a.length>0?r.a.createElement("div",{className:"my-3"},a.map((function(e){return r.a.createElement("span",{key:e.title,className:"text-white h5"},r.a.createElement("strong",null,"Chair: "),r.a.createElement("a",{href:e.link,className:"text-white chair-link h5"},e.title," ","Practice"),r.a.createElement("br",null))}))):r.a.createElement("div",{className:"col-sm-12 mt-3"},r.a.createElement("h4",{className:"text-white ml--10px"},n)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("ul",{className:"text-white no-dots mt-2 ml-0"},h?r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:l.faPhone,className:"text-white"})," ",r.a.createElement("span",{className:"proxima-regular ft-17px"},"  ".concat(h)))):"",E?r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:i.faFax,className:"text-white"})," ",r.a.createElement("span",{className:"proxima-regular ft-17px"},"  ".concat(E)))):"",f?r.a.createElement("li",{className:"mb-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:o.faEnvelope,className:"text-white"}),r.a.createElement("a",{href:"mailto:".concat(f),className:"text-white proxima-regular mail-link ft-17px"}," ".concat(f)))):"")),r.a.createElement("div",{className:"col-sm-12 col-md-6"},v?r.a.createElement("span",null,r.a.createElement("ul",{className:"ml-0 mt-2"},v.map((function(e){return r.a.createElement("li",{key:e.channel,className:"mb-0 lh-1"},r.a.createElement("h5",null,"Twitter"===e.channel&&r.a.createElement(c.a,{icon:d.faTwitter,className:"text-white"}),"Facebook"===e.channel&&r.a.createElement(c.a,{icon:b.faFacebookSquare,className:"text-white"}),"LinkedIn"===e.channel&&r.a.createElement(c.a,{icon:u.faLinkedin,className:"text-white"}),"Skype"===e.channel&&r.a.createElement(c.a,{icon:p.faSkype,className:"text-white"}),"Instagram"===e.channel&&r.a.createElement(c.a,{icon:g.faInstagram,className:"text-white"}),r.a.createElement("a",{href:e.url,className:"text-white mail-link proxima-regular ft-17px position-relative icon"},"  Connect on ".concat(e.channel))))})),y?r.a.createElement("li",{className:"mb-0 lh-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:s.faFile,className:"text-white"})," ",r.a.createElement("a",{href:y,className:"text-white mail-link proxima-regular ft-17px position-relative icon"}," Download Biography"))):"",N?r.a.createElement("li",{className:"mb-0 lh-1"},r.a.createElement("h5",null,r.a.createElement(c.a,{icon:m.faAddressCard,className:"text-white"}),r.a.createElement("a",{href:N,className:"text-white mail-link proxima-regular ft-17px position-relative icon"}," Download Contact"))):"")):"")))}f.propTypes={fullName:E.a.string,chair:E.a.arrayOf(E.a.oneOfType([E.a.string,E.a.object])),designation:E.a.string,phoneNumber:E.a.string,fax:E.a.string,email:E.a.string,socialMediaLinks:E.a.arrayOf(E.a.object),pdf:E.a.string,vizibility:E.a.string},f.defaultProps={fullName:"",chair:[],designation:"",phoneNumber:"",fax:"",email:"",socialMediaLinks:[],pdf:"",vizibility:""},t.a=f},728:function(e,t,a){var n=a(0),r=a.n(n),c=a(2),l=a.n(c);function i(e){var t=e.currentTab,a=e.tabTitle,n=e.tabClick,c=e.title;return r.a.createElement("h3",{className:t===a?"active":"",id:"nav-home-tab","data-toggle":"tab",onClick:function(){return n(a)},href:"#".concat(a),role:"tab",tabIndex:"0","aria-controls":"nav-home","aria-selected":!0,"aria-hidden":!0},c)}i.propTypes={currentTab:l.a.string,tabTitle:l.a.string,tabClick:l.a.func,title:l.a.string},i.defaultProps={currentTab:"",tabTitle:"",tabClick:function(){},title:""},t.a=i},729:function(e,t,a){var n=a(0),r=a.n(n),c=a(2),l=a.n(c),i=a(104),o=a(538),s=a(537),m=a(139);function d(e){var t=e.title,a=e.content,n=e.show,c=e.setSideBarTab,l=e.currentSidebarTab;return r.a.createElement("div",null,r.a.createElement("a",{href:"#".concat(Object(m.j)(t)),onClick:function(){return c(t)},className:"sidebar-title","data-toggle":"collapse"},t,t===l||n?r.a.createElement(i.a,{icon:s.faMinus,className:"sidebar-icon"}):r.a.createElement(i.a,{icon:o.faPlus,className:"sidebar-icon"})),r.a.createElement("div",{id:"".concat(Object(m.j)(t)),className:n?"collapse show":"collapse"},r.a.createElement("div",{className:"off-white"},r.a.createElement("ul",{className:"pl-0 pt-2 pb-1 pr-1 sidebar-content"},a.map((function(e){return r.a.createElement("li",{key:"".concat(Object(m.a)("sbc")),className:"mb-2"},e.link?r.a.createElement("a",{href:e.link,className:"proxima-bold"},e.title):r.a.createElement("strong",null,e.title),e.content&&r.a.createElement("div",{dangerouslySetInnerHTML:Object(m.b)(e.content)}))}))))))}d.propTypes={title:l.a.string,currentSidebarTab:l.a.string,content:l.a.arrayOf(l.a.object),show:l.a.bool,setSideBarTab:l.a.func},d.defaultProps={title:"",currentSidebarTab:"",content:[],show:!1,setSideBarTab:function(){}},t.a=d},861:function(e,t,a){var n=a(0),r=a.n(n),c=a(2),l=a.n(c),i=a(139);function o(e){var t=e.currentTab,a=e.tabTitle,n=e.content,c=e.title,l=e.toggleReadMore,o=e.readMore,s=n.split(/<p[^>]*>/).filter((function(e){return""!==e})),m=s[0].replace("</p>",""),d=s[1],b=s.slice(2,s.length).join("<p>");return r.a.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-bio-tab"},r.a.createElement("h4",{className:"bg-light-gray"},c),r.a.createElement("p",{className:"bio",dangerouslySetInnerHTML:Object(i.b)(m),id:"nav-bio-tab"}),r.a.createElement("p",{className:"bio",dangerouslySetInnerHTML:Object(i.b)(d)}),r.a.createElement("div",{id:"content",className:"collapse mt-4 ml-1"},r.a.createElement("div",{className:"bio",dangerouslySetInnerHTML:Object(i.b)(b)})),r.a.createElement("a",{href:"#content",type:"collapse",className:"red-title proxima-bold","data-toggle":"collapse","data-target":"#content",onClick:function(){return l()}},o?r.a.createElement("u",null,"Read Less >>"):r.a.createElement("u",null,"Read More >>")))}o.propTypes={currentTab:l.a.string,tabTitle:l.a.string,content:l.a.string,title:l.a.string,toggleReadMore:l.a.func,readMore:l.a.bool},o.defaultProps={currentTab:"",tabTitle:"",content:"",title:"",toggleReadMore:function(){},readMore:!1};var s=o;function m(e){var t=e.currentTab,a=e.content,n=e.title,c=e.tabTitle;return r.a.createElement("div",{className:t===c?"tab-pane active":"tab-pane",id:c,role:"tabpanel","aria-labelledby":"nav-matter-tab"},r.a.createElement("h4",{className:"bg-light-gray"},n),a.map((function(e,t){return r.a.createElement("span",{key:Object(i.a)(e.title),className:"mb-4 d-block",id:"nav-matter-tab"},e.title?r.a.createElement("a",{href:"#".concat(Object(i.j)(e.title)),className:"sidebar-title","data-toggle":"collapse"},e.title,r.a.createElement("i",{className:"text-white fas float-right mt-1"})):"",r.a.createElement("div",{id:"".concat(Object(i.j)(e.title)),className:0===t?"collapse show":"collapse"},r.a.createElement("div",{className:"off-white matters px-2 py-3",dangerouslySetInnerHTML:Object(i.b)(e.content)})))})))}m.propTypes={currentTab:l.a.string,tabTitle:l.a.string,content:l.a.arrayOf(l.a.object),title:l.a.string},m.defaultProps={currentTab:"",tabTitle:"",content:[],title:""};var d=m;function b(e){var t=e.title,a=e.currentTab,n=e.tabTitle,c=e.content;return r.a.createElement("div",{className:a===n?"tab-pane active":"tab-pane",id:n,role:"tabpanel","aria-labelledby":"nav-".concat(n,"-tab")},r.a.createElement("h4",{className:"bg-light-gray"},t),r.a.createElement("div",{className:"article-container",id:"nav-".concat(n,"-tab")},r.a.createElement("table",{className:"table mb-5"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,c.header&&c.header.map((function(e){return r.a.createElement("th",{key:e.c,className:"text-uppercase"},e.c)})))),r.a.createElement("tbody",null,c.body&&c.body.map((function(e){return r.a.createElement("tr",{key:Object(i.a)(e[0].c)},r.a.createElement("td",{dangerouslySetInnerHTML:Object(i.b)(e[0].c)}),r.a.createElement("td",{dangerouslySetInnerHTML:Object(i.b)(e[1].c)}),e[2]?r.a.createElement("td",null,e[2].c):r.a.createElement("td",null))}))))))}b.propTypes={title:l.a.string,currentTab:l.a.string,tabTitle:l.a.string,content:l.a.objectOf(l.a.oneOfType(l.a.string,l.a.array))},b.defaultProps={title:"",currentTab:"",tabTitle:"",content:{}};var u=b;function p(e){var t=e.title,a=e.link,n=e.img;return r.a.createElement("div",{className:"col-sm-12 col-md-4 my-2 article-card"},r.a.createElement("a",{href:a},r.a.createElement("img",{src:n||"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",className:"img-thumbnail mt-3",alt:t}),r.a.createElement("h5",{className:"my-3 small-excerpt text-center mt-2"},t)))}function g(e){var t=e.currentTab,a=e.tabTitle,n=e.title,c=e.content;return r.a.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-".concat(a,"-tab")},r.a.createElement("h4",{className:"bg-light-gray"},n),r.a.createElement("div",{id:"nav-".concat(a,"-tab"),className:"article-container container"},r.a.createElement("div",{className:"row"},c.map((function(e){return r.a.createElement(p,{key:Object(i.a)(e.title),link:e.link,title:e.title,img:e.featuredImg})})))))}p.propTypes={title:l.a.string,link:l.a.string,img:l.a.oneOfType([l.a.string,l.a.any])},p.defaultProps={title:"",link:"",img:""},g.propTypes={currentTab:l.a.string,tabTitle:l.a.string,title:l.a.string,content:l.a.arrayOf(l.a.object)},g.defaultProps={currentTab:"",tabTitle:"",title:"",content:[]};var h=g,E=function(e){var t=e.currentTab,a=e.tabTitle,n=e.title,c=e.content;return r.a.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-".concat(a,"-tab")},r.a.createElement("h4",{className:"bg-light-gray"},n),r.a.createElement("div",{className:"article-container container",id:"nav-".concat(a,"-tab")},r.a.createElement("div",{className:"row"},c.map((function(e){return r.a.createElement("div",{key:Object(i.a)(e.title),className:"col-sm-12"},r.a.createElement("div",{dangerouslySetInnerHTML:Object(i.b)(e.embed_video),className:"w-100"}),r.a.createElement("h5",{className:"mt-2 mb-4"},"".concat(e.title," "),"-",r.a.createElement("span",{className:"red-title"}," ".concat(e.date))))})))))};E.propTypes={currentTab:l.a.string,tabTitle:l.a.string,title:l.a.string,content:l.a.arrayOf(l.a.object)},E.defaultProps={currentTab:"",tabTitle:"",title:"",content:[]};var f=E;function v(e){var t=e.currentTab,a=e.tabTitle,n=e.title,c=e.content;return r.a.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-".concat(a,"-tab")},r.a.createElement("h4",{className:"bg-light-gray"},n),r.a.createElement("div",{className:"container article-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"nav-".concat(a,"-tab"),dangerouslySetInnerHTML:Object(i.b)(c)}))))}v.propTypes={currentTab:l.a.string,tabTitle:l.a.string,title:l.a.string,content:l.a.string},v.defaultProps={currentTab:"",tabTitle:"",title:"",content:""};var y=v,N=a(141);function T(e){var t=e.content,a=e.title;return r.a.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},r.a.createElement("h4",{className:"bg-light-gray"},"Awards"===a?r.a.createElement("span",null,a," ","-"," ",r.a.createElement("a",{href:"/awards/",className:"small-excerpt position-relative award-link"},"Award Methodology")):a),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t.length>3?r.a.createElement(N.a,{sliderType:"LargeArticle",slides:t}):r.a.createElement("div",{className:"d-flex flex-row"},t.map((function(e){return r.a.createElement("a",{href:e.link,key:e.title,className:"mx-3"},r.a.createElement("img",{src:e.featuredImg,width:"230",alt:e.title,className:"img-fluid"}))})))))))}T.propTypes={content:l.a.arrayOf(l.a.object),title:l.a.string},T.defaultProps={content:[],title:""};var k=T;function w(e){var t=e.title,a=e.content;return r.a.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},r.a.createElement("h4",{className:"bg-light-gray"},t),a.length>3?r.a.createElement("div",{className:"featured-article-attorney-container"},r.a.createElement(N.a,{sliderType:"LargeArticle",slides:a})):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement("div",{key:Object(i.a)(e.title),className:"col-sm-12 col-md-4 article-card"},r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e.featuredImg?e.featuredImg:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",alt:e.title,width:"230",className:"img-thumbnail mt-3"}),r.a.createElement("h5",{className:"my-3 small-excerpt"},e.title)))})))))}w.propTypes={title:l.a.string,content:l.a.arrayOf(l.a.object)},w.defaultProps={title:"",content:[]};var x=w;t.a=function(e){var t=e.biography,a=e.currentTab,n=e.readMore,c=e.toggleReadMore,l=e.representativeMatters,o=e.matterClick,m=e.matterTab,b=e.representativeClients,p=e.presentations,g=e.publications,E=e.media,v=e.blogPosts,N=e.newsEventArticles,T=e.videos,w=e.clients,j=e.awards,C=e.filterBody,M=e.tabs,S=Object(i.h)(v,"date");return r.a.createElement("div",null,r.a.createElement("div",{className:"tab-content"},t&&r.a.createElement(s,{currentTab:a,tabTitle:"biography",title:"Biography",content:t,readMore:n,toggleReadMore:c}),l&&r.a.createElement(d,{currentTab:a,matterClick:o,matterTab:m,tabTitle:"representative-matters",title:"Representative Matters",content:l}),b&&r.a.createElement(d,{currentTab:a,matterTab:m,tabTitle:"representative-clients",title:"Representative Clients",content:b}),p&&r.a.createElement(u,{currentTab:a,tabTitle:"presentations",title:"Presentations",content:p}),g&&r.a.createElement(u,{currentTab:a,tabTitle:"publications",title:"Publications",content:g}),E&&r.a.createElement(u,{currentTab:a,tabTitle:"media",title:"Media",content:E}),v&&v.length>0&&r.a.createElement(h,{currentTab:a,tabTitle:"blogs",title:"Articles",content:S}),N.length>0&&void 0!==N&&r.a.createElement(h,{currentTab:a,tabTitle:"newsevents",title:"News & Events",content:N}),T&&r.a.createElement(f,{title:"Videos",content:T,currentTab:a,tabTitle:"videos"}),M&&C.map((function(e){return r.a.createElement(y,{key:Object(i.a)(e[1]),title:e[1],content:e[2],currentTab:a,tabTitle:Object(i.j)(e[1])})}))),w&&w.length>0&&r.a.createElement(k,{content:w,title:"Clients"}),j&&j.length>0&&r.a.createElement(k,{content:j,title:"Awards"}),N.length>0&&r.a.createElement(x,{title:"News & Events",content:N}),v&&v.length>0&&r.a.createElement(x,{title:"Recent Articles",content:S}))}}}]);