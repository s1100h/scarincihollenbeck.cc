(window.webpackJsonp=window.webpackJsonp||[]).push([[23,36],{472:function(e,a,t){t.r(a);var n=t(0),r=t.n(n),c=t(496),l=t(142),i=t(500),o=t(495);a.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{seo:{title:"Page Not Found | Scarinci Hollenbeck",metaDescription:"Sorry, it looks this like this page no longer exists on scarincihollenbeck.com",canonicalLink:"/"}}),r.a.createElement(o.a,{title:"404: Resource Not Found",subtitle:"Sorry, the page you are looking for cannot be found.",image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg",height:"auto"}),r.a.createElement(c.a,null,r.a.createElement("p",{className:"lead"},"It's possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for."),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 offset-md-3"},r.a.createElement(l.a,null)),r.a.createElement("div",{className:"col-sm-12 col-md-8 mt-5 offset-md-2 off-white"},r.a.createElement("h4",{className:"proxima-bold p-3 pb-0 mb-0 text-center"},"Or try visiting one of these pages on our site to narrow your search."),r.a.createElement("ul",{className:"ml-6"},r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/attorneys"),className:"u-hover h5"},"Attorneys"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/practices"),className:"u-hover h5"},"Practices"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/locations"),className:"u-hover h5"},"Locations"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-news"),className:"u-hover h5"},"Firm News"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-events"),className:"u-hover h5"},"Firm Events"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-insights"),className:"u-hover h5"},"Firm Insights")))))))))}},482:function(e,a,t){t.r(a),function(e){var n=t(61),r=t.n(n),c=t(82),l=t.n(c),i=t(57),o=t.n(i),s=t(58),m=t.n(s),d=t(83),u=t.n(d),p=t(59),h=t.n(p),g=t(60),b=t.n(g),f=t(39),v=t.n(f),E=t(0),y=t.n(E),w=t(736),N=t(495),k=t(496),x=t(541),P=t(472),L=t(737),T=t(863),j=t(139);function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=function(a){h()(i,a);var t,n,c=(t=i,function(){var e,a=v()(t);if(O()){var n=v()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return b()(this,e)});function i(e){var a;return o()(this,i),(a=c.call(this,e)).state={title:"",description:"",content:[],chair:[],corePractices:[],practiceList:[],industryTopics:[],attorneyList:[],highlightReal:[],blogPosts:[],newsPosts:[],currentTab:"",error:!1},a.handleLink=a.handleLink.bind(u()(a)),a.tabClick=a.tabClick.bind(u()(a)),a}return m()(i,[{key:"componentDidMount",value:(n=l()(r.a.mark((function a(){var t,n,c,i,o,s,m,d,u,p,h,g,b,f,v,E,y;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=this.props.match.params.practice,a.prev=1,a.next=4,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/individual-practices/practice/").concat(t),{headers:j.e});case 4:return n=a.sent,a.next=7,e("".concat("https://api.scarincihollenbeck.com","/cached/core-practices"),{headers:j.e});case 7:return c=a.sent,a.next=10,n.json();case 10:return i=a.sent,a.next=13,c.json();case 13:o=a.sent,s=o.map((function(e){return{name:e.title,link:e.slug}})),m=i.chair,d=i.title,u=i.description,p=i.content,h=i.practiceList,g=i.industryTopics,b=i.attorneyList,f=i.highlightReal,v=i.seo,E=[],y=[],g.forEach(function(){var e=l()(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(599!==a.categoryParent){e.next=3;break}return e.next=3,E.push(a);case 3:if(98!==a.categoryParent&&99!==a.categoryParent){e.next=6;break}return e.next=6,y.push(a);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),this.setState({chair:m,title:d,description:u,content:p,industryTopics:g,attorneyList:b,practiceList:h,highlightReal:f,blogPosts:E,newsPosts:y,seo:v,currentTab:p[0].title,corePractices:s}),a.next=25;break;case 22:a.prev=22,a.t0=a.catch(1),this.setState({error:!0});case 25:case"end":return a.stop()}}),a,this,[[1,22]])}))),function(){return n.apply(this,arguments)})},{key:"handleLink",value:function(e){window.location=e.target.value}},{key:"tabClick",value:function(e){var a=e;this.setState({currentTab:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.chair,n=a.title,r=a.description,c=a.content,l=a.practiceList,i=a.industryTopics,o=a.attorneyList,s=a.searchTerm,m=a.currentTab,d=a.newsPosts,u=a.highlightReal,p=a.seo,h=a.blogPosts,g=a.corePractices;return a.error?y.a.createElement(P.default,null):y.a.createElement("div",null,y.a.createElement(w.a,{seo:p}),y.a.createElement("div",{id:"single-practice"},y.a.createElement(N.a,{title:n,subtitle:r,image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground-1.jpg",height:""}),c.length>0?y.a.createElement("div",null,y.a.createElement(k.a,null,y.a.createElement("div",{className:"line-header",id:"nav-tab",role:"tablist"},y.a.createElement("h3",{className:m===c[0].title?"active":"",id:"nav-home-tab","data-toggle":"tab",onClick:function(){return e.tabClick(c[0].title)},onKeyPress:function(){return e.tabClick(c[0].title)},href:"#".concat(c[0].title),role:"tab","aria-controls":"nav-home","aria-selected":"true"},c[0].title),c.map((function(a,t){return t>0?y.a.createElement("h3",{key:a.title,className:m===a.title?"active":"","data-toggle":"tab",href:"#".concat(a.title),role:"tab",onClick:function(){return e.tabClick(a.title)},onKeyPress:function(){return e.tabClick(a.title)},"aria-controls":"nav-home","aria-selected":"true"},a.title):""})),o.length>0?y.a.createElement("h3",{id:"nav-home-tab",className:"team"===m?"active":"","data-toggle":"tab",href:"#team",role:"tab",onClick:function(){return e.tabClick("team")},onKeyPress:function(){return e.tabClick("team")},"aria-controls":"nav-home","aria-selected":"true"},"Our Team"):"",i.length>0?y.a.createElement("h3",{id:"nav-home-tab",className:"blogs"===m?"active":"","data-toggle":"tab",href:"#blogs",role:"tab",onKeyPress:function(){return e.tabClick("blogs")},onClick:function(){return e.tabClick("blogs")},"aria-controls":"nav-home","aria-selected":"true"},"Related Updates"):"")),y.a.createElement(x.a,{body:y.a.createElement(T.a,{currentTab:m,content:c,attorneyList:o,chair:t,handleLink:this.handleLink,industryTopics:i,highlightReal:u,title:n,newsPosts:d,blogPosts:h}),sidebar:y.a.createElement(L.a,{searchTerm:s,practiceList:l,corePractices:g})})):""))}}]),i}(E.Component);a.default=C}.call(this,t(140))},495:function(e,a,t){var n=t(498),r=t.n(n),c=t(0),l=t.n(c),i=t(2),o=t.n(i),s=t(499),m=t(139);function d(){var e=r()(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return d=function(){return e},e}function u(){var e=r()(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return u=function(){return e},e}var p=function(e){var a=e.title,t=e.subtitle,n=e.image,r=e.height,c=s.a.div(u(),n,r),i=s.a.div(d());return l.a.createElement(c,{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(i,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},l.a.createElement("div",{className:"p-3"},l.a.createElement("span",{id:"red-block"}),l.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},a),l.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(m.b)(t)}))))))};p.propTypes={image:o.a.string,title:o.a.string,subtitle:o.a.oneOfType([o.a.string,o.a.arrayOf(o.a.string)]),height:o.a.string},p.defaultProps={image:"",title:"",subtitle:"",height:""},a.a=p},496:function(e,a,t){var n=t(0),r=t.n(n);a.a=function(e){var a=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},a)))}},500:function(e,a,t){var n=t(0),r=t.n(n),c=t(497),l=t(2),i=t.n(l);function o(e){var a=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,a.title),r.a.createElement("meta",{name:"description",content:a.metaDescription}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(a.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": "'.concat(a.title,'",\n          "description": "').concat(a.metaDescription,'",\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))}o.propTypes={seo:i.a.objectOf(i.a.string)},o.defaultProps={seo:{}},a.a=o},504:function(e,a,t){var n=t(0),r=t.n(n),c=t(15),l=t(104),i=t(507),o=t(508),s=t(2),m=t.n(s);function d(e){var a=e.link,t=e.image,n=e.name,s=e.title,m=e.number,d=e.email,u=e.height,p=e.width;return r.a.createElement("div",{className:"d-flex flex-row attorney-card",height:u},r.a.createElement(c.b,{to:a},r.a.createElement("img",{rel:"preload",src:t,alt:n,className:"mr-1",style:{width:p}})),r.a.createElement("div",{className:"mt-3 ml-3"},r.a.createElement(c.b,{to:a},r.a.createElement("p",{className:"text-uppercase red-title small-excerpt"},r.a.createElement("strong",null,n)),r.a.createElement("p",{className:"mb-1 small-excerpt"},r.a.createElement("strong",null,s))),r.a.createElement("div",{className:"small-excerpt"},r.a.createElement(l.a,{icon:i.faPhone})," ",m,r.a.createElement("br",null),r.a.createElement(l.a,{icon:o.faEnvelope})," ",d)))}d.propTypes={image:m.a.string,name:m.a.string,title:m.a.string,number:m.a.string,email:m.a.string,link:m.a.string,height:m.a.string,width:m.a.string},d.defaultProps={image:"",name:"",title:"",number:"",email:"",link:"",height:"",width:""},a.a=d},541:function(e,a,t){var n=t(0),r=t.n(n);a.a=function(e){var a=e.body,t=e.sidebar;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-9"},a),r.a.createElement("div",{className:"col-sm-12 col-md-3"},t)))}},736:function(e,a,t){var n=t(0),r=t.n(n),c=t(497),l=t(2),i=t.n(l);function o(e){var a=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,a.title),r.a.createElement("meta",{name:"description",content:a.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(a.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "http://schema.org",\n          "@type": "LegalService",\n          "name": "'.concat(a.practiceTitle,'",\n          "description": "').concat(a.metaDescription,'",\n          "url": "').concat(window.location.origin,"/").concat(a.canonicalLink,'",\n          "image": "https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png",\n          "telephone": "201-896-4100",\n          "email": "info@sh-law.com",\n          "hasMap": "https://www.google.com/maps/place/1100+Valley+Brook+Ave,+Lyndhurst,+NJ+07071/@40.8023747,-74.1104934,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2561a06bdb41f:0xb3627d0eda6743c8!8m2!3d40.8023707!4d-74.1083047",\n          "address": {\n            "@type": "PostalAddress",\n            "addressLocality": "Lyndhurst",\n            "addressRegion": "NJ",\n            "postalCode": "07071",\n            "streetAddress": "1100 Valley Brook Ave., P.O. Box 790"\n          },\n          "geo": {\n            "@type": "GeoCoordinates",\n            "latitude": "40.802374",\n            "longitude": ",-74.1104934"\n          },\n          "sameAs": [\n            "https://www.facebook.com/ScarinciHollenbeck/",\n            "https://twitter.com/s_h_law?lang=en"\n          ],\n          "openingHours": "Mo,Tu,We,Th,Fr, 8:00-5:00"\n        }\n        ')))}o.propTypes={seo:i.a.objectOf(i.a.string)},o.defaultProps={seo:{}},a.a=o},737:function(e,a,t){var n=t(0),r=t.n(n),c=t(15),l=t(2),i=t.n(l),o=t(104),s=t(539),m=t(142);function d(e){var a=e.practiceList,t=e.corePractices;return r.a.createElement("div",null,r.a.createElement(m.a,null),r.a.createElement("div",{className:"my-4"},r.a.createElement("div",{className:"sidebar-title"},"Get in touch with an attorney"),r.a.createElement("div",{className:"off-white"},r.a.createElement("div",{className:"off-white mh-375"},r.a.createElement("img",{src:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-mini-diamond.png",alt:"Subscribe Scarinci Hollenbeck attorneys",className:"mx-auto d-block py-4 w-50"}),r.a.createElement("p",{className:"proxima-bold text-center px-3"},"Are you in need of an attorney that covers this area of law for your business?"),r.a.createElement(c.b,{type:"button",to:"/contact",className:"mx-auto p-2 d-block btn-danger w-50 text-center small-excerpt border-r-5 mb-3"},"Get in touch today!")))),r.a.createElement("div",{className:"my-4"},r.a.createElement("a",{href:"#core-practices",className:"sidebar-title","data-toggle":"collapse","aria-expanded":"true"},"Core Practices",r.a.createElement(o.a,{icon:s.faPlus,className:"text-white float-right"})),r.a.createElement("div",{id:"core-practices",className:"collapse show"},r.a.createElement("div",{className:"off-white"},r.a.createElement("ul",{className:"pl-0 pt-2 pb-1 pr-1 sidebar-content-page"},t.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.link,key:e.name,className:"proxima-bold"},e.name))})))))),r.a.createElement("div",null,r.a.createElement("a",{href:"#related-practices",className:"sidebar-title","data-toggle":"collapse","aria-expanded":"true"},"Related Sub-Practices",r.a.createElement(o.a,{icon:s.faPlus,className:"text-white float-right"})),r.a.createElement("div",{id:"related-practices",className:"collapse show"},r.a.createElement("div",{className:"off-white"},r.a.createElement("ul",{className:"pl-0 pt-2 pb-1 pr-1 sidebar-content-page"},a.map((function(e){return r.a.createElement("li",{key:e.title},r.a.createElement("a",{href:e.slug,className:e.title.length>40?"small-excerpt proxima-bold":"proxima-bold"},e.title))})))))))}d.propTypes={practiceList:i.a.arrayOf(i.a.object),corePractices:i.a.arrayOf(i.a.object)},d.defaultProps={practiceList:[],corePractices:[]},a.a=d},863:function(e,a,t){var n=t(0),r=t.n(n),c=t(2),l=t.n(c),i=t(504);function o(e){var a=e.members,t=e.chair,n=e.handleLink;return r.a.createElement("div",null,t.length>0?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row bg-light-gray"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h4",{className:"c-title"},"Practice Chair"))),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{key:e.ID,className:"col-sm-12 col-md-12 col-lg-6"},r.a.createElement(i.a,{link:e.link,image:e.image,name:e.name,title:e.designation,number:e.contact,email:e.email,height:"109px",width:"75%"}))})))):"",a?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5 bg-light-gray"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("h4",{className:"c-title"},"Members")),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("form",{className:"w-100 pt-2"},r.a.createElement("select",{onChange:n,className:"w-100"},a.map((function(e){return r.a.createElement("option",{value:e.link,key:e.ID,className:"w-100"},e.name)})))))),r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement("div",{key:e.ID,className:"col-sm-12 col-md-12 col-lg-6 mb-3"},r.a.createElement(i.a,{link:e.link,image:e.image,name:e.name,title:e.designation,number:e.contact,email:e.email,height:"109px",width:"75%"}))})))):"")}o.propTypes={members:l.a.arrayOf(l.a.object),chair:l.a.arrayOf(l.a.object),handleLink:l.a.func},o.defaultProps={members:[],chair:[],handleLink:function(){}};var s=o;function m(e){var a=e.articles;return r.a.createElement("div",{className:"container related-article-container"},r.a.createElement("div",{className:"row"},a?a.map((function(e){return r.a.createElement("div",{className:"col-sm-12 col-md-6 mb-3 article-card",key:e.ID},r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e.image?e.image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",width:"300",className:"img-thumbnail mx-auto d-block",alt:e.title}),r.a.createElement("p",{className:"small-excerpt text-center"},e.title)))})):""))}m.propTypes={articles:l.a.arrayOf(l.a.object)},m.defaultProps={articles:[]};var d=m,u=t(141),p=t(139);function h(e){var a=e.content.filter((function(e,a){return a<8}));return r.a.createElement("div",{className:"mt-4 w-100 d-block practice-news-list"},a.length>3?r.a.createElement(u.a,{sliderType:"LargeArticle",slides:a}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement("div",{key:Object(p.a)(e.title),className:"col-sm-12 col-md-4 article-card"},r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e.image?e.image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png",alt:e.title,className:"img-thumbnail mt-3"}),r.a.createElement("h5",{className:"my-3 small-excerpt"},e.title)))})))))}h.propTypes={content:l.a.arrayOf(l.a.object)},h.defaultProps={content:[]};var g=h;function b(e){var a=e.highlightReal;return r.a.createElement("div",{className:"mt-4 w-100 d-block practice-news-list"},r.a.createElement(u.a,{sliderType:"LargeArticle",slides:a}))}b.propTypes={highlightReal:l.a.arrayOf(l.a.object)},b.defaultProps={highlightReal:[]};var f=b;function v(e){var a=e.currentTab,t=e.content,n=e.attorneyList,c=e.chair,l=e.handleLink,i=e.industryTopics,o=e.highlightReal,m=e.newsPosts,u=e.blogPosts,h=e.title;return r.a.createElement("div",null,r.a.createElement("div",{className:"tab-content"},r.a.createElement("div",{className:a===t[0].title?"tab-pane active article-container":"tab-pane article-container",id:"#".concat(t[0].title),role:"tabpanel","aria-labelledby":"nav-home-tab",dangerouslySetInnerHTML:Object(p.b)(t[0].content)}),t.map((function(e,t){return t>0?r.a.createElement("div",{key:e.title,id:"#".concat(e.title),className:a===e.title?"tab-pane active article-container":"tab-pane article-container",role:"tabpanel","aria-labelledby":"nav-home-tab",dangerouslySetInnerHTML:Object(p.b)(e.content)}):""})),r.a.createElement("div",{id:"team",className:"team"===a?"tab-pane active":"tab-pane",role:"tabpanel","aria-labelledby":"nav-home-tab"},r.a.createElement(s,{members:n,chair:c,handleLink:l})),r.a.createElement("div",{id:"blogs",className:"blogs"===a?"tab-pane active":"tab-pane",role:"tabpanel","aria-labelledby":"nav-home-tab"},r.a.createElement(d,{articles:i}))),o.length>0&&r.a.createElement(f,{highlightReal:o}),m.length>0&&r.a.createElement("div",{className:"w-100 d-block"},r.a.createElement("h4",{className:"bg-light-gray"},"Latest News on"," ",h),r.a.createElement(g,{content:m})),u.length>0&&r.a.createElement("div",{className:"w-100 d-block"},r.a.createElement("h4",{className:"bg-light-gray"},"Latest Articles on"," ",h),r.a.createElement(g,{content:u})))}v.propTypes={currentTab:l.a.string,content:l.a.arrayOf(l.a.object),attorneyList:l.a.arrayOf(l.a.object),chair:l.a.arrayOf(l.a.object),handleLink:l.a.func,industryTopics:l.a.arrayOf(l.a.object),highlightReal:l.a.arrayOf(l.a.object),newsPosts:l.a.arrayOf(l.a.object),blogPosts:l.a.arrayOf(l.a.object),title:l.a.string},v.defaultProps={currentTab:"",title:"",content:[],attorneyList:[],chair:[],industryTopics:[],highlightReal:[],newsPosts:[],blogPosts:[],handleLink:function(){}};a.a=v}}]);