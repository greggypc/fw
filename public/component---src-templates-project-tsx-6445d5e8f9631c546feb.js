(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8dg2":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return b}));a("f3/d");var r=a("q1tI"),i=a.n(r),n=a("9eSz"),o=a.n(n),s=a("+IKJ"),d=a("vOnD"),l=a("wEEd"),c=a("9Dj+"),u=a("sKiF"),f=a("6o60"),p=Object(d.d)(u.a).withConfig({displayName:"project__PBox",componentId:"akd9pz-0"})(["max-width:1000px;margin:0 auto;"]),g=Object(d.d)(u.b).withConfig({displayName:"project__Content",componentId:"akd9pz-1"})(["background-color:",";.gatsby-image-wrapper:not(:last-child){margin-bottom:",";@media (max-width:","){margin-bottom:",";}}"],(function(e){return Object(s.b)(.9,e.bg)}),(function(e){return e.theme.space[8]}),(function(e){return e.theme.breakpoints[3]}),(function(e){return e.theme.space[8]})),m=Object(d.d)(u.a).withConfig({displayName:"project__Category",componentId:"akd9pz-2"})(["letter-spacing:0.05em;font-size:",";text-transform:uppercase;"],(function(e){return e.theme.fontSizes[1]})),h=Object(d.d)(l.a.div).withConfig({displayName:"project__Description",componentId:"akd9pz-3"})(["max-width:960px;letter-spacing:-0.003em;--baseline-multiplier:0.179;--x-height-multiplier:0.35;line-height:1.58;"]);Object(d.d)(u.c).withConfig({displayName:"project__PButton",componentId:"akd9pz-4"})(["background:",";color:",";"],(function(e){return"white"===e.color?"grey":e.color}),(function(e){return Object(s.a)("white"===e.color?"black":e.color)}));t.default=function(e){var t=e.data,a=t.project,r=t.images,n=Object(l.c)({config:l.b.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),s=Object(l.c)({config:l.b.slow,delay:300,from:{opacity:0},to:{opacity:1}}),d=Object(l.c)({config:l.b.slow,delay:600,from:{opacity:0},to:{opacity:1}}),u=Object(l.c)({config:l.b.slow,delay:800,from:{opacity:0},to:{opacity:1}});return i.a.createElement(c.a,{color:a.color},i.a.createElement(f.a,{pathname:a.slug,title:a.title_detail+" | Austin Architects",desc:a.desc,node:a.parent,banner:a.cover.childImageSharp.resize.src,individual:!0}),i.a.createElement(p,{py:10,px:[6,6,8,10]},i.a.createElement(m,{style:n},a.category),i.a.createElement(l.a.h1,{style:s},a.title_detail),i.a.createElement(h,{style:d},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.desc}}))),i.a.createElement(g,{bg:a.color,py:10},i.a.createElement(p,{style:u,px:[6,6,8,10]},r.nodes.map((function(e){return i.a.createElement(o.a,{alt:e.name,key:e.childImageSharp.fluid.src,fluid:e.childImageSharp.fluid})})))))};var b="3739493409"},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+o+s+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,o=l.default.createElement(R,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),o):o},R=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,L=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:z?1:0,transition:V?"opacity "+y+"ms":"none"},s),x="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},_=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&N,{},s,{},f),T={title:t,alt:this.state.isVisible?"":a,style:_,className:p,itemProp:v};if(m){var P=m,q=g(m);return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),x&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&N)}),q.base64&&l.default.createElement(C,{ariaHidden:!0,src:q.base64,spreadProps:T,imageVariants:P,generateSources:O}),q.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:q.tracedSVG,spreadProps:T,imageVariants:P,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(P),l.default.createElement(R,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:a,title:t,loading:E},q,{imageVariants:P}))}}))}if(h){var H=h,M=g(h),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&N)}),M.base64&&l.default.createElement(C,{ariaHidden:!0,src:M.base64,spreadProps:T,imageVariants:H,generateSources:O}),M.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:M.tracedSVG,spreadProps:T,imageVariants:H,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(R,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:a,title:t,loading:E},M,{imageVariants:H}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:k,sizes:x,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=V;t.default=N}}]);
//# sourceMappingURL=component---src-templates-project-tsx-6445d5e8f9631c546feb.js.map