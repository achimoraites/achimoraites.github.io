function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function u(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n){let e;return function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>e=t))(),e}function i(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,u,c){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,u);if(s){const r=f(n,e,o,c);t.p(r,s)}}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function b(){return m(" ")}function y(){return m("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t){return Array.from(t.childNodes)}function w(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const u=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||u.push(t.name)}for(let t=0;t<u.length;t++)o.removeAttribute(u[t]);return t.splice(r,1)[0]}}return o?$(n):g(n)}function E(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function k(t){return E(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n){t.value=null==n?"":n}function N(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function O(t,n=document.body){return Array.from(n.querySelectorAll(t))}let S;function q(t){S=t}function C(){if(!S)throw new Error("Function called outside component initialization");return S}function L(t){C().$$.on_mount.push(t)}function M(t){C().$$.after_update.push(t)}function T(t,n){C().$$.context.set(t,n)}function z(t){return C().$$.context.get(t)}const B=[],F=[],P=[],D=[],G=Promise.resolve();let H=!1;function I(t){P.push(t)}let J=!1;const K=new Set;function Q(){if(!J){J=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];q(n),R(n.$$)}for(q(null),B.length=0;F.length;)F.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];K.has(n)||(K.add(n),n())}P.length=0}while(B.length);for(;D.length;)D.pop()();H=!1,J=!1,K.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const U=new Set;let V;function W(){V={r:0,c:[],p:V}}function X(){V.r||r(V.c),V=V.p}function Y(t,n){t&&t.i&&(U.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push((()=>{U.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function tt(t,n){const e={},o={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=n[u];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[u]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function nt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function ot(t,n){t&&t.l(n)}function rt(t,n,o,c){const{fragment:s,on_mount:i,on_destroy:f,after_update:a}=t.$$;s&&s.m(n,o),c||I((()=>{const n=i.map(e).filter(u);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(I)}function ut(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){-1===t.$$.dirty[0]&&(B.push(t),H||(H=!0,G.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function st(n,e,u,c,s,i,f=[-1]){const a=S;q(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=u?u(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&s(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ct(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!c&&c(l.ctx),e.target){if(e.hydrate){const t=v(e.target);l.fragment&&l.fragment.l(t),t.forEach(h)}else l.fragment&&l.fragment.c();e.intro&&Y(n.$$.fragment),rt(n,e.target,e.anchor,e.customElement),Q()}q(a)}class it{$destroy(){ut(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft=[];function at(n,e=t){let o;const r=[];function u(t){if(c(n,t)&&(n=t,o)){const t=!ft.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),ft.push(t,n)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(c,s=t){const i=[c,s];return r.push(i),1===r.length&&(o=e(u)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,W as B,at as C,l as D,t as E,x as F,$ as G,p as H,i as I,a as J,O as K,j as L,z as M,N,s as O,it as S,v as a,_ as b,w as c,h as d,g as e,d as f,E as g,A as h,st as i,et as j,b as k,y as l,ot as m,k as n,rt as o,tt as p,nt as q,Z as r,c as s,m as t,X as u,Y as v,ut as w,T as x,M as y,L as z};
