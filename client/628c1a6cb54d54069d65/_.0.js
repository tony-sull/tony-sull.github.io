(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,c){"use strict";c.d(t,"b",function(){return o}),c.d(t,"a",function(){return a});const r="undefined"!=typeof document&&(!!((document||{}).documentElement||{}).style&&"scrollBehavior"in document.documentElement.style),o=()=>{r?window.scrollTo({top:0,left:0,behavior:"smooth"}):window.scrollTo(0,0)},a=e=>{e&&(r?e.scrollIntoView({behavior:"smooth",block:"start"}):e.scrollIntoView())}},function(e,t,c){"use strict";var r=c(0);const o=()=>"undefined"==typeof window,a=()=>{if(o())return!1;let e=window.opr||{};return!!window.opr&&!!e.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0},s=()=>!o()&&!!document.documentMode,n=()=>!o()&&!!window.chrome&&!!window.chrome.webstore;var i={isServer:o,isOpera:a,isFirefox:()=>!o()&&"undefined"!=typeof InstallTrigger,isSafari:()=>{if(o())return!1;let e=window.safari||{};return/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||void 0!==e&&e.pushNotification).toString()},isIE:s,isEdge:()=>!o()&&!s()&&!!window.StyleMedia,isChrome:n,isBlink:()=>!o()&&(n()||a())&&!!window.CSS,isMobile:()=>{if(o)return!1;const e=(navigator||{}).userAgent;return!!e&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(e)},allBrowsers:["chrome","firefox","safari","opera","ie","edge","blink","mobile"]};var l=function(e,t){return!(!t||!t.indexOf)&&t.indexOf(e)>=0};const b=[{name:"mobile",isCurrentBrowser:i.isMobile()},{name:"chrome",isCurrentBrowser:i.isChrome()},{name:"firefox",isCurrentBrowser:i.isFirefox()},{name:"safari",isCurrentBrowser:i.isSafari()},{name:"opera",isCurrentBrowser:i.isOpera()},{name:"ie",isCurrentBrowser:i.isIE()},{name:"edge",isCurrentBrowser:i.isEdge()},{name:"blink",isCurrentBrowser:i.isBlink()}];function j(e,t){var c,o,a=e._slotted.default;return{c:r.u,l:r.u,m:function(e,t){a&&(Object(r.t)(c||(c=Object(r.k)()),e,t),Object(r.t)(a,e,t),Object(r.t)(o||(o=Object(r.k)()),e,t))},u:function(){a&&(Object(r.x)(c,o,a),Object(r.p)(c),Object(r.p)(o))},d:r.u}}function h(e){var t,c,o,a;if(Object(r.s)(this,e),this._state=Object(r.e)({browsers:[],only:!1,except:!1},e.data),this._recompute({browsers:1,only:1,except:1,allowedBrowsers:1,restrictedBrowsers:1},this._state),this._slotted=e.slots||{},this.slots={},this._fragment=(t=this,c=this._state,a=c.shouldRender&&j(t),{c:function(){a&&a.c(),o=Object(r.k)()},l:function(e){a&&a.l(e),o=Object(r.k)()},m:function(e,t){a&&a.m(e,t),Object(r.t)(o,e,t)},p:function(e,c){c.shouldRender?a||((a=j(t)).c(),a.m(o.parentNode,o)):a&&(a.u(),a.d(),a=null)},u:function(){a&&a.u(),Object(r.p)(o)},d:function(){a&&a.d()}}),e.target){var s=Object(r.h)(e.target);e.hydrate?this._fragment.l(s):this._fragment.c(),s.forEach(r.p),this._mount(e.target,e.anchor)}}Object(r.e)(h.prototype,r.w),h.prototype._recompute=function(e,t){(e.browsers||e.only||e.except)&&(this._differs(t.allowedBrowsers,t.allowedBrowsers=function({browsers:e,only:t,except:c}){return i.allBrowsers.reduce((r,o)=>(c?l(o,e)||r.push(o):t&&l(o,e)&&r.push(o),r),[])}(t))&&(e.allowedBrowsers=!0),this._differs(t.restrictedBrowsers,t.restrictedBrowsers=function({browsers:e,only:t,except:c}){return i.allBrowsers.reduce((r,o)=>(c?l(o,e)&&r.push(o):t&&(l(o,e)||r.push(o)),r),[])}(t))&&(e.restrictedBrowsers=!0)),(e.allowedBrowsers||e.restrictedBrowsers)&&this._differs(t.shouldRender,t.shouldRender=function({allowedBrowsers:e,restrictedBrowsers:t}){const c=b.find(e=>!0===e.isCurrentBrowser);return!(c&&l(c.name,t)||!c||!l(c.name,e))}(t))&&(e.shouldRender=!0)};t.a=h},function(e,t,c){"use strict";var r=c(0),o=c(3);function a(e){var t,c,o,a,s,n,i,l,b,j;if(Object(r.s)(this,e),this._state=Object(r.e)({},e.data),document.getElementById("svelte-1fthdzu-style")||((t=Object(r.l)("style")).id="svelte-1fthdzu-style",t.textContent="footer.svelte-1fthdzu{background:var(--color-alternate);padding:0.5rem 0;text-align:right;font-size:0.625rem}.content-grid.svelte-1fthdzu{color:var(--color-text-primary)}a.svelte-1fthdzu{color:var(--color-primary)}",Object(r.d)(t,document.head)),this._fragment=(this._state,{c:function(){c=Object(r.l)("footer"),o=Object(r.l)("div"),a=Object(r.l)("div"),s=Object(r.o)("Made by "),n=Object(r.l)("a"),i=Object(r.o)("Tony"),l=Object(r.o)(" "),b=Object(r.l)("span"),j=Object(r.o)("❤️"),this.h()},l:function(e){c=Object(r.i)(e,"FOOTER",{class:!0},!1);var t=Object(r.h)(c);o=Object(r.i)(t,"DIV",{class:!0},!1);var h=Object(r.h)(o);a=Object(r.i)(h,"DIV",{},!1);var d=Object(r.h)(a);s=Object(r.j)(d,"Made by "),n=Object(r.i)(d,"A",{href:!0,target:!0,rel:!0,class:!0},!1);var O=Object(r.h)(n);i=Object(r.j)(O,"Tony"),O.forEach(r.p),l=Object(r.j)(d," "),b=Object(r.i)(d,"SPAN",{role:!0,"aria-label":!0},!1);var f=Object(r.h)(b);j=Object(r.j)(f,"❤️"),f.forEach(r.p),d.forEach(r.p),h.forEach(r.p),t.forEach(r.p),this.h()},h:function(){n.href="https://github.com/tonyfsullivan",n.target="_blank",n.rel="noopener noreferrer",n.className="svelte-1fthdzu",Object(r.A)(b,"role","img"),Object(r.A)(b,"aria-label","heart"),o.className="content-grid svelte-1fthdzu",c.className="svelte-1fthdzu"},m:function(e,t){Object(r.t)(c,e,t),Object(r.d)(o,c),Object(r.d)(a,o),Object(r.d)(s,a),Object(r.d)(n,a),Object(r.d)(i,n),Object(r.d)(l,a),Object(r.d)(b,a),Object(r.d)(j,b)},p:r.u,u:function(){Object(r.p)(c)},d:r.u}),e.target){var h=Object(r.h)(e.target);e.hydrate?this._fragment.l(h):this._fragment.c(),h.forEach(r.p),this._mount(e.target,e.anchor)}}Object(r.e)(a.prototype,r.w);var s=a;function n(e){return Math.floor(Math.random()*Math.floor(e))}function i(e){let t=`${n(2e3)}px ${n(2e3)}px`;for(let c=1;c<e;c++)t+=` , ${n(2e3)}px ${n(2e3)}px`;return t}var l=i(700),b=i(200),j=i(100);function h(e){var t,c,o,a,s,n,i;if(Object(r.s)(this,e),this._state=Object(r.e)({},e.data),document.getElementById("svelte-1ywnee2-style")||((t=Object(r.l)("style")).id="svelte-1ywnee2-style",t.textContent='.parallax.svelte-1ywnee2{color:var(--color-primary);position:fixed;z-index:1}#stars1.svelte-1ywnee2{width:1px;height:1px;border-radius:50%;background:transparent;animation:svelte-1ywnee2-animStar 150s linear infinite}#stars1.svelte-1ywnee2:after{content:" ";position:absolute;top:2000px;width:1px;height:1px;border-radius:50%;background:transparent;box-shadow:inherit}#stars2.svelte-1ywnee2{width:2px;height:2px;border-radius:50%;background:transparent;animation:svelte-1ywnee2-animStar 100s linear infinite}#stars2.svelte-1ywnee2:after{content:" ";position:absolute;top:2000px;width:2px;height:2px;border-radius:50%;background:transparent;box-shadow:inherit}#stars3.svelte-1ywnee2{width:3px;height:3px;border-radius:50%;background:transparent;animation:svelte-1ywnee2-animStar 50s linear infinite}#stars3.svelte-1ywnee2:after{content:" ";position:absolute;top:2000px;width:3px;height:3px;border-radius:50%;background:transparent;box-shadow:inherit}@keyframes svelte-1ywnee2-animStar{from{transform:translateY(-2000px)}to{transform:translateY(0px)}}',Object(r.d)(t,document.head)),this._fragment=(this._state,{c:function(){c=Object(r.l)("div"),o=Object(r.l)("div"),a=Object(r.o)("\n    "),s=Object(r.l)("div"),n=Object(r.o)("\n    "),i=Object(r.l)("div"),this.h()},l:function(e){c=Object(r.i)(e,"DIV",{class:!0},!1);var t=Object(r.h)(c);o=Object(r.i)(t,"DIV",{id:!0,style:!0,class:!0},!1),Object(r.h)(o).forEach(r.p),a=Object(r.j)(t,"\n    "),s=Object(r.i)(t,"DIV",{id:!0,style:!0,class:!0},!1),Object(r.h)(s).forEach(r.p),n=Object(r.j)(t,"\n    "),i=Object(r.i)(t,"DIV",{id:!0,style:!0,class:!0},!1),Object(r.h)(i).forEach(r.p),t.forEach(r.p),this.h()},h:function(){o.id="stars1",Object(r.B)(o,"box-shadow",l),o.className="svelte-1ywnee2",s.id="stars2",Object(r.B)(s,"box-shadow",b),s.className="svelte-1ywnee2",i.id="stars3",Object(r.B)(i,"box-shadow",j),i.className="svelte-1ywnee2",c.className="parallax svelte-1ywnee2"},m:function(e,t){Object(r.t)(c,e,t),Object(r.d)(o,c),Object(r.d)(a,c),Object(r.d)(s,c),Object(r.d)(n,c),Object(r.d)(i,c)},p:r.u,u:function(){Object(r.p)(c)},d:r.u}),e.target){var h=Object(r.h)(e.target);e.hydrate?this._fragment.l(h):this._fragment.c(),h.forEach(r.p),this._mount(e.target,e.anchor)}}Object(r.e)(h.prototype,r.w);var d=h,O=c(2),f={handleScroll(){if(!document||!document.documentElement)return;const e=document.documentElement.getBoundingClientRect();this.set({shouldShowScrollTopArrow:-1*e.top>100})},scrollToPageTop:O.b};function m(e){var t;if(Object(r.s)(this,e),this._state=Object(r.e)({},e.data),document.getElementById("svelte-1v9ziw-style")||((t=Object(r.l)("style")).id="svelte-1v9ziw-style",t.textContent=".arrow.svelte-1v9ziw{color:var(--color-primary);text-align:center;margin:0 auto;padding:0.5rem 1rem}.arrow.hide.svelte-1v9ziw{display:none}.scroll-top.svelte-1v9ziw{position:fixed;bottom:0;right:0;cursor:pointer}.to-top.svelte-1v9ziw{text-align:center;font-size:0.5rem;padding-top:0.125rem}",Object(r.d)(t,document.head)),this._fragment=function(e,t){var c,o,a,s,n,i,l;function b(t){e.handleScroll()}function j(t){e.scrollToPageTop()}return window.addEventListener("scroll",b),{c:function(){c=Object(r.l)("div"),o=Object(r.l)("div"),a=Object(r.l)("button"),s=Object(r.o)("\n        "),n=Object(r.l)("div"),i=Object(r.o)("To Top"),this.h()},l:function(e){c=Object(r.i)(e,"DIV",{class:!0},!1);var t=Object(r.h)(c);o=Object(r.i)(t,"DIV",{class:!0},!1);var l=Object(r.h)(o);a=Object(r.i)(l,"BUTTON",{class:!0,href:!0},!1),Object(r.h)(a).forEach(r.p),s=Object(r.j)(l,"\n        "),n=Object(r.i)(l,"DIV",{class:!0},!1);var b=Object(r.h)(n);i=Object(r.j)(b,"To Top"),b.forEach(r.p),l.forEach(r.p),t.forEach(r.p),this.h()},h:function(){a.className="fas fa-angle-double-up fa-2x",Object(r.A)(a,"href","#"),n.className="to-top svelte-1v9ziw",o.className=l="arrow "+(t.shouldShowScrollTopArrow?"":"hide")+" svelte-1v9ziw",Object(r.c)(c,"click",j),c.className="scroll-top svelte-1v9ziw"},m:function(e,t){Object(r.t)(c,e,t),Object(r.d)(o,c),Object(r.d)(a,o),Object(r.d)(s,o),Object(r.d)(n,o),Object(r.d)(i,n)},p:function(e,t){e.shouldShowScrollTopArrow&&l!==(l="arrow "+(t.shouldShowScrollTopArrow?"":"hide")+" svelte-1v9ziw")&&(o.className=l)},u:function(){Object(r.p)(c)},d:function(){window.removeEventListener("scroll",b),Object(r.z)(c,"click",j)}}}(this,this._state),e.target){var c=Object(r.h)(e.target);e.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(r.p),this._mount(e.target,e.anchor)}}Object(r.e)(m.prototype,r.w),Object(r.e)(m.prototype,f);var u=m;function p(e){var t,c,a,n,i,l,b,j,h,O,f,m,p,v,g,w;if(Object(r.s)(this,e),this._state=Object(r.e)(this.store._init(["theme"]),e.data),this.store._add(this,["theme"]),this._handlers.destroy=[r.y],this._slotted=e.slots||{},e.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this.slots={},this._fragment=(t=this,c=this._state,m=t._slotted.default,p=new d({root:t.root}),v=new o.a({root:t.root,slots:{default:Object(r.m)()},data:{except:!0,browsers:["firefox"]}}),g=new u({root:t.root}),w=new s({root:t.root}),{c:function(){a=Object(r.l)("div"),n=Object(r.o)("\n        "),p._fragment.c(),i=Object(r.o)("\n    "),v._fragment.c(),l=Object(r.o)("\n\n    "),h=Object(r.o)("\n\n\t"),g._fragment.c(),O=Object(r.o)("\n\t"),w._fragment.c(),this.h()},l:function(e){a=Object(r.i)(e,"DIV",{class:!0},!1);var t=Object(r.h)(a);n=Object(r.j)(e,"\n        "),p._fragment.l(e),i=Object(r.j)(e,"\n    "),v._fragment.l(t),l=Object(r.j)(t,"\n\n    "),h=Object(r.j)(t,"\n\n\t"),g._fragment.l(t),O=Object(r.j)(t,"\n\t"),w._fragment.l(t),t.forEach(r.p),this.h()},h:function(){a.className=f=c.$theme.name},m:function(e,t){Object(r.t)(a,e,t),Object(r.d)(n,v._slotted.default),p._mount(v._slotted.default,null),Object(r.d)(i,v._slotted.default),v._mount(a,null),Object(r.d)(l,a),m&&(Object(r.d)(b||(b=Object(r.k)()),a),Object(r.d)(m,a),Object(r.d)(j||(j=Object(r.k)()),a)),Object(r.d)(h,a),g._mount(a,null),Object(r.d)(O,a),w._mount(a,null)},p:function(e,t){var c={browsers:["firefox"]};v._set(c),e.$theme&&f!==(f=t.$theme.name)&&(a.className=f)},u:function(){Object(r.p)(a),m&&(Object(r.x)(b,j,m),Object(r.p)(b),Object(r.p)(j))},d:function(){p.destroy(!1),v.destroy(!1),g.destroy(!1),w.destroy(!1)}}),e.target){var y=Object(r.h)(e.target);e.hydrate?this._fragment.l(y):this._fragment.c(),y.forEach(r.p),this._mount(e.target,e.anchor),this._lock=!0,Object(r.g)(this._beforecreate),Object(r.g)(this._oncreate),Object(r.g)(this._aftercreate),this._lock=!1}}Object(r.e)(p.prototype,r.w);t.a=p},function(e,t,c){"use strict";c.r(t);var r=c(0),o=c(4);function a(e){var t,c,o,a,s,n,i,l,b,j,h,d,O,f,m,u,p,v,g,w,y,_,x,z,k,E,N,S,I,A,B,T,q,D,V,C,P,M,R,Y,F,$,H,L,W,U,X,G,J,K,Z,Q,ee,te,ce;if(Object(r.s)(this,e),this._state=Object(r.e)({},e.data),document.getElementById("svelte-1qrsjhb-style")||((t=Object(r.l)("style")).id="svelte-1qrsjhb-style",t.textContent=".about-page.svelte-1qrsjhb{background-color:var(--color-alternate);padding-top:2rem;min-height:100vh;display:flex;flex:0 1 auto;flex-direction:column;justify-content:center}h1.svelte-1qrsjhb{color:var(--color-primary);padding:1rem 0;font-size:3rem}.about-content.svelte-1qrsjhb{color:var(--color-text-primary);font-size:0.875rem;line-height:1.5rem}.about-content.svelte-1qrsjhb p.svelte-1qrsjhb{font-weight:300;padding:0.5rem 0}a.svelte-1qrsjhb{color:var(--color-primary)}.highlight.svelte-1qrsjhb{background-color:var(--color-highlight)}::selection{background-color:var(--color-highlight)}.text-emoji.svelte-1qrsjhb{color:var(--color-primary);padding:2rem 0;font-size:1.5rem;font-weight:300;text-align:center}.content-grid.svelte-1qrsjhb{flex:auto}@media only screen and (max-width: 375px){.about-page.svelte-1qrsjhb{padding-top:3rem}.about-content.svelte-1qrsjhb{font-size:1rem}}",Object(r.d)(t,document.head)),this._fragment=(this._state,{c:function(){c=Object(r.l)("div"),o=Object(r.l)("div"),a=Object(r.l)("h1"),s=Object(r.o)("About"),n=Object(r.o)("\n        "),i=Object(r.l)("div"),l=Object(r.l)("div"),b=Object(r.l)("p"),j=Object(r.o)("I started my career working primarily on "),h=Object(r.l)("span"),d=Object(r.o)("native apps"),O=Object(r.o)(" for Android, iOS, and Windows Phone but have focused on "),f=Object(r.l)("span"),m=Object(r.o)("full-stack javascript"),u=Object(r.o)(" for the last two years."),p=Object(r.o)("\n                "),v=Object(r.l)("p"),g=Object(r.o)("On the backend it's mainly been Node.js hosted on "),w=Object(r.l)("span"),y=Object(r.o)("AWS"),_=Object(r.o)(" for any production apps.  The frontend is where it really gets fun with projects in "),x=Object(r.l)("span"),z=Object(r.o)("Angular"),k=Object(r.o)(" and "),E=Object(r.l)("span"),N=Object(r.o)("React"),S=Object(r.o)(", and most recently "),I=Object(r.l)("span"),A=Object(r.o)("Svelte and Sapper"),B=Object(r.o)(" (which powers this site)."),T=Object(r.o)("\n                "),q=Object(r.l)("p"),D=Object(r.o)("More of my energy is focused into "),V=Object(r.l)("span"),C=Object(r.o)("open-source"),P=Object(r.o)(" projects these days, staying close to the community on "),M=Object(r.l)("span"),R=Object(r.o)("Gitter"),Y=Object(r.o)(" and starting a blog that will be released shortly!"),F=Object(r.o)("\n                "),$=Object(r.l)("p"),H=Object(r.o)("I build this site heavily influenced by "),L=Object(r.l)("span"),W=Object(r.o)("Dinesh Pandiyan"),U=Object(r.o)("'s personal site - what better way to get a solid comparison of React vs. Svelte than by recreating a real-world project! Take a look at "),X=Object(r.l)("a"),G=Object(r.o)("Dinesh's original project"),J=Object(r.o)(" and the Svelte equivalent "),K=Object(r.l)("a"),Z=Object(r.o)("here"),Q=Object(r.o)(" and let me know what you think of the Svelte-ified code!"),ee=Object(r.o)("\n                "),te=Object(r.l)("p"),ce=Object(r.o)("\\ (•◡•) /"),this.h()},l:function(e){c=Object(r.i)(e,"DIV",{class:!0},!1);var t=Object(r.h)(c);o=Object(r.i)(t,"DIV",{class:!0},!1);var re=Object(r.h)(o);a=Object(r.i)(re,"H1",{class:!0},!1);var oe=Object(r.h)(a);s=Object(r.j)(oe,"About"),oe.forEach(r.p),n=Object(r.j)(re,"\n        "),i=Object(r.i)(re,"DIV",{class:!0},!1);var ae=Object(r.h)(i);l=Object(r.i)(ae,"DIV",{class:!0},!1);var se=Object(r.h)(l);b=Object(r.i)(se,"P",{class:!0},!1);var ne=Object(r.h)(b);j=Object(r.j)(ne,"I started my career working primarily on "),h=Object(r.i)(ne,"SPAN",{class:!0},!1);var ie=Object(r.h)(h);d=Object(r.j)(ie,"native apps"),ie.forEach(r.p),O=Object(r.j)(ne," for Android, iOS, and Windows Phone but have focused on "),f=Object(r.i)(ne,"SPAN",{class:!0},!1);var le=Object(r.h)(f);m=Object(r.j)(le,"full-stack javascript"),le.forEach(r.p),u=Object(r.j)(ne," for the last two years."),ne.forEach(r.p),p=Object(r.j)(se,"\n                "),v=Object(r.i)(se,"P",{class:!0},!1);var be=Object(r.h)(v);g=Object(r.j)(be,"On the backend it's mainly been Node.js hosted on "),w=Object(r.i)(be,"SPAN",{class:!0},!1);var je=Object(r.h)(w);y=Object(r.j)(je,"AWS"),je.forEach(r.p),_=Object(r.j)(be," for any production apps.  The frontend is where it really gets fun with projects in "),x=Object(r.i)(be,"SPAN",{class:!0},!1);var he=Object(r.h)(x);z=Object(r.j)(he,"Angular"),he.forEach(r.p),k=Object(r.j)(be," and "),E=Object(r.i)(be,"SPAN",{class:!0},!1);var de=Object(r.h)(E);N=Object(r.j)(de,"React"),de.forEach(r.p),S=Object(r.j)(be,", and most recently "),I=Object(r.i)(be,"SPAN",{class:!0},!1);var Oe=Object(r.h)(I);A=Object(r.j)(Oe,"Svelte and Sapper"),Oe.forEach(r.p),B=Object(r.j)(be," (which powers this site)."),be.forEach(r.p),T=Object(r.j)(se,"\n                "),q=Object(r.i)(se,"P",{class:!0},!1);var fe=Object(r.h)(q);D=Object(r.j)(fe,"More of my energy is focused into "),V=Object(r.i)(fe,"SPAN",{class:!0},!1);var me=Object(r.h)(V);C=Object(r.j)(me,"open-source"),me.forEach(r.p),P=Object(r.j)(fe," projects these days, staying close to the community on "),M=Object(r.i)(fe,"SPAN",{class:!0},!1);var ue=Object(r.h)(M);R=Object(r.j)(ue,"Gitter"),ue.forEach(r.p),Y=Object(r.j)(fe," and starting a blog that will be released shortly!"),fe.forEach(r.p),F=Object(r.j)(se,"\n                "),$=Object(r.i)(se,"P",{class:!0},!1);var pe=Object(r.h)($);H=Object(r.j)(pe,"I build this site heavily influenced by "),L=Object(r.i)(pe,"SPAN",{class:!0},!1);var ve=Object(r.h)(L);W=Object(r.j)(ve,"Dinesh Pandiyan"),ve.forEach(r.p),U=Object(r.j)(pe,"'s personal site - what better way to get a solid comparison of React vs. Svelte than by recreating a real-world project! Take a look at "),X=Object(r.i)(pe,"A",{href:!0,target:!0,rel:!0,class:!0},!1);var ge=Object(r.h)(X);G=Object(r.j)(ge,"Dinesh's original project"),ge.forEach(r.p),J=Object(r.j)(pe," and the Svelte equivalent "),K=Object(r.i)(pe,"A",{href:!0,target:!0,rel:!0,class:!0},!1);var we=Object(r.h)(K);Z=Object(r.j)(we,"here"),we.forEach(r.p),Q=Object(r.j)(pe," and let me know what you think of the Svelte-ified code!"),pe.forEach(r.p),ee=Object(r.j)(se,"\n                "),te=Object(r.i)(se,"P",{class:!0},!1);var ye=Object(r.h)(te);ce=Object(r.j)(ye,"\\ (•◡•) /"),ye.forEach(r.p),se.forEach(r.p),ae.forEach(r.p),re.forEach(r.p),t.forEach(r.p),this.h()},h:function(){a.className="svelte-1qrsjhb",h.className="highlight svelte-1qrsjhb",f.className="highlight svelte-1qrsjhb",b.className="svelte-1qrsjhb",w.className="highlight svelte-1qrsjhb",x.className="highlight svelte-1qrsjhb",E.className="highlight svelte-1qrsjhb",I.className="highlight svelte-1qrsjhb",v.className="svelte-1qrsjhb",V.className="highlight svelte-1qrsjhb",M.className="highlight svelte-1qrsjhb",q.className="svelte-1qrsjhb",L.className="highlight svelte-1qrsjhb",X.href="https://github.com/flexdinesh/flexdinesh.github.io",X.target="_blank",X.rel="noopener noreferrer",X.className="svelte-1qrsjhb",K.href="https://github.com/tonyfsullivan/tonyfsullivan.github.io",K.target="_blank",K.rel="noopener noreferrer",K.className="svelte-1qrsjhb",$.className="svelte-1qrsjhb",te.className="text-emoji svelte-1qrsjhb",l.className="about-content svelte-1qrsjhb",i.className="about-wrapper svelte-1qrsjhb",o.className="content-grid svelte-1qrsjhb",c.className="about-page svelte-1qrsjhb"},m:function(e,t){Object(r.t)(c,e,t),Object(r.d)(o,c),Object(r.d)(a,o),Object(r.d)(s,a),Object(r.d)(n,o),Object(r.d)(i,o),Object(r.d)(l,i),Object(r.d)(b,l),Object(r.d)(j,b),Object(r.d)(h,b),Object(r.d)(d,h),Object(r.d)(O,b),Object(r.d)(f,b),Object(r.d)(m,f),Object(r.d)(u,b),Object(r.d)(p,l),Object(r.d)(v,l),Object(r.d)(g,v),Object(r.d)(w,v),Object(r.d)(y,w),Object(r.d)(_,v),Object(r.d)(x,v),Object(r.d)(z,x),Object(r.d)(k,v),Object(r.d)(E,v),Object(r.d)(N,E),Object(r.d)(S,v),Object(r.d)(I,v),Object(r.d)(A,I),Object(r.d)(B,v),Object(r.d)(T,l),Object(r.d)(q,l),Object(r.d)(D,q),Object(r.d)(V,q),Object(r.d)(C,V),Object(r.d)(P,q),Object(r.d)(M,q),Object(r.d)(R,M),Object(r.d)(Y,q),Object(r.d)(F,l),Object(r.d)($,l),Object(r.d)(H,$),Object(r.d)(L,$),Object(r.d)(W,L),Object(r.d)(U,$),Object(r.d)(X,$),Object(r.d)(G,X),Object(r.d)(J,$),Object(r.d)(K,$),Object(r.d)(Z,K),Object(r.d)(Q,$),Object(r.d)(ee,l),Object(r.d)(te,l),Object(r.d)(ce,te)},p:r.u,u:function(){Object(r.p)(c)},d:r.u}),e.target){var re=Object(r.h)(e.target);e.hydrate?this._fragment.l(re):this._fragment.c(),re.forEach(r.p),this._mount(e.target,e.anchor)}}Object(r.e)(a.prototype,r.w);var s=a,n=c(3);function i(e){var t,c,o,a,s,i,l,b,j,h,d,O,f,m,u,p,v,g;if(Object(r.s)(this,e),this._state=Object(r.e)({},e.data),document.getElementById("svelte-egdpwb-style")||((t=Object(r.l)("style")).id="svelte-egdpwb-style",t.textContent=".browser-notes.svelte-egdpwb{font-size:0.75rem}.browser-notes.svelte-egdpwb span.svelte-egdpwb{border-width:1px;border-style:solid;padding:0.125rem 0.5rem}",Object(r.d)(t,document.head)),e.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=(c=this,this._state,v=new n.a({root:c.root,slots:{default:Object(r.m)()},data:{except:!0,browsers:["firefox","chrome","mobile"]}}),g=new n.a({root:c.root,slots:{default:Object(r.m)()},data:{only:!0,browsers:["firefox"]}}),{c:function(){o=Object(r.l)("div"),a=Object(r.o)("\n        "),s=Object(r.l)("span"),i=Object(r.o)("All the magic tricks in this site work best in "),l=Object(r.l)("b"),b=Object(r.o)("Chrome!"),j=Object(r.o)("\n    "),v._fragment.c(),h=Object(r.o)("\n    "),d=Object(r.o)("\n        "),O=Object(r.l)("span"),f=Object(r.o)("Magic background is disabled in FireFox. Try in "),m=Object(r.l)("b"),u=Object(r.o)("Chrome!"),p=Object(r.o)("\n    "),g._fragment.c(),this.h()},l:function(e){o=Object(r.i)(e,"DIV",{class:!0},!1);var t=Object(r.h)(o);a=Object(r.j)(e,"\n        "),s=Object(r.i)(e,"SPAN",{class:!0},!1);var c=Object(r.h)(s);i=Object(r.j)(c,"All the magic tricks in this site work best in "),l=Object(r.i)(c,"B",{},!1);var n=Object(r.h)(l);b=Object(r.j)(n,"Chrome!"),n.forEach(r.p),c.forEach(r.p),j=Object(r.j)(e,"\n    "),v._fragment.l(t),h=Object(r.j)(t,"\n    "),d=Object(r.j)(e,"\n        "),O=Object(r.i)(e,"SPAN",{class:!0},!1);var w=Object(r.h)(O);f=Object(r.j)(w,"Magic background is disabled in FireFox. Try in "),m=Object(r.i)(w,"B",{},!1);var y=Object(r.h)(m);u=Object(r.j)(y,"Chrome!"),y.forEach(r.p),w.forEach(r.p),p=Object(r.j)(e,"\n    "),g._fragment.l(t),t.forEach(r.p),this.h()},h:function(){s.className="svelte-egdpwb",O.className="svelte-egdpwb",o.className="browser-notes svelte-egdpwb"},m:function(e,t){Object(r.t)(o,e,t),Object(r.d)(a,v._slotted.default),Object(r.d)(s,v._slotted.default),Object(r.d)(i,s),Object(r.d)(l,s),Object(r.d)(b,l),Object(r.d)(j,v._slotted.default),v._mount(o,null),Object(r.d)(h,o),Object(r.d)(d,g._slotted.default),Object(r.d)(O,g._slotted.default),Object(r.d)(f,O),Object(r.d)(m,O),Object(r.d)(u,m),Object(r.d)(p,g._slotted.default),g._mount(o,null)},p:function(e,t){var c={browsers:["firefox","chrome","mobile"]};v._set(c);var r={browsers:["firefox"]};g._set(r)},u:function(){Object(r.p)(o)},d:function(){v.destroy(!1),g.destroy(!1)}}),e.target){var w=Object(r.h)(e.target);e.hydrate?this._fragment.l(w):this._fragment.c(),w.forEach(r.p),this._mount(e.target,e.anchor),this._lock=!0,Object(r.g)(this._beforecreate),Object(r.g)(this._oncreate),Object(r.g)(this._aftercreate),this._lock=!1}}Object(r.e)(i.prototype,r.w);var l=i,b=c(2);var j={handleScroll(){this.set({isSticky:window.pageYOffset>this.refs.nav.offsetTop})},scrollToPage(e){const t=document.querySelector(e);Object(b.a)(t)},changeTheme(){this.store.changeTheme()}};function h(e){var t;if(Object(r.s)(this,e),this.refs={},this._state=Object(r.e)({isSticky:!1},e.data),document.getElementById("svelte-1kyrzzr-style")||((t=Object(r.l)("style")).id="svelte-1kyrzzr-style",t.textContent="nav.svelte-1kyrzzr{background-color:var(--nav-alpha);color:var(--color-primary);position:fixed;top:0;width:100%;height:3rem;display:flex;align-items:center;justify-content:flex-end}nav.sticky.svelte-1kyrzzr{background-color:var(--color-alternative)}.bounce-xy.svelte-1kyrzzr{animation:svelte-1kyrzzr-bounce-xy 2s infinite}.menu__item.svelte-1kyrzzr:hover{border-bottom:2px solid var(--color-primary)}.magic-wand.svelte-1kyrzzr{cursor:pointer;justify-self:flex-start;margin-left:1rem;display:flex;flex-direction:column;align-items:center}.magic-text.svelte-1kyrzzr{text-align:center;font-size:0.5rem;padding-top:0.25rem}.menu.svelte-1kyrzzr{margin-right:1rem;display:flex;flex:1;justify-content:flex-end}.menu__item.svelte-1kyrzzr{padding:0.25rem 0;margin:0 1rem;font-size:1.25rem;font-weight:400;border-bottom:2px solid transparent}.menu__item.svelte-1kyrzzr:hover{cursor:pointer}@media only screen and (max-width: 375px){nav.svelte-1kyrzzr{height:4rem}}@keyframes svelte-1kyrzzr-bounce-xy{0%,20%,50%,80%,100%{transform:translateY(0) translateX(0)}40%{transform:translateY(2px) translateX(2px)}60%{transform:translateY(1px) translateX(1px)}}",Object(r.d)(t,document.head)),this._fragment=function(e,t){var c,o,a,s,n,i,l,b,j,h,d;function O(t){e.handleScroll()}function f(t){e.changeTheme()}function m(t){e.scrollToPage(".about-page")}return window.addEventListener("scroll",O),{c:function(){c=Object(r.l)("nav"),o=Object(r.l)("div"),a=Object(r.l)("button"),s=Object(r.o)("\n        "),n=Object(r.l)("div"),i=Object(r.o)("Color Me"),l=Object(r.o)("  \n    "),b=Object(r.l)("div"),j=Object(r.l)("div"),h=Object(r.o)("About"),this.h()},l:function(e){c=Object(r.i)(e,"NAV",{class:!0},!1);var t=Object(r.h)(c);o=Object(r.i)(t,"DIV",{class:!0},!1);var d=Object(r.h)(o);a=Object(r.i)(d,"BUTTON",{class:!0,href:!0},!1),Object(r.h)(a).forEach(r.p),s=Object(r.j)(d,"\n        "),n=Object(r.i)(d,"DIV",{class:!0},!1);var O=Object(r.h)(n);i=Object(r.j)(O,"Color Me"),O.forEach(r.p),d.forEach(r.p),l=Object(r.j)(t,"  \n    "),b=Object(r.i)(t,"DIV",{class:!0},!1);var f=Object(r.h)(b);j=Object(r.i)(f,"DIV",{class:!0},!1);var m=Object(r.h)(j);h=Object(r.j)(m,"About"),m.forEach(r.p),f.forEach(r.p),t.forEach(r.p),this.h()},h:function(){a.className="fas fa-magic fa-lg",Object(r.A)(a,"href","#"),n.className="magic-text svelte-1kyrzzr",Object(r.c)(o,"click",f),o.className="magic-wand bounce-xy svelte-1kyrzzr",Object(r.c)(j,"click",m),j.className="menu__item active svelte-1kyrzzr",b.className="menu svelte-1kyrzzr",c.className=d=(t.isSticky?"sticky":"")+" svelte-1kyrzzr"},m:function(t,d){Object(r.t)(c,t,d),Object(r.d)(o,c),Object(r.d)(a,o),Object(r.d)(s,o),Object(r.d)(n,o),Object(r.d)(i,n),Object(r.d)(l,c),Object(r.d)(b,c),Object(r.d)(j,b),Object(r.d)(h,j),e.refs.nav=c},p:function(e,t){e.isSticky&&d!==(d=(t.isSticky?"sticky":"")+" svelte-1kyrzzr")&&(c.className=d)},u:function(){Object(r.p)(c)},d:function(){window.removeEventListener("scroll",O),Object(r.z)(o,"click",f),Object(r.z)(j,"click",m),e.refs.nav===c&&(e.refs.nav=null)}}}(this,this._state),e.target){var c=Object(r.h)(e.target);e.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(r.p),this._mount(e.target,e.anchor)}}Object(r.e)(h.prototype,r.w),Object(r.e)(h.prototype,j);var d=h;function O(e){var t,c,o,a,s,n,i,l,b,j,h,d,O,f,m;if(Object(r.s)(this,e),this._state=Object(r.e)({},e.data),document.getElementById("svelte-zg1dox-style")||((t=Object(r.l)("style")).id="svelte-zg1dox-style",t.textContent=".social-icons.svelte-zg1dox{padding:0.25rem 0;font-size:3rem}a.svelte-zg1dox{padding:0 0.625rem;color:var(--color-primary)}.devto.svelte-zg1dox svg.svelte-zg1dox{margin-bottom:-0.25rem;width:2.7rem;height:2.7rem}svg.svelte-zg1dox,svg.svelte-zg1dox path.svelte-zg1dox{fill:var(--color-primary)}.animate-icons.svelte-zg1dox a.svelte-zg1dox{display:inline-block;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.animate-icons.svelte-zg1dox a.svelte-zg1dox:hover,.animate-icons.svelte-zg1dox a.svelte-zg1dox:focus,.animate-icons.svelte-zg1dox a.svelte-zg1dox:active{animation-name:svelte-zg1dox-icon-wobble;animation-duration:0.75s;animation-timing-function:ease-in-out;animation-iteration-count:1}@media only screen and (max-width: 425px){.social-icons.svelte-zg1dox{font-size:2.5rem}.devto.svelte-zg1dox svg.svelte-zg1dox{margin-bottom:-0.225rem;width:2.25rem;height:2.25rem}}@keyframes svelte-zg1dox-icon-wobble{25%{transform:translateY(-8px)}50%{transform:translateY(0px)}75%{transform:translateY(-4px)}100%{transform:translateY(0px)}}",Object(r.d)(t,document.head)),this._fragment=(this._state,{c:function(){c=Object(r.l)("div"),o=Object(r.l)("a"),a=Object(r.l)("i"),s=Object(r.o)("\n    "),n=Object(r.l)("a"),i=Object(r.l)("i"),l=Object(r.o)("\n    "),b=Object(r.l)("a"),j=Object(r.l)("i"),h=Object(r.o)("\n    "),d=Object(r.l)("a"),O=Object(r.n)("svg"),f=Object(r.n)("path"),m=Object(r.n)("path"),this.h()},l:function(e){c=Object(r.i)(e,"DIV",{class:!0},!1);var t=Object(r.h)(c);o=Object(r.i)(t,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var u=Object(r.h)(o);a=Object(r.i)(u,"I",{class:!0},!1),Object(r.h)(a).forEach(r.p),s=Object(r.j)(u,"\n    "),n=Object(r.i)(u,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var p=Object(r.h)(n);i=Object(r.i)(p,"I",{class:!0},!1),Object(r.h)(i).forEach(r.p),p.forEach(r.p),l=Object(r.j)(u,"\n    "),b=Object(r.i)(u,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var v=Object(r.h)(b);j=Object(r.i)(v,"I",{class:!0},!1),Object(r.h)(j).forEach(r.p),v.forEach(r.p),h=Object(r.j)(u,"\n    "),d=Object(r.i)(u,"A",{class:!0,target:!0,rel:!0,href:!0},!1);var g=Object(r.h)(d);O=Object(r.i)(g,"svg",{viewBox:!0,class:!0},!0);var w=Object(r.h)(O);f=Object(r.i)(w,"path",{d:!0,class:!0},!0),Object(r.h)(f).forEach(r.p),m=Object(r.i)(w,"path",{d:!0,class:!0},!0),Object(r.h)(m).forEach(r.p),w.forEach(r.p),g.forEach(r.p),u.forEach(r.p),t.forEach(r.p),this.h()},h:function(){a.className="fab fa-github",i.className="fab fa-linkedin",n.target="_blank",n.rel="noopener noreferrer",n.href="https://www.linkedin.com/in/tony-sullivan",n.className="svelte-zg1dox",j.className="fab fa-medium",b.target="_blank",b.rel="noopener noreferrer",b.href="https://medium.com/@tony.sullivan",b.className="svelte-zg1dox",Object(r.A)(f,"d","M10.5 2.5C5.6 4.2 2.4 7.8 1 12.9.3 15.6.1 77.2.2 207.1.5 396.6.5 397.5 2.5 401c1.2 1.9 3.6 4.3 5.5 5.5 3.5 2 4.2 2 196 2s192.5 0 196-2c1.9-1.2 4.3-3.6 5.5-5.5 2-3.5 2-4.2 2-196s0-192.5-2-196c-1.2-1.9-3.6-4.3-5.5-5.5-3.5-2-4.4-2-194.5-2.2-162.9-.2-191.6 0-195 1.2zm96.8 124c9 1.9 15.5 5.6 22.2 12.6 6.1 6.4 9.9 13.7 11.5 21.9 1.3 6.9 1.3 81.1 0 88.1-3.4 18.2-18.9 32.4-38.1 34.9-4 .5-17.4 1-29.6 1H51V125h24.8c17.6 0 26.6.4 31.5 1.5zm130.7 13V154h-51v36h31v29h-31l.2 18.2.3 18.3 25.3.3 25.2.2v29h-29.5c-32.8 0-37.9-.6-43.1-5.2-7.3-6.4-6.9-2.3-7.2-72.6-.2-43.8.1-64.5.8-67.3 1.4-5.2 7.3-11.6 12.5-13.4 3.1-1.1 10.9-1.4 35.3-1.5H238v14.5zm48.9-12.3c.4 1.3 6.8 25.6 14.2 54 7.4 28.5 13.6 51.2 13.8 50.5.3-.7 6.6-24.8 14.1-53.7l13.7-52.5 15.6-.3c11.8-.2 15.7.1 15.7 1s-34.6 132.4-36.6 139c-1.4 4.6-8.9 14-13.1 16.5-5.3 3-13.1 3.5-17.9 1-4.3-2.2-10-8.8-12.9-15-1.8-3.8-31.2-112-38-140l-.7-2.7h15.6c15.3 0 15.7 0 16.5 2.2z"),Object(r.A)(f,"class","svelte-zg1dox"),Object(r.A)(m,"d","M80 205v51.2l10.3-.4c8.9-.3 10.8-.7 14.8-3 7.8-4.6 7.9-4.9 7.9-48.4 0-42.4 0-42.4-7.3-47.2-3.6-2.4-5.1-2.7-14.9-3.1l-10.8-.3V205z"),Object(r.A)(m,"class","svelte-zg1dox"),Object(r.A)(O,"viewBox","0 0 408 410"),Object(r.A)(O,"class","svelte-zg1dox"),d.className="devto svelte-zg1dox",d.target="_blank",d.rel="noopener noreferrer",d.href="https://dev.to/tonyfsullivan",o.target="_blank",o.rel="noopener noreferrer",o.href="https://github.com/tonyfsullivan",o.className="svelte-zg1dox",c.className="social-icons animate-icons svelte-zg1dox"},m:function(e,t){Object(r.t)(c,e,t),Object(r.d)(o,c),Object(r.d)(a,o),Object(r.d)(s,o),Object(r.d)(n,o),Object(r.d)(i,n),Object(r.d)(l,o),Object(r.d)(b,o),Object(r.d)(j,b),Object(r.d)(h,o),Object(r.d)(d,o),Object(r.d)(O,d),Object(r.d)(f,O),Object(r.d)(m,O)},p:r.u,u:function(){Object(r.p)(c)},d:r.u}),e.target){var u=Object(r.h)(e.target);e.hydrate?this._fragment.l(u):this._fragment.c(),u.forEach(r.p),this._mount(e.target,e.anchor)}}Object(r.e)(O.prototype,r.w);var f=O;var m={scrollToNext(){const{pageSelector:e}=this.get(),t=document.querySelector(e);Object(b.a)(t)}};function u(e){var t;if(Object(r.s)(this,e),this._state=Object(r.e)({pageSelector:""},e.data),document.getElementById("svelte-jjzzw6-style")||((t=Object(r.l)("style")).id="svelte-jjzzw6-style",t.textContent=".scroll-to-next.svelte-jjzzw6{cursor:pointer}.arrow.svelte-jjzzw6{color:var(--color-primary);text-align:center;margin:0 auto;padding-bottom:0.5rem}.scroll-text.svelte-jjzzw6{text-align:center;font-size:0.5rem;margin-bottom:-0.125rem}.bounce.svelte-jjzzw6{animation:svelte-jjzzw6-bounce 2s infinite}button.svelte-jjzzw6{background:none;border:none;color:var(--color-primary)}@keyframes svelte-jjzzw6-bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}",Object(r.d)(t,document.head)),this._fragment=function(e,t){var c,o,a,s,n,i;function l(t){e.scrollToNext()}return{c:function(){c=Object(r.l)("div"),o=Object(r.l)("div"),a=Object(r.l)("div"),s=Object(r.o)("Click Me"),n=Object(r.o)("\n        "),i=Object(r.l)("button"),this.h()},l:function(e){c=Object(r.i)(e,"DIV",{class:!0},!1);var t=Object(r.h)(c);o=Object(r.i)(t,"DIV",{class:!0},!1);var l=Object(r.h)(o);a=Object(r.i)(l,"DIV",{class:!0},!1);var b=Object(r.h)(a);s=Object(r.j)(b,"Click Me"),b.forEach(r.p),n=Object(r.j)(l,"\n        "),i=Object(r.i)(l,"BUTTON",{class:!0,href:!0},!1),Object(r.h)(i).forEach(r.p),l.forEach(r.p),t.forEach(r.p),this.h()},h:function(){a.className="scroll-text svelte-jjzzw6",i.className="fas fa-chevron-down fa-2x svelte-jjzzw6",Object(r.A)(i,"href","#"),o.className="arrow bounce svelte-jjzzw6",Object(r.c)(c,"click",l),c.className="scroll-to-next svelte-jjzzw6"},m:function(e,t){Object(r.t)(c,e,t),Object(r.d)(o,c),Object(r.d)(a,o),Object(r.d)(s,a),Object(r.d)(n,o),Object(r.d)(i,o)},p:r.u,u:function(){Object(r.p)(c)},d:function(){Object(r.z)(c,"click",l)}}}(this,this._state),e.target){var c=Object(r.h)(e.target);e.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(r.p),this._mount(e.target,e.anchor)}}Object(r.e)(u.prototype,r.w),Object(r.e)(u.prototype,m);var p=u;function v(e){var t,c,o,a,s,n,i,b,j,h,O,m,u,v,g,w,y,_;if(Object(r.s)(this,e),this._state=Object(r.e)({},e.data),document.getElementById("svelte-c1nlb8-style")||((t=Object(r.l)("style")).id="svelte-c1nlb8-style",t.textContent=".landing-page.svelte-c1nlb8{background-color:var(--color-alternate);min-height:100vh;display:flex;flex:0 1 auto;flex-direction:column;justify-content:center}main.svelte-c1nlb8{color:var(--color-primary);display:flex;flex:1 0 auto;flex-direction:column;justify-content:center;padding:3.25rem 1.5rem 1rem;text-align:center}.intro-wrapper.svelte-c1nlb8{flex:auto;display:flex;flex-direction:column;justify-content:center;text-align:center}.intro-name.svelte-c1nlb8{font-family:'Reem Kufi', sans-serif;font-size:4rem;font-weight:bold;line-height:4rem;padding-bottom:1rem}.tagline.svelte-c1nlb8{font-size:1.375rem;margin:1.5rem 0;font-weight:300}@media only screen and (max-width: 425px){main.svelte-c1nlb8{padding:4.25rem 1.5rem 1rem}.intro-name.svelte-c1nlb8{font-size:3rem;line-height:3.5rem}.tagline.svelte-c1nlb8{font-size:1.25rem}}",Object(r.d)(t,document.head)),e.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=(c=this,this._state,g=new d({root:c.root}),w=new l({root:c.root}),y=new f({root:c.root}),_=new p({root:c.root,data:{pageSelector:".about-page"}}),{c:function(){o=Object(r.l)("div"),g._fragment.c(),a=Object(r.o)("\n    "),s=Object(r.l)("main"),w._fragment.c(),n=Object(r.o)("\n        "),i=Object(r.l)("div"),b=Object(r.l)("div"),j=Object(r.o)("Hello, I'm Tony!"),h=Object(r.o)("\n            "),O=Object(r.l)("div"),m=Object(r.o)("Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja"),u=Object(r.o)("\n            "),y._fragment.c(),v=Object(r.o)("\n        "),_._fragment.c(),this.h()},l:function(e){o=Object(r.i)(e,"DIV",{class:!0},!1);var t=Object(r.h)(o);g._fragment.l(t),a=Object(r.j)(t,"\n    "),s=Object(r.i)(t,"MAIN",{class:!0},!1);var c=Object(r.h)(s);w._fragment.l(c),n=Object(r.j)(c,"\n        "),i=Object(r.i)(c,"DIV",{class:!0},!1);var l=Object(r.h)(i);b=Object(r.i)(l,"DIV",{class:!0},!1);var d=Object(r.h)(b);j=Object(r.j)(d,"Hello, I'm Tony!"),d.forEach(r.p),h=Object(r.j)(l,"\n            "),O=Object(r.i)(l,"DIV",{class:!0},!1);var f=Object(r.h)(O);m=Object(r.j)(f,"Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja"),f.forEach(r.p),u=Object(r.j)(l,"\n            "),y._fragment.l(l),l.forEach(r.p),v=Object(r.j)(c,"\n        "),_._fragment.l(c),c.forEach(r.p),t.forEach(r.p),this.h()},h:function(){b.className="intro-name svelte-c1nlb8",O.className="tagline svelte-c1nlb8",i.className="intro-wrapper svelte-c1nlb8",s.className="svelte-c1nlb8",o.className="landing-page svelte-c1nlb8"},m:function(e,t){Object(r.t)(o,e,t),g._mount(o,null),Object(r.d)(a,o),Object(r.d)(s,o),w._mount(s,null),Object(r.d)(n,s),Object(r.d)(i,s),Object(r.d)(b,i),Object(r.d)(j,b),Object(r.d)(h,i),Object(r.d)(O,i),Object(r.d)(m,O),Object(r.d)(u,i),y._mount(i,null),Object(r.d)(v,s),_._mount(s,null)},p:r.u,u:function(){Object(r.p)(o)},d:function(){g.destroy(!1),w.destroy(!1),y.destroy(!1),_.destroy(!1)}}),e.target){var x=Object(r.h)(e.target);e.hydrate?this._fragment.l(x):this._fragment.c(),x.forEach(r.p),this._mount(e.target,e.anchor),this._lock=!0,Object(r.g)(this._beforecreate),Object(r.g)(this._oncreate),Object(r.g)(this._aftercreate),this._lock=!1}}Object(r.e)(v.prototype,r.w);var g=v;function w(e){var t,c,a,n,i,l,b;if(Object(r.s)(this,e),this._state=Object(r.e)({},e.data),e.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=(t=this,this._state,i=new g({root:t.root}),l=new s({root:t.root}),b=new o.a({root:t.root,slots:{default:Object(r.m)()}}),{c:function(){c=Object(r.o)("\n\t"),i._fragment.c(),a=Object(r.o)("\n\t"),l._fragment.c(),n=Object(r.o)("\n"),b._fragment.c()},l:function(e){c=Object(r.j)(e,"\n\t"),i._fragment.l(e),a=Object(r.j)(e,"\n\t"),l._fragment.l(e),n=Object(r.j)(e,"\n"),b._fragment.l(e)},m:function(e,t){Object(r.d)(c,b._slotted.default),i._mount(b._slotted.default,null),Object(r.d)(a,b._slotted.default),l._mount(b._slotted.default,null),Object(r.d)(n,b._slotted.default),b._mount(e,t)},p:r.u,u:function(){b._unmount()},d:function(){i.destroy(!1),l.destroy(!1),b.destroy(!1)}}),e.target){var j=Object(r.h)(e.target);e.hydrate?this._fragment.l(j):this._fragment.c(),j.forEach(r.p),this._mount(e.target,e.anchor),this._lock=!0,Object(r.g)(this._beforecreate),Object(r.g)(this._oncreate),Object(r.g)(this._aftercreate),this._lock=!1}}Object(r.e)(w.prototype,r.w);t.default=w}]]);