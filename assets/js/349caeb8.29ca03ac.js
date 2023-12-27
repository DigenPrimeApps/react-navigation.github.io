"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[38041],{12288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var o=n(85893),a=n(11151);const i={id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},s=void 0,r={id:"header-buttons",title:"Header buttons",description:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",source:"@site/versioned_docs/version-1.x/header-buttons.md",sourceDirName:".",slug:"/header-buttons",permalink:"/docs/1.x/header-buttons",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/header-buttons.md",tags:[],version:"1.x",frontMatter:{id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},sidebar:"docs",previous:{title:"Configuring the header bar",permalink:"/docs/1.x/headers"},next:{title:"Opening a full-screen modal",permalink:"/docs/1.x/modal"}},c={},h=[{value:"Adding a button to the header",id:"adding-a-button-to-the-header",level:2},{value:"Header interaction with its screen component",id:"header-interaction-with-its-screen-component",level:2},{value:"Customizing the back button",id:"customizing-the-back-button",level:2},{value:"Overriding the back button",id:"overriding-the-back-button",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways."}),"\n",(0,o.jsx)(t.h2,{id:"adding-a-button-to-the-header",children:"Adding a button to the header"}),"\n",(0,o.jsx)(t.p,{children:"The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'class HomeScreen extends React.Component {\n  static navigationOptions = {\n    headerTitle: <LogoTitle />,\n    headerRight: (\n      <Button\n        onPress={() => alert(\'This is a button!\')}\n        title="Info"\n        color="#fff"\n      />\n    ),\n  };\n}\n'})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/simple-header-button",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsxs)(t.p,{children:["The binding of ",(0,o.jsx)(t.code,{children:"this"})," in ",(0,o.jsx)(t.code,{children:"navigationOptions"})," is ",(0,o.jsx)(t.em,{children:"not"})," the ",(0,o.jsx)(t.code,{children:"HomeScreen"})," instance, so you can't call ",(0,o.jsx)(t.code,{children:"setState"})," or any instance methods on it. This is pretty important because it's extremely common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next."]}),"\n",(0,o.jsxs)(t.p,{children:["There is a community-developed package for rendering buttons in the header with the correct styling available ",(0,o.jsx)(t.a,{href:"https://github.com/vonovak/react-navigation-header-buttons",children:"react-navigation-header-buttons"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"header-interaction-with-its-screen-component",children:"Header interaction with its screen component"}),"\n",(0,o.jsxs)(t.p,{children:["The most commonly used pattern for giving a header button access to a function on the component instance is to use ",(0,o.jsx)(t.code,{children:"params"}),". We'll demonstrate this with a classic example, the counter."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'class HomeScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    const params = navigation.state.params || {};\n\n    return {\n      headerTitle: <LogoTitle />,\n      headerRight: (\n        <Button onPress={params.increaseCount} title="+1" color="#fff" />\n      ),\n    };\n  };\n\n  componentWillMount() {\n    this.props.navigation.setParams({ increaseCount: this._increaseCount });\n  }\n\n  state = {\n    count: 0,\n  };\n\n  _increaseCount = () => {\n    this.setState({ count: this.state.count + 1 });\n  };\n\n  /* later in the render function we display the count */\n}\n'})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/header-interacting-with-component-instance",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["React Navigation doesn't guarantee that your screen component will begin mounting before the header for the screen is rendered, and because the ",(0,o.jsx)(t.code,{children:"increaseCount"})," param is set in ",(0,o.jsx)(t.code,{children:"componentWillMount"}),", we may not have it available to us in ",(0,o.jsx)(t.code,{children:"navigationOptions"}),", which is why we include the ",(0,o.jsx)(t.code,{children:"|| {}"})," when grabbing the params (there may not be any). We know this is an awkward API and we do plan on improving it!"]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["As an alternative to ",(0,o.jsx)(t.code,{children:"setParams"}),", you could use a state management library (such as Redux or MobX) and communicate between the header and the screen in the same way you would with two distinct components."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"customizing-the-back-button",children:"Customizing the back button"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"StackNavigator"}),' provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".']}),"\n",(0,o.jsxs)(t.p,{children:["You can change the label behavior with ",(0,o.jsx)(t.code,{children:"headerBackTitle"})," and ",(0,o.jsx)(t.code,{children:"headerTruncatedBackTitle"})," (",(0,o.jsx)(t.a,{href:"/docs/1.x/stack-navigator#headerbacktitle",children:"read more"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["To customize the back button image, you can use ",(0,o.jsx)(t.a,{href:"/docs/1.x/stack-navigator#headerbackimage",children:"headerBackImage"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"overriding-the-back-button",children:"Overriding the back button"}),"\n",(0,o.jsxs)(t.p,{children:["The back button will be rendered automatically in a ",(0,o.jsx)(t.code,{children:"StackNavigator"})," whenever it is possible for the user to go back from their current screen \u2014 in other words, the back button will be rendered whenever there is more than one screen in the stack."]}),"\n",(0,o.jsxs)(t.p,{children:["Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can specify a ",(0,o.jsx)(t.code,{children:"headerLeft"}),", just as we did with ",(0,o.jsx)(t.code,{children:"headerRight"}),", and completely override the back button."]}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["You can set buttons in the header through the ",(0,o.jsx)(t.code,{children:"headerLeft"})," and ",(0,o.jsx)(t.code,{children:"headerRight"})," properties in ",(0,o.jsx)(t.code,{children:"navigationOptions"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The back button is fully customizable with ",(0,o.jsx)(t.code,{children:"headerLeft"}),", but if you just want to change the title or image, there are other ",(0,o.jsx)(t.code,{children:"navigationOptions"})," for that \u2014 ",(0,o.jsx)(t.code,{children:"headerBackTitle"}),", ",(0,o.jsx)(t.code,{children:"headerTruncatedBackTitle"}),", and ",(0,o.jsx)(t.code,{children:"headerBackImage"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://snack.expo.io/@react-navigation/header-interacting-with-component-instance",children:"Full source of what we have built so far"}),"."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(67294);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);