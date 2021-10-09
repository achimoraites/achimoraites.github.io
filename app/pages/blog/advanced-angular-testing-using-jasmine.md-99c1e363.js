import{S as n,i as s,s as a,A as t,j as o,m as p,o as e,p as c,v as u,r as i,w as l,q as r,e as k,t as h,k as g,c as m,a as d,g as w,d as f,n as y,b,f as v,D as E,E as O}from"../../chunks/vendor-1ec63ec4.js";import{B as P}from"../../chunks/blog-post-layout-4d242ba6.js";import"../../chunks/OpenGraph-d6d3dbc2.js";import"../../chunks/Tags-fbac4788.js";function x(n){let s,a,t,o,p,e,c,u,i,l,r,P,x,I,B,j,C,A,H,T,$,N,S,L,D,F,W,_,M,q,U,V,z,R,G,J,K,Q,X,Y,Z,nn,sn,an,tn,on,pn,en,cn,un,ln,rn,kn,hn,gn,mn,dn,wn,fn,yn,bn,vn,En,On,Pn,xn,In,Bn,jn,Cn,An,Hn,Tn,$n,Nn,Sn,Ln,Dn,Fn,Wn,_n,Mn,qn,Un,Vn,zn,Rn,Gn,Jn,Kn,Qn,Xn,Yn;return{c(){s=k("p"),a=h("When testing our apps there are times when we need to control things that are beyond our control, like the window object.\nOne common scenario is when we need to test our code against browser specific APIs."),t=g(),o=k("blockquote"),p=k("p"),e=h("If you are looking how to upgrade your testing skills this is the article you have been looking for!"),c=g(),u=k("h2"),i=h("Show me the code"),l=g(),r=k("pre"),P=g(),x=k("h3"),I=h("Now lets test the "),B=k("code"),j=h("goBack()"),C=h(" method"),A=g(),H=k("p"),T=h("As you know already the "),$=k("code"),N=h("window.history"),S=h(" is read only.\nWe need to test two cases:"),L=g(),D=k("ul"),F=k("li"),W=h("history.length == 1"),_=g(),M=k("li"),q=h("history.length > 1"),U=g(),V=k("p"),z=h("in our history.component.spec.ts\nwe use the "),R=k("code"),G=h("spyOnProperty"),J=h(" to mock the "),K=k("code"),Q=h("window.history.length"),X=h(" to be able to test our both cases:"),Y=g(),Z=k("pre"),nn=g(),sn=k("p"),an=h("that was easy :)"),tn=g(),on=k("p"),pn=h("Now lets tackle a more interesting case, what about testing a browser specific api?"),en=g(),cn=k("h3"),un=h("Testing browser specific APIs"),ln=g(),rn=k("p"),kn=h("Now in the "),hn=k("code"),gn=h("saveFile()"),mn=h(" method we are using a browser specific API, here things are getting more interesting."),dn=g(),wn=k("p"),fn=h("The "),yn=k("code"),bn=h("window.navigator.msSaveOrOpenBlob"),vn=h(" is available only on IE,\non other supported browsers we have a different implementation."),En=g(),On=k("p"),Pn=h("Let’s dive to our test code!"),xn=g(),In=k("pre"),Bn=g(),jn=k("p"),Cn=h("Here we mocked the "),An=k("code"),Hn=h("window.navigator"),Tn=h(" to be able to simulate the behavior on both cases!"),$n=g(),Nn=k("h2"),Sn=h("Summary"),Ln=g(),Dn=k("p"),Fn=h("Today we learned about mocking the window object to be able to do tests against browser specific APIs.\nBy using this technique you will be able to mock anything you need to test your code."),Wn=g(),_n=k("p"),Mn=h("I hope you enjoyed it,\nHappy coding :)"),qn=g(),Un=k("h3"),Vn=h("Credits"),zn=g(),Rn=k("p"),Gn=h("Photo by "),Jn=k("a"),Kn=h("Artem Podrez"),Qn=h("  from "),Xn=k("a"),Yn=h("Pexels"),this.h()},l(n){s=m(n,"P",{});var k=d(s);a=w(k,"When testing our apps there are times when we need to control things that are beyond our control, like the window object.\nOne common scenario is when we need to test our code against browser specific APIs."),k.forEach(f),t=y(n),o=m(n,"BLOCKQUOTE",{});var h=d(o);p=m(h,"P",{});var g=d(p);e=w(g,"If you are looking how to upgrade your testing skills this is the article you have been looking for!"),g.forEach(f),h.forEach(f),c=y(n),u=m(n,"H2",{});var b=d(u);i=w(b,"Show me the code"),b.forEach(f),l=y(n),r=m(n,"PRE",{class:!0}),d(r).forEach(f),P=y(n),x=m(n,"H3",{});var v=d(x);I=w(v,"Now lets test the "),B=m(v,"CODE",{});var E=d(B);j=w(E,"goBack()"),E.forEach(f),C=w(v," method"),v.forEach(f),A=y(n),H=m(n,"P",{});var O=d(H);T=w(O,"As you know already the "),$=m(O,"CODE",{});var Zn=d($);N=w(Zn,"window.history"),Zn.forEach(f),S=w(O," is read only.\nWe need to test two cases:"),O.forEach(f),L=y(n),D=m(n,"UL",{});var ns=d(D);F=m(ns,"LI",{});var ss=d(F);W=w(ss,"history.length == 1"),ss.forEach(f),_=y(ns),M=m(ns,"LI",{});var as=d(M);q=w(as,"history.length > 1"),as.forEach(f),ns.forEach(f),U=y(n),V=m(n,"P",{});var ts=d(V);z=w(ts,"in our history.component.spec.ts\nwe use the "),R=m(ts,"CODE",{});var os=d(R);G=w(os,"spyOnProperty"),os.forEach(f),J=w(ts," to mock the "),K=m(ts,"CODE",{});var ps=d(K);Q=w(ps,"window.history.length"),ps.forEach(f),X=w(ts," to be able to test our both cases:"),ts.forEach(f),Y=y(n),Z=m(n,"PRE",{class:!0}),d(Z).forEach(f),nn=y(n),sn=m(n,"P",{});var es=d(sn);an=w(es,"that was easy :)"),es.forEach(f),tn=y(n),on=m(n,"P",{});var cs=d(on);pn=w(cs,"Now lets tackle a more interesting case, what about testing a browser specific api?"),cs.forEach(f),en=y(n),cn=m(n,"H3",{});var us=d(cn);un=w(us,"Testing browser specific APIs"),us.forEach(f),ln=y(n),rn=m(n,"P",{});var is=d(rn);kn=w(is,"Now in the "),hn=m(is,"CODE",{});var ls=d(hn);gn=w(ls,"saveFile()"),ls.forEach(f),mn=w(is," method we are using a browser specific API, here things are getting more interesting."),is.forEach(f),dn=y(n),wn=m(n,"P",{});var rs=d(wn);fn=w(rs,"The "),yn=m(rs,"CODE",{});var ks=d(yn);bn=w(ks,"window.navigator.msSaveOrOpenBlob"),ks.forEach(f),vn=w(rs," is available only on IE,\non other supported browsers we have a different implementation."),rs.forEach(f),En=y(n),On=m(n,"P",{});var hs=d(On);Pn=w(hs,"Let’s dive to our test code!"),hs.forEach(f),xn=y(n),In=m(n,"PRE",{class:!0}),d(In).forEach(f),Bn=y(n),jn=m(n,"P",{});var gs=d(jn);Cn=w(gs,"Here we mocked the "),An=m(gs,"CODE",{});var ms=d(An);Hn=w(ms,"window.navigator"),ms.forEach(f),Tn=w(gs," to be able to simulate the behavior on both cases!"),gs.forEach(f),$n=y(n),Nn=m(n,"H2",{});var ds=d(Nn);Sn=w(ds,"Summary"),ds.forEach(f),Ln=y(n),Dn=m(n,"P",{});var ws=d(Dn);Fn=w(ws,"Today we learned about mocking the window object to be able to do tests against browser specific APIs.\nBy using this technique you will be able to mock anything you need to test your code."),ws.forEach(f),Wn=y(n),_n=m(n,"P",{});var fs=d(_n);Mn=w(fs,"I hope you enjoyed it,\nHappy coding :)"),fs.forEach(f),qn=y(n),Un=m(n,"H3",{});var ys=d(Un);Vn=w(ys,"Credits"),ys.forEach(f),zn=y(n),Rn=m(n,"P",{});var bs=d(Rn);Gn=w(bs,"Photo by "),Jn=m(bs,"A",{href:!0,rel:!0});var vs=d(Jn);Kn=w(vs,"Artem Podrez"),vs.forEach(f),Qn=w(bs,"  from "),Xn=m(bs,"A",{href:!0,rel:!0});var Es=d(Xn);Yn=w(Es,"Pexels"),Es.forEach(f),bs.forEach(f),this.h()},h(){b(r,"class","language-typescript"),b(Z,"class","language-typescript"),b(In,"class","language-typescript"),b(Jn,"href","https://www.pexels.com/@artempodrez?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"),b(Jn,"rel","nofollow"),b(Xn,"href","https://www.pexels.com/photo/a-woman-doing-an-experiment-5726788/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"),b(Xn,"rel","nofollow")},m(n,k){v(n,s,k),E(s,a),v(n,t,k),v(n,o,k),E(o,p),E(p,e),v(n,c,k),v(n,u,k),E(u,i),v(n,l,k),v(n,r,k),r.innerHTML='<code class="language-typescript"><span class="token comment">// history.component.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  selector<span class="token operator">:</span> <span class="token string">\'app-history\'</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">\'./history.component.html\'</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./history.component.css\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HistoryComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">&#123;</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span>\n\n  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token punctuation">&#125;</span>\n\n  <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'length 1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n      window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n\n  <span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>\n      type<span class="token operator">:</span> <span class="token string">\'text/html\'</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// IE</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>msSaveOrOpenBlob<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span><span class="token function">msSaveOrOpenBlob</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> <span class="token string">\'file.txt\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'custom handling\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n\n<span class="token punctuation">&#125;</span></code>',v(n,P,k),v(n,x,k),E(x,I),E(x,B),E(B,j),E(x,C),v(n,A,k),v(n,H,k),E(H,T),E(H,$),E($,N),E(H,S),v(n,L,k),v(n,D,k),E(D,F),E(F,W),E(D,_),E(D,M),E(M,q),v(n,U,k),v(n,V,k),E(V,z),E(V,R),E(R,G),E(V,J),E(V,K),E(K,Q),E(V,X),v(n,Y,k),v(n,Z,k),Z.innerHTML='<code class="language-typescript">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should execute "goBack" as expected when history === 1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// spy on console.log()</span>\n    <span class="token function">spyOn</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">,</span> <span class="token string">\'log\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// here we mock the history length to be 1</span>\n    <span class="token function">spyOnProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">,</span> <span class="token string">\'length\'</span><span class="token punctuation">,</span> <span class="token string">\'get\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">returnValue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    component<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token string">\'length 1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should execute "goBack" as expected when history > 1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// spy on window.history.back()</span>\n    <span class="token function">spyOn</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">,</span> <span class="token string">\'back\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// here we mock the history length to be 2</span>\n    <span class="token function">spyOnProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">,</span> <span class="token string">\'length\'</span><span class="token punctuation">,</span> <span class="token string">\'get\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">returnValue</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    component<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">expect</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>back<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',v(n,nn,k),v(n,sn,k),E(sn,an),v(n,tn,k),v(n,on,k),E(on,pn),v(n,en,k),v(n,cn,k),E(cn,un),v(n,ln,k),v(n,rn,k),E(rn,kn),E(rn,hn),E(hn,gn),E(rn,mn),v(n,dn,k),v(n,wn,k),E(wn,fn),E(wn,yn),E(yn,bn),E(wn,vn),v(n,En,k),v(n,On,k),E(On,Pn),v(n,xn,k),v(n,In,k),In.innerHTML='<code class="language-typescript"> <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should execute "saveFile" as expected on IE\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// create a mock navigator</span>\n    <span class="token keyword">const</span> mockNavigator <span class="token operator">=</span> jasmine<span class="token punctuation">.</span><span class="token function">createSpyObj</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'msSaveOrOpenBlob\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// here we use the mockNavigator to simulate IE</span>\n    <span class="token function">spyOnProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">\'navigator\'</span><span class="token punctuation">,</span> <span class="token string">\'get\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">returnValue</span><span class="token punctuation">(</span>mockNavigator<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    component<span class="token punctuation">.</span><span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// verify that method has been called :)</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>mockNavigator<span class="token punctuation">.</span>msSaveOrOpenBlob<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should execute "saveFile" as expected on browsers other than IE\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// spy on console.log()</span>\n    <span class="token function">spyOn</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">,</span> <span class="token string">\'log\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// create a mock navigator</span>\n    <span class="token keyword">const</span> mockNavigator <span class="token operator">=</span> jasmine<span class="token punctuation">.</span><span class="token function">createSpyObj</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// here we use the mockNavigator to simulate behavior</span>\n    <span class="token function">spyOnProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">\'navigator\'</span><span class="token punctuation">,</span> <span class="token string">\'get\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">returnValue</span><span class="token punctuation">(</span>mockNavigator<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    component<span class="token punctuation">.</span><span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// verify that method has been called :)</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token string">\'custom handling\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code>',v(n,Bn,k),v(n,jn,k),E(jn,Cn),E(jn,An),E(An,Hn),E(jn,Tn),v(n,$n,k),v(n,Nn,k),E(Nn,Sn),v(n,Ln,k),v(n,Dn,k),E(Dn,Fn),v(n,Wn,k),v(n,_n,k),E(_n,Mn),v(n,qn,k),v(n,Un,k),E(Un,Vn),v(n,zn,k),v(n,Rn,k),E(Rn,Gn),E(Rn,Jn),E(Jn,Kn),E(Rn,Qn),E(Rn,Xn),E(Xn,Yn)},p:O,d(n){n&&f(s),n&&f(t),n&&f(o),n&&f(c),n&&f(u),n&&f(l),n&&f(r),n&&f(P),n&&f(x),n&&f(A),n&&f(H),n&&f(L),n&&f(D),n&&f(U),n&&f(V),n&&f(Y),n&&f(Z),n&&f(nn),n&&f(sn),n&&f(tn),n&&f(on),n&&f(en),n&&f(cn),n&&f(ln),n&&f(rn),n&&f(dn),n&&f(wn),n&&f(En),n&&f(On),n&&f(xn),n&&f(In),n&&f(Bn),n&&f(jn),n&&f($n),n&&f(Nn),n&&f(Ln),n&&f(Dn),n&&f(Wn),n&&f(_n),n&&f(qn),n&&f(Un),n&&f(zn),n&&f(Rn)}}}function I(n){let s,a;const k=[B];let h={$$slots:{default:[x]},$$scope:{ctx:n}};for(let o=0;o<k.length;o+=1)h=t(h,k[o]);return s=new P({props:h}),{c(){o(s.$$.fragment)},l(n){p(s.$$.fragment,n)},m(n,t){e(s,n,t),a=!0},p(n,[a]){const t=0&a?c(k,[r(B)]):{};1&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(u(s.$$.fragment,n),a=!0)},o(n){i(s.$$.fragment,n),a=!1},d(n){l(s,n)}}}const B={author:"achimoraites",date:"Fri May 08 2020 00:00:00 GMT+0300",excerpt:"When testing our apps there are times when we need to control things that are beyond our control, like the window object",image:"https://images.pexels.com/photos/5726788/pexels-photo-5726788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=255&w=400",tags:["angular","javascript","typescript","testing"],slug:"advanced-angular-testing-using-jasmine",subtitle:"Improve the scalabillity of your Angular project by using inheritance!",title:"Angular Testing with Jasmine",url:"https://achimoraites.github.io/blog/advanced-angular-testing-using-jasmine"},j=!0;export default class extends n{constructor(n){super(),s(this,n,null,I,a,{})}}export{B as metadata,j as prerender};
