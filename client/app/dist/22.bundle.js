(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{493:function(e,t,a){a.r(t),function(e){var n=a(61),r=a.n(n),c=a(82),l=a.n(c),s=a(57),o=a.n(s),i=a(58),m=a.n(i),u=a(59),p=a.n(u),d=a(60),f=a.n(d),h=a(39),g=a.n(h),E=a(0),y=a.n(E),v=a(513),b=a(502),N=a(514),w=a(858),x=a(859),k=a(139);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=function(t){p()(s,t);var a,n,c=(a=s,function(){var e,t=g()(a);if(S()){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f()(this,e)});function s(e){var t;return o()(this,s),(t=c.call(this,e)).state={term:"",results:[],news:[],events:[],insight:[],trending:[],pageNums:[],currentPage:"",breadCrumb:[],categorySlug:"",loading:!1},t}return m()(s,[{key:"componentDidMount",value:(n=l()(r.a.mark((function t(){var a,n,c,s,o,i=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=this.props.location,(o=a.search).indexOf("/page/")>-1?(c=o.split("/page/").pop().replace("/",""),n=o.split("?=").pop().split("/page/")[0],s=[n,c]):(n=o.split("?=").pop(),s=[n,c=1]),this.setState({breadCrumb:s,categorySlug:n,currentPage:c,loading:!0},l()(r.a.mark((function t(){var a,l,s,o,m,u,p,d,f,h,g,E,y;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/search/query/").concat(n,"/").concat(c),{headers:k.e});case 2:return a=t.sent,t.next=5,e("".concat("https://api.scarincihollenbeck.com","/cached/latest-articles"),{headers:k.e});case 5:return l=t.sent,t.next=8,a.json();case 8:return s=t.sent,t.next=11,l.json();case 11:for(o=t.sent,m=s.pages,u=s.results,p=s.posts,d=s.seo,f=o.firmNews,h=o.firmInsights,g=o.firmEvents,E=[],y=1;y<=m;y+=1)E.push(y);i.setState({results:u,seo:d,pageNums:E,trending:p,news:f,events:g,insight:h,loading:!1});case 17:case"end":return t.stop()}}),t)}))));case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.results,a=e.news,n=e.events,r=e.insight,c=e.trending,l=e.pageNums,s=e.breadCrumb,o=e.categorySlug,i=e.currentPage,m=e.loading,u=i>2?i-1:1,p=i<l.length?parseInt(i,10)+1:l.length,d=window.location.href.split("/").filter((function(e){return""!==e})),f="number"==typeof d[d.length-1]?d[d.length-1]:1,h={title:"You searched for ".concat(o," | Scarinci Hollenbeck")};return y.a.createElement("div",null,y.a.createElement(b.a,{seo:h}),y.a.createElement(v.a,{header:y.a.createElement(N.a,{breadCrumb:s,categorySlug:o}),body:y.a.createElement(x.a,{results:t,categorySlug:o,next:p,prev:u,pageNums:l,news:a,events:n,insight:r,active:f,loading:m}),sidebar:y.a.createElement(w.a,{trending:c})}))}}]),s}(E.Component);t.default=C}.call(this,a(140))},501:function(e,t,a){(function(e){var n=a(61),r=a.n(n),c=a(82),l=a.n(c),s=a(57),o=a.n(s),i=a(58),m=a.n(i),u=a(83),p=a.n(u),d=a(59),f=a.n(d),h=a(60),g=a.n(h),E=a(39),y=a.n(E),v=a(0),b=a.n(v),N=a(139);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var x=function(t){f()(s,t);var a,n,c=(a=s,function(){var e,t=y()(a);if(w()){var n=y()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g()(this,e)});function s(e){var t;return o()(this,s),(t=c.call(this,e)).state={searchTerm:"",attorneys:[],practices:[],categories:[],t:{keyword:"",attorney:"",practice:"",category:""}},t.onChange=t.onChange.bind(p()(t)),t.onSubmit=t.onSubmit.bind(p()(t)),t}return m()(s,[{key:"onChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=this.state.t;r[n]=a,this.setState({t:r})}},{key:"onSubmit",value:function(){var e,t,a,n,r,c,l=this.state.t;window.location=(t=(e=l).keyword,a=e.practice,n=e.attorney,r=e.category,c="".concat(void 0!==t?t:""," ").concat(void 0!==a?a:""," ").concat(void 0!==n?n:""," ").concat(void 0!==r?r:"").trim().replace(/[^\w\s]/gi,""),"/s?=".concat(c.toLowerCase().replace(/\s/g,"+")))}},{key:"componentDidMount",value:(n=l()(r.a.mark((function t(){var a,n,c,l,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://api.scarincihollenbeck.com","/cached/search-options"),{headers:N.e});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,c=n.attorneys,l=n.categories,s=n.practices,this.setState({attorneys:c,categories:l,practices:s});case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state,a=t.attorneys,n=t.categories,r=t.practices,c=(t.searchTerm,t.t);return b.a.createElement("div",{className:"w-100"},b.a.createElement("form",{onChange:this.onChange},b.a.createElement("label",{htmlFor:"searchSite",className:"w-100"},b.a.createElement("input",{name:"keyword",type:"search",id:"searchSite",value:c.keyword,placeholder:"Keyword...",className:"form-control p-2"}),b.a.createElement("span",{className:"sr-only"},"Search Site")),b.a.createElement("label",{htmlFor:"searchPractice",className:"d-block w-100"},b.a.createElement("select",{name:"practice",id:"searchPractice",className:"form-control p-2"},b.a.createElement("option",{defaultValue:"Filter by practice"},c.practice||"Filter by practice"),r.map((function(e){return b.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),b.a.createElement("span",{className:"sr-only"},"Filter by Practice")),b.a.createElement("label",{htmlFor:"searchAttorney",className:"d-block w-100"},b.a.createElement("select",{name:"attorney",id:"searchAttorney",className:"form-control p-2"},b.a.createElement("option",{defaultValue:"Filter by attorney"},c.attorney||"Filter by attorney"),a.map((function(e){return b.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),b.a.createElement("span",{className:"sr-only"},"Filtery by Attorney")),b.a.createElement("label",{htmlFor:"searchCategory",className:"d-block w-100"},b.a.createElement("select",{name:"category",id:"searchCategory",className:"form-control p-2"},b.a.createElement("option",{defaultValue:"Filter by category"},c.category||"Filter by category"),n.map((function(e){return"Uncategorized"!==e.title?b.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title):""}))),b.a.createElement("span",{className:"sr-only"},"Filtery by Category")),b.a.createElement("button",{type:"button",className:"btn btn-secondary proxima-bold px-5 my-2 mr-2"},"Clear"),b.a.createElement("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-danger my-2 px-5"},"Search")))}}]),s}(v.Component);t.a=x}).call(this,a(140))},502:function(e,t,a){var n=a(0),r=a.n(n),c=a(497),l=a(2),s=a.n(l);function o(e){var t=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))}o.propTypes={seo:s.a.objectOf(s.a.string)},o.defaultProps={seo:{}},t.a=o},505:function(e,t,a){var n=a(198),r=a.n(n),c=a(498),l=a.n(c),s=a(0),o=a.n(s),i=a(15),m=a(2),u=a.n(m),p=a(499),d=a(139);function f(){var e=l()(["\n  height: 545px;\n  overflow:hidden;\n  overflow-y: auto;\n"]);return f=function(){return e},e}var h=p.a.div(f());function g(e){var t=e.split(" "),a=t[0][0]+t[t.length-1];return Object(d.j)(a.toLowerCase())}function E(e){var t=e.title,a=e.content;return o.a.createElement("div",{className:"w-100 mt-4"},o.a.createElement("div",{className:"sidebar-title"},t),o.a.createElement(h,{className:"off-white"},a.length>0?a.map((function(e){return o.a.createElement("div",{key:e.ID||Object(d.a)(e.title),className:"p-2"},o.a.createElement("a",{href:e.link,className:"top-article"},o.a.createElement("p",{className:"proxima-bold mb-0"},e.title)),(e.hasOwnProperty("author")||"Scarinci Hollenbeck"===e.author)&&o.a.createElement(o.a.Fragment,null,"string"==typeof e.author&&o.a.createElement(o.a.Fragment,null,o.a.createElement("strong",null,"Author: "),o.a.createElement(i.b,{to:"/author/".concat(g(e.author))},e.author)),"object"===r()(e.author)&&o.a.createElement(o.a.Fragment,null,o.a.createElement("strong",null,"Author: "),o.a.createElement(i.b,{to:"/author/".concat(g(e.author[0].name))},e.author[0].name))),e.hasOwnProperty("pubDate")&&o.a.createElement("p",{className:"my-0"},e.pubDate.substring(0,17)),e.hasOwnProperty("source")&&o.a.createElement("div",{className:"mt-0",dangerouslySetInnerHTML:Object(d.b)(e.source)}))})):o.a.createElement("div",{className:"mx-5 p-5"},o.a.createElement("p",null,"Articles loading..."))))}E.propTypes={content:u.a.arrayOf(u.a.object),title:u.a.string},E.defaultProps={content:[],title:""},t.a=E},513:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.header,a=e.body,n=e.sidebar;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-18"},t),r.a.createElement("div",{className:"col-sm-12 col-md-8"},a),r.a.createElement("div",{className:"col-sm-12 col-md-4"},n)))}},514:function(e,t,a){var n=a(0),r=a.n(n),c=a(104),l=a(503),s=a(2),o=a.n(s);function i(e){var t=e.breadCrumb,a=e.categorySlug;return r.a.createElement("h6",null,r.a.createElement("span",null,r.a.createElement("a",{href:"".concat(window.location.origin),className:"red-title proxima-bold"},"HOME")),r.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},r.a.createElement(c.a,{icon:l.faCaretRight,className:"red-title"})),t.map((function(e,n){return n<t.length-1?r.a.createElement("span",{key:e},r.a.createElement("span",{className:"red-title proxima-bold text-uppercase"},e===a?r.a.createElement("u",null,a):"".concat(a)),r.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},r.a.createElement(c.a,{icon:l.faCaretRight,className:"red-title"}))):r.a.createElement("span",{key:e},r.a.createElement("span",{className:"red-title proxima-bold"},e===a?r.a.createElement("u",null,e):"".concat(e)))})))}i.propTypes={breadCrumb:o.a.arrayOf(o.a.oneOfType([o.a.string,o.a.number])),categorySlug:o.a.string},i.defaultProps={breadCrumb:[],categorySlug:""},t.a=i},515:function(e,t,a){var n=a(0),r=a.n(n),c=a(2),l=a.n(c),s=a(141),o=a(139);function i(e){var t=e.title,a=e.articles,n=Object(o.i)(a,"date");return r.a.createElement("div",null,r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 pt-4"},r.a.createElement(s.a,{sliderType:"LargeArticle",slides:n})))))}i.propTypes={title:l.a.string,articles:l.a.arrayOf(l.a.object)},i.defaultProps={title:"",articles:[]},t.a=i},519:function(e,t,a){var n=a(0),r=a.n(n),c=a(15);t.a=function(){return r.a.createElement("div",{className:"w-100 mt-5"},r.a.createElement("div",{className:"sidebar-title"},"Firm Resources"),r.a.createElement("div",{className:"off-white"},r.a.createElement("ul",{className:"pl-0 pt-2 pb-1 pr-1 sidebar-content-page"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/category/firm-news",className:"proxima-bold"},"Firm News")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/category/law-firm-insights",className:"proxima-bold"},"Firm Insights")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/category/firm-events",className:"proxima-bold"},"Firm Events")))))}},858:function(e,t,a){var n=a(0),r=a.n(n),c=a(2),l=a.n(c),s=a(505),o=a(501),i=a(519);function m(e){var t=e.trending;return r.a.createElement("div",null,r.a.createElement(o.a,null),r.a.createElement(i.a,null),r.a.createElement(s.a,{title:"Trending Stories",content:t}))}m.propTypes={trending:l.a.arrayOf(l.a.object)},m.defaultProps={trending:[]},t.a=m},859:function(e,t,a){var n=a(0),r=a.n(n),c=a(2),l=a.n(c),s=a(104),o=a(503),i=a(526),m=a(515);function u(e){var t=e.results,a=e.pageNums,n=e.categorySlug,c=e.news,l=e.insight,u=e.events,p=e.prev,d=e.next,f=e.active,h=e.loading;return console.log(h),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},!1===h?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-sm-12 col-md-6"},t.map((function(e,t){return t<5?r.a.createElement("div",{className:"p-2",key:e.id},r.a.createElement("a",{href:e.link,className:"top-article"},r.a.createElement("h5",{className:"mb-0"},e.title),r.a.createElement("p",{className:"mt-0 mb-3 text-muted small-excerpt"},e.description))):""}))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},t.map((function(e,t){return t>5?r.a.createElement("div",{className:"p-2",key:e.id},r.a.createElement("a",{href:e.link,className:"top-article"},r.a.createElement("h5",{className:"mb-0"},e.title),r.a.createElement("p",{className:"mt-0 mb-3 text-muted small-excerpt"},e.description))):""})))):r.a.createElement("div",{className:"col-sm-12 my-5"},r.a.createElement("h3",{className:"text-center red-title"},"Loading results...")),t.length<=0&&!1===h&&r.a.createElement("div",{className:"col-sm-12 my-5"},r.a.createElement("h3",{className:"text-center red-title"}," Sorry, no results found for that query."))),r.a.createElement("div",{className:"w-100 mt-0 ml--1"},void 0!==t&&a.length>1?r.a.createElement("nav",{"aria-label":"pagination"},r.a.createElement("ul",{className:"d-flex flex-wrap no-dots lead"},r.a.createElement("li",{className:"mr-2"},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(p,"/"),tabIndex:"-1","aria-label":"previous link"},r.a.createElement(s.a,{icon:i.faCaretLeft}))),a.map((function(e){return f===e?r.a.createElement("li",{className:f===e?"active mr-2":"mr-2",key:"page-".concat(e)},r.a.createElement("a",{className:"text-dark mt-2",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(e,"/")},e)):""})),r.a.createElement("li",{className:"mx-1"},"..."),a.map((function(e){return a.length-1===e?r.a.createElement("li",{className:f===e?"active mr-2":"mr-2",key:"page-".concat(e)},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(e,"/")},e)):""})),r.a.createElement("li",{className:"ml-1"},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(d,"/"),"aria-label":"next link"},r.a.createElement(s.a,{icon:o.faCaretRight}))))):""),r.a.createElement("div",{className:"w-100 d-block"},r.a.createElement(m.a,{title:"Firm News",articles:c}),r.a.createElement(m.a,{title:"Firm Events",articles:u}),r.a.createElement(m.a,{title:"Firm Insights",articles:l})))}u.propTypes={results:l.a.arrayOf(l.a.object),pageNums:l.a.arrayOf(l.a.number),categorySlug:l.a.string,news:l.a.arrayOf(l.a.object),insight:l.a.arrayOf(l.a.object),events:l.a.arrayOf(l.a.object),prev:l.a.number,next:l.a.number,active:l.a.number},u.defaultProps={results:[],pageNums:[],categorySlug:"",news:[],insight:[],events:[],prev:0,next:0,active:1},t.a=u}}]);