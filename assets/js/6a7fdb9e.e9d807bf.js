"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[36708],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,m=p["".concat(u,".").concat(d)]||p[d]||v[d]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(83117),r=a(67294),i=a(86010),o=a(12466),l=a(16550),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function v(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function b(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,p=v(e),b=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),f=b[0],h=b[1],g=m({queryString:u,groupId:s}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,c.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],E=w[1],O=function(){var e=null!=y?y:N;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){O&&h(O)}),[O]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var f=a(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,a=e.block,l=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,v=function(e){var t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(p(t),u(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":v(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;a=null!=(i=c[o])?i:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:v},o,{className:(0,i.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var i=a.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},91076:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=(a(74866),a(85162),["components"]),l={id:"community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",sidebar_label:"Community Navigators and Libraries"},u=void 0,s={unversionedId:"community-libraries-and-navigators",id:"version-5.x/community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",description:"Libraries listed in this guide may not have been updated to work with the latest version of React Navigation. Please refer to the library's documentation to see which version of React Navigation it supports.",source:"@site/versioned_docs/version-5.x/community-libraries-and-navigators.md",sourceDirName:".",slug:"/community-libraries-and-navigators",permalink:"/docs/5.x/community-libraries-and-navigators",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/community-libraries-and-navigators.md",tags:[],version:"5.x",frontMatter:{id:"community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",sidebar_label:"Community Navigators and Libraries"},sidebar:"version-5.x/docs",previous:{title:"Supported React Native versions",permalink:"/docs/5.x/supported-react-native-versions"},next:{title:"More Resources",permalink:"/docs/5.x/more-resources"}},c={},p=[{value:"Navigators",id:"navigators",level:2},{value:"Fluid Transitions",id:"fluid-transitions",level:3},{value:"Libraries",id:"libraries",level:2},{value:"react-navigation-collapsible",id:"react-navigation-collapsible",level:3},{value:"react-native-screens",id:"react-native-screens",level:3},{value:"react-navigation-header-buttons",id:"react-navigation-header-buttons",level:3},{value:"react-navigation-props-mapper",id:"react-navigation-props-mapper",level:3},{value:"react-navigation-backhandler",id:"react-navigation-backhandler",level:3}],v={toc:p},d="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Libraries listed in this guide may not have been updated to work with the latest version of React Navigation. Please refer to the library's documentation to see which version of React Navigation it supports.")),(0,i.kt)("h2",{id:"navigators"},"Navigators"),(0,i.kt)("h3",{id:"fluid-transitions"},"Fluid Transitions"),(0,i.kt)("p",null,"Fluid Transitions is a library that provides Shared Element Transitions during navigation between screens using react-navigation."),(0,i.kt)("p",null,"A Shared Element Transition is the visualization of an element in one screen being transformed into a corresponding element in another screen during the navigation transition."),(0,i.kt)("p",null,"The library implements a custom navigator called ",(0,i.kt)("inlineCode",{parentName:"p"},"FluidNavigator")," that makes all this and more possible."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/fram-x/FluidTransitions"},"github.com/fram-x/FluidTransitions")),(0,i.kt)("h2",{id:"libraries"},"Libraries"),(0,i.kt)("h3",{id:"react-navigation-collapsible"},"react-navigation-collapsible"),(0,i.kt)("p",null,"react-navigation-collapsible is a library and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Higher Order Component")," that adjusts your screen options and makes your screen header collapsible."),(0,i.kt)("p",null,"Since react-navigation's header is designed as ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," component, you can animate the header by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated.Value")," from your ",(0,i.kt)("inlineCode",{parentName:"p"},"ScrollView")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"FlatList")," to the header."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/benevbright/react-navigation-collapsible"},"github.com/benevbright/react-navigation-collapsible")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://snack.expo.io/@benevbright/react-navigation-collapsible"},"Demo on Snack")),(0,i.kt)("h3",{id:"react-native-screens"},"react-native-screens"),(0,i.kt)("p",null,"This project aims to expose native navigation container components to React Native and React Navigation can integrate with it since version 2.14.0. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-screens")," brings several benefits, such as support for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.cnet.com/how-to/how-to-use-reachability-on-iphone-6-6-plus/"},'"reachability feature"')," on iOS, and improved memory consumption on both platforms."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},"github.com/software-mansion/react-native-screens")),(0,i.kt)("h3",{id:"react-navigation-header-buttons"},"react-navigation-header-buttons"),(0,i.kt)("p",null,"Helps you to render buttons in the navigation bar and handle the styling so you don't have to. It tries to mimic the appearance of native navbar buttons and attempts to offer a simple interface for you to interact with."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-header-buttons"},"github.com/vonovak/react-navigation-header-buttons")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://expo.io/@vonovak/navbar-buttons-demo"},"Demo on expo")),(0,i.kt)("h3",{id:"react-navigation-props-mapper"},"react-navigation-props-mapper"),(0,i.kt)("p",null,"Provides simple HOCs that map react-navigation props to your screen components directly - ie. instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"const user = this.props.route.params.activeUser"),", you'd write ",(0,i.kt)("inlineCode",{parentName:"p"},"const user = this.props.activeUser"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-props-mapper"},"github.com/vonovak/react-navigation-props-mapper")),(0,i.kt)("h3",{id:"react-navigation-backhandler"},"react-navigation-backhandler"),(0,i.kt)("p",null,"Easily handle Android back button behavior with React-Navigation with a component based API."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-backhandler"},"github.com/vonovak/react-navigation-backhandler")))}m.isMDXComponent=!0}}]);