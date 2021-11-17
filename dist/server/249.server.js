"use strict";exports.id=249,exports.ids=[249],exports.modules={311:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(6689),i=n.n(r),a=n(9003),o=n.n(a),c=n(1191),s=["children","id","alignContent","alignItems","className","container","direction","item","justify","xs","sm","md","lg","xl","spacing","wrap","zeroMinWidth"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=[0,1,2,3,4,5,6,7,8,9,10],f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var x=(0,c.createUseStyles)((function(e){return u(u({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return g.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e)),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={},i={};f.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(i[t]={},!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object.assign(e,r):Object.assign(e,i,m({},t.breakpoints.up(n),r))}(t,e,n),t}),{}))}));const y=function(e){var t,n=e.children,r=e.id,a=e.alignContent,c=void 0===a?"stretch":a,p=e.alignItems,u=void 0===p?"stretch":p,g=e.className,f=e.container,d=void 0!==f&&f,y=e.direction,b=void 0===y?"row":y,v=e.item,O=void 0!==v&&v,h=e.justify,j=void 0===h?"flex-start":h,w=e.xs,E=void 0!==w&&w,S=e.sm,P=void 0!==S&&S,C=e.md,D=void 0!==C&&C,k=e.lg,I=void 0!==k&&k,M=e.xl,N=void 0!==M&&M,W=e.spacing,z=void 0===W?0:W,Z=e.wrap,G=void 0===Z?"wrap":Z,$=e.zeroMinWidth,B=void 0!==$&&$,F=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,s),J=x(F),R=o()(J.root,(m(t={},J.container,d),m(t,J.item,O),m(t,J.zeroMinWidth,B),m(t,J["spacing-xs-".concat(String(z))],d&&0!==z),m(t,J["direction-xs-".concat(String(b))],"row"!==b),m(t,J["wrap-xs-".concat(String(G))],"wrap"!==G),m(t,J["align-items-xs-".concat(String(u))],"stretch"!==u),m(t,J["align-content-xs-".concat(String(c))],"stretch"!==c),m(t,J["justify-xs-".concat(String(j))],"flex-start"!==j),m(t,J["grid-xs-".concat(String(E))],!1!==E),m(t,J["grid-sm-".concat(String(P))],!1!==P),m(t,J["grid-md-".concat(String(D))],!1!==D),m(t,J["grid-lg-".concat(String(I))],!1!==I),m(t,J["grid-xl-".concat(String(N))],!1!==N),t),g);return i().createElement("div",l({className:R},r&&{id:r},n&&{children:n}))}},4244:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(6689),i=n.n(r),a=(n(7826),n(6022)),o=n(8638),c=n(7197),s=n(311);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m=(0,n(1191).createUseStyles)((function(e){var t;return{container:p({},e.layout.container),box:p(p({},e.layout.box),{},{flexDirection:"column",justifyContent:"flex-start"}),message:{flex:1,display:"flex",justifyContent:"center",alignItems:"flex-start",margin:20,"& $errorMessage":{display:"flex",alignItems:"center",minWidth:200,backgroundColor:e.palette.error,padding:"10px 25px","& span":{fontSize:40,marginRight:15}}},errorMessage:{},title:p(p({},e.typography.h3),{},{margin:0,letterSpacing:-1}),subtitle:p(p({},e.typography.h5),{},{margin:0,letterSpacing:-1}),listMovies:{margin:"20px 0 0 0",padding:0,"& li":(t={listStyleType:"none",display:"flex"},u(t,e.breakpoints.down("md"),{flexDirection:"column"}),u(t,"margin","0 0 20px 0"),u(t,"backgroundColor","#eee"),u(t,"&:last-of-type",{margin:"0 0 0 0"}),u(t,"& $movieJacket",{display:"flex",justifyContent:"center","& img":{width:200}}),u(t,"& $movieDetails",{"& h2":p(p({},e.typography.h4),{},{margin:0,letterSpacing:-1}),padding:"20px 30px"}),t)},movieJacket:{},movieDetails:{}}}));var g=n(1687),f=n(1555),d=["children","routeComponent"];const x=function(e){e.children;var t=e.routeComponent,n=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,d),l=m(n),p=(0,a.useDispatch)(),u=(0,a.useSelector)((function(e){return e.app})).movies,x=t.location,y=(x.pathname,x.search,(0,r.useRef)(!0));if(y.current&&(p((0,g.lU)("GET_MOVIES")),y.current=!1),t.staticContext&&Object.prototype.hasOwnProperty.call(u,"error")&&(t.staticContext.statusCode=u.error.status),u.isLoading)return i().createElement(f.Z,null);var b="Movies",v="List of the most recent movies";return i().createElement(i().Fragment,null,i().createElement(o.Helmet,null,i().createElement("title",null,b),i().createElement("meta",{name:"description",content:v})),i().createElement("div",{className:l.box},i().createElement("div",{className:l.container},i().createElement(s.Z,{container:!0,spacing:2},i().createElement(s.Z,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},i().createElement("h1",{className:l.title},b),i().createElement("h1",{className:l.subtitle},v),Object.prototype.hasOwnProperty.call(u,"error")&&i().createElement(s.Z,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},i().createElement("div",{className:l.message},i().createElement("div",{className:l.errorMessage},i().createElement("span",null,i().createElement(c.FontAwesomeIcon,{icon:"exclamation-triangle"})),i().createElement("p",null,u.error.message)))),u.data.length>0&&i().createElement("ul",{className:l.listMovies},u.data.map((function(e){return i().createElement("li",{key:e.id},i().createElement("div",{className:l.movieJacket},i().createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"jacket"})),i().createElement("div",{className:l.movieDetails},i().createElement("h2",null,e.title),i().createElement("p",null,e.overview),i().createElement("p",null,"Release date ".concat(e.release_date))))}))))))))}}};