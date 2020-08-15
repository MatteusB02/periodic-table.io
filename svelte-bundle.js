!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function l(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function r(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function u(){return e=" ",document.createTextNode(e);var e}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let d;function v(e){d=e}const _=[],f=[],h=[],b=[],m=Promise.resolve();let g=!1;function x(e){h.push(e)}let y=!1;const C=new Set;function w(){if(!y){y=!0;do{for(let e=0;e<_.length;e+=1){const t=_[e];v(t),k(t.$$)}for(_.length=0;f.length;)f.pop()();for(let e=0;e<h.length;e+=1){const t=h[e];C.has(t)||(C.add(t),t())}h.length=0}while(_.length);for(;b.length;)b.pop()();g=!1,y=!1,C.clear()}}function k(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const L=new Set;function T(e,t){-1===e.$$.dirty[0]&&(_.push(e),g||(g=!0,m.then(w)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $(s,o,i,c,u,p,_=[-1]){const f=d;v(s);const h=o.props||{},b=s.$$={fragment:null,ctx:null,props:p,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:_};let m=!1;if(b.ctx=i?i(s,h,(e,t,...n)=>{const a=n.length?n[0]:t;return b.ctx&&u(b.ctx[e],b.ctx[e]=a)&&(b.bound[e]&&b.bound[e](a),m&&T(s,e)),t}):[],b.update(),m=!0,a(b.before_update),b.fragment=!!c&&c(b.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);b.fragment&&b.fragment.l(e),e.forEach(r)}else b.fragment&&b.fragment.c();o.intro&&((g=s.$$.fragment)&&g.i&&(L.delete(g),g.i(y))),function(e,n,s){const{fragment:o,on_mount:i,on_destroy:r,after_update:c}=e.$$;o&&o.m(n,s),x(()=>{const n=i.map(t).filter(l);r?r.push(...n):a(n),e.$$.on_mount=[]}),c.forEach(x)}(s,o.target,o.anchor),w()}var g,y;v(f)}class S{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function F(t){let n,a,l,s,o;return{c(){n=c("div"),n.innerHTML='<a target="_blank" href="https://feedback.periodic-table.io/" rel="noopener noreferrer" class="m-1 p-2"><span id="suggestionLink" class="linkText"></span></a> \n  <a href="translation.html" class="m-1 p-2 flex"><span id="translate2Link" class="linkText"></span> \n    <span class="newFooter new"></span></a> \n  <a href="about.html" class="m-1 p-2"><span id="aboutLink" class="linkText"></span></a> \n  <a href="credits.html" class="m-1 p-2"><span id="creditsLink" class="linkText"></span></a> \n  <a href="privacy-policy.html" class="m-1 p-2"><span id="privacyLink" class="linkText"></span></a>',a=u(),l=c("div"),l.innerHTML='<a target="_blank" href="https://github.com/catchspider2002/periodic-table.io" rel="noopener noreferrer" class="flex m-1 p-2" title="Github"><span class="iconFont self-center">w</span></a> \n  <a target="_blank" href="https://twitter.com/periodictableio" rel="noopener noreferrer" class="flex m-1 p-2" title="Twitter"><span class="iconFont self-center">x</span></a> \n  <a target="_blank" href="https://www.instagram.com/periodictableio/" rel="noopener noreferrer" class="flex m-1 p-2" title="Instagram"><span class="iconFont self-center">u</span></a> \n  <a target="_blank" href="https://gumroad.com/periodictabio" rel="noopener noreferrer" class="flex m-1 p-2" title="Gumroad"><span class="iconFont self-center">v</span></a>',s=u(),o=c("div"),o.innerHTML='\n  Made with \n  <span style="color:#e25555">❤</span>\n   by Naveen CS\n',p(n,"class","flex flex-wrap justify-center pt-2"),p(l,"class","flex flex-wrap justify-center pt-2 py-4"),p(o,"class","flex flex-wrap justify-center p-2 pb-8 self-center")},m(e,t){i(e,n,t),i(e,a,t),i(e,l,t),i(e,s,t),i(e,o,t)},p:e,i:e,o:e,d(e){e&&r(n),e&&r(a),e&&r(l),e&&r(s),e&&r(o)}}}function H(t){let n;return{c(){n=c("div"),n.innerHTML='<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-label="Expand"><span class="icon-bar"></span> \n      <span class="icon-bar"></span> \n      <span class="icon-bar"></span></button> \n    <a id="navLogo" class="navbar-brand" href="./" aria-label="Home"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 10.054166 10.054166" class="periodic-table-logo"><g transform="translate(-11.223271,-248.751622)" style="fill:#ffffff"><path d="m 14.368697,250.65729 a 1.3007583,1.300758 0 0 0\n            -1.300758,1.30076 1.3007583,1.300758 0 0 0 1.009148,1.26637\n            1.5960997,1.5960997 0 0 1 1.552505,-1.58069 1.3007583,1.300758 0 0 0\n            -1.260895,-0.98644 z m 4.841172,1.58093 a 1.5081255,1.5081255 0 0 0\n            -1.470202,1.17775 l -0.824437,-0.0999 a 0.12567713,0.12567713 0 0 0\n            -0.139889,0.10965 0.12567713,0.12567713 0 0 0 0.109624,0.13989 l\n            0.820853,0.0995 a 1.5081255,1.5081255 0 0 0 -0.0041,0.0812\n            1.5081255,1.5081255 0 0 0 1.508126,1.50813 1.5081255,1.5081255 0 0 0\n            1.508125,-1.50813 1.5081255,1.5081255 0 0 0 -1.508125,-1.50812 z m\n            -4.331148,1.68937 a 0.12567712,0.12567712 0 0 0 -0.07784,0.028 l\n            -0.843043,0.68281 a 1.3007583,1.300758 0 0 0 -0.87434,-0.3398\n            1.3007583,1.300758 0 0 0 -1.300758,1.30076 1.3007583,1.300758 0 0 0\n            1.300758,1.30076 1.3007583,1.300758 0 0 0 1.300759,-1.30076\n            1.3007583,1.300758 0 0 0 -0.257418,-0.77439 l 0.832219,-0.67406 a\n            0.12567712,0.12567712 0 0 0 0.01858,-0.17676 0.12567712,0.12567712 0\n            0 0 -0.09892,-0.0466 z"></path><path d="m 15.672524,251.73018 a 1.5081255,1.5081254 0 0 0\n            -1.508126,1.50813 1.5081255,1.5081254 0 0 0 0.296741,0.89542 l\n            0.292273,-0.23672 a 0.20108339,0.20108339 0 0 1 0.282822,0.0297\n            0.20108339,0.20108339 0 0 1 -0.0297,0.28282 l -0.2651,0.21471 a\n            1.5081255,1.5081254 0 0 0 0.931091,0.32219 1.5081255,1.5081254 0 0 0\n            1.444403,-1.07677 l -0.241045,-0.0292 a 0.20108339,0.20108339 0 0 1\n            -0.175408,-0.22384 0.20108339,0.20108339 0 0 1 0.223814,-0.17541 l\n            0.254668,0.0309 a 1.5081255,1.5081254 0 0 0 0.0017,-0.0337\n            1.5081255,1.5081254 0 0 0 -1.508125,-1.50813 z" style="opacity:0.7"></path></g></svg></a> \n    <div class="navbar-header no-overflow"><h1 id="pageHeader"></h1></div></div> \n  <div id="listNavbar" class="navbar-collapse navbar-right collapse"><ul class="nav navbar-nav"><li><a id="listList" href="list.html"><span class="iconFont">j</span> \n          <span id="listLink" class="linkText"></span></a></li> \n      <li><a id="compareList" href="compare.html"><span class="iconFont">K</span> \n          <span id="compareLink" class="linkText"></span></a></li> \n      <li><a id="printableList" href="printables.html"><span class="iconFont">E</span> \n          <span id="printableLink" class="linkText"></span> \n          <span id="newHeader" class="newHeader new"></span></a></li> \n      <li><a id="storeList" href="store.html"><span class="iconFont">I</span> \n          <span id="storeLink" class="linkText"></span></a></li> \n      <li><a id="translateList" href="translation.html"><span class="iconFont">B</span> \n          <span id="translateLink" class="linkText"></span> \n          <span class="newHeader new"></span></a></li> \n      <li><a id="settingsList" href="#" data-toggle="modal" data-target="#settingsModal"><span class="iconFont">f</span> \n          <span id="settingsLink" class="linkText"></span></a></li> \n      <li><a id="themeList" href="#"><span id="themeIcon" class="iconFont">t</span> \n          <span id="themeLink" class="linkText">Theme</span></a></li></ul></div>',p(n,"class","top-container")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}function M(t){let n,a,l,s,d,v,_,f,h,b,m,g,x,y,C,w,k,L,T,$,S,F,H,M,N,E,j,B,z,P,A,I,q,G,O,W,D,K,R,U,V,Y,J,Q,X,Z,ee,te,ne,ae,le,se,oe,ie,re,ce,ue,pe,de,ve,_e,fe,he,be,me,ge,xe,ye,Ce,we,ke,Le,Te,$e,Se,Fe,He,Me,Ne,Ee,je;return{c(){n=c("div"),a=c("div"),l=c("div"),s=c("div"),s.innerHTML='<span id="modalSettings" class="modal-title text-left text-upper heavyFont"></span> \n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>',d=u(),v=c("div"),_=c("div"),f=c("div"),h=u(),b=c("div"),m=c("select"),g=c("option"),g.textContent="English",x=c("option"),x.textContent="English (UK)",y=c("option"),y.textContent="العربية",C=c("option"),C.textContent="Български",w=c("option"),w.textContent="Català",k=c("option"),k.textContent="Čeština",L=c("option"),L.textContent="Dansk",T=c("option"),T.textContent="Deutsch",$=c("option"),$.textContent="Ελληνικά",S=c("option"),S.textContent="Español",F=c("option"),F.textContent="فارسی",H=c("option"),H.textContent="Suomi",M=c("option"),M.textContent="Français",N=c("option"),N.textContent="עברית",E=c("option"),E.textContent="हिंदी",j=c("option"),j.textContent="Hrvatski",B=c("option"),B.textContent="Magyar",z=c("option"),z.textContent="Bahasa Indonesia",P=c("option"),P.textContent="Italiano",A=c("option"),A.textContent="日本語",I=c("option"),I.textContent="한국어",q=c("option"),q.textContent="Norsk Bokmål",G=c("option"),G.textContent="Norsk Nynorsk",O=c("option"),O.textContent="Nederlands",W=c("option"),W.textContent="Polski",D=c("option"),D.textContent="Português",K=c("option"),K.textContent="Română",R=c("option"),R.textContent="Русский",U=c("option"),U.textContent="Slovenčina",V=c("option"),V.textContent="Slovenščina",Y=c("option"),Y.textContent="Српски",J=c("option"),J.textContent="Svenska",Q=c("option"),Q.textContent="ไทย",X=c("option"),X.textContent="Türkçe",Z=c("option"),Z.textContent="Українська",ee=c("option"),ee.textContent="Tiếng Việt",te=c("option"),te.textContent="中文(简体)",ne=c("option"),ne.textContent="中文(繁體)",ae=u(),le=c("div"),se=u(),oe=c("div"),oe.innerHTML='<input type="radio" id="tempcelsius" name="temperature" value="celsius" onchange="setTemp()"> \n            <label class="disable-select" for="tempcelsius"></label> \n\n            <input type="radio" id="tempfahrenheit" name="temperature" value="fahrenheit" onchange="setTemp()"> \n            <label class="disable-select" for="tempfahrenheit"></label>',ie=u(),re=c("div"),ce=u(),ue=c("div"),ue.innerHTML='<table id="colorTable"><tbody><tr><td id="color1" class="colorClass" title="Red"></td> \n                  <td id="color2" class="colorClass" title="Orange"></td> \n                  <td id="color3" class="colorClass" title="Yellow"></td> \n                  <td id="color4" class="colorClass" title="Brown"></td> \n                  <td id="color5" class="colorClass" title="Lime"></td></tr> \n                <tr><td id="color6" class="colorClass" title="Green"></td> \n                  <td id="color7" class="colorClass" title="Cyan"></td> \n                  <td id="color8" class="colorClass" title="Blue"></td> \n                  <td id="color9" class="colorClass" title="Purple"></td> \n                  <td id="color10" class="colorClass" title="Pink"></td></tr></tbody></table>',pe=u(),de=c("div"),ve=u(),_e=c("div"),fe=u(),he=c("div"),be=c("select"),me=c("option"),me.textContent="100%",ge=c("option"),ge.textContent="95%",xe=c("option"),xe.textContent="90%",ye=c("option"),ye.textContent="85%",Ce=c("option"),Ce.textContent="80%",we=u(),ke=c("div"),Le=u(),Te=c("div"),Te.innerHTML='<label class="switch"><input id="nameSelectSetting" type="checkbox"> \n              <span class="slider round"></span></label>',$e=u(),Se=c("div"),Fe=u(),He=c("div"),He.innerHTML='<label class="switch"><input id="atmNoSelectSetting" type="checkbox"> \n              <span class="slider round"></span></label>',Me=u(),Ne=c("div"),Ne.textContent="Style",Ee=u(),je=c("div"),je.innerHTML='<input type="radio" id="style1" name="tableStyle" value="1" onchange="setStyle()"> \n            <label id="style1Label" class="disable-select" for="style1"></label> \n            <input type="radio" id="style2" name="tableStyle" value="2" onchange="setStyle()"> \n            <label id="style2Label" class="disable-select" for="style2"></label> \n            <input type="radio" id="style3" name="tableStyle" value="3" onchange="setStyle()"> \n            <label id="style3Label" class="disable-select" for="style3"></label>',p(s,"class","modal-header"),p(f,"class","new-table heavyFont text-left"),p(f,"id","language"),g.__value="en",g.value=g.__value,x.__value="gb",x.value=x.__value,y.__value="ar",y.value=y.__value,C.__value="bg",C.value=C.__value,w.__value="ca",w.value=w.__value,k.__value="cs",k.value=k.__value,L.__value="da",L.value=L.__value,T.__value="de",T.value=T.__value,$.__value="el",$.value=$.__value,S.__value="es",S.value=S.__value,F.__value="fa",F.value=F.__value,H.__value="fi",H.value=H.__value,M.__value="fr",M.value=M.__value,N.__value="he",N.value=N.__value,E.__value="hi",E.value=E.__value,j.__value="hr",j.value=j.__value,B.__value="hu",B.value=B.__value,z.__value="id",z.value=z.__value,P.__value="it",P.value=P.__value,A.__value="ja",A.value=A.__value,I.__value="ko",I.value=I.__value,q.__value="nb",q.value=q.__value,G.__value="nn",G.value=G.__value,O.__value="nl",O.value=O.__value,W.__value="ph",W.value=W.__value,D.__value="pt",D.value=D.__value,K.__value="ro",K.value=K.__value,R.__value="ru",R.value=R.__value,U.__value="sk",U.value=U.__value,V.__value="sl",V.value=V.__value,Y.__value="sr",Y.value=Y.__value,J.__value="sv",J.value=J.__value,Q.__value="th",Q.value=Q.__value,X.__value="tr",X.value=X.__value,Z.__value="uk",Z.value=Z.__value,ee.__value="vi",ee.value=ee.__value,te.__value="zs",te.value=te.__value,ne.__value="zt",ne.value=ne.__value,p(m,"id","languageSelectSetting"),p(m,"aria-label","Language"),p(b,"class","new-table"),p(le,"class","new-table heavyFont text-left self-start"),p(le,"id","temperature"),p(oe,"class","radio-toolbar padding-top-5"),p(re,"class","new-table heavyFont padding-top-5 text-left self-start"),p(re,"id","themeColor"),p(ue,"class","new-table"),p(de,"id","settingPeriodicTable"),p(de,"class","new-table span-2"),p(_e,"class","new-table heavyFont text-left"),p(_e,"id","tableWidth"),me.__value="1",me.value=me.__value,ge.__value="0.95",ge.value=ge.__value,xe.__value="0.9",xe.value=xe.__value,ye.__value="0.85",ye.value=ye.__value,Ce.__value="0.8",Ce.value=Ce.__value,p(be,"id","marginSetting"),p(be,"aria-label","Table Width"),p(he,"class","new-table"),p(ke,"class","new-table heavyFont text-left"),p(ke,"id","settingsName"),p(Te,"class","new-table text-left padding-top-5"),p(Se,"class","new-table heavyFont text-left"),p(Se,"id","settingsAtmWtMain"),p(He,"class","new-table text-left padding-top-5"),p(Ne,"class","new-table heavyFont text-left self-start"),p(Ne,"id","tableStyle"),p(je,"class","radio-toolbar radio-style padding-top-5"),p(_,"class","grid grid-row-gap-10 items-center"),p(v,"class","modal-body"),p(l,"class","modal-inner"),p(a,"class","modal-content"),p(n,"class","modal-dialog"),p(n,"role","document")},m(e,t){i(e,n,t),o(n,a),o(a,l),o(l,s),o(l,d),o(l,v),o(v,_),o(_,f),o(_,h),o(_,b),o(b,m),o(m,g),o(m,x),o(m,y),o(m,C),o(m,w),o(m,k),o(m,L),o(m,T),o(m,$),o(m,S),o(m,F),o(m,H),o(m,M),o(m,N),o(m,E),o(m,j),o(m,B),o(m,z),o(m,P),o(m,A),o(m,I),o(m,q),o(m,G),o(m,O),o(m,W),o(m,D),o(m,K),o(m,R),o(m,U),o(m,V),o(m,Y),o(m,J),o(m,Q),o(m,X),o(m,Z),o(m,ee),o(m,te),o(m,ne),o(_,ae),o(_,le),o(_,se),o(_,oe),o(_,ie),o(_,re),o(_,ce),o(_,ue),o(_,pe),o(_,de),o(_,ve),o(_,_e),o(_,fe),o(_,he),o(he,be),o(be,me),o(be,ge),o(be,xe),o(be,ye),o(be,Ce),o(_,we),o(_,ke),o(_,Le),o(_,Te),o(_,$e),o(_,Se),o(_,Fe),o(_,He),o(_,Me),o(_,Ne),o(_,Ee),o(_,je)},p:e,i:e,o:e,d(e){e&&r(n)}}}new class extends S{constructor(e){super(),$(this,e,null,F,s,{})}}({target:document.querySelector("#footer")}),new class extends S{constructor(e){super(),$(this,e,null,H,s,{})}}({target:document.querySelector("#topNavbar")}),new class extends S{constructor(e){super(),$(this,e,null,M,s,{})}}({target:document.querySelector("#settingsModal")})}();
//# sourceMappingURL=svelte-bundle.js.map
