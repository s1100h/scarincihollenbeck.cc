(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{888:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=m(a(0)),n=(m(a(3)),m(a(933))),r=m(a(935)),i=m(a(937)),c=m(a(939)),d=m(a(941)),u=m(a(943)),o=m(a(945)),s=m(a(947)),f=a(13);function m(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.biography,a=e.currentTab,m=e.readMore,b=e.toggleReadMore,p=e.representativeMatters,g=e.matterClick,v=e.matterTab,E=e.representativeClients,T=e.presentations,y=e.publications,h=e.media,N=e.blogPosts,k=e.newsEventArticles,w=e.videos,M=e.clients,_=e.awards,P=e.filterBody,S=e.tabs,C=(0,f.sortByDateKey)(N,"date");return l.default.createElement("div",null,l.default.createElement("div",{className:"tab-content"},t?l.default.createElement(n.default,{currentTab:a,tabTitle:"biography",title:"Biography",content:t,readMore:m,toggleReadMore:b}):"",p?l.default.createElement(r.default,{currentTab:a,matterClick:g,matterTab:v,tabTitle:"representative-matters",title:"Representative Matters",content:p}):"",E?l.default.createElement(r.default,{currentTab:a,matterTab:v,tabTitle:"representative-clients",title:"Representative Clients",content:E}):"",T?l.default.createElement(i.default,{currentTab:a,tabTitle:"presentations",title:"Presentations",content:T}):"",y?l.default.createElement(i.default,{currentTab:a,tabTitle:"publications",title:"Publications",content:y}):"",h?l.default.createElement(i.default,{currentTab:a,tabTitle:"media",title:"Media",content:h}):"",N?l.default.createElement(c.default,{currentTab:a,tabTitle:"blogs",title:"Articles",content:C}):"",k.length>0&&void 0!==k?l.default.createElement(c.default,{currentTab:a,tabTitle:"newsevents",title:"News & Events",content:k}):"",w?l.default.createElement(d.default,{title:"Videos",content:w,currentTab:a,tabTitle:"videos"}):"",S?P.map((function(e){return l.default.createElement(u.default,{key:(0,f.addRandomKey)(e[1]),title:e[1],content:e[2],currentTab:a,tabTitle:(0,f.urlify)(e[1])})})):""),M&&M.length>0?l.default.createElement(o.default,{content:M,title:"Clients"}):"",_&&_.length>0?l.default.createElement(o.default,{content:_,title:"Awards"}):"",k.length>0?l.default.createElement(s.default,{title:"News & Events",content:k}):"",N?l.default.createElement(s.default,{title:"Recent Articles",content:C}):"")}},933:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(13);function i(e){return e&&e.__esModule?e:{default:e}}a(934);var c=function(e){var t=e.currentTab,a=e.tabTitle,n=e.content,i=e.title,c=e.toggleReadMore,d=e.readMore,u=n.split(/<p[^>]*>/).filter((function(e){return""!==e})),o=u[0].replace("</p>",""),s=u[1],f=u.slice(2,u.length).join("<p>");return l.default.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-bio-tab"},l.default.createElement("h4",{className:"bg-light-gray"},i),l.default.createElement("p",{className:"bio",dangerouslySetInnerHTML:(0,r.createMarkup)(o),id:"nav-bio-tab"}),l.default.createElement("p",{className:"bio",dangerouslySetInnerHTML:(0,r.createMarkup)(s)}),l.default.createElement("div",{id:"content",className:"collapse mt-4 ml-1"},l.default.createElement("div",{className:"bio",dangerouslySetInnerHTML:(0,r.createMarkup)(f)})),l.default.createElement("a",{href:"#content",type:"collapse",className:"red-title proxima-bold","data-toggle":"collapse","data-target":"#content",onClick:function(){return c()}},d?l.default.createElement("u",null,"Read Less >>"):l.default.createElement("u",null,"Read More >>")))};c.propTypes={currentTab:n.default.string,tabTitle:n.default.string,content:n.default.string,title:n.default.string,toggleReadMore:n.default.func,readMore:n.default.bool},c.defaultProps={currentTab:"",tabTitle:"",content:"",title:"",toggleReadMore:function(){},readMore:!1},t.default=c},934:function(e,t,a){},935:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(13);function i(e){return e&&e.__esModule?e:{default:e}}a(936);var c=function(e){var t=e.currentTab,a=e.content,n=e.title,i=e.tabTitle;return l.default.createElement("div",{className:t===i?"tab-pane active":"tab-pane",id:i,role:"tabpanel","aria-labelledby":"nav-matter-tab"},l.default.createElement("h4",{className:"bg-light-gray"},n),a.map((function(e,t){return l.default.createElement("span",{key:(0,r.addRandomKey)(e.title),className:"mb-4 d-block",id:"nav-matter-tab"},e.title?l.default.createElement("a",{href:"#"+(0,r.urlify)(e.title),className:"sidebar-title","data-toggle":"collapse"},e.title,l.default.createElement("i",{className:"text-white fas float-right mt-1"})):"",l.default.createElement("div",{id:""+(0,r.urlify)(e.title),className:0===t?"collapse show":"collapse"},l.default.createElement("div",{className:"off-white matters px-2 py-3",dangerouslySetInnerHTML:(0,r.createMarkup)(e.content)})))})))};c.propTypes={currentTab:n.default.string,tabTitle:n.default.string,content:n.default.arrayOf(n.default.object),title:n.default.string},c.defaultProps={currentTab:"",tabTitle:"",content:[],title:""},t.default=c},936:function(e,t,a){},937:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(13);function i(e){return e&&e.__esModule?e:{default:e}}a(938);var c=function(e){var t=e.title,a=e.currentTab,n=e.tabTitle,i=e.content;return l.default.createElement("div",{className:a===n?"tab-pane active":"tab-pane",id:n,role:"tabpanel","aria-labelledby":"nav-"+n+"-tab"},l.default.createElement("h4",{className:"bg-light-gray"},t),l.default.createElement("div",{className:"article-container",id:"nav-"+n+"-tab"},l.default.createElement("table",{className:"table mb-5"},l.default.createElement("thead",{className:"thead-dark"},l.default.createElement("tr",null,i.header.map((function(e){return l.default.createElement("th",{key:e.c,className:"text-uppercase"},e.c)})))),l.default.createElement("tbody",null,i.body.map((function(e){return l.default.createElement("tr",{key:(0,r.addRandomKey)(e[0].c)},l.default.createElement("td",{dangerouslySetInnerHTML:(0,r.createMarkup)(e[0].c)}),l.default.createElement("td",{dangerouslySetInnerHTML:(0,r.createMarkup)(e[1].c)}),e[2]?l.default.createElement("td",null,e[2].c):l.default.createElement("td",null))}))))))};c.propTypes={title:n.default.string,currentTab:n.default.string,tabTitle:n.default.string,content:n.default.object},c.defaultProps={title:"",currentTab:"",tabTitle:"",content:{}},t.default=c},938:function(e,t,a){},939:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(13);function i(e){return e&&e.__esModule?e:{default:e}}a(940);var c=function(e){var t=e.title,a=e.link,n=e.img;return l.default.createElement("div",{className:"col-sm-12 col-md-4 my-2 article-card"},l.default.createElement("a",{href:a},l.default.createElement("img",{src:n||"http://localhost/shlaw.dev.cc/wp-content/themes/sh-law-theme/includes/assets/images/88a9c0b8e7ff2ed7ecff91cfdaa0b816.png",className:"img-thumbnail mt-3",alt:t}),l.default.createElement("h5",{className:"my-3 small-excerpt text-center mt-2"},t)))},d=function(e){var t=e.currentTab,a=e.tabTitle,n=e.title,i=e.content;return l.default.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-"+a+"-tab"},l.default.createElement("h4",{className:"bg-light-gray"},n),l.default.createElement("div",{id:"nav-"+a+"-tab",className:"article-container container"},l.default.createElement("div",{className:"row"},i.map((function(e){return l.default.createElement(c,{key:(0,r.addRandomKey)(e.title),link:e.link,title:e.title,img:e.featuredImg})})))))};c.propTypes={title:n.default.string,link:n.default.string,img:n.default.oneOfType([n.default.string,n.default.any])},c.defaultProps={title:"",link:"",img:""},d.propTypes={currentTab:n.default.string,tabTitle:n.default.string,title:n.default.string,content:n.default.arrayOf(n.default.object)},d.defaultProps={currentTab:"",tabTitle:"",title:"",content:[]},t.default=d},940:function(e,t,a){},941:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(13);function i(e){return e&&e.__esModule?e:{default:e}}a(942);var c=function(e){var t=e.currentTab,a=e.tabTitle,n=e.title,i=e.content;return l.default.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-"+a+"-tab"},l.default.createElement("h4",{className:"bg-light-gray"},n),l.default.createElement("div",{className:"article-container container",id:"nav-"+a+"-tab"},l.default.createElement("div",{className:"row"},i.map((function(e){return l.default.createElement("div",{key:(0,r.addRandomKey)(e.title),className:"col-sm-12"},l.default.createElement("div",{dangerouslySetInnerHTML:(0,r.createMarkup)(e.embed_video),className:"w-100"}),l.default.createElement("h5",{className:"mt-2 mb-4"},e.title+" ","-",l.default.createElement("span",{className:"red-title"}," "+e.date)))})))))};c.propTypes={currentTab:n.default.string,tabTitle:n.default.string,title:n.default.string,content:n.default.arrayOf(n.default.object)},c.defaultProps={currentTab:"",tabTitle:"",title:"",content:[]},t.default=c},942:function(e,t,a){},943:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(13);function i(e){return e&&e.__esModule?e:{default:e}}a(944);var c=function(e){var t=e.currentTab,a=e.tabTitle,n=e.title,i=e.content;return l.default.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-"+a+"-tab"},l.default.createElement("h4",{className:"bg-light-gray"},n),l.default.createElement("div",{className:"container article-container"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{id:"nav-"+a+"-tab",dangerouslySetInnerHTML:(0,r.createMarkup)(i)}))))};c.propTypes={currentTab:n.default.string,tabTitle:n.default.string,title:n.default.string,content:n.default.string},c.defaultProps={currentTab:"",tabTitle:"",title:"",content:""},t.default=c},944:function(e,t,a){},945:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=c(a(0)),n=c(a(3)),r=c(a(177)),i=a(43);function c(e){return e&&e.__esModule?e:{default:e}}a(946);var d=function(e){var t=e.onClick;return l.default.createElement(i.FaAngleDoubleRight,{className:"featured-slider-arrow right",role:"button",tabIndex:"0",onKeyPress:t,onClick:t})},u=function(e){var t=e.onClick;return l.default.createElement(i.FaAngleDoubleLeft,{className:"featured-slider-arrow left",role:"button",tabIndex:"0",onKeyPress:t,onClick:t})},o=function(e){var t=e.content,a=e.title,n={centerMode:!0,infinite:!0,slidesToShow:3,dots:!0,adaptiveHeight:!0,nextArrow:l.default.createElement(d,null),prevArrow:l.default.createElement(u,null),className:"fs-container",lazyLoad:!0,responsive:[{breakpoint:1690,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,autoplay:!0}}]};return l.default.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},l.default.createElement("h4",{className:"bg-light-gray"},"Awards"===a?l.default.createElement("span",null,a," ","-"," ",l.default.createElement("a",{href:"/awards/",className:"small-excerpt position-relative award-link"},"Award Methodology")):a),t.length>3?l.default.createElement(r.default,n,t.map((function(e){return l.default.createElement("a",{href:e.link,key:e.title,className:"mx-3"},l.default.createElement("img",{src:e.featuredImg,width:"230",alt:e.title,className:"img-fluid"}))}))):l.default.createElement("div",{className:"d-flex flex-row"},t.map((function(e){return l.default.createElement("a",{href:e.link,key:e.title,className:"mx-3"},l.default.createElement("img",{src:e.featuredImg,width:"230",alt:e.title,className:"img-fluid"}))}))))};d.propTypes={onClick:n.default.func},d.defaultProps={onClick:function(){}},u.propTypes={onClick:n.default.func},u.defaultProps={onClick:function(){}},o.propTypes={content:n.default.arrayOf(n.default.object),title:n.default.string},o.defaultProps={content:[],title:""},t.default=o},946:function(e,t,a){},947:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(0)),n=d(a(3)),r=d(a(177)),i=a(43),c=a(13);function d(e){return e&&e.__esModule?e:{default:e}}a(948);var u=function(e){var t=e.onClick;return l.default.createElement(i.FaAngleDoubleRight,{className:"featured-slider-arrow right",onKeyPress:t,role:"button",tabIndex:"0",onClick:t})},o=function(e){var t=e.onClick;return l.default.createElement(i.FaAngleDoubleLeft,{className:"featured-slider-arrow left",role:"button",tabIndex:"0",onKeyPress:t,onClick:t})},s=function(e){var t=e.title,a=e.content.filter((function(e,t){return t<8})),n="http://localhost/shlaw.dev.cc/wp-content/themes/sh-law-theme/includes/assets/images/88a9c0b8e7ff2ed7ecff91cfdaa0b816.png",i={centerMode:!0,infinite:!0,slidesToShow:3,dots:!0,adaptiveHeight:!0,nextArrow:l.default.createElement(u,null),prevArrow:l.default.createElement(o,null),className:"fs-container",responsive:[{breakpoint:1690,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,autoplay:!0}}]};return l.default.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},l.default.createElement("h4",{className:"bg-light-gray"},t),a.length>3?l.default.createElement(r.default,i,a.map((function(e){return l.default.createElement("div",{key:(0,c.addRandomKey)(e.title),className:"article-card"},l.default.createElement("a",{href:e.link},l.default.createElement("img",{src:e.featuredImg?e.featuredImg:n,alt:e.title,width:"230",className:"img-thumbnail mx-auto d-block mt-3"}),l.default.createElement("h5",{className:"my-3 text-center small-excerpt"},e.title)))}))):l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row"},a.map((function(e){return l.default.createElement("div",{key:(0,c.addRandomKey)(e.title),className:"col-sm-12 col-md-4 article-card"},l.default.createElement("a",{href:e.link},l.default.createElement("img",{src:e.featuredImg?e.featuredImg:n,alt:e.title,width:"230",className:"img-thumbnail mt-3"}),l.default.createElement("h5",{className:"my-3 small-excerpt"},e.title)))})))))};u.propTypes={onClick:n.default.func},u.defaultProps={onClick:function(){}},o.propTypes={onClick:n.default.func},o.defaultProps={onClick:function(){}},s.propTypes={title:n.default.string,content:n.default.arrayOf(n.default.object)},s.defaultProps={title:"",content:[]},t.default=s},948:function(e,t,a){}}]);