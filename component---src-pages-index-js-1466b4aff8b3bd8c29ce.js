(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(7),i=a.n(r),n=a(0),A=a.n(n),s=a(149),o=a(161),l=a(155),d=a(150),c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return A.a.createElement(o.a,{location:this.props.location},A.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","crafts"]}),e.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return A.a.createElement("div",{key:t.fields.slug},A.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},A.a.createElement(s.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),A.a.createElement("small",null,t.frontmatter.date),A.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(A.a.Component);t.default=c;var u="62961768"},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return f});var r=a(0),i=a.n(r),n=a(4),A=a.n(n),s=a(148),o=a.n(s);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(151),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var c=a(32);a.d(t,"parsePath",function(){return c.a});var u=i.a.createContext({}),f=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return l});var r=a(164),i=a.n(r),n=a(165),A=a.n(n);A.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete A.a.googleFonts;var s=new i.a(A.a);var o=s.rhythm,l=s.scale},151:function(e,t,a){var r;e.exports=(r=a(154))&&r.default||r},152:function(e,t,a){"use strict";a(158)("fixed",function(e){return function(){return e(this,"tt","","")}})},153:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),A=r(a(51)),s=r(a(162)),o=r(a(163)),l=r(a(0)),d=r(a(4)),c=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",A=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+s+o+t+A+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=l.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return l.default.createElement("img",(0,o.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:s},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,A.default)((0,A.default)(a))),a.handleRef=a.handleRef.bind((0,A.default)((0,A.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,A=e.imgStyle,s=void 0===A?{}:A,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.Tag,y="boolean"==typeof E?"lightgray":E,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,u),B=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),v={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var S=p;return l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&l.default.createElement(m,(0,o.default)({src:S.base64},v)),S.tracedSVG&&l.default.createElement(m,(0,o.default)({src:S.tracedSVG},v)),y&&l.default.createElement(b,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,S.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),l.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),l.default.createElement(m,{alt:a,title:t,src:S.src,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},S))}}))}if(h){var Q=h,j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},Q.base64&&l.default.createElement(m,(0,o.default)({src:Q.base64},v)),Q.tracedSVG&&l.default.createElement(m,(0,o.default)({src:Q.tracedSVG},v)),y&&l.default.createElement(b,{title:t,style:{backgroundColor:y,width:Q.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:Q.height}}),this.state.isVisible&&l.default.createElement("picture",null,Q.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),l.default.createElement("source",{srcSet:Q.srcSet,sizes:Q.sizes}),l.default.createElement(m,{alt:a,title:t,width:Q.width,height:Q.height,src:Q.src,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:Q.width,height:Q.height},Q))}}))}return null},t}(l.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=E;t.default=w},154:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),A=a.n(n),s=a(52),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=l},155:function(e,t,a){"use strict";var r=a(156),i=a(0),n=a.n(i),A=a(4),s=a.n(A),o=a(166),l=a.n(o),d=a(149);function c(e){var t=e.description,a=e.lang,i=e.meta,A=e.keywords,s=e.title,o=e.hideSiteTitle;return n.a.createElement(d.StaticQuery,{query:u,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s"+(o?"":" | "+e.site.siteMetadata.title),meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(i)})},data:r})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c;var u="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Cindy Zhang",description:"Personal blogafolio.",author:"Cindy Zhang"}}}}},157:function(e,t,a){"use strict";a(152);var r=a(159),i=a(0),n=a.n(i),A=a(149),s=a(153),o=a.n(s),l=a(150);var d="2452627939";t.a=function(){return n.a.createElement(A.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5),alignItems:"center"}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),n.a.createElement("p",{style:{marginBottom:0}},n.a.createElement("strong",null,a),".",n.a.createElement("br",null)," ","I write code, hoard hobbies, and sometimes record the experience."," ",n.a.createElement("a",{href:"https://github.com/"+r.github},"Github")))},data:r})}},158:function(e,t,a){var r=a(11),i=a(24),n=a(16),A=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(A,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},159:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAb/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGphlnmUk8TD6R16ELP/8QAHhAAAQMEAwAAAAAAAAAAAAAAAQACAwQQERQSEzH/2gAIAQEAAQUCf46MdgGFtRI1TOW3aAB0uAF//8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBE//aAAgBAwEBPwGOeKr/xAAYEQEBAAMAAAAAAAAAAAAAAAAAAQIREv/aAAgBAgEBPwF3ksaf/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAEQEQISISIyQf/aAAgBAQAGPwLYVXqj0vkdcoSZSSP/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUGBEP/aAAgBAQABPyEpe6yqvtvHspY9WKYVZu6mCWXsodvmsSaZBP/aAAwDAQACAAMAAAAQ0M/+/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARYaH/2gAIAQMBAT8Q2GBcPYUrb//EABkRAQACAwAAAAAAAAAAAAAAAAEAERAhMf/aAAgBAgEBPxC929wAEBP/xAAdEAEAAwEAAgMAAAAAAAAAAAABABEhQTFxUWHx/9oACAEBAAE/EMzF2mmuwhtoPDrr1DrFrvkL8srCmglqECmm/n1C0AOWxYaNq1PUC8RAT//Z",width:50,height:50,src:"/static/f2bf79d03b048717a53902fb0052e99f/d2d31/profile-pic.jpg",srcSet:"/static/f2bf79d03b048717a53902fb0052e99f/d2d31/profile-pic.jpg 1x,\n/static/f2bf79d03b048717a53902fb0052e99f/0b804/profile-pic.jpg 1.5x,\n/static/f2bf79d03b048717a53902fb0052e99f/753c3/profile-pic.jpg 2x,\n/static/f2bf79d03b048717a53902fb0052e99f/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Cindy Zhang",social:{github:"cixzhang"}}}}}},160:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAb/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGphlnmUk8TD6R16ELP/8QAHhAAAQMEAwAAAAAAAAAAAAAAAQACAwQQERQSEzH/2gAIAQEAAQUCf46MdgGFtRI1TOW3aAB0uAF//8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBE//aAAgBAwEBPwGOeKr/xAAYEQEBAAMAAAAAAAAAAAAAAAAAAQIREv/aAAgBAgEBPwF3ksaf/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAEQEQISISIyQf/aAAgBAQAGPwLYVXqj0vkdcoSZSSP/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUGBEP/aAAgBAQABPyEpe6yqvtvHspY9WKYVZu6mCWXsodvmsSaZBP/aAAwDAQACAAMAAAAQ0M/+/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARYaH/2gAIAQMBAT8Q2GBcPYUrb//EABkRAQACAwAAAAAAAAAAAAAAAAEAERAhMf/aAAgBAgEBPxC929wAEBP/xAAdEAEAAwEAAgMAAAAAAAAAAAABABEhQTFxUWHx/9oACAEBAAE/EMzF2mmuwhtoPDrr1DrFrvkL8srCmglqECmm/n1C0AOWxYaNq1PUC8RAT//Z",width:20,height:20,src:"/static/f2bf79d03b048717a53902fb0052e99f/9e79c/profile-pic.jpg",srcSet:"/static/f2bf79d03b048717a53902fb0052e99f/9e79c/profile-pic.jpg 1x,\n/static/f2bf79d03b048717a53902fb0052e99f/f7990/profile-pic.jpg 1.5x,\n/static/f2bf79d03b048717a53902fb0052e99f/32de1/profile-pic.jpg 2x,\n/static/f2bf79d03b048717a53902fb0052e99f/0a2ed/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Cindy Zhang"}}}}},161:function(e,t,a){"use strict";var r=a(7),i=a.n(r),n=a(0),A=a.n(n),s=a(150),o=a(157),l=(a(152),a(160)),d=a(149),c=a(153),u=a.n(c);var f="626873540",p=function(){return A.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},A.a.createElement(d.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},"‹",A.a.createElement(d.StaticQuery,{query:f,render:function(e){var t=e.site.siteMetadata.author;return A.a.createElement(u.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(s.a)(.5),marginLeft:Object(s.a)(.25),marginBottom:0,minWidth:20,borderRadius:"100%"}})},data:l}))))},h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.children,r=e.header,i=e.footer,n=void 0!==r?r:"/"===t.pathname?A.a.createElement(o.a,null):A.a.createElement(p,null),l=void 0!==i?i:A.a.createElement("footer",null,"© ",(new Date).getFullYear());return A.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},n,a,l)},t}(A.a.Component);t.a=h}}]);
//# sourceMappingURL=component---src-pages-index-js-1466b4aff8b3bd8c29ce.js.map