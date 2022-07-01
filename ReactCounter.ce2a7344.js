import{g as b}from"./chunks/counter.77dc46ae.js";import{r as i}from"./chunks/index.c6b2b1a4.js";var h={exports:{}},m={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=i.exports;function E(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _=typeof Object.is=="function"?Object.is:E,g=a.useState,j=a.useEffect,k=a.useLayoutEffect,w=a.useDebugValue;function C(e,t){var u=t(),r=g({inst:{value:u,getSnapshot:t}}),n=r[0].inst,o=r[1];return k(function(){n.value=u,n.getSnapshot=t,v(n)&&o({inst:n})},[e,u,t]),j(function(){return v(n)&&o({inst:n}),e(function(){v(n)&&o({inst:n})})},[e]),w(u),u}function v(e){var t=e.getSnapshot;e=e.value;try{var u=t();return!_(e,u)}catch{return!0}}function O(e,t){return t()}var $=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?O:C;m.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:$;h.exports=m;var D=i.exports.useLayoutEffect;function R(e){var t=i.exports.useRef();return t.current||(t.current={v:e()}),t.current.v}function A(e){return"state"in e}function L(e){return"deferred"in e}function I(e){return"getSnapshot"in e?e.getSnapshot():A(e)?e.state:void 0}function P(e,t){t===void 0&&(t=I);var u=i.exports.useRef(e),r=i.exports.useRef([]),n=i.exports.useCallback(function(c){var f=e.subscribe(c).unsubscribe;return f},[e]),o=i.exports.useCallback(function(){return t(e)},[e,t]),l=h.exports.useSyncExternalStore(n,o,o),S=R(function(){return function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];var x=c[0],p=u.current;L(p)&&p.deferred?r.current.push(x):p.send(x)}});return D(function(){for(u.current=e;r.current.length>0;){var c=r.current.shift();e.send(c)}},[e]),[l,S]}var s={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=i.exports,N=Symbol.for("react.element"),T=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,G=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function y(e,t,u){var r,n={},o=null,l=null;u!==void 0&&(o=""+u),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)q.call(t,r)&&!U.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:N,type:e,key:o,ref:l,props:n,_owner:G.current}}d.Fragment=T;d.jsx=y;d.jsxs=y;s.exports=d;function J(){const[e,t]=P(b());return s.exports.jsxs("div",{style:{backgroundColor:"#5ED4F3"},children:[s.exports.jsxs("p",{children:["React counter: ",e.context.count]}),s.exports.jsxs("p",{children:["state: ",e.value]}),s.exports.jsx("button",{onClick:()=>t("decrement"),children:"-"}),s.exports.jsx("button",{onClick:()=>t("increment"),children:"+"}),s.exports.jsx("button",{onClick:()=>t("disable"),children:"Disable"}),s.exports.jsx("button",{onClick:()=>t("enable"),children:"Enable"})]})}export{J as default};
