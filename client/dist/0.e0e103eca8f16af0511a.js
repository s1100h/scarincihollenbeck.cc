(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{911:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=a(u),o=a(n(19));function a(e){return e&&e.__esModule?e:{default:e}}n(961);var s=(0,o.default)((function(){return n.e(30).then(n.t.bind(null,969,7))})),l=(0,o.default)((function(){return n.e(31).then(n.t.bind(null,970,7))})),d=(0,o.default)((function(){return n.e(6).then(n.t.bind(null,971,7))})),c=(0,o.default)((function(){return n.e(8).then(n.t.bind(null,973,7))})),f=(0,o.default)((function(){return n.e(9).then(n.t.bind(null,974,7))})),p=(0,o.default)((function(){return n.e(7).then(n.t.bind(null,975,7))})),h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={startCount:0,endCount:0},n.previousImage=n.previousImage.bind(n),n.nextImage=n.nextImage.bind(n),n.renderSlides=n.renderSlides.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.start,n=e.end;this.setState({startCount:t}),this.setState({endCount:n})}},{key:"previousImage",value:function(){var e=this.props.slides,t=this.state,n=t.startCount,r=t.endCount,u=parseInt(e.length,10),i=n<=0?u-4:n-1,o=n<=0?u-1:r-1;this.setState({startCount:i}),this.setState({endCount:o})}},{key:"nextImage",value:function(){var e=this.props.slides,t=this.state,n=t.startCount,r=t.endCount,u=parseInt(e.length,10),i=r===u?0:n+1,o=r===u?3:r+1;this.setState({startCount:i}),this.setState({endCount:o})}},{key:"renderSlides",value:function(){var e=this.props,t=e.slides,n=e.sliderType,r=this.state,u=r.startCount,o=r.endCount;return"LargeArticle"===n?t.map((function(e,t){return t>=u&&t<=o&&i.default.createElement(c,{key:e.title,post:e,id:t})})):"MiniArticle"===n?t.map((function(e,t){return t>=u&&t<=o&&i.default.createElement(f,{key:e.title,post:e,id:t})})):"Location"===n?t.map((function(e,t){return t>=u&&t<=o&&i.default.createElement(p,{key:e.id,post:e,id:t})})):"JustInCarousel"===n?t.map((function(e,t){return t>=u&&t<=o&&i.default.createElement(d,{key:e.id,post:e,id:t})})):void 0}},{key:"render",value:function(){var e=this.props,t=e.arrowSize,n=e.slides;e.sliderType;return i.default.createElement("div",{id:"carousel-slider"},i.default.createElement(l,{previousImage:this.previousImage,arrowSize:t}),i.default.createElement("ul",{className:"list-unstyled carousel-slider-track"},n.length>0&&this.renderSlides()),i.default.createElement(s,{nextImage:this.nextImage,arrowSize:t}))}}]),t}(u.Component);t.default=h},961:function(e,t,n){}}]);