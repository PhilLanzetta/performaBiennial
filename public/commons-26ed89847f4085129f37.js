/*! For license information please see commons-26ed89847f4085129f37.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{6132:function(t,e,n){"use strict";var r=n(4836);e.__esModule=!0,e.default=void 0;var o=r(n(6115)),i=r(n(7867)),a=r(n(8416)),s=r(n(7294)),l=r(n(5697)),c=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r))||this,(0,a.default)((0,o.default)(e),"state",{theme:"undefined"!=typeof window?window.__theme:null}),e}(0,i.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;window.__onThemeChange=function(){t.setState({theme:window.__theme})}},n.toggleTheme=function(t){window.__setPreferredTheme(t)},n.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},e}(s.default.Component);c.propTypes={children:l.default.func.isRequired};var u=c;e.default=u},3071:function(t,e,n){"use strict";var r=n(4836)(n(6132));e.L=r.default},6359:function(t,e,n){"use strict";n.d(e,{Z:function(){return Ta}});var r=n(7294),o=n(1883),i=n(2530),a=n(3071),s=n(8421);var l=t=>{let{location:e}=t;const{0:n,1:a}=(0,r.useState)(!1),{0:l,1:c}=(0,r.useState)(!1),{0:u,1:d}=(0,r.useState)(!1),{width:m}=(0,i.Z)(),p=m<601,h=void 0!==e,{0:f,1:g}=(0,r.useState)(0),{0:y,1:v}=(0,r.useState)(0),{0:x,1:b}=(0,r.useState)(!1),w=()=>{b(!x)},E={position:"fixed",zIndex:"500",left:p?"20px":"40px",top:p?"20px":"40px",mixBlendMode:"difference",fill:"#fff"},k=()=>{p?window.scrollY<397?(g(60-.075*window.scrollY),v(100-.125*window.scrollY)):(g(30),v(50)):window.scrollY<397?(g(80-.1*window.scrollY),v(120-.15*window.scrollY)):(g(40),v(60))};return(0,r.useEffect)((()=>(window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k))),[]),(0,r.useEffect)((()=>k()),[]),r.createElement("header",null,h?r.createElement(o.Link,{to:"/",className:"header-logo-link",onClick:()=>b(!1)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 69.764 44.94",style:{height:f+"px",width:y+"px",...E}},r.createElement("g",{id:"Group_373","data-name":"Group 373",transform:"translate(-263.75 -369)"},r.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M288.544,413.94H263.75V369h1.124v43.983h23.671Z",transform:"translate(0 0)"}),r.createElement("path",{id:"Path_2","data-name":"Path 2",d:"M338.517,391.475a22.47,22.47,0,1,1-22.472-22.469,22.47,22.47,0,0,1,22.472,22.469",transform:"translate(-5.003 -0.001)"}),r.createElement("path",{id:"Path_3","data-name":"Path 3",d:"M291.763,373.494A4.494,4.494,0,1,1,287.269,369a4.494,4.494,0,0,1,4.494,4.494",transform:"translate(-3.191 0)"})))):r.createElement(o.Link,{to:"/",className:"header-logo-link",onClick:()=>b(!1)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 69.764 44.94",className:"header-logo"},r.createElement("g",{id:"Group_373","data-name":"Group 373",transform:"translate(-263.75 -369)"},r.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M288.544,413.94H263.75V369h1.124v43.983h23.671Z",transform:"translate(0 0)"}),r.createElement("path",{id:"Path_2","data-name":"Path 2",d:"M338.517,391.475a22.47,22.47,0,1,1-22.472-22.469,22.47,22.47,0,0,1,22.472,22.469",transform:"translate(-5.003 -0.001)"}),r.createElement("path",{id:"Path_3","data-name":"Path 3",d:"M291.763,373.494A4.494,4.494,0,1,1,287.269,369a4.494,4.494,0,0,1,4.494,4.494",transform:"translate(-3.191 0)"})))),r.createElement("button",{className:"header-menu-btn",onClick:x?()=>{a(!1),d(!1),c(!1),w()}:w},x?"Close":"Menu"),r.createElement("section",{className:"secondary-menu "+(x?"show":"hide")},r.createElement("div",{className:"secondary-link-container"},r.createElement(o.Link,{to:"/projects",onClick:()=>b(!1)},"Projects"),p?r.createElement("section",null,r.createElement("aside",null,r.createElement(o.Link,{to:"/about",onClick:()=>b(!1)},"About"),r.createElement("button",{onClick:()=>a(!n),"aria-label":"click to open about subcategories"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15.23 6.566",className:"drop-down-svg "+(n?"flip-up":"")},r.createElement("path",{id:"Path_118","data-name":"Path 118",d:"M-1532,18472l7.228,5.539,7.4-5.539",transform:"translate(1532.304 -18471.602)","stroke-width":"1"})))),r.createElement("aside",{className:"drop-down-link-container about "+(n?"":"hide-drop-down")},r.createElement(o.Link,{to:"/about/#who",onClick:()=>b(!1)},"Who we are"),r.createElement(o.Link,{to:"/about/#philosophy",onClick:()=>b(!1)},"Our philosophy"),r.createElement(o.Link,{to:"/about/#approach",onClick:()=>b(!1)},"Our design approach"),r.createElement(o.Link,{to:"/about/#awards",onClick:()=>b(!1)},"Awards"),r.createElement(o.Link,{to:"/about/#books",onClick:()=>b(!1)},"Books"))):r.createElement("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),className:"header-page-sub-menu-container"},r.createElement(o.Link,{to:"/about",onClick:()=>b(!1)},"About"),n&&r.createElement("div",{className:"header-page-sub-menu"},r.createElement(s.pT,{cascade:!0,damping:.05},r.createElement(o.Link,{to:"/about/#who",onClick:()=>b(!1)},"Who we are"),r.createElement(o.Link,{to:"/about/#philosophy",onClick:()=>b(!1)},"Our philosophy"),r.createElement(o.Link,{to:"/about/#approach",onClick:()=>b(!1)},"Our design approach"),r.createElement(o.Link,{to:"/about/#awards",onClick:()=>b(!1)},"Awards"),r.createElement(o.Link,{to:"/about/#books",onClick:()=>b(!1)},"Books")))),p?r.createElement("section",null,r.createElement("aside",null,r.createElement(o.Link,{to:"/team",onClick:()=>b(!1)},"Team"),r.createElement("button",{onClick:()=>c(!l),"aria-label":"click to open team subcategories"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15.23 6.566",className:"drop-down-svg "+(l?"flip-up":"")},r.createElement("path",{id:"Path_118","data-name":"Path 118",d:"M-1532,18472l7.228,5.539,7.4-5.539",transform:"translate(1532.304 -18471.602)","stroke-width":"1"})))),r.createElement("aside",{className:"drop-down-link-container team "+(l?"":"hide-drop-down")},r.createElement(o.Link,{to:"/team/#herve",onClick:()=>b(!1)},"Hervé Descottes"),r.createElement(o.Link,{to:"/team/#teamMembers",onClick:()=>b(!1)},"Team Members"),r.createElement(o.Link,{to:"/team/#careers",onClick:()=>b(!1)},"Careers"))):r.createElement("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:"header-page-sub-menu-container"},r.createElement(o.Link,{to:"/team",onClick:()=>b(!1)},"Team"),l&&r.createElement("div",{className:"header-page-sub-menu"},r.createElement(s.pT,{cascade:!0,damping:.05},r.createElement(o.Link,{to:"/team/#herve",onClick:()=>b(!1)},"Hervé Descottes"),r.createElement(o.Link,{to:"/team/#teamMembers",onClick:()=>b(!1)},"Team Members"),r.createElement(o.Link,{to:"/team/#careers",onClick:()=>b(!1)},"Careers")))),p?r.createElement("section",null,r.createElement("aside",null,r.createElement(o.Link,{to:"/news",onClick:()=>b(!1)},"News"),r.createElement("button",{onClick:()=>d(!u),"aria-label":"click to open news subcategories"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15.23 6.566",className:"drop-down-svg "+(u?"flip-up":"")},r.createElement("path",{id:"Path_118","data-name":"Path 118",d:"M-1532,18472l7.228,5.539,7.4-5.539",transform:"translate(1532.304 -18471.602)","stroke-width":"1"})))),r.createElement("aside",{className:"drop-down-link-container news "+(u?"":"hide-drop-down")},r.createElement(o.Link,{to:"/news",state:{category:"Project"},onClick:()=>b(!1)},"Projects"),r.createElement(o.Link,{to:"/news",state:{category:"Article"},onClick:()=>b(!1)},"Articles"),r.createElement(o.Link,{to:"/news",state:{category:"Award"},onClick:()=>b(!1)},"Awards"),r.createElement(o.Link,{to:"/news",state:{category:"Person"},onClick:()=>b(!1)},"People"))):r.createElement("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:"header-page-sub-menu-container"},r.createElement(o.Link,{to:"/news",onClick:()=>b(!1)},"News"),u&&r.createElement("div",{className:"header-page-sub-menu"},r.createElement(s.pT,{cascade:!0,damping:.05},r.createElement(o.Link,{to:"/news",state:{category:"Project"},onClick:()=>b(!1)},"Projects"),r.createElement(o.Link,{to:"/news",state:{category:"Article"},onClick:()=>b(!1)},"Articles"),r.createElement(o.Link,{to:"/news",state:{category:"Award"},onClick:()=>b(!1)},"Awards"),r.createElement(o.Link,{to:"/news",state:{category:"Person"},onClick:()=>b(!1)},"People")))),r.createElement(o.Link,{to:"/clients",onClick:()=>b(!1)},"Clients")),r.createElement("div",{className:"secondary-link-container-right"},r.createElement("div",{className:"contact-search-link-container"},r.createElement(o.Link,{to:"/contact",onClick:()=>b(!1)},"Contact"),r.createElement(o.Link,{to:"/search",onClick:()=>b(!1)},"Search")))))},c=n(9274),u=n(3750);var d=()=>{const{width:t}=(0,i.Z)();return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"footer-column-logo"},r.createElement(o.Link,{to:"/"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 69.764 44.94",className:"footer-logo"},r.createElement("g",{id:"Group_373","data-name":"Group 373",transform:"translate(-263.75 -369)"},r.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M288.544,413.94H263.75V369h1.124v43.983h23.671Z",transform:"translate(0 0)"}),r.createElement("path",{id:"Path_2","data-name":"Path 2",d:"M338.517,391.475a22.47,22.47,0,1,1-22.472-22.469,22.47,22.47,0,0,1,22.472,22.469",transform:"translate(-5.003 -0.001)"}),r.createElement("path",{id:"Path_3","data-name":"Path 3",d:"M291.763,373.494A4.494,4.494,0,1,1,287.269,369a4.494,4.494,0,0,1,4.494,4.494",transform:"translate(-3.191 0)"})))),r.createElement("div",null,r.createElement("p",{className:"upper"},"L’Observatoire International"),r.createElement("p",null,"Lighting the World")),r.createElement("p",{className:"footer-credit"},"Website Designed and Developed by"," ",r.createElement("a",{href:"https://www.pacificpacific.pub",target:"_blank",rel:"noreferrer"},"Pacific"))),r.createElement("div",{className:"footer-middle"},r.createElement("div",{className:"footer-column-location"},r.createElement("p",{className:"upper footer-locations"},"New York | Paris | Seoul"),r.createElement("div",null,r.createElement("p",{className:"upper"},"New York"),r.createElement("a",{href:"https://goo.gl/maps/EgzCLXQsUTnbqwEg8",target:"_blank",rel:"noreferrer"},r.createElement("p",null,"120 Walker Street 7th Floor East"),r.createElement("p",null,"New York, New York 10013 USA")),r.createElement("a",{href:"tel:12122554463"},"T +1 212 255 4463"))),r.createElement("div",{className:"footer-column-emails"},r.createElement("div",null,r.createElement("p",{className:"upper"},"General Information"),r.createElement("a",{href:"mailto:info@lobsintl.com"},"info@lobsintl.com")),r.createElement("div",null,r.createElement("p",{className:"upper"},"Press Inquiries"),r.createElement("a",{href:"mailto:pr@lobsintl.com"},"pr@lobsintl.com")),r.createElement("div",null,r.createElement("p",{className:"upper"},"New Business"),r.createElement("a",{href:"mailto:bd@lobsintl.com"},"bd@lobsintl.com")),t<901&&r.createElement("div",{className:"theme-toggle-container-mobile"},r.createElement(a.L,null,(t=>{let{theme:e,toggleTheme:n}=t;return r.createElement(r.Fragment,null,r.createElement("button",{onClick:()=>n("light"===e?"dark":"light"),className:"theme-toggle-btn","aria-label":"change display mode"},"light"===e?r.createElement(s.pT,{triggerOnce:!0},r.createElement(u.s1t,null)):r.createElement(s.pT,{triggerOnce:!0},r.createElement(u.eSY,null))))}))))),r.createElement("div",{className:"footer-column-links"},r.createElement("div",null,r.createElement("p",{className:"upper"},"Careers"),r.createElement(o.Link,{to:"/team/#careers",className:"careers-link"},"Join us ",r.createElement(c.iq,null))),r.createElement("div",{className:"footer-social"},r.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/lobservatoire_intl/"},"Instagram"),r.createElement("a",{href:"https://www.facebook.com/lobservatoireinternational/",target:"_blank",rel:"noreferrer"},"Facebook"),r.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/LOBSINTL"},"Twitter"),r.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/hdescottes"},"Linkedin"),r.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://vimeo.com/lobsintl"},"Vimeo"),r.createElement("p",{className:"footer-credit-mobile"},"Website Designed and Developed by"," ",r.createElement("a",{href:"https://www.pacificpacific.pub",target:"_blank",rel:"noreferrer"},"Pacific"))),t>900&&r.createElement("div",{className:"theme-toggle-container"},r.createElement(a.L,null,(t=>{let{theme:e,toggleTheme:n}=t;return r.createElement(r.Fragment,null,r.createElement("button",{onClick:()=>n("light"===e?"dark":"light"),className:"theme-toggle-btn","aria-label":"change display mode"},"light"===e?r.createElement(s.pT,{triggerOnce:!0},r.createElement(u.s1t,null)):r.createElement(s.pT,{triggerOnce:!0},r.createElement(u.eSY,null))))})))))};const m=1/60*1e3,p="undefined"!=typeof performance?()=>performance.now():()=>Date.now(),h="undefined"!=typeof window?t=>window.requestAnimationFrame(t):t=>setTimeout((()=>t(p())),m);let f=!0,g=!1,y=!1;const v={delta:0,timestamp:0},x=["read","update","preRender","render","postRender"],b=x.reduce(((t,e)=>(t[e]=function(t){let e=[],n=[],r=0,o=!1,i=!1;const a=new WeakSet,s={schedule:(t,i=!1,s=!1)=>{const l=s&&o,c=l?e:n;return i&&a.add(t),-1===c.indexOf(t)&&(c.push(t),l&&o&&(r=e.length)),t},cancel:t=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1),a.delete(t)},process:l=>{if(o)i=!0;else{if(o=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let n=0;n<r;n++){const r=e[n];r(l),a.has(r)&&(s.schedule(r),t())}o=!1,i&&(i=!1,s.process(l))}}};return s}((()=>g=!0)),t)),{}),w=x.reduce(((t,e)=>{const n=b[e];return t[e]=(t,e=!1,r=!1)=>(g||P(),n.schedule(t,e,r)),t}),{}),E=x.reduce(((t,e)=>(t[e]=b[e].cancel,t)),{}),k=x.reduce(((t,e)=>(t[e]=()=>b[e].process(v),t)),{}),S=t=>b[t].process(v),C=t=>{g=!1,v.delta=f?m:Math.max(Math.min(t-v.timestamp,40),1),v.timestamp=t,y=!0,x.forEach(S),y=!1,g&&(f=!1,h(C))},P=()=>{g=!0,f=!0,y||h(C)},A=()=>v;var T=w;const V="undefined"!=typeof document,M=V?r.useLayoutEffect:r.useEffect;function L(){const t=(0,r.useRef)(!1);return M((()=>(t.current=!0,()=>{t.current=!1})),[]),t}const O=(0,r.createContext)(null);function R(t){const e=(0,r.useRef)(null);return null===e.current&&(e.current=t()),e.current}class D extends r.Component{getSnapshotBeforeUpdate(t){const e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent){const t=this.props.sizeRef.current;t.height=e.offsetHeight||0,t.width=e.offsetWidth||0,t.top=e.offsetTop,t.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function j({children:t,isPresent:e}){const n=(0,r.useId)(),o=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{const{width:t,height:r,top:a,left:s}=i.current;if(e||!o.current||!t||!r)return;o.current.dataset.motionPopId=n;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${r}px !important;\n            top: ${a}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[e]),r.createElement(D,{isPresent:e,childRef:o,sizeRef:i},r.cloneElement(t,{ref:o}))}const N=({children:t,initial:e,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:a,mode:s})=>{const l=R(B),c=(0,r.useId)(),u=(0,r.useMemo)((()=>({id:c,initial:e,isPresent:n,custom:i,onExitComplete:t=>{l.set(t,!0);for(const e of l.values())if(!e)return;o&&o()},register:t=>(l.set(t,!1),()=>l.delete(t))})),a?void 0:[n]);return(0,r.useMemo)((()=>{l.forEach(((t,e)=>l.set(e,!1)))}),[n]),r.useEffect((()=>{!n&&!l.size&&o&&o()}),[n]),"popLayout"===s&&(t=r.createElement(j,{isPresent:n},t)),r.createElement(O.Provider,{value:u},t)};function B(){return new Map}const F=(0,r.createContext)({});function I(t){return(0,r.useEffect)((()=>()=>t()),[])}const $=new Set;function _(t,e,n){t||$.has(e)||(console.warn(e),n&&console.warn(n),$.add(e))}const U=t=>t.key||"";const z=({children:t,custom:e,initial:n=!0,onExitComplete:o,exitBeforeEnter:i,presenceAffectsLayout:a=!0,mode:s="sync"})=>{i&&(s="wait",_(!1,"Replace exitBeforeEnter with mode='wait'"));let[l]=function(){const t=L(),[e,n]=(0,r.useState)(0),o=(0,r.useCallback)((()=>{t.current&&n(e+1)}),[e]);return[(0,r.useCallback)((()=>T.postRender(o)),[o]),e]}();const c=(0,r.useContext)(F).forceRender;c&&(l=c);const u=L(),d=function(t){const e=[];return r.Children.forEach(t,(t=>{(0,r.isValidElement)(t)&&e.push(t)})),e}(t);let m=d;const p=new Set,h=(0,r.useRef)(m),f=(0,r.useRef)(new Map).current,g=(0,r.useRef)(!0);if(M((()=>{g.current=!1,function(t,e){t.forEach((t=>{const n=U(t);e.set(n,t)}))}(d,f),h.current=m})),I((()=>{g.current=!0,f.clear(),p.clear()})),g.current)return r.createElement(r.Fragment,null,m.map((t=>r.createElement(N,{key:U(t),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:a,mode:s},t))));m=[...m];const y=h.current.map(U),v=d.map(U),x=y.length;for(let r=0;r<x;r++){const t=y[r];-1===v.indexOf(t)&&p.add(t)}return"wait"===s&&p.size&&(m=[]),p.forEach((t=>{if(-1!==v.indexOf(t))return;const n=f.get(t);if(!n)return;const i=y.indexOf(t);m.splice(i,0,r.createElement(N,{key:U(n),isPresent:!1,onExitComplete:()=>{f.delete(t),p.delete(t);const e=h.current.findIndex((e=>e.key===t));if(h.current.splice(e,1),!p.size){if(h.current=d,!1===u.current)return;l(),o&&o()}},custom:e,presenceAffectsLayout:a,mode:s},n))})),m=m.map((t=>{const e=t.key;return p.has(e)?t:r.createElement(N,{key:U(t),isPresent:!0,presenceAffectsLayout:a,mode:s},t)})),r.createElement(r.Fragment,null,p.size?m:m.map((t=>(0,r.cloneElement)(t))))},Y=(0,r.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),X=(0,r.createContext)({});const W=(0,r.createContext)({strict:!1});function H(t,e,n,o){const i=(0,r.useContext)(X).visualElement,a=(0,r.useContext)(W),s=(0,r.useContext)(O),l=(0,r.useContext)(Y).reducedMotion,c=(0,r.useRef)();o=o||a.renderer,!c.current&&o&&(c.current=o(t,{visualState:e,parent:i,props:n,presenceId:s?s.id:void 0,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const u=c.current;return M((()=>{u&&u.render()})),(0,r.useEffect)((()=>{u&&u.animationState&&u.animationState.animateChanges()})),M((()=>()=>u&&u.notify("Unmount")),[]),u}function G(t){return"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}function Z(t){return"string"==typeof t||Array.isArray(t)}function q(t){return"object"==typeof t&&"function"==typeof t.start}const K=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function J(t){return q(t.animate)||K.some((e=>Z(t[e])))}function Q(t){return Boolean(J(t)||t.variants)}function tt(t){const{initial:e,animate:n}=function(t,e){if(J(t)){const{initial:e,animate:n}=t;return{initial:!1===e||Z(e)?e:void 0,animate:Z(n)?n:void 0}}return!1!==t.inherit?e:{}}(t,(0,r.useContext)(X));return(0,r.useMemo)((()=>({initial:e,animate:n})),[et(e),et(n)])}function et(t){return Array.isArray(t)?t.join(" "):t}const nt=t=>({isEnabled:e=>t.some((t=>!!e[t]))}),rt={measureLayout:nt(["layout","layoutId","drag"]),animation:nt(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:nt(["exit"]),drag:nt(["drag","dragControls"]),focus:nt(["whileFocus"]),hover:nt(["whileHover","onHoverStart","onHoverEnd"]),tap:nt(["whileTap","onTap","onTapStart","onTapCancel"]),pan:nt(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:nt(["whileInView","onViewportEnter","onViewportLeave"])};const ot={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let it=1;class at extends r.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:e}=this.props;return t&&t.setProps(e),null}componentDidUpdate(){}render(){return this.props.children}}const st=(0,r.createContext)({}),lt=Symbol.for("motionComponentSymbol");function ct({preloadedFeatures:t,createVisualElement:e,projectionNodeConstructor:n,useRender:o,useVisualState:i,Component:a}){t&&function(t){for(const e in t)"projectionNodeConstructor"===e?rt.projectionNodeConstructor=t[e]:rt[e].Component=t[e]}(t);const s=(0,r.forwardRef)((function(s,l){const c={...(0,r.useContext)(Y),...s,layoutId:ut(s)},{isStatic:u}=c;let d=null;const m=tt(s),p=u?void 0:R((()=>{if(ot.hasEverUpdated)return it++})),h=i(s,u);if(!u&&V){m.visualElement=H(a,h,c,e);const o=(0,r.useContext)(W).strict,i=(0,r.useContext)(st);m.visualElement&&(d=m.visualElement.loadFeatures(c,o,t,p,n||rt.projectionNodeConstructor,i))}return r.createElement(at,{visualElement:m.visualElement,props:c},d,r.createElement(X.Provider,{value:m},o(a,s,p,function(t,e,n){return(0,r.useCallback)((r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&("function"==typeof n?n(r):G(n)&&(n.current=r))}),[e])}(h,m.visualElement,l),h,u,m.visualElement)))}));return s[lt]=a,s}function ut({layoutId:t}){const e=(0,r.useContext)(F).id;return e&&void 0!==t?e+"-"+t:t}function dt(t){function e(e,n={}){return ct(t(e,n))}if("undefined"==typeof Proxy)return e;const n=new Map;return new Proxy(e,{get:(t,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const mt=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function pt(t){return"string"==typeof t&&!t.includes("-")&&!!(mt.indexOf(t)>-1||/[A-Z]/.test(t))}const ht={};const ft=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gt=new Set(ft);function yt(t,{layout:e,layoutId:n}){return gt.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!ht[t]||"opacity"===t)}const vt=t=>!!(null==t?void 0:t.getVelocity),xt={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bt=(t,e)=>ft.indexOf(t)-ft.indexOf(e);function wt(t){return t.startsWith("--")}const Et=(t,e)=>e&&"number"==typeof t?e.transform(t):t,kt=(t,e)=>n=>Math.max(Math.min(n,e),t),St=t=>t%1?Number(t.toFixed(5)):t,Ct=/(-)?([\d]*\.?[\d])+/g,Pt=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,At=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Tt(t){return"string"==typeof t}const Vt=t=>({test:e=>Tt(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),Mt=Vt("deg"),Lt=Vt("%"),Ot=Vt("px"),Rt=Vt("vh"),Dt=Vt("vw"),jt=Object.assign(Object.assign({},Lt),{parse:t=>Lt.parse(t)/100,transform:t=>Lt.transform(100*t)}),Nt={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},Bt=Object.assign(Object.assign({},Nt),{transform:kt(0,1)}),Ft=Object.assign(Object.assign({},Nt),{default:1}),It={...Nt,transform:Math.round},$t={borderWidth:Ot,borderTopWidth:Ot,borderRightWidth:Ot,borderBottomWidth:Ot,borderLeftWidth:Ot,borderRadius:Ot,radius:Ot,borderTopLeftRadius:Ot,borderTopRightRadius:Ot,borderBottomRightRadius:Ot,borderBottomLeftRadius:Ot,width:Ot,maxWidth:Ot,height:Ot,maxHeight:Ot,size:Ot,top:Ot,right:Ot,bottom:Ot,left:Ot,padding:Ot,paddingTop:Ot,paddingRight:Ot,paddingBottom:Ot,paddingLeft:Ot,margin:Ot,marginTop:Ot,marginRight:Ot,marginBottom:Ot,marginLeft:Ot,rotate:Mt,rotateX:Mt,rotateY:Mt,rotateZ:Mt,scale:Ft,scaleX:Ft,scaleY:Ft,scaleZ:Ft,skew:Mt,skewX:Mt,skewY:Mt,distance:Ot,translateX:Ot,translateY:Ot,translateZ:Ot,x:Ot,y:Ot,z:Ot,perspective:Ot,transformPerspective:Ot,opacity:Bt,originX:jt,originY:jt,originZ:Ot,zIndex:It,fillOpacity:Bt,strokeOpacity:Bt,numOctaves:It};function _t(t,e,n,r){const{style:o,vars:i,transform:a,transformKeys:s,transformOrigin:l}=t;s.length=0;let c=!1,u=!1,d=!0;for(const m in e){const t=e[m];if(wt(m)){i[m]=t;continue}const n=$t[m],r=Et(t,n);if(gt.has(m)){if(c=!0,a[m]=r,s.push(m),!d)continue;t!==(n.default||0)&&(d=!1)}else m.startsWith("origin")?(u=!0,l[m]=r):o[m]=r}if(e.transform||(c||r?o.transform=function({transform:t,transformKeys:e},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,i){let a="";e.sort(bt);for(const s of e)a+=`${xt[s]||s}(${t[s]}) `;return n&&!t.z&&(a+="translateZ(0)"),a=a.trim(),i?a=i(t,o?"":a):r&&o&&(a="none"),a}(t,n,d,r):o.transform&&(o.transform="none")),u){const{originX:t="50%",originY:e="50%",originZ:n=0}=l;o.transformOrigin=`${t} ${e} ${n}`}}const Ut=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function zt(t,e,n){for(const r in e)vt(e[r])||yt(r,n)||(t[r]=e[r])}function Yt(t,e,n){const o={};return zt(o,t.style||{},t),Object.assign(o,function({transformTemplate:t},e,n){return(0,r.useMemo)((()=>{const r={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}};return _t(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)}),[e])}(t,e,n)),t.transformValues?t.transformValues(o):o}function Xt(t,e,n){const r={},o=Yt(t,e,n);return t.drag&&!1!==t.dragListener&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===t.drag?"none":"pan-"+("x"===t.drag?"y":"x")),r.style=o,r}const Wt=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll","whileInView","onViewportEnter","onViewportLeave","viewport","whileTap","onTap","onTapStart","onTapCancel","animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView","onPan","onPanStart","onPanSessionStart","onPanEnd"]);function Ht(t){return Wt.has(t)}let Gt=t=>!Ht(t);try{(Zt=require("@emotion/is-prop-valid").default)&&(Gt=t=>t.startsWith("on")?!Ht(t):Zt(t))}catch(Va){}var Zt;function qt(t,e,n){return"string"==typeof t?t:Ot.transform(e+n*t)}const Kt={offset:"stroke-dashoffset",array:"stroke-dasharray"},Jt={offset:"strokeDashoffset",array:"strokeDasharray"};function Qt(t,{attrX:e,attrY:n,originX:r,originY:o,pathLength:i,pathSpacing:a=1,pathOffset:s=0,...l},c,u,d){if(_t(t,l,c,d),u)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox));t.attrs=t.style,t.style={};const{attrs:m,style:p,dimensions:h}=t;m.transform&&(h&&(p.transform=m.transform),delete m.transform),h&&(void 0!==r||void 0!==o||p.transform)&&(p.transformOrigin=function(t,e,n){return`${qt(e,t.x,t.width)} ${qt(n,t.y,t.height)}`}(h,void 0!==r?r:.5,void 0!==o?o:.5)),void 0!==e&&(m.x=e),void 0!==n&&(m.y=n),void 0!==i&&function(t,e,n=1,r=0,o=!0){t.pathLength=1;const i=o?Kt:Jt;t[i.offset]=Ot.transform(-r);const a=Ot.transform(e),s=Ot.transform(n);t[i.array]=`${a} ${s}`}(m,i,a,s,!1)}const te=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{},attrs:{}}),ee=t=>"string"==typeof t&&"svg"===t.toLowerCase();function ne(t,e,n,o){const i=(0,r.useMemo)((()=>{const n={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{},attrs:{}};return Qt(n,e,{enableHardwareAcceleration:!1},ee(o),t.transformTemplate),{...n.attrs,style:{...n.style}}}),[e]);if(t.style){const e={};zt(e,t.style,t),i.style={...e,...i.style}}return i}function re(t=!1){return(e,n,o,i,{latestValues:a},s)=>{const l=(pt(e)?ne:Xt)(n,a,s,e),c=function(t,e,n){const r={};for(const o in t)(Gt(o)||!0===n&&Ht(o)||!e&&!Ht(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}(n,"string"==typeof e,t),u={...c,...l,ref:i};return o&&(u["data-projection-id"]=o),(0,r.createElement)(e,u)}}const oe=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function ie(t,{style:e,vars:n},r,o){Object.assign(t.style,e,o&&o.getProjectionStyles(r));for(const i in n)t.style.setProperty(i,n[i])}const ae=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function se(t,e,n,r){ie(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(ae.has(o)?o:oe(o),e.attrs[o])}function le(t){const{style:e}=t,n={};for(const r in e)(vt(e[r])||yt(r,t))&&(n[r]=e[r]);return n}function ce(t){const e=le(t);for(const n in t)if(vt(t[n])){e["x"===n||"y"===n?"attr"+n.toUpperCase():n]=t[n]}return e}function ue(t,e,n,r={},o={}){return"function"==typeof e&&(e=e(void 0!==n?n:t.custom,r,o)),"string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e&&(e=e(void 0!==n?n:t.custom,r,o)),e}const de=t=>Array.isArray(t),me=t=>de(t)?t[t.length-1]||0:t;function pe(t){const e=vt(t)?t.get():t;return n=e,Boolean(n&&"object"==typeof n&&n.mix&&n.toValue)?e.toValue():e;var n}const he=t=>(e,n)=>{const o=(0,r.useContext)(X),i=(0,r.useContext)(O),a=()=>function({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,o,i){const a={latestValues:fe(r,o,i,t),renderState:e()};return n&&(a.mount=t=>n(r,t,a)),a}(t,e,o,i);return n?a():R(a)};function fe(t,e,n,r){const o={},i=r(t);for(const m in i)o[m]=pe(i[m]);let{initial:a,animate:s}=t;const l=J(t),c=Q(t);e&&c&&!l&&!1!==t.inherit&&(void 0===a&&(a=e.initial),void 0===s&&(s=e.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!=typeof d&&!q(d)){(Array.isArray(d)?d:[d]).forEach((e=>{const n=ue(t,e);if(!n)return;const{transitionEnd:r,transition:i,...a}=n;for(const t in a){let e=a[t];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(o[t]=e)}for(const t in r)o[t]=r[t]}))}return o}const ge={useVisualState:he({scrapeMotionValuesFromProps:ce,createRenderState:te,onMount:(t,e,{renderState:n,latestValues:r})=>{try{n.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(o){n.dimensions={x:0,y:0,width:0,height:0}}Qt(n,r,{enableHardwareAcceleration:!1},ee(e.tagName),t.transformTemplate),se(e,n)}})},ye={useVisualState:he({scrapeMotionValuesFromProps:le,createRenderState:Ut})};var ve;function xe(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function be(t,e,n,o){(0,r.useEffect)((()=>{const r=t.current;if(n&&r)return xe(r,e,n,o)}),[t,e,n,o])}function we(t){return"undefined"!=typeof PointerEvent&&t instanceof PointerEvent?!("mouse"!==t.pointerType):t instanceof MouseEvent}function Ee(t){return!!t.touches}!function(t){t.Animate="animate",t.Hover="whileHover",t.Tap="whileTap",t.Drag="whileDrag",t.Focus="whileFocus",t.InView="whileInView",t.Exit="exit"}(ve||(ve={}));const ke={pageX:0,pageY:0};function Se(t,e="page"){const n=t.touches[0]||t.changedTouches[0]||ke;return{x:n[e+"X"],y:n[e+"Y"]}}function Ce(t,e="page"){return{x:t[e+"X"],y:t[e+"Y"]}}function Pe(t,e="page"){return{point:Ee(t)?Se(t,e):Ce(t,e)}}const Ae=(t,e=!1)=>{const n=e=>t(e,Pe(e));return e?(r=n,t=>{const e=t instanceof MouseEvent;(!e||e&&0===t.button)&&r(t)}):n;var r},Te={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},Ve={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function Me(t){return V&&null===window.onpointerdown?t:V&&null===window.ontouchstart?Ve[t]:V&&null===window.onmousedown?Te[t]:t}function Le(t,e,n,r){return xe(t,Me(e),Ae(n,"pointerdown"===e),r)}function Oe(t,e,n,r){return be(t,Me(e),n&&Ae(n,"pointerdown"===e),r)}function Re(t){let e=null;return()=>{const n=()=>{e=null};return null===e&&(e=t,n)}}const De=Re("dragHorizontal"),je=Re("dragVertical");function Ne(t){let e=!1;if("y"===t)e=je();else if("x"===t)e=De();else{const t=De(),n=je();t&&n?e=()=>{t(),n()}:(t&&t(),n&&n())}return e}function Be(){const t=Ne(!0);return!t||(t(),!1)}function Fe(t,e,n){return(r,o)=>{we(r)&&!Be()&&(t.animationState&&t.animationState.setActive(ve.Hover,e),n&&n(r,o))}}const Ie=(t,e)=>!!e&&(t===e||Ie(t,e.parentElement)),$e=(t,e)=>n=>e(t(n)),_e=(...t)=>t.reduce($e);const Ue=new WeakMap,ze=new WeakMap,Ye=t=>{const e=Ue.get(t.target);e&&e(t)},Xe=t=>{t.forEach(Ye)};function We(t,e,n){const r=function({root:t,...e}){const n=t||document;ze.has(n)||ze.set(n,{});const r=ze.get(n),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Xe,{root:t,...e})),r[o]}(e);return Ue.set(t,n),r.observe(t),()=>{Ue.delete(t),r.unobserve(t)}}const He={some:0,all:1};function Ge(t,e,n,{root:o,margin:i,amount:a="some",once:s}){(0,r.useEffect)((()=>{if(!t||!n.current)return;const r={root:null==o?void 0:o.current,rootMargin:i,threshold:"number"==typeof a?a:He[a]};return We(n.current,r,(t=>{const{isIntersecting:r}=t;if(e.isInView===r)return;if(e.isInView=r,s&&!r&&e.hasEnteredView)return;r&&(e.hasEnteredView=!0),n.animationState&&n.animationState.setActive(ve.InView,r);const o=n.getProps(),i=r?o.onViewportEnter:o.onViewportLeave;i&&i(t)}))}),[t,o,i,a])}function Ze(t,e,n,{fallback:o=!0}){(0,r.useEffect)((()=>{t&&o&&requestAnimationFrame((()=>{e.hasEnteredView=!0;const{onViewportEnter:t}=n.getProps();t&&t(null),n.animationState&&n.animationState.setActive(ve.InView,!0)}))}),[t])}const qe=t=>e=>(t(e),null),Ke={inView:qe((function({visualElement:t,whileInView:e,onViewportEnter:n,onViewportLeave:o,viewport:i={}}){const a=(0,r.useRef)({hasEnteredView:!1,isInView:!1});let s=Boolean(e||n||o);i.once&&a.current.hasEnteredView&&(s=!1),("undefined"==typeof IntersectionObserver?Ze:Ge)(s,a.current,t,i)})),tap:qe((function({onTap:t,onTapStart:e,onTapCancel:n,whileTap:o,visualElement:i}){const a=t||e||n||o,s=(0,r.useRef)(!1),l=(0,r.useRef)(null),c={passive:!(e||t||n||h)};function u(){l.current&&l.current(),l.current=null}function d(){return u(),s.current=!1,i.animationState&&i.animationState.setActive(ve.Tap,!1),!Be()}function m(e,r){d()&&(Ie(i.current,e.target)?t&&t(e,r):n&&n(e,r))}function p(t,e){d()&&n&&n(t,e)}function h(t,n){u(),s.current||(s.current=!0,l.current=_e(Le(window,"pointerup",m,c),Le(window,"pointercancel",p,c)),i.animationState&&i.animationState.setActive(ve.Tap,!0),e&&e(t,n))}Oe(i,"pointerdown",a?h:void 0,c),I(u)})),focus:qe((function({whileFocus:t,visualElement:e}){const{animationState:n}=e;be(e,"focus",t?()=>{n&&n.setActive(ve.Focus,!0)}:void 0),be(e,"blur",t?()=>{n&&n.setActive(ve.Focus,!1)}:void 0)})),hover:qe((function({onHoverStart:t,onHoverEnd:e,whileHover:n,visualElement:r}){Oe(r,"pointerenter",t||n?Fe(r,!0,t):void 0,{passive:!t}),Oe(r,"pointerleave",e||n?Fe(r,!1,e):void 0,{passive:!e})}))};function Je(){const t=(0,r.useContext)(O);if(null===t)return[!0,null];const{isPresent:e,onExitComplete:n,register:o}=t,i=(0,r.useId)();(0,r.useEffect)((()=>o(i)),[]);return!e&&n?[!1,()=>n&&n(i)]:[!0]}function Qe(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const tn=t=>1e3*t;const en=t=>t,nn=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t;function rn(t,e,n,r){if(t===e&&n===r)return en;const o=e=>function(t,e,n,r,o){let i,a,s=0;do{a=e+(n-e)/2,i=nn(a,r,o)-t,i>0?n=a:e=a}while(Math.abs(i)>1e-7&&++s<12);return a}(e,0,1,t,n);return t=>0===t||1===t?t:nn(o(t),e,r)}const on=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,an=t=>e=>1-t(1-e),sn=t=>t*t,ln=an(sn),cn=on(sn),un=t=>1-Math.sin(Math.acos(t)),dn=an(un),mn=on(dn),pn=(t=1.525)=>e=>e*e*((t+1)*e-t),hn=pn(),fn=an(hn),gn=on(hn),yn=(t=>{const e=pn(t);return t=>(t*=2)<1?.5*e(t):.5*(2-Math.pow(2,-10*(t-1)))})(),vn={linear:en,easeIn:sn,easeInOut:cn,easeOut:ln,circIn:un,circInOut:mn,circOut:dn,backIn:hn,backInOut:gn,backOut:fn,anticipate:yn},xn=t=>{if(Array.isArray(t)){t.length;const[e,n,r,o]=t;return rn(e,n,r,o)}return"string"==typeof t?vn[t]:t},bn=(t,e)=>n=>Boolean(Tt(n)&&At.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),wn=(t,e,n)=>r=>{if(!Tt(r))return r;const[o,i,a,s]=r.match(Ct);return{[t]:parseFloat(o),[e]:parseFloat(i),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},En=kt(0,255),kn=Object.assign(Object.assign({},Nt),{transform:t=>Math.round(En(t))}),Sn={test:bn("rgb","red"),parse:wn("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+kn.transform(t)+", "+kn.transform(e)+", "+kn.transform(n)+", "+St(Bt.transform(r))+")"};const Cn={test:bn("#"),parse:function(t){let e="",n="",r="",o="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),r=t.substr(5,2),o=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),r=t.substr(3,1),o=t.substr(4,1),e+=e,n+=n,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:Sn.transform},Pn={test:bn("hsl","hue"),parse:wn("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Lt.transform(St(e))+", "+Lt.transform(St(n))+", "+St(Bt.transform(r))+")"},An={test:t=>Sn.test(t)||Cn.test(t)||Pn.test(t),parse:t=>Sn.test(t)?Sn.parse(t):Pn.test(t)?Pn.parse(t):Cn.parse(t),transform:t=>Tt(t)?t:t.hasOwnProperty("red")?Sn.transform(t):Pn.transform(t)},Tn="${c}",Vn="${n}";function Mn(t){"number"==typeof t&&(t=`${t}`);const e=[];let n=0;const r=t.match(Pt);r&&(n=r.length,t=t.replace(Pt,Tn),e.push(...r.map(An.parse)));const o=t.match(Ct);return o&&(t=t.replace(Ct,Vn),e.push(...o.map(Nt.parse))),{values:e,numColors:n,tokenised:t}}function Ln(t){return Mn(t).values}function On(t){const{values:e,numColors:n,tokenised:r}=Mn(t),o=e.length;return t=>{let e=r;for(let r=0;r<o;r++)e=e.replace(r<n?Tn:Vn,r<n?An.transform(t[r]):St(t[r]));return e}}const Rn=t=>"number"==typeof t?0:t;const Dn={test:function(t){var e,n,r,o;return isNaN(t)&&Tt(t)&&(null!==(n=null===(e=t.match(Ct))||void 0===e?void 0:e.length)&&void 0!==n?n:0)+(null!==(o=null===(r=t.match(Pt))||void 0===r?void 0:r.length)&&void 0!==o?o:0)>0},parse:Ln,createTransformer:On,getAnimatableNone:function(t){const e=Ln(t);return On(t)(e.map(Rn))}},jn=(t,e)=>"zIndex"!==t&&(!("number"!=typeof e&&!Array.isArray(e))||!("string"!=typeof e||!Dn.test(e)||e.startsWith("url("))),Nn=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Bn=t=>({type:"spring",stiffness:550,damping:0===t?2*Math.sqrt(550):30,restSpeed:10}),Fn=()=>({type:"keyframes",ease:"linear",duration:.3}),In=t=>({type:"keyframes",duration:.8,values:t}),$n={x:Nn,y:Nn,z:Nn,rotate:Nn,rotateX:Nn,rotateY:Nn,rotateZ:Nn,scaleX:Bn,scaleY:Bn,scale:Bn,opacity:Fn,backgroundColor:Fn,color:Fn,default:Bn},_n=(t,e)=>{let n;return n=de(e)?In:$n[t]||$n.default,{to:e,...n(e)}},Un=new Set(["brightness","contrast","saturate","opacity"]);function zn(t){let[e,n]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;const[r]=n.match(Ct)||[];if(!r)return t;const o=n.replace(r,"");let i=Un.has(e)?1:0;return r!==n&&(i*=100),e+"("+i+o+")"}const Yn=/([a-z-]*)\(.*?\)/g,Xn=Object.assign(Object.assign({},Dn),{getAnimatableNone:t=>{const e=t.match(Yn);return e?e.map(zn).join(" "):t}}),Wn={...$t,color:An,backgroundColor:An,outlineColor:An,fill:An,stroke:An,borderColor:An,borderTopColor:An,borderRightColor:An,borderBottomColor:An,borderLeftColor:An,filter:Xn,WebkitFilter:Xn},Hn=t=>Wn[t];function Gn(t,e){var n;let r=Hn(t);return r!==Xn&&(r=Dn),null===(n=r.getAnimatableNone)||void 0===n?void 0:n.call(r,e)}const Zn=!1;function qn(t,e){const n=performance.now(),r=({timestamp:o})=>{const i=o-n;i>=e&&(E.read(r),t(i-e))};return T.read(r,!0),()=>E.read(r)}const Kn=(t,e,n)=>Math.min(Math.max(n,t),e),Jn=(t,e,n)=>-n*t+n*e+t;function Qn(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}const tr=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},er=[Cn,Sn,Pn];function nr(t){const e=(n=t,er.find((t=>t.test(n))));var n;Boolean(e);let r=e.parse(t);return e===Pn&&(r=function({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,n/=100;let o=0,i=0,a=0;if(e/=100){const r=n<.5?n*(1+e):n+e-n*e,s=2*n-r;o=Qn(s,r,t+1/3),i=Qn(s,r,t),a=Qn(s,r,t-1/3)}else o=i=a=n;return{red:Math.round(255*o),green:Math.round(255*i),blue:Math.round(255*a),alpha:r}}(r)),r}const rr=(t,e)=>{const n=nr(t),r=nr(e),o={...n};return t=>(o.red=tr(n.red,r.red,t),o.green=tr(n.green,r.green,t),o.blue=tr(n.blue,r.blue,t),o.alpha=Jn(n.alpha,r.alpha,t),Sn.transform(o))};function or(t,e){return"number"==typeof t?n=>Jn(t,e,n):An.test(t)?rr(t,e):lr(t,e)}const ir=(t,e)=>{const n=[...t],r=n.length,o=t.map(((t,n)=>or(t,e[n])));return t=>{for(let e=0;e<r;e++)n[e]=o[e](t);return n}},ar=(t,e)=>{const n={...t,...e},r={};for(const o in n)void 0!==t[o]&&void 0!==e[o]&&(r[o]=or(t[o],e[o]));return t=>{for(const e in r)n[e]=r[e](t);return n}};function sr(t){const e=Dn.parse(t),n=e.length;let r=0,o=0;for(let i=0;i<n;i++)r||"number"==typeof e[i]?r++:o++;return{parsed:e,numNumbers:r,numColors:o}}const lr=(t,e)=>{const n=Dn.createTransformer(e),r=sr(t),o=sr(e);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?_e(ir(r.parsed,o.parsed),n):n=>`${n>0?e:t}`},cr=(t,e,n)=>{const r=e-t;return 0===r?1:(n-t)/r},ur=(t,e)=>n=>Jn(t,e,n);function dr(t,e,n){const r=[],o=n||("number"==typeof(i=t[0])?ur:"string"==typeof i?An.test(i)?rr:lr:Array.isArray(i)?ir:"object"==typeof i?ar:ur);var i;const a=t.length-1;for(let s=0;s<a;s++){let n=o(t[s],t[s+1]);if(e){const t=Array.isArray(e)?e[s]:e;n=_e(t,n)}r.push(n)}return r}function mr(t,e,{clamp:n=!0,ease:r,mixer:o}={}){const i=t.length;e.length,!r||!Array.isArray(r)||r.length,t[0]>t[i-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=dr(e,r,o),s=a.length,l=e=>{let n=0;if(s>1)for(;n<t.length-2&&!(e<t[n+1]);n++);const r=cr(t[n],t[n+1],e);return a[n](r)};return n?e=>l(Kn(t[0],t[i-1],e)):l}function pr(t,e){return t.map((()=>e||cn)).splice(0,t.length-1)}const hr=.001;function fr({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let o,i,a=1-e;a=Kn(.05,1,a),t=Kn(.01,10,t/1e3),a<1?(o=e=>{const r=e*a,o=r*t,i=r-n,s=gr(e,a),l=Math.exp(-o);return hr-i/s*l},i=e=>{const r=e*a*t,i=r*n+n,s=Math.pow(a,2)*Math.pow(e,2)*t,l=Math.exp(-r),c=gr(Math.pow(e,2),a);return(-o(e)+hr>0?-1:1)*((i-s)*l)/c}):(o=e=>Math.exp(-e*t)*((e-n)*t+1)-.001,i=e=>Math.exp(-e*t)*(t*t*(n-e)));const s=function(t,e,n){let r=n;for(let o=1;o<12;o++)r-=t(r)/e(r);return r}(o,i,5/t);if(t*=1e3,isNaN(s))return{stiffness:100,damping:10,duration:t};{const e=Math.pow(s,2)*r;return{stiffness:e,damping:2*a*Math.sqrt(r*e),duration:t}}}function gr(t,e){return t*Math.sqrt(1-e*e)}const yr=["duration","bounce"],vr=["stiffness","damping","mass"];function xr(t,e){return e.some((e=>void 0!==t[e]))}function br({from:t=0,to:e=1,restSpeed:n=2,restDelta:r=.01,...o}){const i={done:!1,value:t};let{stiffness:a,damping:s,mass:l,velocity:c,duration:u,isResolvedFromDuration:d}=function(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!xr(t,vr)&&xr(t,yr)){const n=fr(t);e={...e,...n,velocity:0,mass:1},e.isResolvedFromDuration=!0}return e}(o),m=wr,p=wr;function h(){const n=c?-c/1e3:0,o=e-t,i=s/(2*Math.sqrt(a*l)),u=Math.sqrt(a/l)/1e3;if(void 0===r&&(r=Math.min(Math.abs(e-t)/100,.4)),i<1){const t=gr(u,i);m=r=>{const a=Math.exp(-i*u*r);return e-a*((n+i*u*o)/t*Math.sin(t*r)+o*Math.cos(t*r))},p=e=>{const r=Math.exp(-i*u*e);return i*u*r*(Math.sin(t*e)*(n+i*u*o)/t+o*Math.cos(t*e))-r*(Math.cos(t*e)*(n+i*u*o)-t*o*Math.sin(t*e))}}else if(1===i)m=t=>e-Math.exp(-u*t)*(o+(n+u*o)*t);else{const t=u*Math.sqrt(i*i-1);m=r=>{const a=Math.exp(-i*u*r),s=Math.min(t*r,300);return e-a*((n+i*u*o)*Math.sinh(s)+t*o*Math.cosh(s))/t}}}return h(),{next:t=>{const o=m(t);if(d)i.done=t>=u;else{const a=1e3*p(t),s=Math.abs(a)<=n,l=Math.abs(e-o)<=r;i.done=s&&l}return i.value=i.done?e:o,i},flipTarget:()=>{c=-c,[t,e]=[e,t],h()}}}br.needsInterpolation=(t,e)=>"string"==typeof t||"string"==typeof e;const wr=t=>0;const Er={decay:function({velocity:t=0,from:e=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:i}){const a={done:!1,value:e};let s=n*t;const l=e+s,c=void 0===i?l:i(l);return c!==l&&(s=c-e),{next:t=>{const e=-s*Math.exp(-t/r);return a.done=!(e>o||e<-o),a.value=a.done?c:c+e,a},flipTarget:()=>{}}},keyframes:function({from:t=0,to:e=1,ease:n,offset:r,duration:o=300}){const i={done:!1,value:t},a=Array.isArray(e)?e:[t,e],s=function(t,e){return t.map((t=>t*e))}(r&&r.length===a.length?r:function(t){const e=t.length;return t.map(((t,n)=>0!==n?n/(e-1):0))}(a),o);function l(){return mr(s,a,{ease:Array.isArray(n)?n:pr(a,n)})}let c=l();return{next:t=>(i.value=c(t),i.done=t>=o,i),flipTarget:()=>{a.reverse(),c=l()}}},spring:br};function kr(t,e,n=0){return t-e-n}const Sr=t=>{const e=({delta:e})=>t(e);return{start:()=>T.update(e,!0),stop:()=>E.update(e)}};function Cr({from:t,autoplay:e=!0,driver:n=Sr,elapsed:r=0,repeat:o=0,repeatType:i="loop",repeatDelay:a=0,onPlay:s,onStop:l,onComplete:c,onRepeat:u,onUpdate:d,type:m="keyframes",...p}){var h,f;let g,y,v,{to:x}=p,b=0,w=p.duration,E=!1,k=!0;const S=Er[Array.isArray(x)?"keyframes":m];(null===(f=(h=S).needsInterpolation)||void 0===f?void 0:f.call(h,t,x))&&(v=mr([0,100],[t,x],{clamp:!1}),t=0,x=100);const C=S({...p,from:t,to:x});function P(){b++,"reverse"===i?(k=b%2==0,r=function(t,e=0,n=0,r=!0){return r?kr(e+-t,e,n):e-(t-e)+n}(r,w,a,k)):(r=kr(r,w,a),"mirror"===i&&C.flipTarget()),E=!1,u&&u()}function A(t){if(k||(t=-t),r+=t,!E){const t=C.next(Math.max(0,r));y=t.value,v&&(y=v(y)),E=k?t.done:r<=0}null==d||d(y),E&&(0===b&&(null!=w||(w=r)),b<o?function(t,e,n,r){return r?t>=e+n:t<=-n}(r,w,a,k)&&P():(g.stop(),c&&c()))}return e&&(null==s||s(),g=n(A),g.start()),{stop:()=>{null==l||l(),g.stop()}}}function Pr(t,e){return e?t*(1e3/e):0}let Ar=!1;function Tr({ease:t,times:e,yoyo:n,flip:r,loop:o,...i}){const a={...i};return e&&(a.offset=e),i.duration&&(a.duration=tn(i.duration)),i.repeatDelay&&(a.repeatDelay=tn(i.repeatDelay)),t&&(a.ease=(t=>Array.isArray(t)&&"number"!=typeof t[0])(t)?t.map(xn):xn(t)),"tween"===i.type&&(a.type="keyframes"),(n||o||r)&&(Ar=!0,n?a.repeatType="reverse":o?a.repeatType="loop":r&&(a.repeatType="mirror"),a.repeat=o||n||r||i.repeat),"spring"!==i.type&&(a.type="keyframes"),a}function Vr(t,e,n){return Array.isArray(e.to)&&void 0===t.duration&&(t.duration=.8),function(t){Array.isArray(t.to)&&null===t.to[0]&&(t.to=[...t.to],t.to[0]=t.from)}(e),function({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:a,repeatDelay:s,from:l,...c}){return!!Object.keys(c).length}(t)||(t={...t,..._n(n,e.to)}),{...e,...Tr(t)}}function Mr(t,e,n,r,o){const i=Rr(r,t)||{};let a=void 0!==i.from?i.from:e.get();const s=jn(t,n);"none"===a&&s&&"string"==typeof n?a=Gn(t,n):Lr(a)&&"string"==typeof n?a=Or(n):!Array.isArray(n)&&Lr(n)&&"string"==typeof a&&(n=Or(a));const l=jn(t,a);return l&&s&&!1!==i.type?function(){const r={from:a,to:n,velocity:e.getVelocity(),onComplete:o,onUpdate:t=>e.set(t)};return"inertia"===i.type||"decay"===i.type?function({from:t=0,velocity:e=0,min:n,max:r,power:o=.8,timeConstant:i=750,bounceStiffness:a=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:d,onComplete:m,onStop:p}){let h;function f(t){return void 0!==n&&t<n||void 0!==r&&t>r}function g(t){return void 0===n?r:void 0===r||Math.abs(n-t)<Math.abs(r-t)?n:r}function y(t){null==h||h.stop(),h=Cr({...t,driver:u,onUpdate:e=>{var n;null==d||d(e),null===(n=t.onUpdate)||void 0===n||n.call(t,e)},onComplete:m,onStop:p})}function v(t){y({type:"spring",stiffness:a,damping:s,restDelta:l,...t})}if(f(t))v({from:t,velocity:e,to:g(t)});else{let r=o*e+t;void 0!==c&&(r=c(r));const a=g(r),s=a===n?-1:1;let u,d;const m=t=>{u=d,d=t,e=Pr(t-u,A().delta),(1===s&&t>a||-1===s&&t<a)&&v({from:t,to:a,velocity:e})};y({type:"decay",from:t,velocity:e,timeConstant:i,power:o,restDelta:l,modifyTarget:c,onUpdate:f(r)?m:void 0})}return{stop:()=>null==h?void 0:h.stop()}}({...r,...i}):Cr({...Vr(i,r,t),onUpdate:t=>{r.onUpdate(t),i.onUpdate&&i.onUpdate(t)},onComplete:()=>{r.onComplete(),i.onComplete&&i.onComplete()}})}:function(){const t=me(n);return e.set(t),o(),i.onUpdate&&i.onUpdate(t),i.onComplete&&i.onComplete(),{stop:()=>{}}}}function Lr(t){return 0===t||"string"==typeof t&&0===parseFloat(t)&&-1===t.indexOf(" ")}function Or(t){return"number"==typeof t?0:Gn("",t)}function Rr(t,e){return t[e]||t.default||t}function Dr(t,e,n,r={}){return Zn&&(r={type:!1}),e.start((o=>{let i;const a=Mr(t,e,n,r,o),s=function(t,e){var n,r;return null!==(r=null!==(n=(Rr(t,e)||{}).delay)&&void 0!==n?n:t.delay)&&void 0!==r?r:0}(r,t),l=()=>i=a();let c;return s?c=qn(l,tn(s)):l(),()=>{c&&c(),i&&i.stop()}}))}const jr=t=>/^0[^.\s]+$/.test(t);function Nr(t,e){-1===t.indexOf(e)&&t.push(e)}function Br(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Fr{constructor(){this.subscriptions=[]}add(t){return Nr(this.subscriptions,t),()=>Br(this.subscriptions,t)}notify(t,e,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](t,e,n);else for(let o=0;o<r;o++){const r=this.subscriptions[o];r&&r(t,e,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}class Ir{constructor(t){var e;this.version="7.6.19",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Fr,this.velocityUpdateSubscribers=new Fr,this.renderSubscribers=new Fr,this.canTrackVelocity=!1,this.updateAndNotify=(t,e=!0)=>{this.prev=this.current,this.current=t;const{delta:n,timestamp:r}=A();this.lastUpdated!==r&&(this.timeDelta=n,this.lastUpdated=r,T.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.updateSubscribers.notify(this.current),this.velocityUpdateSubscribers.getSize()&&this.velocityUpdateSubscribers.notify(this.getVelocity()),e&&this.renderSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>T.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{t!==this.lastUpdated&&(this.prev=this.current,this.velocityUpdateSubscribers.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=(e=this.current,!isNaN(parseFloat(e)))}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}onRenderRequest(t){return t(this.get()),this.renderSubscribers.add(t)}attach(t){this.passiveEffect=t}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Pr(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise((e=>{this.hasAnimated=!0,this.stopAnimation=t(e)})).then((()=>this.clearAnimation()))}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()}}function $r(t){return new Ir(t)}const _r=t=>e=>e.test(t),Ur=[Nt,Ot,Lt,Mt,Dt,Rt,{test:t=>"auto"===t,parse:t=>t}],zr=t=>Ur.find(_r(t)),Yr=[...Ur,An,Dn],Xr=t=>Yr.find(_r(t));function Wr(t,e,n){const r=t.getProps();return ue(r,e,void 0!==n?n:r.custom,function(t){const e={};return t.values.forEach(((t,n)=>e[n]=t.get())),e}(t),function(t){const e={};return t.values.forEach(((t,n)=>e[n]=t.getVelocity())),e}(t))}function Hr(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,$r(n))}function Gr(t,e){const n=Wr(t,e);let{transitionEnd:r={},transition:o={},...i}=n?t.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const a in i){Hr(t,a,me(i[a]))}}function Zr(t,e){if(!e)return;return(e[t]||e.default||e).from}function qr(t){return Boolean(vt(t)&&t.add)}function Kr(t,e,n={}){var r;const o=Wr(t,e,n.custom);let{transition:i=t.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(i=n.transitionOverride);const a=o?()=>Jr(t,o,n):()=>Promise.resolve(),s=(null===(r=t.variantChildren)||void 0===r?void 0:r.size)?(r=0)=>{const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(t,e,n=0,r=0,o=1,i){const a=[],s=(t.variantChildren.size-1)*r,l=1===o?(t=0)=>t*r:(t=0)=>s-t*r;return Array.from(t.variantChildren).sort(Qr).forEach(((t,r)=>{a.push(Kr(t,e,{...i,delay:n+l(r)}).then((()=>t.notify("AnimationComplete",e))))})),Promise.all(a)}(t,e,o+r,a,s,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[t,e]="beforeChildren"===l?[a,s]:[s,a];return t().then(e)}return Promise.all([a(),s(n.delay)])}function Jr(t,e,{delay:n=0,transitionOverride:r,type:o}={}){var i;let{transition:a=t.getDefaultTransition(),transitionEnd:s,...l}=t.makeTargetAnimatable(e);const c=t.getValue("willChange");r&&(a=r);const u=[],d=o&&(null===(i=t.animationState)||void 0===i?void 0:i.getState()[o]);for(const m in l){const e=t.getValue(m),r=l[m];if(!e||void 0===r||d&&to(d,m))continue;let o={delay:n,...a};t.shouldReduceMotion&&gt.has(m)&&(o={...o,type:!1,delay:0});let i=Dr(m,e,r,o);qr(c)&&(c.add(m),i=i.then((()=>c.remove(m)))),u.push(i)}return Promise.all(u).then((()=>{s&&Gr(t,s)}))}function Qr(t,e){return t.sortNodePosition(e)}function to({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&!0!==e[n];return e[n]=!1,r}const eo=[ve.Animate,ve.InView,ve.Focus,ve.Hover,ve.Tap,ve.Drag,ve.Exit],no=[...eo].reverse(),ro=eo.length;function oo(t){return e=>Promise.all(e.map((({animation:e,options:n})=>function(t,e,n={}){let r;if(t.notify("AnimationStart",e),Array.isArray(e)){const o=e.map((e=>Kr(t,e,n)));r=Promise.all(o)}else if("string"==typeof e)r=Kr(t,e,n);else{const o="function"==typeof e?Wr(t,e,n.custom):e;r=Jr(t,o,n)}return r.then((()=>t.notify("AnimationComplete",e)))}(t,e,n))))}function io(t){let e=oo(t);const n={[ve.Animate]:so(!0),[ve.InView]:so(),[ve.Hover]:so(),[ve.Tap]:so(),[ve.Drag]:so(),[ve.Focus]:so(),[ve.Exit]:so()};let r=!0;const o=(e,n)=>{const r=Wr(t,n);if(r){const{transition:t,transitionEnd:n,...o}=r;e={...e,...o,...n}}return e};function i(i,a){var s;const l=t.getProps(),c=t.getVariantContext(!0)||{},u=[],d=new Set;let m={},p=1/0;for(let e=0;e<ro;e++){const h=no[e],f=n[h],g=null!==(s=l[h])&&void 0!==s?s:c[h],y=Z(g),v=h===a?f.isActive:null;!1===v&&(p=e);let x=g===c[h]&&g!==l[h]&&y;if(x&&r&&t.manuallyAnimateOnMount&&(x=!1),f.protectedKeys={...m},!f.isActive&&null===v||!g&&!f.prevProp||q(g)||"boolean"==typeof g)continue;const b=ao(f.prevProp,g);let w=b||h===a&&f.isActive&&!x&&y||e>p&&y;const E=Array.isArray(g)?g:[g];let k=E.reduce(o,{});!1===v&&(k={});const{prevResolvedValues:S={}}=f,C={...S,...k},P=t=>{w=!0,d.delete(t),f.needsAnimating[t]=!0};for(const t in C){const e=k[t],n=S[t];m.hasOwnProperty(t)||(e!==n?de(e)&&de(n)?!Qe(e,n)||b?P(t):f.protectedKeys[t]=!0:void 0!==e?P(t):d.add(t):void 0!==e&&d.has(t)?P(t):f.protectedKeys[t]=!0)}f.prevProp=g,f.prevResolvedValues=k,f.isActive&&(m={...m,...k}),r&&t.blockInitialAnimation&&(w=!1),w&&!x&&u.push(...E.map((t=>({animation:t,options:{type:h,...i}}))))}if(d.size){const e={};d.forEach((n=>{const r=t.getBaseTarget(n);void 0!==r&&(e[n]=r)})),u.push({animation:e})}let h=Boolean(u.length);return r&&!1===l.initial&&!t.manuallyAnimateOnMount&&(h=!1),r=!1,h?e(u):Promise.resolve()}return{animateChanges:i,setActive:function(e,r,o){var a;if(n[e].isActive===r)return Promise.resolve();null===(a=t.variantChildren)||void 0===a||a.forEach((t=>{var n;return null===(n=t.animationState)||void 0===n?void 0:n.setActive(e,r)})),n[e].isActive=r;const s=i(o,e);for(const t in n)n[t].protectedKeys={};return s},setAnimateFunction:function(n){e=n(t)},getState:()=>n}}function ao(t,e){return"string"==typeof e?e!==t:!!Array.isArray(e)&&!Qe(e,t)}function so(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}const lo={animation:qe((({visualElement:t,animate:e})=>{t.animationState||(t.animationState=io(t)),q(e)&&(0,r.useEffect)((()=>e.subscribe(t)),[e])})),exit:qe((t=>{const{custom:e,visualElement:n}=t,[o,i]=Je(),a=(0,r.useContext)(O);(0,r.useEffect)((()=>{n.isPresent=o;const t=n.animationState&&n.animationState.setActive(ve.Exit,!o,{custom:a&&a.custom||e});t&&!o&&t.then(i)}),[o])}))},co=(t,e)=>Math.abs(t-e);class uo{constructor(t,e,{transformPagePoint:n}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const t=ho(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,n=function(t,e){const n=co(t.x,e.x),r=co(t.y,e.y);return Math.sqrt(n**2+r**2)}(t.offset,{x:0,y:0})>=3;if(!e&&!n)return;const{point:r}=t,{timestamp:o}=A();this.history.push({...r,timestamp:o});const{onStart:i,onMove:a}=this.handlers;e||(i&&i(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=mo(e,this.transformPagePoint),we(t)&&0===t.buttons?this.handlePointerUp(t,e):T.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end();const{onEnd:n,onSessionEnd:r}=this.handlers,o=ho(mo(e,this.transformPagePoint),this.history);this.startEvent&&n&&n(t,o),r&&r(t,o)},Ee(t)&&t.touches.length>1)return;this.handlers=e,this.transformPagePoint=n;const r=mo(Pe(t),this.transformPagePoint),{point:o}=r,{timestamp:i}=A();this.history=[{...o,timestamp:i}];const{onSessionStart:a}=e;a&&a(t,ho(r,this.history)),this.removeListeners=_e(Le(window,"pointermove",this.handlePointerMove),Le(window,"pointerup",this.handlePointerUp),Le(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),E.update(this.updatePoint)}}function mo(t,e){return e?{point:e(t.point)}:t}function po(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ho({point:t},e){return{point:t,delta:po(t,go(e)),offset:po(t,fo(e)),velocity:yo(e,.1)}}function fo(t){return t[0]}function go(t){return t[t.length-1]}function yo(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const o=go(t);for(;n>=0&&(r=t[n],!(o.timestamp-r.timestamp>tn(e)));)n--;if(!r)return{x:0,y:0};const i=(o.timestamp-r.timestamp)/1e3;if(0===i)return{x:0,y:0};const a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function vo(t){return t.max-t.min}function xo(t,e=0,n=.01){return Math.abs(t-e)<=n}function bo(t,e,n,r=.5){t.origin=r,t.originPoint=Jn(e.min,e.max,t.origin),t.scale=vo(n)/vo(e),(xo(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Jn(n.min,n.max,t.origin)-t.originPoint,(xo(t.translate)||isNaN(t.translate))&&(t.translate=0)}function wo(t,e,n,r){bo(t.x,e.x,n.x,null==r?void 0:r.originX),bo(t.y,e.y,n.y,null==r?void 0:r.originY)}function Eo(t,e,n){t.min=n.min+e.min,t.max=t.min+vo(e)}function ko(t,e,n){t.min=e.min-n.min,t.max=t.min+vo(e)}function So(t,e,n){ko(t.x,e.x,n.x),ko(t.y,e.y,n.y)}function Co(t,e,n){return{min:void 0!==e?t.min+e:void 0,max:void 0!==n?t.max+n-(t.max-t.min):void 0}}function Po(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}const Ao=.35;function To(t,e,n){return{min:Vo(t,e),max:Vo(t,n)}}function Vo(t,e){var n;return"number"==typeof t?t:null!==(n=t[e])&&void 0!==n?n:0}function Mo(t){return[t("x"),t("y")]}function Lo({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function Oo(t){return void 0===t||1===t}function Ro({scale:t,scaleX:e,scaleY:n}){return!Oo(t)||!Oo(e)||!Oo(n)}function Do(t){return Ro(t)||jo(t)||t.z||t.rotate||t.rotateX||t.rotateY}function jo(t){return No(t.x)||No(t.y)}function No(t){return t&&"0%"!==t}function Bo(t,e,n){return n+e*(t-n)}function Fo(t,e,n,r,o){return void 0!==o&&(t=Bo(t,o,r)),Bo(t,n,r)+e}function Io(t,e=0,n=1,r,o){t.min=Fo(t.min,e,n,r,o),t.max=Fo(t.max,e,n,r,o)}function $o(t,{x:e,y:n}){Io(t.x,e.translate,e.scale,e.originPoint),Io(t.y,n.translate,n.scale,n.originPoint)}function _o(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Uo(t,e){t.min=t.min+e,t.max=t.max+e}function zo(t,e,[n,r,o]){const i=void 0!==e[o]?e[o]:.5,a=Jn(t.min,t.max,i);Io(t,e[n],e[r],a,e.scale)}const Yo=["x","scaleX","originX"],Xo=["y","scaleY","originY"];function Wo(t,e){zo(t.x,e,Yo),zo(t.y,e,Xo)}function Ho(t,e){return Lo(function(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(t.getBoundingClientRect(),e))}const Go=new WeakMap;class Zo{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=t}start(t,{snapToCursor:e=!1}={}){if(!1===this.visualElement.isPresent)return;this.panSession=new uo(t,{onSessionStart:t=>{this.stopAnimation(),e&&this.snapToCursor(Pe(t,"page").point)},onStart:(t,e)=>{var n;const{drag:r,dragPropagation:o,onDragStart:i}=this.getProps();(!r||o||(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ne(r),this.openGlobalLock))&&(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Mo((t=>{var e,n;let r=this.getAxisMotionValue(t).get()||0;if(Lt.test(r)){const o=null===(n=null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout)||void 0===n?void 0:n.layoutBox[t];if(o){r=vo(o)*(parseFloat(r)/100)}}this.originPoint[t]=r})),null==i||i(t,e),null===(n=this.visualElement.animationState)||void 0===n||n.setActive(ve.Drag,!0))},onMove:(t,e)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:o,onDrag:i}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:a}=e;if(r&&null===this.currentDirection)return this.currentDirection=function(t,e=10){let n=null;Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x");return n}(a),void(null!==this.currentDirection&&(null==o||o(this.currentDirection)));this.updateAxis("x",e.point,a),this.updateAxis("y",e.point,a),this.visualElement.render(),null==i||i(t,e)},onSessionEnd:(t,e)=>this.stop(t,e)},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,e){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=e;this.startAnimation(r);const{onDragEnd:o}=this.getProps();null==o||o(t,e)}cancel(){var t,e;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),null===(t=this.panSession)||void 0===t||t.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),null===(e=this.visualElement.animationState)||void 0===e||e.setActive(ve.Drag,!1)}updateAxis(t,e,n){const{drag:r}=this.getProps();if(!n||!qo(t,r,this.currentDirection))return;const o=this.getAxisMotionValue(t);let i=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(i=function(t,{min:e,max:n},r){return void 0!==e&&t<e?t=r?Jn(e,t,r.min):Math.max(t,e):void 0!==n&&t>n&&(t=r?Jn(n,t,r.max):Math.min(t,n)),t}(i,this.constraints[t],this.elastic[t])),o.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:e}=this.getProps(),{layout:n}=this.visualElement.projection||{},r=this.constraints;t&&G(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!n)&&function(t,{top:e,left:n,bottom:r,right:o}){return{x:Co(t.x,n,o),y:Co(t.y,e,r)}}(n.layoutBox,t),this.elastic=function(t=Ao){return!1===t?t=0:!0===t&&(t=Ao),{x:To(t,"left","right"),y:To(t,"top","bottom")}}(e),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Mo((t=>{this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){const n={};return void 0!==e.min&&(n.min=e.min-t.min),void 0!==e.max&&(n.max=e.max-t.min),n}(n.layoutBox[t],this.constraints[t]))}))}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!G(t))return!1;const n=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=function(t,e,n){const r=Ho(t,n),{scroll:o}=e;return o&&(Uo(r.x,o.offset.x),Uo(r.y,o.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let i=function(t,e){return{x:Po(t.x,e.x),y:Po(t.y,e.y)}}(r.layout.layoutBox,o);if(e){const t=e(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(i));this.hasMutatedConstraints=!!t,t&&(i=Lo(t))}return i}startAnimation(t){const{drag:e,dragMomentum:n,dragElastic:r,dragTransition:o,dragSnapToOrigin:i,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=Mo((a=>{var l;if(!qo(a,e,this.currentDirection))return;let c=null!==(l=null==s?void 0:s[a])&&void 0!==l?l:{};i&&(c={min:0,max:0});const u=r?200:1e6,d=r?40:1e7,m={type:"inertia",velocity:n?t[a]:0,bounceStiffness:u,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...o,...c};return this.startAxisValueAnimation(a,m)}));return Promise.all(l).then(a)}startAxisValueAnimation(t,e){return Dr(t,this.getAxisMotionValue(t),0,e)}stopAnimation(){Mo((t=>this.getAxisMotionValue(t).stop()))}getAxisMotionValue(t){var e,n;const r="_drag"+t.toUpperCase(),o=this.visualElement.getProps()[r];return o||this.visualElement.getValue(t,null!==(n=null===(e=this.visualElement.getProps().initial)||void 0===e?void 0:e[t])&&void 0!==n?n:0)}snapToCursor(t){Mo((e=>{const{drag:n}=this.getProps();if(!qo(e,n,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(e);if(r&&r.layout){const{min:n,max:i}=r.layout.layoutBox[e];o.set(t[e]-Jn(n,i,.5))}}))}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!G(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Mo((t=>{const e=this.getAxisMotionValue(t);if(e){const n=e.get();o[t]=function(t,e){let n=.5;const r=vo(t),o=vo(e);return o>r?n=cr(e.min,e.max-r,t.min):r>o&&(n=cr(t.min,t.max-o,e.min)),Kn(0,1,n)}({min:n,max:n},this.constraints[t])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",null===(t=r.root)||void 0===t||t.updateScroll(),r.updateLayout(),this.resolveConstraints(),Mo((t=>{if(!qo(t,e,null))return;const n=this.getAxisMotionValue(t),{min:r,max:i}=this.constraints[t];n.set(Jn(r,i,o[t]))}))}addListeners(){var t;if(!this.visualElement.current)return;Go.set(this.visualElement,this);const e=Le(this.visualElement.current,"pointerdown",(t=>{const{drag:e,dragListener:n=!0}=this.getProps();e&&n&&this.start(t)})),n=()=>{const{dragConstraints:t}=this.getProps();G(t)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,o=r.addEventListener("measure",n);r&&!r.layout&&(null===(t=r.root)||void 0===t||t.updateScroll(),r.updateLayout()),n();const i=xe(window,"resize",(()=>this.scalePositionWithinConstraints())),a=r.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(Mo((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),o(),null==a||a()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:i=Ao,dragMomentum:a=!0}=t;return{...t,drag:e,dragDirectionLock:n,dragPropagation:r,dragConstraints:o,dragElastic:i,dragMomentum:a}}}function qo(t,e,n){return!(!0!==e&&e!==t||null!==n&&n!==t)}const Ko={pan:qe((function({onPan:t,onPanStart:e,onPanEnd:n,onPanSessionStart:o,visualElement:i}){const a=t||e||n||o,s=(0,r.useRef)(null),{transformPagePoint:l}=(0,r.useContext)(Y),c={onSessionStart:o,onStart:e,onMove:t,onEnd:(t,e)=>{s.current=null,n&&n(t,e)}};(0,r.useEffect)((()=>{null!==s.current&&s.current.updateHandlers(c)})),Oe(i,"pointerdown",a&&function(t){s.current=new uo(t,c,{transformPagePoint:l})}),I((()=>s.current&&s.current.end()))})),drag:qe((function(t){const{dragControls:e,visualElement:n}=t,o=R((()=>new Zo(n)));(0,r.useEffect)((()=>e&&e.subscribe(o)),[o,e]),(0,r.useEffect)((()=>o.addListeners()),[o])}))};function Jo(t){return"string"==typeof t&&t.startsWith("var(--")}const Qo=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function ti(t,e,n=1){const[r,o]=function(t){const e=Qo.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}(t);if(!r)return;const i=window.getComputedStyle(e).getPropertyValue(r);return i?i.trim():Jo(o)?ti(o,e,n+1):o}const ei=new Set(["width","height","top","left","right","bottom","x","y"]),ni=t=>ei.has(t),ri=(t,e)=>{t.set(e,!1),t.set(e)},oi=t=>t===Nt||t===Ot;var ii;!function(t){t.width="width",t.height="height",t.left="left",t.right="right",t.top="top",t.bottom="bottom"}(ii||(ii={}));const ai=(t,e)=>parseFloat(t.split(", ")[e]),si=(t,e)=>(n,{transform:r})=>{if("none"===r||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return ai(o[1],e);{const e=r.match(/^matrix\((.+)\)$/);return e?ai(e[1],t):0}},li=new Set(["x","y","z"]),ci=ft.filter((t=>!li.has(t)));const ui={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:si(4,13),y:si(5,14)},di=(t,e,n={},r={})=>{e={...e},r={...r};const o=Object.keys(e).filter(ni);let i=[],a=!1;const s=[];if(o.forEach((o=>{const l=t.getValue(o);if(!t.hasValue(o))return;let c=n[o],u=zr(c);const d=e[o];let m;if(de(d)){const t=d.length,e=null===d[0]?1:0;c=d[e],u=zr(c);for(let n=e;n<t;n++)m?zr(d[n]):(m=zr(d[n]),m===u||oi(u)&&oi(m))}else m=zr(d);if(u!==m)if(oi(u)&&oi(m)){const t=l.get();"string"==typeof t&&l.set(parseFloat(t)),"string"==typeof d?e[o]=parseFloat(d):Array.isArray(d)&&m===Ot&&(e[o]=d.map(parseFloat))}else(null==u?void 0:u.transform)&&(null==m?void 0:m.transform)&&(0===c||0===d)?0===c?l.set(m.transform(c)):e[o]=u.transform(d):(a||(i=function(t){const e=[];return ci.forEach((n=>{const r=t.getValue(n);void 0!==r&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),e.length&&t.render(),e}(t),a=!0),s.push(o),r[o]=void 0!==r[o]?r[o]:e[o],ri(l,d))})),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,o=((t,e,n)=>{const r=e.measureViewportBox(),o=e.current,i=getComputedStyle(o),{display:a}=i,s={};"none"===a&&e.setStaticValue("display",t.display||"block"),n.forEach((t=>{s[t]=ui[t](r,i)})),e.render();const l=e.measureViewportBox();return n.forEach((n=>{const r=e.getValue(n);ri(r,s[n]),t[n]=ui[n](l,i)})),t})(e,t,s);return i.length&&i.forEach((([e,n])=>{t.getValue(e).set(n)})),t.render(),V&&null!==n&&window.scrollTo({top:n}),{target:o,transitionEnd:r}}return{target:e,transitionEnd:r}};function mi(t,e,n,r){return(t=>Object.keys(t).some(ni))(e)?di(t,e,n,r):{target:e,transitionEnd:r}}const pi=(t,e,n,r)=>{const o=function(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach((t=>{const e=t.get();if(!Jo(e))return;const n=ti(e,r);n&&t.set(n)}));for(const o in e){const t=e[o];if(!Jo(t))continue;const i=ti(t,r);i&&(e[o]=i,n&&void 0===n[o]&&(n[o]=t))}return{target:e,transitionEnd:n}}(t,e,r);return mi(t,e=o.target,n,r=o.transitionEnd)},hi={current:null},fi={current:!1};const gi=Object.keys(rt),yi=gi.length,vi=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class xi{constructor({parent:t,props:e,reducedMotionConfig:n,visualState:r},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>T.render(this.render,!1,!0);const{latestValues:i,renderState:a}=r;this.latestValues=i,this.baseTarget={...i},this.initialValues=e.initial?{...i}:{},this.renderState=a,this.parent=t,this.props=e,this.depth=t?t.depth+1:0,this.reducedMotionConfig=n,this.options=o,this.isControllingVariants=J(e),this.isVariantNode=Q(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:s,...l}=this.scrapeMotionValuesFromProps(e);for(const c in l){const t=l[c];void 0!==i[c]&&vt(t)&&(t.set(i[c],!1),qr(s)&&s.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var e;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=null===(e=this.parent)||void 0===e?void 0:e.addVariantChild(this)),this.values.forEach(((t,e)=>this.bindToMotionValue(e,t))),fi.current||function(){if(fi.current=!0,V)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>hi.current=t.matches;t.addListener(e),e()}else hi.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||hi.current),this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,e,n;null===(t=this.projection)||void 0===t||t.unmount(),E.update(this.notifyUpdate),E.render(this.render),this.valueSubscriptions.forEach((t=>t())),null===(e=this.removeFromVariantTree)||void 0===e||e.call(this),null===(n=this.parent)||void 0===n||n.children.delete(this);for(const r in this.events)this.events[r].clear();this.current=null}bindToMotionValue(t,e){const n=gt.has(t),r=e.onChange((e=>{this.latestValues[t]=e,this.props.onUpdate&&T.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)})),o=e.onRenderRequest(this.scheduleRender);this.valueSubscriptions.set(t,(()=>{r(),o()}))}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}loadFeatures(t,e,n,o,i,a){const s=[];for(let l=0;l<yi;l++){const e=gi[l],{isEnabled:n,Component:o}=rt[e];n(t)&&o&&s.push((0,r.createElement)(o,{key:e,...t,visualElement:this}))}if(!this.projection&&i){this.projection=new i(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:n,drag:r,dragConstraints:s,layoutScroll:l}=t;this.projection.setOptions({layoutId:e,layout:n,alwaysMeasureLayout:Boolean(r)||s&&G(s),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"==typeof n?n:"both",initialPromotionConfig:a,layoutScroll:l})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}makeTargetAnimatable(t,e=!0){return this.makeTargetAnimatableFromInstance(t,this.props,e)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let e=0;e<vi.length;e++){const n=vi[e];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);const r=t["on"+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=function(t,e,n){const{willChange:r}=e;for(const o in e){const i=e[o],a=n[o];if(vt(i))t.addValue(o,i),qr(r)&&r.add(o);else if(vt(a))t.addValue(o,$r(i)),qr(r)&&r.remove(o);else if(a!==i)if(t.hasValue(o)){const e=t.getValue(o);!e.hasAnimated&&e.set(i)}else{const e=t.getStaticValue(o);t.addValue(o,$r(void 0!==e?e:i))}}for(const o in n)void 0===e[o]&&t.removeValue(o);return e}(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var e;return null===(e=this.props.variants)||void 0===e?void 0:e[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:null===(t=this.parent)||void 0===t?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var e,n;if(t)return null===(e=this.parent)||void 0===e?void 0:e.getVariantContext();if(!this.isControllingVariants){const t=(null===(n=this.parent)||void 0===n?void 0:n.getVariantContext())||{};return void 0!==this.props.initial&&(t.initial=this.props.initial),t}const r={};for(let o=0;o<wi;o++){const t=bi[o],e=this.props[t];(Z(e)||!1===e)&&(r[t]=e)}return r}addVariantChild(t){var e;const n=this.getClosestVariantNode();if(n)return null===(e=n.variantChildren)||void 0===e||e.add(t),()=>n.variantChildren.delete(t)}addValue(t,e){this.hasValue(t)&&this.removeValue(t),this.values.set(t,e),this.latestValues[t]=e.get(),this.bindToMotionValue(t,e)}removeValue(t){var e;this.values.delete(t),null===(e=this.valueSubscriptions.get(t))||void 0===e||e(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return void 0===n&&void 0!==e&&(n=$r(e),this.addValue(t,n)),n}readValue(t){return void 0===this.latestValues[t]&&this.current?this.readValueFromInstance(this.current,t,this.options):this.latestValues[t]}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:n}=this.props,r="string"==typeof n||"object"==typeof n?null===(e=ue(this.props,n))||void 0===e?void 0:e[t]:void 0;if(n&&void 0!==r)return r;const o=this.getBaseTargetFromProps(this.props,t);return void 0===o||vt(o)?void 0!==this.initialValues[t]&&void 0===r?void 0:this.baseTarget[t]:o}on(t,e){return this.events[t]||(this.events[t]=new Fr),this.events[t].add(e)}notify(t,...e){var n;null===(n=this.events[t])||void 0===n||n.notify(...e)}}const bi=["initial",...eo],wi=bi.length;class Ei extends xi{sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){var n;return null===(n=t.style)||void 0===n?void 0:n[e]}removeValueFromRenderState(t,{vars:e,style:n}){delete e[t],delete n[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:e,...n},{transformValues:r},o){let i=function(t,e,n){var r;const o={};for(const i in t){const t=Zr(i,e);o[i]=void 0!==t?t:null===(r=n.getValue(i))||void 0===r?void 0:r.get()}return o}(n,t||{},this);if(r&&(e&&(e=r(e)),n&&(n=r(n)),i&&(i=r(i))),o){!function(t,e,n){var r,o;const i=Object.keys(e).filter((e=>!t.hasValue(e))),a=i.length;if(a)for(let s=0;s<a;s++){const a=i[s],l=e[a];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(o=null!==(r=n[a])&&void 0!==r?r:t.readValue(a))&&void 0!==o?o:e[a]),null!=c&&("string"==typeof c&&(/^\-?\d*\.?\d+$/.test(c)||jr(c))?c=parseFloat(c):!Xr(c)&&Dn.test(l)&&(c=Gn(a,l)),t.addValue(a,$r(c)),void 0===n[a]&&(n[a]=c),null!==c&&t.setBaseTarget(a,c))}}(this,n,i);const t=pi(this,n,i,e);e=t.transitionEnd,n=t.target}return{transition:t,transitionEnd:e,...n}}}class ki extends Ei{readValueFromInstance(t,e){if(gt.has(e)){const t=Hn(e);return t&&t.default||0}{const r=(n=t,window.getComputedStyle(n)),o=(wt(e)?r.getPropertyValue(e):r[e])||0;return"string"==typeof o?o.trim():o}var n}measureInstanceViewportBox(t,{transformPagePoint:e}){return Ho(t,e)}build(t,e,n,r){_t(t,e,n,r.transformTemplate)}scrapeMotionValuesFromProps(t){return le(t)}renderInstance(t,e,n,r){ie(t,e,n,r)}}class Si extends Ei{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){var n;return gt.has(e)?(null===(n=Hn(e))||void 0===n?void 0:n.default)||0:(e=ae.has(e)?e:oe(e),t.getAttribute(e))}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(t){return ce(t)}build(t,e,n,r){Qt(t,e,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,e,n,r){se(t,e,0,r)}mount(t){this.isSVGTag=ee(t.tagName),super.mount(t)}}const Ci=(t,e)=>pt(t)?new Si(e,{enableHardwareAcceleration:!1}):new ki(e,{enableHardwareAcceleration:!0});function Pi(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ai={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t){if(!Ot.test(t))return t;t=parseFloat(t)}return`${Pi(t,e.target.x)}% ${Pi(t,e.target.y)}%`}},Ti="_$css",Vi={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,o=t.includes("var("),i=[];o&&(t=t.replace(Qo,(t=>(i.push(t),Ti))));const a=Dn.parse(t);if(a.length>5)return r;const s=Dn.createTransformer(t),l="number"!=typeof a[0]?1:0,c=n.x.scale*e.x,u=n.y.scale*e.y;a[0+l]/=c,a[1+l]/=u;const d=Jn(c,u,.5);"number"==typeof a[2+l]&&(a[2+l]/=d),"number"==typeof a[3+l]&&(a[3+l]/=d);let m=s(a);if(o){let t=0;m=m.replace(Ti,(()=>{const e=i[t];return t++,e}))}return m}};class Mi extends r.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:r}=this.props,{projection:o}=t;var i;i=Li,Object.assign(ht,i),o&&(e.group&&e.group.add(o),n&&n.register&&r&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",(()=>{this.safeToRemove()})),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ot.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:n,drag:r,isPresent:o}=this.props,i=n.projection;return i?(i.isPresent=o,r||t.layoutDependency!==e||void 0===e?i.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?i.promote():i.relegate()||T.postRender((()=>{var t;(null===(t=i.getStack())||void 0===t?void 0:t.members.length)||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),(null==e?void 0:e.group)&&e.group.remove(r),(null==n?void 0:n.deregister)&&n.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;null==t||t()}render(){return null}}const Li={borderRadius:{...Ai,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ai,borderTopRightRadius:Ai,borderBottomLeftRadius:Ai,borderBottomRightRadius:Ai,boxShadow:Vi},Oi={measureLayout:function(t){const[e,n]=Je(),o=(0,r.useContext)(F);return r.createElement(Mi,{...t,layoutGroup:o,switchLayoutGroup:(0,r.useContext)(st),isPresent:e,safeToRemove:n})}};const Ri=["TopLeft","TopRight","BottomLeft","BottomRight"],Di=Ri.length,ji=t=>"string"==typeof t?parseFloat(t):t,Ni=t=>"number"==typeof t||Ot.test(t);function Bi(t,e){var n;return null!==(n=t[e])&&void 0!==n?n:t.borderRadius}const Fi=$i(0,.5,dn),Ii=$i(.5,.95,en);function $i(t,e,n){return r=>r<t?0:r>e?1:n(cr(t,e,r))}function _i(t,e){t.min=e.min,t.max=e.max}function Ui(t,e){_i(t.x,e.x),_i(t.y,e.y)}function zi(t,e,n,r,o){return t=Bo(t-=e,1/n,r),void 0!==o&&(t=Bo(t,1/o,r)),t}function Yi(t,e,[n,r,o],i,a){!function(t,e=0,n=1,r=.5,o,i=t,a=t){Lt.test(e)&&(e=parseFloat(e),e=Jn(a.min,a.max,e/100)-a.min);if("number"!=typeof e)return;let s=Jn(i.min,i.max,r);t===i&&(s-=e),t.min=zi(t.min,e,n,s,o),t.max=zi(t.max,e,n,s,o)}(t,e[n],e[r],e[o],e.scale,i,a)}const Xi=["x","scaleX","originX"],Wi=["y","scaleY","originY"];function Hi(t,e,n,r){Yi(t.x,e,Xi,null==n?void 0:n.x,null==r?void 0:r.x),Yi(t.y,e,Wi,null==n?void 0:n.y,null==r?void 0:r.y)}function Gi(t){return 0===t.translate&&1===t.scale}function Zi(t){return Gi(t.x)&&Gi(t.y)}function qi(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Ki(t){return vo(t.x)/vo(t.y)}class Ji{constructor(){this.members=[]}add(t){Nr(this.members,t),t.scheduleRender()}remove(t){if(Br(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){const e=this.members.findIndex((e=>t===e));if(0===e)return!1;let n;for(let r=e;r>=0;r--){const t=this.members[r];if(!1!==t.isPresent){n=t;break}}return!!n&&(this.promote(n),!0)}promote(t,e){var n;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,e&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(null===(n=t.root)||void 0===n?void 0:n.isUpdating)&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;!1===o&&r.hide()}}exitAnimationComplete(){this.members.forEach((t=>{var e,n,r,o,i;null===(n=(e=t.options).onExitComplete)||void 0===n||n.call(e),null===(i=null===(r=t.resumingFrom)||void 0===r?void 0:(o=r.options).onExitComplete)||void 0===i||i.call(o)}))}scheduleRender(){this.members.forEach((t=>{t.instance&&t.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Qi(t,e,n){let r="";const o=t.x.translate/e.x,i=t.y.translate/e.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),1===e.x&&1===e.y||(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:t,rotateX:e,rotateY:o}=n;t&&(r+=`rotate(${t}deg) `),e&&(r+=`rotateX(${e}deg) `),o&&(r+=`rotateY(${o}deg) `)}const a=t.x.scale*e.x,s=t.y.scale*e.y;return 1===a&&1===s||(r+=`scale(${a}, ${s})`),r||"none"}const ta=(t,e)=>t.depth-e.depth;class ea{constructor(){this.children=[],this.isDirty=!1}add(t){Nr(this.children,t),this.isDirty=!0}remove(t){Br(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ta),this.isDirty=!1,this.children.forEach(t)}}const na=["","X","Y","Z"];let ra=0;function oa({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(t,n={},r=(null==e?void 0:e())){this.id=ra++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(sa),this.nodes.forEach(ma),this.nodes.forEach(pa)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=t,this.latestValues=n,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0,t&&this.root.registerPotentialNode(t,this);for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new ea)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new Fr),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){const n=this.eventHandlers.get(t);null==n||n.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}registerPotentialNode(t,e){this.potentialNodes.set(t,e)}mount(e,n=!1){var r;if(this.instance)return;this.isSVG=e instanceof SVGElement&&"svg"!==e.tagName,this.instance=e;const{layoutId:o,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),null===(r=this.parent)||void 0===r||r.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),n&&(i||o)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=qn(r,250),ot.hasAnimatedSinceResize&&(ot.hasAnimatedSinceResize=!1,this.nodes.forEach(da))}))}o&&this.root.registerSharedNode(o,this),!1!==this.options.animate&&a&&(o||i)&&this.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e,hasRelativeTargetChanged:n,layout:r})=>{var o,i,s,l,c;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const u=null!==(i=null!==(o=this.options.transition)&&void 0!==o?o:a.getDefaultTransition())&&void 0!==i?i:xa,{onLayoutAnimationStart:d,onLayoutAnimationComplete:m}=a.getProps(),p=!this.targetLayout||!qi(this.targetLayout,r)||n,h=!e&&n;if((null===(s=this.resumeFrom)||void 0===s?void 0:s.instance)||h||e&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,h);const e={...Rr(u,"layout"),onPlay:d,onComplete:m};a.shouldReduceMotion&&(e.delay=0,e.type=!1),this.startAnimation(e)}else e||0!==this.animationProgress||da(this),this.isLead()&&(null===(c=(l=this.options).onExitComplete)||void 0===c||c.call(l));this.targetLayout=r}))}unmount(){var t,e;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),null===(t=this.getStack())||void 0===t||t.remove(this),null===(e=this.parent)||void 0===e||e.children.delete(this),this.instance=void 0,E.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var t;return this.isAnimationBlocked||(null===(t=this.parent)||void 0===t?void 0:t.isTreeAnimationBlocked())||!1}startUpdate(){var t;this.isUpdateBlocked()||(this.isUpdating=!0,null===(t=this.nodes)||void 0===t||t.forEach(ha),this.animationId++)}willUpdate(t=!0){var e,n,r;if(this.root.isUpdateBlocked())return void(null===(n=(e=this.options).onExitComplete)||void 0===n||n.call(e));if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let s=0;s<this.path.length;s++){const t=this.path[s];t.shouldResetTransform=!0,t.updateScroll("snapshot")}const{layoutId:o,layout:i}=this.options;if(void 0===o&&!i)return;const a=null===(r=this.options.visualElement)||void 0===r?void 0:r.getProps().transformTemplate;this.prevTransformTemplateValue=null==a?void 0:a(this.latestValues,""),this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(ca);this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(ba),this.potentialNodes.clear()),this.nodes.forEach(ua),this.nodes.forEach(ia),this.nodes.forEach(aa),this.clearAllSnapshots(),k.update(),k.preRender(),k.render())}clearAllSnapshots(){this.nodes.forEach(la),this.sharedNodes.forEach(fa)}scheduleUpdateProjection(){T.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){T.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){var t;if(!this.instance)return;if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),null===(t=this.options.visualElement)||void 0===t||t.notify("LayoutMeasure",this.layout.layoutBox,null==e?void 0:e.layoutBox)}updateScroll(t="measure"){let e=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&(this.scroll={animationId:this.root.animationId,phase:t,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var t;if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform,n=this.projectionDelta&&!Zi(this.projectionDelta),r=null===(t=this.options.visualElement)||void 0===t?void 0:t.getProps().transformTemplate,i=null==r?void 0:r(this.latestValues,""),a=i!==this.prevTransformTemplateValue;e&&(n||Do(this.latestValues)||a)&&(o(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){const e=this.measurePageBox();let n=this.removeElementScroll(e);var r;return t&&(n=this.removeTransform(n)),wa((r=n).x),wa(r.y),{animationId:this.root.animationId,measuredBox:e,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:t}=this.options;if(!t)return{x:{min:0,max:0},y:{min:0,max:0}};const e=t.measureViewportBox(),{scroll:n}=this.root;return n&&(Uo(e.x,n.offset.x),Uo(e.y,n.offset.y)),e}removeElementScroll(t){const e={x:{min:0,max:0},y:{min:0,max:0}};Ui(e,t);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:o,options:i}=r;if(r!==this.root&&o&&i.layoutScroll){if(o.isRoot){Ui(e,t);const{scroll:n}=this.root;n&&(Uo(e.x,-n.offset.x),Uo(e.y,-n.offset.y))}Uo(e.x,o.offset.x),Uo(e.y,o.offset.y)}}return e}applyTransform(t,e=!1){const n={x:{min:0,max:0},y:{min:0,max:0}};Ui(n,t);for(let r=0;r<this.path.length;r++){const t=this.path[r];!e&&t.options.layoutScroll&&t.scroll&&t!==t.root&&Wo(n,{x:-t.scroll.offset.x,y:-t.scroll.offset.y}),Do(t.latestValues)&&Wo(n,t.latestValues)}return Do(this.latestValues)&&Wo(n,this.latestValues),n}removeTransform(t){var e;const n={x:{min:0,max:0},y:{min:0,max:0}};Ui(n,t);for(let r=0;r<this.path.length;r++){const t=this.path[r];if(!t.instance)continue;if(!Do(t.latestValues))continue;Ro(t.latestValues)&&t.updateSnapshot();const o={x:{min:0,max:0},y:{min:0,max:0}};Ui(o,t.measurePageBox()),Hi(n,t.latestValues,null===(e=t.snapshot)||void 0===e?void 0:e.layoutBox,o)}return Do(this.latestValues)&&Hi(n,this.latestValues),n}setTargetDelta(t){this.targetDelta=t,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var t;const e=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=e.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=e.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:n,layoutId:r}=this.options;if(this.layout&&(n||r)){if(!this.targetDelta&&!this.relativeTarget){const t=this.getClosestProjectingParent();t&&t.layout?(this.relativeParent=t,this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},So(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),Ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}var o,i,a;if(this.relativeTarget||this.targetDelta)if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&(null===(t=this.relativeParent)||void 0===t?void 0:t.target)?(o=this.target,i=this.relativeTarget,a=this.relativeParent.target,Eo(o.x,i.x,a.x),Eo(o.y,i.y,a.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Ui(this.target,this.layout.layoutBox),$o(this.target,this.targetDelta)):Ui(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const t=this.getClosestProjectingParent();t&&Boolean(t.resumingFrom)===Boolean(this.resumingFrom)&&!t.options.layoutScroll&&t.target?(this.relativeParent=t,this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},So(this.relativeTargetOrigin,this.target,t.target),Ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(this.parent&&!Ro(this.parent.latestValues)&&!jo(this.parent.latestValues))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var t;const{isProjectionDirty:e,isTransformDirty:n}=this;this.isProjectionDirty=this.isTransformDirty=!1;const r=this.getLead(),o=Boolean(this.resumingFrom)||this!==r;let i=!0;if(e&&(i=!1),o&&n&&(i=!1),i)return;const{layout:a,layoutId:s}=this.options;if(this.isTreeAnimating=Boolean((null===(t=this.parent)||void 0===t?void 0:t.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!a&&!s)return;Ui(this.layoutCorrected,this.layout.layoutBox),function(t,e,n,r=!1){var o,i;const a=n.length;if(!a)return;let s,l;e.x=e.y=1;for(let c=0;c<a;c++)s=n[c],l=s.projectionDelta,"contents"!==(null===(i=null===(o=s.instance)||void 0===o?void 0:o.style)||void 0===i?void 0:i.display)&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Wo(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(e.x*=l.x.scale,e.y*=l.y.scale,$o(t,l)),r&&Do(s.latestValues)&&Wo(t,s.latestValues));e.x=_o(e.x),e.y=_o(e.y)}(this.layoutCorrected,this.treeScale,this.path,o);const{target:l}=r;if(!l)return;this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.treeScale.x,u=this.treeScale.y,d=this.projectionTransform;wo(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=Qi(this.projectionDelta,this.treeScale),this.projectionTransform===d&&this.treeScale.x===c&&this.treeScale.y===u||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){var e,n,r;null===(n=(e=this.options).scheduleRender)||void 0===n||n.call(e),t&&(null===(r=this.getStack())||void 0===r||r.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(t,e=!1){var n,r;const o=this.snapshot,i=(null==o?void 0:o.latestValues)||{},a={...this.latestValues},s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!e;const l={x:{min:0,max:0},y:{min:0,max:0}},c=(null==o?void 0:o.source)!==(null===(n=this.layout)||void 0===n?void 0:n.source),u=((null===(r=this.getStack())||void 0===r?void 0:r.members.length)||0)<=1,d=Boolean(c&&!u&&!0===this.options.crossfade&&!this.path.some(va));this.animationProgress=0,this.mixTargetDelta=e=>{var n;const r=e/1e3;ga(s.x,t.x,r),ga(s.y,t.y,r),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&(null===(n=this.relativeParent)||void 0===n?void 0:n.layout)&&(So(l,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(t,e,n,r){ya(t.x,e.x,n.x,r),ya(t.y,e.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,l,r)),c&&(this.animationValues=a,function(t,e,n,r,o,i){var a,s,l,c;o?(t.opacity=Jn(0,null!==(a=n.opacity)&&void 0!==a?a:1,Fi(r)),t.opacityExit=Jn(null!==(s=e.opacity)&&void 0!==s?s:1,0,Ii(r))):i&&(t.opacity=Jn(null!==(l=e.opacity)&&void 0!==l?l:1,null!==(c=n.opacity)&&void 0!==c?c:1,r));for(let u=0;u<Di;u++){const o=`border${Ri[u]}Radius`;let i=Bi(e,o),a=Bi(n,o);void 0===i&&void 0===a||(i||(i=0),a||(a=0),0===i||0===a||Ni(i)===Ni(a)?(t[o]=Math.max(Jn(ji(i),ji(a),r),0),(Lt.test(a)||Lt.test(i))&&(t[o]+="%")):t[o]=a)}(e.rotate||n.rotate)&&(t.rotate=Jn(e.rotate||0,n.rotate||0,r))}(a,i,this.latestValues,r,d,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r},this.mixTargetDelta(0)}startAnimation(t){var e,n;this.notifyListeners("animationStart"),null===(e=this.currentAnimation)||void 0===e||e.stop(),this.resumingFrom&&(null===(n=this.resumingFrom.currentAnimation)||void 0===n||n.stop()),this.pendingAnimation&&(E.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=T.update((()=>{ot.hasAnimatedSinceResize=!0,this.currentAnimation=function(t,e,n={}){const r=vt(t)?t:$r(t);return Dr("",r,e,n),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}(0,1e3,{...t,onUpdate:e=>{var n;this.mixTargetDelta(e),null===(n=t.onUpdate)||void 0===n||n.call(t,e)},onComplete:()=>{var e;null===(e=t.onComplete)||void 0===e||e.call(t),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){var t;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),null===(t=this.getStack())||void 0===t||t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var t;this.currentAnimation&&(null===(t=this.mixTargetDelta)||void 0===t||t.call(this,1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const t=this.getLead();let{targetWithTransforms:e,target:n,layout:r,latestValues:o}=t;if(e&&n&&r){if(this!==t&&this.layout&&r&&Ea(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const e=vo(this.layout.layoutBox.x);n.x.min=t.target.x.min,n.x.max=n.x.min+e;const r=vo(this.layout.layoutBox.y);n.y.min=t.target.y.min,n.y.max=n.y.min+r}Ui(e,n),Wo(e,o),wo(this.projectionDeltaWithTransform,this.layoutCorrected,e,o)}}registerSharedNode(t,e){var n,r,o;this.sharedNodes.has(t)||this.sharedNodes.set(t,new Ji);this.sharedNodes.get(t).add(e),e.promote({transition:null===(n=e.options.initialPromotionConfig)||void 0===n?void 0:n.transition,preserveFollowOpacity:null===(o=null===(r=e.options.initialPromotionConfig)||void 0===r?void 0:r.shouldPreserveFollowOpacity)||void 0===o?void 0:o.call(r,e)})}isLead(){const t=this.getStack();return!t||t.lead===this}getLead(){var t;const{layoutId:e}=this.options;return e&&(null===(t=this.getStack())||void 0===t?void 0:t.lead)||this}getPrevLead(){var t;const{layoutId:e}=this.options;return e?null===(t=this.getStack())||void 0===t?void 0:t.prevLead:void 0}getStack(){const{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:n}={}){const r=this.getStack();r&&r.promote(this,n),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){const t=this.getStack();return!!t&&t.relegate(this)}resetRotation(){const{visualElement:t}=this.options;if(!t)return;let e=!1;const{latestValues:n}=t;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(e=!0),!e)return;const r={};for(let o=0;o<na.length;o++){const e="rotate"+na[o];n[e]&&(r[e]=n[e],t.setStaticValue(e,0))}null==t||t.render();for(const o in r)t.setStaticValue(o,r[o]);t.scheduleRender()}getProjectionStyles(t={}){var e,n,r;const o={};if(!this.instance||this.isSVG)return o;if(!this.isVisible)return{visibility:"hidden"};o.visibility="";const i=null===(e=this.options.visualElement)||void 0===e?void 0:e.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,o.opacity="",o.pointerEvents=pe(t.pointerEvents)||"",o.transform=i?i(this.latestValues,""):"none",o;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const e={};return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=pe(t.pointerEvents)||""),this.hasProjected&&!Do(this.latestValues)&&(e.transform=i?i({},""):"none",this.hasProjected=!1),e}const s=a.animationValues||a.latestValues;this.applyTransformsToTarget(),o.transform=Qi(this.projectionDeltaWithTransform,this.treeScale,s),i&&(o.transform=i(s,o.transform));const{x:l,y:c}=this.projectionDelta;o.transformOrigin=`${100*l.origin}% ${100*c.origin}% 0`,a.animationValues?o.opacity=a===this?null!==(r=null!==(n=s.opacity)&&void 0!==n?n:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:o.opacity=a===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0;for(const u in ht){if(void 0===s[u])continue;const{correct:t,applyTo:e}=ht[u],n=t(s[u],a);if(e){const t=e.length;for(let r=0;r<t;r++)o[e[r]]=n}else o[u]=n}return this.options.layoutId&&(o.pointerEvents=a===this?pe(t.pointerEvents)||"":"none"),o}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((t=>{var e;return null===(e=t.currentAnimation)||void 0===e?void 0:e.stop()})),this.root.nodes.forEach(ca),this.root.sharedNodes.clear()}}}function ia(t){t.updateLayout()}function aa(t){var e,n,r;const o=(null===(e=t.resumeFrom)||void 0===e?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&o&&t.hasListeners("didUpdate")){const{layoutBox:e,measuredBox:n}=t.layout,{animationType:r}=t.options,i=o.source!==t.layout.source;"size"===r?Mo((t=>{const n=i?o.measuredBox[t]:o.layoutBox[t],r=vo(n);n.min=e[t].min,n.max=n.min+r})):Ea(r,o.layoutBox,e)&&Mo((t=>{const n=i?o.measuredBox[t]:o.layoutBox[t],r=vo(e[t]);n.max=n.min+r}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};wo(a,e,o.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};i?wo(s,t.applyTransform(n,!0),o.measuredBox):wo(s,e,o.layoutBox);const l=!Zi(a);let c=!1;if(!t.resumeFrom){const n=t.getClosestProjectingParent();if(n&&!n.resumeFrom){const{snapshot:t,layout:r}=n;if(t&&r){const n={x:{min:0,max:0},y:{min:0,max:0}};So(n,o.layoutBox,t.layoutBox);const i={x:{min:0,max:0},y:{min:0,max:0}};So(i,e,r.layoutBox),qi(n,i)||(c=!0)}}}t.notifyListeners("didUpdate",{layout:e,snapshot:o,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else t.isLead()&&(null===(r=(n=t.options).onExitComplete)||void 0===r||r.call(n));t.options.transition=void 0}function sa(t){t.isProjectionDirty||(t.isProjectionDirty=Boolean(t.parent&&t.parent.isProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=Boolean(t.parent&&t.parent.isTransformDirty))}function la(t){t.clearSnapshot()}function ca(t){t.clearMeasurements()}function ua(t){const{visualElement:e}=t.options;(null==e?void 0:e.getProps().onBeforeLayoutMeasure)&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function da(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0}function ma(t){t.resolveTargetDelta()}function pa(t){t.calcProjection()}function ha(t){t.resetRotation()}function fa(t){t.removeLeadSnapshot()}function ga(t,e,n){t.translate=Jn(e.translate,0,n),t.scale=Jn(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function ya(t,e,n,r){t.min=Jn(e.min,n.min,r),t.max=Jn(e.max,n.max,r)}function va(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}const xa={duration:.45,ease:[.4,0,.1,1]};function ba(t,e){let n=t.root;for(let o=t.path.length-1;o>=0;o--)if(Boolean(t.path[o].instance)){n=t.path[o];break}const r=(n&&n!==t.root?n.instance:document).querySelector(`[data-projection-id="${e}"]`);r&&t.mount(r,!0)}function wa(t){t.min=Math.round(t.min),t.max=Math.round(t.max)}function Ea(t,e,n){return"position"===t||"preserve-aspect"===t&&!xo(Ki(e),Ki(n),.2)}const ka=oa({attachResizeListener:(t,e)=>xe(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sa={current:void 0},Ca=oa({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Sa.current){const t=new ka(0,{});t.mount(window),t.setOptions({layoutScroll:!0}),Sa.current=t}return Sa.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>Boolean("fixed"===window.getComputedStyle(t).position)}),Pa={...lo,...Ke,...Ko,...Oi},Aa=dt(((t,e)=>function(t,{forwardMotionProps:e=!1},n,r,o){return{...pt(t)?ge:ye,preloadedFeatures:n,useRender:re(e),createVisualElement:r,projectionNodeConstructor:o,Component:t}}(t,e,Pa,Ci,Ca)));var Ta=t=>{let{children:e,location:n}=t;return r.createElement(r.Fragment,null,r.createElement(l,{location:n}),r.createElement(z,null,r.createElement(Aa.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},r.createElement("main",null,e))),r.createElement(d,null))}},9357:function(t,e,n){"use strict";var r=n(7294),o=n(1883);e.Z=function(t){var e,n,i,a;let{description:s,title:l,keywords:c,image:u,children:d}=t;const{site:m}=(0,o.useStaticQuery)("143701507"),p=s||m.siteMetadata.description,h=null===(e=m.siteMetadata)||void 0===e?void 0:e.title,f=c?null===(n=m.siteMetadata)||void 0===n?void 0:n.keywords.concat(", ",c):null===(i=m.siteMetadata)||void 0===i?void 0:i.keywords;return r.createElement(r.Fragment,null,r.createElement("title",null,l?l+" | "+h:""+h),r.createElement("meta",{name:"description",content:p}),r.createElement("meta",{name:"keywords",content:f}),r.createElement("meta",{property:"og:title",content:l?l+" | "+h:""+h}),r.createElement("meta",{property:"og:description",content:p}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:"https:"+u}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:l?l+" | "+h:""+h}),r.createElement("meta",{name:"twitter:description",content:p}),r.createElement("meta",{property:"twitter:image",content:"https:"+u}),d)}},2530:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(7294);function o(){const t="undefined"!=typeof window,[e,n]=r.useState({width:t?window.innerWidth:1200,height:t?window.innerHeight:800});function o(){n({width:window.innerWidth,height:window.innerHeight})}return r.useEffect((()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),e}},8679:function(t,e,n){"use strict";var r=n(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(t){return r.isMemo(t)?a:s[t.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(h){var o=p(n);o&&o!==h&&t(e,o,r)}var a=u(n);d&&(a=a.concat(d(n)));for(var s=l(e),f=l(n),g=0;g<a.length;++g){var y=a[g];if(!(i[y]||r&&r[y]||f&&f[y]||s&&s[y])){var v=m(n,y);try{c(e,y,v)}catch(x){}}}}return e}},4415:function(t,e){"use strict";var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function y(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case i:case s:case a:case m:case p:return t;default:switch(t=t&&t.$$typeof){case u:case c:case d:case f:case h:case l:return t;default:return e}}case o:return e}}}n=Symbol.for("react.module.reference"),e.isFragment=function(t){return y(t)===i}},4954:function(t,e,n){"use strict";t.exports=n(4415)},4405:function(t,e,n){"use strict";n.d(e,{w_:function(){return c}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function l(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),l(t.child))}))}function c(t){return function(e){return r.createElement(u,a({attr:a({},t.attr)},e),l(t.child))}}function u(t){var e=function(e){var n,o=t.attr,i=t.size,l=t.title,c=s(t,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,c,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},9921:function(t,e){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,x=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case u:case d:case i:case s:case a:case p:return t;default:switch(t=t&&t.$$typeof){case c:case m:case g:case f:case l:return t;default:return e}}case o:return e}}}function E(t){return w(t)===d}e.AsyncMode=u,e.ConcurrentMode=d,e.ContextConsumer=c,e.ContextProvider=l,e.Element=r,e.ForwardRef=m,e.Fragment=i,e.Lazy=g,e.Memo=f,e.Portal=o,e.Profiler=s,e.StrictMode=a,e.Suspense=p,e.isAsyncMode=function(t){return E(t)||w(t)===u},e.isConcurrentMode=E,e.isContextConsumer=function(t){return w(t)===c},e.isContextProvider=function(t){return w(t)===l},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return w(t)===m},e.isFragment=function(t){return w(t)===i},e.isLazy=function(t){return w(t)===g},e.isMemo=function(t){return w(t)===f},e.isPortal=function(t){return w(t)===o},e.isProfiler=function(t){return w(t)===s},e.isStrictMode=function(t){return w(t)===a},e.isSuspense=function(t){return w(t)===p},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===d||t===s||t===a||t===p||t===h||"object"==typeof t&&null!==t&&(t.$$typeof===g||t.$$typeof===f||t.$$typeof===l||t.$$typeof===c||t.$$typeof===m||t.$$typeof===v||t.$$typeof===x||t.$$typeof===b||t.$$typeof===y)},e.typeOf=w},9864:function(t,e,n){"use strict";t.exports=n(9921)},8416:function(t,e,n){var r=n(4062);t.exports=function(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},434:function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},5036:function(t,e,n){var r=n(8698).default;t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},4062:function(t,e,n){var r=n(8698).default,o=n(5036);t.exports=function(t){var e=o(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},8421:function(t,e,n){"use strict";n.d(e,{pT:function(){return Me}});var r=n(7294),o=n.t(r,2);var i=function(){function t(t){var e=this;this._insertTag=function(t){var n;n=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,n),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{n.insertRule(t,n.cssRules.length)}catch(r){0}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)})),this.tags=[],this.ctr=0},t}(),a=Math.abs,s=String.fromCharCode,l=Object.assign;function c(t){return t.trim()}function u(t,e,n){return t.replace(e,n)}function d(t,e){return t.indexOf(e)}function m(t,e){return 0|t.charCodeAt(e)}function p(t,e,n){return t.slice(e,n)}function h(t){return t.length}function f(t){return t.length}function g(t,e){return e.push(t),t}var y=1,v=1,x=0,b=0,w=0,E="";function k(t,e,n,r,o,i,a){return{value:t,root:e,parent:n,type:r,props:o,children:i,line:y,column:v,length:a,return:""}}function S(t,e){return l(k("",null,null,"",null,null,0),t,{length:-t.length},e)}function C(){return w=b>0?m(E,--b):0,v--,10===w&&(v=1,y--),w}function P(){return w=b<x?m(E,b++):0,v++,10===w&&(v=1,y++),w}function A(){return m(E,b)}function T(){return b}function V(t,e){return p(E,t,e)}function M(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L(t){return y=v=1,x=h(E=t),b=0,[]}function O(t){return E="",t}function R(t){return c(V(b-1,N(91===t?t+2:40===t?t+1:t)))}function D(t){for(;(w=A())&&w<33;)P();return M(t)>2||M(w)>3?"":" "}function j(t,e){for(;--e&&P()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return V(t,T()+(e<6&&32==A()&&32==P()))}function N(t){for(;P();)switch(w){case t:return b;case 34:case 39:34!==t&&39!==t&&N(w);break;case 40:41===t&&N(t);break;case 92:P()}return b}function B(t,e){for(;P()&&t+w!==57&&(t+w!==84||47!==A()););return"/*"+V(e,b-1)+"*"+s(47===t?t:P())}function F(t){for(;!M(A());)P();return V(t,b)}var I="-ms-",$="-moz-",_="-webkit-",U="comm",z="rule",Y="decl",X="@keyframes";function W(t,e){for(var n="",r=f(t),o=0;o<r;o++)n+=e(t[o],o,t,e)||"";return n}function H(t,e,n,r){switch(t.type){case"@import":case Y:return t.return=t.return||t.value;case U:return"";case X:return t.return=t.value+"{"+W(t.children,r)+"}";case z:t.value=t.props.join(",")}return h(n=W(t.children,r))?t.return=t.value+"{"+n+"}":""}function G(t){return O(Z("",null,null,null,[""],t=L(t),0,[0],t))}function Z(t,e,n,r,o,i,a,l,c){for(var p=0,f=0,y=a,v=0,x=0,b=0,w=1,E=1,k=1,S=0,V="",M=o,L=i,O=r,N=V;E;)switch(b=S,S=P()){case 40:if(108!=b&&58==m(N,y-1)){-1!=d(N+=u(R(S),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:N+=R(S);break;case 9:case 10:case 13:case 32:N+=D(b);break;case 92:N+=j(T()-1,7);continue;case 47:switch(A()){case 42:case 47:g(K(B(P(),T()),e,n),c);break;default:N+="/"}break;case 123*w:l[p++]=h(N)*k;case 125*w:case 59:case 0:switch(S){case 0:case 125:E=0;case 59+f:x>0&&h(N)-y&&g(x>32?J(N+";",r,n,y-1):J(u(N," ","")+";",r,n,y-2),c);break;case 59:N+=";";default:if(g(O=q(N,e,n,p,f,o,l,V,M=[],L=[],y),i),123===S)if(0===f)Z(N,e,O,O,M,i,y,l,L);else switch(99===v&&110===m(N,3)?100:v){case 100:case 109:case 115:Z(t,O,O,r&&g(q(t,O,O,0,0,o,l,V,o,M=[],y),L),o,L,y,l,r?M:L);break;default:Z(N,O,O,O,[""],L,0,l,L)}}p=f=x=0,w=k=1,V=N="",y=a;break;case 58:y=1+h(N),x=b;default:if(w<1)if(123==S)--w;else if(125==S&&0==w++&&125==C())continue;switch(N+=s(S),S*w){case 38:k=f>0?1:(N+="\f",-1);break;case 44:l[p++]=(h(N)-1)*k,k=1;break;case 64:45===A()&&(N+=R(P())),v=A(),f=y=h(V=N+=F(T())),S++;break;case 45:45===b&&2==h(N)&&(w=0)}}return i}function q(t,e,n,r,o,i,s,l,d,m,h){for(var g=o-1,y=0===o?i:[""],v=f(y),x=0,b=0,w=0;x<r;++x)for(var E=0,S=p(t,g+1,g=a(b=s[x])),C=t;E<v;++E)(C=c(b>0?y[E]+" "+S:u(S,/&\f/g,y[E])))&&(d[w++]=C);return k(t,e,n,0===o?z:l,d,m,h)}function K(t,e,n){return k(t,e,n,U,s(w),p(t,2,-2),0)}function J(t,e,n,r){return k(t,e,n,Y,p(t,0,r),p(t,r+1,-1),r)}var Q=function(t,e,n){for(var r=0,o=0;r=o,o=A(),38===r&&12===o&&(e[n]=1),!M(o);)P();return V(t,b)},tt=function(t,e){return O(function(t,e){var n=-1,r=44;do{switch(M(r)){case 0:38===r&&12===A()&&(e[n]=1),t[n]+=Q(b-1,e,n);break;case 2:t[n]+=R(r);break;case 4:if(44===r){t[++n]=58===A()?"&\f":"",e[n]=t[n].length;break}default:t[n]+=s(r)}}while(r=P());return t}(L(t),e))},et=new WeakMap,nt=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,n=t.parent,r=t.column===n.column&&t.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||et.get(n))&&!r){et.set(t,!0);for(var o=[],i=tt(e,o),a=n.props,s=0,l=0;s<i.length;s++)for(var c=0;c<a.length;c++,l++)t.props[l]=o[s]?i[s].replace(/&\f/g,a[c]):a[c]+" "+i[s]}}},rt=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function ot(t,e){switch(function(t,e){return 45^m(t,0)?(((e<<2^m(t,0))<<2^m(t,1))<<2^m(t,2))<<2^m(t,3):0}(t,e)){case 5103:return _+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return _+t+$+t+I+t+t;case 6828:case 4268:return _+t+I+t+t;case 6165:return _+t+I+"flex-"+t+t;case 5187:return _+t+u(t,/(\w+).+(:[^]+)/,_+"box-$1$2"+I+"flex-$1$2")+t;case 5443:return _+t+I+"flex-item-"+u(t,/flex-|-self/,"")+t;case 4675:return _+t+I+"flex-line-pack"+u(t,/align-content|flex-|-self/,"")+t;case 5548:return _+t+I+u(t,"shrink","negative")+t;case 5292:return _+t+I+u(t,"basis","preferred-size")+t;case 6060:return _+"box-"+u(t,"-grow","")+_+t+I+u(t,"grow","positive")+t;case 4554:return _+u(t,/([^-])(transform)/g,"$1"+_+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,_+"$1"),/(image-set)/,_+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,_+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,_+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_+t+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,_+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(t)-1-e>6)switch(m(t,e+1)){case 109:if(45!==m(t,e+4))break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+_+"$2-$3$1"+$+(108==m(t,e+3)?"$3":"$2-$3"))+t;case 115:return~d(t,"stretch")?ot(u(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==m(t,e+1))break;case 6444:switch(m(t,h(t)-3-(~d(t,"!important")&&10))){case 107:return u(t,":",":"+_)+t;case 101:return u(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+_+(45===m(t,14)?"inline-":"")+"box$3$1"+_+"$2$3$1"+I+"$2box$3")+t}break;case 5936:switch(m(t,e+11)){case 114:return _+t+I+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return _+t+I+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return _+t+I+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return _+t+I+t+t}return t}var it=[function(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Y:t.return=ot(t.value,t.length);break;case X:return W([S(t,{value:u(t.value,"@","@"+_)})],r);case z:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t,e){return(t=e.exec(t))?t[0]:t}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([S(t,{props:[u(e,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return W([S(t,{props:[u(e,/:(plac\w+)/,":"+_+"input-$1")]}),S(t,{props:[u(e,/:(plac\w+)/,":-moz-$1")]}),S(t,{props:[u(e,/:(plac\w+)/,I+"input-$1")]})],r)}return""}))}}],at=function(t){var e=t.key;if("css"===e){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var r=t.stylisPlugins||it;var o,a,s={},l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),n=1;n<e.length;n++)s[e[n]]=!0;l.push(t)}));var c,u,d,m,p=[H,(m=function(t){c.insert(t)},function(t){t.root||(t=t.return)&&m(t)})],h=(u=[nt,rt].concat(r,p),d=f(u),function(t,e,n,r){for(var o="",i=0;i<d;i++)o+=u[i](t,e,n,r)||"";return o});a=function(t,e,n,r){c=n,W(G(t?t+"{"+e.styles+"}":e.styles),h),r&&(g.inserted[e.name]=!0)};var g={key:e,sheet:new i({key:e,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:a};return g.sheet.hydrate(l),g};function st(t,e,n){var r="";return n.split(" ").forEach((function(n){void 0!==t[n]?e.push(t[n]+";"):r+=n+" "})),r}var lt=function(t,e,n){var r=t.key+"-"+e.name;!1===n&&void 0===t.registered[r]&&(t.registered[r]=e.styles)},ct=function(t,e,n){lt(t,e,n);var r=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var o=e;do{t.insert(e===o?"."+r:"",o,t.sheet,!0);o=o.next}while(void 0!==o)}};var ut=function(t){for(var e,n=0,r=0,o=t.length;o>=4;++r,o-=4)e=1540483477*(65535&(e=255&t.charCodeAt(r)|(255&t.charCodeAt(++r))<<8|(255&t.charCodeAt(++r))<<16|(255&t.charCodeAt(++r))<<24))+(59797*(e>>>16)<<16),n=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&t.charCodeAt(r+2))<<16;case 2:n^=(255&t.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&t.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},dt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var mt=/[A-Z]|^ms/g,pt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ht=function(t){return 45===t.charCodeAt(1)},ft=function(t){return null!=t&&"boolean"!=typeof t},gt=function(t){var e=Object.create(null);return function(n){return void 0===e[n]&&(e[n]=t(n)),e[n]}}((function(t){return ht(t)?t:t.replace(mt,"-$&").toLowerCase()})),yt=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(pt,(function(t,e,n){return xt={name:e,styles:n,next:xt},e}))}return 1===dt[t]||ht(t)||"number"!=typeof e||0===e?e:e+"px"};function vt(t,e,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return xt={name:n.name,styles:n.styles,next:xt},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)xt={name:r.name,styles:r.styles,next:xt},r=r.next;return n.styles+";"}return function(t,e,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=vt(t,e,n[o])+";";else for(var i in n){var a=n[i];if("object"!=typeof a)null!=e&&void 0!==e[a]?r+=i+"{"+e[a]+"}":ft(a)&&(r+=gt(i)+":"+yt(i,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=e&&void 0!==e[a[0]]){var s=vt(t,e,a);switch(i){case"animation":case"animationName":r+=gt(i)+":"+s+";";break;default:r+=i+"{"+s+"}"}}else for(var l=0;l<a.length;l++)ft(a[l])&&(r+=gt(i)+":"+yt(i,a[l])+";")}return r}(t,e,n);case"function":if(void 0!==t){var o=xt,i=n(t);return xt=o,vt(t,e,i)}}if(null==e)return n;var a=e[n];return void 0!==a?a:n}var xt,bt=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var wt=function(t,e,n){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var r=!0,o="";xt=void 0;var i=t[0];null==i||void 0===i.raw?(r=!1,o+=vt(n,e,i)):o+=i[0];for(var a=1;a<t.length;a++)o+=vt(n,e,t[a]),r&&(o+=i[a]);bt.lastIndex=0;for(var s,l="";null!==(s=bt.exec(o));)l+="-"+s[1];return{name:ut(o)+l,styles:o,next:xt}},Et=!!o.useInsertionEffect&&o.useInsertionEffect,kt=Et||function(t){return t()},St=(Et||r.useLayoutEffect,{}.hasOwnProperty),Ct=(0,r.createContext)("undefined"!=typeof HTMLElement?at({key:"css"}):null);Ct.Provider;var Pt=function(t){return(0,r.forwardRef)((function(e,n){var o=(0,r.useContext)(Ct);return t(e,o,n)}))},At=(0,r.createContext)({});var Tt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Vt=function(t){var e=t.cache,n=t.serialized,r=t.isStringTag;lt(e,n,r);kt((function(){return ct(e,n,r)}));return null},Mt=Pt((function(t,e,n){var o=t.css;"string"==typeof o&&void 0!==e.registered[o]&&(o=e.registered[o]);var i=t[Tt],a=[o],s="";"string"==typeof t.className?s=st(e.registered,a,t.className):null!=t.className&&(s=t.className+" ");var l=wt(a,void 0,(0,r.useContext)(At));s+=e.key+"-"+l.name;var c={};for(var u in t)St.call(t,u)&&"css"!==u&&u!==Tt&&(c[u]=t[u]);return c.ref=n,c.className=s,(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Vt,{cache:e,serialized:l,isStringTag:"string"==typeof i}),(0,r.createElement)(i,c))}));n(434),n(8679);var Lt=n(5893),Ot=Lt.Fragment;function Rt(t,e,n){return St.call(e,"css")?(0,Lt.jsx)(Mt,function(t,e){var n={};for(var r in e)St.call(e,r)&&(n[r]=e[r]);return n[Tt]=t,n}(t,e),n):(0,Lt.jsx)(t,e,n)}function Dt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return wt(e)}var jt=function(){var t=Dt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Nt=function t(e){for(var n=e.length,r=0,o="";r<n;r++){var i=e[r];if(null!=i){var a=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))a=t(i);else for(var s in a="",i)i[s]&&s&&(a&&(a+=" "),a+=s);break;default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function Bt(t,e,n){var r=[],o=st(t,r,n);return r.length<2?n:o+e(r)}var Ft=function(t){var e=t.cache,n=t.serializedArr;kt((function(){for(var t=0;t<n.length;t++)ct(e,n[t],!1)}));return null},It=Pt((function(t,e){var n=[],o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=wt(r,e.registered);return n.push(i),lt(e,i,!1),e.key+"-"+i.name},i={css:o,cx:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Bt(e.registered,o,Nt(n))},theme:(0,r.useContext)(At)},a=t.children(i);return!0,(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Ft,{cache:e,serializedArr:n}),a)}));var $t=Object.defineProperty,_t=(t,e,n)=>(((t,e,n)=>{e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n),Ut=new Map,zt=new WeakMap,Yt=0,Xt=void 0;function Wt(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(n=t.root,n?(zt.has(n)||(Yt+=1,zt.set(n,Yt.toString())),zt.get(n)):"0"):t[e]}`;var n})).toString()}function Ht(t,e,n={},r=Xt){if(void 0===window.IntersectionObserver&&void 0!==r){const o=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:i,elements:a}=function(t){let e=Wt(t),n=Ut.get(e);if(!n){const r=new Map;let o;const i=new IntersectionObserver((e=>{e.forEach((e=>{var n;const i=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=i),null==(n=r.get(e.target))||n.forEach((t=>{t(i,e)}))}))}),t);o=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:i,elements:r},Ut.set(e,n)}return n}(n);let s=a.get(t)||[];return a.has(t)||a.set(t,s),s.push(e),i.observe(t),function(){s.splice(s.indexOf(e),1),0===s.length&&(a.delete(t),i.unobserve(t)),0===a.size&&(i.disconnect(),Ut.delete(o))}}var Gt=class extends r.Component{constructor(t){super(t),_t(this,"node",null),_t(this,"_unobserveCb",null),_t(this,"handleNode",(t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()})),_t(this,"handleChange",((t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),function(t){return"function"!=typeof t.children}(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)})),this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=Ht(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"==typeof t){const{inView:e,entry:n}=this.state;return t({inView:e,entry:n,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:o,root:i,rootMargin:a,onChange:s,skip:l,trackVisibility:c,delay:u,initialInView:d,fallbackInView:m,...p}=this.props;return r.createElement(e||"div",{ref:this.handleNode,...p},t)}};function Zt({threshold:t,delay:e,trackVisibility:n,rootMargin:o,root:i,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:u}={}){var d;const[m,p]=r.useState(null),h=r.useRef(),[f,g]=r.useState({inView:!!l,entry:void 0});h.current=u,r.useEffect((()=>{if(s||!m)return;let r;return r=Ht(m,((t,e)=>{g({inView:t,entry:e}),h.current&&h.current(t,e),e.isIntersecting&&a&&r&&(r(),r=void 0)}),{root:i,rootMargin:o,threshold:t,trackVisibility:n,delay:e},c),()=>{r&&r()}}),[Array.isArray(t)?t.toString():t,m,i,o,a,s,n,c,e]);const y=null==(d=f.entry)?void 0:d.target,v=r.useRef();m||!y||a||s||v.current===y||(v.current=y,g({inView:!!l,entry:void 0}));const x=[p,f.inView,f.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var qt=n(4954);jt`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,jt`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,jt`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,jt`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,jt`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,jt`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,jt`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,jt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,jt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,jt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,jt`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,jt`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,jt`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Kt=jt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Jt=jt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qt=jt`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,te=jt`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ee=jt`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ne=jt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,re=jt`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oe=jt`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=jt`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ae=jt`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=jt`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=jt`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=jt`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ue(t,e){return n=>n?t():e()}function de(t){return ue(t,(()=>null))}function me(t){return de((()=>({opacity:0})))(t)}const pe=t=>{const{cascade:e=!1,damping:n=.5,delay:o=0,duration:i=1e3,fraction:a=0,keyframes:s=ne,triggerOnce:l=!1,className:c,style:u,childClassName:d,childStyle:m,children:p,onVisibilityChange:h}=t,f=(0,r.useMemo)((()=>function({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:r=ne,iterationCount:o=1}){return Dt`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:s,duration:i})),[i,s]);return null==p?null:"string"==typeof(g=p)||"number"==typeof g||"boolean"==typeof g?Rt(fe,{...t,animationStyles:f,children:String(p)}):(0,qt.isFragment)(p)?Rt(ge,{...t,animationStyles:f}):Rt(Ot,{children:r.Children.map(p,((s,p)=>{if(!(0,r.isValidElement)(s))return null;const g=o+(e?p*i*n:0);switch(s.type){case"ol":case"ul":return Rt(It,{children:({cx:e})=>Rt(s.type,{...s.props,className:e(c,s.props.className),style:Object.assign({},u,s.props.style),children:Rt(pe,{...t,children:s.props.children})})});case"li":return Rt(Gt,{threshold:a,triggerOnce:l,onChange:h,children:({inView:t,ref:e})=>Rt(It,{children:({cx:n})=>Rt(s.type,{...s.props,ref:e,className:n(d,s.props.className),css:de((()=>f))(t),style:Object.assign({},m,s.props.style,me(!t),{animationDelay:g+"ms"})})})});default:return Rt(Gt,{threshold:a,triggerOnce:l,onChange:h,children:({inView:t,ref:e})=>Rt("div",{ref:e,className:c,css:de((()=>f))(t),style:Object.assign({},u,me(!t),{animationDelay:g+"ms"}),children:Rt(It,{children:({cx:t})=>Rt(s.type,{...s.props,className:t(d,s.props.className),style:Object.assign({},m,s.props.style)})})})})}}))});var g},he={display:"inline-block",whiteSpace:"pre"},fe=t=>{const{animationStyles:e,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:a=0,triggerOnce:s=!1,className:l,style:c,children:u,onVisibilityChange:d}=t,{ref:m,inView:p}=Zt({triggerOnce:s,threshold:a,onChange:d});return ue((()=>Rt("div",{ref:m,className:l,style:Object.assign({},c,he),children:u.split("").map(((t,n)=>Rt("span",{css:de((()=>e))(p),style:{animationDelay:o+n*i*r+"ms"},children:t},n)))})),(()=>Rt(ge,{...t,children:u})))(n)},ge=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:a,onVisibilityChange:s}=t,{ref:l,inView:c}=Zt({triggerOnce:r,threshold:n,onChange:s});return Rt("div",{ref:l,className:o,css:de((()=>e))(c),style:Object.assign({},i,me(!c)),children:a})};jt`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,jt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,jt`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,jt`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,jt`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,jt`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const ye=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ve=jt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,xe=jt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,be=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,we=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ee=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ke=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Se=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ce=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Pe=jt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ae=jt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Te=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ve=jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Me=t=>{const{big:e=!1,direction:n,reverse:o=!1,...i}=t,a=(0,r.useMemo)((()=>function(t,e,n){switch(n){case"bottom-left":return e?ve:Jt;case"bottom-right":return e?xe:Qt;case"down":return t?e?we:ee:e?be:te;case"left":return t?e?ke:re:e?Ee:ne;case"right":return t?e?Ce:ie:e?Se:oe;case"top-left":return e?Pe:ae;case"top-right":return e?Ae:se;case"up":return t?e?Ve:ce:e?Te:le;default:return e?ye:Kt}}(e,o,n)),[e,n,o]);return Rt(pe,{keyframes:a,...i})};jt`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,jt`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,jt`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,jt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,jt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;jt`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,jt`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,jt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;jt`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,jt`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,jt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,jt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,jt`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,jt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,jt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,jt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,jt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,jt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;jt`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,jt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,jt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,jt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;jt`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,jt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,jt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,jt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,jt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,jt`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,jt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,jt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,jt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,jt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);
//# sourceMappingURL=commons-26ed89847f4085129f37.js.map