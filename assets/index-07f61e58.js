function Xy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Jy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var so={},Zy={get exports(){return so},set exports(t){so=t}},Da={},L={},e0={get exports(){return L},set exports(t){L=t}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),s0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),cf=Symbol.iterator;function d0(t){return t===null||typeof t!="object"?null:(t=cf&&t[cf]||t["@@iterator"],typeof t=="function"?t:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hp=Object.assign,Wp={};function Ci(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gp(){}Gp.prototype=Ci.prototype;function bc(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}var Dc=bc.prototype=new Gp;Dc.constructor=bc;Hp(Dc,Ci.prototype);Dc.isPureReactComponent=!0;var df=Array.isArray,Kp=Object.prototype.hasOwnProperty,Nc={current:null},Qp={key:!0,ref:!0,__self:!0,__source:!0};function Yp(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Kp.call(e,r)&&!Qp.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fo,type:t,key:o,ref:s,props:i,_owner:Nc.current}}function f0(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Oc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function h0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ff=/\/+/g;function Dl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h0(""+t.key):e.toString(36)}function Is(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Fo:case t0:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Dl(s,0):r,df(i)?(n="",t!=null&&(n=t.replace(ff,"$&/")+"/"),Is(i,e,n,"",function(u){return u})):i!=null&&(Oc(i)&&(i=f0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ff,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",df(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Dl(o,a);s+=Is(o,e,n,l,i)}else if(l=d0(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Dl(o,a++),s+=Is(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Is(t,r,"","",function(o){return e.call(n,o,i++)}),r}function p0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Cs={transition:null},m0={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Cs,ReactCurrentOwner:Nc};re.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!Oc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ci;re.Fragment=n0;re.Profiler=i0;re.PureComponent=bc;re.StrictMode=r0;re.Suspense=l0;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hp({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Nc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kp.call(e,l)&&!Qp.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fo,type:t.type,key:i,ref:o,props:r,_owner:s}};re.createContext=function(t){return t={$$typeof:s0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o0,_context:t},t.Consumer=t};re.createElement=Yp;re.createFactory=function(t){var e=Yp.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:a0,render:t}};re.isValidElement=Oc;re.lazy=function(t){return{$$typeof:c0,_payload:{_status:-1,_result:t},_init:p0}};re.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Cs.transition;Cs.transition={};try{t()}finally{Cs.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return ht.current.useCallback(t,e)};re.useContext=function(t){return ht.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};re.useEffect=function(t,e){return ht.current.useEffect(t,e)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ht.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};re.useRef=function(t){return ht.current.useRef(t)};re.useState=function(t){return ht.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.2.0";(function(t){t.exports=re})(e0);const wt=Jy(L),vu=Xy({__proto__:null,default:wt},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=L,v0=Symbol.for("react.element"),y0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,S0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_0={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)w0.call(e,r)&&!_0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:v0,type:t,key:o,ref:s,props:i,_owner:S0.current}}Da.Fragment=y0;Da.jsx=qp;Da.jsxs=qp;(function(t){t.exports=Da})(Zy);const E0=so.Fragment,T=so.jsx,ne=so.jsxs;var yu={},wu={},k0={get exports(){return wu},set exports(t){wu=t}},Rt={},Su={},I0={get exports(){return Su},set exports(t){Su=t}},Xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,V){var B=x.length;x.push(V);e:for(;0<B;){var fe=B-1>>>1,b=x[fe];if(0<i(b,V))x[fe]=V,x[B]=b,B=fe;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var V=x[0],B=x.pop();if(B!==V){x[0]=B;e:for(var fe=0,b=x.length,M=b>>>1;fe<M;){var F=2*(fe+1)-1,W=x[F],_=F+1,X=x[_];if(0>i(W,B))_<b&&0>i(X,W)?(x[fe]=X,x[_]=B,fe=_):(x[fe]=W,x[F]=B,fe=F);else if(_<b&&0>i(X,B))x[fe]=X,x[_]=B,fe=_;else break e}}return V}function i(x,V){var B=x.sortIndex-V.sortIndex;return B!==0?B:x.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,c=3,y=!1,w=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=x)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function g(x){if(S=!1,m(x),!w)if(n(l)!==null)w=!0,ye(I);else{var V=n(u);V!==null&&De(g,V.startTime-x)}}function I(x,V){w=!1,S&&(S=!1,p(O),O=-1),y=!0;var B=c;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||x&&!ve());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,c=h.priorityLevel;var b=fe(h.expirationTime<=V);V=t.unstable_now(),typeof b=="function"?h.callback=b:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var M=!0;else{var F=n(u);F!==null&&De(g,F.startTime-V),M=!1}return M}finally{h=null,c=B,y=!1}}var P=!1,D=null,O=-1,Y=5,j=-1;function ve(){return!(t.unstable_now()-j<Y)}function Ie(){if(D!==null){var x=t.unstable_now();j=x;var V=!0;try{V=D(!0,x)}finally{V?$e():(P=!1,D=null)}}else P=!1}var $e;if(typeof d=="function")$e=function(){d(Ie)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Be=lt.port2;lt.port1.onmessage=Ie,$e=function(){Be.postMessage(null)}}else $e=function(){k(Ie,0)};function ye(x){D=x,P||(P=!0,$e())}function De(x,V){O=k(function(){x(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,ye(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(c){case 1:case 2:case 3:var V=3;break;default:V=c}var B=c;c=V;try{return x()}finally{c=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,V){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var B=c;c=x;try{return V()}finally{c=B}},t.unstable_scheduleCallback=function(x,V,B){var fe=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?fe+B:fe):B=fe,x){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=B+b,x={id:f++,callback:V,priorityLevel:x,startTime:B,expirationTime:b,sortIndex:-1},B>fe?(x.sortIndex=B,e(u,x),n(l)===null&&x===n(u)&&(S?(p(O),O=-1):S=!0,De(g,B-fe))):(x.sortIndex=b,e(l,x),w||y||(w=!0,ye(I))),x},t.unstable_shouldYield=ve,t.unstable_wrapCallback=function(x){var V=c;return function(){var B=c;c=V;try{return x.apply(this,arguments)}finally{c=B}}}})(Xp);(function(t){t.exports=Xp})(I0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp=L,xt=Su;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zp=new Set,ao={};function Lr(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(ao[t]=e,t=0;t<e.length;t++)Zp.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hf={},pf={};function T0(t){return _u.call(pf,t)?!0:_u.call(hf,t)?!1:C0.test(t)?pf[t]=!0:(hf[t]=!0,!1)}function A0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x0(t,e,n,r){if(e===null||typeof e>"u"||A0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mc=/[\-:]([a-z])/g;function Lc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mc,Lc);Ze[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mc,Lc);Ze[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mc,Lc);Ze[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fc(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x0(e,n,i,r)&&(n=null),r||i===null?T0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,es=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),$c=Symbol.for("react.strict_mode"),Eu=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),Uc=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),nm=Symbol.for("react.offscreen"),mf=Symbol.iterator;function Pi(t){return t===null||typeof t!="object"?null:(t=mf&&t[mf]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Nl;function Ui(t){if(Nl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nl=e&&e[1]||""}return`
`+Nl+t}var Ol=!1;function Ml(t,e){if(!t||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ui(t):""}function R0(t){switch(t.tag){case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 2:case 15:return t=Ml(t.type,!1),t;case 11:return t=Ml(t.type.render,!1),t;case 1:return t=Ml(t.type,!0),t;default:return""}}function Cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Br:return"Portal";case Eu:return"Profiler";case $c:return"StrictMode";case ku:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tm:return(t.displayName||"Context")+".Consumer";case em:return(t._context.displayName||"Context")+".Provider";case zc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uc:return e=t.displayName||null,e!==null?e:Cu(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return Cu(t(e))}catch{}}return null}function P0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(e);case 8:return e===$c?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b0(t){var e=rm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ts(t){t._valueTracker||(t._valueTracker=b0(t))}function im(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tu(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&Fc(t,"checked",e,!1)}function Au(t,e){om(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xu(t,e.type,n):e.hasOwnProperty("defaultValue")&&xu(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xu(t,e,n){(e!=="number"||Bs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ji=Array.isArray;function ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(ji(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function sm(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ns,lm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ns.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D0=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){D0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function um(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function cm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=um(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var N0=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(t,e){if(e){if(N0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,ri=null,ii=null;function Sf(t){if(t=Uo(t)){if(typeof Ou!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Fa(e),Ou(t.stateNode,t.type,e))}}function dm(t){ri?ii?ii.push(t):ii=[t]:ri=t}function fm(){if(ri){var t=ri,e=ii;if(ii=ri=null,Sf(t),e)for(t=0;t<e.length;t++)Sf(e[t])}}function hm(t,e){return t(e)}function pm(){}var Ll=!1;function mm(t,e,n){if(Ll)return t(e,n);Ll=!0;try{return hm(t,e,n)}finally{Ll=!1,(ri!==null||ii!==null)&&(pm(),fm())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Fa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Mu=!1;if(Sn)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Mu=!1}function O0(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Gi=!1,Vs=null,Hs=!1,Lu=null,M0={onError:function(t){Gi=!0,Vs=t}};function L0(t,e,n,r,i,o,s,a,l){Gi=!1,Vs=null,O0.apply(M0,arguments)}function F0(t,e,n,r,i,o,s,a,l){if(L0.apply(this,arguments),Gi){if(Gi){var u=Vs;Gi=!1,Vs=null}else throw Error(A(198));Hs||(Hs=!0,Lu=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _f(t){if(Fr(t)!==t)throw Error(A(188))}function $0(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _f(i),t;if(o===r)return _f(i),e;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function vm(t){return t=$0(t),t!==null?ym(t):null}function ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ym(t);if(e!==null)return e;t=t.sibling}return null}var wm=xt.unstable_scheduleCallback,Ef=xt.unstable_cancelCallback,z0=xt.unstable_shouldYield,U0=xt.unstable_requestPaint,Oe=xt.unstable_now,j0=xt.unstable_getCurrentPriorityLevel,Bc=xt.unstable_ImmediatePriority,Sm=xt.unstable_UserBlockingPriority,Ws=xt.unstable_NormalPriority,B0=xt.unstable_LowPriority,_m=xt.unstable_IdlePriority,Na=null,nn=null;function V0(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Na,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:G0,H0=Math.log,W0=Math.LN2;function G0(t){return t>>>=0,t===0?32:31-(H0(t)/W0|0)|0}var rs=64,is=4194304;function Bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Bi(a):(o&=s,o!==0&&(r=Bi(o)))}else s=n&~i,s!==0?r=Bi(s):o!==0&&(r=Bi(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function K0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Gt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=K0(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Em(){var t=rs;return rs<<=1,!(rs&4194240)&&(rs=64),t}function Fl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function Y0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Vc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function km(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Im,Hc,Cm,Tm,Am,$u=!1,os=[],Gn=null,Kn=null,Qn=null,co=new Map,fo=new Map,zn=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Di(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Uo(e),e!==null&&Hc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function X0(t,e,n,r,i){switch(e){case"focusin":return Gn=Di(Gn,t,e,n,r,i),!0;case"dragenter":return Kn=Di(Kn,t,e,n,r,i),!0;case"mouseover":return Qn=Di(Qn,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return co.set(o,Di(co.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fo.set(o,Di(fo.get(o)||null,t,e,n,r,i)),!0}return!1}function xm(t){var e=gr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=gm(n),e!==null){t.blockedOn=e,Am(t.priority,function(){Cm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ts(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nu=r,n.target.dispatchEvent(r),Nu=null}else return e=Uo(n),e!==null&&Hc(e),t.blockedOn=n,!1;e.shift()}return!0}function If(t,e,n){Ts(t)&&n.delete(e)}function J0(){$u=!1,Gn!==null&&Ts(Gn)&&(Gn=null),Kn!==null&&Ts(Kn)&&(Kn=null),Qn!==null&&Ts(Qn)&&(Qn=null),co.forEach(If),fo.forEach(If)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,$u||($u=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,J0)))}function ho(t){function e(i){return Ni(i,t)}if(0<os.length){Ni(os[0],t);for(var n=1;n<os.length;n++){var r=os[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&Ni(Gn,t),Kn!==null&&Ni(Kn,t),Qn!==null&&Ni(Qn,t),co.forEach(e),fo.forEach(e),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&zn.shift()}var oi=An.ReactCurrentBatchConfig,Ks=!0;function Z0(t,e,n,r){var i=pe,o=oi.transition;oi.transition=null;try{pe=1,Wc(t,e,n,r)}finally{pe=i,oi.transition=o}}function ew(t,e,n,r){var i=pe,o=oi.transition;oi.transition=null;try{pe=4,Wc(t,e,n,r)}finally{pe=i,oi.transition=o}}function Wc(t,e,n,r){if(Ks){var i=zu(t,e,n,r);if(i===null)Kl(t,e,r,Qs,n),kf(t,r);else if(X0(i,t,e,n,r))r.stopPropagation();else if(kf(t,r),e&4&&-1<q0.indexOf(t)){for(;i!==null;){var o=Uo(i);if(o!==null&&Im(o),o=zu(t,e,n,r),o===null&&Kl(t,e,r,Qs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Kl(t,e,r,null,n)}}var Qs=null;function zu(t,e,n,r){if(Qs=null,t=jc(r),t=gr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qs=t,null}function Rm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case Bc:return 1;case Sm:return 4;case Ws:case B0:return 16;case _m:return 536870912;default:return 16}default:return 16}}var Hn=null,Gc=null,As=null;function Pm(){if(As)return As;var t,e=Gc,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return As=i.slice(t,1<r?1-r:void 0)}function xs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ss(){return!0}function Cf(){return!1}function Pt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ss:Cf,this.isPropagationStopped=Cf,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ss)},persist:function(){},isPersistent:ss}),e}var Ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=Pt(Ti),zo=Ae({},Ti,{view:0,detail:0}),tw=Pt(zo),$l,zl,Oi,Oa=Ae({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oi&&(Oi&&t.type==="mousemove"?($l=t.screenX-Oi.screenX,zl=t.screenY-Oi.screenY):zl=$l=0,Oi=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),Tf=Pt(Oa),nw=Ae({},Oa,{dataTransfer:0}),rw=Pt(nw),iw=Ae({},zo,{relatedTarget:0}),Ul=Pt(iw),ow=Ae({},Ti,{animationName:0,elapsedTime:0,pseudoElement:0}),sw=Pt(ow),aw=Ae({},Ti,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lw=Pt(aw),uw=Ae({},Ti,{data:0}),Af=Pt(uw),cw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fw[t])?!!e[t]:!1}function Qc(){return hw}var pw=Ae({},zo,{key:function(t){if(t.key){var e=cw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?xs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mw=Pt(pw),gw=Ae({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=Pt(gw),vw=Ae({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),yw=Pt(vw),ww=Ae({},Ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sw=Pt(ww),_w=Ae({},Oa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ew=Pt(_w),kw=[9,13,27,32],Yc=Sn&&"CompositionEvent"in window,Ki=null;Sn&&"documentMode"in document&&(Ki=document.documentMode);var Iw=Sn&&"TextEvent"in window&&!Ki,bm=Sn&&(!Yc||Ki&&8<Ki&&11>=Ki),Rf=String.fromCharCode(32),Pf=!1;function Dm(t,e){switch(t){case"keyup":return kw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Cw(t,e){switch(t){case"compositionend":return Nm(e);case"keypress":return e.which!==32?null:(Pf=!0,Rf);case"textInput":return t=e.data,t===Rf&&Pf?null:t;default:return null}}function Tw(t,e){if(Hr)return t==="compositionend"||!Yc&&Dm(t,e)?(t=Pm(),As=Gc=Hn=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bm&&e.locale!=="ko"?null:e.data;default:return null}}var Aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Aw[t.type]:e==="textarea"}function Om(t,e,n,r){dm(r),e=Ys(e,"onChange"),0<e.length&&(n=new Kc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qi=null,po=null;function xw(t){Wm(t,0)}function Ma(t){var e=Kr(t);if(im(e))return t}function Rw(t,e){if(t==="change")return e}var Mm=!1;if(Sn){var jl;if(Sn){var Bl="oninput"in document;if(!Bl){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Bl=typeof Df.oninput=="function"}jl=Bl}else jl=!1;Mm=jl&&(!document.documentMode||9<document.documentMode)}function Nf(){Qi&&(Qi.detachEvent("onpropertychange",Lm),po=Qi=null)}function Lm(t){if(t.propertyName==="value"&&Ma(po)){var e=[];Om(e,po,t,jc(t)),mm(xw,e)}}function Pw(t,e,n){t==="focusin"?(Nf(),Qi=e,po=n,Qi.attachEvent("onpropertychange",Lm)):t==="focusout"&&Nf()}function bw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ma(po)}function Dw(t,e){if(t==="click")return Ma(e)}function Nw(t,e){if(t==="input"||t==="change")return Ma(e)}function Ow(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:Ow;function mo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_u.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function Of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mf(t,e){var n=Of(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Of(n)}}function Fm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $m(){for(var t=window,e=Bs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bs(t.document)}return e}function qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mw(t){var e=$m(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fm(n.ownerDocument.documentElement,n)){if(r!==null&&qc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Mf(n,o);var s=Mf(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lw=Sn&&"documentMode"in document&&11>=document.documentMode,Wr=null,Uu=null,Yi=null,ju=!1;function Lf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||Wr==null||Wr!==Bs(r)||(r=Wr,"selectionStart"in r&&qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&mo(Yi,r)||(Yi=r,r=Ys(Uu,"onSelect"),0<r.length&&(e=new Kc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wr)))}function as(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gr={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionend:as("Transition","TransitionEnd")},Vl={},zm={};Sn&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function La(t){if(Vl[t])return Vl[t];if(!Gr[t])return t;var e=Gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zm)return Vl[t]=e[n];return t}var Um=La("animationend"),jm=La("animationiteration"),Bm=La("animationstart"),Vm=La("transitionend"),Hm=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){Hm.set(t,e),Lr(e,[t])}for(var Hl=0;Hl<Ff.length;Hl++){var Wl=Ff[Hl],Fw=Wl.toLowerCase(),$w=Wl[0].toUpperCase()+Wl.slice(1);lr(Fw,"on"+$w)}lr(Um,"onAnimationEnd");lr(jm,"onAnimationIteration");lr(Bm,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Vm,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function $f(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,F0(r,e,void 0,t),t.currentTarget=null}function Wm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;$f(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;$f(i,a,u),o=l}}}if(Hs)throw t=Lu,Hs=!1,Lu=null,t}function _e(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var r=t+"__bubble";n.has(r)||(Gm(e,t,2,!1),n.add(r))}function Gl(t,e,n){var r=0;e&&(r|=4),Gm(n,t,r,e)}var ls="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[ls]){t[ls]=!0,Zp.forEach(function(n){n!=="selectionchange"&&(zw.has(n)||Gl(n,!1,t),Gl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ls]||(e[ls]=!0,Gl("selectionchange",!1,e))}}function Gm(t,e,n,r){switch(Rm(e)){case 1:var i=Z0;break;case 4:i=ew;break;default:i=Wc}n=i.bind(null,e,n,t),i=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kl(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=gr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}mm(function(){var u=o,f=jc(n),h=[];e:{var c=Hm.get(t);if(c!==void 0){var y=Kc,w=t;switch(t){case"keypress":if(xs(n)===0)break e;case"keydown":case"keyup":y=mw;break;case"focusin":w="focus",y=Ul;break;case"focusout":w="blur",y=Ul;break;case"beforeblur":case"afterblur":y=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yw;break;case Um:case jm:case Bm:y=sw;break;case Vm:y=Sw;break;case"scroll":y=tw;break;case"wheel":y=Ew;break;case"copy":case"cut":case"paste":y=lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xf}var S=(e&4)!==0,k=!S&&t==="scroll",p=S?c!==null?c+"Capture":null:c;S=[];for(var d=u,m;d!==null;){m=d;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,p!==null&&(g=uo(d,p),g!=null&&S.push(vo(d,g,m)))),k)break;d=d.return}0<S.length&&(c=new y(c,w,null,n,f),h.push({event:c,listeners:S}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",c&&n!==Nu&&(w=n.relatedTarget||n.fromElement)&&(gr(w)||w[_n]))break e;if((y||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?gr(w):null,w!==null&&(k=Fr(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(S=Tf,g="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(S=xf,g="onPointerLeave",p="onPointerEnter",d="pointer"),k=y==null?c:Kr(y),m=w==null?c:Kr(w),c=new S(g,d+"leave",y,n,f),c.target=k,c.relatedTarget=m,g=null,gr(f)===u&&(S=new S(p,d+"enter",w,n,f),S.target=m,S.relatedTarget=k,g=S),k=g,y&&w)t:{for(S=y,p=w,d=0,m=S;m;m=Ur(m))d++;for(m=0,g=p;g;g=Ur(g))m++;for(;0<d-m;)S=Ur(S),d--;for(;0<m-d;)p=Ur(p),m--;for(;d--;){if(S===p||p!==null&&S===p.alternate)break t;S=Ur(S),p=Ur(p)}S=null}else S=null;y!==null&&zf(h,c,y,S,!1),w!==null&&k!==null&&zf(h,k,w,S,!0)}}e:{if(c=u?Kr(u):window,y=c.nodeName&&c.nodeName.toLowerCase(),y==="select"||y==="input"&&c.type==="file")var I=Rw;else if(bf(c))if(Mm)I=Nw;else{I=bw;var P=Pw}else(y=c.nodeName)&&y.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(I=Dw);if(I&&(I=I(t,u))){Om(h,I,n,f);break e}P&&P(t,c,u),t==="focusout"&&(P=c._wrapperState)&&P.controlled&&c.type==="number"&&xu(c,"number",c.value)}switch(P=u?Kr(u):window,t){case"focusin":(bf(P)||P.contentEditable==="true")&&(Wr=P,Uu=u,Yi=null);break;case"focusout":Yi=Uu=Wr=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Lf(h,n,f);break;case"selectionchange":if(Lw)break;case"keydown":case"keyup":Lf(h,n,f)}var D;if(Yc)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Hr?Dm(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(bm&&n.locale!=="ko"&&(Hr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Hr&&(D=Pm()):(Hn=f,Gc="value"in Hn?Hn.value:Hn.textContent,Hr=!0)),P=Ys(u,O),0<P.length&&(O=new Af(O,t,null,n,f),h.push({event:O,listeners:P}),D?O.data=D:(D=Nm(n),D!==null&&(O.data=D)))),(D=Iw?Cw(t,n):Tw(t,n))&&(u=Ys(u,"onBeforeInput"),0<u.length&&(f=new Af("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=D))}Wm(h,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ys(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=uo(t,n),o!=null&&r.unshift(vo(t,o,i)),o=uo(t,e),o!=null&&r.push(vo(t,o,i))),t=t.return}return r}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zf(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=uo(n,o),l!=null&&s.unshift(vo(n,l,a))):i||(l=uo(n,o),l!=null&&s.push(vo(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Uw=/\r\n?/g,jw=/\u0000|\uFFFD/g;function Uf(t){return(typeof t=="string"?t:""+t).replace(Uw,`
`).replace(jw,"")}function us(t,e,n){if(e=Uf(e),Uf(t)!==e&&n)throw Error(A(425))}function qs(){}var Bu=null,Vu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,Bw=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(t){return jf.resolve(null).then(t).catch(Hw)}:Wu;function Hw(t){setTimeout(function(){throw t})}function Ql(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ho(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Ai,yo="__reactProps$"+Ai,_n="__reactContainer$"+Ai,Gu="__reactEvents$"+Ai,Ww="__reactListeners$"+Ai,Gw="__reactHandles$"+Ai;function gr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bf(t);t!==null;){if(n=t[Zt])return n;t=Bf(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[Zt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Fa(t){return t[yo]||null}var Ku=[],Qr=-1;function ur(t){return{current:t}}function Ee(t){0>Qr||(t.current=Ku[Qr],Ku[Qr]=null,Qr--)}function Se(t,e){Qr++,Ku[Qr]=t.current,t.current=e}var ar={},st=ur(ar),St=ur(!1),Ir=ar;function hi(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function Xs(){Ee(St),Ee(st)}function Vf(t,e,n){if(st.current!==ar)throw Error(A(168));Se(st,e),Se(St,n)}function Km(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,P0(t)||"Unknown",i));return Ae({},n,r)}function Js(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Ir=st.current,Se(st,t),Se(St,St.current),!0}function Hf(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=Km(t,e,Ir),r.__reactInternalMemoizedMergedChildContext=t,Ee(St),Ee(st),Se(st,t)):Ee(St),Se(St,n)}var fn=null,$a=!1,Yl=!1;function Qm(t){fn===null?fn=[t]:fn.push(t)}function Kw(t){$a=!0,Qm(t)}function cr(){if(!Yl&&fn!==null){Yl=!0;var t=0,e=pe;try{var n=fn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,$a=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),wm(Bc,cr),i}finally{pe=e,Yl=!1}}return null}var Yr=[],qr=0,Zs=null,ea=0,Dt=[],Nt=0,Cr=null,pn=1,mn="";function hr(t,e){Yr[qr++]=ea,Yr[qr++]=Zs,Zs=t,ea=e}function Ym(t,e,n){Dt[Nt++]=pn,Dt[Nt++]=mn,Dt[Nt++]=Cr,Cr=t;var r=pn;t=mn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var o=32-Gt(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pn=1<<32-Gt(e)+i|n<<i|r,mn=o+t}else pn=1<<o|n<<i|r,mn=t}function Xc(t){t.return!==null&&(hr(t,1),Ym(t,1,0))}function Jc(t){for(;t===Zs;)Zs=Yr[--qr],Yr[qr]=null,ea=Yr[--qr],Yr[qr]=null;for(;t===Cr;)Cr=Dt[--Nt],Dt[Nt]=null,mn=Dt[--Nt],Dt[Nt]=null,pn=Dt[--Nt],Dt[Nt]=null}var Tt=null,Ct=null,ke=!1,Wt=null;function qm(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Ct=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Ct=null,!0):!1;default:return!1}}function Qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(ke){var e=Ct;if(e){var n=e;if(!Wf(t,e)){if(Qu(t))throw Error(A(418));e=Yn(n.nextSibling);var r=Tt;e&&Wf(t,e)?qm(r,n):(t.flags=t.flags&-4097|2,ke=!1,Tt=t)}}else{if(Qu(t))throw Error(A(418));t.flags=t.flags&-4097|2,ke=!1,Tt=t}}}function Gf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function cs(t){if(t!==Tt)return!1;if(!ke)return Gf(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=Ct)){if(Qu(t))throw Xm(),Error(A(418));for(;e;)qm(t,e),e=Yn(e.nextSibling)}if(Gf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Tt?Yn(t.stateNode.nextSibling):null;return!0}function Xm(){for(var t=Ct;t;)t=Yn(t.nextSibling)}function pi(){Ct=Tt=null,ke=!1}function Zc(t){Wt===null?Wt=[t]:Wt.push(t)}var Qw=An.ReactCurrentBatchConfig;function Vt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ta=ur(null),na=null,Xr=null,ed=null;function td(){ed=Xr=na=null}function nd(t){var e=ta.current;Ee(ta),t._currentValue=e}function qu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function si(t,e){na=t,ed=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(ed!==t)if(t={context:t,memoizedValue:e,next:null},Xr===null){if(na===null)throw Error(A(308));Xr=t,na.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return e}var vr=null;function rd(t){vr===null?vr=[t]:vr.push(t)}function Jm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rd(e)):(n.next=i.next,i.next=n),e.interleaved=n,En(t,r)}function En(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,En(t,n)}return i=r.interleaved,i===null?(e.next=e,rd(r)):(e.next=i.next,i.next=e),r.interleaved=e,En(t,n)}function Rs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vc(t,n)}}function Kf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ra(t,e,n,r){var i=t.updateQueue;Fn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=u=l=null,a=o;do{var c=a.lane,y=a.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,S=a;switch(c=e,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){h=w.call(y,h,c);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,c=typeof w=="function"?w.call(y,h,c):w,c==null)break e;h=Ae({},h,c);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else y={eventTime:y,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=y,l=h):f=f.next=y,s|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ar|=s,t.lanes=s,t.memoizedState=h}}function Qf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var eg=new Jp.Component().refs;function Xu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var za={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Jn(t),o=yn(r,i);o.payload=e,n!=null&&(o.callback=n),e=qn(t,o,i),e!==null&&(Kt(e,t,i,r),Rs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Jn(t),o=yn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=qn(t,o,i),e!==null&&(Kt(e,t,i,r),Rs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=Jn(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(Kt(e,t,r,n),Rs(e,t,r))}};function Yf(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(i,o):!0}function tg(t,e,n){var r=!1,i=ar,o=e.contextType;return typeof o=="object"&&o!==null?o=Ft(o):(i=_t(e)?Ir:st.current,r=e.contextTypes,o=(r=r!=null)?hi(t,i):ar),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=za,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function qf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&za.enqueueReplaceState(e,e.state,null)}function Ju(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=eg,id(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Ft(o):(o=_t(e)?Ir:st.current,i.context=hi(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Xu(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&za.enqueueReplaceState(i,i.state,null),ra(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===eg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function ds(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xf(t){var e=t._init;return e(t._payload)}function ng(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Zn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,g){return d===null||d.tag!==6?(d=nu(m,p.mode,g),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,g){var I=m.type;return I===Vr?f(p,d,m.props.children,g,m.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ln&&Xf(I)===d.type)?(g=i(d,m.props),g.ref=Mi(p,d,m),g.return=p,g):(g=Ms(m.type,m.key,m.props,null,p.mode,g),g.ref=Mi(p,d,m),g.return=p,g)}function u(p,d,m,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ru(m,p.mode,g),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function f(p,d,m,g,I){return d===null||d.tag!==7?(d=Er(m,p.mode,g,I),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=nu(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case es:return m=Ms(d.type,d.key,d.props,null,p.mode,m),m.ref=Mi(p,null,d),m.return=p,m;case Br:return d=ru(d,p.mode,m),d.return=p,d;case Ln:var g=d._init;return h(p,g(d._payload),m)}if(ji(d)||Pi(d))return d=Er(d,p.mode,m,null),d.return=p,d;ds(p,d)}return null}function c(p,d,m,g){var I=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,d,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case es:return m.key===I?l(p,d,m,g):null;case Br:return m.key===I?u(p,d,m,g):null;case Ln:return I=m._init,c(p,d,I(m._payload),g)}if(ji(m)||Pi(m))return I!==null?null:f(p,d,m,g,null);ds(p,m)}return null}function y(p,d,m,g,I){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(m)||null,a(d,p,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case es:return p=p.get(g.key===null?m:g.key)||null,l(d,p,g,I);case Br:return p=p.get(g.key===null?m:g.key)||null,u(d,p,g,I);case Ln:var P=g._init;return y(p,d,m,P(g._payload),I)}if(ji(g)||Pi(g))return p=p.get(m)||null,f(d,p,g,I,null);ds(d,g)}return null}function w(p,d,m,g){for(var I=null,P=null,D=d,O=d=0,Y=null;D!==null&&O<m.length;O++){D.index>O?(Y=D,D=null):Y=D.sibling;var j=c(p,D,m[O],g);if(j===null){D===null&&(D=Y);break}t&&D&&j.alternate===null&&e(p,D),d=o(j,d,O),P===null?I=j:P.sibling=j,P=j,D=Y}if(O===m.length)return n(p,D),ke&&hr(p,O),I;if(D===null){for(;O<m.length;O++)D=h(p,m[O],g),D!==null&&(d=o(D,d,O),P===null?I=D:P.sibling=D,P=D);return ke&&hr(p,O),I}for(D=r(p,D);O<m.length;O++)Y=y(D,p,O,m[O],g),Y!==null&&(t&&Y.alternate!==null&&D.delete(Y.key===null?O:Y.key),d=o(Y,d,O),P===null?I=Y:P.sibling=Y,P=Y);return t&&D.forEach(function(ve){return e(p,ve)}),ke&&hr(p,O),I}function S(p,d,m,g){var I=Pi(m);if(typeof I!="function")throw Error(A(150));if(m=I.call(m),m==null)throw Error(A(151));for(var P=I=null,D=d,O=d=0,Y=null,j=m.next();D!==null&&!j.done;O++,j=m.next()){D.index>O?(Y=D,D=null):Y=D.sibling;var ve=c(p,D,j.value,g);if(ve===null){D===null&&(D=Y);break}t&&D&&ve.alternate===null&&e(p,D),d=o(ve,d,O),P===null?I=ve:P.sibling=ve,P=ve,D=Y}if(j.done)return n(p,D),ke&&hr(p,O),I;if(D===null){for(;!j.done;O++,j=m.next())j=h(p,j.value,g),j!==null&&(d=o(j,d,O),P===null?I=j:P.sibling=j,P=j);return ke&&hr(p,O),I}for(D=r(p,D);!j.done;O++,j=m.next())j=y(D,p,O,j.value,g),j!==null&&(t&&j.alternate!==null&&D.delete(j.key===null?O:j.key),d=o(j,d,O),P===null?I=j:P.sibling=j,P=j);return t&&D.forEach(function(Ie){return e(p,Ie)}),ke&&hr(p,O),I}function k(p,d,m,g){if(typeof m=="object"&&m!==null&&m.type===Vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case es:e:{for(var I=m.key,P=d;P!==null;){if(P.key===I){if(I=m.type,I===Vr){if(P.tag===7){n(p,P.sibling),d=i(P,m.props.children),d.return=p,p=d;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ln&&Xf(I)===P.type){n(p,P.sibling),d=i(P,m.props),d.ref=Mi(p,P,m),d.return=p,p=d;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===Vr?(d=Er(m.props.children,p.mode,g,m.key),d.return=p,p=d):(g=Ms(m.type,m.key,m.props,null,p.mode,g),g.ref=Mi(p,d,m),g.return=p,p=g)}return s(p);case Br:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=ru(m,p.mode,g),d.return=p,p=d}return s(p);case Ln:return P=m._init,k(p,d,P(m._payload),g)}if(ji(m))return w(p,d,m,g);if(Pi(m))return S(p,d,m,g);ds(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=nu(m,p.mode,g),d.return=p,p=d),s(p)):n(p,d)}return k}var mi=ng(!0),rg=ng(!1),jo={},rn=ur(jo),wo=ur(jo),So=ur(jo);function yr(t){if(t===jo)throw Error(A(174));return t}function od(t,e){switch(Se(So,e),Se(wo,t),Se(rn,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}Ee(rn),Se(rn,e)}function gi(){Ee(rn),Ee(wo),Ee(So)}function ig(t){yr(So.current);var e=yr(rn.current),n=Pu(e,t.type);e!==n&&(Se(wo,t),Se(rn,n))}function sd(t){wo.current===t&&(Ee(rn),Ee(wo))}var Ce=ur(0);function ia(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function ad(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var Ps=An.ReactCurrentDispatcher,Xl=An.ReactCurrentBatchConfig,Tr=0,Te=null,ze=null,We=null,oa=!1,qi=!1,_o=0,Yw=0;function nt(){throw Error(A(321))}function ld(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function ud(t,e,n,r,i,o){if(Tr=o,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ps.current=t===null||t.memoizedState===null?Zw:e1,t=n(r,i),qi){o=0;do{if(qi=!1,_o=0,25<=o)throw Error(A(301));o+=1,We=ze=null,e.updateQueue=null,Ps.current=t1,t=n(r,i)}while(qi)}if(Ps.current=sa,e=ze!==null&&ze.next!==null,Tr=0,We=ze=Te=null,oa=!1,e)throw Error(A(300));return t}function cd(){var t=_o!==0;return _o=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Te.memoizedState=We=t:We=We.next=t,We}function $t(){if(ze===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=We===null?Te.memoizedState:We.next;if(e!==null)We=e,ze=t;else{if(t===null)throw Error(A(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},We===null?Te.memoizedState=We=t:We=We.next=t}return We}function Eo(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=$t(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Tr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,Te.lanes|=f,Ar|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Qt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Te.lanes|=o,Ar|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zl(t){var e=$t(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Qt(o,e.memoizedState)||(yt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function og(){}function sg(t,e){var n=Te,r=$t(),i=e(),o=!Qt(r.memoizedState,i);if(o&&(r.memoizedState=i,yt=!0),r=r.queue,dd(ug.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ko(9,lg.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(A(349));Tr&30||ag(n,e,i)}return i}function ag(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lg(t,e,n,r){e.value=n,e.getSnapshot=r,cg(e)&&dg(t)}function ug(t,e,n){return n(function(){cg(e)&&dg(t)})}function cg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function dg(t){var e=En(t,1);e!==null&&Kt(e,t,1,-1)}function Jf(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=Jw.bind(null,Te,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fg(){return $t().memoizedState}function bs(t,e,n,r){var i=Jt();Te.flags|=t,i.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function Ua(t,e,n,r){var i=$t();r=r===void 0?null:r;var o=void 0;if(ze!==null){var s=ze.memoizedState;if(o=s.destroy,r!==null&&ld(r,s.deps)){i.memoizedState=ko(e,n,o,r);return}}Te.flags|=t,i.memoizedState=ko(1|e,n,o,r)}function Zf(t,e){return bs(8390656,8,t,e)}function dd(t,e){return Ua(2048,8,t,e)}function hg(t,e){return Ua(4,2,t,e)}function pg(t,e){return Ua(4,4,t,e)}function mg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gg(t,e,n){return n=n!=null?n.concat([t]):null,Ua(4,4,mg.bind(null,e,t),n)}function fd(){}function vg(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ld(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yg(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ld(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wg(t,e,n){return Tr&21?(Qt(n,e)||(n=Em(),Te.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function qw(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Xl.transition;Xl.transition={};try{t(!1),e()}finally{pe=n,Xl.transition=r}}function Sg(){return $t().memoizedState}function Xw(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_g(t))Eg(e,n);else if(n=Jm(t,e,n,r),n!==null){var i=ft();Kt(n,t,r,i),kg(n,e,r)}}function Jw(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_g(t))Eg(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Qt(a,s)){var l=e.interleaved;l===null?(i.next=i,rd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Jm(t,e,i,r),n!==null&&(i=ft(),Kt(n,t,r,i),kg(n,e,r))}}function _g(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function Eg(t,e){qi=oa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vc(t,n)}}var sa={readContext:Ft,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},Zw={readContext:Ft,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Zf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bs(4194308,4,mg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bs(4194308,4,t,e)},useInsertionEffect:function(t,e){return bs(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Xw.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:Jf,useDebugValue:fd,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Jf(!1),e=t[0];return t=qw.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=Jt();if(ke){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ke===null)throw Error(A(349));Tr&30||ag(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Zf(ug.bind(null,r,o,t),[t]),r.flags|=2048,ko(9,lg.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Jt(),e=Ke.identifierPrefix;if(ke){var n=mn,r=pn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},e1={readContext:Ft,useCallback:vg,useContext:Ft,useEffect:dd,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:pg,useMemo:yg,useReducer:Jl,useRef:fg,useState:function(){return Jl(Eo)},useDebugValue:fd,useDeferredValue:function(t){var e=$t();return wg(e,ze.memoizedState,t)},useTransition:function(){var t=Jl(Eo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:og,useSyncExternalStore:sg,useId:Sg,unstable_isNewReconciler:!1},t1={readContext:Ft,useCallback:vg,useContext:Ft,useEffect:dd,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:pg,useMemo:yg,useReducer:Zl,useRef:fg,useState:function(){return Zl(Eo)},useDebugValue:fd,useDeferredValue:function(t){var e=$t();return ze===null?e.memoizedState=t:wg(e,ze.memoizedState,t)},useTransition:function(){var t=Zl(Eo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:og,useSyncExternalStore:sg,useId:Sg,unstable_isNewReconciler:!1};function vi(t,e){try{var n="",r=e;do n+=R0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var n1=typeof WeakMap=="function"?WeakMap:Map;function Ig(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){la||(la=!0,uc=r),Zu(t,e)},n}function Cg(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zu(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zu(t,e),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function eh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new n1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=g1.bind(null,t,e,n),e.then(t,t))}function th(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var r1=An.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?rg(e,null,n,r):mi(e,t.child,n,r)}function rh(t,e,n,r,i){n=n.render;var o=e.ref;return si(e,i),r=ud(t,e,n,r,o,i),n=cd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(ke&&n&&Xc(e),e.flags|=1,ct(t,e,r,i),e.child)}function ih(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Sd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Tg(t,e,o,r,i)):(t=Ms(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(s,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=Zn(o,r),t.ref=e.ref,t.return=e,e.child=t}function Tg(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(mo(o,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,kn(t,e,i)}return ec(t,e,n,r,i)}function Ag(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Zr,kt),kt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Zr,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Se(Zr,kt),kt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Se(Zr,kt),kt|=r;return ct(t,e,i,n),e.child}function xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ec(t,e,n,r,i){var o=_t(n)?Ir:st.current;return o=hi(e,o),si(e,i),n=ud(t,e,n,r,o,i),r=cd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(ke&&r&&Xc(e),e.flags|=1,ct(t,e,n,i),e.child)}function oh(t,e,n,r,i){if(_t(n)){var o=!0;Js(e)}else o=!1;if(si(e,i),e.stateNode===null)Ds(t,e),tg(e,n,r),Ju(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=_t(n)?Ir:st.current,u=hi(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qf(e,s,r,u),Fn=!1;var c=e.memoizedState;s.state=c,ra(e,r,s,i),l=e.memoizedState,a!==r||c!==l||St.current||Fn?(typeof f=="function"&&(Xu(e,n,f,r),l=e.memoizedState),(a=Fn||Yf(e,n,a,r,c,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Zm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vt(e.type,a),s.props=u,h=e.pendingProps,c=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=_t(n)?Ir:st.current,l=hi(e,l));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||c!==l)&&qf(e,s,r,l),Fn=!1,c=e.memoizedState,s.state=c,ra(e,r,s,i);var w=e.memoizedState;a!==h||c!==w||St.current||Fn?(typeof y=="function"&&(Xu(e,n,y,r),w=e.memoizedState),(u=Fn||Yf(e,n,u,r,c,w,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),r=!1)}return tc(t,e,n,r,o,i)}function tc(t,e,n,r,i,o){xg(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Hf(e,n,!1),kn(t,e,o);r=e.stateNode,r1.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=mi(e,t.child,null,o),e.child=mi(e,null,a,o)):ct(t,e,a,o),e.memoizedState=r.state,i&&Hf(e,n,!0),e.child}function Rg(t){var e=t.stateNode;e.pendingContext?Vf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vf(t,e.context,!1),od(t,e.containerInfo)}function sh(t,e,n,r,i){return pi(),Zc(i),e.flags|=256,ct(t,e,n,r),e.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function rc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pg(t,e,n){var r=e.pendingProps,i=Ce.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Ce,i&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Va(s,r,0,null),t=Er(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=rc(n),e.memoizedState=nc,t):hd(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return i1(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Zn(a,o):(o=Er(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?rc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=nc,r}return o=t.child,t=o.sibling,r=Zn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hd(t,e){return e=Va({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fs(t,e,n,r){return r!==null&&Zc(r),mi(e,t.child,null,n),t=hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function i1(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=eu(Error(A(422))),fs(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Va({mode:"visible",children:r.children},i,0,null),o=Er(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&mi(e,t.child,null,s),e.child.memoizedState=rc(s),e.memoizedState=nc,o);if(!(e.mode&1))return fs(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(A(419)),r=eu(o,r,void 0),fs(t,e,s,r)}if(a=(s&t.childLanes)!==0,yt||a){if(r=Ke,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,En(t,i),Kt(r,t,i,-1))}return wd(),r=eu(Error(A(421))),fs(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=v1.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ct=Yn(i.nextSibling),Tt=e,ke=!0,Wt=null,t!==null&&(Dt[Nt++]=pn,Dt[Nt++]=mn,Dt[Nt++]=Cr,pn=t.id,mn=t.overflow,Cr=e),e=hd(e,r.children),e.flags|=4096,e)}function ah(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qu(t.return,e,n)}function tu(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bg(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ct(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ah(t,n,e);else if(t.tag===19)ah(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ia(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tu(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ia(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tu(e,!0,n,null,o);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ds(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o1(t,e,n){switch(e.tag){case 3:Rg(e),pi();break;case 5:ig(e);break;case 1:_t(e.type)&&Js(e);break;case 4:od(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(ta,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?Pg(t,e,n):(Se(Ce,Ce.current&1),t=kn(t,e,n),t!==null?t.sibling:null);Se(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Ag(t,e,n)}return kn(t,e,n)}var Dg,ic,Ng,Og;Dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ic=function(){};Ng=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr(rn.current);var o=null;switch(n){case"input":i=Tu(t,i),r=Tu(t,r),o=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),o=[];break;case"textarea":i=Ru(t,i),r=Ru(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qs)}bu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Og=function(t,e,n,r){n!==r&&(e.flags|=4)};function Li(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function s1(t,e,n){var r=e.pendingProps;switch(Jc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return _t(e.type)&&Xs(),rt(e),null;case 3:return r=e.stateNode,gi(),Ee(St),Ee(st),ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(fc(Wt),Wt=null))),ic(t,e),rt(e),null;case 5:sd(e);var i=yr(So.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return rt(e),null}if(t=yr(rn.current),cs(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Zt]=e,r[yo]=o,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Vi.length;i++)_e(Vi[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":gf(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":yf(r,o),_e("invalid",r)}bu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&us(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&us(r.textContent,a,t),i=["children",""+a]):ao.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&_e("scroll",r)}switch(n){case"input":ts(r),vf(r,o,!0);break;case"textarea":ts(r),wf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Zt]=e,t[yo]=r,Dg(t,e,!1,!1),e.stateNode=t;e:{switch(s=Du(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vi.length;i++)_e(Vi[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":gf(t,r),i=Tu(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),_e("invalid",t);break;case"textarea":yf(t,r),i=Ru(t,r),_e("invalid",t);break;default:i=r}bu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cm(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lm(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ao.hasOwnProperty(o)?l!=null&&o==="onScroll"&&_e("scroll",t):l!=null&&Fc(t,o,l,s))}switch(n){case"input":ts(t),vf(t,r,!1);break;case"textarea":ts(t),wf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ni(t,!!r.multiple,o,!1):r.defaultValue!=null&&ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)Og(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=yr(So.current),yr(rn.current),cs(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(o=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:us(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&us(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return rt(e),null;case 13:if(Ee(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Ct!==null&&e.mode&1&&!(e.flags&128))Xm(),pi(),e.flags|=98560,o=!1;else if(o=cs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(A(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Zt]=e}else pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),o=!1}else Wt!==null&&(fc(Wt),Wt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?je===0&&(je=3):wd())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return gi(),ic(t,e),t===null&&go(e.stateNode.containerInfo),rt(e),null;case 10:return nd(e.type._context),rt(e),null;case 17:return _t(e.type)&&Xs(),rt(e),null;case 19:if(Ee(Ce),o=e.memoizedState,o===null)return rt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Li(o,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ia(t),s!==null){for(e.flags|=128,Li(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Ce,Ce.current&1|2),e.child}t=t.sibling}o.tail!==null&&Oe()>yi&&(e.flags|=128,r=!0,Li(o,!1),e.lanes=4194304)}else{if(!r)if(t=ia(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Li(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ke)return rt(e),null}else 2*Oe()-o.renderingStartTime>yi&&n!==1073741824&&(e.flags|=128,r=!0,Li(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Oe(),e.sibling=null,n=Ce.current,Se(Ce,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return yd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function a1(t,e){switch(Jc(e),e.tag){case 1:return _t(e.type)&&Xs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gi(),Ee(St),Ee(st),ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sd(e),null;case 13:if(Ee(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ce),null;case 4:return gi(),null;case 10:return nd(e.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var hs=!1,ot=!1,l1=typeof WeakSet=="function"?WeakSet:Set,z=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function oc(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var lh=!1;function u1(t,e){if(Bu=Ks,t=$m(),qc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=t,c=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)c=h,h=y;for(;;){if(h===t)break t;if(c===n&&++u===i&&(a=s),c===o&&++f===r&&(l=s),(y=h.nextSibling)!==null)break;h=c,c=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},Ks=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,k=w.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?S:Vt(e.type,S),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(g){Pe(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return w=lh,lh=!1,w}function Xi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&oc(e,n,o)}i=i.next}while(i!==r)}}function ja(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mg(t){var e=t.alternate;e!==null&&(t.alternate=null,Mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[yo],delete e[Gu],delete e[Ww],delete e[Gw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lg(t){return t.tag===5||t.tag===3||t.tag===4}function uh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qs));else if(r!==4&&(t=t.child,t!==null))for(ac(t,e,n),t=t.sibling;t!==null;)ac(t,e,n),t=t.sibling}function lc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lc(t,e,n),t=t.sibling;t!==null;)lc(t,e,n),t=t.sibling}var Ye=null,Ht=!1;function bn(t,e,n){for(n=n.child;n!==null;)Fg(t,e,n),n=n.sibling}function Fg(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 5:ot||Jr(n,e);case 6:var r=Ye,i=Ht;Ye=null,bn(t,e,n),Ye=r,Ht=i,Ye!==null&&(Ht?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Ht?(t=Ye,n=n.stateNode,t.nodeType===8?Ql(t.parentNode,n):t.nodeType===1&&Ql(t,n),ho(t)):Ql(Ye,n.stateNode));break;case 4:r=Ye,i=Ht,Ye=n.stateNode.containerInfo,Ht=!0,bn(t,e,n),Ye=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&oc(n,e,s),i=i.next}while(i!==r)}bn(t,e,n);break;case 1:if(!ot&&(Jr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,e,a)}bn(t,e,n);break;case 21:bn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,bn(t,e,n),ot=r):bn(t,e,n);break;default:bn(t,e,n)}}function ch(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new l1),e.forEach(function(r){var i=y1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Ht=!1;break e;case 3:Ye=a.stateNode.containerInfo,Ht=!0;break e;case 4:Ye=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(Ye===null)throw Error(A(160));Fg(o,s,i),Ye=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$g(e,t),e=e.sibling}function $g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),Xt(t),r&4){try{Xi(3,t,t.return),ja(3,t)}catch(S){Pe(t,t.return,S)}try{Xi(5,t,t.return)}catch(S){Pe(t,t.return,S)}}break;case 1:Bt(e,t),Xt(t),r&512&&n!==null&&Jr(n,n.return);break;case 5:if(Bt(e,t),Xt(t),r&512&&n!==null&&Jr(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(S){Pe(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&om(i,o),Du(a,s);var u=Du(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?cm(i,h):f==="dangerouslySetInnerHTML"?lm(i,h):f==="children"?lo(i,h):Fc(i,f,h,u)}switch(a){case"input":Au(i,o);break;case"textarea":sm(i,o);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?ni(i,!!o.multiple,y,!1):c!==!!o.multiple&&(o.defaultValue!=null?ni(i,!!o.multiple,o.defaultValue,!0):ni(i,!!o.multiple,o.multiple?[]:"",!1))}i[yo]=o}catch(S){Pe(t,t.return,S)}}break;case 6:if(Bt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(S){Pe(t,t.return,S)}}break;case 3:if(Bt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(S){Pe(t,t.return,S)}break;case 4:Bt(e,t),Xt(t);break;case 13:Bt(e,t),Xt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(gd=Oe())),r&4&&ch(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(u=ot)||f,Bt(e,t),ot=u):Bt(e,t),Xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(h=z=f;z!==null;){switch(c=z,y=c.child,c.tag){case 0:case 11:case 14:case 15:Xi(4,c,c.return);break;case 1:Jr(c,c.return);var w=c.stateNode;if(typeof w.componentWillUnmount=="function"){r=c,n=c.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(S){Pe(r,n,S)}}break;case 5:Jr(c,c.return);break;case 22:if(c.memoizedState!==null){fh(h);continue}}y!==null?(y.return=c,z=y):fh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=um("display",s))}catch(S){Pe(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){Pe(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Bt(e,t),Xt(t),r&4&&ch(t);break;case 21:break;default:Bt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Lg(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var o=uh(t);lc(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=uh(t);ac(t,a,s);break;default:throw Error(A(161))}}catch(l){Pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c1(t,e,n){z=t,zg(t)}function zg(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||hs;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ot;a=hs;var u=ot;if(hs=s,(ot=l)&&!u)for(z=i;z!==null;)s=z,l=s.child,s.tag===22&&s.memoizedState!==null?hh(i):l!==null?(l.return=s,z=l):hh(i);for(;o!==null;)z=o,zg(o),o=o.sibling;z=i,hs=a,ot=u}dh(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):dh(t)}}function dh(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||ja(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Qf(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qf(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ot||e.flags&512&&sc(e)}catch(c){Pe(e,e.return,c)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function fh(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function hh(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ja(4,e)}catch(l){Pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Pe(e,i,l)}}var o=e.return;try{sc(e)}catch(l){Pe(e,o,l)}break;case 5:var s=e.return;try{sc(e)}catch(l){Pe(e,s,l)}}}catch(l){Pe(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var d1=Math.ceil,aa=An.ReactCurrentDispatcher,pd=An.ReactCurrentOwner,Mt=An.ReactCurrentBatchConfig,ue=0,Ke=null,Fe=null,Je=0,kt=0,Zr=ur(0),je=0,Io=null,Ar=0,Ba=0,md=0,Ji=null,vt=null,gd=0,yi=1/0,cn=null,la=!1,uc=null,Xn=null,ps=!1,Wn=null,ua=0,Zi=0,cc=null,Ns=-1,Os=0;function ft(){return ue&6?Oe():Ns!==-1?Ns:Ns=Oe()}function Jn(t){return t.mode&1?ue&2&&Je!==0?Je&-Je:Qw.transition!==null?(Os===0&&(Os=Em()),Os):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Rm(t.type)),t):1}function Kt(t,e,n,r){if(50<Zi)throw Zi=0,cc=null,Error(A(185));$o(t,n,r),(!(ue&2)||t!==Ke)&&(t===Ke&&(!(ue&2)&&(Ba|=n),je===4&&Un(t,Je)),Et(t,r),n===1&&ue===0&&!(e.mode&1)&&(yi=Oe()+500,$a&&cr()))}function Et(t,e){var n=t.callbackNode;Q0(t,e);var r=Gs(t,t===Ke?Je:0);if(r===0)n!==null&&Ef(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ef(n),e===1)t.tag===0?Kw(ph.bind(null,t)):Qm(ph.bind(null,t)),Vw(function(){!(ue&6)&&cr()}),n=null;else{switch(km(r)){case 1:n=Bc;break;case 4:n=Sm;break;case 16:n=Ws;break;case 536870912:n=_m;break;default:n=Ws}n=Kg(n,Ug.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ug(t,e){if(Ns=-1,Os=0,ue&6)throw Error(A(327));var n=t.callbackNode;if(ai()&&t.callbackNode!==n)return null;var r=Gs(t,t===Ke?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ca(t,r);else{e=r;var i=ue;ue|=2;var o=Bg();(Ke!==t||Je!==e)&&(cn=null,yi=Oe()+500,_r(t,e));do try{p1();break}catch(a){jg(t,a)}while(1);td(),aa.current=o,ue=i,Fe!==null?e=0:(Ke=null,Je=0,e=je)}if(e!==0){if(e===2&&(i=Fu(t),i!==0&&(r=i,e=dc(t,i))),e===1)throw n=Io,_r(t,0),Un(t,r),Et(t,Oe()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!f1(i)&&(e=ca(t,r),e===2&&(o=Fu(t),o!==0&&(r=o,e=dc(t,o))),e===1))throw n=Io,_r(t,0),Un(t,r),Et(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:pr(t,vt,cn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=gd+500-Oe(),10<e)){if(Gs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wu(pr.bind(null,t,vt,cn),e);break}pr(t,vt,cn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Gt(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d1(r/1960))-r,10<r){t.timeoutHandle=Wu(pr.bind(null,t,vt,cn),r);break}pr(t,vt,cn);break;case 5:pr(t,vt,cn);break;default:throw Error(A(329))}}}return Et(t,Oe()),t.callbackNode===n?Ug.bind(null,t):null}function dc(t,e){var n=Ji;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=ca(t,e),t!==2&&(e=vt,vt=n,e!==null&&fc(e)),t}function fc(t){vt===null?vt=t:vt.push.apply(vt,t)}function f1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qt(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~md,e&=~Ba,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function ph(t){if(ue&6)throw Error(A(327));ai();var e=Gs(t,0);if(!(e&1))return Et(t,Oe()),null;var n=ca(t,e);if(t.tag!==0&&n===2){var r=Fu(t);r!==0&&(e=r,n=dc(t,r))}if(n===1)throw n=Io,_r(t,0),Un(t,e),Et(t,Oe()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,vt,cn),Et(t,Oe()),null}function vd(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(yi=Oe()+500,$a&&cr())}}function xr(t){Wn!==null&&Wn.tag===0&&!(ue&6)&&ai();var e=ue;ue|=1;var n=Mt.transition,r=pe;try{if(Mt.transition=null,pe=1,t)return t()}finally{pe=r,Mt.transition=n,ue=e,!(ue&6)&&cr()}}function yd(){kt=Zr.current,Ee(Zr)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Bw(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xs();break;case 3:gi(),Ee(St),Ee(st),ad();break;case 5:sd(r);break;case 4:gi();break;case 13:Ee(Ce);break;case 19:Ee(Ce);break;case 10:nd(r.type._context);break;case 22:case 23:yd()}n=n.return}if(Ke=t,Fe=t=Zn(t.current,null),Je=kt=e,je=0,Io=null,md=Ba=Ar=0,vt=Ji=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}vr=null}return t}function jg(t,e){do{var n=Fe;try{if(td(),Ps.current=sa,oa){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oa=!1}if(Tr=0,We=ze=Te=null,qi=!1,_o=0,pd.current=null,n===null||n.return===null){je=1,Io=e,Fe=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=th(s);if(y!==null){y.flags&=-257,nh(y,s,a,o,e),y.mode&1&&eh(o,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var S=new Set;S.add(l),e.updateQueue=S}else w.add(l);break e}else{if(!(e&1)){eh(o,u,e),wd();break e}l=Error(A(426))}}else if(ke&&a.mode&1){var k=th(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),nh(k,s,a,o,e),Zc(vi(l,a));break e}}o=l=vi(l,a),je!==4&&(je=2),Ji===null?Ji=[o]:Ji.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=Ig(o,l,e);Kf(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xn===null||!Xn.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var g=Cg(o,a,e);Kf(o,g);break e}}o=o.return}while(o!==null)}Hg(n)}catch(I){e=I,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function Bg(){var t=aa.current;return aa.current=sa,t===null?sa:t}function wd(){(je===0||je===3||je===2)&&(je=4),Ke===null||!(Ar&268435455)&&!(Ba&268435455)||Un(Ke,Je)}function ca(t,e){var n=ue;ue|=2;var r=Bg();(Ke!==t||Je!==e)&&(cn=null,_r(t,e));do try{h1();break}catch(i){jg(t,i)}while(1);if(td(),ue=n,aa.current=r,Fe!==null)throw Error(A(261));return Ke=null,Je=0,je}function h1(){for(;Fe!==null;)Vg(Fe)}function p1(){for(;Fe!==null&&!z0();)Vg(Fe)}function Vg(t){var e=Gg(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?Hg(t):Fe=e,pd.current=null}function Hg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=a1(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Fe=null;return}}else if(n=s1(n,e,kt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);je===0&&(je=5)}function pr(t,e,n){var r=pe,i=Mt.transition;try{Mt.transition=null,pe=1,m1(t,e,n,r)}finally{Mt.transition=i,pe=r}return null}function m1(t,e,n,r){do ai();while(Wn!==null);if(ue&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Y0(t,o),t===Ke&&(Fe=Ke=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ps||(ps=!0,Kg(Ws,function(){return ai(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mt.transition,Mt.transition=null;var s=pe;pe=1;var a=ue;ue|=4,pd.current=null,u1(t,n),$g(n,t),Mw(Vu),Ks=!!Bu,Vu=Bu=null,t.current=n,c1(n),U0(),ue=a,pe=s,Mt.transition=o}else t.current=n;if(ps&&(ps=!1,Wn=t,ua=i),o=t.pendingLanes,o===0&&(Xn=null),V0(n.stateNode),Et(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(la)throw la=!1,t=uc,uc=null,t;return ua&1&&t.tag!==0&&ai(),o=t.pendingLanes,o&1?t===cc?Zi++:(Zi=0,cc=t):Zi=0,cr(),null}function ai(){if(Wn!==null){var t=km(ua),e=Mt.transition,n=pe;try{if(Mt.transition=null,pe=16>t?16:t,Wn===null)var r=!1;else{if(t=Wn,Wn=null,ua=0,ue&6)throw Error(A(331));var i=ue;for(ue|=4,z=t.current;z!==null;){var o=z,s=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Xi(8,f,o)}var h=f.child;if(h!==null)h.return=f,z=h;else for(;z!==null;){f=z;var c=f.sibling,y=f.return;if(Mg(f),f===u){z=null;break}if(c!==null){c.return=y,z=c;break}z=y}}}var w=o.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,z=s;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,z=p;break e}z=o.return}}var d=t.current;for(z=d;z!==null;){s=z;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,z=m;else e:for(s=d;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ja(9,a)}}catch(I){Pe(a,a.return,I)}if(a===s){z=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,z=g;break e}z=a.return}}if(ue=i,cr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Na,t)}catch{}r=!0}return r}finally{pe=n,Mt.transition=e}}return!1}function mh(t,e,n){e=vi(n,e),e=Ig(t,e,1),t=qn(t,e,1),e=ft(),t!==null&&($o(t,1,e),Et(t,e))}function Pe(t,e,n){if(t.tag===3)mh(t,t,n);else for(;e!==null;){if(e.tag===3){mh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){t=vi(n,t),t=Cg(e,t,1),e=qn(e,t,1),t=ft(),e!==null&&($o(e,1,t),Et(e,t));break}}e=e.return}}function g1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Je&n)===n&&(je===4||je===3&&(Je&130023424)===Je&&500>Oe()-gd?_r(t,0):md|=n),Et(t,e)}function Wg(t,e){e===0&&(t.mode&1?(e=is,is<<=1,!(is&130023424)&&(is=4194304)):e=1);var n=ft();t=En(t,e),t!==null&&($o(t,e,n),Et(t,n))}function v1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wg(t,n)}function y1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),Wg(t,n)}var Gg;Gg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,o1(t,e,n);yt=!!(t.flags&131072)}else yt=!1,ke&&e.flags&1048576&&Ym(e,ea,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ds(t,e),t=e.pendingProps;var i=hi(e,st.current);si(e,n),i=ud(null,e,r,t,i,n);var o=cd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(o=!0,Js(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,id(e),i.updater=za,e.stateNode=i,i._reactInternals=e,Ju(e,r,t,n),e=tc(null,e,r,!0,o,n)):(e.tag=0,ke&&o&&Xc(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ds(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=S1(r),t=Vt(r,t),i){case 0:e=ec(null,e,r,t,n);break e;case 1:e=oh(null,e,r,t,n);break e;case 11:e=rh(null,e,r,t,n);break e;case 14:e=ih(null,e,r,Vt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),ec(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),oh(t,e,r,i,n);case 3:e:{if(Rg(e),t===null)throw Error(A(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Zm(t,e),ra(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=vi(Error(A(423)),e),e=sh(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(A(424)),e),e=sh(t,e,r,n,i);break e}else for(Ct=Yn(e.stateNode.containerInfo.firstChild),Tt=e,ke=!0,Wt=null,n=rg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){e=kn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return ig(e),t===null&&Yu(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Hu(r,i)?s=null:o!==null&&Hu(r,o)&&(e.flags|=32),xg(t,e),ct(t,e,s,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return Pg(t,e,n);case 4:return od(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mi(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),rh(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Se(ta,r._currentValue),r._currentValue=s,o!==null)if(Qt(o.value,s)){if(o.children===i.children&&!St.current){e=kn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=yn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qu(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),qu(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,si(e,n),i=Ft(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),ih(t,e,r,i,n);case 15:return Tg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ds(t,e),e.tag=1,_t(r)?(t=!0,Js(e)):t=!1,si(e,n),tg(e,r,i),Ju(e,r,i,n),tc(null,e,r,!0,t,n);case 19:return bg(t,e,n);case 22:return Ag(t,e,n)}throw Error(A(156,e.tag))};function Kg(t,e){return wm(t,e)}function w1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new w1(t,e,n,r)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S1(t){if(typeof t=="function")return Sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zc)return 11;if(t===Uc)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ms(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Sd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Vr:return Er(n.children,i,o,e);case $c:s=8,i|=8;break;case Eu:return t=Ot(12,n,e,i|2),t.elementType=Eu,t.lanes=o,t;case ku:return t=Ot(13,n,e,i),t.elementType=ku,t.lanes=o,t;case Iu:return t=Ot(19,n,e,i),t.elementType=Iu,t.lanes=o,t;case nm:return Va(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case em:s=10;break e;case tm:s=9;break e;case zc:s=11;break e;case Uc:s=14;break e;case Ln:s=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Ot(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Er(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function Va(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=nm,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _d(t,e,n,r,i,o,s,a,l){return t=new _1(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ot(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},id(o),t}function E1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qg(t){if(!t)return ar;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(_t(n))return Km(t,n,e)}return e}function Yg(t,e,n,r,i,o,s,a,l){return t=_d(n,r,!0,t,i,o,s,a,l),t.context=Qg(null),n=t.current,r=ft(),i=Jn(n),o=yn(r,i),o.callback=e??null,qn(n,o,i),t.current.lanes=i,$o(t,i,r),Et(t,r),t}function Ha(t,e,n,r){var i=e.current,o=ft(),s=Jn(i);return n=Qg(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,s),t!==null&&(Kt(t,i,s,o),Rs(t,i,s)),s}function da(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ed(t,e){gh(t,e),(t=t.alternate)&&gh(t,e)}function k1(){return null}var qg=typeof reportError=="function"?reportError:function(t){console.error(t)};function kd(t){this._internalRoot=t}Wa.prototype.render=kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Ha(t,e,null,null)};Wa.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){Ha(null,t,null,null)}),e[_n]=null}};function Wa(t){this._internalRoot=t}Wa.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&xm(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vh(){}function I1(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=da(s);o.call(u)}}var s=Yg(e,r,t,0,null,!1,!1,"",vh);return t._reactRootContainer=s,t[_n]=s.current,go(t.nodeType===8?t.parentNode:t),xr(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=da(l);a.call(u)}}var l=_d(t,0,!1,null,null,!1,!1,"",vh);return t._reactRootContainer=l,t[_n]=l.current,go(t.nodeType===8?t.parentNode:t),xr(function(){Ha(e,l,n,r)}),l}function Ka(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=da(s);a.call(l)}}Ha(e,s,t,i)}else s=I1(n,e,t,i,r);return da(s)}Im=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bi(e.pendingLanes);n!==0&&(Vc(e,n|1),Et(e,Oe()),!(ue&6)&&(yi=Oe()+500,cr()))}break;case 13:xr(function(){var r=En(t,1);if(r!==null){var i=ft();Kt(r,t,1,i)}}),Ed(t,1)}};Hc=function(t){if(t.tag===13){var e=En(t,134217728);if(e!==null){var n=ft();Kt(e,t,134217728,n)}Ed(t,134217728)}};Cm=function(t){if(t.tag===13){var e=Jn(t),n=En(t,e);if(n!==null){var r=ft();Kt(n,t,e,r)}Ed(t,e)}};Tm=function(){return pe};Am=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Ou=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fa(r);if(!i)throw Error(A(90));im(r),Au(r,i)}}}break;case"textarea":sm(t,n);break;case"select":e=n.value,e!=null&&ni(t,!!n.multiple,e,!1)}};hm=vd;pm=xr;var C1={usingClientEntryPoint:!1,Events:[Uo,Kr,Fa,dm,fm,vd]},Fi={findFiberByHostInstance:gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},T1={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||k1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{Na=ms.inject(T1),nn=ms}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(A(200));return E1(t,e,null,n)};Rt.createRoot=function(t,e){if(!Id(t))throw Error(A(299));var n=!1,r="",i=qg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_d(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,go(t.nodeType===8?t.parentNode:t),new kd(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=vm(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return xr(t)};Rt.hydrate=function(t,e,n){if(!Ga(e))throw Error(A(200));return Ka(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Id(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=qg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,i,!1,o,s),t[_n]=e.current,go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wa(e)};Rt.render=function(t,e,n){if(!Ga(e))throw Error(A(200));return Ka(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Ga(t))throw Error(A(40));return t._reactRootContainer?(xr(function(){Ka(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};Rt.unstable_batchedUpdates=vd;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ga(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Ka(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Rt})(k0);var yh=wu;yu.createRoot=yh.createRoot,yu.hydrateRoot=yh.hydrateRoot;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ce(){return ce=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ce.apply(this,arguments)}var Le;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Le||(Le={}));const wh="popstate";function A1(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Co("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Rr(i)}return R1(e,n,null,t)}function J(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function x1(){return Math.random().toString(36).substr(2,8)}function Sh(t,e){return{usr:t.state,key:t.key,idx:e}}function Co(t,e,n,r){return n===void 0&&(n=null),ce({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xn(e):e,{state:n,key:e&&e.key||r||x1()})}function Rr(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function R1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Le.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(ce({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function h(){a=Le.Pop;let k=f(),p=k==null?null:k-u;u=k,l&&l({action:a,location:S.location,delta:p})}function c(k,p){a=Le.Push;let d=Co(S.location,k,p);n&&n(d,k),u=f()+1;let m=Sh(d,u),g=S.createHref(d);try{s.pushState(m,"",g)}catch{i.location.assign(g)}o&&l&&l({action:a,location:S.location,delta:1})}function y(k,p){a=Le.Replace;let d=Co(S.location,k,p);n&&n(d,k),u=f();let m=Sh(d,u),g=S.createHref(d);s.replaceState(m,"",g),o&&l&&l({action:a,location:S.location,delta:0})}function w(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:Rr(k);return J(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let S={get action(){return a},get location(){return t(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(wh,h),l=k,()=>{i.removeEventListener(wh,h),l=null}},createHref(k){return e(i,k)},createURL:w,encodeLocation(k){let p=w(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:c,replace:y,go(k){return s.go(k)}};return S}var qe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qe||(qe={}));function P1(t){return t.index===!0}function Xg(t,e,n){return e===void 0&&(e=[]),n===void 0&&(n=new Set),t.map((r,i)=>{let o=[...e,i],s=typeof r.id=="string"?r.id:o.join("-");return J(r.index!==!0||!r.children,"Cannot specify children on an index route"),J(!n.has(s),'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),n.add(s),P1(r)?ce({},r,{id:s}):ce({},r,{id:s,children:r.children?Xg(r.children,o,n):void 0})})}function Hi(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xn(e):e,i=ev(r.pathname||"/",n);if(i==null)return null;let o=Jg(t);b1(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=U1(o[a],V1(i));return s}function Jg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=er([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(J(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jg(o.children,e,f,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:$1(u,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Zg(o.path))i(o,s,l)}),e}function Zg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Zg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function b1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:z1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D1=/^:\w+$/,N1=3,O1=2,M1=1,L1=10,F1=-2,_h=t=>t==="*";function $1(t,e){let n=t.split("/"),r=n.length;return n.some(_h)&&(r+=F1),e&&(r+=O1),n.filter(i=>!_h(i)).reduce((i,o)=>i+(D1.test(o)?N1:o===""?M1:L1),r)}function z1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function U1(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",f=j1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let h=a.route;o.push({params:r,pathname:er([i,f.pathname]),pathnameBase:K1(er([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=er([i,f.pathnameBase]))}return o}function j1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=B1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,h)=>{if(f==="*"){let c=a[h]||"";s=o.slice(0,o.length-c.length).replace(/(.)\/+$/,"$1")}return u[f]=H1(a[h]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:t}}function B1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),To(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function V1(t){try{return decodeURI(t)}catch(e){return To(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function H1(t,e){try{return decodeURIComponent(t)}catch(n){return To(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ev(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function To(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function W1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xn(t):t;return{pathname:n?n.startsWith("/")?n:G1(n,e):e,search:Q1(r),hash:Y1(i)}}function G1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function iu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cd(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xn(t):(i=ce({},t),J(!i.pathname||!i.pathname.includes("?"),iu("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),iu("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),iu("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=e.length-1;if(s.startsWith("..")){let c=s.split("/");for(;c[0]==="..";)c.shift(),h-=1;i.pathname=c.join("/")}a=h>=0?e[h]:"/"}let l=W1(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const er=t=>t.join("/").replace(/\/\/+/g,"/"),K1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Q1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Y1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Eh extends Error{}class q1{constructor(e,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],J(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((o,s)=>r=s),this.controller=new AbortController;let i=()=>r(new Eh("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(e).reduce((o,s)=>{let[a,l]=s;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(e,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(e),this.pendingKeysSet.add(e);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,e,null,i),i=>this.onSettle(r,e,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(e,n,r,i){return this.controller.signal.aborted&&r instanceof Eh?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(e,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(e,n){this.subscribers.forEach(r=>r(e,n))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((e,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(e){let n=!1;if(!this.done){let r=()=>this.cancel();e.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(o=>{e.removeEventListener("abort",r),(o||this.done)&&i(o)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return J(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,n)=>{let[r,i]=n;return Object.assign(e,{[r]:J1(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function X1(t){return t instanceof Promise&&t._tracked===!0}function J1(t){if(!X1(t))return t;if(t._error)throw t._error;return t._data}class Td{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function nv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rv=["post","put","patch","delete"],Z1=new Set(rv),eS=["get",...rv],tS=new Set(eS),nS=new Set([301,302,303,307,308]),rS=new Set([307,308]),ou={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},iS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},kh={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ov=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oS=!ov;function sS(t){J(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=Xg(t.routes),n=null,r=new Set,i=null,o=null,s=null,a=t.hydrationData!=null,l=Hi(e,t.history.location,t.basename),u=null;if(l==null){let v=Mn(404,{pathname:t.history.location.pathname}),{matches:E,route:C}=Rh(e);l=E,u={[C.id]:v}}let f=!l.some(v=>v.route.loader)||t.hydrationData!=null,h,c={historyAction:t.history.action,location:t.history.location,matches:l,initialized:f,navigation:ou,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||u,fetchers:new Map,blockers:new Map},y=Le.Pop,w=!1,S,k=!1,p=!1,d=[],m=[],g=new Map,I=0,P=-1,D=new Map,O=new Set,Y=new Map,j=new Map,ve=new Map,Ie=!1;function $e(){return n=t.history.listen(v=>{let{action:E,location:C,delta:U}=v;if(Ie){Ie=!1;return}To(ve.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let N=Pn({currentLocation:c.location,nextLocation:C,historyAction:E});if(N&&U!=null){Ie=!0,t.history.go(U*-1),xe(N,{state:"blocked",location:C,proceed(){xe(N,{state:"proceeding",proceed:void 0,reset:void 0,location:C}),t.history.go(U)},reset(){te(N),ye({blockers:new Map(h.state.blockers)})}});return}return B(E,C)}),c.initialized||B(Le.Pop,c.location),h}function lt(){n&&n(),r.clear(),S&&S.abort(),c.fetchers.forEach((v,E)=>le(E)),c.blockers.forEach((v,E)=>te(E))}function Be(v){return r.add(v),()=>r.delete(v)}function ye(v){c=ce({},c,v),r.forEach(E=>E(c))}function De(v,E){var C,U;let N=c.actionData!=null&&c.navigation.formMethod!=null&&dn(c.navigation.formMethod)&&c.navigation.state==="loading"&&((C=v.state)==null?void 0:C._isRedirect)!==!0,q;E.actionData?Object.keys(E.actionData).length>0?q=E.actionData:q=null:N?q=c.actionData:q=null;let G=E.loaderData?xh(c.loaderData,E.loaderData,E.matches||[],E.errors):c.loaderData;for(let[H]of ve)te(H);let ee=w===!0||c.navigation.formMethod!=null&&dn(c.navigation.formMethod)&&((U=v.state)==null?void 0:U._isRedirect)!==!0;ye(ce({},E,{actionData:q,loaderData:G,historyAction:y,location:v,initialized:!0,navigation:ou,revalidation:"idle",restoreScrollPosition:mt(v,E.matches||c.matches),preventScrollReset:ee,blockers:new Map(c.blockers)})),k||y===Le.Pop||(y===Le.Push?t.history.push(v,v.state):y===Le.Replace&&t.history.replace(v,v.state)),y=Le.Pop,w=!1,k=!1,p=!1,d=[],m=[]}async function x(v,E){if(typeof v=="number"){t.history.go(v);return}let{path:C,submission:U,error:N}=Ih(v,E),q=c.location,G=Co(c.location,C,E&&E.state);G=ce({},G,t.history.encodeLocation(G));let ee=E&&E.replace!=null?E.replace:void 0,H=Le.Push;ee===!0?H=Le.Replace:ee===!1||U!=null&&dn(U.formMethod)&&U.formAction===c.location.pathname+c.location.search&&(H=Le.Replace);let ut=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,oe=Pn({currentLocation:q,nextLocation:G,historyAction:H});if(oe){xe(oe,{state:"blocked",location:G,proceed(){xe(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),x(v,E)},reset(){te(oe),ye({blockers:new Map(c.blockers)})}});return}return await B(H,G,{submission:U,pendingError:N,preventScrollReset:ut,replace:E&&E.replace})}function V(){if(we(),ye({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){B(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}B(y||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function B(v,E,C){S&&S.abort(),S=null,y=v,k=(C&&C.startUninterruptedRevalidation)===!0,dr(c.location,c.matches),w=(C&&C.preventScrollReset)===!0;let U=C&&C.overrideNavigation,N=Hi(e,E,t.basename);if(!N){let Re=Mn(404,{pathname:E.pathname}),{matches:Ut,route:jt}=Rh(e);Ne(),De(E,{matches:Ut,loaderData:{},errors:{[jt.id]:Re}});return}if(dS(c.location,E)&&!(C&&C.submission&&dn(C.submission.formMethod))){De(E,{matches:N});return}S=new AbortController;let q=zi(t.history,E,S.signal,C&&C.submission),G,ee;if(C&&C.pendingError)ee={[ei(N).route.id]:C.pendingError};else if(C&&C.submission&&dn(C.submission.formMethod)){let Re=await fe(q,E,C.submission,N,{replace:C.replace});if(Re.shortCircuited)return;G=Re.pendingActionData,ee=Re.pendingActionError,U=ce({state:"loading",location:E},C.submission),q=new Request(q.url,{signal:q.signal})}let{shortCircuited:H,loaderData:ut,errors:oe}=await b(q,E,N,U,C&&C.submission,C&&C.replace,G,ee);H||(S=null,De(E,ce({matches:N},G?{actionData:G}:{},{loaderData:ut,errors:oe})))}async function fe(v,E,C,U,N){we();let q=ce({state:"submitting",location:E},C);ye({navigation:q});let G,ee=Nh(U,E);if(!ee.route.action)G={type:qe.error,error:Mn(405,{method:v.method,pathname:E.pathname,routeId:ee.route.id})};else if(G=await $i("action",v,ee,U,h.basename),v.signal.aborted)return{shortCircuited:!0};if(li(G)){let H;return N&&N.replace!=null?H=N.replace:H=G.location===c.location.pathname+c.location.search,await X(c,G,{submission:C,replace:H}),{shortCircuited:!0}}if(eo(G)){let H=ei(U,ee.route.id);return(N&&N.replace)!==!0&&(y=Le.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:G.error}}}if(wr(G))throw Mn(400,{type:"defer-action"});return{pendingActionData:{[ee.route.id]:G.data}}}async function b(v,E,C,U,N,q,G,ee){let H=U;H||(H=ce({state:"loading",location:E,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},N));let ut=N||(H.formMethod&&H.formAction&&H.formData&&H.formEncType?{formMethod:H.formMethod,formAction:H.formAction,formData:H.formData,formEncType:H.formEncType}:void 0),[oe,Re]=Ch(t.history,c,C,ut,E,p,d,m,G,ee,Y);if(Ne(tt=>!(C&&C.some(qt=>qt.route.id===tt))||oe&&oe.some(qt=>qt.route.id===tt)),oe.length===0&&Re.length===0)return De(E,ce({matches:C,loaderData:{},errors:ee||null},G?{actionData:G}:{})),{shortCircuited:!0};if(!k){Re.forEach(qt=>{let fr=c.fetchers.get(qt.key),Jo={state:"loading",data:fr&&fr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(qt.key,Jo)});let tt=G||c.actionData;ye(ce({navigation:H},tt?Object.keys(tt).length===0?{actionData:null}:{actionData:tt}:{},Re.length>0?{fetchers:new Map(c.fetchers)}:{}))}P=++I,Re.forEach(tt=>g.set(tt.key,S));let{results:Ut,loaderResults:jt,fetcherResults:Ri}=await R(c.matches,C,oe,Re,v);if(v.signal.aborted)return{shortCircuited:!0};Re.forEach(tt=>g.delete(tt.key));let qo=Ph(Ut);if(qo)return await X(c,qo,{replace:q}),{shortCircuited:!0};let{loaderData:Xo,errors:zr}=Ah(c,C,oe,jt,ee,Re,Ri,j);j.forEach((tt,qt)=>{tt.subscribe(fr=>{(fr||tt.done)&&j.delete(qt)})}),et();let Rl=ie(P);return ce({loaderData:Xo,errors:zr},Rl||Re.length>0?{fetchers:new Map(c.fetchers)}:{})}function M(v){return c.fetchers.get(v)||iS}function F(v,E,C,U){if(oS)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");g.has(v)&&K(v);let N=Hi(e,C,t.basename);if(!N){se(v,E,Mn(404,{pathname:C}));return}let{path:q,submission:G}=Ih(C,U,!0),ee=Nh(N,q);if(w=(U&&U.preventScrollReset)===!0,G&&dn(G.formMethod)){W(v,E,q,ee,N,G);return}Y.set(v,{routeId:E,path:q,match:ee,matches:N}),_(v,E,q,ee,N,G)}async function W(v,E,C,U,N,q){if(we(),Y.delete(v),!U.route.action){let un=Mn(405,{method:q.formMethod,pathname:C,routeId:E});se(v,E,un);return}let G=c.fetchers.get(v),ee=ce({state:"submitting"},q,{data:G&&G.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(v,ee),ye({fetchers:new Map(c.fetchers)});let H=new AbortController,ut=zi(t.history,C,H.signal,q);g.set(v,H);let oe=await $i("action",ut,U,N,h.basename);if(ut.signal.aborted){g.get(v)===H&&g.delete(v);return}if(li(oe)){g.delete(v),O.add(v);let un=ce({state:"loading"},q,{data:void 0," _hasFetcherDoneAnything ":!0});return c.fetchers.set(v,un),ye({fetchers:new Map(c.fetchers)}),X(c,oe,{isFetchActionRedirect:!0})}if(eo(oe)){se(v,E,oe.error);return}if(wr(oe))throw Mn(400,{type:"defer-action"});let Re=c.navigation.location||c.location,Ut=zi(t.history,Re,H.signal),jt=c.navigation.state!=="idle"?Hi(e,c.navigation.location,t.basename):c.matches;J(jt,"Didn't find any matches after fetcher action");let Ri=++I;D.set(v,Ri);let qo=ce({state:"loading",data:oe.data},q,{" _hasFetcherDoneAnything ":!0});c.fetchers.set(v,qo);let[Xo,zr]=Ch(t.history,c,jt,q,Re,p,d,m,{[U.route.id]:oe.data},void 0,Y);zr.filter(un=>un.key!==v).forEach(un=>{let bl=un.key,uf=c.fetchers.get(bl),qy={state:"loading",data:uf&&uf.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(bl,qy),g.set(bl,H)}),ye({fetchers:new Map(c.fetchers)});let{results:Rl,loaderResults:tt,fetcherResults:qt}=await R(c.matches,jt,Xo,zr,Ut);if(H.signal.aborted)return;D.delete(v),g.delete(v),zr.forEach(un=>g.delete(un.key));let fr=Ph(Rl);if(fr)return X(c,fr);let{loaderData:Jo,errors:Pl}=Ah(c,c.matches,Xo,tt,void 0,zr,qt,j),Qy={state:"idle",data:oe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(v,Qy);let Yy=ie(Ri);c.navigation.state==="loading"&&Ri>P?(J(y,"Expected pending action"),S&&S.abort(),De(c.navigation.location,{matches:jt,loaderData:Jo,errors:Pl,fetchers:new Map(c.fetchers)})):(ye(ce({errors:Pl,loaderData:xh(c.loaderData,Jo,jt,Pl)},Yy?{fetchers:new Map(c.fetchers)}:{})),p=!1)}async function _(v,E,C,U,N,q){let G=c.fetchers.get(v),ee=ce({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},q,{data:G&&G.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(v,ee),ye({fetchers:new Map(c.fetchers)});let H=new AbortController,ut=zi(t.history,C,H.signal);g.set(v,H);let oe=await $i("loader",ut,U,N,h.basename);if(wr(oe)&&(oe=await uv(oe,ut.signal,!0)||oe),g.get(v)===H&&g.delete(v),ut.signal.aborted)return;if(li(oe)){await X(c,oe);return}if(eo(oe)){let Ut=ei(c.matches,E);c.fetchers.delete(v),ye({fetchers:new Map(c.fetchers),errors:{[Ut.route.id]:oe.error}});return}J(!wr(oe),"Unhandled fetcher deferred data");let Re={state:"idle",data:oe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(v,Re),ye({fetchers:new Map(c.fetchers)})}async function X(v,E,C){var U;let{submission:N,replace:q,isFetchActionRedirect:G}=C===void 0?{}:C;E.revalidate&&(p=!0);let ee=Co(v.location,E.location,ce({_isRedirect:!0},G?{_isFetchActionRedirect:!0}:{}));if(J(ee,"Expected a location on the redirect navigation"),iv.test(E.location)&&ov&&typeof((U=window)==null?void 0:U.location)<"u"){let jt=t.history.createURL(E.location).origin;if(window.location.origin!==jt){q?window.location.replace(E.location):window.location.assign(E.location);return}}S=null;let H=q===!0?Le.Replace:Le.Push,{formMethod:ut,formAction:oe,formEncType:Re,formData:Ut}=v.navigation;!N&&ut&&oe&&Ut&&Re&&(N={formMethod:ut,formAction:oe,formEncType:Re,formData:Ut}),rS.has(E.status)&&N&&dn(N.formMethod)?await B(H,ee,{submission:ce({},N,{formAction:E.location}),preventScrollReset:w}):await B(H,ee,{overrideNavigation:{state:"loading",location:ee,formMethod:N?N.formMethod:void 0,formAction:N?N.formAction:void 0,formEncType:N?N.formEncType:void 0,formData:N?N.formData:void 0},preventScrollReset:w})}async function R(v,E,C,U,N){let q=await Promise.all([...C.map(H=>$i("loader",N,H,E,h.basename)),...U.map(H=>$i("loader",zi(t.history,H.path,N.signal),H.match,H.matches,h.basename))]),G=q.slice(0,C.length),ee=q.slice(C.length);return await Promise.all([bh(v,C,G,N.signal,!1,c.loaderData),bh(v,U.map(H=>H.match),ee,N.signal,!0)]),{results:q,loaderResults:G,fetcherResults:ee}}function we(){p=!0,d.push(...Ne()),Y.forEach((v,E)=>{g.has(E)&&(m.push(E),K(E))})}function se(v,E,C){let U=ei(c.matches,E);le(v),ye({errors:{[U.route.id]:C},fetchers:new Map(c.fetchers)})}function le(v){g.has(v)&&K(v),Y.delete(v),D.delete(v),O.delete(v),c.fetchers.delete(v)}function K(v){let E=g.get(v);J(E,"Expected fetch controller: "+v),E.abort(),g.delete(v)}function Me(v){for(let E of v){let U={state:"idle",data:M(E).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(E,U)}}function et(){let v=[];for(let E of O){let C=c.fetchers.get(E);J(C,"Expected fetcher: "+E),C.state==="loading"&&(O.delete(E),v.push(E))}Me(v)}function ie(v){let E=[];for(let[C,U]of D)if(U<v){let N=c.fetchers.get(C);J(N,"Expected fetcher: "+C),N.state==="loading"&&(K(C),D.delete(C),E.push(C))}return Me(E),E.length>0}function Ve(v,E){let C=c.blockers.get(v)||kh;return ve.get(v)!==E&&ve.set(v,E),C}function te(v){c.blockers.delete(v),ve.delete(v)}function xe(v,E){let C=c.blockers.get(v)||kh;J(C.state==="unblocked"&&E.state==="blocked"||C.state==="blocked"&&E.state==="blocked"||C.state==="blocked"&&E.state==="proceeding"||C.state==="blocked"&&E.state==="unblocked"||C.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+C.state+" -> "+E.state),c.blockers.set(v,E),ye({blockers:new Map(c.blockers)})}function Pn(v){let{currentLocation:E,nextLocation:C,historyAction:U}=v;if(ve.size===0)return;ve.size>1&&To(!1,"A router only supports one blocker at a time");let N=Array.from(ve.entries()),[q,G]=N[N.length-1],ee=c.blockers.get(q);if(!(ee&&ee.state==="proceeding")&&G({currentLocation:E,nextLocation:C,historyAction:U}))return q}function Ne(v){let E=[];return j.forEach((C,U)=>{(!v||v(U))&&(C.cancel(),E.push(U),j.delete(U))}),E}function $r(v,E,C){if(i=v,s=E,o=C||(U=>U.key),!a&&c.navigation===ou){a=!0;let U=mt(c.location,c.matches);U!=null&&ye({restoreScrollPosition:U})}return()=>{i=null,s=null,o=null}}function dr(v,E){if(i&&o&&s){let C=E.map(N=>Dh(N,c.loaderData)),U=o(v,C)||v.key;i[U]=s()}}function mt(v,E){if(i&&o&&s){let C=E.map(q=>Dh(q,c.loaderData)),U=o(v,C)||v.key,N=i[U];if(typeof N=="number")return N}return null}return h={get basename(){return t.basename},get state(){return c},get routes(){return e},initialize:$e,subscribe:Be,enableScrollRestoration:$r,navigate:x,fetch:F,revalidate:V,createHref:v=>t.history.createHref(v),encodeLocation:v=>t.history.encodeLocation(v),getFetcher:M,deleteFetcher:le,dispose:lt,getBlocker:Ve,deleteBlocker:te,_internalFetchControllers:g,_internalActiveDeferreds:j},h}function aS(t){return t!=null&&"formData"in t}function Ih(t,e,n){n===void 0&&(n=!1);let r=typeof t=="string"?t:Rr(t);if(!e||!aS(e))return{path:r};if(e.formMethod&&!hS(e.formMethod))return{path:r,error:Mn(405,{method:e.formMethod})};let i;if(e.formData&&(i={formMethod:e.formMethod||"get",formAction:lv(r),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData},dn(i.formMethod)))return{path:r,submission:i};let o=xn(r),s=av(e.formData);return n&&o.search&&cv(o.search)&&s.append("index",""),o.search="?"+s,{path:Rr(o),submission:i}}function lS(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Ch(t,e,n,r,i,o,s,a,l,u,f){let h=u?Object.values(u)[0]:l?Object.values(l)[0]:void 0,c=t.createURL(e.location),y=t.createURL(i),w=o||c.toString()===y.toString()||c.search!==y.search,S=u?Object.keys(u)[0]:void 0,p=lS(n,S).filter((m,g)=>{if(m.route.loader==null)return!1;if(uS(e.loaderData,e.matches[g],m)||s.some(D=>D===m.route.id))return!0;let I=e.matches[g],P=m;return Th(m,ce({currentUrl:c,currentParams:I.params,nextUrl:y,nextParams:P.params},r,{actionResult:h,defaultShouldRevalidate:w||sv(I,P)}))}),d=[];return f&&f.forEach((m,g)=>{if(n.some(I=>I.route.id===m.routeId))a.includes(g)?d.push(ce({key:g},m)):Th(m.match,ce({currentUrl:c,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:h,defaultShouldRevalidate:w}))&&d.push(ce({key:g},m));else return}),[p,d]}function uS(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function sv(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Th(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function $i(t,e,n,r,i,o,s,a){i===void 0&&(i="/"),o===void 0&&(o=!1),s===void 0&&(s=!1);let l,u,f,h=new Promise((y,w)=>f=w),c=()=>f();e.signal.addEventListener("abort",c);try{let y=n.route[t];J(y,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),u=await Promise.race([y({request:e,params:n.params,context:a}),h]),J(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=qe.error,u=y}finally{e.signal.removeEventListener("abort",c)}if(fS(u)){let y=u.status;if(nS.has(y)){let k=u.headers.get("Location");if(J(k,"Redirects returned/thrown from loaders/actions must have a Location header"),iv.test(k)){if(!o){let p=new URL(e.url),d=k.startsWith("//")?new URL(p.protocol+k):new URL(k);d.origin===p.origin&&(k=d.pathname+d.search+d.hash)}}else{let p=r.slice(0,r.indexOf(n)+1),d=Cd(p).map(g=>g.pathnameBase),m=tv(k,d,new URL(e.url).pathname);if(J(Rr(m),"Unable to resolve redirect location: "+k),i){let g=m.pathname;m.pathname=g==="/"?i:er([i,g])}k=Rr(m)}if(o)throw u.headers.set("Location",k),u;return{type:qe.redirect,status:y,location:k,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:l||qe.data,response:u};let w,S=u.headers.get("Content-Type");return S&&/\bapplication\/json\b/.test(S)?w=await u.json():w=await u.text(),l===qe.error?{type:l,error:new Td(y,u.statusText,w),headers:u.headers}:{type:qe.data,data:w,statusCode:u.status,headers:u.headers}}return l===qe.error?{type:l,error:u}:u instanceof q1?{type:qe.deferred,deferredData:u}:{type:qe.data,data:u}}function zi(t,e,n,r){let i=t.createURL(lv(e)).toString(),o={signal:n};if(r&&dn(r.formMethod)){let{formMethod:s,formEncType:a,formData:l}=r;o.method=s.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?av(l):l}return new Request(i,o)}function av(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function cS(t,e,n,r,i){let o={},s=null,a,l=!1,u={};return n.forEach((f,h)=>{let c=e[h].route.id;if(J(!li(f),"Cannot handle redirect results in processLoaderData"),eo(f)){let y=ei(t,c),w=f.error;r&&(w=Object.values(r)[0],r=void 0),s=s||{},s[y.route.id]==null&&(s[y.route.id]=w),o[c]=void 0,l||(l=!0,a=nv(f.error)?f.error.status:500),f.headers&&(u[c]=f.headers)}else wr(f)?(i.set(c,f.deferredData),o[c]=f.deferredData.data):o[c]=f.data,f.statusCode!=null&&f.statusCode!==200&&!l&&(a=f.statusCode),f.headers&&(u[c]=f.headers)}),r&&(s=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function Ah(t,e,n,r,i,o,s,a){let{loaderData:l,errors:u}=cS(e,n,r,i,a);for(let f=0;f<o.length;f++){let{key:h,match:c}=o[f];J(s!==void 0&&s[f]!==void 0,"Did not find corresponding fetcher result");let y=s[f];if(eo(y)){let w=ei(t.matches,c.route.id);u&&u[w.route.id]||(u=ce({},u,{[w.route.id]:y.error})),t.fetchers.delete(h)}else if(li(y))J(!1,"Unhandled fetcher revalidation redirect");else if(wr(y))J(!1,"Unhandled fetcher deferred data");else{let w={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(h,w)}}return{loaderData:l,errors:u}}function xh(t,e,n,r){let i=ce({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(i[s]=e[s]):t[s]!==void 0&&(i[s]=t[s]),r&&r.hasOwnProperty(s))break}return i}function ei(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Rh(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Mn(t,e){let{pathname:n,routeId:r,method:i,type:o}=e===void 0?{}:e,s="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(s="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(a="defer() is not supported in actions")):t===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(s="Not Found",a='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Td(t||500,s,new Error(a),!0)}function Ph(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(li(n))return n}}function lv(t){let e=typeof t=="string"?xn(t):t;return Rr(ce({},e,{hash:""}))}function dS(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function wr(t){return t.type===qe.deferred}function eo(t){return t.type===qe.error}function li(t){return(t&&t.type)===qe.redirect}function fS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function hS(t){return tS.has(t)}function dn(t){return Z1.has(t)}async function bh(t,e,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=e[s],u=t.find(h=>h.route.id===l.route.id),f=u!=null&&!sv(u,l)&&(o&&o[l.route.id])!==void 0;wr(a)&&(i||f)&&await uv(a,r,i).then(h=>{h&&(n[s]=h||n[s])})}}async function uv(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:qe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:qe.error,error:i}}return{type:qe.data,data:t.deferredData.data}}}function cv(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Dh(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Nh(t,e){let n=typeof e=="string"?xn(e).search:e.search;if(t[t.length-1].route.index&&cv(n||""))return t[t.length-1];let r=Cd(t);return r[r.length-1]}/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fa.apply(this,arguments)}function pS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const mS=typeof Object.is=="function"?Object.is:pS,{useState:gS,useEffect:vS,useLayoutEffect:yS,useDebugValue:wS}=vu;function SS(t,e,n){const r=e(),[{inst:i},o]=gS({inst:{value:r,getSnapshot:e}});return yS(()=>{i.value=r,i.getSnapshot=e,su(i)&&o({inst:i})},[t,r,e]),vS(()=>(su(i)&&o({inst:i}),t(()=>{su(i)&&o({inst:i})})),[t]),wS(r),r}function su(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!mS(n,r)}catch{return!0}}function _S(t,e,n){return e()}const ES=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kS=!ES,IS=kS?_S:SS,CS="useSyncExternalStore"in vu?(t=>t.useSyncExternalStore)(vu):IS,Ad=L.createContext(null),xd=L.createContext(null),Rd=L.createContext(null),Qa=L.createContext(null),Bo=L.createContext({outlet:null,matches:[]}),dv=L.createContext(null);function Ya(){return L.useContext(Qa)!=null}function fv(){return Ya()||J(!1),L.useContext(Qa).location}function TS(){Ya()||J(!1);let{basename:t,navigator:e}=L.useContext(Rd),{matches:n}=L.useContext(Bo),{pathname:r}=fv(),i=JSON.stringify(Cd(n).map(a=>a.pathnameBase)),o=L.useRef(!1);return L.useEffect(()=>{o.current=!0}),L.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=tv(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:er([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function AS(t,e){Ya()||J(!1);let{navigator:n}=L.useContext(Rd),r=L.useContext(xd),{matches:i}=L.useContext(Bo),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=fv(),u;if(e){var f;let S=typeof e=="string"?xn(e):e;a==="/"||(f=S.pathname)!=null&&f.startsWith(a)||J(!1),u=S}else u=l;let h=u.pathname||"/",c=a==="/"?h:h.slice(a.length)||"/",y=Hi(t,{pathname:c}),w=bS(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:er([a,n.encodeLocation?n.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:er([a,n.encodeLocation?n.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,r||void 0);return e&&w?L.createElement(Qa.Provider,{value:{location:fa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Le.Pop}},w):w}function xS(){let t=MS(),e=nv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,o)}class RS extends L.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?L.createElement(Bo.Provider,{value:this.props.routeContext},L.createElement(dv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PS(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(Ad);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Bo.Provider,{value:e},r)}function bS(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||J(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||L.createElement(xS,null):null,f=e.concat(r.slice(0,a+1)),h=()=>L.createElement(PS,{match:s,routeContext:{outlet:o,matches:f}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?L.createElement(RS,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:f}}):h()},null)}var Oh;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Oh||(Oh={}));var ha;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ha||(ha={}));function DS(t){let e=L.useContext(xd);return e||J(!1),e}function NS(t){let e=L.useContext(Bo);return e||J(!1),e}function OS(t){let e=NS(),n=e.matches[e.matches.length-1];return n.route.id||J(!1),n.route.id}function MS(){var t;let e=L.useContext(dv),n=DS(ha.UseRouteError),r=OS(ha.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function LS(t){let{fallbackElement:e,router:n}=t,r=CS(n.subscribe,()=>n.state,()=>n.state),i=L.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,a,l)=>n.navigate(s,{state:a,preventScrollReset:l==null?void 0:l.preventScrollReset}),replace:(s,a,l)=>n.navigate(s,{replace:!0,state:a,preventScrollReset:l==null?void 0:l.preventScrollReset})}),[n]),o=n.basename||"/";return L.createElement(L.Fragment,null,L.createElement(Ad.Provider,{value:{router:n,navigator:i,static:!1,basename:o}},L.createElement(xd.Provider,{value:r},L.createElement($S,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?L.createElement(zS,null):e))),null)}function FS(t){J(!1)}function $S(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Le.Pop,navigator:o,static:s=!1}=t;Ya()&&J(!1);let a=e.replace(/^\/*/,"/"),l=L.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=xn(r));let{pathname:u="/",search:f="",hash:h="",state:c=null,key:y="default"}=r,w=L.useMemo(()=>{let S=ev(u,a);return S==null?null:{pathname:S,search:f,hash:h,state:c,key:y}},[a,u,f,h,c,y]);return w==null?null:L.createElement(Rd.Provider,{value:l},L.createElement(Qa.Provider,{children:n,value:{location:w,navigationType:i}}))}function zS(t){let{children:e,location:n}=t,r=L.useContext(Ad),i=r&&!e?r.router.routes:hc(e);return AS(i,n)}var Mh;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Mh||(Mh={}));new Promise(()=>{});function hc(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;if(r.type===L.Fragment){n.push.apply(n,hc(r.props.children,e));return}r.type!==FS&&J(!1),!r.props.index||!r.props.children||J(!1);let o=[...e,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=hc(r.props.children,o)),n.push(s)}),n}function hv(t){return t.map(e=>{let n=fa({},e);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=hv(n.children)),n})}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pc.apply(this,arguments)}function US(t,e){return sS({basename:e==null?void 0:e.basename,history:A1({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||jS(),routes:hv(t)}).initialize()}function jS(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=pc({},e,{errors:BS(e.errors)})),e}function BS(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Td(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}var Lh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Lh||(Lh={}));var Fh;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fh||(Fh={}));var pv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$h=wt.createContext&&wt.createContext(pv),tr=globalThis&&globalThis.__assign||function(){return tr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},tr.apply(this,arguments)},VS=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function mv(t){return t&&t.map(function(e,n){return wt.createElement(e.tag,tr({key:n},e.attr),mv(e.child))})}function HS(t){return function(e){return wt.createElement(WS,tr({attr:tr({},t.attr)},e),mv(t.child))}}function WS(t){var e=function(n){var r=t.attr,i=t.size,o=t.title,s=VS(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),wt.createElement("svg",tr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:tr(tr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&wt.createElement("title",null,o),t.children)};return $h!==void 0?wt.createElement($h.Consumer,null,function(n){return e(n)}):e(pv)}var pa={},GS={get exports(){return pa},set exports(t){pa=t}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd=Symbol.for("react.element"),bd=Symbol.for("react.portal"),qa=Symbol.for("react.fragment"),Xa=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),Za=Symbol.for("react.provider"),el=Symbol.for("react.context"),KS=Symbol.for("react.server_context"),tl=Symbol.for("react.forward_ref"),nl=Symbol.for("react.suspense"),rl=Symbol.for("react.suspense_list"),il=Symbol.for("react.memo"),ol=Symbol.for("react.lazy"),QS=Symbol.for("react.offscreen"),gv;gv=Symbol.for("react.module.reference");function zt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Pd:switch(t=t.type,t){case qa:case Ja:case Xa:case nl:case rl:return t;default:switch(t=t&&t.$$typeof,t){case KS:case el:case tl:case ol:case il:case Za:return t;default:return e}}case bd:return e}}}me.ContextConsumer=el;me.ContextProvider=Za;me.Element=Pd;me.ForwardRef=tl;me.Fragment=qa;me.Lazy=ol;me.Memo=il;me.Portal=bd;me.Profiler=Ja;me.StrictMode=Xa;me.Suspense=nl;me.SuspenseList=rl;me.isAsyncMode=function(){return!1};me.isConcurrentMode=function(){return!1};me.isContextConsumer=function(t){return zt(t)===el};me.isContextProvider=function(t){return zt(t)===Za};me.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pd};me.isForwardRef=function(t){return zt(t)===tl};me.isFragment=function(t){return zt(t)===qa};me.isLazy=function(t){return zt(t)===ol};me.isMemo=function(t){return zt(t)===il};me.isPortal=function(t){return zt(t)===bd};me.isProfiler=function(t){return zt(t)===Ja};me.isStrictMode=function(t){return zt(t)===Xa};me.isSuspense=function(t){return zt(t)===nl};me.isSuspenseList=function(t){return zt(t)===rl};me.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===qa||t===Ja||t===Xa||t===nl||t===rl||t===QS||typeof t=="object"&&t!==null&&(t.$$typeof===ol||t.$$typeof===il||t.$$typeof===Za||t.$$typeof===el||t.$$typeof===tl||t.$$typeof===gv||t.getModuleId!==void 0)};me.typeOf=zt;(function(t){t.exports=me})(GS);function YS(t){function e(b,M,F,W,_){for(var X=0,R=0,we=0,se=0,le,K,Me=0,et=0,ie,Ve=ie=le=0,te=0,xe=0,Pn=0,Ne=0,$r=F.length,dr=$r-1,mt,v="",E="",C="",U="",N;te<$r;){if(K=F.charCodeAt(te),te===dr&&R+se+we+X!==0&&(R!==0&&(K=R===47?10:47),se=we=X=0,$r++,dr++),R+se+we+X===0){if(te===dr&&(0<xe&&(v=v.replace(c,"")),0<v.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:v+=F.charAt(te)}K=59}switch(K){case 123:for(v=v.trim(),le=v.charCodeAt(0),ie=1,Ne=++te;te<$r;){switch(K=F.charCodeAt(te)){case 123:ie++;break;case 125:ie--;break;case 47:switch(K=F.charCodeAt(te+1)){case 42:case 47:e:{for(Ve=te+1;Ve<dr;++Ve)switch(F.charCodeAt(Ve)){case 47:if(K===42&&F.charCodeAt(Ve-1)===42&&te+2!==Ve){te=Ve+1;break e}break;case 10:if(K===47){te=Ve+1;break e}}te=Ve}}break;case 91:K++;case 40:K++;case 34:case 39:for(;te++<dr&&F.charCodeAt(te)!==K;);}if(ie===0)break;te++}switch(ie=F.substring(Ne,te),le===0&&(le=(v=v.replace(h,"").trim()).charCodeAt(0)),le){case 64:switch(0<xe&&(v=v.replace(c,"")),K=v.charCodeAt(1),K){case 100:case 109:case 115:case 45:xe=M;break;default:xe=ye}if(ie=e(M,xe,ie,K,_+1),Ne=ie.length,0<x&&(xe=n(ye,v,Pn),N=a(3,ie,xe,M,$e,Ie,Ne,K,_,W),v=xe.join(""),N!==void 0&&(Ne=(ie=N.trim()).length)===0&&(K=0,ie="")),0<Ne)switch(K){case 115:v=v.replace(P,s);case 100:case 109:case 45:ie=v+"{"+ie+"}";break;case 107:v=v.replace(d,"$1 $2"),ie=v+"{"+ie+"}",ie=Be===1||Be===2&&o("@"+ie,3)?"@-webkit-"+ie+"@"+ie:"@"+ie;break;default:ie=v+ie,W===112&&(ie=(E+=ie,""))}else ie="";break;default:ie=e(M,n(M,v,Pn),ie,W,_+1)}C+=ie,ie=Pn=xe=Ve=le=0,v="",K=F.charCodeAt(++te);break;case 125:case 59:if(v=(0<xe?v.replace(c,""):v).trim(),1<(Ne=v.length))switch(Ve===0&&(le=v.charCodeAt(0),le===45||96<le&&123>le)&&(Ne=(v=v.replace(" ",":")).length),0<x&&(N=a(1,v,M,b,$e,Ie,E.length,W,_,W))!==void 0&&(Ne=(v=N.trim()).length)===0&&(v="\0\0"),le=v.charCodeAt(0),K=v.charCodeAt(1),le){case 0:break;case 64:if(K===105||K===99){U+=v+F.charAt(te);break}default:v.charCodeAt(Ne-1)!==58&&(E+=i(v,le,K,v.charCodeAt(2)))}Pn=xe=Ve=le=0,v="",K=F.charCodeAt(++te)}}switch(K){case 13:case 10:R===47?R=0:1+le===0&&W!==107&&0<v.length&&(xe=1,v+="\0"),0<x*B&&a(0,v,M,b,$e,Ie,E.length,W,_,W),Ie=1,$e++;break;case 59:case 125:if(R+se+we+X===0){Ie++;break}default:switch(Ie++,mt=F.charAt(te),K){case 9:case 32:if(se+X+R===0)switch(Me){case 44:case 58:case 9:case 32:mt="";break;default:K!==32&&(mt=" ")}break;case 0:mt="\\0";break;case 12:mt="\\f";break;case 11:mt="\\v";break;case 38:se+R+X===0&&(xe=Pn=1,mt="\f"+mt);break;case 108:if(se+R+X+lt===0&&0<Ve)switch(te-Ve){case 2:Me===112&&F.charCodeAt(te-3)===58&&(lt=Me);case 8:et===111&&(lt=et)}break;case 58:se+R+X===0&&(Ve=te);break;case 44:R+we+se+X===0&&(xe=1,mt+="\r");break;case 34:case 39:R===0&&(se=se===K?0:se===0?K:se);break;case 91:se+R+we===0&&X++;break;case 93:se+R+we===0&&X--;break;case 41:se+R+X===0&&we--;break;case 40:if(se+R+X===0){if(le===0)switch(2*Me+3*et){case 533:break;default:le=1}we++}break;case 64:R+we+se+X+Ve+ie===0&&(ie=1);break;case 42:case 47:if(!(0<se+X+we))switch(R){case 0:switch(2*K+3*F.charCodeAt(te+1)){case 235:R=47;break;case 220:Ne=te,R=42}break;case 42:K===47&&Me===42&&Ne+2!==te&&(F.charCodeAt(Ne+2)===33&&(E+=F.substring(Ne,te+1)),mt="",R=0)}}R===0&&(v+=mt)}et=Me,Me=K,te++}if(Ne=E.length,0<Ne){if(xe=M,0<x&&(N=a(2,E,xe,b,$e,Ie,Ne,W,_,W),N!==void 0&&(E=N).length===0))return U+E+C;if(E=xe.join(",")+"{"+E+"}",Be*lt!==0){switch(Be!==2||o(E,2)||(lt=0),lt){case 111:E=E.replace(g,":-moz-$1")+E;break;case 112:E=E.replace(m,"::-webkit-input-$1")+E.replace(m,"::-moz-$1")+E.replace(m,":-ms-input-$1")+E}lt=0}}return U+E+C}function n(b,M,F){var W=M.trim().split(k);M=W;var _=W.length,X=b.length;switch(X){case 0:case 1:var R=0;for(b=X===0?"":b[0]+" ";R<_;++R)M[R]=r(b,M[R],F).trim();break;default:var we=R=0;for(M=[];R<_;++R)for(var se=0;se<X;++se)M[we++]=r(b[se]+" ",W[R],F).trim()}return M}function r(b,M,F){var W=M.charCodeAt(0);switch(33>W&&(W=(M=M.trim()).charCodeAt(0)),W){case 38:return M.replace(p,"$1"+b.trim());case 58:return b.trim()+M.replace(p,"$1"+b.trim());default:if(0<1*F&&0<M.indexOf("\f"))return M.replace(p,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+M}function i(b,M,F,W){var _=b+";",X=2*M+3*F+4*W;if(X===944){b=_.indexOf(":",9)+1;var R=_.substring(b,_.length-1).trim();return R=_.substring(0,b).trim()+R+";",Be===1||Be===2&&o(R,1)?"-webkit-"+R+R:R}if(Be===0||Be===2&&!o(_,1))return _;switch(X){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(ve,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return R=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+_+"-ms-flex-pack"+R+_;case 1005:return w.test(_)?_.replace(y,":-webkit-")+_.replace(y,":-moz-")+_:_;case 1e3:switch(R=_.substring(13).trim(),M=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(M)){case 226:R=_.replace(I,"tb");break;case 232:R=_.replace(I,"tb-rl");break;case 220:R=_.replace(I,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+R+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(M=(_=b).length-10,R=(_.charCodeAt(M)===33?_.substring(0,M):_).substring(b.indexOf(":",7)+1).trim(),X=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:_=_.replace(R,"-webkit-"+R)+";"+_;break;case 207:case 102:_=_.replace(R,"-webkit-"+(102<X?"inline-":"")+"box")+";"+_.replace(R,"-webkit-"+R)+";"+_.replace(R,"-ms-"+R+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return R=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+R+"-ms-flex-"+R+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(O,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(O,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(j.test(b)===!0)return(R=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?i(b.replace("stretch","fill-available"),M,F,W).replace(":fill-available",":stretch"):_.replace(R,"-webkit-"+R)+_.replace(R,"-moz-"+R.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,F+W===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+_}return _}function o(b,M){var F=b.indexOf(M===1?":":"{"),W=b.substring(0,M!==3?F:10);return F=b.substring(F+1,b.length-1),V(M!==2?W:W.replace(Y,"$1"),F,M)}function s(b,M){var F=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return F!==M+";"?F.replace(D," or ($1)").substring(4):"("+M+")"}function a(b,M,F,W,_,X,R,we,se,le){for(var K=0,Me=M,et;K<x;++K)switch(et=De[K].call(f,b,Me,F,W,_,X,R,we,se,le)){case void 0:case!1:case!0:case null:break;default:Me=et}if(Me!==M)return Me}function l(b){switch(b){case void 0:case null:x=De.length=0;break;default:if(typeof b=="function")De[x++]=b;else if(typeof b=="object")for(var M=0,F=b.length;M<F;++M)l(b[M]);else B=!!b|0}return l}function u(b){return b=b.prefix,b!==void 0&&(V=null,b?typeof b!="function"?Be=1:(Be=2,V=b):Be=0),u}function f(b,M){var F=b;if(33>F.charCodeAt(0)&&(F=F.trim()),fe=F,F=[fe],0<x){var W=a(-1,M,F,F,$e,Ie,0,0,0,0);W!==void 0&&typeof W=="string"&&(M=W)}var _=e(ye,F,M,0,0);return 0<x&&(W=a(-2,_,F,F,$e,Ie,_.length,0,0,0),W!==void 0&&(_=W)),fe="",lt=0,Ie=$e=1,_}var h=/^\0+/g,c=/[\0\r\f]/g,y=/: */g,w=/zoo|gra/,S=/([,: ])(transform)/g,k=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,g=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,O=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,ve=/([^-])(image-set\()/,Ie=1,$e=1,lt=0,Be=1,ye=[],De=[],x=0,V=null,B=0,fe="";return f.use=l,f.set=u,t!==void 0&&u(t),f}var qS={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function XS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var JS=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,zh=XS(function(t){return JS.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),mc={},ZS={get exports(){return mc},set exports(t){mc=t}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,Dd=Qe?Symbol.for("react.element"):60103,Nd=Qe?Symbol.for("react.portal"):60106,sl=Qe?Symbol.for("react.fragment"):60107,al=Qe?Symbol.for("react.strict_mode"):60108,ll=Qe?Symbol.for("react.profiler"):60114,ul=Qe?Symbol.for("react.provider"):60109,cl=Qe?Symbol.for("react.context"):60110,Od=Qe?Symbol.for("react.async_mode"):60111,dl=Qe?Symbol.for("react.concurrent_mode"):60111,fl=Qe?Symbol.for("react.forward_ref"):60112,hl=Qe?Symbol.for("react.suspense"):60113,e_=Qe?Symbol.for("react.suspense_list"):60120,pl=Qe?Symbol.for("react.memo"):60115,ml=Qe?Symbol.for("react.lazy"):60116,t_=Qe?Symbol.for("react.block"):60121,n_=Qe?Symbol.for("react.fundamental"):60117,r_=Qe?Symbol.for("react.responder"):60118,i_=Qe?Symbol.for("react.scope"):60119;function bt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Dd:switch(t=t.type,t){case Od:case dl:case sl:case ll:case al:case hl:return t;default:switch(t=t&&t.$$typeof,t){case cl:case fl:case ml:case pl:case ul:return t;default:return e}}case Nd:return e}}}function vv(t){return bt(t)===dl}ge.AsyncMode=Od;ge.ConcurrentMode=dl;ge.ContextConsumer=cl;ge.ContextProvider=ul;ge.Element=Dd;ge.ForwardRef=fl;ge.Fragment=sl;ge.Lazy=ml;ge.Memo=pl;ge.Portal=Nd;ge.Profiler=ll;ge.StrictMode=al;ge.Suspense=hl;ge.isAsyncMode=function(t){return vv(t)||bt(t)===Od};ge.isConcurrentMode=vv;ge.isContextConsumer=function(t){return bt(t)===cl};ge.isContextProvider=function(t){return bt(t)===ul};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dd};ge.isForwardRef=function(t){return bt(t)===fl};ge.isFragment=function(t){return bt(t)===sl};ge.isLazy=function(t){return bt(t)===ml};ge.isMemo=function(t){return bt(t)===pl};ge.isPortal=function(t){return bt(t)===Nd};ge.isProfiler=function(t){return bt(t)===ll};ge.isStrictMode=function(t){return bt(t)===al};ge.isSuspense=function(t){return bt(t)===hl};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===sl||t===dl||t===ll||t===al||t===hl||t===e_||typeof t=="object"&&t!==null&&(t.$$typeof===ml||t.$$typeof===pl||t.$$typeof===ul||t.$$typeof===cl||t.$$typeof===fl||t.$$typeof===n_||t.$$typeof===r_||t.$$typeof===i_||t.$$typeof===t_)};ge.typeOf=bt;(function(t){t.exports=ge})(ZS);var Md=mc,o_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a_={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ld={};Ld[Md.ForwardRef]=a_;Ld[Md.Memo]=yv;function Uh(t){return Md.isMemo(t)?yv:Ld[t.$$typeof]||o_}var l_=Object.defineProperty,u_=Object.getOwnPropertyNames,jh=Object.getOwnPropertySymbols,c_=Object.getOwnPropertyDescriptor,d_=Object.getPrototypeOf,Bh=Object.prototype;function wv(t,e,n){if(typeof e!="string"){if(Bh){var r=d_(e);r&&r!==Bh&&wv(t,r,n)}var i=u_(e);jh&&(i=i.concat(jh(e)));for(var o=Uh(t),s=Uh(e),a=0;a<i.length;++a){var l=i[a];if(!s_[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=c_(e,l);try{l_(t,l,u)}catch{}}}}return t}var f_=wv;function tn(){return(tn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Vh=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},gc=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!pa.typeOf(t)},ma=Object.freeze([]),nr=Object.freeze({});function Ao(t){return typeof t=="function"}function Hh(t){return t.displayName||t.name||"Component"}function Fd(t){return t&&typeof t.styledComponentId=="string"}var wi=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",$d=typeof window<"u"&&"HTMLElement"in window,h_=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),p_={};function Vo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var m_=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Vo(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Ls=new Map,ga=new Map,to=1,gs=function(t){if(Ls.has(t))return Ls.get(t);for(;ga.has(to);)to++;var e=to++;return Ls.set(t,e),ga.set(e,t),e},g_=function(t){return ga.get(t)},v_=function(t,e){e>=to&&(to=e+1),Ls.set(t,e),ga.set(e,t)},y_="style["+wi+'][data-styled-version="5.3.6"]',w_=new RegExp("^"+wi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),S_=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},__=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(w_);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(v_(u,l),S_(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},E_=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Sv=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(wi))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(wi,"active"),r.setAttribute("data-styled-version","5.3.6");var s=E_();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},k_=function(){function t(n){var r=this.element=Sv(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}Vo(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),I_=function(){function t(n){var r=this.element=Sv(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),C_=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Wh=$d,T_={isServer:!$d,useCSSOMInjection:!h_},va=function(){function t(n,r,i){n===void 0&&(n=nr),r===void 0&&(r={}),this.options=tn({},T_,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&$d&&Wh&&(Wh=!1,function(o){for(var s=document.querySelectorAll(y_),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(wi)!=="active"&&(__(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return gs(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(tn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new C_(s):o?new k_(s):new I_(s),new m_(n)));var n,r,i,o,s},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(gs(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(gs(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(gs(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=g_(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var f=wi+".g"+s+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(c){c.length>0&&(h+=c+",")}),o+=""+u+f+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},t}(),A_=/(a)(d)/gi,Gh=function(t){return String.fromCharCode(t+(t>25?39:97))};function vc(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Gh(e%52)+n;return(Gh(e%52)+n).replace(A_,"$1-$2")}var ti=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},_v=function(t){return ti(5381,t)};function Ev(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ao(n)&&!Fd(n))return!1}return!0}var x_=_v("5.3.6"),R_=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ev(e),this.componentId=n,this.baseHash=ti(x_,n),this.baseStyle=r,va.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=Pr(this.rules,e,n,r).join(""),a=vc(ti(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,f=ti(this.baseHash,r.hash),h="",c=0;c<u;c++){var y=this.rules[c];if(typeof y=="string")h+=y;else if(y){var w=Pr(y,e,n,r),S=Array.isArray(w)?w.join(""):w;f=ti(f,S+c),h+=S}}if(h){var k=vc(f>>>0);if(!n.hasNameForId(i,k)){var p=r(h,"."+k,void 0,i);n.insertRules(i,k,p)}o.push(k)}}return o.join(" ")},t}(),P_=/^\s*\/\/.*$/gm,b_=[":","[",".","#"];function D_(t){var e,n,r,i,o=t===void 0?nr:t,s=o.options,a=s===void 0?nr:s,l=o.plugins,u=l===void 0?ma:l,f=new YS(a),h=[],c=function(S){function k(p){if(p)try{S(p+"}")}catch{}}return function(p,d,m,g,I,P,D,O,Y,j){switch(p){case 1:if(Y===0&&d.charCodeAt(0)===64)return S(d+";"),"";break;case 2:if(O===0)return d+"/*|*/";break;case 3:switch(O){case 102:case 112:return S(m[0]+d),"";default:return d+(j===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(k)}}}(function(S){h.push(S)}),y=function(S,k,p){return k===0&&b_.indexOf(p[n.length])!==-1||p.match(i)?S:"."+e};function w(S,k,p,d){d===void 0&&(d="&");var m=S.replace(P_,""),g=k&&p?p+" "+k+" { "+m+" }":m;return e=d,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(p||!k?"":k,g)}return f.use([].concat(u,[function(S,k,p){S===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,y))},c,function(S){if(S===-2){var k=h;return h=[],k}}])),w.hash=u.length?u.reduce(function(S,k){return k.name||Vo(15),ti(S,k.name)},5381).toString():"",w}var kv=wt.createContext();kv.Consumer;var Iv=wt.createContext(),N_=(Iv.Consumer,new va),yc=D_();function Cv(){return L.useContext(kv)||N_}function Tv(){return L.useContext(Iv)||yc}var O_=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Vo(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=yc),this.name+e.hash},t}(),M_=/([A-Z])/,L_=/([A-Z])/g,F_=/^ms-/,$_=function(t){return"-"+t.toLowerCase()};function Kh(t){return M_.test(t)?t.replace(L_,$_).replace(F_,"-ms-"):t}var Qh=function(t){return t==null||t===!1||t===""};function Pr(t,e,n,r){if(Array.isArray(t)){for(var i,o=[],s=0,a=t.length;s<a;s+=1)(i=Pr(t[s],e,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Qh(t))return"";if(Fd(t))return"."+t.styledComponentId;if(Ao(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Pr(l,e,n,r)}var u;return t instanceof O_?n?(t.inject(n,r),t.getName(r)):t:gc(t)?function f(h,c){var y,w,S=[];for(var k in h)h.hasOwnProperty(k)&&!Qh(h[k])&&(Array.isArray(h[k])&&h[k].isCss||Ao(h[k])?S.push(Kh(k)+":",h[k],";"):gc(h[k])?S.push.apply(S,f(h[k],k)):S.push(Kh(k)+": "+(y=k,(w=h[k])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||y in qS?String(w).trim():w+"px")+";"));return c?[c+" {"].concat(S,["}"]):S}(t):t.toString()}var Yh=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Av(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Ao(t)||gc(t)?Yh(Pr(Vh(ma,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Yh(Pr(Vh(t,n)))}var xv=function(t,e,n){return n===void 0&&(n=nr),t.theme!==n.theme&&t.theme||e||n.theme},z_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,U_=/(^-|-$)/g;function au(t){return t.replace(z_,"-").replace(U_,"")}var Rv=function(t){return vc(_v(t)>>>0)};function vs(t){return typeof t=="string"&&!0}var wc=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},j_=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function B_(t,e,n){var r=t[n];wc(e)&&wc(r)?Pv(r,e):t[n]=e}function Pv(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(wc(s))for(var a in s)j_(a)&&B_(t,s[a],a)}return t}var zd=wt.createContext();zd.Consumer;var lu={};function bv(t,e,n){var r=Fd(t),i=!vs(t),o=e.attrs,s=o===void 0?ma:o,a=e.componentId,l=a===void 0?function(d,m){var g=typeof d!="string"?"sc":au(d);lu[g]=(lu[g]||0)+1;var I=g+"-"+Rv("5.3.6"+g+lu[g]);return m?m+"-"+I:I}(e.displayName,e.parentComponentId):a,u=e.displayName,f=u===void 0?function(d){return vs(d)?"styled."+d:"Styled("+Hh(d)+")"}(t):u,h=e.displayName&&e.componentId?au(e.displayName)+"-"+e.componentId:e.componentId||l,c=r&&t.attrs?Array.prototype.concat(t.attrs,s).filter(Boolean):s,y=e.shouldForwardProp;r&&t.shouldForwardProp&&(y=e.shouldForwardProp?function(d,m,g){return t.shouldForwardProp(d,m,g)&&e.shouldForwardProp(d,m,g)}:t.shouldForwardProp);var w,S=new R_(n,h,r?t.componentStyle:void 0),k=S.isStatic&&s.length===0,p=function(d,m){return function(g,I,P,D){var O=g.attrs,Y=g.componentStyle,j=g.defaultProps,ve=g.foldedComponentIds,Ie=g.shouldForwardProp,$e=g.styledComponentId,lt=g.target,Be=function(W,_,X){W===void 0&&(W=nr);var R=tn({},_,{theme:W}),we={};return X.forEach(function(se){var le,K,Me,et=se;for(le in Ao(et)&&(et=et(R)),et)R[le]=we[le]=le==="className"?(K=we[le],Me=et[le],K&&Me?K+" "+Me:K||Me):et[le]}),[R,we]}(xv(I,L.useContext(zd),j)||nr,I,O),ye=Be[0],De=Be[1],x=function(W,_,X,R){var we=Cv(),se=Tv(),le=_?W.generateAndInjectStyles(nr,we,se):W.generateAndInjectStyles(X,we,se);return le}(Y,D,ye),V=P,B=De.$as||I.$as||De.as||I.as||lt,fe=vs(B),b=De!==I?tn({},I,{},De):I,M={};for(var F in b)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?M.as=b[F]:(Ie?Ie(F,zh,B):!fe||zh(F))&&(M[F]=b[F]));return I.style&&De.style!==I.style&&(M.style=tn({},I.style,{},De.style)),M.className=Array.prototype.concat(ve,$e,x!==$e?x:null,I.className,De.className).filter(Boolean).join(" "),M.ref=V,L.createElement(B,M)}(w,d,m,k)};return p.displayName=f,(w=wt.forwardRef(p)).attrs=c,w.componentStyle=S,w.displayName=f,w.shouldForwardProp=y,w.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):ma,w.styledComponentId=h,w.target=r?t.target:t,w.withComponent=function(d){var m=e.componentId,g=function(P,D){if(P==null)return{};var O,Y,j={},ve=Object.keys(P);for(Y=0;Y<ve.length;Y++)O=ve[Y],D.indexOf(O)>=0||(j[O]=P[O]);return j}(e,["componentId"]),I=m&&m+"-"+(vs(d)?d:au(Hh(d)));return bv(d,tn({},g,{attrs:c,componentId:I}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Pv({},t.defaultProps,d):d}}),w.toString=function(){return"."+w.styledComponentId},i&&f_(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Sc=function(t){return function e(n,r,i){if(i===void 0&&(i=nr),!pa.isValidElementType(r))return Vo(1,String(r));var o=function(){return n(r,i,Av.apply(void 0,arguments))};return o.withConfig=function(s){return e(n,r,tn({},i,{},s))},o.attrs=function(s){return e(n,r,tn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(bv,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Sc[t]=Sc(t)});var V_=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=Ev(n),va.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,o){var s=o(Pr(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,o){n>2&&va.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},t}();function H_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Av.apply(void 0,[t].concat(n)),o="sc-global-"+Rv(JSON.stringify(i)),s=new V_(i,o);function a(u){var f=Cv(),h=Tv(),c=L.useContext(zd),y=L.useRef(f.allocateGSInstance(o)).current;return f.server&&l(y,u,f,c,h),L.useLayoutEffect(function(){if(!f.server)return l(y,u,f,c,h),function(){return s.removeStyles(y,f)}},[y,u,f,c,h]),null}function l(u,f,h,c,y){if(s.isStatic)s.renderStyles(u,p_,h,y);else{var w=tn({},f,{theme:xv(f,c,a.defaultProps)});s.renderStyles(u,w,h,y)}}return wt.memo(a)}const $=Sc,W_=$.div`
  display: flex;
  width: 100vw;
  justify-content: center;

`,G_=$.div`
  width: 75%;
  margin-bottom: 30px;
  
`,K_=$.div`
  
`,Q_=$.input`
  border: none;
  padding: 5px 10px;
  border-radius: 3px;

`;$.button`
  
`;const ys=$.option`
  
`,Y_=$.select`
  align-items: center;
  padding: 0px 14px;
  width: 129px;
  height: 18px;
  background: #f2f2f2;
  border-radius: 2px;
  border: none ;
`;$.span`
  user-select: none;
  outline: none;
`;$.span`
  
`;const q_=$.img`
  width: 150px;
  cursor: pointer;
`,X_=$.div`
  display: flex;
  justify-content: center;

  >button{
    background-color: #f2f2f2;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) .5s ;

      &:hover{
        background-color: #e9e8e8;
      }
  }
`,J_=$.img`
display: none;
  
`,Z_=$.div`
  @media (max-width:400px) {
    >#sedt{
      display: none;
    }
    >#sedto{
      width: 70px;
      display: block;
    }
  }
`,eE="/Transaction/assets/GooglePnG-1811e950.png",tE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAADACAYAAADflHx6AAANMUlEQVR42uzazYoTQRgF0KTzpxnRjLoRBFGfQQbfJqtAdnkalREfRhBC9gn+PEUgziaQlFXywexml06nOQfuvjb30tXdHeCk0oMBAAAAAAAAAAAAAAAA4CS6kUpELibdSEPdj0ovp58zyBmKSOMziM727semeePSi4OOch7njHOuIk9EpHG5ioyjs6PocK9JI1PF+g3LITebzc3d3d3nw+HwK6W0S0CT7XJXf+bOflqv1x9iaIbR6apzZt04yGixWEzyIb+llA4JuESH3OHb2Wz2rHQ6ut0997VoOJ/Pr/f7/Y8EXLzc5e/T6XRSun3O61IV97Xx/ycXoDV2u93X0u3oeHWup5dHq9Xqo2sRtM5huVzelI6f4ymmG8t2td1ubxPQOrnbX+Ir06DuganiJdAk39f+JKCN72J+l45H16tOjXrxOevl8Xj8m4DWKd0uHY+u9zo16sePOq8S0Fql49H1fqdGg5ynOa8T0Fql49H1QZ0veIdxN3uTgNYqHc+ZROe7dQ3MKOc6520CWqt0PLo+qntgnue8S0BrlY6XrhsYoFUD8yLnfQJaq3S8dN3AAI0cmGRggBMMTDIwgIEBDAxgYAwMYGAAAwMYGAMD1DgwfrQDDAxgYAADY2AAAwMYGMDAGBjAwAAGxsCAgTEwgIEBDIyBAQNjYAADAxgYAwP/2Lv7mKrqOI7jf2lz2WartuY//tHasq3NOQtJaamAFClDJWk9+LgetFnaXE5t2WZuLbJZCmoz2FyCIAzxAYIrIKOCfCCYNhu0YgjofcZ7z306D5/2u39QjTuUc8+9nHv8vLfvf47512vn/n7n9zsEhsAwxggMY4zAEBjGCAyBYYwRGMYYgSEwhqQMDyLY/CN8h76C99Pt8Gx9G66NhXC++jLsLy2EPXs+HHmL4SzMhWv9anh3bY3+20BtJSLXuqHJMhgjMCyaOuJFoLYK3t3b4Fi5FPYlz8Y1AiHPtnchnSiFMnQTjBGY+yzxlBFqb40+odiXpgsYEjbuzWsROF0FLRgEYwTGwmnhEKTK43CsyNIJhv5x5GfCX3YEqtcDxgiMhdJUFcGGOrFuogMHg6FZvgjSqRNcq2EExgqFu6+IxVgdGCR2XGtXIdLTBcYITAqmKQr8pYdhz3zObLiMjvi/+Y8VQ1P4NMMITMqk3BqG+4ONSQZD/7jfXwfV5QBjBMbkha/+Kt5TMTEoscf52iuQ/+wFYwTGpIU62mHPWWACMPSN+503oGkaGCMwJivU1izesk1ZXJxv5kNx3AZjBMZkBS80wJ6VRlzYfR+BMTZx/ke8jUtcGCMwxiZ2XpwFOcSFMQJj/Hki95YNCd7ZWYaRfZ/A991BSFU/INh0Xkz0uIHvyDcY+WIPXOsKiAsjMFYDxnewKDE7OZvWIHC2BsrgzQm8dzOEwJkaeHZsIS6MwKR6kRvXDX9D17vn4+h6TrxF/vgd3p0fEhdGYFIxTdPEFQiGroOEuy4Zj+D1HvG3iQsjMKlUsL7OMFx8xfujVzgkKtV3R9x4R1wYgUmFVMkLxwoDjgFkpSFwpjpZT1xigZi4MAJj9tS/iyAdeAz2nLn6cclZgNDPbWCMwBCY0TRNgdz+BGTbFITKH4Kz4BldwARt9WCMwBCY/6Xerha4jE7k3APwvPfkhHAR98MwRmAIzJiUy0sELGPGt3cm7Jnz7oqLZ/tmnlRmBIbAjE0L2yHbpgpQYk7g+xlwLJ8zzrrL85AH+sEYgSEwY1IHywQk4064dhrca2bzpxEjMARmYindBQKRu06kcQpGdsz6Ly7idjt+k4gRGAITO02VIbfMEIDc80jf/ruV7Sv5GowRGAITM813TaAx4QmdnA5n4VwogwNgjMAQmJipw+UCDF0T6ciA0ZXYwpM+x1rDYIzAGJDSu1M3MErfbhjd4s/9pphAmFvujMDEndKVpxsY1dlkWWD6bqlgjMDEmdw5XzcwmuK3LDBtN/g1SEZg4k7+abY+YFofhciqwJy+HAFjBCbO5Isz9QAjYLI0MBW/cKGXEZi4ky88qA+YSy9YGpiyiwSGEZhJBCbD0sCU2AgMIzD8iZSgOdpMYBiBMWCR92l9wLQ8YmlgjrcTGEZguE2doKnq5C4SIzB80S5Bc7aLwDACE3dK7y4eFYgxHX180Y4RmEk97OjvXGhZYAZcPCrACMykXdfQ2/AwVlVlY8A3DCOr/y1i2Gw4KunCJXOfH7LCw46MwEzKhVMN52YhoyIP8ypWYv/VUpgxRdWwrEjf08vrhyQwRmCSfGVmsGkqimrnCFhGZ1H1WwjKIZit7n5F98+jvbW8ApQRmKRe+j3cOB3rT70oUBkzh3vKYbZKbCHdwNRd4Q4SIzBJ+2xJZ/3jyD6ZKzCJOemVq9F/ZwhmyStpyP1S/wLvX3Yu8DICk5QPr5XVPYW0inwBybizqeUz03x4rbhJ/9NLwQGJH5BjBCbRn471Nk7DRzXpAo97nhIT/FT6h7177WnyjOM4/h72BrY3IZ5YxOiGZj7Q4UATD8FzNCZuidsYuLhkivPEnCIxm6hBRGoQaKogwmSVYZSAohI6FCGRkzCYYNFiW37mqqaJCXGD9qa93feT/J/e6ZN+U7gOd9dgUMn7pv7rJfeqTwCBseDl9y/cH4bi8lflB1rmSDbRmPRUdLoVK6O+caWfGI1o/4unJyCAwFig35Mll+sjJb5egp7SzHGskLu7IQaBHFem40VEcVmTx/I0CIxlvL5hfVKabkIR0SQUf6GSB1c0Xcb842ZpOeLdu2VckwkCY63y9hoTiajMoaZT8gXGZKX+kaC2nHwecVxSfvZqzM8/d0FgLP9TY23Vt1GLzFLXNjX03bPkc7o6arW04Jzm7xmJODDn/uT+FxCYadEy+EAzzi83gYjafF13QM0DHkUqOB5Ufc9trbqyM/zsmfnfKym7d8pxSftllBetgcBMpwONJ6MZmPCsqfpGFx9WqetZ3yTOFQXkGXqk3OZCfVa+acLnzji7UfMONvMOJBAYO/AH/VpX/Z0VkQnPEudm7bpxREfvFKjQ49SljlpVdrpV3HZZv92/EIrc+upMzb2w8r89syhViUedk4pLxnnOHYHAxMTA8yEll603X15bzexfD2v+3qF/jcvnOV71j3AsAAQmZu4MtGqWI812kUk4s0NJP7W/886Xpg421YHAxJrZnWv2ttgrMmYKV+njHPeEgSmqZ9UIBCZu1Dy+oZnFqfaLTFGK5uSdemsp+zjnjUBg4k9dd6M5CmCvwISXsrOUlN2jI5XEBQQmbt3qu2tusbNlZPbXO7mKAQQm3vV6+83ysW3CsuDiWtX1NAogMDYRCAbMVZnhHb/xOulXM9Q7OiCAwNhQ45MWpV7eEZdxybl9Wv4gS9EgMLZmzgc5H/0e3sYf69lQnaX7f7cJIDDvEXM1Q0FruRaWpsckLOZowx9dDQIIzHvMnGOq7bqpndf3W74LeF7Jav1w85haB9sFEJj/mae+ETnaKvSVO1uflq6LSlSWubbpx1t5oZWhlwFuoQOBwRvd3ieq7LyuQ035oV84m2p2Ka3iSy0u32hOTYd2CyeVrNaisg1KubRdW6/tDsUkv6UkdNfvP75hAQQGAIEhMAAIDAACIwAEhsAAIDAACAyBAQgMgQFAYAAQGAIDEBgCA4DAACAwBAYgMAQGAIEBQGAIDEBgCAwAAgOAwBAYAAQGQNwHRgQGAIEBQGAAEBgCA4DAACAwAAgMgQFAYACw0Q4AgZkYgQFAYAAQGAAE5lX7ZbDaRBSGUUzSIaQZtYNtOsZpaqKgEmkjLlKrhaovoG8gvkLISySPoSuhxQcRF9mEQCCuQ1bBrBLG/8K3zkpmJsM5cPb/5nzcy8AAAAMDAAwMADAw/39gmjEA5BbXeFoDE5jNzWbzNwaA3OHa1sAEaQ3M49VqNY0BIHe4tl3jaQyMZ943G7PZ7FsMALnD2v7uGlfrXtIDc8+MBoPBJ/eaigEgT2yGw+Fn17haT3Rg9kzffGi+mE6nP2IAyA3W9I1rW437aj6xgSmZ+2bNfFqv17vz+fxXDAA7z2Kx+N1oNC5c22ZNrZfUfiIUzbIZ6I/WDsPw3Xg8vuW7BLCzbCaTyc8oiq6s6ZdqOzDLaj4xCvqT3TVDLV3HfNPr9b6MRqOb5XL5Z71er2IAyCyuUdeqNXvb7/e/uobNjpoO1bin5kVy36SKFi4yn5mvzK55ZV6b780P5kdEzJ5q9FrNdtXwczUdqHF9j0TCr5iqeWieaGTOzNc69sK8NN8iYua8VKNdNXumhk/UtJ/860Vo0Yr6n/k66JHZ0pFtHXxudhAxc56r0baabanhQ32Nyim9XoS+SjqkqidVTUeemk0d/QQRM2dLjZ6q2WM17G8Zl9ReMp5Z0fIdmA/MI7MmjxExM9bkkVo9ULsVtVxU2+mjQwpmSceVdei+XjY+ImbOqhqtqFlPDRe2j0v6Q1PUoXuImHlLalbDshvcQcQdEQAAAAAAAAAAAAAAAAAAAABgO/FWc84/gbhaWIPzXREAAAAASUVORK5CYII=",nE=({setBusca:t,setStatus:e,CadastroGoogle:n,UserValue:r,setUserValue:i})=>{const o=()=>{localStorage.users=null,localStorage.email=null,i(null)};return ne(W_,{children:[ne(G_,{children:[T(Q_,{type:"text",placeholder:"Pesquise pelo titulo",onChange:s=>t(s.target.value)}),ne(Y_,{onChange:s=>e(s.target.value),children:[T(ys,{children:"status"}),T(ys,{value:"Solicitada",children:"Solicitada"}),T(ys,{value:"Processando",children:"Processando"}),T(ys,{value:"Concluída",children:"Concluída"})]})]}),T(K_,{children:r==null?T(E0,{children:ne(Z_,{children:[T(q_,{id:"sedt",src:eE,onClick:n}),T(J_,{id:"sedto",src:tE,onClick:n})]})}):T(X_,{children:T("button",{onClick:o,children:"deslogar"})})})]})},rE=$.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 150px;
  width: 90%;
  padding-left: 40px;
      @media (max-width: 430px){
        width: 80%;
  }
`,iE=$.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,oE=$.h1`
  font-weight: bold;

    @media (max-width: 768px) {
      display: none;
    }
  /* padding-top: 30px; */
`,sE=$.span`
  color: #00ca00;
`,aE=$.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

`,lE=$.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
`,uE=$.div`
  position: absolute;
  top: 80px;
  right: 80px;
  width: 250px;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width:800px) {
        left: auto;
        right: auto;
      }
`,cE=$.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

`,dE=$.div`
  height: 80px;
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,fE=$.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`,hE=$.div`
  display: flex;
  flex-direction: column;
`,pE=$.p`
  padding-top: 20px;
  font-weight: 800;
  font-size: large;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`,mE=$.p`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
  font-size: small;
  font-weight: 200;
`,gE=$.div`
  padding-top: 20px;
  width: 250px;
  display: flex;
  justify-content: center;

  >a{
      text-decoration: none;
      color: red;
    }
`,vE=$.div`
  display: flex;
  justify-content: center;

  >button{
    background-color: #f2f2f2;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) .5s ;

      &:hover{
        background-color: #e9e8e8;
      }
  }
`,Dv=({UserValue:t,adm:e})=>{const[n,r]=L.useState(!1),i=()=>{r(!0)},o=l=>{l.target.id=="modal"&&r(!1)},s=l=>{if(t.email!="gabrielesteves51234@gmail.com"){alert("se quiser se tornar adm mande um email para : gabrielesteves51234@gmail.com");return}return a("/admeditpag")},a=TS();return ne(rE,{id:"modal",onClick:l=>o(l),children:[ne(iE,{children:[ne(oE,{children:[T(sE,{children:e})," /transaçao"]}),T(aE,{children:t&&T(lE,{onClick:()=>i(),src:t.photoURL})})]}),t&&n&&T(cE,{id:"modal",onClick:o,children:ne(uE,{children:[ne(dE,{children:[T(fE,{src:t.photoURL}),ne(hE,{children:[T(pE,{children:T("abbr",{style:{textDecoration:"none"},title:t.displayName,children:t.displayName})}),T(mE,{children:T("abbr",{style:{textDecoration:"none"},title:t.email,children:t.email})})]})]}),T(gE,{children:T(vE,{children:T("button",{onClick:()=>s(t.email),children:"modo adm"})})})]})})]})};function qh(t){return HS({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"}},{tag:"path",attr:{d:"M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"}}]})(t)}const yE=$.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 250px;
  
`,wE=$.div`
  background-color: white;
  max-width: 90%;
  width: 1120px;
  border-radius: 5px;
  box-shadow: 4px 3px 10px 0px #00000067;
  overflow: auto;

    @media (max-width: 430px) {
      max-width: 100%;
      width: 100%;
      &::-webkit-scrollbar-track{
        display: none;
      }
      &::-webkit-scrollbar{
        width: 0;
      }
    }

`,SE=$.div`
  font-weight: 600;
  align-items: center;
  display: flex;
  color: #0000007b;
  padding-top: 10px;
  padding-left: 10px;
  justify-content: space-between;
`,Xh=$.span`
  margin-left: 6px;
`,_E=$.div`
  display: flex;
  align-items: center;
`,EE=$.div`
  margin-right: 10px;
`,kE=$.table`
  width: 100%;
  background-color: rgb(73,205,205);
  margin-top: 10px;


  
`,IE=$.thead`
  
`,Jh=$.tr`
  
`,ws=$.th`
  color: white;
`,CE=$.th`
  color: white;
  @media (max-width: 430px){
    display: none;
  }
`;$.span`
  color: rgb(0, 163, 163);
  user-select: none;
`;const TE=$.tbody`
  background-color: white;
  overflow: hidden;

`,Ss=$.th`
  color: black;
  transition: all .1s;
  padding: 0;
  margin: 0;
`,Dn=$.span`
    @media (max-width: 430px){
    font-size: 12px;
    display: inline-block;
  }
`,AE=({ExibirModal:t,BuscaFiltrado:e,setModalValue:n})=>T(yE,{children:ne(wE,{children:[ne(SE,{children:[ne(_E,{children:[T(qh,{})," ",T(Xh,{children:"LISTA DE TRANSAÇOES"})]}),T(EE,{children:T(Xh,{children:T(qh,{})})})]}),ne(kE,{children:[T(IE,{children:ne(Jh,{children:[T(ws,{children:T(Dn,{children:"Titulo"})}),T(ws,{children:T(Dn,{children:"Status"})}),T(ws,{children:T(Dn,{children:"Descriçao"})}),T(ws,{children:T(Dn,{children:"Valor"})}),T(CE,{children:"--"})]})}),T(TE,{children:e.map(r=>ne(Jh,{children:[T(Ss,{style:{cursor:"pointer"},onClick:()=>{n(r),t(r)},children:ne(Dn,{children:[" ",r.name]})},r.id),T(Ss,{children:T(Dn,{children:r.status})}),T(Ss,{children:T(Dn,{children:r.descricao})}),T(Ss,{children:T(Dn,{children:r.valor})})]},r.id))})]})]})}),Nv=H_`

*{
        margin: 0;
        padding: 0;
    }

body{

    box-sizing: border-box;
    background-color: #f2f2f2;
    height: 100vh;
    width: 100vw;
    font-family: 'Poppins', sans-serif;

}

`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Mv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let c=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(c=64)),r.push(n[f],n[h],n[c],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ov(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw Error();const c=o<<2|a>>4;if(r.push(c),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},RE=function(t){const e=Ov(t);return Mv.encodeByteArray(e,!0)},ya=function(t){return RE(t).replace(/\./g,"")},Lv=function(t){try{return Mv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=()=>PE().__FIREBASE_DEFAULTS__,DE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lv(t[1]);return e&&JSON.parse(e)},Ud=()=>{try{return bE()||DE()||NE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fv=t=>{var e,n;return(n=(e=Ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},OE=t=>{const e=Fv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ME=()=>{var t;return(t=Ud())===null||t===void 0?void 0:t.config},$v=t=>{var e;return(e=Ud())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ya(JSON.stringify(n)),ya(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $E(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function zE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function UE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jE(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BE(){try{return typeof indexedDB=="object"}catch{return!1}}function VE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HE,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?WE(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Rn(i,a,r)}}function WE(t,e){return t.replace(GE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const GE=/\{\$([^}]+)}/g;function KE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Zh(o)&&Zh(s)){if(!wa(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function QE(t,e){const n=new YE(t,e);return n.subscribe.bind(n)}class YE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uu),i.error===void 0&&(i.error=uu),i.complete===void 0&&(i.complete=uu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){return t&&t._delegate?t._delegate:t}class br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZE(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JE(t){return t===mr?void 0:t}function ZE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const tk={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},nk=he.INFO,rk={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},ik=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=nk,this._logHandler=ik,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const ok=(t,e)=>e.some(n=>t instanceof n);let ep,tp;function sk(){return ep||(ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ak(){return tp||(tp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zv=new WeakMap,_c=new WeakMap,Uv=new WeakMap,cu=new WeakMap,Bd=new WeakMap;function lk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(rr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&zv.set(n,t)}).catch(()=>{}),Bd.set(e,t),e}function uk(t){if(_c.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});_c.set(t,e)}let Ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ck(t){Ec=t(Ec)}function dk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(du(this),e,...n);return Uv.set(r,e.sort?e.sort():[e]),rr(r)}:ak().includes(t)?function(...e){return t.apply(du(this),e),rr(zv.get(this))}:function(...e){return rr(t.apply(du(this),e))}}function fk(t){return typeof t=="function"?dk(t):(t instanceof IDBTransaction&&uk(t),ok(t,sk())?new Proxy(t,Ec):t)}function rr(t){if(t instanceof IDBRequest)return lk(t);if(cu.has(t))return cu.get(t);const e=fk(t);return e!==t&&(cu.set(t,e),Bd.set(e,t)),e}const du=t=>Bd.get(t);function hk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=rr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(rr(s.result),l.oldVersion,l.newVersion,rr(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const pk=["get","getKey","getAll","getAllKeys","count"],mk=["put","add","delete","clear"],fu=new Map;function np(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pk.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fu.set(e,o),o}ck(t=>({...t,get:(e,n,r)=>np(e,n)||t.get(e,n,r),has:(e,n)=>!!np(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",rp="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new jd("@firebase/app"),yk="@firebase/app-compat",wk="@firebase/analytics-compat",Sk="@firebase/analytics",_k="@firebase/app-check-compat",Ek="@firebase/app-check",kk="@firebase/auth",Ik="@firebase/auth-compat",Ck="@firebase/database",Tk="@firebase/database-compat",Ak="@firebase/functions",xk="@firebase/functions-compat",Rk="@firebase/installations",Pk="@firebase/installations-compat",bk="@firebase/messaging",Dk="@firebase/messaging-compat",Nk="@firebase/performance",Ok="@firebase/performance-compat",Mk="@firebase/remote-config",Lk="@firebase/remote-config-compat",Fk="@firebase/storage",$k="@firebase/storage-compat",zk="@firebase/firestore",Uk="@firebase/firestore-compat",jk="firebase",Bk="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="[DEFAULT]",Vk={[kc]:"fire-core",[yk]:"fire-core-compat",[Sk]:"fire-analytics",[wk]:"fire-analytics-compat",[Ek]:"fire-app-check",[_k]:"fire-app-check-compat",[kk]:"fire-auth",[Ik]:"fire-auth-compat",[Ck]:"fire-rtdb",[Tk]:"fire-rtdb-compat",[Ak]:"fire-fn",[xk]:"fire-fn-compat",[Rk]:"fire-iid",[Pk]:"fire-iid-compat",[bk]:"fire-fcm",[Dk]:"fire-fcm-compat",[Nk]:"fire-perf",[Ok]:"fire-perf-compat",[Mk]:"fire-rc",[Lk]:"fire-rc-compat",[Fk]:"fire-gcs",[$k]:"fire-gcs-compat",[zk]:"fire-fst",[Uk]:"fire-fst-compat","fire-js":"fire-js",[jk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Map,Cc=new Map;function Hk(t,e){try{t.container.addComponent(e)}catch(n){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Si(t){const e=t.name;if(Cc.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of Sa.values())Hk(n,t);return!0}function Vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ir=new Ho("app","Firebase",Wk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=Bk;function jv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ic,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});if(n||(n=ME()),!n)throw ir.create("no-options");const o=Sa.get(i);if(o){if(wa(n,o.options)&&wa(r,o.config))return o;throw ir.create("duplicate-app",{appName:i})}const s=new ek(i);for(const l of Cc.values())s.addComponent(l);const a=new Gk(n,r,s);return Sa.set(i,a),a}function Bv(t=Ic){const e=Sa.get(t);if(!e&&t===Ic)return jv();if(!e)throw ir.create("no-app",{appName:t});return e}function or(t,e,n){var r;let i=(r=Vk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(a.join(" "));return}Si(new br(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="firebase-heartbeat-database",Qk=1,xo="firebase-heartbeat-store";let hu=null;function Vv(){return hu||(hu=hk(Kk,Qk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xo)}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),hu}async function Yk(t){try{return(await Vv()).transaction(xo).objectStore(xo).get(Hv(t))}catch(e){if(e instanceof Rn)Dr.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(n.message)}}}async function ip(t,e){try{const r=(await Vv()).transaction(xo,"readwrite");return await r.objectStore(xo).put(e,Hv(t)),r.done}catch(n){if(n instanceof Rn)Dr.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dr.warn(r.message)}}}function Hv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=1024,Xk=30*24*60*60*1e3;class Jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=op();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Xk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=op(),{heartbeatsToSend:n,unsentEntries:r}=Zk(this._heartbeatsCache.heartbeats),i=ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function op(){return new Date().toISOString().substring(0,10)}function Zk(t,e=qk){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),sp(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BE()?VE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sp(t){return ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t){Si(new br("platform-logger",e=>new gk(e),"PRIVATE")),Si(new br("heartbeat",e=>new Jk(e),"PRIVATE")),or(kc,rp,t),or(kc,rp,"esm2017"),or("fire-js","")}tI("");var nI="firebase",rI="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(nI,rI,"app");function Hd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Wv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iI=Wv,Gv=new Ho("auth","Firebase",Wv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new jd("@firebase/auth");function Fs(t,...e){ap.logLevel<=he.ERROR&&ap.error(`Auth (${Go}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw Wd(t,...e)}function on(t,...e){return Wd(t,...e)}function Kv(t,e,n){const r=Object.assign(Object.assign({},iI()),{[e]:n});return new Ho("auth","Firebase",r).create(e,{appName:t.name})}function oI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&an(t,"argument-error"),Kv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gv.create(t,...e)}function Q(t,e,...n){if(!t)throw Wd(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fs(e),new Error(e)}function In(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new Map;function vn(t){In(t instanceof Function,"Expected a class definition");let e=lp.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){const n=Vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(wa(o,e??{}))return i;an(i,"already-initialized")}return n.initialize({options:e})}function aI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lI(){return up()==="http:"||up()==="https:"}function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lI()||zE()||"connection"in navigator)?navigator.onLine:!0}function cI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=$E()||UE()}get(){return uI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=new Ko(3e4,6e4);function hI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gl(t,e,n,r,i={}){return Yv(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Wo(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qv.fetch()(qv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Yv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dI),e);try{const i=new mI(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw _s(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _s(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw _s(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw _s(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kv(t,f,u);an(t,f)}}catch(i){if(i instanceof Rn)throw i;an(t,"network-request-failed")}}async function pI(t,e,n,r,i={}){const o=await gl(t,e,n,r,i);return"mfaPendingCredential"in o&&an(t,"multi-factor-auth-required",{_serverResponse:o}),o}function qv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gd(t.config,i):`${t.config.apiScheme}://${i}`}class mI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),fI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _s(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,e){return gl(t,"POST","/v1/accounts:delete",e)}async function vI(t,e){return gl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yI(t,e=!1){const n=Yt(t),r=await n.getIdToken(e),i=Kd(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:no(pu(i.auth_time)),issuedAtTime:no(pu(i.iat)),expirationTime:no(pu(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function pu(t){return Number(t)*1e3}function Kd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lv(n);return i?JSON.parse(i):(Fs("Failed to decode base64 JWT payload"),null)}catch(i){return Fs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wI(t){const e=Kd(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&SI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ro(t,vI(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?II(o.providerUserInfo):[],a=kI(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Xv(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function EI(t){const e=Yt(t);await _a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function II(t){return t.map(e=>{var{providerId:n}=e,r=Hd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){const n=await Yv(t,{},async()=>{const r=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=qv(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qv.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await CI(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Po;return r&&(Q(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(Q(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _I(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yI(this,e)}reload(){return EI(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ro(this,gI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,c=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:m,emailVerified:g,isAnonymous:I,providerData:P,stsTokenManager:D}=n;Q(m&&D,e,"internal-error");const O=Po.fromJSON(this.name,D);Q(typeof m=="string",e,"internal-error"),Nn(h,e.name),Nn(c,e.name),Q(typeof g=="boolean",e,"internal-error"),Q(typeof I=="boolean",e,"internal-error"),Nn(y,e.name),Nn(w,e.name),Nn(S,e.name),Nn(k,e.name),Nn(p,e.name),Nn(d,e.name);const Y=new kr({uid:m,auth:e,email:c,emailVerified:g,displayName:h,isAnonymous:I,photoURL:w,phoneNumber:y,tenantId:S,stsTokenManager:O,createdAt:p,lastLoginAt:d});return P&&Array.isArray(P)&&(Y.providerData=P.map(j=>Object.assign({},j))),k&&(Y._redirectEventId=k),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Po;i.updateFromServerResponse(n);const o=new kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _a(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jv.type="NONE";const cp=Jv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=$s(this.userKey,i.apiKey,o),this.fullPersistenceKey=$s("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(vn(cp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||vn(cp);const s=$s(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const h=kr._fromJSON(e,f);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new ui(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new ui(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(iy(e))return"Webos";if(Qd(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zv(t=at()){return/firefox\//i.test(t)}function Qd(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=at()){return/crios\//i.test(t)}function ty(t=at()){return/iemobile/i.test(t)}function ny(t=at()){return/android/i.test(t)}function ry(t=at()){return/blackberry/i.test(t)}function iy(t=at()){return/webos/i.test(t)}function vl(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TI(t=at()){var e;return vl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AI(){return jE()&&document.documentMode===10}function oy(t=at()){return vl(t)||ny(t)||iy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}function xI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t,e=[]){let n;switch(t){case"Browser":n=dp(at());break;case"Worker":n=`${dp(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Go}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fp(this),this.idTokenSubscription=new fp(this),this.beforeStateQueue=new RI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Yt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function yl(t){return Yt(t)}class fp{constructor(e){this.auth=e,this.observer=null,this.addObserver=QE(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function bI(t,e,n){const r=yl(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=ay(e),{host:s,port:a}=DI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NI()}function ay(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DI(t){const e=ay(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:hp(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:hp(s)}}}function hp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e){return pI(t,"POST","/v1/accounts:signInWithIdp",hI(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="http://localhost";class Nr extends ly{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Hd(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Nr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ci(e,n)}buildRequest(){const e={requestUri:OI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Qo{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Qo{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Qo{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await kr._fromIdTokenResponse(e,r,i),s=pp(r);return new _i({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pp(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Rn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ea(e,n,r,i)}}function uy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(t,o,e,r):o})}async function MI(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Ro(t,uy(r,i,e,t),n);Q(o.idToken,r,"internal-error");const s=Kd(o.idToken);Q(s,r,"internal-error");const{sub:a}=s;return Q(t.uid===a,r,"user-mismatch"),_i._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&an(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e,n=!1){const r="signIn",i=await uy(t,r,e),o=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function $I(t,e,n,r){return Yt(t).onIdTokenChanged(e,n,r)}function zI(t,e,n){return Yt(t).beforeAuthStateChanged(e,n)}const ka="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){const t=at();return Qd(t)||vl(t)}const jI=1e3,BI=10;class dy extends cy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UI()&&xI(),this.fallbackToPolling=oy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);AI()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const VI=dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends cy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fy.type="SESSION";const hy=fy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await HI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=qd("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const c=h;if(c.data.eventId===u)switch(c.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(c.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function GI(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function KI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YI(){return py()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="firebaseLocalStorageDb",qI=1,Ia="firebaseLocalStorage",gy="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sl(t,e){return t.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function XI(){const t=indexedDB.deleteDatabase(my);return new Yo(t).toPromise()}function Ac(){const t=indexedDB.open(my,qI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ia,{keyPath:gy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ia)?e(r):(r.close(),await XI(),e(await Ac()))})})}async function mp(t,e,n){const r=Sl(t,!0).put({[gy]:e,value:n});return new Yo(r).toPromise()}async function JI(t,e){const n=Sl(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function gp(t,e){const n=Sl(t,!0).delete(e);return new Yo(n).toPromise()}const ZI=800,eC=3;class vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(YI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KI(),!this.activeServiceWorker)return;this.sender=new WI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await mp(e,ka,"1"),await gp(e,ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Sl(i,!1).getAll();return new Yo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vy.type="LOCAL";const tC=vy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=on("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",nC().appendChild(r)})}function iC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t,e){return e?vn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends ly{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oC(t){return FI(t.auth,new Xd(t),t.bypassAuthState)}function sC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),LI(n,new Xd(t),t.bypassAuthState)}async function aC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),MI(n,new Xd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oC;case"linkViaPopup":case"linkViaRedirect":return aC;case"reauthViaPopup":case"reauthViaRedirect":return sC;default:an(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=new Ko(2e3,1e4);async function uC(t,e,n){const r=yl(t);oI(t,e,Yd);const i=yy(r,n);return new Sr(r,"signInViaPopup",e,i).executeNotNull()}class Sr extends wy{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lC.get())};e()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="pendingRedirect",zs=new Map;class dC extends wy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zs.get(this.auth._key());if(!e){try{const r=await fC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zs.set(this.auth._key(),e)}return this.bypassAuthState||zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fC(t,e){const n=mC(e),r=pC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hC(t,e){zs.set(t._key(),e)}function pC(t){return vn(t._redirectPersistence)}function mC(t){return $s(cC,t.config.apiKey,t.name)}async function gC(t,e,n=!1){const r=yl(t),i=yy(r,e),s=await new dC(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=10*60*1e3;class yC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vC&&this.cachedEventUids.clear(),this.cachedEventUids.has(vp(e))}saveEventToCache(e){this.cachedEventUids.add(vp(e)),this.lastProcessedEventTime=Date.now()}}function vp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t,e={}){return gl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EC=/^https?/;async function kC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SC(t);for(const n of e)try{if(IC(n))return}catch{}an(t,"unauthorized-domain")}function IC(t){const e=Tc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!EC.test(n))return!1;if(_C.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=new Ko(3e4,6e4);function yp(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TC(t){return new Promise((e,n)=>{var r,i,o;function s(){yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yp(),n(on(t,"network-request-failed"))},timeout:CC.get()})}if(!((i=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=sn().gapi)===null||o===void 0)&&o.load)s();else{const a=iC("iframefcb");return sn()[a]=()=>{gapi.load?s():n(on(t,"network-request-failed"))},rC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Us=null,e})}let Us=null;function AC(t){return Us=Us||TC(t),Us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=new Ko(5e3,15e3),RC="__/auth/iframe",PC="emulator/auth/iframe",bC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NC(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gd(e,PC):`https://${t.config.authDomain}/${RC}`,r={apiKey:e.apiKey,appName:t.name,v:Go},i=DC.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Wo(r).slice(1)}`}async function OC(t){const e=await AC(t),n=sn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:NC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bC,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=on(t,"network-request-failed"),a=sn().setTimeout(()=>{o(s)},xC.get());function l(){sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LC=500,FC=600,$C="_blank",zC="http://localhost";class wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UC(t,e,n,r=LC,i=FC){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MC),{width:r.toString(),height:i.toString(),top:o,left:s}),u=at().toLowerCase();n&&(a=ey(u)?$C:n),Zv(u)&&(e=e||zC,l.scrollbars="yes");const f=Object.entries(l).reduce((c,[y,w])=>`${c}${y}=${w},`,"");if(TI(u)&&a!=="_self")return jC(e||"",a),new wp(null);const h=window.open(e||"",a,f);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new wp(h)}function jC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="__/auth/handler",VC="emulator/auth/handler";function Sp(t,e,n,r,i,o){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Go,eventId:i};if(e instanceof Yd){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",KE(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof Qo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${HC(t)}?${Wo(a).slice(1)}`}function HC({config:t}){return t.emulator?Gd(t,VC):`https://${t.authDomain}/${BC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hy,this._completeRedirectFn=gC,this._overrideRedirectResult=hC}async _openPopup(e,n,r,i){var o;In((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Sp(e,n,r,Tc(),i);return UC(e,s,qd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),GI(Sp(e,n,r,Tc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(In(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OC(e),r=new yC(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mu,{type:mu},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[mu];s!==void 0&&n(!!s),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oy()||Qd()||vl()}}const GC=WC;var _p="@firebase/auth",Ep="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YC(t){Si(new br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{Q(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sy(t)},f=new PI(a,l,u);return aI(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Si(new br("auth-internal",e=>{const n=yl(e.getProvider("auth").getImmediate());return(r=>new KC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(_p,Ep,QC(t)),or(_p,Ep,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=5*60,XC=$v("authIdTokenMaxAge")||qC;let kp=null;const JC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XC)return;const i=n==null?void 0:n.token;kp!==i&&(kp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZC(t=Bv()){const e=Vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sI(t,{popupRedirectResolver:GC,persistence:[tC,VI,hy]}),r=$v("authTokenSyncURL");if(r){const o=JC(r);zI(n,o,()=>o(n.currentUser)),$I(n,s=>o(s))}const i=Fv("auth");return i&&bI(n,`http://${i}`),n}YC("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new jd("@firebase/firestore");function Ca(t,...e){if(Ei.logLevel<=he.DEBUG){const n=e.map(Zd);Ei.debug(`Firestore (${xi}): ${t}`,...n)}}function Jd(t,...e){if(Ei.logLevel<=he.ERROR){const n=e.map(Zd);Ei.error(`Firestore (${xi}): ${t}`,...n)}}function _y(t,...e){if(Ei.logLevel<=he.WARN){const n=e.map(Zd);Ei.warn(`Firestore (${xi}): ${t}`,...n)}}function Zd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw Jd(e),new Error(e)}function Cn(t,e){t||be()}function _l(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="ok",eT="cancelled",ro="unknown",de="invalid-argument",tT="deadline-exceeded",nT="not-found",rT="permission-denied",xc="unauthenticated",iT="resource-exhausted",ki="failed-precondition",oT="aborted",sT="out-of-range",Ey="unimplemented",aT="internal",lT="unavailable";class Z extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class cT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dT{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Cn(typeof e.accessToken=="string"),new ky(e.accessToken,new gt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class fT{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(Cn(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class hT{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new fT(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mT{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Cn(typeof e.token=="string"),new pT(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,i,o,s,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bo&&e.projectId===this.projectId&&e.database===this.database}}class Do{constructor(e,n,r){n===void 0?n=0:n>e.length&&be(),r===void 0?r=e.length-n:r>e.length-n&&be(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Do.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Do?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ge extends Do{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(de,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const vT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Do{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return vT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Z(de,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Z(de,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(de,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Z(de,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.path=e}static fromPath(e){return new dt(Ge.fromString(e))}static fromName(e){return new dt(Ge.fromString(e).popFirst(5))}static empty(){return new dt(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new dt(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t,e,n){if(!n)throw new Z(de,`Function ${t}() cannot be called with an empty ${e}.`)}function Cp(t){if(!dt.isDocumentKey(t))throw new Z(de,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tp(t){if(dt.isDocumentKey(t))throw new Z(de,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ef(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":be()}function El(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(de,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ef(t);throw new Z(de,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t){return t==null}function Ta(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ap,ae;function xp(t){if(t===void 0)return Jd("RPC_ERROR","HTTP error has no status"),ro;switch(t){case 200:return Ip;case 400:return ki;case 401:return xc;case 403:return rT;case 404:return nT;case 409:return oT;case 416:return sT;case 429:return iT;case 499:return eT;case 500:return ro;case 501:return Ey;case 503:return lT;case 504:return tT;default:return t>=200&&t<300?Ip:t>=400&&t<500?ki:t>=500&&t<600?aT:ro}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ae=Ap||(Ap={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";class ST extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,n,r,i,o){const s=this.T(e,n);Ca("RestConnection","Sending: ",s,r);const a={};return this.A(a,i,o),this.R(e,s,a,r).then(l=>(Ca("RestConnection","Received: ",l),l),l=>{throw _y("RestConnection",`${e} failed with error: `,l,"url: ",s,"request:",r),l})}P(e,n,r,i,o,s){return this.I(e,n,r,i,o)}A(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+xi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}T(e,n){const r=wT[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.V=n}$(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,r,i){var o;const s=JSON.stringify(i);let a;try{a=await this.V(n,{method:"POST",headers:r,body:s})}catch(l){const u=l;throw new Z(xp(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(o=l==null?void 0:l.error)===null||o===void 0?void 0:o.message;throw new Z(xp(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_T(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function He(t,e){return t<e?-1:t>e?1:0}function Cy(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Tn(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Tn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tn.EMPTY_BYTE_STRING=new Tn("");const kT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(Cn(!!t),typeof t=="string"){let e=0;const n=kT.exec(t);if(Cn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function No(t){return typeof t=="string"?Tn.fromBase64String(t):Tn.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(de,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(de,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(de,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(de,"Timestamp seconds out of range: "+e)}static now(){return At.fromMillis(Date.now())}static fromDate(e){return At.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new At(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ay(t){const e=t.mapValue.fields.__previous_value__;return Ty(e)?Ay(e):e}function Oo(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new At(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es={fields:{__type__:{stringValue:"__max__"}}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ty(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:be()}function Aa(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Or(r.timestampValue),s=Or(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return No(r.bytesValue).isEqual(No(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ue(r.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ue(r.integerValue)===Ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ue(r.doubleValue),s=Ue(i.doubleValue);return o===s?Ta(o)===Ta(s):isNaN(o)&&isNaN(s)}return!1}(t,e);case 9:return Cy(t.arrayValue.values||[],e.arrayValue.values||[],Aa);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(Rp(o)!==Rp(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!Aa(o[a],s[a])))return!1;return!0}(t,e);default:return be()}}function Mo(t,e){return(t.values||[]).find(n=>Aa(n,e))!==void 0}function xa(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(t.booleanValue,e.booleanValue);case 2:return function(i,o){const s=Ue(i.integerValue||i.doubleValue),a=Ue(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(t,e);case 3:return Pp(t.timestampValue,e.timestampValue);case 4:return Pp(Oo(t),Oo(e));case 5:return He(t.stringValue,e.stringValue);case 6:return function(i,o){const s=No(i),a=No(o);return s.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const s=i.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const u=He(s[l],a[l]);if(u!==0)return u}return He(s.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const s=He(Ue(i.latitude),Ue(o.latitude));return s!==0?s:He(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const s=i.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const u=xa(s[l],a[l]);if(u)return u}return He(s.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Es&&o===Es)return 0;if(i===Es)return 1;if(o===Es)return-1;const s=i.fields||{},a=Object.keys(s),l=o.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let f=0;f<a.length&&f<u.length;++f){const h=He(a[f],u[f]);if(h!==0)return h;const c=xa(s[a[f]],l[u[f]]);if(c!==0)return c}return He(a.length,u.length)}(t.mapValue,e.mapValue);default:throw be()}}function Pp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return He(t,e);const n=Or(t),r=Or(e),i=He(n.seconds,r.seconds);return i!==0?i:He(n.nanos,r.nanos)}function xy(t){return!!t&&"arrayValue"in t}function bp(t){return!!t&&"nullValue"in t}function Dp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gu(t){return!!t&&"mapValue"in t}function io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Np{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{}class ln extends Ry{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IT(e,n,r):n==="array-contains"?new AT(e,r):n==="in"?new xT(e,r):n==="not-in"?new RT(e,r):n==="array-contains-any"?new PT(e,r):new ln(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CT(e,r):new TT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xa(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(xa(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Il extends Ry{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Il(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class IT extends ln{constructor(e,n,r){super(e,n,r),this.key=dt.fromName(r.referenceValue)}matches(e){const n=dt.comparator(e.key,this.key);return this.matchesComparison(n)}}class CT extends ln{constructor(e,n){super(e,"in",n),this.keys=Py("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TT extends ln{constructor(e,n){super(e,"not-in",n),this.keys=Py("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Py(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>dt.fromName(r.referenceValue))}class AT extends ln{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xy(n)&&Mo(n.arrayValue,this.value)}}class xT extends ln{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class RT extends ln{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class PT extends ln{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.timestamp=e}static fromTimestamp(e){return new it(e)}static min(){return new it(new At(0,0))}static max(){return new it(new At(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ra(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ra(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ks(this.root,e,this.comparator,!0)}}class ks{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=o??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw be();const e=this.left.check();if(e!==this.right.check())throw be();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw be()}get value(){throw be()}get color(){throw be()}get left(){throw be()}get right(){throw be()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.comparator=e,this.data=new Ra(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Op(this.data.getIterator())}getIteratorFrom(e){return new Op(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pa)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pa(this.comparator);return n.data=e,n}}class Op{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Lo([])}unionWith(e){let n=new Pa(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lo(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cy(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=It.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=io(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Aa(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){kl(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new en(io(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new $n(e,0,it.min(),it.min(),it.min(),en.empty(),0)}static newFoundDocument(e,n,r,i){return new $n(e,1,n,it.min(),r,i,0)}static newNoDocument(e,n){return new $n(e,2,n,it.min(),it.min(),en.empty(),0)}static newUnknownDocument(e,n){return new $n(e,3,n,it.min(),it.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(it.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=it.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.S=null}}function Mp(t,e=null,n=[],r=[],i=null,o=null,s=null){return new bT(t,e,n,r,i,o,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function NT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function OT(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Lp(t){const e=_l(t);if(e.q===null){e.q=[];const n=OT(e),r=NT(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new js(n)),e.q.push(new js(It.keyField(),"asc"));else{let i=!1;for(const o of e.explicitOrderBy)e.q.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new js(It.keyField(),o))}}}return e.q}function MT(t){const e=_l(t);if(!e.O)if(e.limitType==="F")e.O=Mp(e.path,e.collectionGroup,Lp(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const o of Lp(e)){const s=o.dir==="desc"?"asc":"desc";n.push(new js(o.field,s))}const r=e.endAt?new Np(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Np(e.startAt.position,e.startAt.inclusive):null;e.O=Mp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.O}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Ta(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ta(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this._=void 0}}class FT extends Cl{}class $T extends Cl{constructor(e){super(),this.elements=e}}class zT extends Cl{constructor(e){super(),this.elements=e}}class UT extends Cl{constructor(e,n){super(),this.C=e,this.L=n}}class di{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new di}static exists(e){return new di(void 0,e)}static updateTime(e){return new di(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Tl{}class by extends Tl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dy extends Tl{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}class Ny extends Tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jT extends Tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),HT=(()=>({and:"AND",or:"OR"}))();class WT{constructor(e,n){this.databaseId=e,this.k=n}}function Rc(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.k?e.toBase64():e.toUint8Array()}function KT(t,e){return Rc(t,e.toTimestamp())}function Fp(t){return Cn(!!t),it.fromTimestamp(function(e){const n=Or(e);return new At(n.seconds,n.nanos)}(t))}function tf(t,e){return function(n){return new Ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Pc(t,e){return tf(t.databaseId,e.path)}function QT(t,e){const n=function(i){const o=Ge.fromString(i);return Cn(My(o)),o}(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(de,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(de,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new dt((Cn((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function $p(t,e){return tf(t.databaseId,e)}function YT(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zp(t,e,n){return{name:Pc(t,e),fields:n.value.mapValue.fields}}function qT(t,e){let n;if(e instanceof by)n={update:zp(t,e.key,e.value)};else if(e instanceof Ny)n={delete:Pc(t,e.key)};else if(e instanceof Dy)n={update:zp(t,e.key,e.data),updateMask:tA(e.fieldMask)};else{if(!(e instanceof jT))return be();n={verify:Pc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const s=o.transform;if(s instanceof FT)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof $T)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof zT)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof UT)return{fieldPath:o.field.canonicalString(),increment:s.L};throw be()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:KT(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:be()}(t,e.precondition)),n}function XT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$p(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$p(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Oy(Il.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:jr(f.field),direction:JT(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,u){return l.k||yT(u)?u:{value:u}}(t,e.limit);var a;return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function JT(t){return BT[t]}function ZT(t){return VT[t]}function eA(t){return HT[t]}function jr(t){return{fieldPath:t.canonicalString()}}function Oy(t){return t instanceof ln?function(e){if(e.op==="=="){if(Dp(e.value))return{unaryFilter:{field:jr(e.field),op:"IS_NAN"}};if(bp(e.value))return{unaryFilter:{field:jr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dp(e.value))return{unaryFilter:{field:jr(e.field),op:"IS_NOT_NAN"}};if(bp(e.value))return{unaryFilter:{field:jr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(e.field),op:ZT(e.op),value:e.value}}}(t):t instanceof Il?function(e){const n=e.getFilters().map(r=>Oy(r));return n.length===1?n[0]:{compositeFilter:{op:eA(e.op),filters:n}}}(t):be()}function tA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function My(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){return new WT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.C=i,this.Z=!1}tt(){if(this.Z)throw new Z(ki,"The client has already been terminated.")}I(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.I(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===xc&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(ro,i.toString())})}P(e,n,r,i){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.P(e,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===xc&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(ro,o.toString())})}terminate(){this.Z=!0}}async function Ly(t,e){const n=_l(t),r=YT(n.C)+"/documents",i={writes:e.map(o=>qT(n.C,o))};await n.I("Commit",r,i)}async function rA(t,e){const n=_l(t),r=XT(n.C,MT(e));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,s,a){const l=QT(o,s.name),u=Fp(s.updateTime),f=s.createTime?Fp(s.createTime):it.min(),h=new en({mapValue:{fields:s.fields}}),c=$n.newFoundDocument(l,u,f,h);return a&&c.setHasCommittedMutations(),a?c.setHasCommittedMutations():c}(n.C,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Map;function rf(t){if(t._terminated)throw new Z(ki,"The client has already been terminated.");if(!oo.has(t)){Ca("ComponentProvider","Initializing Datastore");const o=function(l){return new ST(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,i=t._freezeSettings(),new gT(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=nf(t._databaseId),a=function(l,u,f,h){return new nA(l,u,f,h)}(t._authCredentials,t._appCheckCredentials,o,s);oo.set(t,a)}var e,n,r,i;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return oo.get(t)}class Up{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(de,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(de,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,i,o,s){if(i===!0&&s===!0)throw new Z(de,`${r} and ${o} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Up({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(ki,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(ki,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Up(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uT;switch(n.type){case"gapi":const r=n.client;return new hT(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(de,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=oo.get(e);n&&(Ca("ComponentProvider","Removing Datastore"),oo.delete(e),n.terminate())}(this),Promise.resolve()}}function iA(t,e){const n=typeof t=="object"?t:Bv(),r=typeof t=="string"?t:e||"(default)",i=Vd(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const o=OE("firestore");o&&oA(i,...o)}return i}function oA(t,e,n,r={}){var i;const o=(t=El(t,Al))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==e&&_y("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=gt.MOCK_USER;else{s=FE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Z(de,"mockUserToken must contain 'sub' or 'user_id' field!");a=new gt(l)}t._authCredentials=new cT(new ky(s,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class xl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xl(this.firestore,e,this._query)}}class wn extends xl{constructor(e,n,r){super(e,n,new DT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new dt(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function Fy(t,e,...n){if(t=Yt(t),Iy("collection","path",e),t instanceof Al){const r=Ge.fromString(e,...n);return Tp(r),new wn(t,null,r)}{if(!(t instanceof Lt||t instanceof wn))throw new Z(de,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Tp(r),new wn(t.firestore,null,r)}}function $y(t,e,...n){if(t=Yt(t),arguments.length===1&&(e=ET.N()),Iy("doc","path",e),t instanceof Al){const r=Ge.fromString(e,...n);return Cp(r),new Lt(t,null,new dt(r))}{if(!(t instanceof Lt||t instanceof wn))throw new Z(de,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Cp(r),new Lt(t.firestore,t instanceof wn?t.converter:null,new dt(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ii(Tn.fromBase64String(e))}catch(n){throw new Z(de,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ii(Tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(de,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(de,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(de,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=/^__.*__$/;class aA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dy(e,this.data,this.fieldMask,n,this.fieldTransforms):new by(e,this.data,n,this.fieldTransforms)}}function Uy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be()}}class af{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=i,o===void 0&&this.et(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}rt(e){return new af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.ot(e),i}ut(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.et(),i}ct(e){return this.rt({path:void 0,it:!0})}at(e){return ba(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.at("Document fields must not be empty");if(Uy(this.nt)&&sA.test(e))throw this.at('Document fields cannot begin and end with "__"')}}class lA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||nf(e)}ft(e,n,r,i=!1){return new af({nt:e,methodName:n,lt:r,path:It.emptyPath(),it:!1,ht:i},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function uA(t){const e=t._freezeSettings(),n=nf(t._databaseId);return new lA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cA(t,e,n,r,i,o={}){const s=t.ft(o.merge||o.mergeFields?2:0,e,n,i);Hy("Data must be an object, but it was:",s,r);const a=By(r,s);let l,u;if(o.merge)l=new Lo(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const h of o.mergeFields){const c=dA(e,h,n);if(!s.contains(c))throw new Z(de,`Field '${c}' is specified in your field mask but missing from your input data.`);hA(f,c)||f.push(c)}l=new Lo(f),u=s.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=s.fieldTransforms;return new aA(new en(a),l,u)}function jy(t,e){if(Vy(t=Yt(t)))return Hy("Unsupported field value:",e,t),By(t,e);if(t instanceof zy)return function(n,r){if(!Uy(r.nt))throw r.at(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.at(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.nt!==4)throw e.at("Nested arrays are not supported");return function(n,r){const i=[];let o=0;for(const s of n){let a=jy(s,r.ct(o));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),o++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Yt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return LT(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=At.fromDate(n);return{timestampValue:Rc(r.C,i)}}if(n instanceof At){const i=new At(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Rc(r.C,i)}}if(n instanceof sf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ii)return{bytesValue:GT(r.C,n._byteString)};if(n instanceof Lt){const i=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw r.at(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.at(`Unsupported field value: ${ef(n)}`)}(t,e)}function By(t,e){const n={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kl(t,(r,i)=>{const o=jy(i,e.st(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function Vy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof At||t instanceof sf||t instanceof Ii||t instanceof Lt||t instanceof zy)}function Hy(t,e,n){if(!Vy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ef(n);throw r==="an object"?e.at(t+" a custom object"):e.at(t+" "+r)}}function dA(t,e,n){if((e=Yt(e))instanceof of)return e._internalPath;if(typeof e=="string")return Wy(t,e);throw ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const fA=new RegExp("[~\\*/\\[\\]]");function Wy(t,e,n){if(e.search(fA)>=0)throw ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new of(...e.split("."))._internalPath}catch{throw ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ba(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Z(de,a+t+l)}function hA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Gy extends pA{data(){return super.data()}}class mA{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function gA(t,e){return typeof e=="string"?Wy(t,e):e instanceof of?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class yA extends class{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(No(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw be()}}convertObject(e,n){const r={};return kl(e.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new sf(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ay(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=Or(e);return new At(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Cn(My(r));const i=new bo(r.get(1),r.get(3)),o=new dt(r.popFirst(5));return i.isEqual(n)||Jd(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function wA(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Z(Ey,"limitToLast() queries require specifying at least one orderBy() clause")})((t=El(t,xl))._query);const e=rf(t.firestore),n=new yA(t.firestore);return rA(e,t._query).then(r=>{const i=r.map(o=>new Gy(t.firestore,n,o.key,o,t.converter));return t._query.limitType==="L"&&i.reverse(),new mA(t,i)})}function SA(t){return Ly(rf((t=El(t,Lt)).firestore),[new Ny(t._key,di.none())])}function _A(t,e){const n=$y(t=El(t,wn)),r=vA(t.converter,e),i=cA(uA(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Ly(rf(t.firestore),[i.toMutation(n._key,di.exists(!1))]).then(()=>n)}(function(t){xi=t})(`${Go}_lite`),Si(new br("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Al(new dT(t.getProvider("auth-internal")),new mT(t.getProvider("app-check-internal")),function(o,s){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new Z(de,'"projectId" not provided in firebase.initializeApp.');return new bo(o.options.projectId,s)}(r,e),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),or("firestore-lite","3.8.3",""),or("firestore-lite","3.8.3","esm2017");const Ky=jv({apiKey:"AIzaSyCGtPrXKuLJd8ys4jO-OGKjnc0Wn-1gcBA",authDomain:"https://desafiohuancontrolef.web.app",projectId:"desafiohuancontrolef",storageBucket:"desafiohuancontrolef.appspot.com",messagingSenderId:"1072792763679",appId:"1:1072792763679:web:6cabf29ea1b41c500dc42a"}),EA=ZC(Ky),kA=new hn,lf=iA(Ky),IA=Fy(lf,"usuarios"),CA=$.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.705);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`,TA=$.div`
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
`,AA=$.div`
  display: flex;
`,xA=$.div`
  width: 90%;
  text-align: center;
  margin-top: 10px;
  margin-left: 40px;
`,RA=$.div`
  width: 10%;
  display: flex;
  align-items: initial;
  justify-content: center;
  transition: all 0.6s;
  padding: 10px;
  z-index: 10;
  cursor: pointer;
  &:hover {
    color: red;
  }
`,PA=$.div`
  width: 100%;
`,bA=$.div`
  width: 100%;
  margin-top: 30px;
  height: 60px;
  display: flex;
  align-items: center;
`,DA=$.div`
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.644);
  height: 20px;
  min-width: 20px;
  width: 100%;
  margin-left: 50px;
  margin-right: 50px;
`,NA=$.div`
  // lembrar de adicionar variavel
  background-color: rgb(0, 163, 163);
  height: 20px;
  border-radius: 5px;
`,OA=$.div`
  display: flex;
  justify-content: space-around;
`,On=$.span`
  font-weight: 600;
`,MA=$.div`
  height:80%;
  width: 90%;
  padding: 20px;
`,jp=$.span`
  font-weight: 600;
  font-size: x-large;
  margin-bottom: 20px;
`,LA=$.div`
  margin-bottom: 20px;
`,Bp=$.div`
  display: flex;
  justify-content: space-between;
`,FA=$.div`
  margin-bottom: 20px;
`,$A=$.div`
  display: flex;
  justify-content: center;

  >button{
    background-color: #f2f2f2;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) .5s ;

      &:hover{
        background-color: #e9e8e8;
      }
  }
`,zA=$.div`
display: flex;
justify-content: center;
  
`,UA=({isModal:t,modalValue:e,fecharModal:n,InputDel:r,UserValue:i})=>t?T(CA,{id:"modal",onClick:s=>{s.target.id=="modal"&&n()},children:ne(TA,{children:[ne(AA,{children:[T(xA,{children:T("h2",{children:e.name})}),T(RA,{onClick:()=>n(),children:T(On,{children:"X"})})]}),ne(PA,{children:[T(bA,{children:T(DA,{children:T(NA,{style:{width:`${e.status=="Processando"?"50%":e.status=="Solicitada"?"5%":"100%"}`}})})}),ne(OA,{children:[T(On,{children:"Solicitada"}),T(On,{children:"Processando"}),T(On,{children:"Concluída"})]}),ne(MA,{children:[ne(LA,{children:[T(jp,{children:"Transferido de"}),T("hr",{}),ne(Bp,{children:[T(On,{children:e.de}),T(On,{children:e.valor})]})]}),ne(FA,{children:[T(jp,{children:"para"}),T("hr",{}),ne(Bp,{children:[T(On,{children:e.para}),T(On,{children:e.valor})]}),(i==null?void 0:i.emailVerified)!=null?T($A,{children:T("button",{onClick:()=>r(e.id),children:"Deletar input"})}):T(zA,{children:T("p",{children:"registre-se, para poder deletar input"})})]})]})]})]})}):null;function jA(){const[t,e]=L.useState([]),[n,r]=L.useState(!1),[i,o]=L.useState([]),[s,a]=L.useState(""),[l,u]=L.useState(""),[f,h]=L.useState(null),c=()=>{uC(EA,kA).then(m=>{m.user,localStorage.setItem("users",JSON.stringify(m.user)),h(JSON.parse(localStorage.getItem("users")))})},y=async()=>{const m=await wA(IA);e(m.docs.map(g=>({...g.data(),id:g.id})))},S=t.filter(m=>{var g;return(g=m.name)==null?void 0:g.includes(s.toLowerCase())}).filter(m=>{var g;return(g=m.status)==null?void 0:g.includes(l=="status"?"":l)});return L.useEffect(()=>{y(),h(JSON.parse(localStorage.getItem("users")))},[]),ne("div",{className:"App ",children:[T(Dv,{UserValue:f,adm:"Home"}),T(nE,{setBusca:a,setStatus:u,CadastroGoogle:c,UserValue:f,setUserValue:h}),T(AE,{ExibirModal:m=>{const g={...m};o(g),r(!0)},BuscaFiltrado:S,setModalValue:o,UserValue:f}),T(Nv,{}),T(UA,{isModal:n,fecharModal:()=>{r(!1)},modalValue:i,InputDel:async m=>{const g=$y(lf,"usuarios",m);await SA(g),y(),r(!1)},UserValue:f})]})}const BA=$.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,VA=$.div`
  background-color: white;
  width: 600px;
  height: 300px;
  border: 1px solid #0000004e;
  border-radius: 5px;
`,HA=$.h2`
margin-top: 20px;
`,WA=$.div`
  display: flex;
  justify-content: center;
`,GA=$.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,KA=$.div`
  margin-top: 50px;

  > div {
    width: 450px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`,QA=$.div`
  display: flex;
  justify-content: center;
  > button {
    background-color: #f2f2f2;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

    &:hover {
      background-color: #e9e8e8;
    }
  }
`,YA=()=>{const[t,e]=L.useState({de:"Gabriel",para:"",descricao:"",status:"Solicitada",name:"movimentaçao interna",valor:0}),n=(i,o)=>{e(s=>({...s,[i]:o}))},r=async()=>{await _A(Fy(lf,"usuarios"),t),console.log("foi")};return ne("div",{children:[T(Dv,{adm:"adm"}),T(BA,{children:ne(VA,{children:[T(WA,{children:T(HA,{children:"adicionar transaçoes"})}),T(GA,{children:ne(KA,{children:[ne("div",{children:[T("input",{value:t.de,placeholder:"de"}),T("input",{value:t.para,onChange:i=>n("para",i.target.value),type:"text",placeholder:"para"})]}),ne("div",{children:[T("input",{value:t.descricao,type:"text",placeholder:"descriçao",onChange:i=>n("descricao",i.target.value)}),T("input",{value:t.valor,type:"number",placeholder:"valor",onChange:i=>n("valor",i.target.value)})]}),ne("div",{children:[ne("select",{name:"name",id:"name",onChange:i=>n("status",i.target.value),style:{width:"170px"},children:[T("option",{value:"Processando",children:"Processando"}),T("option",{value:"Solicitada",children:"Solicitada"}),T("option",{value:"Concluída",children:"Concluída"})]}),ne("select",{name:"name",id:"name",onChange:i=>n("name",i.target.value),style:{width:"170px"},children:[T("option",{value:"deposito",children:"deposito"}),T("option",{value:"movimentaçao interna",children:"movimentaçao interna"}),T("option",{value:"resgate",children:"resgate"})]})]}),T(QA,{children:T("button",{onClick:r,children:"click"})})]})})]})})]})},qA=()=>T(jA,{}),XA=US([{path:"/Transaction",element:T(qA,{})},{path:"/Transaction/admeditpag",element:T(YA,{})}]);yu.createRoot(document.getElementById("root")).render(ne(wt.StrictMode,{children:[T(LS,{router:XA}),T(Nv,{})]}));
