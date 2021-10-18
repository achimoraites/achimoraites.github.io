import{S as a,i as e,s as n,A as s,j as t,m as o,o as r,p as c,v as i,r as p,w as l,q as u,e as h,t as g,k as f,c as k,a as m,g as d,d as y,n as v,b as E,f as b,D as w,E as T}from"../../chunks/vendor-165bcab4.js";import{B as P}from"../../chunks/blog-post-layout-92dc1cf1.js";import"../../chunks/preload-helper-9f12a5fd.js";import"../../chunks/OpenGraph-241cde62.js";import"../../chunks/ArticleCard-ffd1002d.js";function O(a){let e,n,s,t,o,r,c,i,p,l,u,P,O,L,A,H,N,I,G,C,S,$,K,x,_,j,R,M,U,D,B,F,W,q,Q,J,z,V,X,Y,Z,aa,ea,na,sa,ta,oa,ra,ca,ia,pa,la,ua,ha,ga,fa,ka,ma,da,ya,va,Ea,ba,wa,Ta,Pa,Oa,La,Aa,Ha,Na,Ia,Ga,Ca,Sa,$a,Ka,xa,_a,ja,Ra,Ma,Ua,Da,Ba,Fa,Wa,qa,Qa,Ja,za,Va,Xa,Ya,Za,ae,ee,ne,se,te,oe,re,ce,ie,pe,le,ue,he,ge,fe,ke,me,de,ye,ve,Ee,be,we,Te,Pe,Oe,Le,Ae,He,Ne,Ie,Ge,Ce,Se,$e,Ke,xe,_e,je,Re,Me,Ue,De,Be,Fe,We,qe,Qe,Je,ze,Ve,Xe,Ye,Ze,an,en,nn,sn,tn,on,rn,cn,pn,ln,un,hn,gn,fn,kn,mn,dn,yn,vn,En,bn,wn,Tn,Pn,On,Ln,An,Hn,Nn,In,Gn,Cn,Sn;return{c(){e=h("p"),n=g("Here there are some cool tricks you can do to improve your Github Actions."),s=f(),t=h("h2"),o=g("Caching your packages"),r=f(),c=h("p"),i=g("How many times you have re-installed all of your packages in your actions even when no packages were changed?\nThis is not only time consuming but it can actually cost you more money as "),p=h("strong"),l=g("Github actions"),u=g(" are charged based on the time they actually run;\nyou can "),P=h("a"),O=g("have a look here"),L=g(" in case you are interested 😉"),A=f(),H=h("h3"),N=g("How"),I=f(),G=h("p"),C=g("To cache our modules we will use the "),S=h("a"),$=h("code"),K=g("actions/cache@v2"),x=g(" action"),_=f(),j=h("p"),R=g("Here is an example of caching npm dependencies for Linux/MacOS"),M=f(),U=h("pre"),D=f(),B=h("p"),F=h("strong"),W=h("a"),q=g("Here you can see it in a Github Action used for deploying this blog to gh-pages"),Q=g(" 🚀"),J=f(),z=h("h2"),V=g("Create strings based on env variables"),X=f(),Y=h("p"),Z=g("There are times where you need to be able to create a string based on env variables.\nThe most common case is when you want to create a path using one or more env variables;"),aa=f(),ea=h("h3"),na=g("How"),sa=f(),ta=h("pre"),oa=f(),ra=h("h2"),ca=g("Use a custom npm config"),ia=f(),pa=h("p"),la=g("This is very handly when you are working with private packages 📦"),ua=f(),ha=h("p"),ga=g("The idea is to store your PAT TOKEN for accessing your packages in your repository secrets and then use it on a custom npm config file."),fa=f(),ka=h("blockquote"),ma=h("p"),da=g("📝Note that we can just use the default "),ya=h("code"),va=g(".npmrc"),Ea=g(" but it is a good idea to keep the npm config for your github actions separated."),ba=f(),wa=h("h3"),Ta=g("How"),Pa=f(),Oa=h("p"),La=g("In order for it to work we need to:"),Aa=f(),Ha=h("ol"),Na=h("li"),Ia=g("Create an npm config file 🦄"),Ga=h("ul"),Ca=h("li"),Sa=g("includes the configuration for our private github packages"),$a=f(),Ka=h("li"),xa=g("we will take the PAT TOKEN from an env variable"),_a=f(),ja=h("li"),Ra=g("we can name it anything that we want"),Ma=f(),Ua=h("li"),Da=g("place it in the project root folder"),Ba=f(),Fa=h("li"),Wa=g("set our action to use our npm config file ✨"),qa=f(),Qa=h("li"),Ja=g("Generate a PAT TOKEN"),za=f(),Va=h("li"),Xa=g("Place the PAT TOKEN in our repository secrets"),Ya=f(),Za=h("p"),ae=g("Lets have a look at a case where we are using private github packages"),ee=f(),ne=h("ol"),se=h("li"),te=h("strong"),oe=g("Create the npm config file"),re=f(),ce=h("p"),ie=g("Create a file named "),pe=h("code"),le=g(".ci.npmrc"),ue=g(" in the root folder of your project and place the following contents:"),he=f(),ge=h("pre"),fe=f(),ke=h("blockquote"),me=h("p"),de=g("💡 Remember to replace “@your-scope” with your scope"),ye=f(),ve=h("ol"),Ee=h("li"),be=h("strong"),we=g("Set the action to use our custom npm config file"),Te=f(),Pe=h("pre"),Oe=f(),Le=h("ol"),Ae=h("li"),He=g("Create your PAT TOKEN\nFollow the "),Ne=h("a"),Ie=g("instructions here"),Ge=g("\nWhen you are on the step 7 permissions and scopes:"),Ce=f(),Se=h("ul"),$e=h("li"),Ke=g("make sure to select the “write:packages” option!"),xe=f(),_e=h("li"),je=g("the “read:packages” is enabled as well\n"),Re=h("img"),Ue=f(),De=h("li"),Be=g("Continue to the next steps and keep your PAT TOKEN ready!"),Fe=f(),We=h("ol"),qe=h("li"),Qe=h("strong"),Je=g("Place the PAT TOKEN to your repo secrets"),ze=g("\nGo to your repository on github:"),Ve=h("ol"),Xe=h("li"),Ye=g("Click on “⚙️settings” tab"),Ze=f(),an=h("li"),en=g("Select “Secrets”"),nn=f(),sn=h("li"),tn=g("Click on “New repository secret”"),on=f(),rn=h("li"),cn=g("Set the “name” to be ”"),pn=h("strong"),ln=g("PAT_TOKEN"),un=g("”"),hn=f(),gn=h("li"),fn=g("Paste your token in the “value”"),kn=f(),mn=h("li"),dn=g("Select “Add secret”"),yn=f(),vn=h("p"),En=h("img"),wn=f(),Tn=h("h3"),Pn=g("Summary 👨🏻‍💻"),On=f(),Ln=h("p"),An=g("We have explored ways to improve the performance of our github actions using caching."),Hn=f(),Nn=h("p"),In=g("Then we explored how we can create strings dynamically from env variables and finnaly we had a look in configuring our npm config for using private github packages in a secure and scalable way 😉."),Gn=f(),Cn=h("p"),Sn=g("Happy coding 😄 !!!"),this.h()},l(a){e=k(a,"P",{});var h=m(e);n=d(h,"Here there are some cool tricks you can do to improve your Github Actions."),h.forEach(y),s=v(a),t=k(a,"H2",{});var g=m(t);o=d(g,"Caching your packages"),g.forEach(y),r=v(a),c=k(a,"P",{});var f=m(c);i=d(f,"How many times you have re-installed all of your packages in your actions even when no packages were changed?\nThis is not only time consuming but it can actually cost you more money as "),p=k(f,"STRONG",{});var E=m(p);l=d(E,"Github actions"),E.forEach(y),u=d(f," are charged based on the time they actually run;\nyou can "),P=k(f,"A",{href:!0,rel:!0});var b=m(P);O=d(b,"have a look here"),b.forEach(y),L=d(f," in case you are interested 😉"),f.forEach(y),A=v(a),H=k(a,"H3",{});var w=m(H);N=d(w,"How"),w.forEach(y),I=v(a),G=k(a,"P",{});var T=m(G);C=d(T,"To cache our modules we will use the "),S=k(T,"A",{href:!0,rel:!0});var Me=m(S);$=k(Me,"CODE",{});var bn=m($);K=d(bn,"actions/cache@v2"),bn.forEach(y),Me.forEach(y),x=d(T," action"),T.forEach(y),_=v(a),j=k(a,"P",{});var $n=m(j);R=d($n,"Here is an example of caching npm dependencies for Linux/MacOS"),$n.forEach(y),M=v(a),U=k(a,"PRE",{class:!0}),m(U).forEach(y),D=v(a),B=k(a,"P",{});var Kn=m(B);F=k(Kn,"STRONG",{});var xn=m(F);W=k(xn,"A",{href:!0,rel:!0});var _n=m(W);q=d(_n,"Here you can see it in a Github Action used for deploying this blog to gh-pages"),_n.forEach(y),xn.forEach(y),Q=d(Kn," 🚀"),Kn.forEach(y),J=v(a),z=k(a,"H2",{});var jn=m(z);V=d(jn,"Create strings based on env variables"),jn.forEach(y),X=v(a),Y=k(a,"P",{});var Rn=m(Y);Z=d(Rn,"There are times where you need to be able to create a string based on env variables.\nThe most common case is when you want to create a path using one or more env variables;"),Rn.forEach(y),aa=v(a),ea=k(a,"H3",{});var Mn=m(ea);na=d(Mn,"How"),Mn.forEach(y),sa=v(a),ta=k(a,"PRE",{class:!0}),m(ta).forEach(y),oa=v(a),ra=k(a,"H2",{});var Un=m(ra);ca=d(Un,"Use a custom npm config"),Un.forEach(y),ia=v(a),pa=k(a,"P",{});var Dn=m(pa);la=d(Dn,"This is very handly when you are working with private packages 📦"),Dn.forEach(y),ua=v(a),ha=k(a,"P",{});var Bn=m(ha);ga=d(Bn,"The idea is to store your PAT TOKEN for accessing your packages in your repository secrets and then use it on a custom npm config file."),Bn.forEach(y),fa=v(a),ka=k(a,"BLOCKQUOTE",{});var Fn=m(ka);ma=k(Fn,"P",{});var Wn=m(ma);da=d(Wn,"📝Note that we can just use the default "),ya=k(Wn,"CODE",{});var qn=m(ya);va=d(qn,".npmrc"),qn.forEach(y),Ea=d(Wn," but it is a good idea to keep the npm config for your github actions separated."),Wn.forEach(y),Fn.forEach(y),ba=v(a),wa=k(a,"H3",{});var Qn=m(wa);Ta=d(Qn,"How"),Qn.forEach(y),Pa=v(a),Oa=k(a,"P",{});var Jn=m(Oa);La=d(Jn,"In order for it to work we need to:"),Jn.forEach(y),Aa=v(a),Ha=k(a,"OL",{});var zn=m(Ha);Na=k(zn,"LI",{});var Vn=m(Na);Ia=d(Vn,"Create an npm config file 🦄"),Ga=k(Vn,"UL",{});var Xn=m(Ga);Ca=k(Xn,"LI",{});var Yn=m(Ca);Sa=d(Yn,"includes the configuration for our private github packages"),Yn.forEach(y),$a=v(Xn),Ka=k(Xn,"LI",{});var Zn=m(Ka);xa=d(Zn,"we will take the PAT TOKEN from an env variable"),Zn.forEach(y),_a=v(Xn),ja=k(Xn,"LI",{});var as=m(ja);Ra=d(as,"we can name it anything that we want"),as.forEach(y),Ma=v(Xn),Ua=k(Xn,"LI",{});var es=m(Ua);Da=d(es,"place it in the project root folder"),es.forEach(y),Xn.forEach(y),Vn.forEach(y),Ba=v(zn),Fa=k(zn,"LI",{});var ns=m(Fa);Wa=d(ns,"set our action to use our npm config file ✨"),ns.forEach(y),qa=v(zn),Qa=k(zn,"LI",{});var ss=m(Qa);Ja=d(ss,"Generate a PAT TOKEN"),ss.forEach(y),za=v(zn),Va=k(zn,"LI",{});var ts=m(Va);Xa=d(ts,"Place the PAT TOKEN in our repository secrets"),ts.forEach(y),zn.forEach(y),Ya=v(a),Za=k(a,"P",{});var os=m(Za);ae=d(os,"Lets have a look at a case where we are using private github packages"),os.forEach(y),ee=v(a),ne=k(a,"OL",{});var rs=m(ne);se=k(rs,"LI",{});var cs=m(se);te=k(cs,"STRONG",{});var is=m(te);oe=d(is,"Create the npm config file"),is.forEach(y),cs.forEach(y),rs.forEach(y),re=v(a),ce=k(a,"P",{});var ps=m(ce);ie=d(ps,"Create a file named "),pe=k(ps,"CODE",{});var ls=m(pe);le=d(ls,".ci.npmrc"),ls.forEach(y),ue=d(ps," in the root folder of your project and place the following contents:"),ps.forEach(y),he=v(a),ge=k(a,"PRE",{class:!0}),m(ge).forEach(y),fe=v(a),ke=k(a,"BLOCKQUOTE",{});var us=m(ke);me=k(us,"P",{});var hs=m(me);de=d(hs,"💡 Remember to replace “@your-scope” with your scope"),hs.forEach(y),us.forEach(y),ye=v(a),ve=k(a,"OL",{start:!0});var gs=m(ve);Ee=k(gs,"LI",{});var fs=m(Ee);be=k(fs,"STRONG",{});var ks=m(be);we=d(ks,"Set the action to use our custom npm config file"),ks.forEach(y),fs.forEach(y),gs.forEach(y),Te=v(a),Pe=k(a,"PRE",{class:!0}),m(Pe).forEach(y),Oe=v(a),Le=k(a,"OL",{start:!0});var ms=m(Le);Ae=k(ms,"LI",{});var ds=m(Ae);He=d(ds,"Create your PAT TOKEN\nFollow the "),Ne=k(ds,"A",{href:!0,rel:!0});var ys=m(Ne);Ie=d(ys,"instructions here"),ys.forEach(y),Ge=d(ds,"\nWhen you are on the step 7 permissions and scopes:"),ds.forEach(y),ms.forEach(y),Ce=v(a),Se=k(a,"UL",{});var vs=m(Se);$e=k(vs,"LI",{});var Es=m($e);Ke=d(Es,"make sure to select the “write:packages” option!"),Es.forEach(y),xe=v(vs),_e=k(vs,"LI",{});var bs=m(_e);je=d(bs,"the “read:packages” is enabled as well\n"),Re=k(bs,"IMG",{src:!0,alt:!0}),bs.forEach(y),Ue=v(vs),De=k(vs,"LI",{});var ws=m(De);Be=d(ws,"Continue to the next steps and keep your PAT TOKEN ready!"),ws.forEach(y),vs.forEach(y),Fe=v(a),We=k(a,"OL",{start:!0});var Ts=m(We);qe=k(Ts,"LI",{});var Ps=m(qe);Qe=k(Ps,"STRONG",{});var Os=m(Qe);Je=d(Os,"Place the PAT TOKEN to your repo secrets"),Os.forEach(y),ze=d(Ps,"\nGo to your repository on github:"),Ve=k(Ps,"OL",{});var Ls=m(Ve);Xe=k(Ls,"LI",{});var As=m(Xe);Ye=d(As,"Click on “⚙️settings” tab"),As.forEach(y),Ze=v(Ls),an=k(Ls,"LI",{});var Hs=m(an);en=d(Hs,"Select “Secrets”"),Hs.forEach(y),nn=v(Ls),sn=k(Ls,"LI",{});var Ns=m(sn);tn=d(Ns,"Click on “New repository secret”"),Ns.forEach(y),on=v(Ls),rn=k(Ls,"LI",{});var Is=m(rn);cn=d(Is,"Set the “name” to be ”"),pn=k(Is,"STRONG",{});var Gs=m(pn);ln=d(Gs,"PAT_TOKEN"),Gs.forEach(y),un=d(Is,"”"),Is.forEach(y),hn=v(Ls),gn=k(Ls,"LI",{});var Cs=m(gn);fn=d(Cs,"Paste your token in the “value”"),Cs.forEach(y),kn=v(Ls),mn=k(Ls,"LI",{});var Ss=m(mn);dn=d(Ss,"Select “Add secret”"),Ss.forEach(y),Ls.forEach(y),Ps.forEach(y),Ts.forEach(y),yn=v(a),vn=k(a,"P",{});var $s=m(vn);En=k($s,"IMG",{src:!0,alt:!0}),$s.forEach(y),wn=v(a),Tn=k(a,"H3",{});var Ks=m(Tn);Pn=d(Ks,"Summary 👨🏻‍💻"),Ks.forEach(y),On=v(a),Ln=k(a,"P",{});var xs=m(Ln);An=d(xs,"We have explored ways to improve the performance of our github actions using caching."),xs.forEach(y),Hn=v(a),Nn=k(a,"P",{});var _s=m(Nn);In=d(_s,"Then we explored how we can create strings dynamically from env variables and finnaly we had a look in configuring our npm config for using private github packages in a secure and scalable way 😉."),_s.forEach(y),Gn=v(a),Cn=k(a,"P",{});var js=m(Cn);Sn=d(js,"Happy coding 😄 !!!"),js.forEach(y),this.h()},h(){E(P,"href","https://github.com/pricing"),E(P,"rel","nofollow"),E(S,"href","https://github.com/actions/cache"),E(S,"rel","nofollow"),E(U,"class","language-yaml"),E(W,"href","https://github.com/achimoraites/achimoraites.github.io/blob/master/.github/workflows/deploy-gh.yaml#L24-L31"),E(W,"rel","nofollow"),E(ta,"class","language-yaml"),E(ge,"class","language-undefined"),E(ve,"start","2"),E(Pe,"class","language-yaml"),E(Ne,"href","https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"),E(Ne,"rel","nofollow"),E(Le,"start","3"),Re.src!==(Me="/images/blog/github-actions-tips-and-tricks/pat-creation.webp")&&E(Re,"src","/images/blog/github-actions-tips-and-tricks/pat-creation.webp"),E(Re,"alt","Github pat scopes"),E(We,"start","4"),En.src!==(bn="/images/blog/github-actions-tips-and-tricks/add-repo-secret.webp")&&E(En,"src","/images/blog/github-actions-tips-and-tricks/add-repo-secret.webp"),E(En,"alt","Github add secret")},m(a,h){b(a,e,h),w(e,n),b(a,s,h),b(a,t,h),w(t,o),b(a,r,h),b(a,c,h),w(c,i),w(c,p),w(p,l),w(c,u),w(c,P),w(P,O),w(c,L),b(a,A,h),b(a,H,h),w(H,N),b(a,I,h),b(a,G,h),w(G,C),w(G,S),w(S,$),w($,K),w(G,x),b(a,_,h),b(a,j,h),w(j,R),b(a,M,h),b(a,U,h),U.innerHTML='<code class="language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache node_modules 📦\n  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm\n    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> runner.os <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> hashFiles(\'<span class="token important">**/package-lock.json\')</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span>\n    <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n      $&#123;&#123; runner.os &#125;&#125;-node-</span></code>',b(a,D,h),b(a,B,h),w(B,F),w(F,W),w(W,q),w(B,Q),b(a,J,h),b(a,z,h),w(z,V),b(a,X,h),b(a,Y,h),w(Y,Z),b(a,aa,h),b(a,ea,h),w(ea,na),b(a,sa,h),b(a,ta,h),ta.innerHTML='<code class="language-yaml"><span class="token key atrule">name</span><span class="token punctuation">:</span> paths<span class="token punctuation">-</span>printer 🦄\n\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n  <span class="token key atrule">BASE_URL</span><span class="token punctuation">:</span> <span class="token string">"https://example.com/"</span>\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">print-stuff</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n\t  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create paths from env variables\n\t    <span class="token comment"># this outputs "IMAGES_PATH: https://example.com/assets/img/"</span>\n\t    <span class="token key atrule">run</span><span class="token punctuation">:</span>  <span class="token key atrule">echo  "IMAGES_PATH</span><span class="token punctuation">:</span> $<span class="token punctuation">&#123;</span>env.IMAGES_PATH<span class="token punctuation">&#125;</span>"\n\t    <span class="token key atrule">env</span><span class="token punctuation">:</span>\n\t      <span class="token key atrule">IMAGES_PATH</span><span class="token punctuation">:</span> <span class="token string">"$&#123;&#123; env.BASE_URL &#125;&#125;assets/img/"</span></code>',b(a,oa,h),b(a,ra,h),w(ra,ca),b(a,ia,h),b(a,pa,h),w(pa,la),b(a,ua,h),b(a,ha,h),w(ha,ga),b(a,fa,h),b(a,ka,h),w(ka,ma),w(ma,da),w(ma,ya),w(ya,va),w(ma,Ea),b(a,ba,h),b(a,wa,h),w(wa,Ta),b(a,Pa,h),b(a,Oa,h),w(Oa,La),b(a,Aa,h),b(a,Ha,h),w(Ha,Na),w(Na,Ia),w(Na,Ga),w(Ga,Ca),w(Ca,Sa),w(Ga,$a),w(Ga,Ka),w(Ka,xa),w(Ga,_a),w(Ga,ja),w(ja,Ra),w(Ga,Ma),w(Ga,Ua),w(Ua,Da),w(Ha,Ba),w(Ha,Fa),w(Fa,Wa),w(Ha,qa),w(Ha,Qa),w(Qa,Ja),w(Ha,za),w(Ha,Va),w(Va,Xa),b(a,Ya,h),b(a,Za,h),w(Za,ae),b(a,ee,h),b(a,ne,h),w(ne,se),w(se,te),w(te,oe),b(a,re,h),b(a,ce,h),w(ce,ie),w(ce,pe),w(pe,le),w(ce,ue),b(a,he,h),b(a,ge,h),ge.innerHTML='<code class="language-undefined">@your-scope:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=$&#123;NODE_AUTH_TOKEN&#125;</code>',b(a,fe,h),b(a,ke,h),w(ke,me),w(me,de),b(a,ye,h),b(a,ve,h),w(ve,Ee),w(Ee,be),w(be,we),b(a,Te,h),b(a,Pe,h),Pe.innerHTML='<code class="language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies ✨\n  <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci\n  <span class="token key atrule">env</span><span class="token punctuation">:</span>\n    <span class="token key atrule">NPM_CONFIG_USERCONFIG</span><span class="token punctuation">:</span> .ci.npmrc\n    <span class="token key atrule">NODE_AUTH_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> secrets.PAT_TOKEN <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></code>',b(a,Oe,h),b(a,Le,h),w(Le,Ae),w(Ae,He),w(Ae,Ne),w(Ne,Ie),w(Ae,Ge),b(a,Ce,h),b(a,Se,h),w(Se,$e),w($e,Ke),w(Se,xe),w(Se,_e),w(_e,je),w(_e,Re),w(Se,Ue),w(Se,De),w(De,Be),b(a,Fe,h),b(a,We,h),w(We,qe),w(qe,Qe),w(Qe,Je),w(qe,ze),w(qe,Ve),w(Ve,Xe),w(Xe,Ye),w(Ve,Ze),w(Ve,an),w(an,en),w(Ve,nn),w(Ve,sn),w(sn,tn),w(Ve,on),w(Ve,rn),w(rn,cn),w(rn,pn),w(pn,ln),w(rn,un),w(Ve,hn),w(Ve,gn),w(gn,fn),w(Ve,kn),w(Ve,mn),w(mn,dn),b(a,yn,h),b(a,vn,h),w(vn,En),b(a,wn,h),b(a,Tn,h),w(Tn,Pn),b(a,On,h),b(a,Ln,h),w(Ln,An),b(a,Hn,h),b(a,Nn,h),w(Nn,In),b(a,Gn,h),b(a,Cn,h),w(Cn,Sn)},p:T,d(a){a&&y(e),a&&y(s),a&&y(t),a&&y(r),a&&y(c),a&&y(A),a&&y(H),a&&y(I),a&&y(G),a&&y(_),a&&y(j),a&&y(M),a&&y(U),a&&y(D),a&&y(B),a&&y(J),a&&y(z),a&&y(X),a&&y(Y),a&&y(aa),a&&y(ea),a&&y(sa),a&&y(ta),a&&y(oa),a&&y(ra),a&&y(ia),a&&y(pa),a&&y(ua),a&&y(ha),a&&y(fa),a&&y(ka),a&&y(ba),a&&y(wa),a&&y(Pa),a&&y(Oa),a&&y(Aa),a&&y(Ha),a&&y(Ya),a&&y(Za),a&&y(ee),a&&y(ne),a&&y(re),a&&y(ce),a&&y(he),a&&y(ge),a&&y(fe),a&&y(ke),a&&y(ye),a&&y(ve),a&&y(Te),a&&y(Pe),a&&y(Oe),a&&y(Le),a&&y(Ce),a&&y(Se),a&&y(Fe),a&&y(We),a&&y(yn),a&&y(vn),a&&y(wn),a&&y(Tn),a&&y(On),a&&y(Ln),a&&y(Hn),a&&y(Nn),a&&y(Gn),a&&y(Cn)}}}function L(a){let e,n;const h=[A];let g={$$slots:{default:[O]},$$scope:{ctx:a}};for(let t=0;t<h.length;t+=1)g=s(g,h[t]);return e=new P({props:g}),{c(){t(e.$$.fragment)},l(a){o(e.$$.fragment,a)},m(a,s){r(e,a,s),n=!0},p(a,[n]){const s=0&n?c(h,[u(A)]):{};1&n&&(s.$$scope={dirty:n,ctx:a}),e.$set(s)},i(a){n||(i(e.$$.fragment,a),n=!0)},o(a){p(e.$$.fragment,a),n=!1},d(a){l(e,a)}}}const A={author:"achimoraites",date:"Tue Jun 08 2021 21:57:00 GMT+0200",excerpt:"Here there are some cool tricks you can do to improve your Github Actions",image:"https://images.pexels.com/photos/1181287/pexels-photo-1181287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400",tags:["ci","productivity"],slug:"github-actions-tips-and-tricks",title:"Github actions tweaks",url:"https://achimoraites.github.io/blog/github-actions-tips-and-tricks"},H=!0;export default class extends a{constructor(a){super(),e(this,a,null,L,n,{})}}export{A as metadata,H as prerender};
