import{S as s,i as t,s as l,e as a,t as e,c as r,a as n,g as c,d as h,b as o,f,E as g,h as i,J as u,G as p}from"./vendor-3b929796.js";function d(s,t,l){const a=s.slice();return a[1]=t[l],a}function m(s){let t,l,u,p,d,m=s[1]+"";return{c(){t=a("a"),l=a("span"),u=e("#"),p=e(m),this.h()},l(s){t=r(s,"A",{class:!0,href:!0});var a=n(t);l=r(a,"SPAN",{class:!0});var e=n(l);u=c(e,"#"),p=c(e,m),e.forEach(h),a.forEach(h),this.h()},h(){o(l,"class",d="mr-2 rounded-full py-1 px-2 "+s[1]+" svelte-slgka1"),o(t,"class","my-1"),o(t,"href","/blog")},m(s,a){f(s,t,a),g(t,l),g(l,u),g(l,p)},p(s,t){1&t&&m!==(m=s[1]+"")&&i(p,m),1&t&&d!==(d="mr-2 rounded-full py-1 px-2 "+s[1]+" svelte-slgka1")&&o(l,"class",d)},d(s){s&&h(t)}}}function v(s){let t,l=s[0],e=[];for(let a=0;a<l.length;a+=1)e[a]=m(d(s,l,a));return{c(){t=a("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=r(s,"DIV",{class:!0});var l=n(t);for(let t=0;t<e.length;t+=1)e[t].l(l);l.forEach(h),this.h()},h(){o(t,"class","flex flex-wrap")},m(s,l){f(s,t,l);for(let a=0;a<e.length;a+=1)e[a].m(t,null)},p(s,[a]){if(1&a){let r;for(l=s[0],r=0;r<l.length;r+=1){const n=d(s,l,r);e[r]?e[r].p(n,a):(e[r]=m(n),e[r].c(),e[r].m(t,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=l.length}},i:u,o:u,d(s){s&&h(t),p(e,s)}}}function x(s,t,l){let{tags:a=[]}=t;return s.$$set=s=>{"tags"in s&&l(0,a=s.tags)},[a]}class E extends s{constructor(s){super(),t(this,s,x,v,l,{tags:0})}}export{E as T};
