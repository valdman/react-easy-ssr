"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[930],{311:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7294),i=n(4184),o=n.n(i),a=n(9100),c=["children","id","alignContent","alignItems","className","container","direction","item","justify","xs","sm","md","lg","xl","spacing","wrap","zeroMinWidth"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=[0,1,2,3,4,5,6,7,8,9,10],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=(0,a.QM)((function(e){return u(u({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return f.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e)),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={},i={};g.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(i[t]={},!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object.assign(e,r):Object.assign(e,i,p({},t.breakpoints.up(n),r))}(t,e,n),t}),{}))}));const x=function(e){var t,n=e.children,i=e.id,a=e.alignContent,l=void 0===a?"stretch":a,u=e.alignItems,f=void 0===u?"stretch":u,g=e.className,d=e.container,x=void 0!==d&&d,b=e.direction,y=void 0===b?"row":b,v=e.item,O=void 0!==v&&v,h=e.justify,j=void 0===h?"flex-start":h,w=e.xs,S=void 0!==w&&w,E=e.sm,P=void 0!==E&&E,D=e.md,C=void 0!==D&&D,W=e.lg,_=void 0!==W&&W,N=e.xl,I=void 0!==N&&N,A=e.spacing,k=void 0===A?0:A,M=e.wrap,z=void 0===M?"wrap":M,L=e.zeroMinWidth,B=void 0!==L&&L,G=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,c),Z=m(G),F=o()(Z.root,(p(t={},Z.container,x),p(t,Z.item,O),p(t,Z.zeroMinWidth,B),p(t,Z["spacing-xs-".concat(String(k))],x&&0!==k),p(t,Z["direction-xs-".concat(String(y))],"row"!==y),p(t,Z["wrap-xs-".concat(String(z))],"wrap"!==z),p(t,Z["align-items-xs-".concat(String(f))],"stretch"!==f),p(t,Z["align-content-xs-".concat(String(l))],"stretch"!==l),p(t,Z["justify-xs-".concat(String(j))],"flex-start"!==j),p(t,Z["grid-xs-".concat(String(S))],!1!==S),p(t,Z["grid-sm-".concat(String(P))],!1!==P),p(t,Z["grid-md-".concat(String(C))],!1!==C),p(t,Z["grid-lg-".concat(String(_))],!1!==_),p(t,Z["grid-xl-".concat(String(I))],!1!==I),t),g);return r.createElement("div",s({className:F},i&&{id:i},n&&{children:n}))}},6467:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(7294),i=n(6458),o=n(405),a=n(311);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=(0,n(9100).QM)((function(e){return{container:s({},e.layout.container),box:s(s({},e.layout.box),{},{flexDirection:"column",justifyContent:"flex-start"}),title:s(s({},e.typography.h3),{},{margin:0,letterSpacing:-1}),subtitle:s(s({},e.typography.h5),{},{margin:0,letterSpacing:-1}),page:{"& p":s(s({},e.typography.body2),{},{margin:"0 0 20px 0","&:first-of-type":{margin:"20px 0 20px 0"},"&:last-of-type":{margin:"20px 0 0 0"}})}}}));var p=["children","routeComponent"];const f=function(e){e.children;var t=e.routeComponent,n=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,p),c=u(n),s=((0,i.I0)(),(0,i.v9)((function(e){return e.app})),t.location),l=(s.pathname,s.search,"About us"),f="Details about the app";return r.createElement(r.Fragment,null,r.createElement(o.q,null,r.createElement("title",null,l),r.createElement("meta",{name:"description",content:f})),r.createElement("div",{className:c.box},r.createElement("div",{className:c.container},r.createElement(a.Z,{container:!0,spacing:2},r.createElement(a.Z,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.createElement("h1",{className:c.title},l),r.createElement("h1",{className:c.subtitle},f),r.createElement("div",{className:c.page},r.createElement("p",null,"We do what we do because we have to do it."),r.createElement("p",null,"And we deserve to do it.")))))))}}}]);