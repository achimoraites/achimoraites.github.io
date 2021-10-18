import{S as n,i as e,s as a,A as t,j as s,m as o,o as p,p as c,v as i,r,w as h,q as u,e as l,t as d,k as m,c as f,a as y,g,d as k,n as w,b as v,f as b,D as E,E as T}from"../../chunks/vendor-165bcab4.js";import{B as I}from"../../chunks/blog-post-layout-92dc1cf1.js";import"../../chunks/preload-helper-9f12a5fd.js";import"../../chunks/OpenGraph-241cde62.js";import"../../chunks/ArticleCard-ffd1002d.js";function P(n){let e,a,t,s,o,p,c,i,r,h,u,I,P,x,C,B,H,A,$,O,j,L,U,N,R,S,G,M,W,Y,z,D,q,F,J,K,Q,V,X,Z,_,nn,en,an,tn,sn,on,pn,cn,rn,hn,un,ln,dn,mn,fn,yn,gn,kn,wn,vn,bn,En,Tn,In,Pn,xn,Cn,Bn,Hn,An,$n,On,jn,Ln,Un,Nn,Rn,Sn,Gn,Mn,Wn,Yn,zn,Dn,qn,Fn,Jn,Kn,Qn,Vn,Xn,Zn,_n,ne,ee,ae,te,se,oe,pe,ce,ie,re,he,ue,le,de,me,fe,ye,ge,ke,we,ve,be,Ee,Te,Ie,Pe,xe,Ce,Be,He,Ae,$e,Oe,je,Le,Ue,Ne;return{c(){e=l("h2"),a=d("About"),t=m(),s=l("p"),o=d("Component inheritance can be useful when you\nhave duplicated/shared code between your components."),p=m(),c=l("p"),i=d("Think about having a situation where you have 3 components\nthat share a "),r=l("code"),h=d("theme @Input()"),u=m(),I=l("p"),P=d("This could be the case where you want to have your components to adapt based on a provided theme."),x=m(),C=l("h2"),B=d("Why"),H=m(),A=l("p"),$=d("When you have 2-3 components with shared functionality\nyou might say “well why to bother with inheritance?“."),O=m(),j=l("p"),L=d("And in the most common cases that’s okay, you don’t need to."),U=m(),N=l("p"),R=d("But by using inheritance you do more than just to avoid to type the shared functionality between your components."),S=m(),G=l("p"),M=d("The benefit of inheritance is when we have shared functionality in many components!"),W=m(),Y=l("h2"),z=d("How"),D=m(),q=l("p"),F=d("Using component inheritance is simple, you need:"),J=m(),K=l("ul"),Q=l("li"),V=d("A Base component"),X=m(),Z=l("li"),_=d("The Component/s to extend the Base component"),nn=m(),en=l("h2"),an=d("A simple example"),tn=m(),sn=l("p"),on=d("Here we will use only one component to extend the Base component but the same process applies to no matter how many components we are going to use."),pn=m(),cn=l("h3"),rn=d("Base component"),hn=m(),un=l("pre"),ln=m(),dn=l("h3"),mn=d("ThemedInput component"),fn=m(),yn=l("p"),gn=d("By extending the Base component the ThemedInput has the theme input!"),kn=m(),wn=l("p"),vn=d("Anything added / updated in the Base component will be reflected here too!"),bn=m(),En=l("pre"),Tn=m(),In=l("h3"),Pn=d("Changing/Updating shared functionality"),xn=m(),Cn=l("p"),Bn=d("Having a base component with the shared functionality you can now "),Hn=l("strong"),An=d("change/update the shared functionality in one place"),$n=d(" instead of doing it in every component that exists or will be created in the future!"),On=m(),jn=l("p"),Ln=d("A good scenario would be when you decide to use a service that is common to all the components to share state."),Un=m(),Nn=l("p"),Rn=d("Imagine that one day you need to switch to NgRx:"),Sn=m(),Gn=l("ul"),Mn=l("li"),Wn=l("strong"),Yn=d("Case 1 - You are using inheritance"),zn=d(": all you need to do is to update the base component to start using it."),Dn=m(),qn=l("li"),Fn=l("strong"),Jn=d("Case 2 - You are NOT using inheritance"),Kn=d(": oh poor soul… you will need to go to all of the components and you will need to update the code for each one of them!"),Qn=m(),Vn=l("p"),Xn=d("I believe the first Case is faster, simpler and less error prone ;)"),Zn=m(),_n=l("p"),ne=l("strong"),ee=d("Adding new shared functionality becomes simple!"),ae=m(),te=l("h3"),se=d("Testing shared code"),oe=m(),pe=l("p"),ce=d("Testing the shared functionality is simpler, all we need to do is to test the base class."),ie=m(),re=l("p"),he=d("This way we avoid having to write tests that are actually testing the same shared code across components."),ue=m(),le=l("h2"),de=d("Summary"),me=m(),fe=l("p"),ye=d("Using the right tool for the job is important, here we explored using component inheritance to:"),ge=m(),ke=l("ul"),we=l("li"),ve=d("simplify the usage of shared component code"),be=m(),Ee=l("li"),Te=d("allow for easier future change / update"),Ie=m(),Pe=l("li"),xe=d("optimizing the testing of our shared code"),Ce=m(),Be=l("p"),He=l("strong"),Ae=d("Inheritance is powerful yet keep in mind that to use it only when it makes sense."),$e=m(),Oe=l("p"),je=d("Most of the times composition does the trick!"),Le=m(),Ue=l("p"),Ne=d("Happy coding!!!"),this.h()},l(n){e=f(n,"H2",{});var l=y(e);a=g(l,"About"),l.forEach(k),t=w(n),s=f(n,"P",{});var d=y(s);o=g(d,"Component inheritance can be useful when you\nhave duplicated/shared code between your components."),d.forEach(k),p=w(n),c=f(n,"P",{});var m=y(c);i=g(m,"Think about having a situation where you have 3 components\nthat share a "),r=f(m,"CODE",{});var v=y(r);h=g(v,"theme @Input()"),v.forEach(k),m.forEach(k),u=w(n),I=f(n,"P",{});var b=y(I);P=g(b,"This could be the case where you want to have your components to adapt based on a provided theme."),b.forEach(k),x=w(n),C=f(n,"H2",{});var E=y(C);B=g(E,"Why"),E.forEach(k),H=w(n),A=f(n,"P",{});var T=y(A);$=g(T,"When you have 2-3 components with shared functionality\nyou might say “well why to bother with inheritance?“."),T.forEach(k),O=w(n),j=f(n,"P",{});var Re=y(j);L=g(Re,"And in the most common cases that’s okay, you don’t need to."),Re.forEach(k),U=w(n),N=f(n,"P",{});var Se=y(N);R=g(Se,"But by using inheritance you do more than just to avoid to type the shared functionality between your components."),Se.forEach(k),S=w(n),G=f(n,"P",{});var Ge=y(G);M=g(Ge,"The benefit of inheritance is when we have shared functionality in many components!"),Ge.forEach(k),W=w(n),Y=f(n,"H2",{});var Me=y(Y);z=g(Me,"How"),Me.forEach(k),D=w(n),q=f(n,"P",{});var We=y(q);F=g(We,"Using component inheritance is simple, you need:"),We.forEach(k),J=w(n),K=f(n,"UL",{});var Ye=y(K);Q=f(Ye,"LI",{});var ze=y(Q);V=g(ze,"A Base component"),ze.forEach(k),X=w(Ye),Z=f(Ye,"LI",{});var De=y(Z);_=g(De,"The Component/s to extend the Base component"),De.forEach(k),Ye.forEach(k),nn=w(n),en=f(n,"H2",{});var qe=y(en);an=g(qe,"A simple example"),qe.forEach(k),tn=w(n),sn=f(n,"P",{});var Fe=y(sn);on=g(Fe,"Here we will use only one component to extend the Base component but the same process applies to no matter how many components we are going to use."),Fe.forEach(k),pn=w(n),cn=f(n,"H3",{});var Je=y(cn);rn=g(Je,"Base component"),Je.forEach(k),hn=w(n),un=f(n,"PRE",{class:!0}),y(un).forEach(k),ln=w(n),dn=f(n,"H3",{});var Ke=y(dn);mn=g(Ke,"ThemedInput component"),Ke.forEach(k),fn=w(n),yn=f(n,"P",{});var Qe=y(yn);gn=g(Qe,"By extending the Base component the ThemedInput has the theme input!"),Qe.forEach(k),kn=w(n),wn=f(n,"P",{});var Ve=y(wn);vn=g(Ve,"Anything added / updated in the Base component will be reflected here too!"),Ve.forEach(k),bn=w(n),En=f(n,"PRE",{class:!0}),y(En).forEach(k),Tn=w(n),In=f(n,"H3",{});var Xe=y(In);Pn=g(Xe,"Changing/Updating shared functionality"),Xe.forEach(k),xn=w(n),Cn=f(n,"P",{});var Ze=y(Cn);Bn=g(Ze,"Having a base component with the shared functionality you can now "),Hn=f(Ze,"STRONG",{});var _e=y(Hn);An=g(_e,"change/update the shared functionality in one place"),_e.forEach(k),$n=g(Ze," instead of doing it in every component that exists or will be created in the future!"),Ze.forEach(k),On=w(n),jn=f(n,"P",{});var na=y(jn);Ln=g(na,"A good scenario would be when you decide to use a service that is common to all the components to share state."),na.forEach(k),Un=w(n),Nn=f(n,"P",{});var ea=y(Nn);Rn=g(ea,"Imagine that one day you need to switch to NgRx:"),ea.forEach(k),Sn=w(n),Gn=f(n,"UL",{});var aa=y(Gn);Mn=f(aa,"LI",{});var ta=y(Mn);Wn=f(ta,"STRONG",{});var sa=y(Wn);Yn=g(sa,"Case 1 - You are using inheritance"),sa.forEach(k),zn=g(ta,": all you need to do is to update the base component to start using it."),ta.forEach(k),Dn=w(aa),qn=f(aa,"LI",{});var oa=y(qn);Fn=f(oa,"STRONG",{});var pa=y(Fn);Jn=g(pa,"Case 2 - You are NOT using inheritance"),pa.forEach(k),Kn=g(oa,": oh poor soul… you will need to go to all of the components and you will need to update the code for each one of them!"),oa.forEach(k),aa.forEach(k),Qn=w(n),Vn=f(n,"P",{});var ca=y(Vn);Xn=g(ca,"I believe the first Case is faster, simpler and less error prone ;)"),ca.forEach(k),Zn=w(n),_n=f(n,"P",{});var ia=y(_n);ne=f(ia,"STRONG",{});var ra=y(ne);ee=g(ra,"Adding new shared functionality becomes simple!"),ra.forEach(k),ia.forEach(k),ae=w(n),te=f(n,"H3",{});var ha=y(te);se=g(ha,"Testing shared code"),ha.forEach(k),oe=w(n),pe=f(n,"P",{});var ua=y(pe);ce=g(ua,"Testing the shared functionality is simpler, all we need to do is to test the base class."),ua.forEach(k),ie=w(n),re=f(n,"P",{});var la=y(re);he=g(la,"This way we avoid having to write tests that are actually testing the same shared code across components."),la.forEach(k),ue=w(n),le=f(n,"H2",{});var da=y(le);de=g(da,"Summary"),da.forEach(k),me=w(n),fe=f(n,"P",{});var ma=y(fe);ye=g(ma,"Using the right tool for the job is important, here we explored using component inheritance to:"),ma.forEach(k),ge=w(n),ke=f(n,"UL",{});var fa=y(ke);we=f(fa,"LI",{});var ya=y(we);ve=g(ya,"simplify the usage of shared component code"),ya.forEach(k),be=w(fa),Ee=f(fa,"LI",{});var ga=y(Ee);Te=g(ga,"allow for easier future change / update"),ga.forEach(k),Ie=w(fa),Pe=f(fa,"LI",{});var ka=y(Pe);xe=g(ka,"optimizing the testing of our shared code"),ka.forEach(k),fa.forEach(k),Ce=w(n),Be=f(n,"P",{});var wa=y(Be);He=f(wa,"STRONG",{});var va=y(He);Ae=g(va,"Inheritance is powerful yet keep in mind that to use it only when it makes sense."),va.forEach(k),wa.forEach(k),$e=w(n),Oe=f(n,"P",{});var ba=y(Oe);je=g(ba,"Most of the times composition does the trick!"),ba.forEach(k),Le=w(n),Ue=f(n,"P",{});var Ea=y(Ue);Ne=g(Ea,"Happy coding!!!"),Ea.forEach(k),this.h()},h(){v(un,"class","language-typescript"),v(En,"class","language-typescript")},m(n,l){b(n,e,l),E(e,a),b(n,t,l),b(n,s,l),E(s,o),b(n,p,l),b(n,c,l),E(c,i),E(c,r),E(r,h),b(n,u,l),b(n,I,l),E(I,P),b(n,x,l),b(n,C,l),E(C,B),b(n,H,l),b(n,A,l),E(A,$),b(n,O,l),b(n,j,l),E(j,L),b(n,U,l),b(n,N,l),E(N,R),b(n,S,l),b(n,G,l),E(G,M),b(n,W,l),b(n,Y,l),E(Y,z),b(n,D,l),b(n,q,l),E(q,F),b(n,J,l),b(n,K,l),E(K,Q),E(Q,V),E(K,X),E(K,Z),E(Z,_),b(n,nn,l),b(n,en,l),E(en,an),b(n,tn,l),b(n,sn,l),E(sn,on),b(n,pn,l),b(n,cn,l),E(cn,rn),b(n,hn,l),b(n,un,l),un.innerHTML='<code class="language-typescript"><span class="token comment">// base.component.ts</span>\n<span class="token comment">//....</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\nselector<span class="token operator">:</span> <span class="token string">\'my-base\'</span><span class="token punctuation">,</span>\ntemplate<span class="token operator">:</span> <span class="token string">\'\'</span> <span class="token comment">// notice that the template is empty!</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BaseComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">&#123;</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> theme<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>\n\n    <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span></code>',b(n,ln,l),b(n,dn,l),E(dn,mn),b(n,fn,l),b(n,yn,l),E(yn,gn),b(n,kn,l),b(n,wn,l),E(wn,vn),b(n,bn,l),b(n,En,l),En.innerHTML='<code class="language-typescript"><span class="token comment">// themed-input.component.ts</span>\n<span class="token comment">//....</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\nselector<span class="token operator">:</span> <span class="token string">\'my-themed-input\'</span><span class="token punctuation">,</span>\ntemplateUrl<span class="token operator">:</span> <span class="token string">\'./themed-input-component.html\'</span><span class="token punctuation">.</span>\nstyleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./themed-input-component.scss\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ThemedInputComponent</span> <span class="token keyword">extends</span> <span class="token class-name">BaseComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">&#123;</span>\n\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n\n    <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span></code>',b(n,Tn,l),b(n,In,l),E(In,Pn),b(n,xn,l),b(n,Cn,l),E(Cn,Bn),E(Cn,Hn),E(Hn,An),E(Cn,$n),b(n,On,l),b(n,jn,l),E(jn,Ln),b(n,Un,l),b(n,Nn,l),E(Nn,Rn),b(n,Sn,l),b(n,Gn,l),E(Gn,Mn),E(Mn,Wn),E(Wn,Yn),E(Mn,zn),E(Gn,Dn),E(Gn,qn),E(qn,Fn),E(Fn,Jn),E(qn,Kn),b(n,Qn,l),b(n,Vn,l),E(Vn,Xn),b(n,Zn,l),b(n,_n,l),E(_n,ne),E(ne,ee),b(n,ae,l),b(n,te,l),E(te,se),b(n,oe,l),b(n,pe,l),E(pe,ce),b(n,ie,l),b(n,re,l),E(re,he),b(n,ue,l),b(n,le,l),E(le,de),b(n,me,l),b(n,fe,l),E(fe,ye),b(n,ge,l),b(n,ke,l),E(ke,we),E(we,ve),E(ke,be),E(ke,Ee),E(Ee,Te),E(ke,Ie),E(ke,Pe),E(Pe,xe),b(n,Ce,l),b(n,Be,l),E(Be,He),E(He,Ae),b(n,$e,l),b(n,Oe,l),E(Oe,je),b(n,Le,l),b(n,Ue,l),E(Ue,Ne)},p:T,d(n){n&&k(e),n&&k(t),n&&k(s),n&&k(p),n&&k(c),n&&k(u),n&&k(I),n&&k(x),n&&k(C),n&&k(H),n&&k(A),n&&k(O),n&&k(j),n&&k(U),n&&k(N),n&&k(S),n&&k(G),n&&k(W),n&&k(Y),n&&k(D),n&&k(q),n&&k(J),n&&k(K),n&&k(nn),n&&k(en),n&&k(tn),n&&k(sn),n&&k(pn),n&&k(cn),n&&k(hn),n&&k(un),n&&k(ln),n&&k(dn),n&&k(fn),n&&k(yn),n&&k(kn),n&&k(wn),n&&k(bn),n&&k(En),n&&k(Tn),n&&k(In),n&&k(xn),n&&k(Cn),n&&k(On),n&&k(jn),n&&k(Un),n&&k(Nn),n&&k(Sn),n&&k(Gn),n&&k(Qn),n&&k(Vn),n&&k(Zn),n&&k(_n),n&&k(ae),n&&k(te),n&&k(oe),n&&k(pe),n&&k(ie),n&&k(re),n&&k(ue),n&&k(le),n&&k(me),n&&k(fe),n&&k(ge),n&&k(ke),n&&k(Ce),n&&k(Be),n&&k($e),n&&k(Oe),n&&k(Le),n&&k(Ue)}}}function x(n){let e,a;const l=[C];let d={$$slots:{default:[P]},$$scope:{ctx:n}};for(let s=0;s<l.length;s+=1)d=t(d,l[s]);return e=new I({props:d}),{c(){s(e.$$.fragment)},l(n){o(e.$$.fragment,n)},m(n,t){p(e,n,t),a=!0},p(n,[a]){const t=0&a?c(l,[u(C)]):{};1&a&&(t.$$scope={dirty:a,ctx:n}),e.$set(t)},i(n){a||(i(e.$$.fragment,n),a=!0)},o(n){r(e.$$.fragment,n),a=!1},d(n){h(e,n)}}}const C={author:"achimoraites",date:"Fri May 08 2020 00:00:00 GMT+0300",excerpt:"Component inheritance can be useful when you have duplicated/shared code between your components.",tags:["typescript","angular","oop","javascript"],slug:"angular-component-inheritance",subtitle:"Improve the scalabillity of your Angular project by using inheritance!",title:"Angular Component inheritance",url:"https://achimoraites.github.io/blog/angular-component-inheritance"},B=!0;export default class extends n{constructor(n){super(),e(this,n,null,x,a,{})}}export{C as metadata,B as prerender};
