(window.webpackJsonp=window.webpackJsonp||[]).push([[27,38],{473:function(e,t,a){a.r(t);var n=a(0),c=a.n(n),r=a(499),i=a(142),o=a(503),l=a(497);t.default=function(){return c.a.createElement("div",null,c.a.createElement(o.a,{seo:{title:"Page Not Found | Scarinci Hollenbeck",metaDescription:"Sorry, it looks this like this page no longer exists on scarincihollenbeck.com",canonicalLink:"/"}}),c.a.createElement(l.a,{title:"404: Resource Not Found",subtitle:"Sorry, the page you are looking for cannot be found.",image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg",height:"auto"}),c.a.createElement(r.a,null,c.a.createElement("p",{className:"lead"},"It's possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for."),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-6 offset-md-3"},c.a.createElement(i.a,null)),c.a.createElement("div",{className:"col-sm-12 col-md-8 mt-5 offset-md-2 off-white"},c.a.createElement("h4",{className:"proxima-bold p-3 pb-0 mb-0 text-center"},"Or try visiting one of these pages on our site to narrow your search."),c.a.createElement("ul",{className:"ml-6"},c.a.createElement("li",null,c.a.createElement("p",null,c.a.createElement("a",{href:"".concat(window.location.origin,"/attorneys"),className:"u-hover h5"},"Attorneys"))),c.a.createElement("li",null,c.a.createElement("p",null,c.a.createElement("a",{href:"".concat(window.location.origin,"/practices"),className:"u-hover h5"},"Practices"))),c.a.createElement("li",null,c.a.createElement("p",null,c.a.createElement("a",{href:"".concat(window.location.origin,"/locations"),className:"u-hover h5"},"Locations"))),c.a.createElement("li",null,c.a.createElement("p",null,c.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-news"),className:"u-hover h5"},"Firm News"))),c.a.createElement("li",null,c.a.createElement("p",null,c.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-events"),className:"u-hover h5"},"Firm Events"))),c.a.createElement("li",null,c.a.createElement("p",null,c.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-insights"),className:"u-hover h5"},"Firm Insights")))))))))}},481:function(e,t,a){a.r(t),function(e){var n=a(61),c=a.n(n),r=a(82),i=a.n(r),o=a(57),l=a.n(o),m=a(58),s=a.n(m),p=a(59),d=a.n(p),u=a(60),h=a.n(u),g=a(39),f=a.n(g),b=a(0),E=a.n(b),v=a(734),w=a(555),y=a(499),x=a(473),k=a(735),N=a(736),P=a(139),j=a(498);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var L=function(t){d()(o,t);var a,n,r=(a=o,function(){var e,t=f()(a);if(_()){var n=f()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h()(this,e)});function o(e){var t;return l()(this,o),(t=r.call(this,e)).state={admin:[],error:!1},t}return s()(o,[{key:"componentDidMount",value:(n=i()(c.a.mark((function t(){var a,n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props.match.params.admin,t.prev=1,t.next=4,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/individual-admin/admin/").concat(a),{headers:P.f});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,this.setState({admin:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),this.setState({error:!0});case 14:case"end":return t.stop()}}),t,this,[[1,11]])}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.admin,a=e.error,n=(t.ID,t.Title),c=t.biography,r=t.email,i=t.image,o=t.name,l=t.social_media_links,m=t.vizibility,s=t.phone_extension,p=t.seo;return a?E.a.createElement(x.default,null):E.a.createElement("div",{id:"single--admin"},E.a.createElement(v.a,{seo:p}),E.a.createElement(w.a,{imageWebp:j.f,imageJPG:j.e,profile:E.a.createElement(k.a,{image:i,name:o}),height:"325px",infoCard:E.a.createElement(N.a,{name:o,Title:n,phone_extension:s,email:r,social_media_links:l,vizibility:m})}),E.a.createElement(y.a,null,E.a.createElement("div",null,E.a.createElement("div",{className:"line-header"},E.a.createElement("h3",null,"Biography")),E.a.createElement("div",{className:"w-100 mt-5"},E.a.createElement("div",{dangerouslySetInnerHTML:Object(P.c)(c)})))))}}]),o}(b.Component);t.default=L}.call(this,a(140))},497:function(e,t,a){var n=a(501),c=a.n(n),r=a(0),i=a.n(r),o=a(3),l=a.n(o),m=a(502),s=a(139);function p(){var e=c()(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return p=function(){return e},e}function d(){var e=c()(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return d=function(){return e},e}var u=function(e){var t=e.title,a=e.subtitle,n=e.imageWebp,c=e.imageJPG,r=e.height,o="";o=n,Object(s.b)()&&(o=c);var l=m.a.div(d(),o,r),u=m.a.div(p());return i.a.createElement(l,{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(u,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},i.a.createElement("div",{className:"p-3"},i.a.createElement("span",{id:"red-block"}),i.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),i.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(s.c)(a)}))))))};u.propTypes={imageWebp:l.a.string,imageJPG:l.a.string,image:l.a.string,title:l.a.string,subtitle:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),height:l.a.string},u.defaultProps={imageWebp:"",imageJPG:"",title:"",subtitle:"",height:""},t.a=u},498:function(e,t,a){a.d(t,"i",(function(){return n})),a.d(t,"j",(function(){return c})),a.d(t,"k",(function(){return r})),a.d(t,"l",(function(){return i})),a.d(t,"g",(function(){return o})),a.d(t,"h",(function(){return l})),a.d(t,"e",(function(){return m})),a.d(t,"f",(function(){return s})),a.d(t,"m",(function(){return p})),a.d(t,"n",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return f}));var n="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-JPG.jpg",c="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-Webp.webp",r="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/corona-virus-background-compressor.png",i="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/corona-virus-background-compressor-webp.webp",o="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg",l="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-Webp.webp",m="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg",s="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-Webp.webp",p="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg",d="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-Webp.webp",u="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/attorney-archive-header-webp.webp",h="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/attorney-archive-header-jpg.jpg",g="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png",f="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-min-diamond-WEBP.webp"},499:function(e,t,a){var n=a(0),c=a.n(n);t.a=function(e){var t=e.children;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},t)))}},503:function(e,t,a){var n=a(0),c=a.n(n),r=a(500),i=a(3),o=a.n(i);function l(e){var t=e.seo;return c.a.createElement(r.Helmet,null,c.a.createElement("title",null,t.title),c.a.createElement("meta",{name:"description",content:t.metaDescription}),c.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),c.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": "'.concat(t.title,'",\n          "description": "').concat(t.metaDescription,'",\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))}l.propTypes={seo:o.a.objectOf(o.a.string)},l.defaultProps={seo:{}},t.a=l},555:function(e,t,a){var n=a(501),c=a.n(n),r=a(0),i=a.n(r),o=a(3),l=a.n(o),m=a(502),s=a(139),p="375px",d="425px",u="768px",h="1024px",g="1440px",f="2560px",b={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(p,")"),mobileL:"(min-width: ".concat(d,")"),tablet:"(min-width: ".concat(u,")"),laptop:"(min-width: ".concat(h,")"),laptopL:"(min-width: ".concat(g,")"),desktop:"(min-width: ".concat(f,")"),desktopL:"(min-width: ".concat(f,")")};function E(){var e=c()(["\n  background-color: rgba(0,0,0, .50);\n  border-radius: 4px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);\n  max-height: 400px;\n\n  @media "," { \n    max-height: ",";\n  }\n\n"]);return E=function(){return e},e}function v(){var e=c()(["\n  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n"]);return v=function(){return e},e}var w=function(e){var t=e.profile,a=e.infoCard,n=e.imageWebp,c=(e.imageJXR,e.imageJPG2000,e.imageJPG),r=e.height,o="";o=n,Object(s.b)()&&(o=c);var l=m.a.div(v(),o),p=m.a.div(E(),b.laptop,r);return i.a.createElement(l,{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container animated fadeInUp fast mt--1 max-width-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 col-md-4 mb-3 mr-4 mh-325"},t),i.a.createElement(p,{className:"col-sm-12 col-md-7"},a))))};w.propTypes={imageWebp:l.a.string,imageJPG:l.a.string,profile:l.a.string,infoCard:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),height:l.a.string},w.defaultProps={imageWebp:"",imageJPG:"",profile:"",infoCard:"",height:""};t.a=w},734:function(e,t,a){var n=a(0),c=a.n(n),r=a(500),i=a(3),o=a.n(i);function l(e){var t=e.seo;return c.a.createElement(r.Helmet,null,c.a.createElement("title",null,t.title),c.a.createElement("meta",{name:"description",content:t.metaDescription}),c.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),c.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),c.a.createElement("meta",{property:"og:title",content:t.title}),c.a.createElement("meta",{property:"og:site_name",content:"Scarinci Hollenbeck"}),c.a.createElement("meta",{property:"og:type",content:"profile"}),c.a.createElement("meta",{property:"og:locale",content:"en_US"}),c.a.createElement("meta",{property:"og:url",content:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),c.a.createElement("meta",{property:"og:image",content:t.featuredImg}),c.a.createElement("meta",{property:"og:image:secure_url",content:t.featuredImg}),c.a.createElement("meta",{property:"og:image:width",content:t.imgWidth}),c.a.createElement("meta",{property:"og:image:height",content:t.imgHeight}),c.a.createElement("meta",{property:"og:image:type",content:"image/jpg"}),c.a.createElement("meta",{property:"profile:first_name",content:t.firstName}),c.a.createElement("meta",{property:"profile:last_name",content:t.lastName}),c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{name:"twitter:description",content:t.metaDescription}),c.a.createElement("meta",{name:"twitter:title",content:t.title}),c.a.createElement("meta",{name:"twitter:site",content:"@S_H_Law"}),c.a.createElement("meta",{name:"twitter:image",content:t.featuredImg}),c.a.createElement("meta",{name:"twitter:creator",content:"@S_H_Law"}),c.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "http://www.schema.org",\n          "@type": "Person",\n          "@id":"'.concat(window.location.origin,"/").concat(t.canonicalLink,'",\n          "name": "').concat(t.name,'",\n          "alternateName":" ').concat(t.title,'",\n          "nationality": "American",\n          "Description": "').concat(t.metaDescription,'",\n          "disambiguatingDescription": "').concat(t.metaDescription,'",\n          "jobTitle": "').concat(t.jobPosition,'",\n          "worksFor": [\n            {\n              "@type": "Organization",\n              "name": "Scarinci Hollenbeck, LLC",\n              "sameAs": [\n                "https://twitter.com/S_H_Law",\n                "https://www.facebook.com/ScarinciHollenbeck/",\n                "https://www.linkedin.com/company/scarinci-hollenbeck-llc/",\n              ]\n            }\n          ],\n          "url": "').concat(window.location.origin,"/").concat(t.canonicalLink,'",\n          "image": "').concat(t.featuredImg,'",\n          "address": {\n          "@type": "PostalAddress",\n            "addressLocality": "').concat(t.addressLocality,'",\n            "addressRegion": "NJ",\n            "addressCountry": "United States"\n          }\n        }\n        ')))}l.propTypes={seo:o.a.objectOf(o.a.oneOfType([o.a.string,o.a.number,o.a.boolean,o.a.arrayOf(o.a.string)]))},l.defaultProps={seo:{}},t.a=l},735:function(e,t,a){var n=a(0),c=a.n(n),r=a(3),i=a.n(r);function o(e){var t=e.image,a=e.name;return c.a.createElement("img",{rel:"preload",src:t.url,alt:a,className:"img-fluid white-transparent-border"})}o.propTypes={image:i.a.objectOf(i.a.string),name:i.a.string},o.defaultProps={image:{},name:""},t.a=o},736:function(e,t,a){var n=a(0),c=a.n(n),r=a(3),i=a.n(r),o=a(104),l=a(510),m=a(511),s=a(561),p=a(527),d=a(528),u=a(529),h=a(559),g=a(560);function f(e){var t=e.title,a=e.phone_extension,n=e.email,r=e.social_media_links,i=e.vizibility,f=e.name;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 my-3"},c.a.createElement("span",{id:"red-block"}),c.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},f)),c.a.createElement("div",{className:"col-sm-12 mt--1 mb-2 mx-0"},c.a.createElement("h5",{className:"text-white"},t)),c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("ul",{className:"text-white no-dots ml-0"},c.a.createElement("li",{className:"mb-1"},c.a.createElement("h5",null,c.a.createElement(o.a,{icon:l.faPhone,className:"text-white"}),c.a.createElement("span",{className:"proxima-regular ft-18"}," ","201-896-4100"," ","  ".concat(a)))),c.a.createElement("li",{className:"mb-1"},c.a.createElement("h5",null,c.a.createElement(o.a,{icon:m.faEnvelope,className:"text-white"}),c.a.createElement("a",{href:"mailto:".concat(n),className:"text-white proxima-regular mail-link ft-18"}," ",n))))),c.a.createElement("div",{className:"col-sm-12 col-md-6"},r&&c.a.createElement("span",null,c.a.createElement("ul",{className:"ml-0 mt-2"},r.map((function(e){return c.a.createElement("li",{key:e.channel,className:"mb-0 lh-1"},c.a.createElement("h5",null,"Twitter"===e.channel&&c.a.createElement(o.a,{icon:p.faTwitter,className:"text-white"}),"Facebook"===e.channel&&c.a.createElement(o.a,{icon:d.faFacebookSquare,className:"text-white"}),"LinkedIn"===e.channel&&c.a.createElement(o.a,{icon:u.faLinkedin,className:"text-white"}),"Skype"===e.channel&&c.a.createElement(o.a,{icon:h.faSkype,className:"text-white"}),"Instagram"===e.channel&&c.a.createElement(o.a,{icon:g.faInstagram,className:"text-white"}),c.a.createElement("a",{href:e.url,className:"text-white mail-link proxima-regular ft-17px position-relative icon"},"  Connect on ".concat(e.channel))))})),i&&c.a.createElement("li",{className:"mb-0 lh-1"},c.a.createElement("h5",null,c.a.createElement(o.a,{icon:s.faAddressCard,className:"text-white"}),c.a.createElement("a",{href:i,className:"text-white mail-link proxima-regular ft-17px position-relative icon"}," Download Contact"))))))))}f.propTypes={name:i.a.string,title:i.a.string,phone_extension:i.a.string,email:i.a.string,social_media_links:i.a.arrayOf(i.a.object),vizibility:i.a.string},f.defaultProps={title:"",name:"",phone_extension:"",email:"",social_media_links:[],vizibility:""},t.a=f}}]);