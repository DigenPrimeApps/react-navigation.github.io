"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[49810],{41524:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=a(85893),t=a(11151),s=a(74866),i=a(85162);const c={id:"screen",title:"Screen",sidebar_label:"Screen"},o=void 0,l={id:"screen",title:"Screen",description:"Screen components are used to configure various aspects of screens inside a navigator.",source:"@site/versioned_docs/version-7.x/screen.md",sourceDirName:".",slug:"/screen",permalink:"/docs/7.x/screen",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/screen.md",tags:[],version:"7.x",frontMatter:{id:"screen",title:"Screen",sidebar_label:"Screen"},sidebar:"docs",previous:{title:"Group",permalink:"/docs/7.x/group"},next:{title:"Options for screens",permalink:"/docs/7.x/screen-options"}},d={},u=[{value:"Props",id:"props",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>options</code>",id:"options",level:3},{value:"<code>initialParams</code>",id:"initialparams",level:3},{value:"<code>getId</code>",id:"getid",level:3},{value:"<code>component</code>",id:"component",level:3},{value:"<code>getComponent</code>",id:"getcomponent",level:3},{value:"<code>children</code>",id:"children",level:3},{value:"<code>navigationKey</code>",id:"navigationkey",level:3},{value:"<code>listeners</code>",id:"listeners",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Screen"})," components are used to configure various aspects of screens inside a navigator."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"Screen"})," is returned from a ",(0,r.jsx)(n.code,{children:"createXNavigator"})," function:"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    /* content */\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["After creating the navigator, it can be used as children of the ",(0,r.jsx)(n.code,{children:"Navigator"})," component:"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Navigator>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n</Stack.Navigator>\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"You need to provide at least a name and a component to render for each screen."}),"\n",(0,r.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsx)(n.p,{children:"The name to use for the screen. In dynamic approach it accepts a string:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Profile: ProfileScreen,\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Screen name="Profile" component={ProfileScreen} />\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"This name is used to navigate to the screen:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"navigation.navigate('Profile');\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It is also used for the ",(0,r.jsx)(n.code,{children:"name"})," property in the ",(0,r.jsx)(n.a,{href:"/docs/7.x/route-object",children:(0,r.jsx)(n.code,{children:"route"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"While it is supported, we recommend to avoid spaces or special characters in screen names and keep them simple."}),"\n",(0,r.jsx)(n.h3,{id:"options",children:(0,r.jsx)(n.code,{children:"options"})}),"\n",(0,r.jsx)(n.p,{children:"Options to configure how the screen gets presented in the navigator. It accepts either an object or a function returning an object:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Profile: {\n      screen: ProfileScreen,\n      options: {\n        title: 'Awesome app',\n      },\n    },\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<Stack.Screen\n  name=\"Profile\"\n  component={ProfileScreen}\n  options={{\n    title: 'Awesome app',\n  }}\n/>\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["When you pass a function, it'll receive the ",(0,r.jsx)(n.a,{href:"/docs/7.x/route-object",children:(0,r.jsx)(n.code,{children:"route"})})," and ",(0,r.jsx)(n.a,{href:"/docs/7.x/navigation-object",children:(0,r.jsx)(n.code,{children:"navigation"})}),":"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Profile: {\n      screen: ProfileScreen,\n      options: ({ route, navigation }) => ({\n        title: route.params.userId,\n      }),\n    },\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Profile"\n  component={ProfileScreen}\n  options={({ route, navigation }) => ({\n    title: route.params.userId,\n  })}\n/>\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/7.x/screen-options",children:"Options for screens"})," for more details and examples."]}),"\n",(0,r.jsx)(n.h3,{id:"initialparams",children:(0,r.jsx)(n.code,{children:"initialParams"})}),"\n",(0,r.jsxs)(n.p,{children:["Initial params to use for the screen. If a screen is used as ",(0,r.jsx)(n.code,{children:"initialRouteName"}),", it'll contain the params from ",(0,r.jsx)(n.code,{children:"initialParams"}),". If you navigate to a new screen, the params passed are shallow merged with the initial params."]}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Details: {\n      screen: DetailsScreen,\n      initialParams: { itemId: 42 },\n    },\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Details"\n  component={DetailsScreen}\n  initialParams={{ itemId: 42 }}\n/>\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"getid",children:(0,r.jsx)(n.code,{children:"getId"})}),"\n",(0,r.jsx)(n.p,{children:"Callback to return an unique ID to use for the screen. It receives an object with the route params:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Profile: {\n      screen: ProfileScreen,\n      getId: ({ params }) => params.userId,\n    },\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Profile"\n  component={ProfileScreen}\n  getId={({ params }) => params.userId}\n/>\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"navigate('ScreenName', params)"})," updates the current screen if the screen name matches, otherwise adds a new screen in a stack navigator. So if you're on ",(0,r.jsx)(n.code,{children:"ScreenName"})," and navigate to ",(0,r.jsx)(n.code,{children:"ScreenName"})," again, it won't add a new screen even if the params are different - it'll update the current screen with the new params instead:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Let's say you're on `Home` screen\n// Then you navigate to `Profile` screen with `userId: 1`\nnavigation.navigate('Profile', { userId: 1 });\n\n// Now the stack will have: `Home` -> `Profile` with `userId: 1`\n\n// Then you navigate to `Profile` screen again with `userId: 2`\nnavigation.navigate('Profile', { userId: 2 });\n\n// The stack will now have: `Home` -> `Profile` with `userId: 2`\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you specify ",(0,r.jsx)(n.code,{children:"getId"})," and it doesn't return ",(0,r.jsx)(n.code,{children:"undefined"}),", the screen is identified by both the screen name and the returned ID. Which means that if you're on ",(0,r.jsx)(n.code,{children:"ScreenName"})," and navigate to ",(0,r.jsx)(n.code,{children:"ScreenName"})," again with different params - and return a different ID from the ",(0,r.jsx)(n.code,{children:"getId"})," callback, it'll add a new screen to the stack:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Let's say you're on `Home` screen\n// Then you navigate to `Profile` screen with `userId: 1`\nnavigation.navigate('Profile', { userId: 1 });\n\n// Now the stack will have: `Home` -> `Profile` with `userId: 1`\n\n// Then you navigate to `Profile` screen again with `userId: 2`\nnavigation.navigate('Profile', { userId: 2 });\n\n// The stack will now have: `Home` -> `Profile` with `userId: 1` -> `Profile` with `userId: 2`\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"getId"})," callback can also be used to ensure that the screen with the same ID doesn't appear multiple times in the stack:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Let's say you have a stack with the screens: `Home` -> `Profile` with `userId: 1` -> `Settings`\n// Then you navigate to `Profile` screen with `userId: 1` again\nnavigation.navigate('Profile', { userId: 1 });\n\n// Now the stack will have: `Home` -> `Profile` with `userId: 1`\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the above examples, ",(0,r.jsx)(n.code,{children:"params.userId"})," is used as an ID, subsequent navigation to the screen with the same ",(0,r.jsx)(n.code,{children:"userId"})," will navigate to the existing screen instead of adding a new one to the stack. If the navigation was with a different ",(0,r.jsx)(n.code,{children:"userId"}),", then it'll add a new screen."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"getId"})," is specified in a tab or drawer navigator, the screen will remount if the ID changes."]}),"\n",(0,r.jsx)(n.h3,{id:"component",children:(0,r.jsx)(n.code,{children:"component"})}),"\n",(0,r.jsx)(n.p,{children:"The React Component to render for the screen:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Profile: ProfileScreen,\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Screen name="Profile" component={ProfileScreen} />\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"getcomponent",children:(0,r.jsx)(n.code,{children:"getComponent"})}),"\n",(0,r.jsx)(n.p,{children:"Callback to return the React Component to render for the screen:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Profile: () => require('./ProfileScreen').default,\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<Stack.Screen\n  name=\"Profile\"\n  getComponent={() => require('./ProfileScreen').default}\n/>\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["You can use this approach instead of the ",(0,r.jsx)(n.code,{children:"component"})," prop if you want the ",(0,r.jsx)(n.code,{children:"ProfileScreen"})," module to be lazily evaluated when needed. This is especially useful when using ",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/ram-bundles-inline-requires",children:"ram bundles"})," to improve initial load."]}),"\n",(0,r.jsx)(n.h3,{id:"children",children:(0,r.jsx)(n.code,{children:"children"})}),"\n",(0,r.jsx)(n.p,{children:"Render callback to return React Element to use for the screen:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Screen name="Profile">\n  {(props) => <ProfileScreen {...props} />}\n</Stack.Screen>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can use this approach instead of the ",(0,r.jsx)(n.code,{children:"component"})," prop if you need to pass additional props. Though we recommend using ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/context.html",children:"React context"})," for passing data instead."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactmemo",children:(0,r.jsx)(n.code,{children:"React.memo"})})," or ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactpurecomponent",children:(0,r.jsx)(n.code,{children:"React.PureComponent"})})," for your screen components to avoid performance issues."]})}),"\n",(0,r.jsx)(n.h3,{id:"navigationkey",children:(0,r.jsx)(n.code,{children:"navigationKey"})}),"\n",(0,r.jsx)(n.p,{children:"Optional key for this screen. This doesn't need to be unique. If the key changes, existing screens with this name will be removed (if used in a stack navigator) or reset (if used in a tab or drawer navigator)."}),"\n",(0,r.jsx)(n.p,{children:"This can be useful when we have some screens which we want to be removed or reset when the condition changes:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Profile: {\n      screen: ProfileScreen,\n      navigationKey: isSignedIn ? 'user' : 'guest',\n    },\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<Stack.Screen\n  navigationKey={isSignedIn ? 'user' : 'guest'}\n  name=\"Profile\"\n  component={ProfileScreen}\n/>\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"listeners",children:(0,r.jsx)(n.code,{children:"listeners"})}),"\n",(0,r.jsxs)(n.p,{children:["Event listeners to subscribe to. See ",(0,r.jsxs)(n.a,{href:"/docs/7.x/navigation-events#listeners-prop-on-screen",children:[(0,r.jsx)(n.code,{children:"listeners"})," prop on ",(0,r.jsx)(n.code,{children:"Screen"})]})," for more details."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>i});a(67294);var r=a(86010);const t={tabItem:"tabItem_Ymn6"};var s=a(85893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,i),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>y});var r=a(67294),t=a(86010),s=a(12466),i=a(16550),c=a(20469),o=a(91980),l=a(67392),d=a(50012);function u(e){var n,a;return null!=(n=null==(a=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function h(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){var n;let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const t=null!=(n=r.find((e=>e.default)))?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[l,u]=m({queryString:a,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(n),[t,s]=(0,d.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),j=(()=>{const e=null!=l?l:g;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=a(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(85893);function v(e){let{className:n,block:a,selectedValue:r,selectValue:i,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),t=c[a].value;t!==r&&(l(n),i(t))},u=e=>{var n;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=o.indexOf(e.currentTarget)+1;a=null!=(r=o[n])?r:o[0];break}case"ArrowLeft":{var t;const n=o.indexOf(e.currentTarget)-1;a=null!=(t=o[n])?t:o[o.length-1];break}}null==(n=a)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.Z)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=a?a:n},n)}))})}function S(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(S,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>i});var r=a(67294);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);