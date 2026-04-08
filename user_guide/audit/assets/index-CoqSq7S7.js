(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ug(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Lu={exports:{}},Ua={},Nu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Fg(){if(Zp)return vt;Zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=x&&k[x]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(k,re,Le){this.props=k,this.context=re,this.refs=E,this.updater=Le||y}S.prototype.isReactComponent={},S.prototype.setState=function(k,re){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,re,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(k,re,Le){this.props=k,this.context=re,this.refs=E,this.updater=Le||y}var A=L.prototype=new v;A.constructor=L,M(A,S.prototype),A.isPureReactComponent=!0;var D=Array.isArray,F=Object.prototype.hasOwnProperty,R={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function X(k,re,Le){var xe,Pe={},ee=null,le=null;if(re!=null)for(xe in re.ref!==void 0&&(le=re.ref),re.key!==void 0&&(ee=""+re.key),re)F.call(re,xe)&&!U.hasOwnProperty(xe)&&(Pe[xe]=re[xe]);var _e=arguments.length-2;if(_e===1)Pe.children=Le;else if(1<_e){for(var Fe=Array(_e),Oe=0;Oe<_e;Oe++)Fe[Oe]=arguments[Oe+2];Pe.children=Fe}if(k&&k.defaultProps)for(xe in _e=k.defaultProps,_e)Pe[xe]===void 0&&(Pe[xe]=_e[xe]);return{$$typeof:s,type:k,key:ee,ref:le,props:Pe,_owner:R.current}}function P(k,re){return{$$typeof:s,type:k.type,key:re,ref:k.ref,props:k.props,_owner:k._owner}}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function z(k){var re={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Le){return re[Le]})}var Q=/\/+/g;function ie(k,re){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):re.toString(36)}function de(k,re,Le,xe,Pe){var ee=typeof k;(ee==="undefined"||ee==="boolean")&&(k=null);var le=!1;if(k===null)le=!0;else switch(ee){case"string":case"number":le=!0;break;case"object":switch(k.$$typeof){case s:case e:le=!0}}if(le)return le=k,Pe=Pe(le),k=xe===""?"."+ie(le,0):xe,D(Pe)?(Le="",k!=null&&(Le=k.replace(Q,"$&/")+"/"),de(Pe,re,Le,"",function(Oe){return Oe})):Pe!=null&&(C(Pe)&&(Pe=P(Pe,Le+(!Pe.key||le&&le.key===Pe.key?"":(""+Pe.key).replace(Q,"$&/")+"/")+k)),re.push(Pe)),1;if(le=0,xe=xe===""?".":xe+":",D(k))for(var _e=0;_e<k.length;_e++){ee=k[_e];var Fe=xe+ie(ee,_e);le+=de(ee,re,Le,Fe,Pe)}else if(Fe=_(k),typeof Fe=="function")for(k=Fe.call(k),_e=0;!(ee=k.next()).done;)ee=ee.value,Fe=xe+ie(ee,_e++),le+=de(ee,re,Le,Fe,Pe);else if(ee==="object")throw re=String(k),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return le}function ce(k,re,Le){if(k==null)return k;var xe=[],Pe=0;return de(k,xe,"","",function(ee){return re.call(Le,ee,Pe++)}),xe}function ue(k){if(k._status===-1){var re=k._result;re=re(),re.then(function(Le){(k._status===0||k._status===-1)&&(k._status=1,k._result=Le)},function(Le){(k._status===0||k._status===-1)&&(k._status=2,k._result=Le)}),k._status===-1&&(k._status=0,k._result=re)}if(k._status===1)return k._result.default;throw k._result}var J={current:null},O={transition:null},ne={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:O,ReactCurrentOwner:R};function q(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ce,forEach:function(k,re,Le){ce(k,function(){re.apply(this,arguments)},Le)},count:function(k){var re=0;return ce(k,function(){re++}),re},toArray:function(k){return ce(k,function(re){return re})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},vt.Component=S,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=L,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,vt.act=q,vt.cloneElement=function(k,re,Le){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var xe=M({},k.props),Pe=k.key,ee=k.ref,le=k._owner;if(re!=null){if(re.ref!==void 0&&(ee=re.ref,le=R.current),re.key!==void 0&&(Pe=""+re.key),k.type&&k.type.defaultProps)var _e=k.type.defaultProps;for(Fe in re)F.call(re,Fe)&&!U.hasOwnProperty(Fe)&&(xe[Fe]=re[Fe]===void 0&&_e!==void 0?_e[Fe]:re[Fe])}var Fe=arguments.length-2;if(Fe===1)xe.children=Le;else if(1<Fe){_e=Array(Fe);for(var Oe=0;Oe<Fe;Oe++)_e[Oe]=arguments[Oe+2];xe.children=_e}return{$$typeof:s,type:k.type,key:Pe,ref:ee,props:xe,_owner:le}},vt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},vt.createElement=X,vt.createFactory=function(k){var re=X.bind(null,k);return re.type=k,re},vt.createRef=function(){return{current:null}},vt.forwardRef=function(k){return{$$typeof:f,render:k}},vt.isValidElement=C,vt.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:ue}},vt.memo=function(k,re){return{$$typeof:p,type:k,compare:re===void 0?null:re}},vt.startTransition=function(k){var re=O.transition;O.transition={};try{k()}finally{O.transition=re}},vt.unstable_act=q,vt.useCallback=function(k,re){return J.current.useCallback(k,re)},vt.useContext=function(k){return J.current.useContext(k)},vt.useDebugValue=function(){},vt.useDeferredValue=function(k){return J.current.useDeferredValue(k)},vt.useEffect=function(k,re){return J.current.useEffect(k,re)},vt.useId=function(){return J.current.useId()},vt.useImperativeHandle=function(k,re,Le){return J.current.useImperativeHandle(k,re,Le)},vt.useInsertionEffect=function(k,re){return J.current.useInsertionEffect(k,re)},vt.useLayoutEffect=function(k,re){return J.current.useLayoutEffect(k,re)},vt.useMemo=function(k,re){return J.current.useMemo(k,re)},vt.useReducer=function(k,re,Le){return J.current.useReducer(k,re,Le)},vt.useRef=function(k){return J.current.useRef(k)},vt.useState=function(k){return J.current.useState(k)},vt.useSyncExternalStore=function(k,re,Le){return J.current.useSyncExternalStore(k,re,Le)},vt.useTransition=function(){return J.current.useTransition()},vt.version="18.3.1",vt}var Jp;function hd(){return Jp||(Jp=1,Nu.exports=Fg()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Og(){if(Qp)return Ua;Qp=1;var s=hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var g,x={},_=null,y=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(y=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(x[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)x[g]===void 0&&(x[g]=h[g]);return{$$typeof:e,type:f,key:_,ref:y,props:x,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=u,Ua.jsxs=u,Ua}var em;function kg(){return em||(em=1,Lu.exports=Og()),Lu.exports}var he=kg(),Rt=hd();const Bg=Ug(Rt);var cl={},Iu={exports:{}},In={},Uu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function zg(){return tm||(tm=1,(function(s){function e(O,ne){var q=O.length;O.push(ne);e:for(;0<q;){var k=q-1>>>1,re=O[k];if(0<o(re,ne))O[k]=ne,O[q]=re,q=k;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var ne=O[0],q=O.pop();if(q!==ne){O[0]=q;e:for(var k=0,re=O.length,Le=re>>>1;k<Le;){var xe=2*(k+1)-1,Pe=O[xe],ee=xe+1,le=O[ee];if(0>o(Pe,q))ee<re&&0>o(le,Pe)?(O[k]=le,O[ee]=q,k=ee):(O[k]=Pe,O[xe]=q,k=xe);else if(ee<re&&0>o(le,q))O[k]=le,O[ee]=q,k=ee;else break e}}return ne}function o(O,ne){var q=O.sortIndex-ne.sortIndex;return q!==0?q:O.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,x=null,_=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(O){for(var ne=t(p);ne!==null;){if(ne.callback===null)r(p);else if(ne.startTime<=O)r(p),ne.sortIndex=ne.expirationTime,e(h,ne);else break;ne=t(p)}}function D(O){if(E=!1,A(O),!M)if(t(h)!==null)M=!0,ue(F);else{var ne=t(p);ne!==null&&J(D,ne.startTime-O)}}function F(O,ne){M=!1,E&&(E=!1,v(X),X=-1),y=!0;var q=_;try{for(A(ne),x=t(h);x!==null&&(!(x.expirationTime>ne)||O&&!z());){var k=x.callback;if(typeof k=="function"){x.callback=null,_=x.priorityLevel;var re=k(x.expirationTime<=ne);ne=s.unstable_now(),typeof re=="function"?x.callback=re:x===t(h)&&r(h),A(ne)}else r(h);x=t(h)}if(x!==null)var Le=!0;else{var xe=t(p);xe!==null&&J(D,xe.startTime-ne),Le=!1}return Le}finally{x=null,_=q,y=!1}}var R=!1,U=null,X=-1,P=5,C=-1;function z(){return!(s.unstable_now()-C<P)}function Q(){if(U!==null){var O=s.unstable_now();C=O;var ne=!0;try{ne=U(!0,O)}finally{ne?ie():(R=!1,U=null)}}else R=!1}var ie;if(typeof L=="function")ie=function(){L(Q)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ce=de.port2;de.port1.onmessage=Q,ie=function(){ce.postMessage(null)}}else ie=function(){S(Q,0)};function ue(O){U=O,R||(R=!0,ie())}function J(O,ne){X=S(function(){O(s.unstable_now())},ne)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ue(F))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(O){switch(_){case 1:case 2:case 3:var ne=3;break;default:ne=_}var q=_;_=ne;try{return O()}finally{_=q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,ne){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=_;_=O;try{return ne()}finally{_=q}},s.unstable_scheduleCallback=function(O,ne,q){var k=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?k+q:k):q=k,O){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=q+re,O={id:g++,callback:ne,priorityLevel:O,startTime:q,expirationTime:re,sortIndex:-1},q>k?(O.sortIndex=q,e(p,O),t(h)===null&&O===t(p)&&(E?(v(X),X=-1):E=!0,J(D,q-k))):(O.sortIndex=re,e(h,O),M||y||(M=!0,ue(F))),O},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(O){var ne=_;return function(){var q=_;_=ne;try{return O.apply(this,arguments)}finally{_=q}}}})(Fu)),Fu}var nm;function Vg(){return nm||(nm=1,Uu.exports=zg()),Uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Hg(){if(im)return In;im=1;var s=hd(),e=Vg();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function _(n){return h.call(x,n)?!0:h.call(g,n)?!1:p.test(n)?x[n]=!0:(g[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);S[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);S[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);S[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function A(n,i,a,c){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),R=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),O=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var q=Object.assign,k;function re(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Le=!1;function xe(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var c=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){c=se}n.call(i.prototype)}else{try{throw Error()}catch(se){c=se}n()}}catch(se){if(se&&c&&typeof se.stack=="string"){for(var d=se.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,I=m.length-1;1<=T&&0<=I&&d[T]!==m[I];)I--;for(;1<=T&&0<=I;T--,I--)if(d[T]!==m[I]){if(T!==1||I!==1)do if(T--,I--,0>I||d[T]!==m[I]){var H=`
`+d[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=I);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function Pe(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=xe(n.type,!1),n;case 11:return n=xe(n.type.render,!1),n;case 1:return n=xe(n.type,!0),n;default:return""}}function ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case R:return"Portal";case P:return"Profiler";case X:return"StrictMode";case ie:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:ee(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return ee(n(i))}catch{}}return null}function le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Oe(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function at(n){n._valueTracker||(n._valueTracker=Oe(n))}function Xt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Dt(n,i){var a=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function B(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&A(n,"checked",i,!1)}function dt(n,i){mt(n,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ae(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ae(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function bt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ae(n,i,a){(i!=="number"||ft(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Et=Array.isArray;function Be(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Qe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Et(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function b(n,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function $(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oe,qe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Re(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(n){je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ye[i]=Ye[n]})});function ve(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ye.hasOwnProperty(n)&&Ye[n]?(""+i).trim():i+"px"}function Ce(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ve(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var rt=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(n,i){if(i){if(rt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,Te=null,be=null;function Me(n){if(n=ya(n)){if(typeof De!="function")throw Error(t(280));var i=n.stateNode;i&&(i=To(i),De(n.stateNode,n.type,i))}}function me(n){Te?be?be.push(n):be=[n]:Te=n}function He(){if(Te){var n=Te,i=be;if(be=Te=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function lt(n,i){return n(i)}function It(){}var wt=!1;function zn(n,i,a){if(wt)return n(i,a);wt=!0;try{return lt(n,i,a)}finally{wt=!1,(Te!==null||be!==null)&&(It(),He())}}function hn(n,i){var a=n.stateNode;if(a===null)return null;var c=To(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var na=!1;if(f)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){na=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{na=!1}function to(n,i,a,c,d,m,T,I,H){var se=Array.prototype.slice.call(arguments,3);try{i.apply(a,se)}catch(ye){this.onError(ye)}}var Vn=!1,Qi=null,Lr=!1,ss=null,as={onError:function(n){Vn=!0,Qi=n}};function no(n,i,a,c,d,m,T,I,H){Vn=!1,Qi=null,to.apply(as,arguments)}function os(n,i,a,c,d,m,T,I,H){if(no.apply(this,arguments),Vn){if(Vn){var se=Qi;Vn=!1,Qi=null}else throw Error(t(198));Lr||(Lr=!0,ss=se)}}function _i(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ia(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function io(n){if(_i(n)!==n)throw Error(t(188))}function tc(n){var i=n.alternate;if(!i){if(i=_i(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return io(d),n;if(m===c)return io(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,I=d.child;I;){if(I===a){T=!0,a=d,c=m;break}if(I===c){T=!0,c=d,a=m;break}I=I.sibling}if(!T){for(I=m.child;I;){if(I===a){T=!0,a=m,c=d;break}if(I===c){T=!0,c=m,a=d;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ro(n){return n=tc(n),n!==null?so(n):null}function so(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=so(n);if(i!==null)return i;n=n.sibling}return null}var ao=e.unstable_scheduleCallback,oo=e.unstable_cancelCallback,w=e.unstable_shouldYield,W=e.unstable_requestPaint,K=e.unstable_now,ae=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,we=e.unstable_UserBlockingPriority,Ne=e.unstable_NormalPriority,We=e.unstable_LowPriority,ze=e.unstable_IdlePriority,tt=null,Ke=null;function Je(n){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(tt,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Ht,Lt=Math.log,Vt=Math.LN2;function Ht(n){return n>>>=0,n===0?32:31-(Lt(n)/Vt|0)|0}var At=64,Ze=4194304;function Nt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var I=T&~d;I!==0?c=Nt(I):(m&=T,m!==0&&(c=Nt(m)))}else T=a&~d,T!==0?c=Nt(T):m!==0&&(c=Nt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ot(i),d=1<<a,c|=n[a],i&=~d;return c}function En(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function er(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-ot(m),I=1<<T,H=d[T];H===-1?((I&a)===0||(I&c)!==0)&&(d[T]=En(I,i)):H<=i&&(n.expiredLanes|=I),m&=~I}}function pn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function tr(){var n=At;return At<<=1,(At&4194240)===0&&(At=64),n}function Ot(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Zt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=a}function Cn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ot(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function tn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ot(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ht=0;function ls(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vi,nc,Dd,Ld,Nd,ic=!1,lo=[],nr=null,ir=null,rr=null,ra=new Map,sa=new Map,sr=[],ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Id(n,i){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(i.pointerId)}}function aa(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&nc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function rx(n,i,a,c,d){switch(i){case"focusin":return nr=aa(nr,n,i,a,c,d),!0;case"dragenter":return ir=aa(ir,n,i,a,c,d),!0;case"mouseover":return rr=aa(rr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return ra.set(m,aa(ra.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,sa.set(m,aa(sa.get(m)||null,n,i,a,c,d)),!0}return!1}function Ud(n){var i=Nr(n.target);if(i!==null){var a=_i(i);if(a!==null){if(i=a.tag,i===13){if(i=ia(a),i!==null){n.blockedOn=i,Nd(n.priority,function(){Dd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function co(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);st=c,a.target.dispatchEvent(c),st=null}else return i=ya(a),i!==null&&nc(i),n.blockedOn=a,!1;i.shift()}return!0}function Fd(n,i,a){co(n)&&a.delete(i)}function sx(){ic=!1,nr!==null&&co(nr)&&(nr=null),ir!==null&&co(ir)&&(ir=null),rr!==null&&co(rr)&&(rr=null),ra.forEach(Fd),sa.forEach(Fd)}function oa(n,i){n.blockedOn===i&&(n.blockedOn=null,ic||(ic=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sx)))}function la(n){function i(d){return oa(d,n)}if(0<lo.length){oa(lo[0],n);for(var a=1;a<lo.length;a++){var c=lo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(nr!==null&&oa(nr,n),ir!==null&&oa(ir,n),rr!==null&&oa(rr,n),ra.forEach(i),sa.forEach(i),a=0;a<sr.length;a++)c=sr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)Ud(a),a.blockedOn===null&&sr.shift()}var cs=D.ReactCurrentBatchConfig,uo=!0;function ax(n,i,a,c){var d=ht,m=cs.transition;cs.transition=null;try{ht=1,rc(n,i,a,c)}finally{ht=d,cs.transition=m}}function ox(n,i,a,c){var d=ht,m=cs.transition;cs.transition=null;try{ht=4,rc(n,i,a,c)}finally{ht=d,cs.transition=m}}function rc(n,i,a,c){if(uo){var d=sc(n,i,a,c);if(d===null)Mc(n,i,c,fo,a),Id(n,c);else if(rx(d,n,i,a,c))c.stopPropagation();else if(Id(n,c),i&4&&-1<ix.indexOf(n)){for(;d!==null;){var m=ya(d);if(m!==null&&vi(m),m=sc(n,i,a,c),m===null&&Mc(n,i,c,fo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Mc(n,i,c,null,a)}}var fo=null;function sc(n,i,a,c){if(fo=null,n=V(c),n=Nr(n),n!==null)if(i=_i(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ia(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return fo=n,null}function Od(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ae()){case j:return 1;case we:return 4;case Ne:case We:return 16;case ze:return 536870912;default:return 16}default:return 16}}var ar=null,ac=null,ho=null;function kd(){if(ho)return ho;var n,i=ac,a=i.length,c,d="value"in ar?ar.value:ar.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return ho=d.slice(n,1<c?1-c:void 0)}function po(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function mo(){return!0}function Bd(){return!1}function Hn(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?mo:Bd,this.isPropagationStopped=Bd,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Hn(us),ca=q({},us,{view:0,detail:0}),lx=Hn(ca),lc,cc,ua,xo=q({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ua&&(ua&&n.type==="mousemove"?(lc=n.screenX-ua.screenX,cc=n.screenY-ua.screenY):cc=lc=0,ua=n),lc)},movementY:function(n){return"movementY"in n?n.movementY:cc}}),zd=Hn(xo),cx=q({},xo,{dataTransfer:0}),ux=Hn(cx),fx=q({},ca,{relatedTarget:0}),uc=Hn(fx),dx=q({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=Hn(dx),px=q({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),mx=Hn(px),xx=q({},us,{data:0}),Vd=Hn(xx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=vx[n])?!!i[n]:!1}function fc(){return yx}var Sx=q({},ca,{key:function(n){if(n.key){var i=gx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_x[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(n){return n.type==="keypress"?po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Mx=Hn(Sx),Ex=q({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Hn(Ex),Tx=q({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),bx=Hn(Tx),wx=q({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=Hn(wx),Cx=q({},xo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=Hn(Cx),Px=[9,13,27,32],dc=f&&"CompositionEvent"in window,fa=null;f&&"documentMode"in document&&(fa=document.documentMode);var Dx=f&&"TextEvent"in window&&!fa,Gd=f&&(!dc||fa&&8<fa&&11>=fa),Wd=" ",jd=!1;function Xd(n,i){switch(n){case"keyup":return Px.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function Lx(n,i){switch(n){case"compositionend":return qd(i);case"keypress":return i.which!==32?null:(jd=!0,Wd);case"textInput":return n=i.data,n===Wd&&jd?null:n;default:return null}}function Nx(n,i){if(fs)return n==="compositionend"||!dc&&Xd(n,i)?(n=kd(),ho=ac=ar=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gd&&i.locale!=="ko"?null:i.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ix[n.type]:i==="textarea"}function $d(n,i,a,c){me(c),i=So(i,"onChange"),0<i.length&&(a=new oc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var da=null,ha=null;function Ux(n){hh(n,0)}function go(n){var i=xs(n);if(Xt(i))return n}function Fx(n,i){if(n==="change")return i}var Kd=!1;if(f){var hc;if(f){var pc="oninput"in document;if(!pc){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),pc=typeof Zd.oninput=="function"}hc=pc}else hc=!1;Kd=hc&&(!document.documentMode||9<document.documentMode)}function Jd(){da&&(da.detachEvent("onpropertychange",Qd),ha=da=null)}function Qd(n){if(n.propertyName==="value"&&go(ha)){var i=[];$d(i,ha,n,V(n)),zn(Ux,i)}}function Ox(n,i,a){n==="focusin"?(Jd(),da=i,ha=a,da.attachEvent("onpropertychange",Qd)):n==="focusout"&&Jd()}function kx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return go(ha)}function Bx(n,i){if(n==="click")return go(i)}function zx(n,i){if(n==="input"||n==="change")return go(i)}function Vx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:Vx;function pa(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!ai(n[d],i[d]))return!1}return!0}function eh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function th(n,i){var a=eh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=eh(a)}}function nh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?nh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ih(){for(var n=window,i=ft();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ft(n.document)}return i}function mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Hx(n){var i=ih(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&nh(a.ownerDocument.documentElement,a)){if(c!==null&&mc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=th(a,m);var T=th(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gx=f&&"documentMode"in document&&11>=document.documentMode,ds=null,xc=null,ma=null,gc=!1;function rh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||ds==null||ds!==ft(c)||(c=ds,"selectionStart"in c&&mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=So(xc,"onSelect"),0<c.length&&(i=new oc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ds)))}function _o(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var hs={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},_c={},sh={};f&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function vo(n){if(_c[n])return _c[n];if(!hs[n])return n;var i=hs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in sh)return _c[n]=i[a];return n}var ah=vo("animationend"),oh=vo("animationiteration"),lh=vo("animationstart"),ch=vo("transitionend"),uh=new Map,fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){uh.set(n,i),l(i,[n])}for(var vc=0;vc<fh.length;vc++){var yc=fh[vc],Wx=yc.toLowerCase(),jx=yc[0].toUpperCase()+yc.slice(1);or(Wx,"on"+jx)}or(ah,"onAnimationEnd"),or(oh,"onAnimationIteration"),or(lh,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function dh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,os(c,i,void 0,n),n.currentTarget=null}function hh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var I=c[T],H=I.instance,se=I.currentTarget;if(I=I.listener,H!==m&&d.isPropagationStopped())break e;dh(d,I,se),m=H}else for(T=0;T<c.length;T++){if(I=c[T],H=I.instance,se=I.currentTarget,I=I.listener,H!==m&&d.isPropagationStopped())break e;dh(d,I,se),m=H}}}if(Lr)throw n=ss,Lr=!1,ss=null,n}function Bt(n,i){var a=i[Cc];a===void 0&&(a=i[Cc]=new Set);var c=n+"__bubble";a.has(c)||(ph(i,n,2,!1),a.add(c))}function Sc(n,i,a){var c=0;i&&(c|=4),ph(a,n,c,i)}var yo="_reactListening"+Math.random().toString(36).slice(2);function ga(n){if(!n[yo]){n[yo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Sc(a,!1,n),Sc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[yo]||(i[yo]=!0,Sc("selectionchange",!1,i))}}function ph(n,i,a,c){switch(Od(i)){case 1:var d=ax;break;case 4:d=ox;break;default:d=rc}a=d.bind(null,i,a,n),d=void 0,!na||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Mc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;T=T.return}for(;I!==null;){if(T=Nr(I),T===null)return;if(H=T.tag,H===5||H===6){c=m=T;continue e}I=I.parentNode}}c=c.return}zn(function(){var se=m,ye=V(a),Se=[];e:{var ge=uh.get(n);if(ge!==void 0){var ke=oc,Ge=n;switch(n){case"keypress":if(po(a)===0)break e;case"keydown":case"keyup":ke=Mx;break;case"focusin":Ge="focus",ke=uc;break;case"focusout":Ge="blur",ke=uc;break;case"beforeblur":case"afterblur":ke=uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=bx;break;case ah:case oh:case lh:ke=hx;break;case ch:ke=Ax;break;case"scroll":ke=lx;break;case"wheel":ke=Rx;break;case"copy":case"cut":case"paste":ke=mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Hd}var Xe=(i&4)!==0,$t=!Xe&&n==="scroll",Y=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var G=se,te;G!==null;){te=G;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,Y!==null&&(Ee=hn(G,Y),Ee!=null&&Xe.push(_a(G,Ee,te)))),$t)break;G=G.return}0<Xe.length&&(ge=new ke(ge,Ge,null,a,ye),Se.push({event:ge,listeners:Xe}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",ge&&a!==st&&(Ge=a.relatedTarget||a.fromElement)&&(Nr(Ge)||Ge[Ri]))break e;if((ke||ge)&&(ge=ye.window===ye?ye:(ge=ye.ownerDocument)?ge.defaultView||ge.parentWindow:window,ke?(Ge=a.relatedTarget||a.toElement,ke=se,Ge=Ge?Nr(Ge):null,Ge!==null&&($t=_i(Ge),Ge!==$t||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ke=null,Ge=se),ke!==Ge)){if(Xe=zd,Ee="onMouseLeave",Y="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=Hd,Ee="onPointerLeave",Y="onPointerEnter",G="pointer"),$t=ke==null?ge:xs(ke),te=Ge==null?ge:xs(Ge),ge=new Xe(Ee,G+"leave",ke,a,ye),ge.target=$t,ge.relatedTarget=te,Ee=null,Nr(ye)===se&&(Xe=new Xe(Y,G+"enter",Ge,a,ye),Xe.target=te,Xe.relatedTarget=$t,Ee=Xe),$t=Ee,ke&&Ge)t:{for(Xe=ke,Y=Ge,G=0,te=Xe;te;te=ps(te))G++;for(te=0,Ee=Y;Ee;Ee=ps(Ee))te++;for(;0<G-te;)Xe=ps(Xe),G--;for(;0<te-G;)Y=ps(Y),te--;for(;G--;){if(Xe===Y||Y!==null&&Xe===Y.alternate)break t;Xe=ps(Xe),Y=ps(Y)}Xe=null}else Xe=null;ke!==null&&mh(Se,ge,ke,Xe,!1),Ge!==null&&$t!==null&&mh(Se,$t,Ge,Xe,!0)}}e:{if(ge=se?xs(se):window,ke=ge.nodeName&&ge.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ge.type==="file")var $e=Fx;else if(Yd(ge))if(Kd)$e=zx;else{$e=kx;var nt=Ox}else(ke=ge.nodeName)&&ke.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&($e=Bx);if($e&&($e=$e(n,se))){$d(Se,$e,a,ye);break e}nt&&nt(n,ge,se),n==="focusout"&&(nt=ge._wrapperState)&&nt.controlled&&ge.type==="number"&&Ae(ge,"number",ge.value)}switch(nt=se?xs(se):window,n){case"focusin":(Yd(nt)||nt.contentEditable==="true")&&(ds=nt,xc=se,ma=null);break;case"focusout":ma=xc=ds=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,rh(Se,a,ye);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":rh(Se,a,ye)}var it;if(dc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else fs?Xd(n,a)&&(ct="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(Gd&&a.locale!=="ko"&&(fs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&fs&&(it=kd()):(ar=ye,ac="value"in ar?ar.value:ar.textContent,fs=!0)),nt=So(se,ct),0<nt.length&&(ct=new Vd(ct,n,null,a,ye),Se.push({event:ct,listeners:nt}),it?ct.data=it:(it=qd(a),it!==null&&(ct.data=it)))),(it=Dx?Lx(n,a):Nx(n,a))&&(se=So(se,"onBeforeInput"),0<se.length&&(ye=new Vd("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:se}),ye.data=it))}hh(Se,i)})}function _a(n,i,a){return{instance:n,listener:i,currentTarget:a}}function So(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=hn(n,a),m!=null&&c.unshift(_a(n,m,d)),m=hn(n,i),m!=null&&c.push(_a(n,m,d))),n=n.return}return c}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mh(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var I=a,H=I.alternate,se=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&se!==null&&(I=se,d?(H=hn(a,m),H!=null&&T.unshift(_a(a,H,I))):d||(H=hn(a,m),H!=null&&T.push(_a(a,H,I)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(qx,`
`).replace(Yx,"")}function Mo(n,i,a){if(i=xh(i),xh(n)!==i&&a)throw Error(t(425))}function Eo(){}var Ec=null,Tc=null;function bc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(n){return gh.resolve(null).then(n).catch(Zx)}:wc;function Zx(n){setTimeout(function(){throw n})}function Ac(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),la(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);la(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),yi="__reactFiber$"+ms,va="__reactProps$"+ms,Ri="__reactContainer$"+ms,Cc="__reactEvents$"+ms,Jx="__reactListeners$"+ms,Qx="__reactHandles$"+ms;function Nr(n){var i=n[yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ri]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_h(n);n!==null;){if(a=n[yi])return a;n=_h(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[yi]||n[Ri],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function To(n){return n[va]||null}var Rc=[],gs=-1;function cr(n){return{current:n}}function zt(n){0>gs||(n.current=Rc[gs],Rc[gs]=null,gs--)}function kt(n,i){gs++,Rc[gs]=n.current,n.current=i}var ur={},gn=cr(ur),Rn=cr(!1),Ir=ur;function _s(n,i){var a=n.type.contextTypes;if(!a)return ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(n){return n=n.childContextTypes,n!=null}function bo(){zt(Rn),zt(gn)}function vh(n,i,a){if(gn.current!==ur)throw Error(t(168));kt(gn,i),kt(Rn,a)}function yh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,le(n)||"Unknown",d));return q({},a,c)}function wo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,Ir=gn.current,kt(gn,n),kt(Rn,Rn.current),!0}function Sh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=yh(n,i,Ir),c.__reactInternalMemoizedMergedChildContext=n,zt(Rn),zt(gn),kt(gn,n)):zt(Rn),kt(Rn,a)}var Pi=null,Ao=!1,Pc=!1;function Mh(n){Pi===null?Pi=[n]:Pi.push(n)}function eg(n){Ao=!0,Mh(n)}function fr(){if(!Pc&&Pi!==null){Pc=!0;var n=0,i=ht;try{var a=Pi;for(ht=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Pi=null,Ao=!1}catch(d){throw Pi!==null&&(Pi=Pi.slice(n+1)),ao(j,fr),d}finally{ht=i,Pc=!1}}return null}var vs=[],ys=0,Co=null,Ro=0,Kn=[],Zn=0,Ur=null,Di=1,Li="";function Fr(n,i){vs[ys++]=Ro,vs[ys++]=Co,Co=n,Ro=i}function Eh(n,i,a){Kn[Zn++]=Di,Kn[Zn++]=Li,Kn[Zn++]=Ur,Ur=n;var c=Di;n=Li;var d=32-ot(c)-1;c&=~(1<<d),a+=1;var m=32-ot(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Di=1<<32-ot(i)+d|a<<d|c,Li=m+n}else Di=1<<m|a<<d|c,Li=n}function Dc(n){n.return!==null&&(Fr(n,1),Eh(n,1,0))}function Lc(n){for(;n===Co;)Co=vs[--ys],vs[ys]=null,Ro=vs[--ys],vs[ys]=null;for(;n===Ur;)Ur=Kn[--Zn],Kn[Zn]=null,Li=Kn[--Zn],Kn[Zn]=null,Di=Kn[--Zn],Kn[Zn]=null}var Gn=null,Wn=null,Gt=!1,oi=null;function Th(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function bh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ur!==null?{id:Di,overflow:Li}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Gn=n,Wn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ic(n){if(Gt){var i=Wn;if(i){var a=i;if(!bh(n,i)){if(Nc(n))throw Error(t(418));i=lr(a.nextSibling);var c=Gn;i&&bh(n,i)?Th(c,a):(n.flags=n.flags&-4097|2,Gt=!1,Gn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,Gn=n}}}function wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function Po(n){if(n!==Gn)return!1;if(!Gt)return wh(n),Gt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!bc(n.type,n.memoizedProps)),i&&(i=Wn)){if(Nc(n))throw Ah(),Error(t(418));for(;i;)Th(n,i),i=lr(i.nextSibling)}if(wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Wn=lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=Gn?lr(n.stateNode.nextSibling):null;return!0}function Ah(){for(var n=Wn;n;)n=lr(n.nextSibling)}function Ss(){Wn=Gn=null,Gt=!1}function Uc(n){oi===null?oi=[n]:oi.push(n)}var tg=D.ReactCurrentBatchConfig;function Sa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var I=d.refs;T===null?delete I[m]:I[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Do(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ch(n){var i=n._init;return i(n._payload)}function Rh(n){function i(Y,G){if(n){var te=Y.deletions;te===null?(Y.deletions=[G],Y.flags|=16):te.push(G)}}function a(Y,G){if(!n)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function c(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function d(Y,G){return Y=vr(Y,G),Y.index=0,Y.sibling=null,Y}function m(Y,G,te){return Y.index=te,n?(te=Y.alternate,te!==null?(te=te.index,te<G?(Y.flags|=2,G):te):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function T(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,G,te,Ee){return G===null||G.tag!==6?(G=wu(te,Y.mode,Ee),G.return=Y,G):(G=d(G,te),G.return=Y,G)}function H(Y,G,te,Ee){var $e=te.type;return $e===U?ye(Y,G,te.props.children,Ee,te.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ue&&Ch($e)===G.type)?(Ee=d(G,te.props),Ee.ref=Sa(Y,G,te),Ee.return=Y,Ee):(Ee=tl(te.type,te.key,te.props,null,Y.mode,Ee),Ee.ref=Sa(Y,G,te),Ee.return=Y,Ee)}function se(Y,G,te,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Au(te,Y.mode,Ee),G.return=Y,G):(G=d(G,te.children||[]),G.return=Y,G)}function ye(Y,G,te,Ee,$e){return G===null||G.tag!==7?(G=Wr(te,Y.mode,Ee,$e),G.return=Y,G):(G=d(G,te),G.return=Y,G)}function Se(Y,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=wu(""+G,Y.mode,te),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case F:return te=tl(G.type,G.key,G.props,null,Y.mode,te),te.ref=Sa(Y,null,G),te.return=Y,te;case R:return G=Au(G,Y.mode,te),G.return=Y,G;case ue:var Ee=G._init;return Se(Y,Ee(G._payload),te)}if(Et(G)||ne(G))return G=Wr(G,Y.mode,te,null),G.return=Y,G;Do(Y,G)}return null}function ge(Y,G,te,Ee){var $e=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return $e!==null?null:I(Y,G,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case F:return te.key===$e?H(Y,G,te,Ee):null;case R:return te.key===$e?se(Y,G,te,Ee):null;case ue:return $e=te._init,ge(Y,G,$e(te._payload),Ee)}if(Et(te)||ne(te))return $e!==null?null:ye(Y,G,te,Ee,null);Do(Y,te)}return null}function ke(Y,G,te,Ee,$e){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(te)||null,I(G,Y,""+Ee,$e);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case F:return Y=Y.get(Ee.key===null?te:Ee.key)||null,H(G,Y,Ee,$e);case R:return Y=Y.get(Ee.key===null?te:Ee.key)||null,se(G,Y,Ee,$e);case ue:var nt=Ee._init;return ke(Y,G,te,nt(Ee._payload),$e)}if(Et(Ee)||ne(Ee))return Y=Y.get(te)||null,ye(G,Y,Ee,$e,null);Do(G,Ee)}return null}function Ge(Y,G,te,Ee){for(var $e=null,nt=null,it=G,ct=G=0,un=null;it!==null&&ct<te.length;ct++){it.index>ct?(un=it,it=null):un=it.sibling;var Ct=ge(Y,it,te[ct],Ee);if(Ct===null){it===null&&(it=un);break}n&&it&&Ct.alternate===null&&i(Y,it),G=m(Ct,G,ct),nt===null?$e=Ct:nt.sibling=Ct,nt=Ct,it=un}if(ct===te.length)return a(Y,it),Gt&&Fr(Y,ct),$e;if(it===null){for(;ct<te.length;ct++)it=Se(Y,te[ct],Ee),it!==null&&(G=m(it,G,ct),nt===null?$e=it:nt.sibling=it,nt=it);return Gt&&Fr(Y,ct),$e}for(it=c(Y,it);ct<te.length;ct++)un=ke(it,Y,ct,te[ct],Ee),un!==null&&(n&&un.alternate!==null&&it.delete(un.key===null?ct:un.key),G=m(un,G,ct),nt===null?$e=un:nt.sibling=un,nt=un);return n&&it.forEach(function(yr){return i(Y,yr)}),Gt&&Fr(Y,ct),$e}function Xe(Y,G,te,Ee){var $e=ne(te);if(typeof $e!="function")throw Error(t(150));if(te=$e.call(te),te==null)throw Error(t(151));for(var nt=$e=null,it=G,ct=G=0,un=null,Ct=te.next();it!==null&&!Ct.done;ct++,Ct=te.next()){it.index>ct?(un=it,it=null):un=it.sibling;var yr=ge(Y,it,Ct.value,Ee);if(yr===null){it===null&&(it=un);break}n&&it&&yr.alternate===null&&i(Y,it),G=m(yr,G,ct),nt===null?$e=yr:nt.sibling=yr,nt=yr,it=un}if(Ct.done)return a(Y,it),Gt&&Fr(Y,ct),$e;if(it===null){for(;!Ct.done;ct++,Ct=te.next())Ct=Se(Y,Ct.value,Ee),Ct!==null&&(G=m(Ct,G,ct),nt===null?$e=Ct:nt.sibling=Ct,nt=Ct);return Gt&&Fr(Y,ct),$e}for(it=c(Y,it);!Ct.done;ct++,Ct=te.next())Ct=ke(it,Y,ct,Ct.value,Ee),Ct!==null&&(n&&Ct.alternate!==null&&it.delete(Ct.key===null?ct:Ct.key),G=m(Ct,G,ct),nt===null?$e=Ct:nt.sibling=Ct,nt=Ct);return n&&it.forEach(function(Ig){return i(Y,Ig)}),Gt&&Fr(Y,ct),$e}function $t(Y,G,te,Ee){if(typeof te=="object"&&te!==null&&te.type===U&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case F:e:{for(var $e=te.key,nt=G;nt!==null;){if(nt.key===$e){if($e=te.type,$e===U){if(nt.tag===7){a(Y,nt.sibling),G=d(nt,te.props.children),G.return=Y,Y=G;break e}}else if(nt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ue&&Ch($e)===nt.type){a(Y,nt.sibling),G=d(nt,te.props),G.ref=Sa(Y,nt,te),G.return=Y,Y=G;break e}a(Y,nt);break}else i(Y,nt);nt=nt.sibling}te.type===U?(G=Wr(te.props.children,Y.mode,Ee,te.key),G.return=Y,Y=G):(Ee=tl(te.type,te.key,te.props,null,Y.mode,Ee),Ee.ref=Sa(Y,G,te),Ee.return=Y,Y=Ee)}return T(Y);case R:e:{for(nt=te.key;G!==null;){if(G.key===nt)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(Y,G.sibling),G=d(G,te.children||[]),G.return=Y,Y=G;break e}else{a(Y,G);break}else i(Y,G);G=G.sibling}G=Au(te,Y.mode,Ee),G.return=Y,Y=G}return T(Y);case ue:return nt=te._init,$t(Y,G,nt(te._payload),Ee)}if(Et(te))return Ge(Y,G,te,Ee);if(ne(te))return Xe(Y,G,te,Ee);Do(Y,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(a(Y,G.sibling),G=d(G,te),G.return=Y,Y=G):(a(Y,G),G=wu(te,Y.mode,Ee),G.return=Y,Y=G),T(Y)):a(Y,G)}return $t}var Ms=Rh(!0),Ph=Rh(!1),Lo=cr(null),No=null,Es=null,Fc=null;function Oc(){Fc=Es=No=null}function kc(n){var i=Lo.current;zt(Lo),n._currentValue=i}function Bc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ts(n,i){No=n,Fc=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Jn(n){var i=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(No===null)throw Error(t(308));Es=n,No.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var Or=null;function zc(n){Or===null?Or=[n]:Or.push(n)}function Dh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,zc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ni(n,c)}function Ni(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var dr=!1;function Vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ii(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ni(n,a)}return d=c.interleaved,d===null?(i.next=i,zc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ni(n,a)}function Io(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,tn(n,a)}}function Nh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Uo(n,i,a,c){var d=n.updateQueue;dr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var H=I,se=H.next;H.next=null,T===null?m=se:T.next=se,T=H;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==T&&(I===null?ye.firstBaseUpdate=se:I.next=se,ye.lastBaseUpdate=H))}if(m!==null){var Se=d.baseState;T=0,ye=se=H=null,I=m;do{var ge=I.lane,ke=I.eventTime;if((c&ge)===ge){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ge=n,Xe=I;switch(ge=i,ke=a,Xe.tag){case 1:if(Ge=Xe.payload,typeof Ge=="function"){Se=Ge.call(ke,Se,ge);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Xe.payload,ge=typeof Ge=="function"?Ge.call(ke,Se,ge):Ge,ge==null)break e;Se=q({},Se,ge);break e;case 2:dr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else ke={eventTime:ke,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(se=ye=ke,H=Se):ye=ye.next=ke,T|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ye===null&&(H=Se),d.baseState=H,d.firstBaseUpdate=se,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);zr|=T,n.lanes=T,n.memoizedState=Se}}function Ih(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ma={},Si=cr(Ma),Ea=cr(Ma),Ta=cr(Ma);function kr(n){if(n===Ma)throw Error(t(174));return n}function Hc(n,i){switch(kt(Ta,i),kt(Ea,n),kt(Si,Ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pe(i,n)}zt(Si),kt(Si,i)}function bs(){zt(Si),zt(Ea),zt(Ta)}function Uh(n){kr(Ta.current);var i=kr(Si.current),a=pe(i,n.type);i!==a&&(kt(Ea,n),kt(Si,a))}function Gc(n){Ea.current===n&&(zt(Si),zt(Ea))}var Wt=cr(0);function Fo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wc=[];function jc(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var Oo=D.ReactCurrentDispatcher,Xc=D.ReactCurrentBatchConfig,Br=0,jt=null,nn=null,ln=null,ko=!1,ba=!1,wa=0,ng=0;function _n(){throw Error(t(321))}function qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ai(n[a],i[a]))return!1;return!0}function Yc(n,i,a,c,d,m){if(Br=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Oo.current=n===null||n.memoizedState===null?ag:og,n=a(c,d),ba){m=0;do{if(ba=!1,wa=0,25<=m)throw Error(t(301));m+=1,ln=nn=null,i.updateQueue=null,Oo.current=lg,n=a(c,d)}while(ba)}if(Oo.current=Vo,i=nn!==null&&nn.next!==null,Br=0,ln=nn=jt=null,ko=!1,i)throw Error(t(300));return n}function $c(){var n=wa!==0;return wa=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?jt.memoizedState=ln=n:ln=ln.next=n,ln}function Qn(){if(nn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var i=ln===null?jt.memoizedState:ln.next;if(i!==null)ln=i,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},ln===null?jt.memoizedState=ln=n:ln=ln.next=n}return ln}function Aa(n,i){return typeof i=="function"?i(n):i}function Kc(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=nn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=T=null,H=null,se=m;do{var ye=se.lane;if((Br&ye)===ye)H!==null&&(H=H.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),c=se.hasEagerState?se.eagerState:n(c,se.action);else{var Se={lane:ye,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};H===null?(I=H=Se,T=c):H=H.next=Se,jt.lanes|=ye,zr|=ye}se=se.next}while(se!==null&&se!==m);H===null?T=c:H.next=I,ai(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=H,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,jt.lanes|=m,zr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Zc(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);ai(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Fh(){}function Oh(n,i){var a=jt,c=Qn(),d=i(),m=!ai(c.memoizedState,d);if(m&&(c.memoizedState=d,Dn=!0),c=c.queue,Jc(zh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,Ca(9,Bh.bind(null,a,c,d,i),void 0,null),cn===null)throw Error(t(349));(Br&30)!==0||kh(a,i,d)}return d}function kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Bh(n,i,a,c){i.value=a,i.getSnapshot=c,Vh(i)&&Hh(n)}function zh(n,i,a){return a(function(){Vh(i)&&Hh(n)})}function Vh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ai(n,a)}catch{return!0}}function Hh(n){var i=Ni(n,1);i!==null&&fi(i,n,1,-1)}function Gh(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:n},i.queue=n,n=n.dispatch=sg.bind(null,jt,n),[i.memoizedState,n]}function Ca(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Wh(){return Qn().memoizedState}function Bo(n,i,a,c){var d=Mi();jt.flags|=n,d.memoizedState=Ca(1|i,a,void 0,c===void 0?null:c)}function zo(n,i,a,c){var d=Qn();c=c===void 0?null:c;var m=void 0;if(nn!==null){var T=nn.memoizedState;if(m=T.destroy,c!==null&&qc(c,T.deps)){d.memoizedState=Ca(i,a,m,c);return}}jt.flags|=n,d.memoizedState=Ca(1|i,a,m,c)}function jh(n,i){return Bo(8390656,8,n,i)}function Jc(n,i){return zo(2048,8,n,i)}function Xh(n,i){return zo(4,2,n,i)}function qh(n,i){return zo(4,4,n,i)}function Yh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function $h(n,i,a){return a=a!=null?a.concat([n]):null,zo(4,4,Yh.bind(null,i,n),a)}function Qc(){}function Kh(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&qc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Zh(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&qc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Jh(n,i,a){return(Br&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(ai(a,i)||(a=tr(),jt.lanes|=a,zr|=a,n.baseState=!0),i)}function ig(n,i){var a=ht;ht=a!==0&&4>a?a:4,n(!0);var c=Xc.transition;Xc.transition={};try{n(!1),i()}finally{ht=a,Xc.transition=c}}function Qh(){return Qn().memoizedState}function rg(n,i,a){var c=gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ep(n))tp(i,a);else if(a=Dh(n,i,a,c),a!==null){var d=bn();fi(a,n,c,d),np(a,i,c)}}function sg(n,i,a){var c=gr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ep(n))tp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,I=m(T,a);if(d.hasEagerState=!0,d.eagerState=I,ai(I,T)){var H=i.interleaved;H===null?(d.next=d,zc(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}a=Dh(n,i,d,c),a!==null&&(d=bn(),fi(a,n,c,d),np(a,i,c))}}function ep(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function tp(n,i){ba=ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function np(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,tn(n,a)}}var Vo={readContext:Jn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},ag={readContext:Jn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Jn,useEffect:jh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Bo(4194308,4,Yh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Bo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Bo(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Mi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=rg.bind(null,jt,n),[c.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:Gh,useDebugValue:Qc,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=Gh(!1),i=n[0];return n=ig.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=jt,d=Mi();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),cn===null)throw Error(t(349));(Br&30)!==0||kh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,jh(zh.bind(null,c,m,n),[n]),c.flags|=2048,Ca(9,Bh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Mi(),i=cn.identifierPrefix;if(Gt){var a=Li,c=Di;a=(c&~(1<<32-ot(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=ng++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},og={readContext:Jn,useCallback:Kh,useContext:Jn,useEffect:Jc,useImperativeHandle:$h,useInsertionEffect:Xh,useLayoutEffect:qh,useMemo:Zh,useReducer:Kc,useRef:Wh,useState:function(){return Kc(Aa)},useDebugValue:Qc,useDeferredValue:function(n){var i=Qn();return Jh(i,nn.memoizedState,n)},useTransition:function(){var n=Kc(Aa)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1},lg={readContext:Jn,useCallback:Kh,useContext:Jn,useEffect:Jc,useImperativeHandle:$h,useInsertionEffect:Xh,useLayoutEffect:qh,useMemo:Zh,useReducer:Zc,useRef:Wh,useState:function(){return Zc(Aa)},useDebugValue:Qc,useDeferredValue:function(n){var i=Qn();return nn===null?i.memoizedState=n:Jh(i,nn.memoizedState,n)},useTransition:function(){var n=Zc(Aa)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=q({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function eu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:q({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ho={isMounted:function(n){return(n=n._reactInternals)?_i(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=bn(),d=gr(n),m=Ii(c,d);m.payload=i,a!=null&&(m.callback=a),i=hr(n,m,d),i!==null&&(fi(i,n,d,c),Io(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=bn(),d=gr(n),m=Ii(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=hr(n,m,d),i!==null&&(fi(i,n,d,c),Io(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=bn(),c=gr(n),d=Ii(a,c);d.tag=2,i!=null&&(d.callback=i),i=hr(n,d,c),i!==null&&(fi(i,n,c,a),Io(i,n,c))}};function ip(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!pa(a,c)||!pa(d,m):!0}function rp(n,i,a){var c=!1,d=ur,m=i.contextType;return typeof m=="object"&&m!==null?m=Jn(m):(d=Pn(i)?Ir:gn.current,c=i.contextTypes,m=(c=c!=null)?_s(n,d):ur),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ho,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function sp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ho.enqueueReplaceState(i,i.state,null)}function tu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Vc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Jn(m):(m=Pn(i)?Ir:gn.current,d.context=_s(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(eu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ho.enqueueReplaceState(d,d.state,null),Uo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var a="",c=i;do a+=Pe(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function nu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function iu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var cg=typeof WeakMap=="function"?WeakMap:Map;function ap(n,i,a){a=Ii(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){$o||($o=!0,_u=c),iu(n,i)},a}function op(n,i,a){a=Ii(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){iu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){iu(n,i),typeof c!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function lp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new cg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Eg.bind(null,n,i,a),i.then(n,n))}function cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function up(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ii(-1,1),i.tag=2,hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var ug=D.ReactCurrentOwner,Dn=!1;function Tn(n,i,a,c){i.child=n===null?Ph(i,null,a,c):Ms(i,n.child,a,c)}function fp(n,i,a,c,d){a=a.render;var m=i.ref;return Ts(i,d),c=Yc(n,i,a,c,m,d),a=$c(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ui(n,i,d)):(Gt&&a&&Dc(i),i.flags|=1,Tn(n,i,c,d),i.child)}function dp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!bu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,hp(n,i,m,c,d)):(n=tl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(T,c)&&n.ref===i.ref)return Ui(n,i,d)}return i.flags|=1,n=vr(m,c),n.ref=i.ref,n.return=i,i.child=n}function hp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(pa(m,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Ui(n,i,d)}return ru(n,i,a,c,d)}function pp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Cs,jn),jn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Cs,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,kt(Cs,jn),jn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,kt(Cs,jn),jn|=c;return Tn(n,i,d,a),i.child}function mp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ru(n,i,a,c,d){var m=Pn(a)?Ir:gn.current;return m=_s(i,m),Ts(i,d),a=Yc(n,i,a,c,m,d),c=$c(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ui(n,i,d)):(Gt&&c&&Dc(i),i.flags|=1,Tn(n,i,a,d),i.child)}function xp(n,i,a,c,d){if(Pn(a)){var m=!0;wo(i)}else m=!1;if(Ts(i,d),i.stateNode===null)Wo(n,i),rp(i,a,c),tu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var H=T.context,se=a.contextType;typeof se=="object"&&se!==null?se=Jn(se):(se=Pn(a)?Ir:gn.current,se=_s(i,se));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==c||H!==se)&&sp(i,T,c,se),dr=!1;var ge=i.memoizedState;T.state=ge,Uo(i,c,T,d),H=i.memoizedState,I!==c||ge!==H||Rn.current||dr?(typeof ye=="function"&&(eu(i,a,ye,c),H=i.memoizedState),(I=dr||ip(i,a,I,c,ge,H,se))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),T.props=c,T.state=H,T.context=se,c=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Lh(n,i),I=i.memoizedProps,se=i.type===i.elementType?I:li(i.type,I),T.props=se,Se=i.pendingProps,ge=T.context,H=a.contextType,typeof H=="object"&&H!==null?H=Jn(H):(H=Pn(a)?Ir:gn.current,H=_s(i,H));var ke=a.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==Se||ge!==H)&&sp(i,T,c,H),dr=!1,ge=i.memoizedState,T.state=ge,Uo(i,c,T,d);var Ge=i.memoizedState;I!==Se||ge!==Ge||Rn.current||dr?(typeof ke=="function"&&(eu(i,a,ke,c),Ge=i.memoizedState),(se=dr||ip(i,a,se,c,ge,Ge,H)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ge,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ge,H)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),T.props=c,T.state=Ge,T.context=H,c=se):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return su(n,i,a,c,m,d)}function su(n,i,a,c,d,m){mp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Sh(i,a,!1),Ui(n,i,m);c=i.stateNode,ug.current=i;var I=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ms(i,n.child,null,m),i.child=Ms(i,null,I,m)):Tn(n,i,I,m),i.memoizedState=c.state,d&&Sh(i,a,!0),i.child}function gp(n){var i=n.stateNode;i.pendingContext?vh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(n,i.context,!1),Hc(n,i.containerInfo)}function _p(n,i,a,c,d){return Ss(),Uc(d),i.flags|=256,Tn(n,i,a,c),i.child}var au={dehydrated:null,treeContext:null,retryLane:0};function ou(n){return{baseLanes:n,cachePool:null,transitions:null}}function vp(n,i,a){var c=i.pendingProps,d=Wt.current,m=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Wt,d&1),n===null)return Ic(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=nl(T,c,0,null),n=Wr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=ou(a),i.memoizedState=au,n):lu(i,T));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return fg(n,i,T,c,I,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,I=d.sibling;var H={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=vr(d,H),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=vr(I,m):(m=Wr(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?ou(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=au,c}return m=n.child,n=m.sibling,c=vr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function lu(n,i){return i=nl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Go(n,i,a,c){return c!==null&&Uc(c),Ms(i,n.child,null,a),n=lu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function fg(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=nu(Error(t(422))),Go(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=nl({mode:"visible",children:c.children},d,0,null),m=Wr(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ms(i,n.child,null,T),i.child.memoizedState=ou(T),i.memoizedState=au,m);if((i.mode&1)===0)return Go(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=nu(m,c,void 0),Go(n,i,T,c)}if(I=(T&n.childLanes)!==0,Dn||I){if(c=cn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ni(n,d),fi(c,n,d,-1))}return Tu(),c=nu(Error(t(421))),Go(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Tg.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Wn=lr(d.nextSibling),Gn=i,Gt=!0,oi=null,n!==null&&(Kn[Zn++]=Di,Kn[Zn++]=Li,Kn[Zn++]=Ur,Di=n.id,Li=n.overflow,Ur=i),i=lu(i,c.children),i.flags|=4096,i)}function yp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Bc(n.return,i,a)}function cu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Sp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Tn(n,i,c.children,a),c=Wt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yp(n,a,i);else if(n.tag===19)yp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Wt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Fo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),cu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Fo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}cu(i,!0,a,null,m);break;case"together":cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ui(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function dg(n,i,a){switch(i.tag){case 3:gp(i),Ss();break;case 5:Uh(i);break;case 1:Pn(i.type)&&wo(i);break;case 4:Hc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Lo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?vp(n,i,a):(kt(Wt,Wt.current&1),n=Ui(n,i,a),n!==null?n.sibling:null);kt(Wt,Wt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Sp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Wt,Wt.current),c)break;return null;case 22:case 23:return i.lanes=0,pp(n,i,a)}return Ui(n,i,a)}var Mp,uu,Ep,Tp;Mp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},uu=function(){},Ep=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,kr(Si.current);var m=null;switch(a){case"input":d=Dt(n,d),c=Dt(n,c),m=[];break;case"select":d=q({},d,{value:void 0}),c=q({},c,{value:void 0}),m=[];break;case"textarea":d=Qe(n,d),c=Qe(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Eo)}et(a,c);var T;a=null;for(se in d)if(!c.hasOwnProperty(se)&&d.hasOwnProperty(se)&&d[se]!=null)if(se==="style"){var I=d[se];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?m||(m=[]):(m=m||[]).push(se,null));for(se in c){var H=c[se];if(I=d!=null?d[se]:void 0,c.hasOwnProperty(se)&&H!==I&&(H!=null||I!=null))if(se==="style")if(I){for(T in I)!I.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in H)H.hasOwnProperty(T)&&I[T]!==H[T]&&(a||(a={}),a[T]=H[T])}else a||(m||(m=[]),m.push(se,a)),a=H;else se==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(m=m||[]).push(se,H)):se==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(se,""+H):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(H!=null&&se==="onScroll"&&Bt("scroll",n),m||I===H||(m=[])):(m=m||[]).push(se,H))}a&&(m=m||[]).push("style",a);var se=m;(i.updateQueue=se)&&(i.flags|=4)}},Tp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ra(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function hg(n,i,a){var c=i.pendingProps;switch(Lc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Pn(i.type)&&bo(),vn(i),null;case 3:return c=i.stateNode,bs(),zt(Rn),zt(gn),jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Po(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(Su(oi),oi=null))),uu(n,i),vn(i),null;case 5:Gc(i);var d=kr(Ta.current);if(a=i.type,n!==null&&i.stateNode!=null)Ep(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=kr(Si.current),Po(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[yi]=i,c[va]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<xa.length;d++)Bt(xa[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":B(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":N(c,m),Bt("invalid",c)}et(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var I=m[T];T==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Mo(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Mo(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Bt("scroll",c)}switch(a){case"input":at(c),bt(c,m,!0);break;case"textarea":at(c),$(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Eo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[yi]=i,n[va]=c,Mp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ue(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),d=c;break;case"iframe":case"object":case"embed":Bt("load",n),d=c;break;case"video":case"audio":for(d=0;d<xa.length;d++)Bt(xa[d],n);d=c;break;case"source":Bt("error",n),d=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),d=c;break;case"details":Bt("toggle",n),d=c;break;case"input":B(n,c),d=Dt(n,c),Bt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=q({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":N(n,c),d=Qe(n,c),Bt("invalid",n);break;default:d=c}et(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var H=I[m];m==="style"?Ce(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&qe(n,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Re(n,H):typeof H=="number"&&Re(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?H!=null&&m==="onScroll"&&Bt("scroll",n):H!=null&&A(n,m,H,T))}switch(a){case"input":at(n),bt(n,c,!1);break;case"textarea":at(n),$(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Be(n,!!c.multiple,m,!1):c.defaultValue!=null&&Be(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Eo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)Tp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=kr(Ta.current),kr(Si.current),Po(i)){if(c=i.stateNode,a=i.memoizedProps,c[yi]=i,(m=c.nodeValue!==a)&&(n=Gn,n!==null))switch(n.tag){case 3:Mo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Mo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return vn(i),null;case 13:if(zt(Wt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ah(),Ss(),i.flags|=98560,m=!1;else if(m=Po(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[yi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else oi!==null&&(Su(oi),oi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?rn===0&&(rn=3):Tu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return bs(),uu(n,i),n===null&&ga(i.stateNode.containerInfo),vn(i),null;case 10:return kc(i.type._context),vn(i),null;case 17:return Pn(i.type)&&bo(),vn(i),null;case 19:if(zt(Wt),m=i.memoizedState,m===null)return vn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Ra(m,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Fo(n),T!==null){for(i.flags|=128,Ra(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Wt,Wt.current&1|2),i.child}n=n.sibling}m.tail!==null&&K()>Rs&&(i.flags|=128,c=!0,Ra(m,!1),i.lanes=4194304)}else{if(!c)if(n=Fo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ra(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Gt)return vn(i),null}else 2*K()-m.renderingStartTime>Rs&&a!==1073741824&&(i.flags|=128,c=!0,Ra(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=K(),i.sibling=null,a=Wt.current,kt(Wt,c?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return Eu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(jn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function pg(n,i){switch(Lc(i),i.tag){case 1:return Pn(i.type)&&bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return bs(),zt(Rn),zt(gn),jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Gc(i),null;case 13:if(zt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Wt),null;case 4:return bs(),null;case 10:return kc(i.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var jo=!1,yn=!1,mg=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function As(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){qt(n,i,c)}else a.current=null}function fu(n,i,a){try{a()}catch(c){qt(n,i,c)}}var bp=!1;function xg(n,i){if(Ec=uo,n=ih(),mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,I=-1,H=-1,se=0,ye=0,Se=n,ge=null;t:for(;;){for(var ke;Se!==a||d!==0&&Se.nodeType!==3||(I=T+d),Se!==m||c!==0&&Se.nodeType!==3||(H=T+c),Se.nodeType===3&&(T+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)ge=Se,Se=ke;for(;;){if(Se===n)break t;if(ge===a&&++se===d&&(I=T),ge===m&&++ye===c&&(H=T),(ke=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=ke}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tc={focusedElem:n,selectionRange:a},uo=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Xe=Ge.memoizedProps,$t=Ge.memoizedState,Y=i.stateNode,G=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:li(i.type,Xe),$t);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){qt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return Ge=bp,bp=!1,Ge}function Pa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&fu(i,a,m)}d=d.next}while(d!==c)}}function Xo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function du(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function wp(n){var i=n.alternate;i!==null&&(n.alternate=null,wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[va],delete i[Cc],delete i[Jx],delete i[Qx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ap(n){return n.tag===5||n.tag===3||n.tag===4}function Cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ap(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Eo));else if(c!==4&&(n=n.child,n!==null))for(hu(n,i,a),n=n.sibling;n!==null;)hu(n,i,a),n=n.sibling}function pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(pu(n,i,a),n=n.sibling;n!==null;)pu(n,i,a),n=n.sibling}var mn=null,ci=!1;function pr(n,i,a){for(a=a.child;a!==null;)Rp(n,i,a),a=a.sibling}function Rp(n,i,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(tt,a)}catch{}switch(a.tag){case 5:yn||As(a,i);case 6:var c=mn,d=ci;mn=null,pr(n,i,a),mn=c,ci=d,mn!==null&&(ci?(n=mn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(ci?(n=mn,a=a.stateNode,n.nodeType===8?Ac(n.parentNode,a):n.nodeType===1&&Ac(n,a),la(n)):Ac(mn,a.stateNode));break;case 4:c=mn,d=ci,mn=a.stateNode.containerInfo,ci=!0,pr(n,i,a),mn=c,ci=d;break;case 0:case 11:case 14:case 15:if(!yn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&fu(a,i,T),d=d.next}while(d!==c)}pr(n,i,a);break;case 1:if(!yn&&(As(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){qt(a,i,I)}pr(n,i,a);break;case 21:pr(n,i,a);break;case 22:a.mode&1?(yn=(c=yn)||a.memoizedState!==null,pr(n,i,a),yn=c):pr(n,i,a);break;default:pr(n,i,a)}}function Pp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new mg),i.forEach(function(c){var d=bg.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function ui(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:mn=I.stateNode,ci=!1;break e;case 3:mn=I.stateNode.containerInfo,ci=!0;break e;case 4:mn=I.stateNode.containerInfo,ci=!0;break e}I=I.return}if(mn===null)throw Error(t(160));Rp(m,T,d),mn=null,ci=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(se){qt(d,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dp(i,n),i=i.sibling}function Dp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(i,n),Ei(n),c&4){try{Pa(3,n,n.return),Xo(3,n)}catch(Xe){qt(n,n.return,Xe)}try{Pa(5,n,n.return)}catch(Xe){qt(n,n.return,Xe)}}break;case 1:ui(i,n),Ei(n),c&512&&a!==null&&As(a,a.return);break;case 5:if(ui(i,n),Ei(n),c&512&&a!==null&&As(a,a.return),n.flags&32){var d=n.stateNode;try{Re(d,"")}catch(Xe){qt(n,n.return,Xe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,I=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&mt(d,m),Ue(I,T);var se=Ue(I,m);for(T=0;T<H.length;T+=2){var ye=H[T],Se=H[T+1];ye==="style"?Ce(d,Se):ye==="dangerouslySetInnerHTML"?qe(d,Se):ye==="children"?Re(d,Se):A(d,ye,Se,se)}switch(I){case"input":dt(d,m);break;case"textarea":b(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ke=m.value;ke!=null?Be(d,!!m.multiple,ke,!1):ge!==!!m.multiple&&(m.defaultValue!=null?Be(d,!!m.multiple,m.defaultValue,!0):Be(d,!!m.multiple,m.multiple?[]:"",!1))}d[va]=m}catch(Xe){qt(n,n.return,Xe)}}break;case 6:if(ui(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Xe){qt(n,n.return,Xe)}}break;case 3:if(ui(i,n),Ei(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{la(i.containerInfo)}catch(Xe){qt(n,n.return,Xe)}break;case 4:ui(i,n),Ei(n);break;case 13:ui(i,n),Ei(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(gu=K())),c&4&&Pp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(yn=(se=yn)||ye,ui(i,n),yn=se):ui(i,n),Ei(n),c&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!ye&&(n.mode&1)!==0)for(Ve=n,ye=n.child;ye!==null;){for(Se=Ve=ye;Ve!==null;){switch(ge=Ve,ke=ge.child,ge.tag){case 0:case 11:case 14:case 15:Pa(4,ge,ge.return);break;case 1:As(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(Xe){qt(c,a,Xe)}}break;case 5:As(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Ip(Se);continue}}ke!==null?(ke.return=ge,Ve=ke):Ip(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,se?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Se.stateNode,H=Se.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=ve("display",T))}catch(Xe){qt(n,n.return,Xe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=se?"":Se.memoizedProps}catch(Xe){qt(n,n.return,Xe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ui(i,n),Ei(n),c&4&&Pp(n);break;case 21:break;default:ui(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Ap(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Re(d,""),c.flags&=-33);var m=Cp(n);pu(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,I=Cp(n);hu(n,I,T);break;default:throw Error(t(161))}}catch(H){qt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function gg(n,i,a){Ve=n,Lp(n)}function Lp(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||jo;if(!T){var I=d.alternate,H=I!==null&&I.memoizedState!==null||yn;I=jo;var se=yn;if(jo=T,(yn=H)&&!se)for(Ve=d;Ve!==null;)T=Ve,H=T.child,T.tag===22&&T.memoizedState!==null?Up(d):H!==null?(H.return=T,Ve=H):Up(d);for(;m!==null;)Ve=m,Lp(m),m=m.sibling;Ve=d,jo=I,yn=se}Np(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Np(n)}}function Np(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Xo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:li(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ih(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ih(i,T,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var ye=se.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&la(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&du(i)}catch(ge){qt(i,i.return,ge)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Ip(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Up(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Xo(4,i)}catch(H){qt(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(H){qt(i,d,H)}}var m=i.return;try{du(i)}catch(H){qt(i,m,H)}break;case 5:var T=i.return;try{du(i)}catch(H){qt(i,T,H)}}}catch(H){qt(i,i.return,H)}if(i===n){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var _g=Math.ceil,qo=D.ReactCurrentDispatcher,mu=D.ReactCurrentOwner,ei=D.ReactCurrentBatchConfig,Tt=0,cn=null,Jt=null,xn=0,jn=0,Cs=cr(0),rn=0,Da=null,zr=0,Yo=0,xu=0,La=null,Ln=null,gu=0,Rs=1/0,Fi=null,$o=!1,_u=null,mr=null,Ko=!1,xr=null,Zo=0,Na=0,vu=null,Jo=-1,Qo=0;function bn(){return(Tt&6)!==0?K():Jo!==-1?Jo:Jo=K()}function gr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&xn!==0?xn&-xn:tg.transition!==null?(Qo===0&&(Qo=tr()),Qo):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Od(n.type)),n)}function fi(n,i,a,c){if(50<Na)throw Na=0,vu=null,Error(t(185));Zt(n,a,c),((Tt&2)===0||n!==cn)&&(n===cn&&((Tt&2)===0&&(Yo|=a),rn===4&&_r(n,xn)),Nn(n,c),a===1&&Tt===0&&(i.mode&1)===0&&(Rs=K()+500,Ao&&fr()))}function Nn(n,i){var a=n.callbackNode;er(n,i);var c=yt(n,n===cn?xn:0);if(c===0)a!==null&&oo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&oo(a),i===1)n.tag===0?eg(Op.bind(null,n)):Mh(Op.bind(null,n)),Kx(function(){(Tt&6)===0&&fr()}),a=null;else{switch(ls(c)){case 1:a=j;break;case 4:a=we;break;case 16:a=Ne;break;case 536870912:a=ze;break;default:a=Ne}a=jp(a,Fp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Fp(n,i){if(Jo=-1,Qo=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ps()&&n.callbackNode!==a)return null;var c=yt(n,n===cn?xn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=el(n,c);else{i=c;var d=Tt;Tt|=2;var m=Bp();(cn!==n||xn!==i)&&(Fi=null,Rs=K()+500,Hr(n,i));do try{Sg();break}catch(I){kp(n,I)}while(!0);Oc(),qo.current=m,Tt=d,Jt!==null?i=0:(cn=null,xn=0,i=rn)}if(i!==0){if(i===2&&(d=pn(n),d!==0&&(c=d,i=yu(n,d))),i===1)throw a=Da,Hr(n,0),_r(n,c),Nn(n,K()),a;if(i===6)_r(n,c);else{if(d=n.current.alternate,(c&30)===0&&!vg(d)&&(i=el(n,c),i===2&&(m=pn(n),m!==0&&(c=m,i=yu(n,m))),i===1))throw a=Da,Hr(n,0),_r(n,c),Nn(n,K()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Gr(n,Ln,Fi);break;case 3:if(_r(n,c),(c&130023424)===c&&(i=gu+500-K(),10<i)){if(yt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){bn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=wc(Gr.bind(null,n,Ln,Fi),i);break}Gr(n,Ln,Fi);break;case 4:if(_r(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-ot(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=K()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_g(c/1960))-c,10<c){n.timeoutHandle=wc(Gr.bind(null,n,Ln,Fi),c);break}Gr(n,Ln,Fi);break;case 5:Gr(n,Ln,Fi);break;default:throw Error(t(329))}}}return Nn(n,K()),n.callbackNode===a?Fp.bind(null,n):null}function yu(n,i){var a=La;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=el(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&Su(i)),n}function Su(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function vg(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!ai(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(n,i){for(i&=~xu,i&=~Yo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ot(i),c=1<<a;n[a]=-1,i&=~c}}function Op(n){if((Tt&6)!==0)throw Error(t(327));Ps();var i=yt(n,0);if((i&1)===0)return Nn(n,K()),null;var a=el(n,i);if(n.tag!==0&&a===2){var c=pn(n);c!==0&&(i=c,a=yu(n,c))}if(a===1)throw a=Da,Hr(n,0),_r(n,i),Nn(n,K()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gr(n,Ln,Fi),Nn(n,K()),null}function Mu(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(Rs=K()+500,Ao&&fr())}}function Vr(n){xr!==null&&xr.tag===0&&(Tt&6)===0&&Ps();var i=Tt;Tt|=1;var a=ei.transition,c=ht;try{if(ei.transition=null,ht=1,n)return n()}finally{ht=c,ei.transition=a,Tt=i,(Tt&6)===0&&fr()}}function Eu(){jn=Cs.current,zt(Cs)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,$x(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(Lc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bo();break;case 3:bs(),zt(Rn),zt(gn),jc();break;case 5:Gc(c);break;case 4:bs();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:kc(c.type._context);break;case 22:case 23:Eu()}a=a.return}if(cn=n,Jt=n=vr(n.current,null),xn=jn=i,rn=0,Da=null,xu=Yo=zr=0,Ln=La=null,Or!==null){for(i=0;i<Or.length;i++)if(a=Or[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}Or=null}return n}function kp(n,i){do{var a=Jt;try{if(Oc(),Oo.current=Vo,ko){for(var c=jt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ko=!1}if(Br=0,ln=nn=jt=null,ba=!1,wa=0,mu.current=null,a===null||a.return===null){rn=1,Da=i,Jt=null;break}e:{var m=n,T=a.return,I=a,H=i;if(i=xn,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var se=H,ye=I,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=ye.alternate;ge?(ye.updateQueue=ge.updateQueue,ye.memoizedState=ge.memoizedState,ye.lanes=ge.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=cp(T);if(ke!==null){ke.flags&=-257,up(ke,T,I,m,i),ke.mode&1&&lp(m,se,i),i=ke,H=se;var Ge=i.updateQueue;if(Ge===null){var Xe=new Set;Xe.add(H),i.updateQueue=Xe}else Ge.add(H);break e}else{if((i&1)===0){lp(m,se,i),Tu();break e}H=Error(t(426))}}else if(Gt&&I.mode&1){var $t=cp(T);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),up($t,T,I,m,i),Uc(ws(H,I));break e}}m=H=ws(H,I),rn!==4&&(rn=2),La===null?La=[m]:La.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=ap(m,H,i);Nh(m,Y);break e;case 1:I=H;var G=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(mr===null||!mr.has(te)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=op(m,I,i);Nh(m,Ee);break e}}m=m.return}while(m!==null)}Vp(a)}catch($e){i=$e,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function Bp(){var n=qo.current;return qo.current=Vo,n===null?Vo:n}function Tu(){(rn===0||rn===3||rn===2)&&(rn=4),cn===null||(zr&268435455)===0&&(Yo&268435455)===0||_r(cn,xn)}function el(n,i){var a=Tt;Tt|=2;var c=Bp();(cn!==n||xn!==i)&&(Fi=null,Hr(n,i));do try{yg();break}catch(d){kp(n,d)}while(!0);if(Oc(),Tt=a,qo.current=c,Jt!==null)throw Error(t(261));return cn=null,xn=0,rn}function yg(){for(;Jt!==null;)zp(Jt)}function Sg(){for(;Jt!==null&&!w();)zp(Jt)}function zp(n){var i=Wp(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?Vp(n):Jt=i,mu.current=null}function Vp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=hg(a,i,jn),a!==null){Jt=a;return}}else{if(a=pg(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);rn===0&&(rn=5)}function Gr(n,i,a){var c=ht,d=ei.transition;try{ei.transition=null,ht=1,Mg(n,i,a,c)}finally{ei.transition=d,ht=c}return null}function Mg(n,i,a,c){do Ps();while(xr!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Cn(n,m),n===cn&&(Jt=cn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ko||(Ko=!0,jp(Ne,function(){return Ps(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var T=ht;ht=1;var I=Tt;Tt|=4,mu.current=null,xg(n,a),Dp(a,n),Hx(Tc),uo=!!Ec,Tc=Ec=null,n.current=a,gg(a),W(),Tt=I,ht=T,ei.transition=m}else n.current=a;if(Ko&&(Ko=!1,xr=n,Zo=d),m=n.pendingLanes,m===0&&(mr=null),Je(a.stateNode),Nn(n,K()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if($o)throw $o=!1,n=_u,_u=null,n;return(Zo&1)!==0&&n.tag!==0&&Ps(),m=n.pendingLanes,(m&1)!==0?n===vu?Na++:(Na=0,vu=n):Na=0,fr(),null}function Ps(){if(xr!==null){var n=ls(Zo),i=ei.transition,a=ht;try{if(ei.transition=null,ht=16>n?16:n,xr===null)var c=!1;else{if(n=xr,xr=null,Zo=0,(Tt&6)!==0)throw Error(t(331));var d=Tt;for(Tt|=4,Ve=n.current;Ve!==null;){var m=Ve,T=m.child;if((Ve.flags&16)!==0){var I=m.deletions;if(I!==null){for(var H=0;H<I.length;H++){var se=I[H];for(Ve=se;Ve!==null;){var ye=Ve;switch(ye.tag){case 0:case 11:case 15:Pa(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,Ve=Se;else for(;Ve!==null;){ye=Ve;var ge=ye.sibling,ke=ye.return;if(wp(ye),ye===se){Ve=null;break}if(ge!==null){ge.return=ke,Ve=ge;break}Ve=ke}}}var Ge=m.alternate;if(Ge!==null){var Xe=Ge.child;if(Xe!==null){Ge.child=null;do{var $t=Xe.sibling;Xe.sibling=null,Xe=$t}while(Xe!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ve=T;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Pa(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Ve=Y;break e}Ve=m.return}}var G=n.current;for(Ve=G;Ve!==null;){T=Ve;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,Ve=te;else e:for(T=G;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Xo(9,I)}}catch($e){qt(I,I.return,$e)}if(I===T){Ve=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Ve=Ee;break e}Ve=I.return}}if(Tt=d,fr(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(tt,n)}catch{}c=!0}return c}finally{ht=a,ei.transition=i}}return!1}function Hp(n,i,a){i=ws(a,i),i=ap(n,i,1),n=hr(n,i,1),i=bn(),n!==null&&(Zt(n,1,i),Nn(n,i))}function qt(n,i,a){if(n.tag===3)Hp(n,n,a);else for(;i!==null;){if(i.tag===3){Hp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){n=ws(a,n),n=op(i,n,1),i=hr(i,n,1),n=bn(),i!==null&&(Zt(i,1,n),Nn(i,n));break}}i=i.return}}function Eg(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=bn(),n.pingedLanes|=n.suspendedLanes&a,cn===n&&(xn&a)===a&&(rn===4||rn===3&&(xn&130023424)===xn&&500>K()-gu?Hr(n,0):xu|=a),Nn(n,i)}function Gp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var a=bn();n=Ni(n,i),n!==null&&(Zt(n,i,a),Nn(n,a))}function Tg(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Gp(n,a)}function bg(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gp(n,a)}var Wp;Wp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)Dn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,dg(n,i,a);Dn=(n.flags&131072)!==0}else Dn=!1,Gt&&(i.flags&1048576)!==0&&Eh(i,Ro,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Wo(n,i),n=i.pendingProps;var d=_s(i,gn.current);Ts(i,a),d=Yc(null,i,c,n,d,a);var m=$c();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(m=!0,wo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Vc(i),d.updater=Ho,i.stateNode=d,d._reactInternals=i,tu(i,c,n,a),i=su(null,i,c,!0,m,a)):(i.tag=0,Gt&&m&&Dc(i),Tn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Wo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Ag(c),n=li(c,n),d){case 0:i=ru(null,i,c,n,a);break e;case 1:i=xp(null,i,c,n,a);break e;case 11:i=fp(null,i,c,n,a);break e;case 14:i=dp(null,i,c,li(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:li(c,d),ru(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:li(c,d),xp(n,i,c,d,a);case 3:e:{if(gp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Lh(n,i),Uo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ws(Error(t(423)),i),i=_p(n,i,c,a,d);break e}else if(c!==d){d=ws(Error(t(424)),i),i=_p(n,i,c,a,d);break e}else for(Wn=lr(i.stateNode.containerInfo.firstChild),Gn=i,Gt=!0,oi=null,a=Ph(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),c===d){i=Ui(n,i,a);break e}Tn(n,i,c,a)}i=i.child}return i;case 5:return Uh(i),n===null&&Ic(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,bc(c,d)?T=null:m!==null&&bc(c,m)&&(i.flags|=32),mp(n,i),Tn(n,i,T,a),i.child;case 6:return n===null&&Ic(i),null;case 13:return vp(n,i,a);case 4:return Hc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ms(i,null,c,a):Tn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:li(c,d),fp(n,i,c,d,a);case 7:return Tn(n,i,i.pendingProps,a),i.child;case 8:return Tn(n,i,i.pendingProps.children,a),i.child;case 12:return Tn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,kt(Lo,c._currentValue),c._currentValue=T,m!==null)if(ai(m.value,T)){if(m.children===d.children&&!Rn.current){i=Ui(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){T=m.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=Ii(-1,a&-a),H.tag=2;var se=m.updateQueue;if(se!==null){se=se.shared;var ye=se.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),se.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),Bc(m.return,a,i),I.lanes|=a;break}H=H.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Bc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Tn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ts(i,a),d=Jn(d),c=c(d),i.flags|=1,Tn(n,i,c,a),i.child;case 14:return c=i.type,d=li(c,i.pendingProps),d=li(c.type,d),dp(n,i,c,d,a);case 15:return hp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:li(c,d),Wo(n,i),i.tag=1,Pn(c)?(n=!0,wo(i)):n=!1,Ts(i,a),rp(i,c,d),tu(i,c,d,a),su(null,i,c,!0,n,a);case 19:return Sp(n,i,a);case 22:return pp(n,i,a)}throw Error(t(156,i.tag))};function jp(n,i){return ao(n,i)}function wg(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,c){return new wg(n,i,a,c)}function bu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ag(n){if(typeof n=="function")return bu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===ce)return 14}return 2}function vr(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function tl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")bu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return Wr(a.children,d,m,i);case X:T=8,d|=8;break;case P:return n=ti(12,a,i,d|2),n.elementType=P,n.lanes=m,n;case ie:return n=ti(13,a,i,d),n.elementType=ie,n.lanes=m,n;case de:return n=ti(19,a,i,d),n.elementType=de,n.lanes=m,n;case J:return nl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:T=10;break e;case z:T=9;break e;case Q:T=11;break e;case ce:T=14;break e;case ue:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Wr(n,i,a,c){return n=ti(7,n,c,i),n.lanes=a,n}function nl(n,i,a,c){return n=ti(22,n,c,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function wu(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function Au(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Cg(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ot(0),this.expirationTimes=Ot(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Cu(n,i,a,c,d,m,T,I,H){return n=new Cg(n,i,a,I,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(m),n}function Rg(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xp(n){if(!n)return ur;n=n._reactInternals;e:{if(_i(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Pn(a))return yh(n,a,i)}return i}function qp(n,i,a,c,d,m,T,I,H){return n=Cu(a,c,!0,n,d,m,T,I,H),n.context=Xp(null),a=n.current,c=bn(),d=gr(a),m=Ii(c,d),m.callback=i??null,hr(a,m,d),n.current.lanes=d,Zt(n,d,c),Nn(n,c),n}function il(n,i,a,c){var d=i.current,m=bn(),T=gr(d);return a=Xp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ii(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=hr(d,i,T),n!==null&&(fi(n,d,T,m),Io(n,d,T)),T}function rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Yp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ru(n,i){Yp(n,i),(n=n.alternate)&&Yp(n,i)}function Pg(){return null}var $p=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pu(n){this._internalRoot=n}sl.prototype.render=Pu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));il(n,i,null,null)},sl.prototype.unmount=Pu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Vr(function(){il(null,n,null,null)}),i[Ri]=null}};function sl(n){this._internalRoot=n}sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ld();n={blockedOn:null,target:n,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,n),a===0&&Ud(n)}};function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function Dg(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var se=rl(T);m.call(se)}}var T=qp(i,c,n,0,null,!1,!1,"",Kp);return n._reactRootContainer=T,n[Ri]=T.current,ga(n.nodeType===8?n.parentNode:n),Vr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var se=rl(H);I.call(se)}}var H=Cu(n,0,!1,null,null,!1,!1,"",Kp);return n._reactRootContainer=H,n[Ri]=H.current,ga(n.nodeType===8?n.parentNode:n),Vr(function(){il(i,H,a,c)}),H}function ol(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var I=d;d=function(){var H=rl(T);I.call(H)}}il(i,T,n,d)}else T=Dg(a,i,n,d,c);return rl(T)}vi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Nt(i.pendingLanes);a!==0&&(tn(i,a|1),Nn(i,K()),(Tt&6)===0&&(Rs=K()+500,fr()))}break;case 13:Vr(function(){var c=Ni(n,1);if(c!==null){var d=bn();fi(c,n,1,d)}}),Ru(n,1)}},nc=function(n){if(n.tag===13){var i=Ni(n,134217728);if(i!==null){var a=bn();fi(i,n,134217728,a)}Ru(n,134217728)}},Dd=function(n){if(n.tag===13){var i=gr(n),a=Ni(n,i);if(a!==null){var c=bn();fi(a,n,i,c)}Ru(n,i)}},Ld=function(){return ht},Nd=function(n,i){var a=ht;try{return ht=n,i()}finally{ht=a}},De=function(n,i,a){switch(i){case"input":if(dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=To(c);if(!d)throw Error(t(90));Xt(c),dt(c,d)}}}break;case"textarea":b(n,a);break;case"select":i=a.value,i!=null&&Be(n,!!a.multiple,i,!1)}},lt=Mu,It=Vr;var Lg={usingClientEntryPoint:!1,Events:[ya,xs,To,me,He,Mu]},Ia={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ng={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ro(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Pg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{tt=ll.inject(Ng),Ke=ll}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lg,In.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(i))throw Error(t(200));return Rg(n,i,null,a)},In.createRoot=function(n,i){if(!Du(n))throw Error(t(299));var a=!1,c="",d=$p;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Cu(n,1,!1,null,null,a,!1,c,d),n[Ri]=i.current,ga(n.nodeType===8?n.parentNode:n),new Pu(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ro(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Vr(n)},In.hydrate=function(n,i,a){if(!al(i))throw Error(t(200));return ol(null,n,i,!0,a)},In.hydrateRoot=function(n,i,a){if(!Du(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=$p;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=qp(i,null,n,1,a??null,d,!1,m,T),n[Ri]=i.current,ga(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new sl(i)},In.render=function(n,i,a){if(!al(i))throw Error(t(200));return ol(null,n,i,!1,a)},In.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(Vr(function(){ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Ri]=null})}),!0):!1},In.unstable_batchedUpdates=Mu,In.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ol(n,i,a,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var rm;function Gg(){if(rm)return Iu.exports;rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Iu.exports=Hg(),Iu.exports}var sm;function Wg(){if(sm)return cl;sm=1;var s=Gg();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var jg=Wg();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="181",Xs={ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xg=0,am=1,qg=2,y0=1,Yg=2,Wi=3,Dr=0,kn=1,ji=2,Yi=0,qs=1,om=2,lm=3,cm=4,$g=5,Zr=100,Kg=101,Zg=102,Jg=103,Qg=104,e_=200,t_=201,n_=202,i_=203,vf=204,yf=205,r_=206,s_=207,a_=208,o_=209,l_=210,c_=211,u_=212,f_=213,d_=214,Sf=0,Mf=1,Ef=2,$s=3,Tf=4,bf=5,wf=6,Af=7,md=0,h_=1,p_=2,Pr=0,m_=1,x_=2,g_=3,__=4,v_=5,y_=6,S_=7,S0=300,Ks=301,Zs=302,Cf=303,Rf=304,Kl=306,Pf=1e3,Xi=1001,Df=1002,$n=1003,M_=1004,ul=1005,si=1006,Ou=1007,Qr=1008,Ai=1009,M0=1010,E0=1011,qa=1012,xd=1013,ts=1014,qi=1015,ea=1016,gd=1017,_d=1018,Ya=1020,T0=35902,b0=35899,w0=1021,A0=1022,xi=1023,$a=1026,Ka=1027,C0=1028,vd=1029,yd=1030,Sd=1031,Md=1033,Ol=33776,kl=33777,Bl=33778,zl=33779,Lf=35840,Nf=35841,If=35842,Uf=35843,Ff=36196,Of=37492,kf=37496,Bf=37808,zf=37809,Vf=37810,Hf=37811,Gf=37812,Wf=37813,jf=37814,Xf=37815,qf=37816,Yf=37817,$f=37818,Kf=37819,Zf=37820,Jf=37821,Qf=36492,ed=36494,td=36495,nd=36283,id=36284,rd=36285,sd=36286,E_=3200,T_=3201,Ed=0,b_=1,Cr="",Yn="srgb",Js="srgb-linear",Wl="linear",Ut="srgb",Ds=7680,um=519,w_=512,A_=513,C_=514,R0=515,R_=516,P_=517,D_=518,L_=519,fm=35044,dm="300 es",bi=2e3,jl=2001;function P0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function N_(){const s=Xl("canvas");return s.style.display="block",s}const hm={};function pm(...s){const e="THREE."+s.shift();console.log(e,...s)}function ut(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Kt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Za(...s){const e=s.join(" ");e in hm||(hm[e]=!0,ut(...s))}function I_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,ad=180/Math.PI;function Ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function U_(s,e){return(s%e+e)%e}function ku(s,e,t){return(1-t)*s+t*e}function Fa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const F_={DEG2RAD:Vl};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ki{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3],_=l[u+0],y=l[u+1],M=l[u+2],E=l[u+3];if(f<=0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f>=1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(x!==E||h!==_||p!==y||g!==M){let S=h*_+p*y+g*M+x*E;S<0&&(_=-_,y=-y,M=-M,E=-E,S=-S);let v=1-f;if(S<.9995){const L=Math.acos(S),A=Math.sin(L);v=Math.sin(v*L)/A,f=Math.sin(f*L)/A,h=h*v+_*f,p=p*v+y*f,g=g*v+M*f,x=x*v+E*f}else{h=h*v+_*f,p=p*v+y*f,g=g*v+M*f,x=x*v+E*f;const L=1/Math.sqrt(h*h+p*p+g*g+x*x);h*=L,p*=L,g*=L,x*=L}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],g=r[o+3],x=l[u],_=l[u+1],y=l[u+2],M=l[u+3];return e[t]=f*M+g*x+h*y-p*_,e[t+1]=h*M+g*_+p*x-f*y,e[t+2]=p*M+g*y+f*_-h*x,e[t+3]=g*M-f*x-h*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(o/2),x=f(l/2),_=h(r/2),y=h(o/2),M=h(l/2);switch(u){case"XYZ":this._x=_*g*x+p*y*M,this._y=p*y*x-_*g*M,this._z=p*g*M+_*y*x,this._w=p*g*x-_*y*M;break;case"YXZ":this._x=_*g*x+p*y*M,this._y=p*y*x-_*g*M,this._z=p*g*M-_*y*x,this._w=p*g*x+_*y*M;break;case"ZXY":this._x=_*g*x-p*y*M,this._y=p*y*x+_*g*M,this._z=p*g*M+_*y*x,this._w=p*g*x-_*y*M;break;case"ZYX":this._x=_*g*x-p*y*M,this._y=p*y*x+_*g*M,this._z=p*g*M-_*y*x,this._w=p*g*x+_*y*M;break;case"YZX":this._x=_*g*x+p*y*M,this._y=p*y*x+_*g*M,this._z=p*g*M-_*y*x,this._w=p*g*x-_*y*M;break;case"XZY":this._x=_*g*x-p*y*M,this._y=p*y*x-_*g*M,this._z=p*g*M+_*y*x,this._w=p*g*x+_*y*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],g=t[6],x=t[10],_=r+f+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>x){const y=2*Math.sqrt(1+r-f-x);this._w=(g-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>x){const y=2*Math.sqrt(1+f-r-x);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+g)/y}else{const y=2*Math.sqrt(1+x-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+u*f+o*p-l*h,this._y=o*g+u*h+l*f-r*p,this._z=l*g+u*p+r*h-o*f,this._w=u*g-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),g=Math.sin(p);h=Math.sin(h*p)/g,t=Math.sin(t*p)/g,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),g=2*(f*t-l*o),x=2*(l*r-u*t);return this.x=t+h*p+u*x-f*g,this.y=r+h*g+f*p-l*x,this.z=o+h*x+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new Z,mm=new Ki;class xt{constructor(e,t,r,o,l,u,f,h,p){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],g=r[4],x=r[7],_=r[2],y=r[5],M=r[8],E=o[0],S=o[3],v=o[6],L=o[1],A=o[4],D=o[7],F=o[2],R=o[5],U=o[8];return l[0]=u*E+f*L+h*F,l[3]=u*S+f*A+h*R,l[6]=u*v+f*D+h*U,l[1]=p*E+g*L+x*F,l[4]=p*S+g*A+x*R,l[7]=p*v+g*D+x*U,l[2]=_*E+y*L+M*F,l[5]=_*S+y*A+M*R,l[8]=_*v+y*D+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*u*g-t*f*p-r*l*g+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8],x=g*u-f*p,_=f*h-g*l,y=p*l-u*h,M=t*x+r*_+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=x*E,e[1]=(o*p-g*r)*E,e[2]=(f*r-o*u)*E,e[3]=_*E,e[4]=(g*t-o*h)*E,e[5]=(o*l-f*t)*E,e[6]=y*E,e[7]=(r*h-p*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(zu.makeScale(e,t)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new xt,xm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O_(){const s={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ut&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=Ys(o.r),o.g=Ys(o.g),o.b=Ys(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?Wl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Za("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Za("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Js]:{primaries:e,whitePoint:r,transfer:Wl,toXYZ:xm,fromXYZ:gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:xm,fromXYZ:gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),s}const Pt=O_();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class k_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=Xl("canvas")),Ls.width=e.width,Ls.height=e.height;const o=Ls.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=$i(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor($i(t[r]/255)*255):t[r]=$i(t[r]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class Td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Vu(o[u].image)):l.push(Vu(o[u]))}else l=Vu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Vu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?k_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let z_=0;const Hu=new Z;class An extends rs{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=Xi,o=Xi,l=si,u=Qr,f=xi,h=Ai,p=An.DEFAULT_ANISOTROPY,g=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ja(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pf:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pf:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=S0;An.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,r=0,o=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],g=h[4],x=h[8],_=h[1],y=h[5],M=h[9],E=h[2],S=h[6],v=h[10];if(Math.abs(g-_)<.01&&Math.abs(x-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+E)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(p+1)/2,D=(y+1)/2,F=(v+1)/2,R=(g+_)/4,U=(x+E)/4,X=(M+S)/4;return A>D&&A>F?A<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(A),o=R/r,l=U/r):D>F?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=R/o,l=X/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=U/l,o=X/l),this.set(r,o,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(x-E)*(x-E)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(x-E)/L,this.z=(_-g)/L,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V_ extends rs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new An(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Td(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends V_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class D0 extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(l,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),dl.subVectors(this.max,Oa),Ns.subVectors(e.a,Oa),Is.subVectors(e.b,Oa),Us.subVectors(e.c,Oa),Sr.subVectors(Is,Ns),Mr.subVectors(Us,Is),jr.subVectors(Ns,Us);let t=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-jr.z,jr.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,jr.z,0,-jr.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-jr.y,jr.x,0];return!Gu(t,Ns,Is,Us,dl)||(t=[1,0,0,0,1,0,0,0,1],!Gu(t,Ns,Is,Us,dl))?!1:(hl.crossVectors(Sr,Mr),t=[hl.x,hl.y,hl.z],Gu(t,Ns,Is,Us,dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],di=new Z,fl=new Qa,Ns=new Z,Is=new Z,Us=new Z,Sr=new Z,Mr=new Z,jr=new Z,Oa=new Z,dl=new Z,hl=new Z,Xr=new Z;function Gu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Xr.fromArray(s,l);const f=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),h=e.dot(Xr),p=t.dot(Xr),g=r.dot(Xr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const G_=new Qa,ka=new Z,Wu=new Z;class eo{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):G_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ka,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Wu)),this.expandByPoint(ka.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new Z,ju=new Z,pl=new Z,Er=new Z,Xu=new Z,ml=new Z,qu=new Z;class Zl{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ju.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(ju);const l=e.distanceTo(t)*.5,u=-this.direction.dot(pl),f=Er.dot(this.direction),h=-Er.dot(pl),p=Er.lengthSq(),g=Math.abs(1-u*u);let x,_,y,M;if(g>0)if(x=u*h-f,_=u*f-h,M=l*g,x>=0)if(_>=-M)if(_<=M){const E=1/g;x*=E,_*=E,y=x*(x+u*_+2*f)+_*(u*x+_+2*h)+p}else _=l,x=Math.max(0,-(u*_+f)),y=-x*x+_*(_+2*h)+p;else _=-l,x=Math.max(0,-(u*_+f)),y=-x*x+_*(_+2*h)+p;else _<=-M?(x=Math.max(0,-(-u*l+f)),_=x>0?-l:Math.min(Math.max(-l,-h),l),y=-x*x+_*(_+2*h)+p):_<=M?(x=0,_=Math.min(Math.max(-l,-h),l),y=_*(_+2*h)+p):(x=Math.max(0,-(u*l+f)),_=x>0?l:Math.min(Math.max(-l,-h),l),y=-x*x+_*(_+2*h)+p);else _=u>0?-l:l,x=Math.max(0,-(u*_+f)),y=-x*x+_*(_+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(ju).addScaledVector(pl,_),y}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),o=ki.dot(ki)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),x>=0?(f=(e.min.z-_.z)*x,h=(e.max.z-_.z)*x):(f=(e.max.z-_.z)*x,h=(e.min.z-_.z)*x),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,r,o,l){Xu.subVectors(t,e),ml.subVectors(r,e),qu.crossVectors(Xu,ml);let u=this.direction.dot(qu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Er.subVectors(this.origin,e);const h=f*this.direction.dot(ml.crossVectors(Er,ml));if(h<0)return null;const p=f*this.direction.dot(Xu.cross(Er));if(p<0||h+p>u)return null;const g=-f*Er.dot(qu);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,r,o,l,u,f,h,p,g,x,_,y,M,E,S){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,g,x,_,y,M,E,S)}set(e,t,r,o,l,u,f,h,p,g,x,_,y,M,E,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=h,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=y,v[7]=M,v[11]=E,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),u=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*g,y=u*x,M=f*g,E=f*x;t[0]=h*g,t[4]=-h*x,t[8]=p,t[1]=y+M*p,t[5]=_-E*p,t[9]=-f*h,t[2]=E-_*p,t[6]=M+y*p,t[10]=u*h}else if(e.order==="YXZ"){const _=h*g,y=h*x,M=p*g,E=p*x;t[0]=_+E*f,t[4]=M*f-y,t[8]=u*p,t[1]=u*x,t[5]=u*g,t[9]=-f,t[2]=y*f-M,t[6]=E+_*f,t[10]=u*h}else if(e.order==="ZXY"){const _=h*g,y=h*x,M=p*g,E=p*x;t[0]=_-E*f,t[4]=-u*x,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*g,t[9]=E-_*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const _=u*g,y=u*x,M=f*g,E=f*x;t[0]=h*g,t[4]=M*p-y,t[8]=_*p+E,t[1]=h*x,t[5]=E*p+_,t[9]=y*p-M,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,y=u*p,M=f*h,E=f*p;t[0]=h*g,t[4]=E-_*x,t[8]=M*x+y,t[1]=x,t[5]=u*g,t[9]=-f*g,t[2]=-p*g,t[6]=y*x+M,t[10]=_-E*x}else if(e.order==="XZY"){const _=u*h,y=u*p,M=f*h,E=f*p;t[0]=h*g,t[4]=-x,t[8]=p*g,t[1]=_*x+E,t[5]=u*g,t[9]=y*x-M,t[2]=M*x-y,t[6]=f*g,t[10]=E*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,j_)}lookAt(e,t,r){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Tr.crossVectors(r,Xn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Tr.crossVectors(r,Xn)),Tr.normalize(),xl.crossVectors(Xn,Tr),o[0]=Tr.x,o[4]=xl.x,o[8]=Xn.x,o[1]=Tr.y,o[5]=xl.y,o[9]=Xn.y,o[2]=Tr.z,o[6]=xl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],g=r[1],x=r[5],_=r[9],y=r[13],M=r[2],E=r[6],S=r[10],v=r[14],L=r[3],A=r[7],D=r[11],F=r[15],R=o[0],U=o[4],X=o[8],P=o[12],C=o[1],z=o[5],Q=o[9],ie=o[13],de=o[2],ce=o[6],ue=o[10],J=o[14],O=o[3],ne=o[7],q=o[11],k=o[15];return l[0]=u*R+f*C+h*de+p*O,l[4]=u*U+f*z+h*ce+p*ne,l[8]=u*X+f*Q+h*ue+p*q,l[12]=u*P+f*ie+h*J+p*k,l[1]=g*R+x*C+_*de+y*O,l[5]=g*U+x*z+_*ce+y*ne,l[9]=g*X+x*Q+_*ue+y*q,l[13]=g*P+x*ie+_*J+y*k,l[2]=M*R+E*C+S*de+v*O,l[6]=M*U+E*z+S*ce+v*ne,l[10]=M*X+E*Q+S*ue+v*q,l[14]=M*P+E*ie+S*J+v*k,l[3]=L*R+A*C+D*de+F*O,l[7]=L*U+A*z+D*ce+F*ne,l[11]=L*X+A*Q+D*ue+F*q,l[15]=L*P+A*ie+D*J+F*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],g=e[2],x=e[6],_=e[10],y=e[14],M=e[3],E=e[7],S=e[11],v=e[15];return M*(+l*h*x-o*p*x-l*f*_+r*p*_+o*f*y-r*h*y)+E*(+t*h*y-t*p*_+l*u*_-o*u*y+o*p*g-l*h*g)+S*(+t*p*x-t*f*y-l*u*x+r*u*y+l*f*g-r*p*g)+v*(-o*f*g-t*h*x+t*f*_+o*u*x-r*u*_+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8],x=e[9],_=e[10],y=e[11],M=e[12],E=e[13],S=e[14],v=e[15],L=x*S*p-E*_*p+E*h*y-f*S*y-x*h*v+f*_*v,A=M*_*p-g*S*p-M*h*y+u*S*y+g*h*v-u*_*v,D=g*E*p-M*x*p+M*f*y-u*E*y-g*f*v+u*x*v,F=M*x*h-g*E*h-M*f*_+u*E*_+g*f*S-u*x*S,R=t*L+r*A+o*D+l*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=L*U,e[1]=(E*_*l-x*S*l-E*o*y+r*S*y+x*o*v-r*_*v)*U,e[2]=(f*S*l-E*h*l+E*o*p-r*S*p-f*o*v+r*h*v)*U,e[3]=(x*h*l-f*_*l-x*o*p+r*_*p+f*o*y-r*h*y)*U,e[4]=A*U,e[5]=(g*S*l-M*_*l+M*o*y-t*S*y-g*o*v+t*_*v)*U,e[6]=(M*h*l-u*S*l-M*o*p+t*S*p+u*o*v-t*h*v)*U,e[7]=(u*_*l-g*h*l+g*o*p-t*_*p-u*o*y+t*h*y)*U,e[8]=D*U,e[9]=(M*x*l-g*E*l-M*r*y+t*E*y+g*r*v-t*x*v)*U,e[10]=(u*E*l-M*f*l+M*r*p-t*E*p-u*r*v+t*f*v)*U,e[11]=(g*f*l-u*x*l-g*r*p+t*x*p+u*r*y-t*f*y)*U,e[12]=F*U,e[13]=(g*E*o-M*x*o+M*r*_-t*E*_-g*r*S+t*x*S)*U,e[14]=(M*f*o-u*E*o-M*r*h+t*E*h+u*r*S-t*f*S)*U,e[15]=(u*x*o-g*f*o+g*r*h-t*x*h-u*r*_+t*f*_)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,g=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+r,g*h-o*u,0,p*h-o*f,g*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,g=u+u,x=f+f,_=l*p,y=l*g,M=l*x,E=u*g,S=u*x,v=f*x,L=h*p,A=h*g,D=h*x,F=r.x,R=r.y,U=r.z;return o[0]=(1-(E+v))*F,o[1]=(y+D)*F,o[2]=(M-A)*F,o[3]=0,o[4]=(y-D)*R,o[5]=(1-(_+v))*R,o[6]=(S+L)*R,o[7]=0,o[8]=(M+A)*U,o[9]=(S-L)*U,o[10]=(1-(_+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Fs.set(o[0],o[1],o[2]).length();const u=Fs.set(o[4],o[5],o[6]).length(),f=Fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],hi.copy(this);const p=1/l,g=1/u,x=1/f;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=x,hi.elements[9]*=x,hi.elements[10]*=x,t.setFromRotationMatrix(hi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=bi,h=!1){const p=this.elements,g=2*l/(t-e),x=2*l/(r-o),_=(t+e)/(t-e),y=(r+o)/(r-o);let M,E;if(h)M=l/(u-l),E=u*l/(u-l);else if(f===bi)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===jl)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=bi,h=!1){const p=this.elements,g=2/(t-e),x=2/(r-o),_=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,E;if(h)M=1/(u-l),E=u/(u-l);else if(f===bi)M=-2/(u-l),E=-(u+l)/(u-l);else if(f===jl)M=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new Z,hi=new Mt,W_=new Z(0,0,0),j_=new Z(1,1,1),Tr=new Z,xl=new Z,Xn=new Z,_m=new Mt,vm=new Ki;class gi{constructor(e=0,t=0,r=0,o=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],g=o[9],x=o[2],_=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class L0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const ym=new Z,Os=new Ki,Bi=new Mt,gl=new Z,Ba=new Z,q_=new Z,Y_=new Ki,Sm=new Z(1,0,0),Mm=new Z(0,1,0),Em=new Z(0,0,1),Tm={type:"added"},$_={type:"removed"},ks={type:"childadded",child:null},Yu={type:"childremoved",child:null};class dn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new Z,t=new gi,r=new Ki,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Mt},normalMatrix:{value:new xt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,t){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gl.copy(e):gl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Ba,gl,this.up):Bi.lookAt(gl,Ba,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Bi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),ks.child=e,this.dispatchEvent(ks),ks.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($_),Yu.child=e,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),g=u(e.images),x=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}dn.DEFAULT_UP=new Z(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new Z,zi=new Z,$u=new Z,Vi=new Z,Bs=new Z,zs=new Z,bm=new Z,Ku=new Z,Zu=new Z,Ju=new Z,Qu=new Yt,ef=new Yt,tf=new Yt;class mi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){pi.subVectors(o,t),zi.subVectors(r,t),$u.subVectors(e,t);const u=pi.dot(pi),f=pi.dot(zi),h=pi.dot($u),p=zi.dot(zi),g=zi.dot($u),x=u*p-f*f;if(x===0)return l.set(0,0,0),null;const _=1/x,y=(p*h-f*g)*_,M=(u*g-f*h)*_;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,Vi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Vi.x),h.addScaledVector(u,Vi.y),h.addScaledVector(f,Vi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return Qu.setScalar(0),ef.setScalar(0),tf.setScalar(0),Qu.fromBufferAttribute(e,t),ef.fromBufferAttribute(e,r),tf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qu,l.x),u.addScaledVector(ef,l.y),u.addScaledVector(tf,l.z),u}static isFrontFacing(e,t,r,o){return pi.subVectors(r,t),zi.subVectors(e,t),pi.cross(zi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),pi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Bs.subVectors(o,r),zs.subVectors(l,r),Ku.subVectors(e,r);const h=Bs.dot(Ku),p=zs.dot(Ku);if(h<=0&&p<=0)return t.copy(r);Zu.subVectors(e,o);const g=Bs.dot(Zu),x=zs.dot(Zu);if(g>=0&&x<=g)return t.copy(o);const _=h*x-g*p;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(r).addScaledVector(Bs,u);Ju.subVectors(e,l);const y=Bs.dot(Ju),M=zs.dot(Ju);if(M>=0&&y<=M)return t.copy(l);const E=y*p-h*M;if(E<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(zs,f);const S=g*M-y*x;if(S<=0&&x-g>=0&&y-M>=0)return bm.subVectors(l,o),f=(x-g)/(x-g+(y-M)),t.copy(o).addScaledVector(bm,f);const v=1/(S+E+_);return u=E*v,f=_*v,t.copy(r).addScaledVector(Bs,u).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},_l={h:0,s:0,l:0};function nf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _t{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=U_(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=nf(u,l,e+1/3),this.g=nf(u,l,e),this.b=nf(u,l,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,t=Yn){function r(l){l!==void 0&&parseFloat(l)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const r=N0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Pt.workingToColorSpace(Mn.copy(this),e),Math.round(St(Mn.r*255,0,255))*65536+Math.round(St(Mn.g*255,0,255))*256+Math.round(St(Mn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Mn.copy(this),t);const r=Mn.r,o=Mn.g,l=Mn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const g=(f+u)/2;if(f===u)h=0,p=0;else{const x=u-f;switch(p=g<=.5?x/(u+f):x/(2-u-f),u){case r:h=(o-l)/x+(o<l?6:0);break;case o:h=(l-r)/x+2;break;case l:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Yn){Pt.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,r=Mn.g,o=Mn.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(_l);const r=ku(br.h,_l.h,t),o=ku(br.s,_l.s,t),l=ku(br.l,_l.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new _t;_t.NAMES=N0;let K_=0;class Ci extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=qs,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vf,this.blendDst=yf,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vf&&(r.blendSrc=this.blendSrc),this.blendDst!==yf&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class I0 extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new Z,vl=new pt;let Z_=0;class wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=fm,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Fa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fm&&(e.usage=this.usage),e}}class U0 extends wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class F0 extends wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class en extends wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let J_=0;const ni=new Mt,rf=new dn,Vs=new Z,qn=new Qa,za=new Qa,fn=new Z;class Bn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?F0:U0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,r){return ni.makeTranslation(e,t,r),this.applyMatrix4(ni),this}scale(e,t,r){return ni.makeScale(e,t,r),this.applyMatrix4(ni),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new en(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];za.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(qn.min,za.min),qn.expandByPoint(fn),fn.addVectors(qn.max,za.max),qn.expandByPoint(fn)):(qn.expandByPoint(za.min),qn.expandByPoint(za.max))}qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(fn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)fn.fromBufferAttribute(f,p),h&&(Vs.fromBufferAttribute(e,p),fn.add(Vs)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<r.count;X++)f[X]=new Z,h[X]=new Z;const p=new Z,g=new Z,x=new Z,_=new pt,y=new pt,M=new pt,E=new Z,S=new Z;function v(X,P,C){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,P),x.fromBufferAttribute(r,C),_.fromBufferAttribute(l,X),y.fromBufferAttribute(l,P),M.fromBufferAttribute(l,C),g.sub(p),x.sub(p),y.sub(_),M.sub(_);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(x,-y.y).multiplyScalar(z),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(z),f[X].add(E),f[P].add(E),f[C].add(E),h[X].add(S),h[P].add(S),h[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,P=L.length;X<P;++X){const C=L[X],z=C.start,Q=C.count;for(let ie=z,de=z+Q;ie<de;ie+=3)v(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const A=new Z,D=new Z,F=new Z,R=new Z;function U(X){F.fromBufferAttribute(o,X),R.copy(F);const P=f[X];A.copy(P),A.sub(F.multiplyScalar(F.dot(P))).normalize(),D.crossVectors(R,P);const z=D.dot(h[X])<0?-1:1;u.setXYZW(X,A.x,A.y,A.z,z)}for(let X=0,P=L.length;X<P;++X){const C=L[X],z=C.start,Q=C.count;for(let ie=z,de=z+Q;ie<de;ie+=3)U(e.getX(ie+0)),U(e.getX(ie+1)),U(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const o=new Z,l=new Z,u=new Z,f=new Z,h=new Z,p=new Z,g=new Z,x=new Z;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),g.subVectors(u,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),f.add(g),h.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=t.count;_<y;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),x.subVectors(o,l),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,x=f.normalized,_=new p.constructor(h.length*g);let y=0,M=0;for(let E=0,S=h.length;E<S;E++){f.isInterleavedBufferAttribute?y=h[E]*f.data.stride+f.offset:y=h[E]*g;for(let v=0;v<g;v++)_[M++]=p[y++]}return new wi(_,g,x)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,x=p.length;g<x;g++){const _=p[g],y=e(_,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let x=0,_=p.length;x<_;x++){const y=p[x];g.push(y.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],x=l[p];for(let _=0,y=x.length;_<y;_++)g.push(x[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new Mt,qr=new Zl,yl=new eo,Am=new Z,Sl=new Z,Ml=new Z,El=new Z,sf=new Z,Tl=new Z,Cm=new Z,bl=new Z;class On extends dn{constructor(e=new Bn,t=new I0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Tl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],x=l[h];g!==0&&(sf.fromBufferAttribute(x,e),u?Tl.addScaledVector(sf,g):Tl.addScaledVector(sf.sub(t),g))}t.add(Tl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(l),qr.copy(e.ray).recast(e.near),!(yl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(yl,Am)===null||qr.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(wm.copy(l).invert(),qr.copy(e.ray).applyMatrix4(wm),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],v=u[S.materialIndex],L=Math.max(S.start,y.start),A=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let D=L,F=A;D<F;D+=3){const R=f.getX(D),U=f.getX(D+1),X=f.getX(D+2);o=wl(this,v,e,r,p,g,x,R,U,X),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,v=E;S<v;S+=3){const L=f.getX(S),A=f.getX(S+1),D=f.getX(S+2);o=wl(this,u,e,r,p,g,x,L,A,D),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],v=u[S.materialIndex],L=Math.max(S.start,y.start),A=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let D=L,F=A;D<F;D+=3){const R=D,U=D+1,X=D+2;o=wl(this,v,e,r,p,g,x,R,U,X),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let S=M,v=E;S<v;S+=3){const L=S,A=S+1,D=S+2;o=wl(this,u,e,r,p,g,x,L,A,D),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Q_(s,e,t,r,o,l,u,f){let h;if(e.side===kn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Dr,f),h===null)return null;bl.copy(f),bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(bl);return p<t.near||p>t.far?null:{distance:p,point:bl.clone(),object:s}}function wl(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Sl),s.getVertexPosition(h,Ml),s.getVertexPosition(p,El);const g=Q_(s,e,t,r,Sl,Ml,El,Cm);if(g){const x=new Z;mi.getBarycoord(Cm,Sl,Ml,El,x),o&&(g.uv=mi.getInterpolatedAttribute(o,f,h,p,x,new pt)),l&&(g.uv1=mi.getInterpolatedAttribute(l,f,h,p,x,new pt)),u&&(g.normal=mi.getInterpolatedAttribute(u,f,h,p,x,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:p,normal:new Z,materialIndex:0};mi.getNormal(Sl,Ml,El,_.normal),g.face=_,g.barycoord=x}return g}class is extends Bn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],g=[],x=[];let _=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(x,2));function M(E,S,v,L,A,D,F,R,U,X,P){const C=D/U,z=F/X,Q=D/2,ie=F/2,de=R/2,ce=U+1,ue=X+1;let J=0,O=0;const ne=new Z;for(let q=0;q<ue;q++){const k=q*z-ie;for(let re=0;re<ce;re++){const Le=re*C-Q;ne[E]=Le*L,ne[S]=k*A,ne[v]=de,p.push(ne.x,ne.y,ne.z),ne[E]=0,ne[S]=0,ne[v]=R>0?1:-1,g.push(ne.x,ne.y,ne.z),x.push(re/U),x.push(1-q/X),J+=1}}for(let q=0;q<X;q++)for(let k=0;k<U;k++){const re=_+k+ce*q,Le=_+k+ce*(q+1),xe=_+(k+1)+ce*(q+1),Pe=_+(k+1)+ce*q;h.push(re,Le,Pe),h.push(Le,xe,Pe),O+=6}f.addGroup(y,O,P),y+=O,_+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const r=Qs(s[t]);for(const o in r)e[o]=r[o]}return e}function ev(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function O0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const tv={clone:Qs,merge:wn};var nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class k0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new Z,Rm=new pt,Pm=new pt;class ri extends k0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,Rm,Pm),t.subVectors(Pm,Rm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Gs=1;class rv extends dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(Hs,Gs,e,t);o.layers=this.layers,this.add(o);const l=new ri(Hs,Gs,e,t);l.layers=this.layers,this.add(l);const u=new ri(Hs,Gs,e,t);u.layers=this.layers,this.add(u);const f=new ri(Hs,Gs,e,t);f.layers=this.layers,this.add(f);const h=new ri(Hs,Gs,e,t);h.layers=this.layers,this.add(h);const p=new ri(Hs,Gs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(x,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class B0 extends An{constructor(e=[],t=Ks,r,o,l,u,f,h,p,g){super(e,t,r,o,l,u,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sv extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new B0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new is(5,5,5),l=new Zi({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Yi});l.uniforms.tEquirect.value=t;const u=new On(o,l),f=t.minFilter;return t.minFilter===Qr&&(t.minFilter=si),new rv(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class es extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const av={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),v=this._getHandJoint(p,E);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),y=.02,M=.005;p.inputState.pinching&&_>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(av)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new es;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class ov extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lv extends An{constructor(e=null,t=1,r=1,o,l,u,f,h,p=$n,g=$n,x,_){super(null,u,f,h,p,g,o,l,x,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=new Z,cv=new Z,uv=new xt;class Ar{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=of.subVectors(r,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(of),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||uv.getNormalMatrix(e),o=this.coplanarPoint(of).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new eo,fv=new pt(.5,.5),Al=new Z;class bd{constructor(e=new Ar,t=new Ar,r=new Ar,o=new Ar,l=new Ar,u=new Ar){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=bi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],g=l[4],x=l[5],_=l[6],y=l[7],M=l[8],E=l[9],S=l[10],v=l[11],L=l[12],A=l[13],D=l[14],F=l[15];if(o[0].setComponents(p-u,y-g,v-M,F-L).normalize(),o[1].setComponents(p+u,y+g,v+M,F+L).normalize(),o[2].setComponents(p+f,y+x,v+E,F+A).normalize(),o[3].setComponents(p-f,y-x,v-E,F-A).normalize(),r)o[4].setComponents(h,_,S,D).normalize(),o[5].setComponents(p-h,y-_,v-S,F-D).normalize();else if(o[4].setComponents(p-h,y-_,v-S,F-D).normalize(),t===bi)o[5].setComponents(p+h,y+_,v+S,F+D).normalize();else if(t===jl)o[5].setComponents(h,_,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const t=fv.distanceTo(e.center);return Yr.radius=.7071067811865476+t,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Al.x=o.normal.x>0?e.max.x:e.min.x,Al.y=o.normal.y>0?e.max.y:e.min.y,Al.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xa extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new Z,Yl=new Z,Dm=new Mt,Va=new Zl,Cl=new eo,lf=new Z,Lm=new Z;class dv extends dn{constructor(e=new Bn,t=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)ql.fromBufferAttribute(t,o-1),Yl.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=ql.distanceTo(Yl);e.setAttribute("lineDistance",new en(r,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(o),Cl.radius+=l,e.ray.intersectsSphere(Cl)===!1)return;Dm.copy(o).invert(),Va.copy(e.ray).applyMatrix4(Dm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=p){const v=g.getX(E),L=g.getX(E+1),A=Rl(this,e,Va,h,v,L,E);A&&t.push(A)}if(this.isLineLoop){const E=g.getX(M-1),S=g.getX(y),v=Rl(this,e,Va,h,E,S,M-1);v&&t.push(v)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=p){const v=Rl(this,e,Va,h,E,E+1,E);v&&t.push(v)}if(this.isLineLoop){const E=Rl(this,e,Va,h,M-1,y,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Rl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(ql.fromBufferAttribute(f,o),Yl.fromBufferAttribute(f,l),t.distanceSqToSegment(ql,Yl,lf,Lm)>r)return;lf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(lf);if(!(p<e.near||p>e.far))return{distance:p,point:Lm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Nm=new Z,Im=new Z;class od extends dv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Nm.fromBufferAttribute(t,o),Im.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Nm.distanceTo(Im);e.setAttribute("lineDistance",new en(r,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wa extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new Mt,ld=new Zl,Pl=new eo,Dl=new Z;class cf extends dn{constructor(e=new Bn,t=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(o),Pl.radius+=l,e.ray.intersectsSphere(Pl)===!1)return;Um.copy(o).invert(),ld.copy(e.ray).applyMatrix4(Um);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,x=r.attributes.position;if(p!==null){const _=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let M=_,E=y;M<E;M++){const S=p.getX(M);Dl.fromBufferAttribute(x,S),Fm(Dl,S,h,o,e,t,this)}}else{const _=Math.max(0,u.start),y=Math.min(x.count,u.start+u.count);for(let M=_,E=y;M<E;M++)Dl.fromBufferAttribute(x,M),Fm(Dl,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Fm(s,e,t,r,o,l,u){const f=ld.distanceSqToPoint(s);if(f<t){const h=new Z;ld.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class z0 extends An{constructor(e,t,r=ts,o,l,u,f=$n,h=$n,p,g=$a,x=1){if(g!==$a&&g!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:x};super(_,o,l,u,f,h,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Td(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class V0 extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jl extends Bn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,g=h+1,x=e/f,_=t/h,y=[],M=[],E=[],S=[];for(let v=0;v<g;v++){const L=v*_-u;for(let A=0;A<p;A++){const D=A*x-l;M.push(D,-L,0),E.push(0,0,1),S.push(A/f),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<f;L++){const A=L+p*v,D=L+p*(v+1),F=L+1+p*(v+1),R=L+1+p*v;y.push(A,D,R),y.push(D,F,R)}this.setIndex(y),this.setAttribute("position",new en(M,3)),this.setAttribute("normal",new en(E,3)),this.setAttribute("uv",new en(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class wd extends Bn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const g=[],x=new Z,_=new Z,y=[],M=[],E=[],S=[];for(let v=0;v<=r;v++){const L=[],A=v/r;let D=0;v===0&&u===0?D=.5/t:v===r&&h===Math.PI&&(D=-.5/t);for(let F=0;F<=t;F++){const R=F/t;x.x=-e*Math.cos(o+R*l)*Math.sin(u+A*f),x.y=e*Math.cos(u+A*f),x.z=e*Math.sin(o+R*l)*Math.sin(u+A*f),M.push(x.x,x.y,x.z),_.copy(x).normalize(),E.push(_.x,_.y,_.z),S.push(R+D,1-A),L.push(p++)}g.push(L)}for(let v=0;v<r;v++)for(let L=0;L<t;L++){const A=g[v][L+1],D=g[v][L],F=g[v+1][L],R=g[v+1][L+1];(v!==0||u>0)&&y.push(A,D,R),(v!==r-1||h<Math.PI)&&y.push(D,F,R)}this.setIndex(y),this.setAttribute("position",new en(M,3)),this.setAttribute("normal",new en(E,3)),this.setAttribute("uv",new en(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hl extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ed,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hv extends Ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ed,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pv extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mv extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Om={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class xv{constructor(e,t,r){const o=this;let l=!1,u=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=p.length;x<_;x+=2){const y=p[x],M=p[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gv=new xv;class Ad{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ad.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class _v extends Error{constructor(e,t){super(e),this.response=t}}class vv extends Ad{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Om.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:r,onError:o});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:r,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,h=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&ut("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=Hi[e],x=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let E=0;const S=new ReadableStream({start(v){L();function L(){x.read().then(({done:A,value:D})=>{if(A)v.close();else{E+=D.byteLength;const F=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let R=0,U=g.length;R<U;R++){const X=g[R];X.onProgress&&X.onProgress(F)}v.enqueue(D),L()}},A=>{v.error(A)})}}});return new Response(S)}else throw new _v(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return p.json();default:if(f==="")return p.text();{const x=/charset="?([^;"\s]*)"?/i.exec(f),_=x&&x[1]?x[1].toLowerCase():void 0,y=new TextDecoder(_);return p.arrayBuffer().then(M=>y.decode(M))}}}).then(p=>{Om.add(`file:${e}`,p);const g=Hi[e];delete Hi[e];for(let x=0,_=g.length;x<_;x++){const y=g[x];y.onLoad&&y.onLoad(p)}}).catch(p=>{const g=Hi[e];if(g===void 0)throw this.manager.itemError(e),p;delete Hi[e];for(let x=0,_=g.length;x<_;x++){const y=g[x];y.onError&&y.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class H0 extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const uf=new Mt,km=new Z,Bm=new Z;class yv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;km.setFromMatrixPosition(e.matrixWorld),t.position.copy(km),Bm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bm),t.updateMatrixWorld(),uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class G0 extends k0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sv extends yv{constructor(){super(new G0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mv extends H0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Sv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ev extends H0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tv extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zm{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=St(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bv extends od{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new Bn;o.setAttribute("position",new en(t,3)),o.setAttribute("color",new en(r,3));const l=new Xa({vertexColors:!0,toneMapped:!1});super(o,l),this.type="AxesHelper"}setColors(e,t,r){const o=new _t,l=this.geometry.attributes.color.array;return o.set(e),o.toArray(l,0),o.toArray(l,3),o.set(t),o.toArray(l,6),o.toArray(l,9),o.set(r),o.toArray(l,12),o.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wv extends rs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ut("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vm(s,e,t,r){const o=Av(r);switch(t){case w0:return s*e;case C0:return s*e/o.components*o.byteLength;case vd:return s*e/o.components*o.byteLength;case yd:return s*e*2/o.components*o.byteLength;case Sd:return s*e*2/o.components*o.byteLength;case A0:return s*e*3/o.components*o.byteLength;case xi:return s*e*4/o.components*o.byteLength;case Md:return s*e*4/o.components*o.byteLength;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:case Uf:return Math.max(s,16)*Math.max(e,8)/4;case Lf:case If:return Math.max(s,8)*Math.max(e,8)/2;case Ff:case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qf:case ed:case td:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nd:case id:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rd:case sd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Av(s){switch(s){case Ai:case M0:return{byteLength:1,components:1};case qa:case E0:case ea:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case ts:case xd:case qi:return{byteLength:4,components:1};case T0:case b0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Cv(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,p,g),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,p){const g=h.array,x=h.updateRanges;if(s.bindBuffer(p,f),x.length===0)s.bufferSubData(p,0,g);else{x.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<x.length;y++){const M=x[_],E=x[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,x[_]=E)}x.length=_+1;for(let y=0,M=x.length;y<M;y++){const E=x[y];s.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var Rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ey=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,My=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ay=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ky=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ES=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,US=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Rv,alphahash_pars_fragment:Pv,alphamap_fragment:Dv,alphamap_pars_fragment:Lv,alphatest_fragment:Nv,alphatest_pars_fragment:Iv,aomap_fragment:Uv,aomap_pars_fragment:Fv,batching_pars_vertex:Ov,batching_vertex:kv,begin_vertex:Bv,beginnormal_vertex:zv,bsdfs:Vv,iridescence_fragment:Hv,bumpmap_pars_fragment:Gv,clipping_planes_fragment:Wv,clipping_planes_pars_fragment:jv,clipping_planes_pars_vertex:Xv,clipping_planes_vertex:qv,color_fragment:Yv,color_pars_fragment:$v,color_pars_vertex:Kv,color_vertex:Zv,common:Jv,cube_uv_reflection_fragment:Qv,defaultnormal_vertex:ey,displacementmap_pars_vertex:ty,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:ry,colorspace_fragment:sy,colorspace_pars_fragment:ay,envmap_fragment:oy,envmap_common_pars_fragment:ly,envmap_pars_fragment:cy,envmap_pars_vertex:uy,envmap_physical_pars_fragment:Sy,envmap_vertex:fy,fog_vertex:dy,fog_pars_vertex:hy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:xy,lightmap_pars_fragment:gy,lights_lambert_fragment:_y,lights_lambert_pars_fragment:vy,lights_pars_begin:yy,lights_toon_fragment:My,lights_toon_pars_fragment:Ey,lights_phong_fragment:Ty,lights_phong_pars_fragment:by,lights_physical_fragment:wy,lights_physical_pars_fragment:Ay,lights_fragment_begin:Cy,lights_fragment_maps:Ry,lights_fragment_end:Py,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Ny,logdepthbuf_vertex:Iy,map_fragment:Uy,map_pars_fragment:Fy,map_particle_fragment:Oy,map_particle_pars_fragment:ky,metalnessmap_fragment:By,metalnessmap_pars_fragment:zy,morphinstance_vertex:Vy,morphcolor_vertex:Hy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Wy,morphtarget_vertex:jy,normal_fragment_begin:Xy,normal_fragment_maps:qy,normal_pars_fragment:Yy,normal_pars_vertex:$y,normal_vertex:Ky,normalmap_pars_fragment:Zy,clearcoat_normal_fragment_begin:Jy,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:aS,dithering_pars_fragment:oS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:fS,shadowmap_vertex:dS,shadowmask_pars_fragment:hS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:xS,skinnormal_vertex:gS,specularmap_fragment:_S,specularmap_pars_fragment:vS,tonemapping_fragment:yS,tonemapping_pars_fragment:SS,transmission_fragment:MS,transmission_pars_fragment:ES,uv_pars_fragment:TS,uv_pars_vertex:bS,uv_vertex:wS,worldpos_vertex:AS,background_vert:CS,background_frag:RS,backgroundCube_vert:PS,backgroundCube_frag:DS,cube_vert:LS,cube_frag:NS,depth_vert:IS,depth_frag:US,distanceRGBA_vert:FS,distanceRGBA_frag:OS,equirect_vert:kS,equirect_frag:BS,linedashed_vert:zS,linedashed_frag:VS,meshbasic_vert:HS,meshbasic_frag:GS,meshlambert_vert:WS,meshlambert_frag:jS,meshmatcap_vert:XS,meshmatcap_frag:qS,meshnormal_vert:YS,meshnormal_frag:$S,meshphong_vert:KS,meshphong_frag:ZS,meshphysical_vert:JS,meshphysical_frag:QS,meshtoon_vert:eM,meshtoon_frag:tM,points_vert:nM,points_frag:iM,shadow_vert:rM,shadow_frag:sM,sprite_vert:aM,sprite_frag:oM},Ie={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ti={basic:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:wn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:wn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:wn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:wn([Ie.points,Ie.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:wn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:wn([Ie.common,Ie.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:wn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:wn([Ie.sprite,Ie.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:wn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:wn([Ie.lights,Ie.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ti.physical={uniforms:wn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ll={r:0,b:0,g:0},$r=new gi,lM=new Mt;function cM(s,e,t,r,o,l,u){const f=new _t(0);let h=l===!0?0:1,p,g,x=null,_=0,y=null;function M(A){let D=A.isScene===!0?A.background:null;return D&&D.isTexture&&(D=(A.backgroundBlurriness>0?t:e).get(D)),D}function E(A){let D=!1;const F=M(A);F===null?v(f,h):F&&F.isColor&&(v(F,1),D=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,u):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(A,D){const F=M(D);F&&(F.isCubeTexture||F.mapping===Kl)?(g===void 0&&(g=new On(new is(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Qs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(R,U,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),$r.copy(D.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(lM.makeRotationFromEuler($r)),g.material.toneMapped=Pt.getTransfer(F.colorSpace)!==Ut,(x!==F||_!==F.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=F,_=F.version,y=s.toneMapping),g.layers.enableAll(),A.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new On(new Jl(2,2),new Zi({name:"BackgroundMaterial",uniforms:Qs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(F.colorSpace)!==Ut,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||_!==F.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,x=F,_=F.version,y=s.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function v(A,D){A.getRGB(Ll,O0(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,D,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,D=1){f.set(A),h=D,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,v(f,h)},render:E,addToRenderList:S,dispose:L}}function uM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function f(C,z,Q,ie,de){let ce=!1;const ue=x(ie,Q,z);l!==ue&&(l=ue,p(l.object)),ce=y(C,ie,Q,de),ce&&M(C,ie,Q,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,D(C,z,Q,ie),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,z,Q){const ie=Q.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let ce=de[z.id];ce===void 0&&(ce={},de[z.id]=ce);let ue=ce[ie];return ue===void 0&&(ue=_(h()),ce[ie]=ue),ue}function _(C){const z=[],Q=[],ie=[];for(let de=0;de<t;de++)z[de]=0,Q[de]=0,ie[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:ie,object:C,attributes:{},index:null}}function y(C,z,Q,ie){const de=l.attributes,ce=z.attributes;let ue=0;const J=Q.getAttributes();for(const O in J)if(J[O].location>=0){const q=de[O];let k=ce[O];if(k===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),q===void 0||q.attribute!==k||k&&q.data!==k.data)return!0;ue++}return l.attributesNum!==ue||l.index!==ie}function M(C,z,Q,ie){const de={},ce=z.attributes;let ue=0;const J=Q.getAttributes();for(const O in J)if(J[O].location>=0){let q=ce[O];q===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));const k={};k.attribute=q,q&&q.data&&(k.data=q.data),de[O]=k,ue++}l.attributes=de,l.attributesNum=ue,l.index=ie}function E(){const C=l.newAttributes;for(let z=0,Q=C.length;z<Q;z++)C[z]=0}function S(C){v(C,0)}function v(C,z){const Q=l.newAttributes,ie=l.enabledAttributes,de=l.attributeDivisors;Q[C]=1,ie[C]===0&&(s.enableVertexAttribArray(C),ie[C]=1),de[C]!==z&&(s.vertexAttribDivisor(C,z),de[C]=z)}function L(){const C=l.newAttributes,z=l.enabledAttributes;for(let Q=0,ie=z.length;Q<ie;Q++)z[Q]!==C[Q]&&(s.disableVertexAttribArray(Q),z[Q]=0)}function A(C,z,Q,ie,de,ce,ue){ue===!0?s.vertexAttribIPointer(C,z,Q,de,ce):s.vertexAttribPointer(C,z,Q,ie,de,ce)}function D(C,z,Q,ie){E();const de=ie.attributes,ce=Q.getAttributes(),ue=z.defaultAttributeValues;for(const J in ce){const O=ce[J];if(O.location>=0){let ne=de[J];if(ne===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor)),ne!==void 0){const q=ne.normalized,k=ne.itemSize,re=e.get(ne);if(re===void 0)continue;const Le=re.buffer,xe=re.type,Pe=re.bytesPerElement,ee=xe===s.INT||xe===s.UNSIGNED_INT||ne.gpuType===xd;if(ne.isInterleavedBufferAttribute){const le=ne.data,_e=le.stride,Fe=ne.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<O.locationSize;Oe++)v(O.location+Oe,le.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<O.locationSize;Oe++)S(O.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Oe=0;Oe<O.locationSize;Oe++)A(O.location+Oe,k/O.locationSize,xe,q,_e*Pe,(Fe+k/O.locationSize*Oe)*Pe,ee)}else{if(ne.isInstancedBufferAttribute){for(let le=0;le<O.locationSize;le++)v(O.location+le,ne.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<O.locationSize;le++)S(O.location+le);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let le=0;le<O.locationSize;le++)A(O.location+le,k/O.locationSize,xe,q,k*Pe,k/O.locationSize*le*Pe,ee)}}else if(ue!==void 0){const q=ue[J];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(O.location,q);break;case 3:s.vertexAttrib3fv(O.location,q);break;case 4:s.vertexAttrib4fv(O.location,q);break;default:s.vertexAttrib1fv(O.location,q)}}}}L()}function F(){X();for(const C in r){const z=r[C];for(const Q in z){const ie=z[Q];for(const de in ie)g(ie[de].object),delete ie[de];delete z[Q]}delete r[C]}}function R(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const Q in z){const ie=z[Q];for(const de in ie)g(ie[de].object),delete ie[de];delete z[Q]}delete r[C.id]}function U(C){for(const z in r){const Q=r[z];if(Q[C.id]===void 0)continue;const ie=Q[C.id];for(const de in ie)g(ie[de].object),delete ie[de];delete Q[C.id]}}function X(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:X,resetDefaultState:P,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function fM(s,e,t){let r;function o(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function u(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),t.update(g,r,x))}function f(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let y=0;for(let M=0;M<x;M++)y+=g[M];t.update(y,r,1)}function h(p,g,x,_){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],g[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,x);let M=0;for(let E=0;E<x;E++)M+=g[E]*_[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function dM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==xi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const X=U===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Ai&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==qi&&!X)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(ut("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:A,maxFragmentUniforms:D,vertexTextures:F,maxSamples:R}}function hM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ar,f=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||r!==0||o;return o=_,r=x.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=g(x,_,0)},this.setState=function(x,_,y){const M=x.clippingPlanes,E=x.clipIntersection,S=x.clipShadows,v=s.get(x);if(!o||M===null||M.length===0||l&&!S)l?g(null):p();else{const L=l?0:r,A=L*4;let D=v.clippingState||null;h.value=D,D=g(M,_,A,y);for(let F=0;F!==A;++F)D[F]=t[F];v.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,_,y,M){const E=x!==null?x.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const v=y+E*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let A=0,D=y;A!==E;++A,D+=4)u.copy(x[A]).applyMatrix4(L,f),u.normal.toArray(S,D),S[D+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function pM(s){let e=new WeakMap;function t(u,f){return f===Cf?u.mapping=Ks:f===Rf&&(u.mapping=Zs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Cf||f===Rf)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new sv(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Rr=4,Hm=[.125,.215,.35,.446,.526,.582],Jr=20,mM=256,Ha=new G0,Gm=new _t;let ff=null,df=0,hf=0,pf=!1;const xM=new Z;class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=xM}=l;ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,df,hf),this._renderer.xr.enabled=pf,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:si,minFilter:si,generateMipmaps:!1,type:ea,format:xi,colorSpace:Js,depthBuffer:!1},o=jm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gM(l)),this._blurMaterial=vM(l,e,t),this._ggxMaterial=_M(l,e,t)}return o}_compileMaterial(e){const t=new On(new Bn,e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,r,o,l){const h=new ri(90,1,t,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(Gm),x.toneMapping=Pr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new is,new I0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let v=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,v=!0):(S.color.copy(Gm),v=!0);for(let A=0;A<6;A++){const D=A%3;D===0?(h.up.set(0,p[A],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[A],l.y,l.z)):D===1?(h.up.set(0,0,p[A]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[A],l.z)):(h.up.set(0,p[A],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[A]));const F=this._cubeSize;Ws(o,D*F,A>2?F:0,F,F),x.setRenderTarget(o),v&&x.render(E,h),x.render(e,h)}x.toneMapping=y,x.autoClear=_,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ks||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ws(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,Ha)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,y=x*_,{_lodMax:M}=this,E=this._sizeLods[r],S=3*E*(r>M-Rr?r-M+Rr:0),v=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=M-t,Ws(l,S,v,3*E,2*E),o.setRenderTarget(l),o.render(f,Ha),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-r,Ws(e,S,v,3*E,2*E),o.setRenderTarget(e),o.render(f,Ha)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=p;const _=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Jr-1),E=l/M,S=isFinite(l)?1+Math.floor(g*E):Jr;S>Jr&&ut(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Jr}`);const v=[];let L=0;for(let U=0;U<Jr;++U){const X=U/E,P=Math.exp(-X*X/2);v.push(P),U===0?L+=P:U<S&&(L+=2*P)}for(let U=0;U<v.length;U++)v[U]=v[U]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:A}=this;_.dTheta.value=M,_.mipInt.value=A-r;const D=this._sizeLods[o],F=3*D*(o>A-Rr?o-A+Rr:0),R=4*(this._cubeSize-D);Ws(t,F,R,3*D,2*D),h.setRenderTarget(t),h.render(x,Ha)}}function gM(s){const e=[],t=[],r=[];let o=s;const l=s-Rr+1+Hm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Rr?h=Hm[u-s+Rr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,M=6,E=3,S=2,v=1,L=new Float32Array(E*M*y),A=new Float32Array(S*M*y),D=new Float32Array(v*M*y);for(let R=0;R<y;R++){const U=R%3*2/3-1,X=R>2?0:-1,P=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];L.set(P,E*M*R),A.set(_,S*M*R);const C=[R,R,R,R,R,R];D.set(C,v*M*R)}const F=new Bn;F.setAttribute("position",new wi(L,E)),F.setAttribute("uv",new wi(A,S)),F.setAttribute("faceIndex",new wi(D,v)),r.push(new On(F,null)),o>Rr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function jm(s,e,t){const r=new ns(s,e,t);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ws(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function _M(s,e,t){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function vM(s,e,t){const r=new Float32Array(Jr),o=new Z(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Xm(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function qm(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Cf||h===Rf,g=h===Ks||h===Zs;if(p||g){let x=e.get(f);const _=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new Wm(s)),x=p?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const y=f.image;return p&&y&&y.height>0||g&&y&&o(y)?(t===null&&(t=new Wm(s)),x=p?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function o(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function SM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Za("WebGLRenderer: "+r+" extension not supported."),o}}}function MM(s,e,t,r){const o={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const y=l.get(_);y&&(e.remove(y),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(x,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function h(x){const _=x.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function p(x){const _=[],y=x.index,M=x.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let A=0,D=L.length;A<D;A+=3){const F=L[A+0],R=L[A+1],U=L[A+2];_.push(F,R,R,U,U,F)}}else if(M!==void 0){const L=M.array;E=M.version;for(let A=0,D=L.length/3-1;A<D;A+=3){const F=A+0,R=A+1,U=A+2;_.push(F,R,R,U,U,F)}}else return;const S=new(P0(_)?F0:U0)(_,1);S.version=E;const v=l.get(x);v&&e.remove(v),l.set(x,S)}function g(x){const _=l.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:g}}function EM(s,e,t){let r;function o(_){r=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,y){s.drawElements(r,y,l,_*u),t.update(y,r,1)}function p(_,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,_*u,M),t.update(y,r,M))}function g(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,_,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];t.update(S,r,1)}function x(_,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<_.length;v++)p(_[v]/u,y[v],E[v]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,_,0,E,0,M);let v=0;for(let L=0;L<M;L++)v+=y[L]*E[L];t.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function TM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Kt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function bM(s,e,t){const r=new WeakMap,o=new Yt;function l(u,f,h){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(f);if(_===void 0||_.count!==x){let C=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var y=C;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let D=0;M===!0&&(D=1),E===!0&&(D=2),S===!0&&(D=3);let F=f.attributes.position.count*D,R=1;F>e.maxTextureSize&&(R=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const U=new Float32Array(F*R*4*x),X=new D0(U,F,R,x);X.type=qi,X.needsUpdate=!0;const P=D*4;for(let z=0;z<x;z++){const Q=v[z],ie=L[z],de=A[z],ce=F*R*4*z;for(let ue=0;ue<Q.count;ue++){const J=ue*P;M===!0&&(o.fromBufferAttribute(Q,ue),U[ce+J+0]=o.x,U[ce+J+1]=o.y,U[ce+J+2]=o.z,U[ce+J+3]=0),E===!0&&(o.fromBufferAttribute(ie,ue),U[ce+J+4]=o.x,U[ce+J+5]=o.y,U[ce+J+6]=o.z,U[ce+J+7]=0),S===!0&&(o.fromBufferAttribute(de,ue),U[ce+J+8]=o.x,U[ce+J+9]=o.y,U[ce+J+10]=o.z,U[ce+J+11]=de.itemSize===4?o.w:1)}}_={count:x,texture:X,size:new pt(F,R)},r.set(f,_),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const E=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function wM(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,x=e.get(h,g);if(o.get(x)!==p&&(e.update(x),o.set(x,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return x}function u(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const j0=new An,Ym=new z0(1,1),X0=new D0,q0=new H_,Y0=new B0,$m=[],Km=[],Zm=new Float32Array(16),Jm=new Float32Array(9),Qm=new Float32Array(4);function ta(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=$m[o];if(l===void 0&&(l=new Float32Array(o),$m[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ec(s,e){let t=Km[e];t===void 0&&(t=new Int32Array(e),Km[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function AM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function DM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;Qm.set(r),s.uniformMatrix2fv(this.addr,!1,Qm),on(t,r)}}function LM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;Jm.set(r),s.uniformMatrix3fv(this.addr,!1,Jm),on(t,r)}}function NM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;Zm.set(r),s.uniformMatrix4fv(this.addr,!1,Zm),on(t,r)}}function IM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function kM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function HM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Ym.compareFunction=R0,l=Ym):l=j0,t.setTexture2D(e||l,o)}function GM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||q0,o)}function WM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Y0,o)}function jM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||X0,o)}function XM(s){switch(s){case 5126:return AM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return DM;case 35675:return LM;case 35676:return NM;case 5124:case 35670:return IM;case 35667:case 35671:return UM;case 35668:case 35672:return FM;case 35669:case 35673:return OM;case 5125:return kM;case 36294:return BM;case 36295:return zM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return jM}}function qM(s,e){s.uniform1fv(this.addr,e)}function YM(s,e){const t=ta(e,this.size,2);s.uniform2fv(this.addr,t)}function $M(s,e){const t=ta(e,this.size,3);s.uniform3fv(this.addr,t)}function KM(s,e){const t=ta(e,this.size,4);s.uniform4fv(this.addr,t)}function ZM(s,e){const t=ta(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function JM(s,e){const t=ta(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function QM(s,e){const t=ta(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function e1(s,e){s.uniform1iv(this.addr,e)}function t1(s,e){s.uniform2iv(this.addr,e)}function n1(s,e){s.uniform3iv(this.addr,e)}function i1(s,e){s.uniform4iv(this.addr,e)}function r1(s,e){s.uniform1uiv(this.addr,e)}function s1(s,e){s.uniform2uiv(this.addr,e)}function a1(s,e){s.uniform3uiv(this.addr,e)}function o1(s,e){s.uniform4uiv(this.addr,e)}function l1(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||j0,l[u])}function c1(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||q0,l[u])}function u1(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Y0,l[u])}function f1(s,e,t){const r=this.cache,o=e.length,l=ec(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||X0,l[u])}function d1(s){switch(s){case 5126:return qM;case 35664:return YM;case 35665:return $M;case 35666:return KM;case 35674:return ZM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return s1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}class h1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=XM(t.type)}}class p1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d1(t.type)}}class m1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const mf=/(\w+)(\])?(\[|\.)?/g;function e0(s,e){s.seq.push(e),s.map[e.id]=e}function x1(s,e,t){const r=s.name,o=r.length;for(mf.lastIndex=0;;){const l=mf.exec(r),u=mf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){e0(t,p===void 0?new h1(f,s,e):new p1(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new m1(f),e0(t,x)),t=x}}}class Gl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);x1(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function t0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const g1=37297;let _1=0;function v1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const n0=new xt;function y1(s){Pt._getMatrix(n0,Pt.workingColorSpace,s);const e=`mat3( ${n0.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Wl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function i0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+v1(s.getShaderSource(e),f)}else return l}function S1(s,e){const t=y1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function M1(s,e){let t;switch(e){case m_:t="Linear";break;case x_:t="Reinhard";break;case g_:t="Cineon";break;case __:t="ACESFilmic";break;case y_:t="AgX";break;case S_:t="Neutral";break;case v_:t="Custom";break;default:ut("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nl=new Z;function E1(){Pt.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function b1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function w1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ja(s){return s!==""}function r0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A1=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(s){return s.replace(A1,R1)}const C1=new Map;function R1(s,e){let t=gt[e];if(t===void 0){const r=C1.get(e);if(r!==void 0)t=gt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return cd(t)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(s){return s.replace(P1,D1)}function D1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function o0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===y0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function N1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function U1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case h_:e="ENVMAP_BLENDING_MIX";break;case p_:e="ENVMAP_BLENDING_ADD";break}return e}function F1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function O1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=L1(t),p=N1(t),g=I1(t),x=U1(t),_=F1(t),y=T1(t),M=b1(l),E=o.createProgram();let S,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ja).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ja).join(`
`),v.length>0&&(v+=`
`)):(S=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),v=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?gt.tonemapping_pars_fragment:"",t.toneMapping!==Pr?M1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,S1("linearToOutputTexel",t.outputColorSpace),E1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),u=cd(u),u=r0(u,t),u=s0(u,t),f=cd(f),f=r0(f,t),f=s0(f,t),u=a0(u),f=a0(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const A=L+S+u,D=L+v+f,F=t0(o,o.VERTEX_SHADER,A),R=t0(o,o.FRAGMENT_SHADER,D);o.attachShader(E,F),o.attachShader(E,R),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(z){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(E)||"",ie=o.getShaderInfoLog(F)||"",de=o.getShaderInfoLog(R)||"",ce=Q.trim(),ue=ie.trim(),J=de.trim();let O=!0,ne=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,F,R);else{const q=i0(o,F,"vertex"),k=i0(o,R,"fragment");Kt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ce+`
`+q+`
`+k)}else ce!==""?ut("WebGLProgram: Program Info Log:",ce):(ue===""||J==="")&&(ne=!1);ne&&(z.diagnostics={runnable:O,programLog:ce,vertexShader:{log:ue,prefix:S},fragmentShader:{log:J,prefix:v}})}o.deleteShader(F),o.deleteShader(R),X=new Gl(o,E),P=w1(o,E)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(E,g1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=F,this.fragmentShader=R,this}let k1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new z1(e),t.set(e,r)),r}}class z1{constructor(e){this.id=k1++,this.code=e,this.usedTimes=0}}function V1(s,e,t,r,o,l,u){const f=new L0,h=new B1,p=new Set,g=[],x=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return p.add(P),P===0?"uv":`uv${P}`}function S(P,C,z,Q,ie){const de=Q.fog,ce=ie.geometry,ue=P.isMeshStandardMaterial?Q.environment:null,J=(P.isMeshStandardMaterial?t:e).get(P.envMap||ue),O=J&&J.mapping===Kl?J.image.height:null,ne=M[P.type];P.precision!==null&&(y=o.getMaxPrecision(P.precision),y!==P.precision&&ut("WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const q=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,k=q!==void 0?q.length:0;let re=0;ce.morphAttributes.position!==void 0&&(re=1),ce.morphAttributes.normal!==void 0&&(re=2),ce.morphAttributes.color!==void 0&&(re=3);let Le,xe,Pe,ee;if(ne){const wt=Ti[ne];Le=wt.vertexShader,xe=wt.fragmentShader}else Le=P.vertexShader,xe=P.fragmentShader,h.update(P),Pe=h.getVertexShaderID(P),ee=h.getFragmentShaderID(P);const le=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Fe=ie.isInstancedMesh===!0,Oe=ie.isBatchedMesh===!0,at=!!P.map,Xt=!!P.matcap,ft=!!J,Dt=!!P.aoMap,B=!!P.lightMap,mt=!!P.bumpMap,dt=!!P.normalMap,bt=!!P.displacementMap,Ae=!!P.emissiveMap,Et=!!P.metalnessMap,Be=!!P.roughnessMap,Qe=P.anisotropy>0,N=P.clearcoat>0,b=P.dispersion>0,$=P.iridescence>0,fe=P.sheen>0,pe=P.transmission>0,oe=Qe&&!!P.anisotropyMap,qe=N&&!!P.clearcoatMap,Re=N&&!!P.clearcoatNormalMap,Ye=N&&!!P.clearcoatRoughnessMap,je=$&&!!P.iridescenceMap,ve=$&&!!P.iridescenceThicknessMap,Ce=fe&&!!P.sheenColorMap,rt=fe&&!!P.sheenRoughnessMap,et=!!P.specularMap,Ue=!!P.specularColorMap,st=!!P.specularIntensityMap,V=pe&&!!P.transmissionMap,De=pe&&!!P.thicknessMap,Te=!!P.gradientMap,be=!!P.alphaMap,Me=P.alphaTest>0,me=!!P.alphaHash,He=!!P.extensions;let lt=Pr;P.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(lt=s.toneMapping);const It={shaderID:ne,shaderType:P.type,shaderName:P.name,vertexShader:Le,fragmentShader:xe,defines:P.defines,customVertexShaderID:Pe,customFragmentShaderID:ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Oe,batchingColor:Oe&&ie._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ie.instanceColor!==null,instancingMorph:Fe&&ie.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Js,alphaToCoverage:!!P.alphaToCoverage,map:at,matcap:Xt,envMap:ft,envMapMode:ft&&J.mapping,envMapCubeUVHeight:O,aoMap:Dt,lightMap:B,bumpMap:mt,normalMap:dt,displacementMap:_&&bt,emissiveMap:Ae,normalMapObjectSpace:dt&&P.normalMapType===b_,normalMapTangentSpace:dt&&P.normalMapType===Ed,metalnessMap:Et,roughnessMap:Be,anisotropy:Qe,anisotropyMap:oe,clearcoat:N,clearcoatMap:qe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ye,dispersion:b,iridescence:$,iridescenceMap:je,iridescenceThicknessMap:ve,sheen:fe,sheenColorMap:Ce,sheenRoughnessMap:rt,specularMap:et,specularColorMap:Ue,specularIntensityMap:st,transmission:pe,transmissionMap:V,thicknessMap:De,gradientMap:Te,opaque:P.transparent===!1&&P.blending===qs&&P.alphaToCoverage===!1,alphaMap:be,alphaTest:Me,alphaHash:me,combine:P.combine,mapUv:at&&E(P.map.channel),aoMapUv:Dt&&E(P.aoMap.channel),lightMapUv:B&&E(P.lightMap.channel),bumpMapUv:mt&&E(P.bumpMap.channel),normalMapUv:dt&&E(P.normalMap.channel),displacementMapUv:bt&&E(P.displacementMap.channel),emissiveMapUv:Ae&&E(P.emissiveMap.channel),metalnessMapUv:Et&&E(P.metalnessMap.channel),roughnessMapUv:Be&&E(P.roughnessMap.channel),anisotropyMapUv:oe&&E(P.anisotropyMap.channel),clearcoatMapUv:qe&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:rt&&E(P.sheenRoughnessMap.channel),specularMapUv:et&&E(P.specularMap.channel),specularColorMapUv:Ue&&E(P.specularColorMap.channel),specularIntensityMapUv:st&&E(P.specularIntensityMap.channel),transmissionMapUv:V&&E(P.transmissionMap.channel),thicknessMapUv:De&&E(P.thicknessMap.channel),alphaMapUv:be&&E(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(dt||Qe),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ce.attributes.uv&&(at||be),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_e,skinning:ie.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:at&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ae&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Ut,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ji,flipSided:P.side===kn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:He&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&P.extensions.multiDraw===!0||Oe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(L(C,P),A(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function L(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function A(P,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),P.push(f.mask)}function D(P){const C=M[P.type];let z;if(C){const Q=Ti[C];z=tv.clone(Q.uniforms)}else z=P.uniforms;return z}function F(P,C){let z;for(let Q=0,ie=g.length;Q<ie;Q++){const de=g[Q];if(de.cacheKey===C){z=de,++z.usedTimes;break}}return z===void 0&&(z=new O1(s,C,P,l),g.push(z)),z}function R(P){if(--P.usedTimes===0){const C=g.indexOf(P);g[C]=g[g.length-1],g.pop(),P.destroy()}}function U(P){h.remove(P)}function X(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:F,releaseProgram:R,releaseShaderCache:U,programs:g,dispose:X}}function H1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function G1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function l0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function c0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x,_,y,M,E,S){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:y,groupOrder:M,renderOrder:x.renderOrder,z:E,group:S},s[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=y,v.groupOrder=M,v.renderOrder=x.renderOrder,v.z=E,v.group=S),e++,v}function f(x,_,y,M,E,S){const v=u(x,_,y,M,E,S);y.transmission>0?r.push(v):y.transparent===!0?o.push(v):t.push(v)}function h(x,_,y,M,E,S){const v=u(x,_,y,M,E,S);y.transmission>0?r.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function p(x,_){t.length>1&&t.sort(x||G1),r.length>1&&r.sort(_||l0),o.length>1&&o.sort(_||l0)}function g(){for(let x=e,_=s.length;x<_;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:g,sort:p}}function W1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new c0,s.set(r,[u])):o>=l.length?(u=new c0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function j1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new _t};break;case"SpotLight":t={position:new Z,direction:new Z,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function X1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let q1=0;function Y1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $1(s){const e=new j1,t=X1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Z);const o=new Z,l=new Mt,u=new Mt;function f(p){let g=0,x=0,_=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,M=0,E=0,S=0,v=0,L=0,A=0,D=0,F=0,R=0,U=0;p.sort(Y1);for(let P=0,C=p.length;P<C;P++){const z=p[P],Q=z.color,ie=z.intensity,de=z.distance,ce=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=Q.r*ie,x+=Q.g*ie,_+=Q.b*ie;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(z.sh.coefficients[ue],ie);U++}else if(z.isDirectionalLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const J=z.shadow,O=t.get(z);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,r.directionalShadow[y]=O,r.directionalShadowMap[y]=ce,r.directionalShadowMatrix[y]=z.shadow.matrix,L++}r.directional[y]=ue,y++}else if(z.isSpotLight){const ue=e.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(Q).multiplyScalar(ie),ue.distance=de,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,r.spot[E]=ue;const J=z.shadow;if(z.map&&(r.spotLightMap[F]=z.map,F++,J.updateMatrices(z),z.castShadow&&R++),r.spotLightMatrix[E]=J.matrix,z.castShadow){const O=t.get(z);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,r.spotShadow[E]=O,r.spotShadowMap[E]=ce,D++}E++}else if(z.isRectAreaLight){const ue=e.get(z);ue.color.copy(Q).multiplyScalar(ie),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=ue,S++}else if(z.isPointLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const J=z.shadow,O=t.get(z);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,O.shadowCameraNear=J.camera.near,O.shadowCameraFar=J.camera.far,r.pointShadow[M]=O,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=z.shadow.matrix,A++}r.point[M]=ue,M++}else if(z.isHemisphereLight){const ue=e.get(z);ue.skyColor.copy(z.color).multiplyScalar(ie),ue.groundColor.copy(z.groundColor).multiplyScalar(ie),r.hemi[v]=ue,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==y||X.pointLength!==M||X.spotLength!==E||X.rectAreaLength!==S||X.hemiLength!==v||X.numDirectionalShadows!==L||X.numPointShadows!==A||X.numSpotShadows!==D||X.numSpotMaps!==F||X.numLightProbes!==U)&&(r.directional.length=y,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=D+F-R,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=U,X.directionalLength=y,X.pointLength=M,X.spotLength=E,X.rectAreaLength=S,X.hemiLength=v,X.numDirectionalShadows=L,X.numPointShadows=A,X.numSpotShadows=D,X.numSpotMaps=F,X.numLightProbes=U,r.version=q1++)}function h(p,g){let x=0,_=0,y=0,M=0,E=0;const S=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const A=p[v];if(A.isDirectionalLight){const D=r.directional[x];D.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),x++}else if(A.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),y++}else if(A.isRectAreaLight){const D=r.rectArea[M];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(S),u.identity(),l.copy(A.matrixWorld),l.premultiply(S),u.extractRotation(l),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),M++}else if(A.isPointLight){const D=r.point[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(S),_++}else if(A.isHemisphereLight){const D=r.hemi[E];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(S),E++}}}return{setup:f,setupView:h,state:r}}function u0(s){const e=new $1(s),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function K1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new u0(s),e.set(o,[f])):l>=u.length?(f=new u0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q1(s,e,t){let r=new bd;const o=new pt,l=new pt,u=new Yt,f=new pv({depthPacking:T_}),h=new mv,p={},g=t.maxTextureSize,x={[Dr]:kn,[kn]:Dr,[ji]:ji},_=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Z1,fragmentShader:J1}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Bn;M.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new On(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y0;let v=this.type;this.render=function(R,U,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||R.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(Yi),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ie=v!==Wi&&this.type===Wi,de=v===Wi&&this.type!==Wi;for(let ce=0,ue=R.length;ce<ue;ce++){const J=R[ce],O=J.shadow;if(O===void 0){ut("WebGLShadowMap:",J,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const ne=O.getFrameExtents();if(o.multiply(ne),l.copy(O.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ne.x),o.x=l.x*ne.x,O.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ne.y),o.y=l.y*ne.y,O.mapSize.y=l.y)),O.map===null||ie===!0||de===!0){const k=this.type!==Wi?{minFilter:$n,magFilter:$n}:{};O.map!==null&&O.map.dispose(),O.map=new ns(o.x,o.y,k),O.map.texture.name=J.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const q=O.getViewportCount();for(let k=0;k<q;k++){const re=O.getViewport(k);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),Q.viewport(u),O.updateMatrices(J,k),r=O.getFrustum(),D(U,X,O.camera,J,this.type)}O.isPointLightShadow!==!0&&this.type===Wi&&L(O,X),O.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(P,C,z)};function L(R,U){const X=e.update(E);_.defines.VSM_SAMPLES!==R.blurSamples&&(_.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ns(o.x,o.y)),_.uniforms.shadow_pass.value=R.map.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(U,null,X,_,E,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(U,null,X,y,E,null)}function A(R,U,X,P){let C=null;const z=X.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)C=z;else if(C=X.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Q=C.uuid,ie=U.uuid;let de=p[Q];de===void 0&&(de={},p[Q]=de);let ce=de[ie];ce===void 0&&(ce=C.clone(),de[ie]=ce,U.addEventListener("dispose",F)),C=ce}if(C.visible=U.visible,C.wireframe=U.wireframe,P===Wi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:x[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=s.properties.get(C);Q.light=X}return C}function D(R,U,X,P,C){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&C===Wi)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld);const ie=e.update(R),de=R.material;if(Array.isArray(de)){const ce=ie.groups;for(let ue=0,J=ce.length;ue<J;ue++){const O=ce[ue],ne=de[O.materialIndex];if(ne&&ne.visible){const q=A(R,ne,P,C);R.onBeforeShadow(s,R,U,X,ie,q,O),s.renderBufferDirect(X,null,ie,q,R,O),R.onAfterShadow(s,R,U,X,ie,q,O)}}}else if(de.visible){const ce=A(R,de,P,C);R.onBeforeShadow(s,R,U,X,ie,ce,null),s.renderBufferDirect(X,null,ie,ce,R,null),R.onAfterShadow(s,R,U,X,ie,ce,null)}}const Q=R.children;for(let ie=0,de=Q.length;ie<de;ie++)D(Q[ie],U,X,P,C)}function F(R){R.target.removeEventListener("dispose",F);for(const X in p){const P=p[X],C=R.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const eE={[Sf]:Mf,[Ef]:wf,[Tf]:Af,[$s]:bf,[Mf]:Sf,[wf]:Ef,[Af]:Tf,[bf]:$s};function tE(s,e){function t(){let V=!1;const De=new Yt;let Te=null;const be=new Yt(0,0,0,0);return{setMask:function(Me){Te!==Me&&!V&&(s.colorMask(Me,Me,Me,Me),Te=Me)},setLocked:function(Me){V=Me},setClear:function(Me,me,He,lt,It){It===!0&&(Me*=lt,me*=lt,He*=lt),De.set(Me,me,He,lt),be.equals(De)===!1&&(s.clearColor(Me,me,He,lt),be.copy(De))},reset:function(){V=!1,Te=null,be.set(-1,0,0,0)}}}function r(){let V=!1,De=!1,Te=null,be=null,Me=null;return{setReversed:function(me){if(De!==me){const He=e.get("EXT_clip_control");me?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),De=me;const lt=Me;Me=null,this.setClear(lt)}},getReversed:function(){return De},setTest:function(me){me?le(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(me){Te!==me&&!V&&(s.depthMask(me),Te=me)},setFunc:function(me){if(De&&(me=eE[me]),be!==me){switch(me){case Sf:s.depthFunc(s.NEVER);break;case Mf:s.depthFunc(s.ALWAYS);break;case Ef:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Tf:s.depthFunc(s.EQUAL);break;case bf:s.depthFunc(s.GEQUAL);break;case wf:s.depthFunc(s.GREATER);break;case Af:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=me}},setLocked:function(me){V=me},setClear:function(me){Me!==me&&(De&&(me=1-me),s.clearDepth(me),Me=me)},reset:function(){V=!1,Te=null,be=null,Me=null,De=!1}}}function o(){let V=!1,De=null,Te=null,be=null,Me=null,me=null,He=null,lt=null,It=null;return{setTest:function(wt){V||(wt?le(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(wt){De!==wt&&!V&&(s.stencilMask(wt),De=wt)},setFunc:function(wt,zn,hn){(Te!==wt||be!==zn||Me!==hn)&&(s.stencilFunc(wt,zn,hn),Te=wt,be=zn,Me=hn)},setOp:function(wt,zn,hn){(me!==wt||He!==zn||lt!==hn)&&(s.stencilOp(wt,zn,hn),me=wt,He=zn,lt=hn)},setLocked:function(wt){V=wt},setClear:function(wt){It!==wt&&(s.clearStencil(wt),It=wt)},reset:function(){V=!1,De=null,Te=null,be=null,Me=null,me=null,He=null,lt=null,It=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,y=[],M=null,E=!1,S=null,v=null,L=null,A=null,D=null,F=null,R=null,U=new _t(0,0,0),X=0,P=!1,C=null,z=null,Q=null,ie=null,de=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,J=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),ue=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ue=J>=2);let ne=null,q={};const k=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Le=new Yt().fromArray(k),xe=new Yt().fromArray(re);function Pe(V,De,Te,be){const Me=new Uint8Array(4),me=s.createTexture();s.bindTexture(V,me),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Te;He++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(De+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return me}const ee={};ee[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),le(s.DEPTH_TEST),u.setFunc($s),mt(!1),dt(am),le(s.CULL_FACE),Dt(Yi);function le(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function _e(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function Fe(V,De){return x[V]!==De?(s.bindFramebuffer(V,De),x[V]=De,V===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=De),V===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Oe(V,De){let Te=y,be=!1;if(V){Te=_.get(De),Te===void 0&&(Te=[],_.set(De,Te));const Me=V.textures;if(Te.length!==Me.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let me=0,He=Me.length;me<He;me++)Te[me]=s.COLOR_ATTACHMENT0+me;Te.length=Me.length,be=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,be=!0);be&&s.drawBuffers(Te)}function at(V){return M!==V?(s.useProgram(V),M=V,!0):!1}const Xt={[Zr]:s.FUNC_ADD,[Kg]:s.FUNC_SUBTRACT,[Zg]:s.FUNC_REVERSE_SUBTRACT};Xt[Jg]=s.MIN,Xt[Qg]=s.MAX;const ft={[e_]:s.ZERO,[t_]:s.ONE,[n_]:s.SRC_COLOR,[vf]:s.SRC_ALPHA,[l_]:s.SRC_ALPHA_SATURATE,[a_]:s.DST_COLOR,[r_]:s.DST_ALPHA,[i_]:s.ONE_MINUS_SRC_COLOR,[yf]:s.ONE_MINUS_SRC_ALPHA,[o_]:s.ONE_MINUS_DST_COLOR,[s_]:s.ONE_MINUS_DST_ALPHA,[c_]:s.CONSTANT_COLOR,[u_]:s.ONE_MINUS_CONSTANT_COLOR,[f_]:s.CONSTANT_ALPHA,[d_]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(V,De,Te,be,Me,me,He,lt,It,wt){if(V===Yi){E===!0&&(_e(s.BLEND),E=!1);return}if(E===!1&&(le(s.BLEND),E=!0),V!==$g){if(V!==S||wt!==P){if((v!==Zr||D!==Zr)&&(s.blendEquation(s.FUNC_ADD),v=Zr,D=Zr),wt)switch(V){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFunc(s.ONE,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",V);break}else switch(V){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lm:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",V);break}L=null,A=null,F=null,R=null,U.set(0,0,0),X=0,S=V,P=wt}return}Me=Me||De,me=me||Te,He=He||be,(De!==v||Me!==D)&&(s.blendEquationSeparate(Xt[De],Xt[Me]),v=De,D=Me),(Te!==L||be!==A||me!==F||He!==R)&&(s.blendFuncSeparate(ft[Te],ft[be],ft[me],ft[He]),L=Te,A=be,F=me,R=He),(lt.equals(U)===!1||It!==X)&&(s.blendColor(lt.r,lt.g,lt.b,It),U.copy(lt),X=It),S=V,P=!1}function B(V,De){V.side===ji?_e(s.CULL_FACE):le(s.CULL_FACE);let Te=V.side===kn;De&&(Te=!Te),mt(Te),V.blending===qs&&V.transparent===!1?Dt(Yi):Dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const be=V.stencilWrite;f.setTest(be),be&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ae(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function dt(V){V!==Xg?(le(s.CULL_FACE),V!==z&&(V===am?s.cullFace(s.BACK):V===qg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),z=V}function bt(V){V!==Q&&(ue&&s.lineWidth(V),Q=V)}function Ae(V,De,Te){V?(le(s.POLYGON_OFFSET_FILL),(ie!==De||de!==Te)&&(s.polygonOffset(De,Te),ie=De,de=Te)):_e(s.POLYGON_OFFSET_FILL)}function Et(V){V?le(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Be(V){V===void 0&&(V=s.TEXTURE0+ce-1),ne!==V&&(s.activeTexture(V),ne=V)}function Qe(V,De,Te){Te===void 0&&(ne===null?Te=s.TEXTURE0+ce-1:Te=ne);let be=q[Te];be===void 0&&(be={type:void 0,texture:void 0},q[Te]=be),(be.type!==V||be.texture!==De)&&(ne!==Te&&(s.activeTexture(Te),ne=Te),s.bindTexture(V,De||ee[V]),be.type=V,be.texture=De)}function N(){const V=q[ne];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function fe(){try{s.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function pe(){try{s.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Re(){try{s.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ye(){try{s.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function je(){try{s.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ve(){try{s.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ce(V){Le.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function rt(V){xe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),xe.copy(V))}function et(V,De){let Te=p.get(De);Te===void 0&&(Te=new WeakMap,p.set(De,Te));let be=Te.get(V);be===void 0&&(be=s.getUniformBlockIndex(De,V.name),Te.set(V,be))}function Ue(V,De){const be=p.get(De).get(V);h.get(De)!==be&&(s.uniformBlockBinding(De,be,V.__bindingPointIndex),h.set(De,be))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ne=null,q={},x={},_=new WeakMap,y=[],M=null,E=!1,S=null,v=null,L=null,A=null,D=null,F=null,R=null,U=new _t(0,0,0),X=0,P=!1,C=null,z=null,Q=null,ie=null,de=null,Le.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:le,disable:_e,bindFramebuffer:Fe,drawBuffers:Oe,useProgram:at,setBlending:Dt,setMaterial:B,setFlipSided:mt,setCullFace:dt,setLineWidth:bt,setPolygonOffset:Ae,setScissorTest:Et,activeTexture:Be,bindTexture:Qe,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:je,texImage3D:ve,updateUBOMapping:et,uniformBlockBinding:Ue,texStorage2D:Re,texStorage3D:Ye,texSubImage2D:fe,texSubImage3D:pe,compressedTexSubImage2D:oe,compressedTexSubImage3D:qe,scissor:Ce,viewport:rt,reset:st}}function nE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pt,g=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,b){return y?new OffscreenCanvas(N,b):Xl("canvas")}function E(N,b,$){let fe=1;const pe=Qe(N);if((pe.width>$||pe.height>$)&&(fe=$/Math.max(pe.width,pe.height)),fe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(fe*pe.width),qe=Math.floor(fe*pe.height);x===void 0&&(x=M(oe,qe));const Re=b?M(oe,qe):x;return Re.width=oe,Re.height=qe,Re.getContext("2d").drawImage(N,0,0,oe,qe),ut("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+oe+"x"+qe+")."),Re}else return"data"in N&&ut("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(N,b,$,fe,pe=!1){if(N!==null){if(s[N]!==void 0)return s[N];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let oe=b;if(b===s.RED&&($===s.FLOAT&&(oe=s.R32F),$===s.HALF_FLOAT&&(oe=s.R16F),$===s.UNSIGNED_BYTE&&(oe=s.R8)),b===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(oe=s.R8UI),$===s.UNSIGNED_SHORT&&(oe=s.R16UI),$===s.UNSIGNED_INT&&(oe=s.R32UI),$===s.BYTE&&(oe=s.R8I),$===s.SHORT&&(oe=s.R16I),$===s.INT&&(oe=s.R32I)),b===s.RG&&($===s.FLOAT&&(oe=s.RG32F),$===s.HALF_FLOAT&&(oe=s.RG16F),$===s.UNSIGNED_BYTE&&(oe=s.RG8)),b===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(oe=s.RG8UI),$===s.UNSIGNED_SHORT&&(oe=s.RG16UI),$===s.UNSIGNED_INT&&(oe=s.RG32UI),$===s.BYTE&&(oe=s.RG8I),$===s.SHORT&&(oe=s.RG16I),$===s.INT&&(oe=s.RG32I)),b===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),$===s.UNSIGNED_INT&&(oe=s.RGB32UI),$===s.BYTE&&(oe=s.RGB8I),$===s.SHORT&&(oe=s.RGB16I),$===s.INT&&(oe=s.RGB32I)),b===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),$===s.UNSIGNED_INT&&(oe=s.RGBA32UI),$===s.BYTE&&(oe=s.RGBA8I),$===s.SHORT&&(oe=s.RGBA16I),$===s.INT&&(oe=s.RGBA32I)),b===s.RGB&&($===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),b===s.RGBA){const qe=pe?Wl:Pt.getTransfer(fe);$===s.FLOAT&&(oe=s.RGBA32F),$===s.HALF_FLOAT&&(oe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(oe=qe===Ut?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function D(N,b){let $;return N?b===null||b===ts||b===Ya?$=s.DEPTH24_STENCIL8:b===qi?$=s.DEPTH32F_STENCIL8:b===qa&&($=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ts||b===Ya?$=s.DEPTH_COMPONENT24:b===qi?$=s.DEPTH_COMPONENT32F:b===qa&&($=s.DEPTH_COMPONENT16),$}function F(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==$n&&N.minFilter!==si?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function R(N){const b=N.target;b.removeEventListener("dispose",R),X(b),b.isVideoTexture&&g.delete(b)}function U(N){const b=N.target;b.removeEventListener("dispose",U),C(b)}function X(N){const b=r.get(N);if(b.__webglInit===void 0)return;const $=N.source,fe=_.get($);if(fe){const pe=fe[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&P(N),Object.keys(fe).length===0&&_.delete($)}r.remove(N)}function P(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const $=N.source,fe=_.get($);delete fe[b.__cacheKey],u.memory.textures--}function C(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let pe=0;pe<b.__webglFramebuffer[fe].length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[fe][pe]);else s.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[fe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=N.textures;for(let fe=0,pe=$.length;fe<pe;fe++){const oe=r.get($[fe]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),u.memory.textures--),r.remove($[fe])}r.remove(N)}let z=0;function Q(){z=0}function ie(){const N=z;return N>=o.maxTextures&&ut("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),z+=1,N}function de(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ce(N,b){const $=r.get(N);if(N.isVideoTexture&&Et(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const fe=N.image;if(fe===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ee($,N,b);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+b)}function ue(N,b){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){ee($,N,b);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+b)}function J(N,b){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){ee($,N,b);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+b)}function O(N,b){const $=r.get(N);if(N.version>0&&$.__version!==N.version){le($,N,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+b)}const ne={[Pf]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[Df]:s.MIRRORED_REPEAT},q={[$n]:s.NEAREST,[M_]:s.NEAREST_MIPMAP_NEAREST,[ul]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[Ou]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},k={[w_]:s.NEVER,[L_]:s.ALWAYS,[A_]:s.LESS,[R0]:s.LEQUAL,[C_]:s.EQUAL,[D_]:s.GEQUAL,[R_]:s.GREATER,[P_]:s.NOTEQUAL};function re(N,b){if(b.type===qi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===si||b.magFilter===Ou||b.magFilter===ul||b.magFilter===Qr||b.minFilter===si||b.minFilter===Ou||b.minFilter===ul||b.minFilter===Qr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ne[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ne[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ne[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,q[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,q[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,k[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$n||b.minFilter!==ul&&b.minFilter!==Qr||b.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Le(N,b){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",R));const fe=b.source;let pe=_.get(fe);pe===void 0&&(pe={},_.set(fe,pe));const oe=de(b);if(oe!==N.__cacheKey){pe[oe]===void 0&&(pe[oe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),pe[oe].usedTimes++;const qe=pe[N.__cacheKey];qe!==void 0&&(pe[N.__cacheKey].usedTimes--,qe.usedTimes===0&&P(b)),N.__cacheKey=oe,N.__webglTexture=pe[oe].texture}return $}function xe(N,b,$){return Math.floor(Math.floor(N/$)/b)}function Pe(N,b,$,fe){const oe=N.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,$,fe,b.data);else{oe.sort((ve,Ce)=>ve.start-Ce.start);let qe=0;for(let ve=1;ve<oe.length;ve++){const Ce=oe[qe],rt=oe[ve],et=Ce.start+Ce.count,Ue=xe(rt.start,b.width,4),st=xe(Ce.start,b.width,4);rt.start<=et+1&&Ue===st&&xe(rt.start+rt.count-1,b.width,4)===Ue?Ce.count=Math.max(Ce.count,rt.start+rt.count-Ce.start):(++qe,oe[qe]=rt)}oe.length=qe+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),Ye=s.getParameter(s.UNPACK_SKIP_PIXELS),je=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ve=0,Ce=oe.length;ve<Ce;ve++){const rt=oe[ve],et=Math.floor(rt.start/4),Ue=Math.ceil(rt.count/4),st=et%b.width,V=Math.floor(et/b.width),De=Ue,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,st,V,De,Te,$,fe,b.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,je)}}function ee(N,b,$){let fe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=s.TEXTURE_3D);const pe=Le(N,b),oe=b.source;t.bindTexture(fe,N.__webglTexture,s.TEXTURE0+$);const qe=r.get(oe);if(oe.version!==qe.__version||pe===!0){t.activeTexture(s.TEXTURE0+$);const Re=Pt.getPrimaries(Pt.workingColorSpace),Ye=b.colorSpace===Cr?null:Pt.getPrimaries(b.colorSpace),je=b.colorSpace===Cr||Re===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ve=E(b.image,!1,o.maxTextureSize);ve=Be(b,ve);const Ce=l.convert(b.format,b.colorSpace),rt=l.convert(b.type);let et=A(b.internalFormat,Ce,rt,b.colorSpace,b.isVideoTexture);re(fe,b);let Ue;const st=b.mipmaps,V=b.isVideoTexture!==!0,De=qe.__version===void 0||pe===!0,Te=oe.dataReady,be=F(b,ve);if(b.isDepthTexture)et=D(b.format===Ka,b.type),De&&(V?t.texStorage2D(s.TEXTURE_2D,1,et,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,et,ve.width,ve.height,0,Ce,rt,null));else if(b.isDataTexture)if(st.length>0){V&&De&&t.texStorage2D(s.TEXTURE_2D,be,et,st[0].width,st[0].height);for(let Me=0,me=st.length;Me<me;Me++)Ue=st[Me],V?Te&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Ce,rt,Ue.data):t.texImage2D(s.TEXTURE_2D,Me,et,Ue.width,Ue.height,0,Ce,rt,Ue.data);b.generateMipmaps=!1}else V?(De&&t.texStorage2D(s.TEXTURE_2D,be,et,ve.width,ve.height),Te&&Pe(b,ve,Ce,rt)):t.texImage2D(s.TEXTURE_2D,0,et,ve.width,ve.height,0,Ce,rt,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,st[0].width,st[0].height,ve.depth);for(let Me=0,me=st.length;Me<me;Me++)if(Ue=st[Me],b.format!==xi)if(Ce!==null)if(V){if(Te)if(b.layerUpdates.size>0){const He=Vm(Ue.width,Ue.height,b.format,b.type);for(const lt of b.layerUpdates){const It=Ue.data.subarray(lt*He/Ue.data.BYTES_PER_ELEMENT,(lt+1)*He/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,lt,Ue.width,Ue.height,1,Ce,It)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,ve.depth,Ce,Ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,et,Ue.width,Ue.height,ve.depth,0,Ue.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,ve.depth,Ce,rt,Ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Me,et,Ue.width,Ue.height,ve.depth,0,Ce,rt,Ue.data)}else{V&&De&&t.texStorage2D(s.TEXTURE_2D,be,et,st[0].width,st[0].height);for(let Me=0,me=st.length;Me<me;Me++)Ue=st[Me],b.format!==xi?Ce!==null?V?Te&&t.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Ce,Ue.data):t.compressedTexImage2D(s.TEXTURE_2D,Me,et,Ue.width,Ue.height,0,Ue.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Te&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Ce,rt,Ue.data):t.texImage2D(s.TEXTURE_2D,Me,et,Ue.width,Ue.height,0,Ce,rt,Ue.data)}else if(b.isDataArrayTexture)if(V){if(De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,ve.width,ve.height,ve.depth),Te)if(b.layerUpdates.size>0){const Me=Vm(ve.width,ve.height,b.format,b.type);for(const me of b.layerUpdates){const He=ve.data.subarray(me*Me/ve.data.BYTES_PER_ELEMENT,(me+1)*Me/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ve.width,ve.height,1,Ce,rt,He)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ce,rt,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,ve.width,ve.height,ve.depth,0,Ce,rt,ve.data);else if(b.isData3DTexture)V?(De&&t.texStorage3D(s.TEXTURE_3D,be,et,ve.width,ve.height,ve.depth),Te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ce,rt,ve.data)):t.texImage3D(s.TEXTURE_3D,0,et,ve.width,ve.height,ve.depth,0,Ce,rt,ve.data);else if(b.isFramebufferTexture){if(De)if(V)t.texStorage2D(s.TEXTURE_2D,be,et,ve.width,ve.height);else{let Me=ve.width,me=ve.height;for(let He=0;He<be;He++)t.texImage2D(s.TEXTURE_2D,He,et,Me,me,0,Ce,rt,null),Me>>=1,me>>=1}}else if(st.length>0){if(V&&De){const Me=Qe(st[0]);t.texStorage2D(s.TEXTURE_2D,be,et,Me.width,Me.height)}for(let Me=0,me=st.length;Me<me;Me++)Ue=st[Me],V?Te&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ce,rt,Ue):t.texImage2D(s.TEXTURE_2D,Me,et,Ce,rt,Ue);b.generateMipmaps=!1}else if(V){if(De){const Me=Qe(ve);t.texStorage2D(s.TEXTURE_2D,be,et,Me.width,Me.height)}Te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,rt,ve)}else t.texImage2D(s.TEXTURE_2D,0,et,Ce,rt,ve);S(b)&&v(fe),qe.__version=oe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function le(N,b,$){if(b.image.length!==6)return;const fe=Le(N,b),pe=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const oe=r.get(pe);if(pe.version!==oe.__version||fe===!0){t.activeTexture(s.TEXTURE0+$);const qe=Pt.getPrimaries(Pt.workingColorSpace),Re=b.colorSpace===Cr?null:Pt.getPrimaries(b.colorSpace),Ye=b.colorSpace===Cr||qe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const je=b.isCompressedTexture||b.image[0].isCompressedTexture,ve=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let me=0;me<6;me++)!je&&!ve?Ce[me]=E(b.image[me],!0,o.maxCubemapSize):Ce[me]=ve?b.image[me].image:b.image[me],Ce[me]=Be(b,Ce[me]);const rt=Ce[0],et=l.convert(b.format,b.colorSpace),Ue=l.convert(b.type),st=A(b.internalFormat,et,Ue,b.colorSpace),V=b.isVideoTexture!==!0,De=oe.__version===void 0||fe===!0,Te=pe.dataReady;let be=F(b,rt);re(s.TEXTURE_CUBE_MAP,b);let Me;if(je){V&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,st,rt.width,rt.height);for(let me=0;me<6;me++){Me=Ce[me].mipmaps;for(let He=0;He<Me.length;He++){const lt=Me[He];b.format!==xi?et!==null?V?Te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,He,0,0,lt.width,lt.height,et,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,He,st,lt.width,lt.height,0,lt.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,He,0,0,lt.width,lt.height,et,Ue,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,He,st,lt.width,lt.height,0,et,Ue,lt.data)}}}else{if(Me=b.mipmaps,V&&De){Me.length>0&&be++;const me=Qe(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,st,me.width,me.height)}for(let me=0;me<6;me++)if(ve){V?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ce[me].width,Ce[me].height,et,Ue,Ce[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,st,Ce[me].width,Ce[me].height,0,et,Ue,Ce[me].data);for(let He=0;He<Me.length;He++){const It=Me[He].image[me].image;V?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,He+1,0,0,It.width,It.height,et,Ue,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,He+1,st,It.width,It.height,0,et,Ue,It.data)}}else{V?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,et,Ue,Ce[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,st,et,Ue,Ce[me]);for(let He=0;He<Me.length;He++){const lt=Me[He];V?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,He+1,0,0,et,Ue,lt.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,He+1,st,et,Ue,lt.image[me])}}}S(b)&&v(s.TEXTURE_CUBE_MAP),oe.__version=pe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function _e(N,b,$,fe,pe,oe){const qe=l.convert($.format,$.colorSpace),Re=l.convert($.type),Ye=A($.internalFormat,qe,Re,$.colorSpace),je=r.get(b),ve=r.get($);if(ve.__renderTarget=b,!je.__hasExternalTextures){const Ce=Math.max(1,b.width>>oe),rt=Math.max(1,b.height>>oe);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,oe,Ye,Ce,rt,b.depth,0,qe,Re,null):t.texImage2D(pe,oe,Ye,Ce,rt,0,qe,Re,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Ae(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,pe,ve.__webglTexture,0,bt(b)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,pe,ve.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(N,b,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const fe=b.depthTexture,pe=fe&&fe.isDepthTexture?fe.type:null,oe=D(b.stencilBuffer,pe),qe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=bt(b);Ae(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,oe,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,oe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,N)}else{const fe=b.textures;for(let pe=0;pe<fe.length;pe++){const oe=fe[pe],qe=l.convert(oe.format,oe.colorSpace),Re=l.convert(oe.type),Ye=A(oe.internalFormat,qe,Re,oe.colorSpace),je=bt(b);$&&Ae(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Ye,b.width,b.height):Ae(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,Ye,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ye,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce(b.depthTexture,0);const pe=fe.__webglTexture,oe=bt(b);if(b.depthTexture.format===$a)Ae(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(b.depthTexture.format===Ka)Ae(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function at(N){const b=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const fe=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",pe)};fe.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=fe}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const fe=N.texture.mipmaps;fe&&fe.length>0?Oe(b.__webglFramebuffer[0],N):Oe(b.__webglFramebuffer,N)}else if($){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=s.createRenderbuffer(),Fe(b.__webglDepthbuffer[fe],N,!1);else{const pe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,oe)}}else{const fe=N.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Fe(b.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,oe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(N,b,$){const fe=r.get(N);b!==void 0&&_e(fe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&at(N)}function ft(N){const b=N.texture,$=r.get(N),fe=r.get(b);N.addEventListener("dispose",U);const pe=N.textures,oe=N.isWebGLCubeRenderTarget===!0,qe=pe.length>1;if(qe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=b.version,u.memory.textures++),oe){$.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Re]=[];for(let Ye=0;Ye<b.mipmaps.length;Ye++)$.__webglFramebuffer[Re][Ye]=s.createFramebuffer()}else $.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)$.__webglFramebuffer[Re]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Re=0,Ye=pe.length;Re<Ye;Re++){const je=r.get(pe[Re]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&Ae(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Re=0;Re<pe.length;Re++){const Ye=pe[Re];$.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Re]);const je=l.convert(Ye.format,Ye.colorSpace),ve=l.convert(Ye.type),Ce=A(Ye.internalFormat,je,ve,Ye.colorSpace,N.isXRRenderTarget===!0),rt=bt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Ce,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,$.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),re(s.TEXTURE_CUBE_MAP,b);for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)_e($.__webglFramebuffer[Re][Ye],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye);else _e($.__webglFramebuffer[Re],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(b)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Re=0,Ye=pe.length;Re<Ye;Re++){const je=pe[Re],ve=r.get(je);let Ce=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ve.__webglTexture),re(Ce,je),_e($.__webglFramebuffer,N,je,s.COLOR_ATTACHMENT0+Re,Ce,0),S(je)&&v(Ce)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,fe.__webglTexture),re(Re,b),b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)_e($.__webglFramebuffer[Ye],N,b,s.COLOR_ATTACHMENT0,Re,Ye);else _e($.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Re,0);S(b)&&v(Re),t.unbindTexture()}N.depthBuffer&&at(N)}function Dt(N){const b=N.textures;for(let $=0,fe=b.length;$<fe;$++){const pe=b[$];if(S(pe)){const oe=L(N),qe=r.get(pe).__webglTexture;t.bindTexture(oe,qe),v(oe),t.unbindTexture()}}}const B=[],mt=[];function dt(N){if(N.samples>0){if(Ae(N)===!1){const b=N.textures,$=N.width,fe=N.height;let pe=s.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(N),Re=b.length>1;if(Re)for(let je=0;je<b.length;je++)t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Ye=N.texture.mipmaps;Ye&&Ye.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let je=0;je<b.length;je++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[je]);const ve=r.get(b[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,$,fe,0,0,$,fe,pe,s.NEAREST),h===!0&&(B.length=0,mt.length=0,B.push(s.COLOR_ATTACHMENT0+je),N.depthBuffer&&N.resolveDepthBuffer===!1&&(B.push(oe),mt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let je=0;je<b.length;je++){t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,qe.__webglColorRenderbuffer[je]);const ve=r.get(b[je]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function bt(N){return Math.min(o.maxSamples,N.samples)}function Ae(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(N){const b=u.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function Be(N,b){const $=N.colorSpace,fe=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Js&&$!==Cr&&(Pt.getTransfer($)===Ut?(fe!==xi||pe!==Ai)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",$)),b}function Qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=Q,this.setTexture2D=ce,this.setTexture2DArray=ue,this.setTexture3D=J,this.setTextureCube=O,this.rebindTextures=Xt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ae}function iE(s,e){function t(r,o=Cr){let l;const u=Pt.getTransfer(o);if(r===Ai)return s.UNSIGNED_BYTE;if(r===gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_d)return s.UNSIGNED_SHORT_5_5_5_1;if(r===T0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===b0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===M0)return s.BYTE;if(r===E0)return s.SHORT;if(r===qa)return s.UNSIGNED_SHORT;if(r===xd)return s.INT;if(r===ts)return s.UNSIGNED_INT;if(r===qi)return s.FLOAT;if(r===ea)return s.HALF_FLOAT;if(r===w0)return s.ALPHA;if(r===A0)return s.RGB;if(r===xi)return s.RGBA;if(r===$a)return s.DEPTH_COMPONENT;if(r===Ka)return s.DEPTH_STENCIL;if(r===C0)return s.RED;if(r===vd)return s.RED_INTEGER;if(r===yd)return s.RG;if(r===Sd)return s.RG_INTEGER;if(r===Md)return s.RGBA_INTEGER;if(r===Ol||r===kl||r===Bl||r===zl)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lf||r===Nf||r===If||r===Uf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===If)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ff||r===Of||r===kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ff||r===Of)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===kf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===jf||r===Xf||r===qf||r===Yf||r===$f||r===Kf||r===Zf||r===Jf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Bf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$f)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qf||r===ed||r===td)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Qf)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ed)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nd||r===id||r===rd||r===sd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===nd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===id)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ya?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const rE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new V0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Zi({vertexShader:rE,fragmentShader:sE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new On(new Jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oE extends rs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,g=null,x=null,_=null,y=null,M=null;const E=typeof XRWebGLBinding<"u",S=new aE,v={},L=t.getContextAttributes();let A=null,D=null;const F=[],R=[],U=new pt;let X=null;const P=new ri;P.viewport=new Yt;const C=new ri;C.viewport=new Yt;const z=[P,C],Q=new Tv;let ie=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=F[ee];return le===void 0&&(le=new af,F[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=F[ee];return le===void 0&&(le=new af,F[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=F[ee];return le===void 0&&(le=new af,F[ee]=le),le.getHandSpace()};function ce(ee){const le=R.indexOf(ee.inputSource);if(le===-1)return;const _e=F[le];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,p||u),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ue(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",J);for(let ee=0;ee<F.length;ee++){const le=R[ee];le!==null&&(R[ee]=null,F[ee].disconnect(le))}ie=null,de=null,S.reset();for(const ee in v)delete v[ee];e.setRenderTarget(A),y=null,_=null,x=null,o=null,D=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(X),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&E&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(A=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",J),L.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Fe=null,Oe=null;L.depth&&(Oe=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=L.stencil?Ka:$a,Fe=L.stencil?Ya:ts);const at={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};x=this.getBinding(),_=x.createProjectionLayer(at),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new ns(_.textureWidth,_.textureHeight,{format:xi,type:Ai,depthTexture:new z0(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _e={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new ns(y.framebufferWidth,y.framebufferHeight,{format:xi,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Pe.setContext(o),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(ee){for(let le=0;le<ee.removed.length;le++){const _e=ee.removed[le],Fe=R.indexOf(_e);Fe>=0&&(R[Fe]=null,F[Fe].disconnect(_e))}for(let le=0;le<ee.added.length;le++){const _e=ee.added[le];let Fe=R.indexOf(_e);if(Fe===-1){for(let at=0;at<F.length;at++)if(at>=R.length){R.push(_e),Fe=at;break}else if(R[at]===null){R[at]=_e,Fe=at;break}if(Fe===-1)break}const Oe=F[Fe];Oe&&Oe.connect(_e)}}const O=new Z,ne=new Z;function q(ee,le,_e){O.setFromMatrixPosition(le.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);const Fe=O.distanceTo(ne),Oe=le.projectionMatrix.elements,at=_e.projectionMatrix.elements,Xt=Oe[14]/(Oe[10]-1),ft=Oe[14]/(Oe[10]+1),Dt=(Oe[9]+1)/Oe[5],B=(Oe[9]-1)/Oe[5],mt=(Oe[8]-1)/Oe[0],dt=(at[8]+1)/at[0],bt=Xt*mt,Ae=Xt*dt,Et=Fe/(-mt+dt),Be=Et*-mt;if(le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Be),ee.translateZ(Et),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Oe[10]===-1)ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Qe=Xt+Et,N=ft+Et,b=bt-Be,$=Ae+(Fe-Be),fe=Dt*ft/N*Qe,pe=B*ft/N*Qe;ee.projectionMatrix.makePerspective(b,$,fe,pe,Qe,N),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function k(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let le=ee.near,_e=ee.far;S.texture!==null&&(S.depthNear>0&&(le=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),Q.near=C.near=P.near=le,Q.far=C.far=P.far=_e,(ie!==Q.near||de!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ie=Q.near,de=Q.far),Q.layers.mask=ee.layers.mask|6,P.layers.mask=Q.layers.mask&3,C.layers.mask=Q.layers.mask&5;const Fe=ee.parent,Oe=Q.cameras;k(Q,Fe);for(let at=0;at<Oe.length;at++)k(Oe[at],Fe);Oe.length===2?q(Q,P,C):Q.projectionMatrix.copy(P.projectionMatrix),re(ee,Q,Fe)};function re(ee,le,_e){_e===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ad*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(_===null&&y===null))return h},this.setFoveation=function(ee){h=ee,_!==null&&(_.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(ee){return v[ee]};let Le=null;function xe(ee,le){if(g=le.getViewerPose(p||u),M=le,g!==null){const _e=g.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Fe=!1;_e.length!==Q.cameras.length&&(Q.cameras.length=0,Fe=!0);for(let ft=0;ft<_e.length;ft++){const Dt=_e[ft];let B=null;if(y!==null)B=y.getViewport(Dt);else{const dt=x.getViewSubImage(_,Dt);B=dt.viewport,ft===0&&(e.setRenderTargetTextures(D,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(D))}let mt=z[ft];mt===void 0&&(mt=new ri,mt.layers.enable(ft),mt.viewport=new Yt,z[ft]=mt),mt.matrix.fromArray(Dt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Dt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(B.x,B.y,B.width,B.height),ft===0&&(Q.matrix.copy(mt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Fe===!0&&Q.cameras.push(mt)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){x=r.getBinding();const ft=x.getDepthInformation(_e[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,o.renderState)}if(Oe&&Oe.includes("camera-access")&&E){e.state.unbindTexture(),x=r.getBinding();for(let ft=0;ft<_e.length;ft++){const Dt=_e[ft].camera;if(Dt){let B=v[Dt];B||(B=new V0,v[Dt]=B);const mt=x.getCameraImage(Dt);B.sourceTexture=mt}}}}for(let _e=0;_e<F.length;_e++){const Fe=R[_e],Oe=F[_e];Fe!==null&&Oe!==void 0&&Oe.update(Fe,le,p||u)}Le&&Le(ee,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),M=null}const Pe=new W0;Pe.setAnimationLoop(xe),this.setAnimationLoop=function(ee){Le=ee},this.dispose=function(){}}}const Kr=new gi,lE=new Mt;function cE(s,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,O0(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,L,A,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),x(S,v)):v.isMeshPhongMaterial?(l(S,v),g(S,v)):v.isMeshStandardMaterial?(l(S,v),_(S,v),v.isMeshPhysicalMaterial&&y(S,v,D)):v.isMeshMatcapMaterial?(l(S,v),M(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),E(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&f(S,v)):v.isPointsMaterial?h(S,v,L,A):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===kn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===kn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),A=L.envMap,D=L.envMapRotation;A&&(S.envMap.value=A,Kr.copy(D),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),S.envMapRotation.value.setFromMatrix4(lE.makeRotationFromEuler(Kr)),S.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function f(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,L,A){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=A*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function E(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function uE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,A){const D=A.program;r.uniformBlockBinding(L,D)}function p(L,A){let D=o[L.id];D===void 0&&(M(L),D=g(L),o[L.id]=D,L.addEventListener("dispose",S));const F=A.program;r.updateUBOMapping(L,F);const R=e.render.frame;l[L.id]!==R&&(_(L),l[L.id]=R)}function g(L){const A=x();L.__bindingPointIndex=A;const D=s.createBuffer(),F=L.__size,R=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,D),D}function x(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const A=o[L.id],D=L.uniforms,F=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let R=0,U=D.length;R<U;R++){const X=Array.isArray(D[R])?D[R]:[D[R]];for(let P=0,C=X.length;P<C;P++){const z=X[P];if(y(z,R,P,F)===!0){const Q=z.__offset,ie=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let ce=0;ce<ie.length;ce++){const ue=ie[ce],J=E(ue);typeof ue=="number"||typeof ue=="boolean"?(z.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,Q+de,z.__data)):ue.isMatrix3?(z.__data[0]=ue.elements[0],z.__data[1]=ue.elements[1],z.__data[2]=ue.elements[2],z.__data[3]=0,z.__data[4]=ue.elements[3],z.__data[5]=ue.elements[4],z.__data[6]=ue.elements[5],z.__data[7]=0,z.__data[8]=ue.elements[6],z.__data[9]=ue.elements[7],z.__data[10]=ue.elements[8],z.__data[11]=0):(ue.toArray(z.__data,de),de+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,A,D,F){const R=L.value,U=A+"_"+D;if(F[U]===void 0)return typeof R=="number"||typeof R=="boolean"?F[U]=R:F[U]=R.clone(),!0;{const X=F[U];if(typeof R=="number"||typeof R=="boolean"){if(X!==R)return F[U]=R,!0}else if(X.equals(R)===!1)return X.copy(R),!0}return!1}function M(L){const A=L.uniforms;let D=0;const F=16;for(let U=0,X=A.length;U<X;U++){const P=Array.isArray(A[U])?A[U]:[A[U]];for(let C=0,z=P.length;C<z;C++){const Q=P[C],ie=Array.isArray(Q.value)?Q.value:[Q.value];for(let de=0,ce=ie.length;de<ce;de++){const ue=ie[de],J=E(ue),O=D%F,ne=O%J.boundary,q=O+ne;D+=ne,q!==0&&F-q<J.storage&&(D+=F-q),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=J.storage}}}const R=D%F;return R>0&&(D+=F-R),L.__size=D,L.__cache={},this}function E(L){const A={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=48,A.storage=48):L.isMatrix4?(A.boundary=64,A.storage=64):L.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",L),A}function S(L){const A=L.target;A.removeEventListener("dispose",S);const D=u.indexOf(A.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(o[A.id]),delete o[A.id],delete l[A.id]}function v(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:h,update:p,dispose:v}}const fE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Gi=null;function dE(){return Gi===null&&(Gi=new lv(fE,32,32,yd,ea),Gi.minFilter=si,Gi.magFilter=si,Gi.wrapS=Xi,Gi.wrapT=Xi,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class hE{constructor(e={}){const{canvas:t=N_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const M=new Set([Md,Sd,vd]),E=new Set([Ai,ts,qa,Ya,gd,_d]),S=new Uint32Array(4),v=new Int32Array(4);let L=null,A=null;const D=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let U=!1;this._outputColorSpace=Yn;let X=0,P=0,C=null,z=-1,Q=null;const ie=new Yt,de=new Yt;let ce=null;const ue=new _t(0);let J=0,O=t.width,ne=t.height,q=1,k=null,re=null;const Le=new Yt(0,0,O,ne),xe=new Yt(0,0,O,ne);let Pe=!1;const ee=new bd;let le=!1,_e=!1;const Fe=new Mt,Oe=new Z,at=new Yt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Dt(){return C===null?q:1}let B=r;function mt(w,W){return t.getContext(w,W)}try{const w={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pd}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",He,!1),B===null){const W="webgl2";if(B=mt(W,w),B===null)throw mt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let dt,bt,Ae,Et,Be,Qe,N,b,$,fe,pe,oe,qe,Re,Ye,je,ve,Ce,rt,et,Ue,st,V,De;function Te(){dt=new SM(B),dt.init(),st=new iE(B,dt),bt=new dM(B,dt,e,st),Ae=new tE(B,dt),bt.reversedDepthBuffer&&_&&Ae.buffers.depth.setReversed(!0),Et=new TM(B),Be=new H1,Qe=new nE(B,dt,Ae,Be,bt,st,Et),N=new pM(R),b=new yM(R),$=new Cv(B),V=new uM(B,$),fe=new MM(B,$,Et,V),pe=new wM(B,fe,$,Et),rt=new bM(B,bt,Qe),je=new hM(Be),oe=new V1(R,N,b,dt,bt,V,je),qe=new cE(R,Be),Re=new W1,Ye=new K1(dt),Ce=new cM(R,N,b,Ae,pe,y,h),ve=new Q1(R,pe,bt),De=new uE(B,Et,bt,Ae),et=new fM(B,dt,Et),Ue=new EM(B,dt,Et),Et.programs=oe.programs,R.capabilities=bt,R.extensions=dt,R.properties=Be,R.renderLists=Re,R.shadowMap=ve,R.state=Ae,R.info=Et}Te();const be=new oE(R,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(O,ne,!1))},this.getSize=function(w){return w.set(O,ne)},this.setSize=function(w,W,K=!0){if(be.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,ne=W,t.width=Math.floor(w*q),t.height=Math.floor(W*q),K===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(O*q,ne*q).floor()},this.setDrawingBufferSize=function(w,W,K){O=w,ne=W,q=K,t.width=Math.floor(w*K),t.height=Math.floor(W*K),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(ie)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,W,K,ae){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,W,K,ae),Ae.viewport(ie.copy(Le).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,W,K,ae){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,W,K,ae),Ae.scissor(de.copy(xe).multiplyScalar(q).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(w){Ae.setScissorTest(Pe=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,K=!0){let ae=0;if(w){let j=!1;if(C!==null){const we=C.texture.format;j=M.has(we)}if(j){const we=C.texture.type,Ne=E.has(we),We=Ce.getClearColor(),ze=Ce.getClearAlpha(),tt=We.r,Ke=We.g,Je=We.b;Ne?(S[0]=tt,S[1]=Ke,S[2]=Je,S[3]=ze,B.clearBufferuiv(B.COLOR,0,S)):(v[0]=tt,v[1]=Ke,v[2]=Je,v[3]=ze,B.clearBufferiv(B.COLOR,0,v))}else ae|=B.COLOR_BUFFER_BIT}W&&(ae|=B.DEPTH_BUFFER_BIT),K&&(ae|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Ce.dispose(),Re.dispose(),Ye.dispose(),Be.dispose(),N.dispose(),b.dispose(),pe.dispose(),V.dispose(),De.dispose(),oe.dispose(),be.dispose(),be.removeEventListener("sessionstart",Ji),be.removeEventListener("sessionend",to),Vn.stop()};function Me(w){w.preventDefault(),pm("WebGLRenderer: Context Lost."),U=!0}function me(){pm("WebGLRenderer: Context Restored."),U=!1;const w=Et.autoReset,W=ve.enabled,K=ve.autoUpdate,ae=ve.needsUpdate,j=ve.type;Te(),Et.autoReset=w,ve.enabled=W,ve.autoUpdate=K,ve.needsUpdate=ae,ve.type=j}function He(w){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){const W=w.target;W.removeEventListener("dispose",lt),It(W)}function It(w){wt(w),Be.remove(w)}function wt(w){const W=Be.get(w).programs;W!==void 0&&(W.forEach(function(K){oe.releaseProgram(K)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,K,ae,j,we){W===null&&(W=Xt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,We=io(w,W,K,ae,j);Ae.setMaterial(ae,Ne);let ze=K.index,tt=1;if(ae.wireframe===!0){if(ze=fe.getWireframeAttribute(K),ze===void 0)return;tt=2}const Ke=K.drawRange,Je=K.attributes.position;let ot=Ke.start*tt,Lt=(Ke.start+Ke.count)*tt;we!==null&&(ot=Math.max(ot,we.start*tt),Lt=Math.min(Lt,(we.start+we.count)*tt)),ze!==null?(ot=Math.max(ot,0),Lt=Math.min(Lt,ze.count)):Je!=null&&(ot=Math.max(ot,0),Lt=Math.min(Lt,Je.count));const Vt=Lt-ot;if(Vt<0||Vt===1/0)return;V.setup(j,ae,We,K,ze);let Ht,At=et;if(ze!==null&&(Ht=$.get(ze),At=Ue,At.setIndex(Ht)),j.isMesh)ae.wireframe===!0?(Ae.setLineWidth(ae.wireframeLinewidth*Dt()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(j.isLine){let Ze=ae.linewidth;Ze===void 0&&(Ze=1),Ae.setLineWidth(Ze*Dt()),j.isLineSegments?At.setMode(B.LINES):j.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else j.isPoints?At.setMode(B.POINTS):j.isSprite&&At.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Za("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ze=j._multiDrawStarts,Nt=j._multiDrawCounts,yt=j._multiDrawCount,En=ze?$.get(ze).bytesPerElement:1,er=Be.get(ae).currentProgram.getUniforms();for(let pn=0;pn<yt;pn++)er.setValue(B,"_gl_DrawID",pn),At.render(Ze[pn]/En,Nt[pn])}else if(j.isInstancedMesh)At.renderInstances(ot,Vt,j.count);else if(K.isInstancedBufferGeometry){const Ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Nt=Math.min(K.instanceCount,Ze);At.renderInstances(ot,Vt,Nt)}else At.render(ot,Vt)};function zn(w,W,K){w.transparent===!0&&w.side===ji&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,os(w,W,K),w.side=Dr,w.needsUpdate=!0,os(w,W,K),w.side=ji):os(w,W,K)}this.compile=function(w,W,K=null){K===null&&(K=w),A=Ye.get(K),A.init(W),F.push(A),K.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),w!==K&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights();const ae=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const We=we[Ne];zn(We,K,j),ae.add(We)}else zn(we,K,j),ae.add(we)}),A=F.pop(),ae},this.compileAsync=function(w,W,K=null){const ae=this.compile(w,W,K);return new Promise(j=>{function we(){if(ae.forEach(function(Ne){Be.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){j(w);return}setTimeout(we,10)}dt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let hn=null;function na(w){hn&&hn(w)}function Ji(){Vn.stop()}function to(){Vn.start()}const Vn=new W0;Vn.setAnimationLoop(na),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(w){hn=w,be.setAnimationLoop(w),w===null?Vn.stop():Vn.start()},be.addEventListener("sessionstart",Ji),be.addEventListener("sessionend",to),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(W),W=be.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,W,C),A=Ye.get(w,F.length),A.init(W),F.push(A),Fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(Fe,bi,W.reversedDepth),_e=this.localClippingEnabled,le=je.init(this.clippingPlanes,_e),L=Re.get(w,D.length),L.init(),D.push(L),be.enabled===!0&&be.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Qi(we,W,-1/0,R.sortObjects)}Qi(w,W,0,R.sortObjects),L.finish(),R.sortObjects===!0&&L.sort(k,re),ft=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,ft&&Ce.addToRenderList(L,w),this.info.render.frame++,le===!0&&je.beginShadows();const K=A.state.shadowsArray;ve.render(K,w,W),le===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=L.opaque,j=L.transmissive;if(A.setupLights(),W.isArrayCamera){const we=W.cameras;if(j.length>0)for(let Ne=0,We=we.length;Ne<We;Ne++){const ze=we[Ne];ss(ae,j,w,ze)}ft&&Ce.render(w);for(let Ne=0,We=we.length;Ne<We;Ne++){const ze=we[Ne];Lr(L,w,ze,ze.viewport)}}else j.length>0&&ss(ae,j,w,W),ft&&Ce.render(w),Lr(L,w,W);C!==null&&P===0&&(Qe.updateMultisampleRenderTarget(C),Qe.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(R,w,W),V.resetDefaultState(),z=-1,Q=null,F.pop(),F.length>0?(A=F[F.length-1],le===!0&&je.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?L=D[D.length-1]:L=null};function Qi(w,W,K,ae){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){ae&&at.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Fe);const Ne=pe.update(w),We=w.material;We.visible&&L.push(w,Ne,We,K,at.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const Ne=pe.update(w),We=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),at.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),at.copy(Ne.boundingSphere.center)),at.applyMatrix4(w.matrixWorld).applyMatrix4(Fe)),Array.isArray(We)){const ze=Ne.groups;for(let tt=0,Ke=ze.length;tt<Ke;tt++){const Je=ze[tt],ot=We[Je.materialIndex];ot&&ot.visible&&L.push(w,Ne,ot,K,at.z,Je)}}else We.visible&&L.push(w,Ne,We,K,at.z,null)}}const we=w.children;for(let Ne=0,We=we.length;Ne<We;Ne++)Qi(we[Ne],W,K,ae)}function Lr(w,W,K,ae){const{opaque:j,transmissive:we,transparent:Ne}=w;A.setupLightsView(K),le===!0&&je.setGlobalState(R.clippingPlanes,K),ae&&Ae.viewport(ie.copy(ae)),j.length>0&&as(j,W,K),we.length>0&&as(we,W,K),Ne.length>0&&as(Ne,W,K),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ss(w,W,K,ae){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[ae.id]===void 0&&(A.state.transmissionRenderTarget[ae.id]=new ns(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?ea:Ai,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const we=A.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||ie;we.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);const We=R.getRenderTarget(),ze=R.getActiveCubeFace(),tt=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(ue),J=R.getClearAlpha(),J<1&&R.setClearColor(16777215,.5),R.clear(),ft&&Ce.render(K);const Ke=R.toneMapping;R.toneMapping=Pr;const Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),A.setupLightsView(ae),le===!0&&je.setGlobalState(R.clippingPlanes,ae),as(w,K,ae),Qe.updateMultisampleRenderTarget(we),Qe.updateRenderTargetMipmap(we),dt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Lt=0,Vt=W.length;Lt<Vt;Lt++){const Ht=W[Lt],{object:At,geometry:Ze,material:Nt,group:yt}=Ht;if(Nt.side===ji&&At.layers.test(ae.layers)){const En=Nt.side;Nt.side=kn,Nt.needsUpdate=!0,no(At,K,ae,Ze,Nt,yt),Nt.side=En,Nt.needsUpdate=!0,ot=!0}}ot===!0&&(Qe.updateMultisampleRenderTarget(we),Qe.updateRenderTargetMipmap(we))}R.setRenderTarget(We,ze,tt),R.setClearColor(ue,J),Je!==void 0&&(ae.viewport=Je),R.toneMapping=Ke}function as(w,W,K){const ae=W.isScene===!0?W.overrideMaterial:null;for(let j=0,we=w.length;j<we;j++){const Ne=w[j],{object:We,geometry:ze,group:tt}=Ne;let Ke=Ne.material;Ke.allowOverride===!0&&ae!==null&&(Ke=ae),We.layers.test(K.layers)&&no(We,W,K,ze,Ke,tt)}}function no(w,W,K,ae,j,we){w.onBeforeRender(R,W,K,ae,j,we),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(R,W,K,ae,w,we),j.transparent===!0&&j.side===ji&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,R.renderBufferDirect(K,W,ae,j,w,we),j.side=Dr,j.needsUpdate=!0,R.renderBufferDirect(K,W,ae,j,w,we),j.side=ji):R.renderBufferDirect(K,W,ae,j,w,we),w.onAfterRender(R,W,K,ae,j,we)}function os(w,W,K){W.isScene!==!0&&(W=Xt);const ae=Be.get(w),j=A.state.lights,we=A.state.shadowsArray,Ne=j.state.version,We=oe.getParameters(w,j.state,we,W,K),ze=oe.getProgramCacheKey(We);let tt=ae.programs;ae.environment=w.isMeshStandardMaterial?W.environment:null,ae.fog=W.fog,ae.envMap=(w.isMeshStandardMaterial?b:N).get(w.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,tt===void 0&&(w.addEventListener("dispose",lt),tt=new Map,ae.programs=tt);let Ke=tt.get(ze);if(Ke!==void 0){if(ae.currentProgram===Ke&&ae.lightsStateVersion===Ne)return ia(w,We),Ke}else We.uniforms=oe.getUniforms(w),w.onBeforeCompile(We,R),Ke=oe.acquireProgram(We,ze),tt.set(ze,Ke),ae.uniforms=We.uniforms;const Je=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=je.uniform),ia(w,We),ae.needsLights=ro(w),ae.lightsStateVersion=Ne,ae.needsLights&&(Je.ambientLightColor.value=j.state.ambient,Je.lightProbe.value=j.state.probe,Je.directionalLights.value=j.state.directional,Je.directionalLightShadows.value=j.state.directionalShadow,Je.spotLights.value=j.state.spot,Je.spotLightShadows.value=j.state.spotShadow,Je.rectAreaLights.value=j.state.rectArea,Je.ltc_1.value=j.state.rectAreaLTC1,Je.ltc_2.value=j.state.rectAreaLTC2,Je.pointLights.value=j.state.point,Je.pointLightShadows.value=j.state.pointShadow,Je.hemisphereLights.value=j.state.hemi,Je.directionalShadowMap.value=j.state.directionalShadowMap,Je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Je.spotShadowMap.value=j.state.spotShadowMap,Je.spotLightMatrix.value=j.state.spotLightMatrix,Je.spotLightMap.value=j.state.spotLightMap,Je.pointShadowMap.value=j.state.pointShadowMap,Je.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=Ke,ae.uniformsList=null,Ke}function _i(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Gl.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function ia(w,W){const K=Be.get(w);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function io(w,W,K,ae,j){W.isScene!==!0&&(W=Xt),Qe.resetTextureUnits();const we=W.fog,Ne=ae.isMeshStandardMaterial?W.environment:null,We=C===null?R.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Js,ze=(ae.isMeshStandardMaterial?b:N).get(ae.envMap||Ne),tt=ae.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,Lt=!!K.morphAttributes.color;let Vt=Pr;ae.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Vt=R.toneMapping);const Ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=Ht!==void 0?Ht.length:0,Ze=Be.get(ae),Nt=A.state.lights;if(le===!0&&(_e===!0||w!==Q)){const tn=w===Q&&ae.id===z;je.setState(ae,w,tn)}let yt=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Nt.state.version||Ze.outputColorSpace!==We||j.isBatchedMesh&&Ze.batching===!1||!j.isBatchedMesh&&Ze.batching===!0||j.isBatchedMesh&&Ze.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ze.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ze.instancing===!1||!j.isInstancedMesh&&Ze.instancing===!0||j.isSkinnedMesh&&Ze.skinning===!1||!j.isSkinnedMesh&&Ze.skinning===!0||j.isInstancedMesh&&Ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ze.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ze.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ze.instancingMorph===!1&&j.morphTexture!==null||Ze.envMap!==ze||ae.fog===!0&&Ze.fog!==we||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==je.numPlanes||Ze.numIntersection!==je.numIntersection)||Ze.vertexAlphas!==tt||Ze.vertexTangents!==Ke||Ze.morphTargets!==Je||Ze.morphNormals!==ot||Ze.morphColors!==Lt||Ze.toneMapping!==Vt||Ze.morphTargetsCount!==At)&&(yt=!0):(yt=!0,Ze.__version=ae.version);let En=Ze.currentProgram;yt===!0&&(En=os(ae,W,j));let er=!1,pn=!1,tr=!1;const Ot=En.getUniforms(),Zt=Ze.uniforms;if(Ae.useProgram(En.program)&&(er=!0,pn=!0,tr=!0),ae.id!==z&&(z=ae.id,pn=!0),er||Q!==w){Ae.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(B,"projectionMatrix",w.projectionMatrix),Ot.setValue(B,"viewMatrix",w.matrixWorldInverse);const ht=Ot.map.cameraPosition;ht!==void 0&&ht.setValue(B,Oe.setFromMatrixPosition(w.matrixWorld)),bt.logarithmicDepthBuffer&&Ot.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ot.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,pn=!0,tr=!0)}if(j.isSkinnedMesh){Ot.setOptional(B,j,"bindMatrix"),Ot.setOptional(B,j,"bindMatrixInverse");const tn=j.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ot.setValue(B,"boneTexture",tn.boneTexture,Qe))}j.isBatchedMesh&&(Ot.setOptional(B,j,"batchingTexture"),Ot.setValue(B,"batchingTexture",j._matricesTexture,Qe),Ot.setOptional(B,j,"batchingIdTexture"),Ot.setValue(B,"batchingIdTexture",j._indirectTexture,Qe),Ot.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Ot.setValue(B,"batchingColorTexture",j._colorsTexture,Qe));const Cn=K.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&rt.update(j,K,En),(pn||Ze.receiveShadow!==j.receiveShadow)&&(Ze.receiveShadow=j.receiveShadow,Ot.setValue(B,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Zt.envMap.value=ze,Zt.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&W.environment!==null&&(Zt.envMapIntensity.value=W.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=dE()),pn&&(Ot.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ze.needsLights&&tc(Zt,tr),we&&ae.fog===!0&&qe.refreshFogUniforms(Zt,we),qe.refreshMaterialUniforms(Zt,ae,q,ne,A.state.transmissionRenderTarget[w.id]),Gl.upload(B,_i(Ze),Zt,Qe)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Gl.upload(B,_i(Ze),Zt,Qe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ot.setValue(B,"center",j.center),Ot.setValue(B,"modelViewMatrix",j.modelViewMatrix),Ot.setValue(B,"normalMatrix",j.normalMatrix),Ot.setValue(B,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const tn=ae.uniformsGroups;for(let ht=0,ls=tn.length;ht<ls;ht++){const vi=tn[ht];De.update(vi,En),De.bind(vi,En)}}return En}function tc(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function ro(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,W,K){const ae=Be.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Be.get(w.texture).__webglTexture=W,Be.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:K,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const K=Be.get(w);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};const so=B.createFramebuffer();this.setRenderTarget=function(w,W=0,K=0){C=w,X=W,P=K;let ae=!0,j=null,we=!1,Ne=!1;if(w){const ze=Be.get(w);if(ze.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(B.FRAMEBUFFER,null),ae=!1;else if(ze.__webglFramebuffer===void 0)Qe.setupRenderTarget(w);else if(ze.__hasExternalTextures)Qe.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(ze.__boundDepthTexture!==Je){if(Je!==null&&Be.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(w)}}const tt=w.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ne=!0);const Ke=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?j=Ke[W][K]:j=Ke[W],we=!0):w.samples>0&&Qe.useMultisampledRTT(w)===!1?j=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?j=Ke[K]:j=Ke,ie.copy(w.viewport),de.copy(w.scissor),ce=w.scissorTest}else ie.copy(Le).multiplyScalar(q).floor(),de.copy(xe).multiplyScalar(q).floor(),ce=Pe;if(K!==0&&(j=so),Ae.bindFramebuffer(B.FRAMEBUFFER,j)&&ae&&Ae.drawBuffers(w,j),Ae.viewport(ie),Ae.scissor(de),Ae.setScissorTest(ce),we){const ze=Be.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,K)}else if(Ne){const ze=W;for(let tt=0;tt<w.textures.length;tt++){const Ke=Be.get(w.textures[tt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tt,Ke.__webglTexture,K,ze)}}else if(w!==null&&K!==0){const ze=Be.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,K)}z=-1},this.readRenderTargetPixels=function(w,W,K,ae,j,we,Ne,We=0){if(!(w&&w.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){Ae.bindFramebuffer(B.FRAMEBUFFER,ze);try{const tt=w.textures[We],Ke=tt.format,Je=tt.type;if(!bt.textureFormatReadable(Ke)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Je)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-ae&&K>=0&&K<=w.height-j&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+We),B.readPixels(W,K,ae,j,st.convert(Ke),st.convert(Je),we))}finally{const tt=C!==null?Be.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(w,W,K,ae,j,we,Ne,We=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze)if(W>=0&&W<=w.width-ae&&K>=0&&K<=w.height-j){Ae.bindFramebuffer(B.FRAMEBUFFER,ze);const tt=w.textures[We],Ke=tt.format,Je=tt.type;if(!bt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+We),B.readPixels(W,K,ae,j,st.convert(Ke),st.convert(Je),0);const Lt=C!==null?Be.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,Lt);const Vt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await I_(B,Vt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(ot),B.deleteSync(Vt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,K=0){const ae=Math.pow(2,-K),j=Math.floor(w.image.width*ae),we=Math.floor(w.image.height*ae),Ne=W!==null?W.x:0,We=W!==null?W.y:0;Qe.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Ne,We,j,we),Ae.unbindTexture()};const ao=B.createFramebuffer(),oo=B.createFramebuffer();this.copyTextureToTexture=function(w,W,K=null,ae=null,j=0,we=null){we===null&&(j!==0?(Za("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=j,j=0):we=0);let Ne,We,ze,tt,Ke,Je,ot,Lt,Vt;const Ht=w.isCompressedTexture?w.mipmaps[we]:w.image;if(K!==null)Ne=K.max.x-K.min.x,We=K.max.y-K.min.y,ze=K.isBox3?K.max.z-K.min.z:1,tt=K.min.x,Ke=K.min.y,Je=K.isBox3?K.min.z:0;else{const Cn=Math.pow(2,-j);Ne=Math.floor(Ht.width*Cn),We=Math.floor(Ht.height*Cn),w.isDataArrayTexture?ze=Ht.depth:w.isData3DTexture?ze=Math.floor(Ht.depth*Cn):ze=1,tt=0,Ke=0,Je=0}ae!==null?(ot=ae.x,Lt=ae.y,Vt=ae.z):(ot=0,Lt=0,Vt=0);const At=st.convert(W.format),Ze=st.convert(W.type);let Nt;W.isData3DTexture?(Qe.setTexture3D(W,0),Nt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Qe.setTexture2DArray(W,0),Nt=B.TEXTURE_2D_ARRAY):(Qe.setTexture2D(W,0),Nt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const yt=B.getParameter(B.UNPACK_ROW_LENGTH),En=B.getParameter(B.UNPACK_IMAGE_HEIGHT),er=B.getParameter(B.UNPACK_SKIP_PIXELS),pn=B.getParameter(B.UNPACK_SKIP_ROWS),tr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je);const Ot=w.isDataArrayTexture||w.isData3DTexture,Zt=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Cn=Be.get(w),tn=Be.get(W),ht=Be.get(Cn.__renderTarget),ls=Be.get(tn.__renderTarget);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,ht.__webglFramebuffer),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let vi=0;vi<ze;vi++)Ot&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(w).__webglTexture,j,Je+vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(W).__webglTexture,we,Vt+vi)),B.blitFramebuffer(tt,Ke,Ne,We,ot,Lt,Ne,We,B.DEPTH_BUFFER_BIT,B.NEAREST);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||Be.has(w)){const Cn=Be.get(w),tn=Be.get(W);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,ao),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,oo);for(let ht=0;ht<ze;ht++)Ot?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Cn.__webglTexture,j,Je+ht):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Cn.__webglTexture,j),Zt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tn.__webglTexture,we,Vt+ht):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tn.__webglTexture,we),j!==0?B.blitFramebuffer(tt,Ke,Ne,We,ot,Lt,Ne,We,B.COLOR_BUFFER_BIT,B.NEAREST):Zt?B.copyTexSubImage3D(Nt,we,ot,Lt,Vt+ht,tt,Ke,Ne,We):B.copyTexSubImage2D(Nt,we,ot,Lt,tt,Ke,Ne,We);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Zt?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Nt,we,ot,Lt,Vt,Ne,We,ze,At,Ze,Ht.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,we,ot,Lt,Vt,Ne,We,ze,At,Ht.data):B.texSubImage3D(Nt,we,ot,Lt,Vt,Ne,We,ze,At,Ze,Ht):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,ot,Lt,Ne,We,At,Ze,Ht.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,ot,Lt,Ht.width,Ht.height,At,Ht.data):B.texSubImage2D(B.TEXTURE_2D,we,ot,Lt,Ne,We,At,Ze,Ht);B.pixelStorei(B.UNPACK_ROW_LENGTH,yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,En),B.pixelStorei(B.UNPACK_SKIP_PIXELS,er),B.pixelStorei(B.UNPACK_SKIP_ROWS,pn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,tr),we===0&&W.generateMipmaps&&B.generateMipmap(Nt),Ae.unbindTexture()},this.initRenderTarget=function(w){Be.get(w).__webglFramebuffer===void 0&&Qe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Qe.setTextureCube(w,0):w.isData3DTexture?Qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Qe.setTexture2DArray(w,0):Qe.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){X=0,P=0,C=null,Ae.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const f0={type:"change"},Cd={type:"start"},$0={type:"end"},Il=new Zl,d0=new Ar,pE=Math.cos(70*F_.DEG2RAD),sn=new Z,Fn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xf=1e-6;class mE extends wv{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Ki,this._lastTargetPosition=new Z,this._quat=new Ki().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zm,this._sphericalDelta=new zm,this._scale=1,this._panOffset=new Z,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new Z,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gE.bind(this),this._onPointerDown=xE.bind(this),this._onPointerUp=_E.bind(this),this._onContextMenu=bE.bind(this),this._onMouseWheel=SE.bind(this),this._onKeyDown=ME.bind(this),this._onTouchStart=EE.bind(this),this._onTouchMove=TE.bind(this),this._onMouseDown=vE.bind(this),this._onMouseMove=yE.bind(this),this._interceptControlDown=wE.bind(this),this._interceptControlUp=AE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(f0),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),o<-Math.PI?o+=Fn:o>Math.PI&&(o-=Fn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=sn.length();u=this._clampDistance(f*this._scale);const h=f-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Il.origin.copy(this.object.position),Il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Il.direction))<pE?this.object.lookAt(this.target):(d0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Il.intersectPlane(d0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>xf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xf||this._lastTargetPosition.distanceToSquared(this.target)>xf?(this.dispatchEvent(f0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;sn.copy(o).sub(this.target);let l=sn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,f=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function xE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function gE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function _E(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($0),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ft.DOLLY;break;case Xs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}break;case Xs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Cd)}function yE(s){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function SE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(s.preventDefault(),this.dispatchEvent(Cd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent($0))}function ME(s){this.enabled!==!1&&this._handleKeyDown(s)}function EE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ft.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ft.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Cd)}function TE(s){switch(this._trackPointer(s),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ft.NONE}}function bE(s){this.enabled!==!1&&s.preventDefault()}function wE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const CE=/^[og]\s*(.+)?/,RE=/^mtllib /,PE=/^usemtl /,DE=/^usemap /,h0=/\s+/,p0=new Z,gf=new Z,m0=new Z,x0=new Z,ii=new Z,Ul=new _t;function LE(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(o,l){const u=this._finalize(!1);u&&(u.inherited||u.groupCount<=0)&&this.materials.splice(u.index,1);const f={index:this.materials.length,name:o||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:u!==void 0?u.smooth:this.smooth,groupStart:u!==void 0?u.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const p={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(f),f},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(o){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),o&&this.materials.length>1)for(let u=this.materials.length-1;u>=0;u--)this.materials[u].groupCount<=0&&this.materials.splice(u,1);return o&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},r&&r.name&&typeof r.clone=="function"){const o=r.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseNormalIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseUVIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/2)*2},addVertex:function(e,t,r){const o=this.vertices,l=this.object.geometry.vertices;l.push(o[e+0],o[e+1],o[e+2]),l.push(o[t+0],o[t+1],o[t+2]),l.push(o[r+0],o[r+1],o[r+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){const o=this.normals,l=this.object.geometry.normals;l.push(o[e+0],o[e+1],o[e+2]),l.push(o[t+0],o[t+1],o[t+2]),l.push(o[r+0],o[r+1],o[r+2])},addFaceNormal:function(e,t,r){const o=this.vertices,l=this.object.geometry.normals;p0.fromArray(o,e),gf.fromArray(o,t),m0.fromArray(o,r),ii.subVectors(m0,gf),x0.subVectors(p0,gf),ii.cross(x0),ii.normalize(),l.push(ii.x,ii.y,ii.z),l.push(ii.x,ii.y,ii.z),l.push(ii.x,ii.y,ii.z)},addColor:function(e,t,r){const o=this.colors,l=this.object.geometry.colors;o[e]!==void 0&&l.push(o[e+0],o[e+1],o[e+2]),o[t]!==void 0&&l.push(o[t+0],o[t+1],o[t+2]),o[r]!==void 0&&l.push(o[r+0],o[r+1],o[r+2])},addUV:function(e,t,r){const o=this.uvs,l=this.object.geometry.uvs;l.push(o[e+0],o[e+1]),l.push(o[t+0],o[t+1]),l.push(o[r+0],o[r+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,r,o,l,u,f,h,p){const g=this.vertices.length;let x=this.parseVertexIndex(e,g),_=this.parseVertexIndex(t,g),y=this.parseVertexIndex(r,g);if(this.addVertex(x,_,y),this.addColor(x,_,y),f!==void 0&&f!==""){const M=this.normals.length;x=this.parseNormalIndex(f,M),_=this.parseNormalIndex(h,M),y=this.parseNormalIndex(p,M),this.addNormal(x,_,y)}else this.addFaceNormal(x,_,y);if(o!==void 0&&o!==""){const M=this.uvs.length;x=this.parseUVIndex(o,M),_=this.parseUVIndex(l,M),y=this.parseUVIndex(u,M),this.addUV(x,_,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let r=0,o=e.length;r<o;r++){const l=this.parseVertexIndex(e[r],t);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const r=this.vertices.length,o=this.uvs.length;for(let l=0,u=e.length;l<u;l++)this.addVertexLine(this.parseVertexIndex(e[l],r));for(let l=0,u=t.length;l<u;l++)this.addUVLine(this.parseUVIndex(t[l],o))}};return s.startObject("",!1),s}class NE extends Ad{constructor(e){super(e),this.materials=null}load(e,t,r,o){const l=this,u=new vv(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(f){try{t(l.parse(f))}catch(h){o?o(h):console.error(h),l.manager.itemError(e)}},r,o)}setMaterials(e){return this.materials=e,this}parse(e){const t=new LE;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const r=e.split(`
`);let o=[];for(let f=0,h=r.length;f<h;f++){const p=r[f].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const x=p.split(h0);switch(x[0]){case"v":t.vertices.push(parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3])),x.length>=7?(Ul.setRGB(parseFloat(x[4]),parseFloat(x[5]),parseFloat(x[6]),Yn),t.colors.push(Ul.r,Ul.g,Ul.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3]));break;case"vt":t.uvs.push(parseFloat(x[1]),parseFloat(x[2]));break}}else if(g==="f"){const _=p.slice(1).trim().split(h0),y=[];for(let E=0,S=_.length;E<S;E++){const v=_[E];if(v.length>0){const L=v.split("/");y.push(L)}}const M=y[0];for(let E=1,S=y.length-1;E<S;E++){const v=y[E],L=y[E+1];t.addFace(M[0],v[0],L[0],M[1],v[1],L[1],M[2],v[2],L[2])}}else if(g==="l"){const x=p.substring(1).trim().split(" ");let _=[];const y=[];if(p.indexOf("/")===-1)_=x;else for(let M=0,E=x.length;M<E;M++){const S=x[M].split("/");S[0]!==""&&_.push(S[0]),S[1]!==""&&y.push(S[1])}t.addLineGeometry(_,y)}else if(g==="p"){const _=p.slice(1).trim().split(" ");t.addPointGeometry(_)}else if((o=CE.exec(p))!==null){const x=(" "+o[0].slice(1).trim()).slice(1);t.startObject(x)}else if(PE.test(p))t.object.startMaterial(p.substring(7).trim(),t.materialLibraries);else if(RE.test(p))t.materialLibraries.push(p.substring(7).trim());else if(DE.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(o=p.split(" "),o.length>1){const _=o[1].trim().toLowerCase();t.object.smooth=_!=="0"&&_!=="off"}else t.object.smooth=!0;const x=t.object.currentMaterial();x&&(x.smooth=t.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}t.finalize();const l=new es;if(l.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){const p=t.objects[f],g=p.geometry,x=p.materials,_=g.type==="Line",y=g.type==="Points";let M=!1;if(g.vertices.length===0)continue;const E=new Bn;E.setAttribute("position",new en(g.vertices,3)),g.normals.length>0&&E.setAttribute("normal",new en(g.normals,3)),g.colors.length>0&&(M=!0,E.setAttribute("color",new en(g.colors,3))),g.hasUVIndices===!0&&E.setAttribute("uv",new en(g.uvs,2));const S=[];for(let L=0,A=x.length;L<A;L++){const D=x[L],F=D.name+"_"+D.smooth+"_"+M;let R=t.materials[F];if(this.materials!==null){if(R=this.materials.create(D.name),_&&R&&!(R instanceof Xa)){const U=new Xa;Ci.prototype.copy.call(U,R),U.color.copy(R.color),R=U}else if(y&&R&&!(R instanceof Wa)){const U=new Wa({size:10,sizeAttenuation:!1});Ci.prototype.copy.call(U,R),U.color.copy(R.color),U.map=R.map,R=U}}R===void 0&&(_?R=new Xa:y?R=new Wa({size:1,sizeAttenuation:!1}):R=new hv,R.name=D.name,R.flatShading=!D.smooth,R.vertexColors=M,t.materials[F]=R),S.push(R)}let v;if(S.length>1){for(let L=0,A=x.length;L<A;L++){const D=x[L];E.addGroup(D.groupStart,D.groupCount,L)}_?v=new od(E,S):y?v=new cf(E,S):v=new On(E,S)}else _?v=new od(E,S[0]):y?v=new cf(E,S[0]):v=new On(E,S[0]);v.name=p.name,l.add(v)}else if(t.vertices.length>0){const f=new Wa({size:1,sizeAttenuation:!1}),h=new Bn;h.setAttribute("position",new en(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new en(t.colors,3)),f.vertexColors=!0);const p=new cf(h,f);l.add(p)}return l}}function ud(s){return(s.webkitRelativePath||s.name||"").replace(/\\/g,"/").replace(/^\.\/+/,"")}function IE(s){const e=s.lastIndexOf("/");return e>=0?s.slice(0,e):""}function UE(s){const e=s.lastIndexOf("/");return e>=0?s.slice(e+1):s}function Ga(s){if(!s)return[0,0,0];const e=s.trim().split(/\s+/).map(t=>Number(t));return e.length!==3||e.some(t=>Number.isNaN(t))?[0,0,0]:e}function K0(s,e,t=[1,1,1]){const[r,o,l]=s,[u,f,h]=e,[p,g,x]=t,_=Math.cos(u),y=Math.sin(u),M=Math.cos(f),E=Math.sin(f),S=Math.cos(h),v=Math.sin(h),L=S*M,A=S*E*y-v*_,D=S*E*_+v*y,F=v*M,R=v*E*y+S*_,U=v*E*_-S*y,X=-E,P=M*y,C=M*_,z=new Mt;return z.set(L*p,A*g,D*x,r,F*p,R*g,U*x,o,X*p,P*g,C*x,l,0,0,0,1),z}function FE(s){if(!Array.isArray(s)||s.length!==4||!s.every(t=>Array.isArray(t)&&t.length===4))return null;const e=new Mt;return e.set(s[0][0],s[0][1],s[0][2],s[0][3],s[1][0],s[1][1],s[1][2],s[1][3],s[2][0],s[2][1],s[2][2],s[2][3],s[3][0],s[3][1],s[3][2],s[3][3]),e}function OE(s){if(!Array.isArray(s)||s.length!==4)return new Mt;if(!s.every(t=>Array.isArray(t)&&t.length===4))return new Mt;const e=new Mt;return e.set(s[0][0],s[0][1],s[0][2],s[0][3],s[1][0],s[1][1],s[1][2],s[1][3],s[2][0],s[2][1],s[2][2],s[2][3],s[3][0],s[3][1],s[3][2],s[3][3]),e}function kE(s){const r=new DOMParser().parseFromString(s,"application/xml").querySelector("robot");if(!r)throw new Error("URDF 解析失败：缺少 robot 节点");const o=Array.from(r.querySelectorAll("link")),l=Array.from(r.querySelectorAll("joint")),u=[];o.forEach(h=>{const p=h.getAttribute("name")||"";h.querySelectorAll("visual").forEach(g=>{const x=g.querySelector("origin"),_=g.querySelector("geometry"),y=_==null?void 0:_.querySelector("mesh");if(!y)return;const M=y.getAttribute("filename");M&&u.push({linkName:p,meshPath:M.replace(/\\/g,"/"),xyz:Ga(x==null?void 0:x.getAttribute("xyz")),rpy:Ga(x==null?void 0:x.getAttribute("rpy")),scale:Ga(y.getAttribute("scale")||"1 1 1")})})});const f=l.map(h=>{var _,y;const p=((_=h.querySelector("parent"))==null?void 0:_.getAttribute("link"))||"",g=((y=h.querySelector("child"))==null?void 0:y.getAttribute("link"))||"",x=h.querySelector("origin");return{parent:p,child:g,xyz:Ga(x==null?void 0:x.getAttribute("xyz")),rpy:Ga(x==null?void 0:x.getAttribute("rpy"))}});return{linkNames:o.map(h=>h.getAttribute("name")||"").filter(Boolean),visuals:u,jointEdges:f}}function BE(s,e){const t=new Set(e.map(h=>h.child).filter(Boolean)),r=s.filter(h=>!t.has(h)),o=r.length>0?r:s.slice(0,1),l=new Map;e.forEach(h=>{!h.parent||!h.child||(l.has(h.parent)||l.set(h.parent,[]),l.get(h.parent).push(h))});const u=new Map;function f(h,p){if(u.has(h))return;u.set(h,p.clone()),(l.get(h)||[]).forEach(x=>{const _=K0(x.xyz,x.rpy),y=p.clone().multiply(_);f(x.child,y)})}return o.forEach(h=>f(h,new Mt)),s.forEach(h=>{u.has(h)||u.set(h,new Mt)}),u}function zE(s,e){const t=new Set(e);return s.find(r=>t.has(UE(ud(r))))||null}function Fl(s,e,t){const r=t.replace(/\\/g,"/").replace(/^\/+/,""),o=e?`${e}/${r}`:r;return s.get(o)||s.get(r)||null}function VE(){const s=new es,e=new On(new wd(.012,18,18),new Hl({color:"#ef4444",roughness:.32,metalness:.08,transparent:!0,opacity:.95}));e.userData.markerPart="tcp",e.userData.baseColor="#ef4444",s.add(e);const t=new On(new is(.042,.03,.024),new Hl({color:"#fb923c",roughness:.4,metalness:.08,transparent:!0,opacity:.92}));t.position.set(-.026,0,0),t.userData.markerPart="body",t.userData.baseColor="#fb923c",s.add(t);const r=new is(.042,.01,.012),o=new Hl({color:"#f59e0b",roughness:.35,metalness:.05,transparent:!0,opacity:.88}),l=new On(r,o.clone()),u=new On(r,o.clone());return l.position.set(.02,.022,0),u.position.set(.02,-.022,0),l.userData.markerPart="body",u.userData.markerPart="body",l.userData.baseColor="#f59e0b",u.userData.baseColor="#f59e0b",s.add(l),s.add(u),s}function HE(s,e){s.scale.setScalar(e?1.35:1),s.traverse(t=>{if(!t.isMesh||!t.material)return;const r=t.userData.baseColor||"#ef4444";t.material.color.set(r),t.material.emissive=t.material.emissive||new _t("#000000"),t.material.emissive.set(e?"#ffffff":"#000000"),t.material.emissiveIntensity=e?.22:0,t.material.opacity=e?1:.76})}function GE({files:s,report:e}){var X,P,C,z,Q,ie,de,ce,ue;const t=Rt.useRef(null),r=Rt.useRef(null),o=Rt.useRef(null),l=Rt.useRef(null),u=Rt.useRef(null),f=Rt.useRef(null),h=Rt.useRef(new NE),p=Rt.useRef([]),g=Rt.useRef([]),[x,_]=Rt.useState("等待加载"),[y,M]=Rt.useState([]),[E,S]=Rt.useState(""),[v,L]=Rt.useState(0),[A,D]=Rt.useState({}),F=((C=(P=(X=e==null?void 0:e.checks)==null?void 0:X.distance_targeting)==null?void 0:P.details)==null?void 0:C.per_part)||{};Rt.useEffect(()=>{const J=t.current;if(!J)return;const O=new ov;O.background=new _t("#f8fafc");const ne=new ri(55,1,.01,200);ne.position.set(1.2,1.1,1.2);const q=new hE({antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),q.setSize(J.clientWidth||600,J.clientHeight||420),J.appendChild(q.domElement);const k=new mE(ne,q.domElement);k.target.set(0,0,0),k.update(),O.add(new Ev(16777215,.78));const re=new Mv(16777215,.72);re.position.set(2,3,2),O.add(re),O.add(new bv(.18)),r.current=O,o.current=ne,l.current=q,u.current=k;let Le=!1;function xe(){Le||(k.update(),q.render(O,ne),requestAnimationFrame(xe))}xe();const Pe=new ResizeObserver(()=>{if(!l.current||!o.current||!t.current)return;const ee=t.current.clientWidth||600,le=t.current.clientHeight||420;l.current.setSize(ee,le),o.current.aspect=ee/le,o.current.updateProjectionMatrix()});return Pe.observe(J),f.current=Pe,()=>{Le=!0,Pe.disconnect(),k.dispose(),q.dispose(),q.domElement.parentNode===J&&J.removeChild(q.domElement)}},[]),Rt.useEffect(()=>{async function J(){const O=r.current;if(O){if(p.current.forEach(ne=>O.remove(ne)),g.current.forEach(ne=>O.remove(ne)),p.current=[],g.current=[],M([]),S(""),L(0),D({}),!s||s.length===0){_("请先上传对象文件夹");return}try{const ne=new Map(s.map(Ae=>[ud(Ae),Ae])),q=zE(s,["mobility.urdf","model.urdf"]);if(!q)throw new Error("未找到 mobility.urdf/model.urdf");const k=ud(q),re=IE(k),Le=await q.text(),xe=kE(Le),Pe=BE(xe.linkNames,xe.jointEdges),ee=Fl(ne,re,"model_data.json"),le=Fl(ne,re,"grasp_poses.json")||Fl(ne,re,"model_data.json");let _e=1,Fe=new Mt;const Oe=new Mt().makeRotationX(-Math.PI/2);let at=null;if(ee){const Ae=JSON.parse(await ee.text());typeof Ae.scale=="number"&&Number.isFinite(Ae.scale)&&Ae.scale>0&&(_e=Ae.scale),Fe=OE(Ae.transform_matrix)}le&&(at=JSON.parse(await le.text()),typeof at.scale=="number"&&Number.isFinite(at.scale)&&at.scale>0&&_e===1&&(_e=at.scale));const Xt=new Mt().makeScale(_e,_e,_e),ft=new Map;for(const Ae of xe.visuals){const Et=Fl(ne,re,Ae.meshPath);if(!Et)continue;const Be=Ae.meshPath.replace(/\\/g,"/");let Qe=ft.get(Be);if(!Qe){const pe=await Et.text();Qe=h.current.parse(pe),ft.set(Be,Qe)}const N=Pe.get(Ae.linkName)||new Mt,b=K0(Ae.xyz,Ae.rpy,Ae.scale),$=Oe.clone().multiply(Fe).multiply(Xt).multiply(N).multiply(b),fe=Qe.clone(!0);fe.applyMatrix4($),fe.traverse(pe=>{if(pe.isMesh){const oe=new Hl({color:"#c8d4e6",metalness:.05,roughness:.9});pe.material=oe,pe.userData.baseColor="#c8d4e6",pe.userData.meshRelPath=Be}}),O.add(fe),p.current.push(fe)}const Dt=le;if(!Dt)throw new Error("未找到 grasp_poses.json/model_data.json");const mt=(at||JSON.parse(await Dt.text())).grasp_parts||{},dt=Object.keys(mt),bt={};dt.forEach(Ae=>{const Et=mt[Ae]||[];bt[Ae]=Et.map((Be,Qe)=>{const N=FE(Be.matrix),b=new es;if(N){const fe=new Z,pe=new Ki,oe=new Z;N.decompose(fe,pe,oe),fe.multiplyScalar(_e);const qe=new Mt().compose(fe,pe,new Z(1,1,1)),Re=Oe.clone().multiply(Fe).multiply(qe),Ye=new Z,je=new Ki,ve=new Z;Re.decompose(Ye,je,ve),b.position.copy(Ye),b.quaternion.copy(je)}b.userData={partName:Ae,poseIndex:Qe,poseId:Be.id};const $=VE();return b.add($),O.add(b),g.current.push(b),{id:Be.id,base:Be.base,object:b}})}),D(bt),M(dt),dt.length>0&&(S(dt[0]),L(0)),_(`已加载: mesh ${p.current.length} 个实例, pose ${g.current.length} 个, scale=${_e}, upright=on`)}catch(ne){_(`加载失败: ${ne.message||ne}`)}}}J()},[s]);const R=Rt.useMemo(()=>{const J=F==null?void 0:F[E];if(!Array.isArray(J)||J.length===0)return[];const O=J[v]||J[0];return(O==null?void 0:O.mapped_target_meshes)||[]},[F,E,v]);Rt.useEffect(()=>{g.current.forEach(J=>{const O=J.userData.partName===E&&J.userData.poseIndex===v;J.visible=J.userData.partName===E,HE(J,O)}),p.current.forEach(J=>{J.traverse(O=>{if(!O.isMesh||!O.material)return;const ne=O.userData.meshRelPath,q=R.includes(ne);O.material.color.set(q?"#60a5fa":O.userData.baseColor||"#c8d4e6"),O.material.emissive.set(q?"#0f172a":"#000000"),O.material.emissiveIntensity=q?.2:0})})},[E,v,R]);const U=Rt.useMemo(()=>{const J=F==null?void 0:F[E];return Array.isArray(J)&&(J[v]||J[0])||null},[F,E,v]);return he.jsxs("div",{className:"viewerCard",children:[he.jsxs("div",{className:"row viewerHeader",children:[he.jsx("h3",{children:"URDF + Grasp Pose 可视化"}),he.jsx("span",{className:"muted",children:x})]}),he.jsxs("div",{className:"viewerLayout",children:[he.jsx("div",{className:"viewerCanvasWrap",children:he.jsx("div",{ref:t,className:"viewerCanvas"})}),he.jsxs("div",{className:"viewerPanel",children:[he.jsxs("div",{className:"viewerSection",children:[he.jsx("div",{className:"viewerLabel",children:"Part"}),he.jsx("select",{value:E,onChange:J=>{S(J.target.value),L(0)},className:"viewerSelect",children:y.map(J=>he.jsx("option",{value:J,children:J},J))})]}),he.jsxs("div",{className:"viewerSection",children:[he.jsx("div",{className:"viewerLabel",children:"Pose"}),he.jsx("div",{className:"poseList",children:(A[E]||[]).map((J,O)=>he.jsxs("button",{type:"button",className:`poseBtn ${O===v?"activePoseBtn":""}`,onClick:()=>L(O),children:["#",O," (id=",J.id??"-",")"]},`${E}-${O}`))})]}),he.jsxs("div",{className:"viewerSection",children:[he.jsx("div",{className:"viewerLabel",children:"Distance"}),U?he.jsxs("div",{className:"distanceBox",children:[he.jsxs("div",{children:["d_target: ",((Q=(z=U.d_target)==null?void 0:z.toFixed)==null?void 0:Q.call(z,4))??"-"]}),he.jsxs("div",{children:["d_non_target: ",((de=(ie=U.d_non_target)==null?void 0:ie.toFixed)==null?void 0:de.call(ie,4))??"-"]}),he.jsxs("div",{children:["margin: ",((ue=(ce=U.margin_non_target_minus_target)==null?void 0:ce.toFixed)==null?void 0:ue.call(ce,4))??"-"]})]}):he.jsx("div",{className:"muted",children:"暂无距离信息"})]}),he.jsxs("div",{className:"viewerSection",children:[he.jsx("div",{className:"viewerLabel",children:"高亮目标mesh"}),he.jsxs("div",{className:"meshTagList",children:[R.length===0&&he.jsx("span",{className:"muted",children:"无"}),R.map(J=>he.jsx("span",{className:"meshTag",children:J},J))]})]}),he.jsxs("div",{className:"viewerSection",children:[he.jsx("div",{className:"viewerLabel",children:"Pose图例"}),he.jsxs("div",{className:"legendList",children:[he.jsxs("div",{children:[he.jsx("span",{className:"legendDot legendRed"})," TCP中心"]}),he.jsxs("div",{children:[he.jsx("span",{className:"legendDot legendOrange"})," 抓手示意体积（加宽）"]})]})]})]})]})]})}function WE(s){const e=[],t=s.split(`
`);for(const r of t){if(!r.startsWith("v "))continue;const o=r.trim().split(/\s+/);if(o.length<4)continue;const l=parseFloat(o[1]),u=parseFloat(o[2]),f=parseFloat(o[3]);Number.isNaN(l)||Number.isNaN(u)||Number.isNaN(f)||e.push([l,u,f])}return e}function jE(s,e){const[t,r,o]=s,l=Math.cos(t),u=Math.sin(t),f=Math.cos(r),h=Math.sin(r),p=Math.cos(o),g=Math.sin(o),x=[[1,0,0],[0,l,-u],[0,u,l]],_=[[f,0,h],[0,1,0],[-h,0,f]],y=[[p,-g,0],[g,p,0],[0,0,1]],M=fd(fd(y,_),x);return[[M[0][0],M[0][1],M[0][2],e[0]],[M[1][0],M[1][1],M[1][2],e[1]],[M[2][0],M[2][1],M[2][2],e[2]],[0,0,0,1]]}function XE(s,e){return s.length===0?s:s.map(([t,r,o])=>[e[0][0]*t+e[0][1]*r+e[0][2]*o+e[0][3],e[1][0]*t+e[1][1]*r+e[1][2]*o+e[1][3],e[2][0]*t+e[2][1]*r+e[2][2]*o+e[2][3]])}function qE(s,e){if(e.length===0)return 1/0;let t=1/0;const[r,o,l]=s;for(const[u,f,h]of e){const p=u-r,g=f-o,x=h-l,_=p*p+g*g+x*x;_<t&&(t=_)}return Math.sqrt(t)}function fd(s,e){const t=[[0,0,0],[0,0,0],[0,0,0]];for(let r=0;r<3;r++)for(let o=0;o<3;o++)for(let l=0;l<3;l++)t[r][o]+=s[r][l]*e[l][o];return t}function Z0(s,e){return[s[0][0]*e[0]+s[0][1]*e[1]+s[0][2]*e[2],s[1][0]*e[0]+s[1][1]*e[1]+s[1][2]*e[2],s[2][0]*e[0]+s[2][1]*e[1]+s[2][2]*e[2]]}function YE(s){return[[s[0][0],s[1][0],s[2][0]],[s[0][1],s[1][1],s[2][1]],[s[0][2],s[1][2],s[2][2]]]}function g0(s,e){return fd(s,e)}function $E(s){return s[0][0]*(s[1][1]*s[2][2]-s[1][2]*s[2][1])-s[0][1]*(s[1][0]*s[2][2]-s[1][2]*s[2][0])+s[0][2]*(s[1][0]*s[2][1]-s[1][1]*s[2][0])}function J0(){return[[1,0,0],[0,1,0],[0,0,1]]}function KE(s){let e=0;for(let t=0;t<3;t++)for(let r=0;r<3;r++)e+=s[t][r]*s[t][r];return Math.sqrt(e)}function ZE(s,e){return s.map((t,r)=>t.map((o,l)=>o-e[r][l]))}function $l(s){let e=0;for(const t of s)e+=t*t;return Math.sqrt(e)}function JE(s,e){let t=0;for(let r=0;r<s.length;r++)t+=s[r]*e[r];return t}function QE(s,e){return s.map(t=>t*e)}function Q0(s,e){return s.map((t,r)=>t+e[r])}const e3={cap:["cap","lid","cover","top"],body:["body","bottle_body","container","main"]};function dd(s,e){if(Array.isArray(s))for(const t of s)dd(t,e);else if(s&&typeof s=="object"&&("id"in s&&"name"in s&&"objs"in s&&e.push(s),Array.isArray(s.children)))for(const t of s.children)dd(t,e)}function t3(s){const e={};for(const t of s){const r=String(t.name||"").trim().toLowerCase(),o=t.parts||[],l=new Set;for(const u of o){const f=String(u.name||"").trim().toLowerCase(),h=u.id;!f||typeof h!="number"||(e[f]||(e[f]=new Set),e[f].add(h),l.add(h))}if(r&&l.size>0){e[r]||(e[r]=new Set);for(const u of l)e[r].add(u)}}return e}function _0(s,e,t){const r=t.replace(/\\/g,"/").replace(/^\/+/,""),o=e?`${e}/${r}`:r;return s.get(o)||s.get(r)||null}async function n3(s,e,t,r){const o={};for(const _ of t)o[_]={partName:_,meshRelPaths:new Set,matchedObjectIds:new Set,notes:[]};const l=_0(s,e,"mobility_v2.json"),u=_0(s,e,"result.json");if(!l||!u){for(const _ of t)o[_].notes.push("mobility_v2.json 或 result.json 缺失，无法做精细part映射");return o}const f=JSON.parse(await l.text()),h=JSON.parse(await u.text()),p=[];dd(h,p);const g=t3(Array.isArray(f)?f:[]),x={};for(const _ of p){const y=_.id,M=_.objs;if(typeof y!="number"||!Array.isArray(M))continue;const E=new Set;for(const S of M){const v=String(S).trim();v&&E.add(`${v}.obj`)}if(E.size>0){x[y]||(x[y]=new Set);for(const S of E)x[y].add(S)}}for(const _ of t){const y=o[_],M=e3[_.toLowerCase()]||[_.toLowerCase()],E=new Set;for(const S of M){const v=g[S];if(v)for(const L of v)E.add(L)}for(const S of E){y.matchedObjectIds.add(S);const v=x[S];if(v)for(const L of v)for(const A of r)A.endsWith(L)&&y.meshRelPaths.add(A)}y.meshRelPaths.size===0&&y.notes.push("未命中目标mesh，建议检查part别名映射或标注文件")}return o}function Rd(s){return(s.webkitRelativePath||s.name||"").replace(/\\/g,"/").replace(/^\.\/+/,"")}function i3(s){const e=s.lastIndexOf("/");return e>=0?s.slice(0,e):""}function r3(s){const e=s.lastIndexOf("/");return e>=0?s.slice(e+1):s}function s3(s){return new Map(s.map(e=>[Rd(e),e]))}function a3(s,e){const t=new Set(e);return s.find(r=>t.has(r3(Rd(r))))||null}function Pd(s,e,t){const r=t.replace(/\\/g,"/").replace(/^\/+/,""),o=e?`${e}/${r}`:r;return s.get(o)||s.get(r)||null}function ex(s){if(!s)return[0,0,0];const e=s.trim().split(/\s+/).filter(Boolean);return e.length!==3?[0,0,0]:[parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2])]}function o3(s){return ex(s)}function l3(s){const r=new DOMParser().parseFromString(s,"application/xml").querySelector("robot");if(!r)throw new Error("URDF 根节点不是 robot");return r}async function tx(s,e){for(const t of["grasp_poses.json","model_data.json"]){const r=Pd(s,e,t);if(r)return JSON.parse(await r.text())}throw new Error("未找到 grasp_poses.json 或 model_data.json")}function nx(s){let e=parseFloat(s.scale);(!Number.isFinite(e)||e<=0)&&(e=1);let t=J0().map(u=>[...u,0]);t.push([0,0,0,1]);const r=s.transform_matrix;Array.isArray(r)&&r.length===4&&r.every(u=>Array.isArray(u)&&u.length===4)&&r.every(f=>f.every(h=>Number.isFinite(h)))&&(t=r);const o=[[t[0][0],t[0][1],t[0][2]],[t[1][0],t[1][1],t[1][2]],[t[2][0],t[2][1],t[2][2]]],l=[t[0][3],t[1][3],t[2][3]];return{modelScale:e,objectRot:o,objectTrans:l}}function c3(s,e,t){var v,L;const r=[],o=Array.from(t.querySelectorAll("link")),l=Array.from(t.querySelectorAll("joint")),u=o.map(A=>(A.getAttribute("name")||"").trim()),f=l.map(A=>(A.getAttribute("name")||"").trim()),h=new Set(u.filter(Boolean));u.length!==new Set(u).size&&r.push({code:"URDF_DUPLICATE_LINK",severity:"warning",message:"存在重复 link 名称"}),f.length!==new Set(f).size&&r.push({code:"URDF_DUPLICATE_JOINT",severity:"warning",message:"存在重复 joint 名称"});let p=0,g=0;for(const A of l){const D=(v=A.querySelector("parent"))==null?void 0:v.getAttribute("link"),F=(L=A.querySelector("child"))==null?void 0:L.getAttribute("link");(!D||!h.has(D))&&p++,(!F||!h.has(F))&&g++}p&&r.push({code:"URDF_PARENT_LINK_MISSING",severity:"error",message:`${p} 个joint的parent link无效`}),g&&r.push({code:"URDF_CHILD_LINK_MISSING",severity:"error",message:`${g} 个joint的child link无效`});const x=[],_=new Set;let y=0;for(const A of o){const D=(A.getAttribute("name")||"").trim(),F=[...Array.from(A.querySelectorAll("visual")),...Array.from(A.querySelectorAll("collision"))];for(const R of F){const U=R.querySelector("origin"),X=ex(U==null?void 0:U.getAttribute("xyz")),P=o3(U==null?void 0:U.getAttribute("rpy")),C=jE(P,X),z=R.querySelector("geometry");if(!z)continue;const Q=z.querySelector("mesh");if(!Q)continue;const ie=(Q.getAttribute("filename")||"").trim();if(!ie)continue;if(_.add(ie),!Pd(s,e,ie)){y++;continue}x.push({linkName:D,meshRelPath:ie,transform:C})}}y&&r.push({code:"URDF_MESH_FILE_MISSING",severity:"error",message:`${y} 个mesh文件在磁盘中不存在`});const M=r.filter(A=>A.severity==="error").length,E=r.filter(A=>A.severity==="warning").length;return{result:{score:Math.max(0,100-15*M-6*E),passed:M===0,issues:r,details:{link_count:o.length,joint_count:l.length,mesh_instance_count:x.length,mesh_path_count:_.size}},meshInstances:x,urdfMeshRelPaths:_}}function u3(s){if(!Array.isArray(s)||s.length!==4)return[!1,"矩阵必须是4x4数组"];for(const e of s){if(!Array.isArray(e)||e.length!==4)return[!1,"矩阵必须是4x4数组"];for(const t of e)if(typeof t!="number"||!Number.isFinite(t))return[!1,"矩阵包含非有限数值"]}return[!0,""]}function f3(s){const e=s[0][0]+s[1][1]+s[2][2],t=[0,0,0,0];if(e>0){const o=Math.sqrt(e+1)*2;t[0]=.25*o,t[1]=(s[2][1]-s[1][2])/o,t[2]=(s[0][2]-s[2][0])/o,t[3]=(s[1][0]-s[0][1])/o}else if(s[0][0]>s[1][1]&&s[0][0]>s[2][2]){const o=Math.sqrt(1+s[0][0]-s[1][1]-s[2][2])*2;t[0]=(s[2][1]-s[1][2])/o,t[1]=.25*o,t[2]=(s[0][1]+s[1][0])/o,t[3]=(s[0][2]+s[2][0])/o}else if(s[1][1]>s[2][2]){const o=Math.sqrt(1+s[1][1]-s[0][0]-s[2][2])*2;t[0]=(s[0][2]-s[2][0])/o,t[1]=(s[0][1]+s[1][0])/o,t[2]=.25*o,t[3]=(s[1][2]+s[2][1])/o}else{const o=Math.sqrt(1+s[2][2]-s[0][0]-s[1][1])*2;t[0]=(s[1][0]-s[0][1])/o,t[1]=(s[0][2]+s[2][0])/o,t[2]=(s[1][2]+s[2][1])/o,t[3]=.25*o}const r=$l(t);return r>0?t.map(o=>o/r):t}function d3(s){const e=[],t={};let r=0,o=0,l=0,u=0;const{modelScale:f,objectRot:h,objectTrans:p}=nx(s),g=s.grasp_parts||{};if(typeof g!="object"||Array.isArray(g))return e.push({code:"GRASP_PARTS_INVALID",severity:"error",message:"grasp_parts 字段缺失或格式错误"}),{result:{score:0,passed:!1,issues:e,details:{}},parsed:{}};for(const[_,y]of Object.entries(g)){if(!Array.isArray(y)){e.push({code:"GRASP_POSE_LIST_INVALID",severity:"error",message:`${_} 不是数组`});continue}t[_]=[];for(const M of y){r++;const E=M.matrix,[S,v]=u3(E);if(!S){o++,e.push({code:"GRASP_MATRIX_INVALID",severity:"error",message:`${_} pose矩阵错误: ${v}`});continue}const L=[[E[0][0],E[0][1],E[0][2]],[E[1][0],E[1][1],E[1][2]],[E[2][0],E[2][1],E[2][2]]],A=[E[0][3],E[1][3],E[2][3]],D=QE(A,f),F=Q0(Z0(h,D),p),R=g0(h,L),U=g0(YE(L),L),X=KE(ZE(U,J0())),P=$E(L),C=Math.abs(P-1);l=Math.max(l,X),u=Math.max(u,C),X>.08&&(o++,e.push({code:"GRASP_ROTATION_NOT_ORTHOGONAL",severity:"warning",message:`${_} pose旋转矩阵偏离正交，误差=${X.toFixed(4)}`})),(P<.7||P>1.3)&&(o++,e.push({code:"GRASP_DET_ABNORMAL",severity:"warning",message:`${_} pose det(R)异常，值=${P.toFixed(4)}`})),$l(F)>10&&(o++,e.push({code:"GRASP_TRANSLATION_OUTLIER",severity:"warning",message:`${_} pose平移距离过大，|t|=${$l(F).toFixed(3)}`})),t[_].push({id:M.id,translation:F,rotation:R,quat:f3(R),matrix:E,translationLocal:A,base:M.base})}}let x;return r===0?(e.push({code:"GRASP_EMPTY",severity:"error",message:"未找到任何grasp pose"}),x=0):x=Math.max(0,100-o/Math.max(r,1)*100),{result:{score:x,passed:e.every(_=>_.severity!=="error"),issues:e,details:{pose_count:r,bad_pose_count:o,max_orthogonality_error:l,max_det_deviation:u,model_scale_applied:f}},parsed:t}}async function h3(s,e,t,r,o){const l=[],u=await tx(s,e),{modelScale:f,objectRot:h,objectTrans:p}=nx(u),g=Object.keys(t),x=await n3(s,e,g,o),_={};for(const A of r){const D=Pd(s,e,A.meshRelPath),F=A.meshRelPath;if(!_[F]&&D){const R=await D.text();_[F]=WE(R)}}const y={},M=[],E=[];for(const[A,D]of Object.entries(t)){const F=x[A],R=F?F.meshRelPaths:new Set;(!R||R.size===0)&&l.push({code:"TARGET_MESH_UNMAPPED",severity:"warning",message:`${A} 未能映射到目标mesh，distance结果不可靠`}),y[A]=[];for(const U of D){const X=U.translation;let P=1/0,C=1/0;for(const Q of r){const ie=_[Q.meshRelPath]||[],ue=XE(ie,Q.transform).map(([O,ne,q])=>[O*f,ne*f,q*f]).map(O=>Q0(Z0(h,O),p)),J=qE(X,ue);R.has(Q.meshRelPath)?P=Math.min(P,J):C=Math.min(C,J)}const z=C-P;M.push(Number.isFinite(P)?P:1e9),Number.isFinite(z)&&E.push(z),Number.isFinite(P)&&P>.2&&l.push({code:"TARGET_TOO_FAR",severity:"warning",message:`${A} pose到目标part距离偏大: ${P.toFixed(4)}`}),Number.isFinite(z)&&z<0&&l.push({code:"NON_TARGET_CLOSER",severity:"warning",message:`${A} pose更靠近非目标part，margin=${z.toFixed(4)}`}),y[A].push({id:U.id,d_target:Number.isFinite(P)?P:null,d_non_target:Number.isFinite(C)?C:null,margin_non_target_minus_target:Number.isFinite(z)?z:null,mapped_target_meshes:[...R||[]].sort()})}}let S;if(M.length===0)S=0;else{let A=0;for(const D of M)D>.03&&(A+=Math.min(60,(D-.03)*80));for(const D of E)D<0&&(A+=Math.min(40,Math.abs(D)*100));S=Math.max(0,100-A/Math.max(M.length,1))}const v={};for(const[A,D]of Object.entries(x))v[A]={mesh_rel_paths:[...D.meshRelPaths].sort(),matched_object_ids:[...D.matchedObjectIds].sort(),notes:D.notes};const L={model_scale_applied:f,object_transform_translation:p,per_part:y,bindings:v};return{result:{score:S,passed:l.every(A=>A.severity!=="error"),issues:l,details:L},details:L}}function p3(s,e){const t=Math.min(1,Math.max(-1,Math.abs(JE(s,e))));return 2*Math.acos(t)*180/Math.PI}function m3(s,e=.01,t=8){const r=[];let o=0,l=0;const u={};for(const[g,x]of Object.entries(s)){const _=x.length;o+=_;const y=new Array(_).fill(!1),M=[];for(let E=0;E<_;E++){if(y[E])continue;y[E]=!0;const S=[E],v=x[E].translation,L=x[E].quat;for(let A=E+1;A<_;A++){if(y[A])continue;const D=x[A].translation,F=x[A].quat,R=$l(v.map((X,P)=>X-D[P])),U=p3(L,F);R<=e&&U<=t&&(y[A]=!0,S.push(A))}M.push(S),S.length>1&&(l+=S.length-1)}u[g]=M}const f=o===0?1:(o-l)/o,h=1-f;return h>.5&&r.push({code:"POSSIBLE_SPAMMING",severity:"warning",message:`重复姿态比例较高，spam_risk=${h.toFixed(2)}`}),{score:Math.max(0,100-h*100),passed:!0,issues:r,details:{pose_count:o,duplicate_pose_count:l,unique_ratio:f,spam_risk:h,duplicate_groups:u,thresholds:{position_m:e,rotation_deg:t}}}}function x3(s){var l;const e={urdf_basic:.25,grasp_numeric:.25,distance_targeting:.3,dedup_anti_spam:.2};let t=0;for(const[u,f]of Object.entries(e))t+=(((l=s[u])==null?void 0:l.score)??0)*f;const r=[];for(const u of Object.values(s))u.issues&&r.push(...u.issues);const o={error:0,warning:0,info:0};for(const u of r)o[u.severity]=(o[u.severity]||0)+1;return{overall_score:Math.round(t*100)/100,issue_counts:o,passed:o.error===0}}async function g3(s){const e=s3(s),t=a3(s,["mobility.urdf","model.urdf"]);if(!t)throw new Error("缺失文件: mobility.urdf, model.urdf");const r=Rd(t),o=i3(r),l=await t.text(),u=l3(l),f=await tx(e,o),{result:h,meshInstances:p,urdfMeshRelPaths:g}=c3(e,o,u),{result:x,parsed:_}=d3(f),{result:y}=await h3(e,o,_,p,g),M=m3(_),E={urdf_basic:h,grasp_numeric:x,distance_targeting:y,dedup_anti_spam:M},S=x3(E),v={urdf_basic:Math.round(h.score*100)/100,grasp_numeric:Math.round(x.score*100)/100,distance_targeting:Math.round(y.score*100)/100,dedup_anti_spam:Math.round(M.score*100)/100,overall:S.overall_score};return{object_name:String(f.object_name||"unknown"),source_root:o||".",scores:v,checks:E,summary:S,ai_review:{enabled:!1,note:"AI审核需手动触发"}}}function _3(s,e=8){const t=[];for(const[o,l]of Object.entries(s))for(const u of l.issues||[])t.push({check:o,severity:u.severity,code:u.code,message:u.message});const r={error:0,warning:1,info:2};return t.sort((o,l)=>(r[o.severity]??99)-(r[l.severity]??99)),t.slice(0,e)}function v3(s,e,t,r){return{object_name:s,scores:e,summary:t,key_issues:_3(r)}}function y3(s){const e=s.replace(/\/+$/,"");return e.endsWith("/chat/completions")?[e]:e.endsWith("/v1")?[`${e}/chat/completions`]:[`${e}/v1/chat/completions`,`${e}/chat/completions`]}async function S3({objectName:s,scores:e,summary:t,checks:r,apiKey:o,baseUrl:l,model:u}){var E,S,v;const f=(u||"gpt-4o").trim(),h=!!(l&&o),p={enabled:h,configured:{base_url:!!l,token:!!o,model:f}};if(!h)return p.note="AI审核未配置：请提供 API Base URL 和 API Key。",p;const g=v3(s,e,t,r),x="You are a strict URDF/grasp auditor. Return concise JSON with fields: verdict, risk_level, key_findings, suggestions. Use Chinese for natural language fields.",_=`请基于以下审核结果给出二次审查意见，输出JSON。
`+JSON.stringify(g,null,0),y={model:f,temperature:.2,messages:[{role:"system",content:x},{role:"user",content:_}]},M=[];for(const L of y3(l))try{const A=await fetch(L,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(y)});if(!A.ok){const R=await A.text();M.push(`${L} -> HTTP ${A.status}: ${R.slice(0,200)}`);continue}const D=await A.json(),F=((v=(S=(E=D==null?void 0:D.choices)==null?void 0:E[0])==null?void 0:S.message)==null?void 0:v.content)||"";return p.provider="openai-compatible",p.endpoint=L,p.raw_text=F,p.raw_response=D,p}catch(A){M.push(`${L} -> ${A.message||A}`)}return p.error="AI审核请求失败",p.attempts=M,p}function M3(s){return s.webkitRelativePath||s.name}function E3(s){return typeof s!="number"?"-":s.toFixed(2)}function v0(s){return typeof s!="number"||Number.isNaN(s)?0:Math.max(0,Math.min(100,s))}function T3(s){const e=s==null?void 0:s.raw_text;if(!e||typeof e!="string")return null;let t=e.trim();t.startsWith("```")&&(t=t.replace(/^```(?:json)?\s*/i,"").replace(/```$/,"").trim());try{return JSON.parse(t)}catch{return null}}function b3(s){return s>=85?"通过":s>=70?"需关注":"高风险"}function _f(s,e){try{const t=localStorage.getItem(s);return t!==null?t:e}catch{return e}}function w3(){var ce,ue,J,O,ne,q,k,re,Le;const[s,e]=Rt.useState([]),[t,r]=Rt.useState(!1),[o,l]=Rt.useState(!1),[u,f]=Rt.useState(""),[h,p]=Rt.useState(null),[g,x]=Rt.useState(!0),[_,y]=Rt.useState(()=>_f("ai_model","gpt-4o")),[M,E]=Rt.useState(()=>_f("ai_base_url","")),[S,v]=Rt.useState(()=>_f("ai_key",""));Rt.useEffect(()=>{try{localStorage.setItem("ai_model",_),localStorage.setItem("ai_base_url",M),localStorage.setItem("ai_key",S)}catch{}},[_,M,S]);const L=s.length>0&&!t,A=Rt.useMemo(()=>s.slice(0,8).map(xe=>M3(xe)).join(`
`)+(s.length>8?`
... (${s.length-8} more)`:""),[s]),D=Rt.useMemo(()=>T3(h==null?void 0:h.ai_review),[h]),F=v0((ce=h==null?void 0:h.scores)==null?void 0:ce.overall),R=((ue=h==null?void 0:h.summary)==null?void 0:ue.issue_counts)||{},U=R.error||0,X=R.warning||0,P=Array.isArray(D==null?void 0:D.suggestions)?D.suggestions.length:0,C=Object.values((h==null?void 0:h.checks)||{}).filter(xe=>xe==null?void 0:xe.passed).length,z=xe=>{const Pe=Array.from(xe.target.files||[]);e(Pe),f("")},Q=async()=>{if(L){r(!0),f(""),p(null);try{const xe=await g3(s);p(xe)}catch(xe){f(String(xe.message||xe))}finally{r(!1)}}},ie=async()=>{if(!(!h||o)){l(!0);try{const xe=await S3({objectName:h.object_name,scores:h.scores,summary:h.summary,checks:h.checks,apiKey:S,baseUrl:M,model:_});p(Pe=>({...Pe,ai_review:xe}))}catch(xe){p(Pe=>({...Pe,ai_review:{enabled:!1,error:String(xe.message||xe)}}))}finally{l(!1)}}},de=()=>{if(!h)return;const xe=new Blob([JSON.stringify(h,null,2)],{type:"application/json"}),Pe=URL.createObjectURL(xe),ee=document.createElement("a");ee.href=Pe,ee.download=`${h.object_name||"audit"}-report.json`,ee.click(),URL.revokeObjectURL(Pe)};return he.jsx("div",{className:"audit-app",children:he.jsxs("div",{className:"page",children:[he.jsx("p",{className:"muted",children:"Upload an object folder (containing URDF, grasp_poses, mobility_v2, result, mesh). All auditing runs locally in the browser."}),he.jsxs("div",{className:"card",children:[he.jsx("label",{className:"label",children:"选择文件夹"}),he.jsx("input",{type:"file",multiple:!0,webkitdirectory:"true",directory:"",onChange:z}),he.jsxs("p",{className:"muted",children:["已选择 ",s.length," 个文件"]}),he.jsx("div",{className:"formRow",children:he.jsxs("label",{children:[he.jsx("input",{type:"checkbox",checked:g,onChange:xe=>x(xe.target.checked)}),"启用AI审核"]})}),g&&he.jsxs("div",{className:"aiConfigCard",children:[he.jsx("div",{className:"formRow",children:he.jsx("input",{className:"modelInput",value:M,onChange:xe=>E(xe.target.value),placeholder:"API Base URL，如 https://api.openai.com"})}),he.jsxs("div",{className:"formRow",children:[he.jsx("input",{className:"modelInput",type:"password",value:S,onChange:xe=>v(xe.target.value),placeholder:"API Key（仅存储在本地浏览器）"}),he.jsx("input",{className:"modelInput",value:_,onChange:xe=>y(xe.target.value),placeholder:"模型名，如 gpt-4o",style:{maxWidth:200}})]}),he.jsx("p",{className:"muted",style:{fontSize:12},children:"API Key 仅保存在浏览器 localStorage，不会发送到任何第三方服务器。"})]}),s.length>0&&he.jsx("pre",{className:"preview",children:A}),he.jsx("button",{disabled:!L,onClick:Q,children:t?"审核中...":"开始审核"})]}),u&&he.jsx("div",{className:"error",children:u}),h&&he.jsxs("div",{className:"card reportCard",children:[he.jsxs("div",{className:"row",children:[he.jsxs("h2",{children:["审核报告: ",h.object_name]}),he.jsxs("div",{style:{display:"flex",gap:8},children:[g&&he.jsx("button",{onClick:ie,disabled:o,children:o?"AI审核中...":"运行AI审核"}),he.jsx("button",{onClick:de,children:"导出 JSON"})]})]}),he.jsxs("div",{className:"summaryHero",children:[he.jsxs("div",{className:"summaryMain",children:[he.jsx("p",{className:"summaryTag",children:"● 总结"}),he.jsx("h2",{className:"summaryTitle",children:"URDF 审阅结论"}),he.jsx("p",{className:"summaryText",children:D!=null&&D.verdict?`AI结论：${D.verdict}。${Array.isArray(D==null?void 0:D.key_findings)?D.key_findings.join(" "):""}`:"已完成结构与抓取姿态审核。你可以结合下方错误、警告和AI建议进行修正。"})]}),he.jsxs("div",{className:"scoreBadge",children:[he.jsx("div",{className:"scoreLabel",children:"总分"}),he.jsxs("div",{className:"scoreValue",children:[Math.round(F),"%"]}),he.jsx("div",{className:"scoreStatus",children:b3(F)})]})]}),he.jsx("div",{className:"progressWrap",children:he.jsx("div",{className:"progressBar",children:he.jsx("div",{className:"progressFill",style:{width:`${F}%`}})})}),he.jsxs("div",{className:"statsGrid",children:[he.jsxs("div",{className:"statCard statError",children:[he.jsx("div",{className:"statName",children:"错误"}),he.jsx("div",{className:"statValue",children:U})]}),he.jsxs("div",{className:"statCard statWarn",children:[he.jsx("div",{className:"statName",children:"警告"}),he.jsx("div",{className:"statValue",children:X})]}),he.jsxs("div",{className:"statCard statInfo",children:[he.jsx("div",{className:"statName",children:"建议"}),he.jsx("div",{className:"statValue",children:P})]}),he.jsxs("div",{className:"statCard statPass",children:[he.jsx("div",{className:"statName",children:"通过"}),he.jsx("div",{className:"statValue",children:C})]})]}),he.jsx("div",{className:"scoreList",children:Object.entries(h.scores||{}).filter(([xe])=>xe!=="overall").map(([xe,Pe])=>{const ee=v0(Number(Pe));return he.jsxs("div",{className:"scoreItem",children:[he.jsxs("div",{className:"scoreItemTop",children:[he.jsx("span",{children:xe}),he.jsx("span",{children:E3(Number(Pe))})]}),he.jsx("div",{className:"scoreTrack",children:he.jsx("div",{className:"scoreTrackFill",style:{width:`${ee}%`}})})]},xe)})}),he.jsxs("div",{className:"aiCard",children:[he.jsx("h3",{children:"AI Review"}),!((J=h.ai_review)!=null&&J.enabled)&&he.jsx("p",{className:"muted",children:((O=h.ai_review)==null?void 0:O.note)||((ne=h.ai_review)==null?void 0:ne.error)||"AI审核未启用或配置不完整。点击上方「运行AI审核」按钮。"}),((q=h.ai_review)==null?void 0:q.enabled)&&he.jsxs(he.Fragment,{children:[he.jsxs("p",{className:"muted",children:["model: ",((re=(k=h.ai_review)==null?void 0:k.configured)==null?void 0:re.model)||"-"]}),D?he.jsxs(he.Fragment,{children:[he.jsxs("p",{children:[he.jsx("strong",{children:"结论："}),D.verdict||"-"]}),he.jsxs("p",{children:[he.jsx("strong",{children:"风险等级："}),D.risk_level||"-"]}),Array.isArray(D.key_findings)&&D.key_findings.length>0&&he.jsxs("div",{children:[he.jsx("strong",{children:"关键发现："}),he.jsx("ul",{children:D.key_findings.map((xe,Pe)=>he.jsx("li",{children:xe},`${xe}-${Pe}`))})]}),Array.isArray(D.suggestions)&&D.suggestions.length>0&&he.jsxs("div",{children:[he.jsx("strong",{children:"建议："}),he.jsx("ul",{children:D.suggestions.map((xe,Pe)=>he.jsx("li",{children:xe},`${xe}-${Pe}`))})]})]}):he.jsx("pre",{className:"preview",children:((Le=h.ai_review)==null?void 0:Le.raw_text)||"AI未返回结构化文本"})]})]}),he.jsx(GE,{files:s,report:h}),he.jsx("h3",{children:"Checks JSON"}),he.jsx("pre",{className:"preview",children:JSON.stringify(h.checks,null,2)})]})]})})}jg.createRoot(document.getElementById("root")).render(he.jsx(Bg.StrictMode,{children:he.jsx(w3,{})}));
