"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[92091],{30542:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(85893),o=r(11151);const i={id:"server-container",title:"ServerContainer",sidebar_label:"ServerContainer"},c=void 0,a={id:"server-container",title:"ServerContainer",description:"The ServerContainer component provides utilities to render your app on server with the correct navigation state.",source:"@site/versioned_docs/version-5.x/server-container.md",sourceDirName:".",slug:"/server-container",permalink:"/docs/5.x/server-container",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/server-container.md",tags:[],version:"5.x",frontMatter:{id:"server-container",title:"ServerContainer",sidebar_label:"ServerContainer"},sidebar:"docs",previous:{title:"NavigationContainer",permalink:"/docs/5.x/navigation-container"},next:{title:"Screen",permalink:"/docs/5.x/screen"}},s={},d=[{value:"Ref",id:"ref",level:2},{value:"Props",id:"props",level:2},{value:"<code>location</code>",id:"location",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ServerContainer"})," component provides utilities to render your app on server with the correct ",(0,t.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Ref which will be populated with the screen options\nconst ref = React.createRef();\n\n// Location object containing the `pathname` and `search` fields of the current URL\nconst location = { pathname: '/profile', search: '?user=jane' };\n\n// Get rendered HTML\nconst html = ReactDOMServer.renderToString(\n  <ServerContainer ref={ref} location={location}>\n    <App />\n  </ServerContainer>\n);\n\n// Then you can access the options for the current screen in the ref\nconst options = ref.current.getCurrentOptions(); // { title: 'My Profile' }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ServerContainer"})," component should wrap your entire app during server rendering. Note that you still need a ",(0,t.jsx)(n.code,{children:"NavigationContainer"})," in your app, ",(0,t.jsx)(n.code,{children:"ServerContainer"})," doesn't replace it.'"]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/5.x/server-rendering",children:(0,t.jsx)(n.code,{children:"server rendering guide"})})," for a detailed guide and examples."]}),"\n",(0,t.jsx)(n.h2,{id:"ref",children:"Ref"}),"\n",(0,t.jsxs)(n.p,{children:["If you attach a ",(0,t.jsx)(n.code,{children:"ref"})," to the container, you can get the options for the current screen after rendering the app. The ",(0,t.jsx)(n.code,{children:"ref"})," will contain a method called ",(0,t.jsx)(n.code,{children:"getCurrentOptions"})," which will return an object with options for the focused screen in the navigation tree:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const options = ref.current.getCurrentOptions();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you can access the options for the screen from this object and put it in the HTML:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<title>{options.title}</title>\n<meta name="description" content={options.description} />\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the ",(0,t.jsx)(n.code,{children:"options"})," object can be undefined if you are not rendering a navigator on the initial render."]}),"\n",(0,t.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,t.jsx)(n.h3,{id:"location",children:(0,t.jsx)(n.code,{children:"location"})}),"\n",(0,t.jsxs)(n.p,{children:["Location object containing the location to use for server rendered output. You can pass the ",(0,t.jsx)(n.code,{children:"pathname"})," and ",(0,t.jsx)(n.code,{children:"search"})," properties matching the ",(0,t.jsx)(n.code,{children:"location"})," object in the browsers:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<ServerContainer location={{ pathname: '/profile', search: '' }}>\n  <App />\n</ServerContainer>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Normally, you'd construct this object based on the incoming request."}),"\n",(0,t.jsx)(n.p,{children:"Basic example with Koa (don't use as is in production):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.use(async (ctx) => {\n  const html = ReactDOMServer.renderToString(\n    <ServerContainer location={{ pathname: ctx.path, search: ctx.search }}>\n      <App />\n    </ServerContainer>\n  );\n\n  ctx.body = html;\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var t=r(67294);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);