(()=>{"use strict";var n={735:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"body {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 280px 1fr;\n    grid-template-rows: 60px 1fr;\n    grid-template-areas: \n                \"header header\"\n                \"aside main\";\n    background-color: #202124;\n    color: white;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbutton {\n    background-color: transparent;\n    color: inherit;\n    border: none;\n}\n\ninput {\n    background-color: inherit;\n    color: inherit;\n    border: none;\n}\n\ninput:focus {\n    outline: none;\n}\n\n::placeholder {\n    color: lightgrey;\n}\n\n.header {\n    grid-area: header;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid grey;\n}\n\n.sidebar {\n    padding-top: 10px;\n    grid-area: aside;\n}\n\n.nav {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.btn-nav {\n    height: 50px;\n    padding-left: 20px;\n    display: flex;\n    align-items: center;\n    border-radius: 0 25px 25px 0;\n    overflow: hidden;\n}\n\n.btn-nav:hover {\n    background-color: #28292c;\n}\n\n.btn-nav.active {\n    background-color: #41331c;\n}\n\n.main {\n    grid-area: main;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n#form-add {\n    width: 500px;\n    padding: 10px 15px;\n    display: flex;\n    color: #e8eaed;\n    border: 1px solid #5f6368;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#form-actions {\n    display: flex;\n}\n\n#btn-submit {\n    margin-left: auto;\n    padding: 8px 24px;\n}\n\n#grid {\n    width: 100%;\n    border: 1px solid pink;\n}\n\n.hidden {\n    display: none !important;\n}\n\n#todo-grid {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 300px);\n    place-content: center;\n    gap: 25px;\n}\n\n.todo-card {\n    padding: 10px 15px;\n    display: flex;\n    color: #e8eaed;\n    border: 1px solid #5f6368;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.todo-title {\n    font-weight: bold;\n}\n\n.todo-actions {\n    display: flex;\n}\n\n.todo-delete {\n    margin-left: auto;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=o(n,r),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),d=t.n(s),c=t(216),l=t.n(c),u=t(589),p=t.n(u),m=t(735),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(426),b={};b.styleTagTransform=p(),b.setAttributes=d(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;const g=(()=>{class n{constructor(n,e){this.title=n,this.description=e}}return{create:(e,t)=>new n(e,t)}})(),v=(()=>{let n,e=[];class t{constructor(n){this.title=n,this.todos=[],this.active=!1}}const o=n=>{e.push(new t(n))},r=t=>{e.forEach((n=>{const o=e.indexOf(n)===t;n.active=!!o})),n=t};return{init:()=>{o("Home"),r(0)},getList:()=>e,getActive:()=>e[n],create:o,addTodo:(t,o)=>{e[n].todos.push(g.create(t,o))},removeTodo:t=>{e[n].todos.splice(t,1)},setActive:r}})(),y=(()=>{const n=()=>{const n=document.querySelector(".nav"),t=v.getList();n.replaceChildren(),t.forEach((o=>{const r=t.indexOf(o);n.appendChild(e(o,r))}))},e=(e,o)=>{const r=document.createElement("div");return r.setAttribute("role","button"),r.classList.add("btn-nav"),r.dataset.index=o,r.textContent=e.title,e.active&&r.classList.add("active"),r.addEventListener("click",(()=>{v.setActive(o),n(),t()})),r},t=()=>{const n=document.querySelector("#todo-grid"),e=v.getActive().todos;n.replaceChildren(),e.forEach((t=>{const r=e.indexOf(t);n.appendChild(o(t,r))}))},o=(n,e)=>{const o=document.createElement("article");o.classList.add("todo-card"),o.dataset.index=e;const r=document.createElement("header");r.classList.add("todo-title"),r.textContent=n.title,o.appendChild(r);const i=document.createElement("p");i.classList.add("todo-description"),i.textContent=n.description,o.appendChild(i);const a=document.createElement("div");a.classList.add("todo-actions");const s=document.createElement("button");return s.setAttribute("type","button"),s.classList.add("todo-delete"),s.textContent="Delete",a.appendChild(s),o.appendChild(a),s.addEventListener("click",(()=>{v.removeTodo(e),t()})),o},r=n=>{const e=document.querySelector("#form-add"),t=document.querySelector("#btn-submit");let o=n.target;for(;o;){if(o===t)return;if(o===e)return void i();o=o.parentNode}a()},i=()=>{const n=document.querySelector("#title"),e=document.querySelector("#form-actions");n.classList.remove("hidden"),e.classList.remove("hidden")},a=()=>{const n=document.querySelector("#title"),e=document.querySelector("#form-actions");n.classList.add("hidden"),e.classList.add("hidden")},s=n=>{const e=document.querySelector("#project-add");let t=n.target;for(;t;){if(t===e)return void d();t=t.parentNode}c()},d=()=>{const n=document.querySelector("#project-text"),e=document.querySelector("#project-input");n.classList.add("hidden"),e.classList.remove("hidden"),e.focus()},c=()=>{const n=document.querySelector("#project-text"),e=document.querySelector("#project-input");n.classList.remove("hidden"),e.classList.add("hidden"),e.value=""},l=e=>{const o=document.querySelector("#project-input");if("Enter"!==e.key)return;if(!o.value)return;v.create(o.value),c();const r=v.getList().length-1;v.setActive(r),n(),t()},u=()=>{const n=document.querySelector("#title"),e=document.querySelector("#description");n.value&&e.value&&(v.addTodo(n.value,e.value),n.value="",e.value="",a(),t())};return{init:()=>{const e=document.querySelector("#project-input"),o=document.querySelector("#btn-submit");document.addEventListener("click",s),e.addEventListener("keyup",l),document.addEventListener("click",r),o.addEventListener("click",u),n(),t()}}})();v.init(),y.init()})()})();