import{S as a,i as s,s as n,A as e,j as o,m as t,o as p,p as r,v as c,r as l,w as u,q as i,e as d,t as h,k,c as m,a as f,g as y,d as g,n as v,b as w,f as E,D as M,E as b}from"../../chunks/vendor-165bcab4.js";import{B as C}from"../../chunks/blog-post-layout-92dc1cf1.js";import"../../chunks/preload-helper-9f12a5fd.js";import"../../chunks/OpenGraph-241cde62.js";import"../../chunks/ArticleCard-ffd1002d.js";function P(a){let s,n,e,o,t,p,r,c,l,u,i,C,P,S,x,L,T,j,N,I,A,O,$,H,W,D,F,R,q,B,G,_,z,U,Y,J,K,Q,V,X,Z,aa,sa,na,ea,oa,ta,pa,ra,ca,la,ua,ia,da,ha,ka,ma,fa,ya,ga,va,wa,Ea,Ma,ba,Ca,Pa,Sa,xa,La,Ta,ja,Na,Ia,Aa,Oa,$a,Ha,Wa,Da,Fa,Ra,qa,Ba,Ga,_a,za,Ua,Ya,Ja,Ka,Qa,Va,Xa,Za,as,ss,ns,es,os,ts,ps,rs,cs,ls,us,is,ds,hs,ks,ms,fs,ys,gs,vs,ws,Es,Ms,bs,Cs,Ps,Ss;return{c(){s=d("p"),n=h("Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability."),e=k(),o=d("p"),t=h("By setting up your project to use each module type properly you will have better control over your project to add more advanced features such as Lazy Loading and a more organized structure to work with."),p=k(),r=d("p"),c=h("We have 3 types of modules:"),l=k(),u=d("ul"),i=d("li"),C=d("strong"),P=h("Feature modules"),S=k(),x=d("li"),L=d("strong"),T=h("Core Module"),j=k(),N=d("li"),I=d("strong"),A=h("Shared Module"),O=k(),$=d("h2"),H=h("Feature Modules"),W=k(),D=d("p"),F=h("those are the modules that encapsulate a specific feature at a logic level, for example you have a dashboard page that allows the users to see their projects."),R=k(),q=d("p"),B=h("The dashboard module will have everything that is needed to allow a user to see their projects:"),G=k(),_=d("ul"),z=d("li"),U=h("components"),Y=k(),J=d("li"),K=h("services"),Q=k(),V=d("li"),X=h("pipes"),Z=k(),aa=d("li"),sa=h("directives"),na=k(),ea=d("p"),oa=h("In general feature specific functionality is included in the module."),ta=k(),pa=d("p"),ra=h("If we need to use some common functionality in our Feature Modules we import the Shared Module in the Modules that needs it."),ca=k(),la=d("p"),ua=h("We will talk more about shared functionality later."),ia=k(),da=d("pre"),ha=k(),ka=d("h2"),ma=h("Core Module"),fa=k(),ya=d("p"),ga=h("Here we include functionality that will be used only ONCE!"),va=k(),wa=d("p"),Ea=d("strong"),Ma=h("The Core module is used ONLY in the root (app) Module!"),ba=k(),Ca=d("p"),Pa=h("Common "),Sa=d("strong"),xa=h("services are placed in the Core Module"),La=h(" to ensure we have only a single instance of the services to avoid unexpected behaviors."),Ta=k(),ja=d("p"),Na=h("In this type of module we also place components that are used only ONCE for example the NavBar and the Footer components."),Ia=k(),Aa=d("pre"),Oa=k(),$a=d("h2"),Ha=h("Shared Module"),Wa=k(),Da=d("p"),Fa=h("This is the most missunderstooded kind of Module!"),Ra=k(),qa=d("p"),Ba=h("The purpose of the SharedModule is to make available commonly used:"),Ga=k(),_a=d("ul"),za=d("li"),Ua=h("components"),Ya=k(),Ja=d("li"),Ka=h("directives"),Qa=k(),Va=d("li"),Xa=h("pipes"),Za=k(),as=d("p"),ss=h("We use the SharedModule in the feature modules to make common functionality available."),ns=k(),es=d("p"),os=h("We also make sure to have only one Shared Module."),ts=k(),ps=d("p"),rs=h("We avoid placing services here!"),cs=k(),ls=d("pre"),us=k(),is=d("p"),ds=h("This was a brief introduction to the 3 most common Modules types used in Angular Applications."),hs=k(),ks=d("p"),ms=h("Happy coding 😄"),fs=k(),ys=d("h3"),gs=h("Credits"),vs=k(),ws=d("p"),Es=h("Photo by "),Ms=d("a"),bs=h("Digital Buggu"),Cs=h("  from "),Ps=d("a"),Ss=h("Pexels"),this.h()},l(a){s=m(a,"P",{});var d=f(s);n=y(d,"Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability."),d.forEach(g),e=v(a),o=m(a,"P",{});var h=f(o);t=y(h,"By setting up your project to use each module type properly you will have better control over your project to add more advanced features such as Lazy Loading and a more organized structure to work with."),h.forEach(g),p=v(a),r=m(a,"P",{});var k=f(r);c=y(k,"We have 3 types of modules:"),k.forEach(g),l=v(a),u=m(a,"UL",{});var w=f(u);i=m(w,"LI",{});var E=f(i);C=m(E,"STRONG",{});var M=f(C);P=y(M,"Feature modules"),M.forEach(g),E.forEach(g),S=v(w),x=m(w,"LI",{});var b=f(x);L=m(b,"STRONG",{});var xs=f(L);T=y(xs,"Core Module"),xs.forEach(g),b.forEach(g),j=v(w),N=m(w,"LI",{});var Ls=f(N);I=m(Ls,"STRONG",{});var Ts=f(I);A=y(Ts,"Shared Module"),Ts.forEach(g),Ls.forEach(g),w.forEach(g),O=v(a),$=m(a,"H2",{});var js=f($);H=y(js,"Feature Modules"),js.forEach(g),W=v(a),D=m(a,"P",{});var Ns=f(D);F=y(Ns,"those are the modules that encapsulate a specific feature at a logic level, for example you have a dashboard page that allows the users to see their projects."),Ns.forEach(g),R=v(a),q=m(a,"P",{});var Is=f(q);B=y(Is,"The dashboard module will have everything that is needed to allow a user to see their projects:"),Is.forEach(g),G=v(a),_=m(a,"UL",{});var As=f(_);z=m(As,"LI",{});var Os=f(z);U=y(Os,"components"),Os.forEach(g),Y=v(As),J=m(As,"LI",{});var $s=f(J);K=y($s,"services"),$s.forEach(g),Q=v(As),V=m(As,"LI",{});var Hs=f(V);X=y(Hs,"pipes"),Hs.forEach(g),Z=v(As),aa=m(As,"LI",{});var Ws=f(aa);sa=y(Ws,"directives"),Ws.forEach(g),As.forEach(g),na=v(a),ea=m(a,"P",{});var Ds=f(ea);oa=y(Ds,"In general feature specific functionality is included in the module."),Ds.forEach(g),ta=v(a),pa=m(a,"P",{});var Fs=f(pa);ra=y(Fs,"If we need to use some common functionality in our Feature Modules we import the Shared Module in the Modules that needs it."),Fs.forEach(g),ca=v(a),la=m(a,"P",{});var Rs=f(la);ua=y(Rs,"We will talk more about shared functionality later."),Rs.forEach(g),ia=v(a),da=m(a,"PRE",{class:!0}),f(da).forEach(g),ha=v(a),ka=m(a,"H2",{});var qs=f(ka);ma=y(qs,"Core Module"),qs.forEach(g),fa=v(a),ya=m(a,"P",{});var Bs=f(ya);ga=y(Bs,"Here we include functionality that will be used only ONCE!"),Bs.forEach(g),va=v(a),wa=m(a,"P",{});var Gs=f(wa);Ea=m(Gs,"STRONG",{});var _s=f(Ea);Ma=y(_s,"The Core module is used ONLY in the root (app) Module!"),_s.forEach(g),Gs.forEach(g),ba=v(a),Ca=m(a,"P",{});var zs=f(Ca);Pa=y(zs,"Common "),Sa=m(zs,"STRONG",{});var Us=f(Sa);xa=y(Us,"services are placed in the Core Module"),Us.forEach(g),La=y(zs," to ensure we have only a single instance of the services to avoid unexpected behaviors."),zs.forEach(g),Ta=v(a),ja=m(a,"P",{});var Ys=f(ja);Na=y(Ys,"In this type of module we also place components that are used only ONCE for example the NavBar and the Footer components."),Ys.forEach(g),Ia=v(a),Aa=m(a,"PRE",{class:!0}),f(Aa).forEach(g),Oa=v(a),$a=m(a,"H2",{});var Js=f($a);Ha=y(Js,"Shared Module"),Js.forEach(g),Wa=v(a),Da=m(a,"P",{});var Ks=f(Da);Fa=y(Ks,"This is the most missunderstooded kind of Module!"),Ks.forEach(g),Ra=v(a),qa=m(a,"P",{});var Qs=f(qa);Ba=y(Qs,"The purpose of the SharedModule is to make available commonly used:"),Qs.forEach(g),Ga=v(a),_a=m(a,"UL",{});var Vs=f(_a);za=m(Vs,"LI",{});var Xs=f(za);Ua=y(Xs,"components"),Xs.forEach(g),Ya=v(Vs),Ja=m(Vs,"LI",{});var Zs=f(Ja);Ka=y(Zs,"directives"),Zs.forEach(g),Qa=v(Vs),Va=m(Vs,"LI",{});var an=f(Va);Xa=y(an,"pipes"),an.forEach(g),Vs.forEach(g),Za=v(a),as=m(a,"P",{});var sn=f(as);ss=y(sn,"We use the SharedModule in the feature modules to make common functionality available."),sn.forEach(g),ns=v(a),es=m(a,"P",{});var nn=f(es);os=y(nn,"We also make sure to have only one Shared Module."),nn.forEach(g),ts=v(a),ps=m(a,"P",{});var en=f(ps);rs=y(en,"We avoid placing services here!"),en.forEach(g),cs=v(a),ls=m(a,"PRE",{class:!0}),f(ls).forEach(g),us=v(a),is=m(a,"P",{});var on=f(is);ds=y(on,"This was a brief introduction to the 3 most common Modules types used in Angular Applications."),on.forEach(g),hs=v(a),ks=m(a,"P",{});var tn=f(ks);ms=y(tn,"Happy coding 😄"),tn.forEach(g),fs=v(a),ys=m(a,"H3",{});var pn=f(ys);gs=y(pn,"Credits"),pn.forEach(g),vs=v(a),ws=m(a,"P",{});var rn=f(ws);Es=y(rn,"Photo by "),Ms=m(rn,"A",{href:!0,rel:!0});var cn=f(Ms);bs=y(cn,"Digital Buggu"),cn.forEach(g),Cs=y(rn,"  from "),Ps=m(rn,"A",{href:!0,rel:!0});var ln=f(Ps);Ss=y(ln,"Pexels"),ln.forEach(g),rn.forEach(g),this.h()},h(){w(da,"class","language-typescript"),w(Aa,"class","language-typescript"),w(ls,"class","language-typescript"),w(Ms,"href","https://www.pexels.com/@digitalbuggu?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"),w(Ms,"rel","nofollow"),w(Ps,"href","https://www.pexels.com/photo/colorful-toothed-wheels-171198/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"),w(Ps,"rel","nofollow")},m(a,d){E(a,s,d),M(s,n),E(a,e,d),E(a,o,d),M(o,t),E(a,p,d),E(a,r,d),M(r,c),E(a,l,d),E(a,u,d),M(u,i),M(i,C),M(C,P),M(u,S),M(u,x),M(x,L),M(L,T),M(u,j),M(u,N),M(N,I),M(I,A),E(a,O,d),E(a,$,d),M($,H),E(a,W,d),E(a,D,d),M(D,F),E(a,R,d),E(a,q,d),M(q,B),E(a,G,d),E(a,_,d),M(_,z),M(z,U),M(_,Y),M(_,J),M(J,K),M(_,Q),M(_,V),M(V,X),M(_,Z),M(_,aa),M(aa,sa),E(a,na,d),E(a,ea,d),M(ea,oa),E(a,ta,d),E(a,pa,d),M(pa,ra),E(a,ca,d),E(a,la,d),M(la,ua),E(a,ia,d),E(a,da,d),da.innerHTML='<code class="language-typescript"><span class="token comment">// feature module example</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NgModule <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SharedModule <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'../shared/SharedModule\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> DashboardComponent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./dashboard/dashboard.component\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ProjectComponent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./project/project.component\'</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">NgModule</span></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n    NgModule<span class="token punctuation">,</span>\n    SharedModule\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  declarations<span class="token operator">:</span> <span class="token punctuation">[</span> DashboardComponent<span class="token punctuation">,</span> ProjectComponent <span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DashboardModule</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span></code>',E(a,ha,d),E(a,ka,d),M(ka,ma),E(a,fa,d),E(a,ya,d),M(ya,ga),E(a,va,d),E(a,wa,d),M(wa,Ea),M(Ea,Ma),E(a,ba,d),E(a,Ca,d),M(Ca,Pa),M(Ca,Sa),M(Sa,xa),M(Ca,La),E(a,Ta,d),E(a,ja,d),M(ja,Na),E(a,Ia,d),E(a,Aa,d),Aa.innerHTML='<code class="language-typescript"><span class="token comment">// core module example</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NgModule<span class="token punctuation">,</span> Optional<span class="token punctuation">,</span> SkipSelf <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ApiService <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./services/api.service\'</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">NgModule</span></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  providers<span class="token operator">:</span> <span class="token punctuation">[</span> ApiService <span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CoreModule</span> <span class="token punctuation">&#123;</span>\n   <span class="token comment">// do not allow to be used more than ONCE!!!</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Optional</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">SkipSelf</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> parent<span class="token operator">:</span> CoreModule<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>\n        <span class="token string">\'Import CoreModule in the root module only!!!\'</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span></code>',E(a,Oa,d),E(a,$a,d),M($a,Ha),E(a,Wa,d),E(a,Da,d),M(Da,Fa),E(a,Ra,d),E(a,qa,d),M(qa,Ba),E(a,Ga,d),E(a,_a,d),M(_a,za),M(za,Ua),M(_a,Ya),M(_a,Ja),M(Ja,Ka),M(_a,Qa),M(_a,Va),M(Va,Xa),E(a,Za,d),E(a,as,d),M(as,ss),E(a,ns,d),E(a,es,d),M(es,os),E(a,ts,d),E(a,ps,d),M(ps,rs),E(a,cs,d),E(a,ls,d),ls.innerHTML='<code class="language-typescript"><span class="token comment">// shared module example</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CommonModule <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/common\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NgModule <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CustomerComponent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./components/customer/customer.component\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PercentagePipe <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./pipes/percentage/percentange.pipe\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CustomerStyleDirective <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./directives/customer-style/customer-style.directive\'</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">NgModule</span></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  imports<span class="token operator">:</span> <span class="token punctuation">[</span> CommonModule <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  exports<span class="token operator">:</span> <span class="token punctuation">[</span>\n    CommonModule<span class="token punctuation">,</span>\n    CustomerComponent<span class="token punctuation">,</span>\n    PercentagePipe<span class="token punctuation">,</span>\n    CustomerStyleDirective \n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  declarations<span class="token operator">:</span> <span class="token punctuation">[</span> CustomerComponent<span class="token punctuation">,</span> CustomerStyleDirective<span class="token punctuation">,</span> PercentagePipe <span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SharedModule</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span></code>',E(a,us,d),E(a,is,d),M(is,ds),E(a,hs,d),E(a,ks,d),M(ks,ms),E(a,fs,d),E(a,ys,d),M(ys,gs),E(a,vs,d),E(a,ws,d),M(ws,Es),M(ws,Ms),M(Ms,bs),M(ws,Cs),M(ws,Ps),M(Ps,Ss)},p:b,d(a){a&&g(s),a&&g(e),a&&g(o),a&&g(p),a&&g(r),a&&g(l),a&&g(u),a&&g(O),a&&g($),a&&g(W),a&&g(D),a&&g(R),a&&g(q),a&&g(G),a&&g(_),a&&g(na),a&&g(ea),a&&g(ta),a&&g(pa),a&&g(ca),a&&g(la),a&&g(ia),a&&g(da),a&&g(ha),a&&g(ka),a&&g(fa),a&&g(ya),a&&g(va),a&&g(wa),a&&g(ba),a&&g(Ca),a&&g(Ta),a&&g(ja),a&&g(Ia),a&&g(Aa),a&&g(Oa),a&&g($a),a&&g(Wa),a&&g(Da),a&&g(Ra),a&&g(qa),a&&g(Ga),a&&g(_a),a&&g(Za),a&&g(as),a&&g(ns),a&&g(es),a&&g(ts),a&&g(ps),a&&g(cs),a&&g(ls),a&&g(us),a&&g(is),a&&g(hs),a&&g(ks),a&&g(fs),a&&g(ys),a&&g(vs),a&&g(ws)}}}function S(a){let s,n;const d=[x];let h={$$slots:{default:[P]},$$scope:{ctx:a}};for(let o=0;o<d.length;o+=1)h=e(h,d[o]);return s=new C({props:h}),{c(){o(s.$$.fragment)},l(a){t(s.$$.fragment,a)},m(a,e){p(s,a,e),n=!0},p(a,[n]){const e=0&n?r(d,[i(x)]):{};1&n&&(e.$$scope={dirty:n,ctx:a}),s.$set(e)},i(a){n||(c(s.$$.fragment,a),n=!0)},o(a){l(s.$$.fragment,a),n=!1},d(a){u(s,a)}}}const x={author:"achimoraites",date:"Sun May 10 2020 00:00:00 GMT+0300",excerpt:"Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability.",tags:["typescript","angular","javascript"],image:"https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400",slug:"angular-types-of-modules",subtitle:"Improve the scalabillity of your Angular project by using the module type pattern!",title:"Types of Modules in Angular",url:"https://achimoraites.github.io/blog/angular-types-of-modules"},L=!0;export default class extends a{constructor(a){super(),s(this,a,null,S,n,{})}}export{x as metadata,L as prerender};
