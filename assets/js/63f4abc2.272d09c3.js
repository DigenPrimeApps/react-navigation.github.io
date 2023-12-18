"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2905],{53059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(85893),a=t(11151);const o={id:"handling-iphonex",title:"iPhone X support",sidebar_label:"iPhone X support"},s=void 0,r={id:"handling-iphonex",title:"iPhone X support",description:'By default, React Navigation aids in ensuring your application displays correctly on the iPhoneX. It does so by using SafeAreaView inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.',source:"@site/versioned_docs/version-2.x/handling-iphonex.md",sourceDirName:".",slug:"/handling-iphonex",permalink:"/docs/2.x/handling-iphonex",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/handling-iphonex.md",tags:[],version:"2.x",frontMatter:{id:"handling-iphonex",title:"iPhone X support",sidebar_label:"iPhone X support"},sidebar:"version-2.x-docs",previous:{title:"Authentication flows",permalink:"/docs/2.x/auth-flow"},next:{title:"Different status bar configuration based on route",permalink:"/docs/2.x/status-bar"}},c={},d=[{value:"Hidden/Custom Navigation Bar or Tab Bar",id:"hiddencustom-navigation-bar-or-tab-bar",level:2},{value:"Landscape Mode",id:"landscape-mode",level:2},{value:"Use <code>forceInset</code> to get more control",id:"use-forceinset-to-get-more-control",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["By default, React Navigation aids in ensuring your application displays correctly on the iPhoneX. It does so by using ",(0,i.jsx)(n.code,{children:"SafeAreaView"}),' inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.']}),"\n",(0,i.jsx)(n.h2,{id:"hiddencustom-navigation-bar-or-tab-bar",children:"Hidden/Custom Navigation Bar or Tab Bar"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Default React Navigation Behavior",src:t(93006).Z+"",width:"323",height:"700"})}),"\n",(0,i.jsx)(n.p,{children:"However, if you're overriding the default navigation bar, it's important to ensure your UI doesn't interfere with either of those hardware elements."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if I render nothing for the ",(0,i.jsx)(n.code,{children:"header"})," or ",(0,i.jsx)(n.code,{children:"tabBarComponent"}),", nothing renders"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const Tabs = createBottomTabNavigator({\n  ...\n}, {\n  tabBarComponent: () => null,\n});\n\nexport default createStackNavigator({\n  ...\n}, {\n  headerMode: 'none',\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Text hidden by iPhoneX UI elements",src:t(19860).Z+"",width:"323",height:"700"})}),"\n",(0,i.jsxs)(n.p,{children:["To fix this issue you can wrap your content in a ",(0,i.jsx)(n.code,{children:"SafeAreaView"}),", which can be imported from ",(0,i.jsx)(n.code,{children:"react-navigation"}),". Note that ",(0,i.jsx)(n.code,{children:"SafeAreaView"})," should not wrap entire navigators, just the screen components or any content in them."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import { SafeAreaView } from 'react-navigation';\n\nclass MyHomeScreen extends Component {\n  render() {\n    return (\n      <SafeAreaView style={styles.container}>\n        <Text style={styles.paragraph}>\n          This is top text.\n        </Text>\n        <Text style={styles.paragraph}>\n          This is bottom text.\n        </Text>\n      </SafeAreaView>\n    );\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Content spaced correctly with SafeAreaView",src:t(52819).Z+"",width:"323",height:"700"})}),"\n",(0,i.jsx)(n.p,{children:"This will detect if the app is running on an iPhoneX and, if so, ensure the content isn't hidden behind any hardware elements."}),"\n",(0,i.jsx)(n.h2,{id:"landscape-mode",children:"Landscape Mode"}),"\n",(0,i.jsx)(n.p,{children:"Even if you're using the default navigation bar and tab bar if your application works in landscape mode it's important to ensure you content isn't hidden behind the sensor cluster."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"App in landscape mode with text hidden",src:t(43559).Z+"",width:"2436",height:"1125"})}),"\n",(0,i.jsxs)(n.p,{children:["To fix this you can, once again, wrap your content in a ",(0,i.jsx)(n.code,{children:"SafeAreaView"}),". This will not conflict with the navigation bar or tab bar's default behavior in portrait mode."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"App in landscape mode with text visible",src:t(42224).Z+"",width:"2436",height:"1125"})}),"\n",(0,i.jsxs)(n.p,{children:["In conclusion, use the ",(0,i.jsx)(n.code,{children:"SafeAreaView"})," component on the screens you register with a React Navigation navigator."]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://snack.expo.io/BJ6-M8pEG",children:"Snack"})," is available with the code used in this overview."]}),"\n",(0,i.jsxs)(n.h2,{id:"use-forceinset-to-get-more-control",children:["Use ",(0,i.jsx)(n.code,{children:"forceInset"})," to get more control"]}),"\n",(0,i.jsxs)(n.p,{children:["In some cases you might need more control over which paddings are applied. For example, you can remove bottom padding by passing ",(0,i.jsx)(n.code,{children:"forceInset"})," prop to ",(0,i.jsx)(n.code,{children:"SafeAreaView"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"<SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>\n  <Text style={styles.paragraph}>\n    This is top text.\n  </Text>\n  <Text style={styles.paragraph}>\n    This is bottom text.\n  </Text>\n</SafeAreaView>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"forceInset"})," takes an object with the keys ",(0,i.jsx)(n.code,{children:"top | bottom | left | right | vertical | horizontal"})," and the values ",(0,i.jsx)(n.code,{children:"'always' | 'never'"}),". Or you can override the padding altogether by passing an integer."]}),"\n",(0,i.jsxs)(n.p,{children:["There is also a ",(0,i.jsx)(n.a,{href:"https://snack.expo.io/@jozan/react-navigation-docs:-safeareaview-demo",children:"Snack"})," available to demonstrate how ",(0,i.jsx)(n.code,{children:"forceInset"})," behaves."]})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},93006:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},19860:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},52819:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},43559:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},42224:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);