window.mailgo=function(){var e={168:function(e){"use strict";e.exports=JSON.parse('["en","it","es","de","fr","pt","nl","ru","sv","no","dk","is","zh"]')},340:function(e){"use strict";e.exports=JSON.parse('{"en":{"open_in_":"open in ","cc_":"cc ","bcc_":"bcc ","subject_":"subject ","body_":"body ","gmail":"Gmail","outlook":"Outlook","yahoo":"Yahoo Mail","telegram":"Telegram","whatsapp":"WhatsApp","skype":"Skype","call":"call","open":"open","_default":" default","_as_default":" as default","copy":"copy","copied":"copied"},"it":{"open_in_":"apri con ","bcc_":"ccn ","subject_":"oggetto ","body_":"testo ","call":"chiama","open":"apri","_default":" ","_as_default":" ","copy":"copia","copied":"copiato"},"es":{"open_in_":"abrir con ","bcc_":"cco ","subject_":"asunto ","body_":"cuerpo ","call":"llamar","open":"abrir","_default":" predefinido","_as_default":" por defecto","copy":"copiar","copied":"copiado"},"de":{"open_in_":"Öffnen in ","subject_":"Betreff ","body_":"Nachricht ","call":"Anrufen","open":"Öffnen","_default":" mit Standard","_as_default":" mit Standard","copy":"kopieren","copied":"kopiert"},"pt":{"open_in_":"abrir com ","bcc_":"cco ","subject_":"assunto ","body_":"corpo ","call":"ligar","open":"abrir","_default":" padrão","_as_default":" por padrão","copy":"copiar","copied":"copiado"},"fr":{"open_in_":"Ouvrir dans ","bcc_":"cci ","subject_":"sujet ","body_":"contenu ","call":"Appeler","open":"Ouvrir","_default":" par défaut","_as_default":" par défaut","copy":"Copier","copied":"copié"},"nl":{"subject_":"onderwerp ","body_":"bericht ","call":"bellen","open":"openen","_default":" standaard","_as_default":" als standaard","copy":"kopiëren"},"ru":{"open_in_":"открыть в ","subject_":"тема ","body_":"тело ","call":"позвонить","open":"открыть","_default":" по умолчанию","_as_default":" по умолчанию","copy":"скопировать"},"sv":{"open_in_":"öppna i ","subject_":"ämne ","body_":"meddelandetext ","call":"ring","open":"öppna","_default":" förval","_as_default":" som förval","copy":"kopiera","copied":"kopierad"},"no":{"open_in_":"åpne i ","subject_":"emne ","call":"ringe","open":"åpne","_as_default":" som standard","copy":"kopiere","copied":"kopiert"},"dk":{"open_in_":"åpne i ","subject_":"emne ","call":"ringe op","open":"åben","_as_default":" som standard","copy":"kopi","copied":"kopieret"},"is":{"open_in_":"opið inn ","subject_":"viðfangsefni ","body_":"líkami ","call":"hringja","open":"opið","_default":" sjálfgefið","_as_default":" sem sjálfgefið","copy":"afrita","copied":"afritað"},"zh":{"open_in_":"開啟 ","cc_":"副本 ","bcc_":"密件副本 ","subject_":"主旨 ","body_":"內文 ","call":"通話","open":"開啟","_default":" 預設","_as_default":" 預設","copy":"複製","copied":"已複製"}}')},249:function(e,o,t){"use strict";t.r(o),t.d(o,{MAILTO:function(){return a},MAILGO:function(){return n},TEL:function(){return d},CALLTO:function(){return l},SMS:function(){return i},outlookDeepLink:function(){return r},NO_MAILGO:function(){return c},DESKTOP:function(){return m},MOBILE:function(){return s},MAILGO_MAIL:function(){return p},MAILGO_TEL:function(){return u},MAILGO_SMS:function(){return f},CLASSIC:function(){return v},LESS_SPAM:function(){return g},spanHTMLTag:function(){return b},aHTMLTag:function(){return y},pHTMLTag:function(){return h},defaultLang:function(){return k}});var a="mailto:",n="mailgo:",d="tel:",l="callto:",i="sms:",r="ms-outlook://",c="no-mailgo",m="desktop",s="mobile",p="mailgo",u="mailgo-tel",f="mailgo-sms",v="classic",g="less-spam",b="span",y="a",h="p",k="en"},43:function(e,o,t){"use strict";t.r(o),t.d(o,{userAgent:function(){return a}});var a=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"mobile":"desktop"}},12:function(e,o,t){"use strict";t.r(o),t.d(o,{validateEmail:function(){return a},validateEmails:function(){return n},validateTel:function(){return d},copyToClipboard:function(){return l},setFocusLoop:function(){return i},leaveLastLink:function(){return r},leaveFirstLink:function(){return c}});var a=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},n=function(e){return e.every(a)},d=function(e){return/^[+]{0,1}[\s0-9]{0,}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(e)},l=function(e){var o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o);var t=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);return o.select(),document.execCommand("copy"),document.body.removeChild(o),!!t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t),!0)},i=function(e){var o=e;o.querySelector(".m-modal-content a:last-of-type").addEventListener("keydown",r),o.querySelector(".m-modal-content a:first-of-type").addEventListener("keydown",c)},r=function(e){"Tab"===e.code&&!1===e.shiftKey&&(e.preventDefault(),e.target.closest("div").querySelector("a:first-of-type").focus())},c=function(e){"Tab"===e.code&&!0===e.shiftKey&&(e.preventDefault(),e.target.closest("div").querySelector("a:last-of-type").focus())}},91:function(e,o,t){var a=t(476)((function(e){return e[1]}));a.push([e.id,'.m-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:16.5px;z-index:10000}.m-modal p,.m-modal span,.m-modal strong,.m-modal a{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}.m-modal strong{font-weight:700}.m-modal .m-modal-back{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:#20232a;opacity:0.8}.m-modal .m-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:0.95;border-radius:20px;box-shadow:0 3px 20px rgba(32,35,42,0.5);color:#4a4a4a;display:flex;flex-direction:column;overflow:auto;padding:24px;transition:0.5s box-shadow}.m-modal .m-modal-content:hover,.m-modal .m-modal-content:focus,.m-modal .m-modal-content:active{opacity:1}.m-modal .m-modal-content .m-title{margin-bottom:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1.2em}.m-modal .m-modal-content .m-details{margin-bottom:10px}.m-modal .m-modal-content .m-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.m-modal .m-modal-content a{cursor:pointer;padding:10px;color:#4a4a4a;border-radius:20px;text-decoration:none}.m-modal .m-modal-content a.m-gmail{color:#c0372a}.m-modal .m-modal-content a.m-gmail:hover,.m-modal .m-modal-content a.m-gmail:focus,.m-modal .m-modal-content a.m-gmail:active{background-color:rgba(192,55,42,0.08);color:#c0372a}.m-modal .m-modal-content a.m-outlook{color:#0967aa}.m-modal .m-modal-content a.m-outlook:hover,.m-modal .m-modal-content a.m-outlook:focus,.m-modal .m-modal-content a.m-outlook:active{background-color:rgba(9,103,170,0.08);color:#0967aa}.m-modal .m-modal-content a.m-yahoo{color:#4a00a0}.m-modal .m-modal-content a.m-yahoo:hover,.m-modal .m-modal-content a.m-yahoo:focus,.m-modal .m-modal-content a.m-yahoo:active{background-color:rgba(74,0,160,0.08);color:#4a00a0}.m-modal .m-modal-content a.m-tg{color:#086da0}.m-modal .m-modal-content a.m-tg:hover,.m-modal .m-modal-content a.m-tg:focus,.m-modal .m-modal-content a.m-tg:active{background-color:rgba(8,109,160,0.08);color:#086da0}.m-modal .m-modal-content a.m-wa{color:#067466}.m-modal .m-modal-content a.m-wa:hover,.m-modal .m-modal-content a.m-wa:focus,.m-modal .m-modal-content a.m-wa:active{background-color:rgba(6,116,102,0.08);color:#067466}.m-modal .m-modal-content a.m-skype{color:#076d92}.m-modal .m-modal-content a.m-skype:hover,.m-modal .m-modal-content a.m-skype:focus,.m-modal .m-modal-content a.m-skype:active{background-color:rgba(7,109,146,0.08);color:#076d92}.m-modal .m-modal-content a.m-copy{padding:16px 10px;font-size:16px}.m-modal .m-modal-content a.m-default:hover,.m-modal .m-modal-content a.m-default:focus,.m-modal .m-modal-content a.m-default:active,.m-modal .m-modal-content a.m-copy:hover,.m-modal .m-modal-content a.m-copy:focus,.m-modal .m-modal-content a.m-copy:active{background-color:rgba(0,0,0,0.08);color:#4a4a4a}.m-modal .m-modal-content a.m-by{font-size:12px;margin-top:0.8rem;padding:5px;color:#4a4a4a}.m-modal .m-modal-content a.m-by:hover,.m-modal .m-modal-content a.m-by:focus,.m-modal .m-modal-content a.m-by:active{color:#3d3d3d}.m-modal .m-modal-content .w-500{font-weight:500}.m-modal.m-dark .m-modal-content{background-color:#20232a}.m-modal.m-dark .m-modal-content,.m-modal.m-dark .m-modal-content p,.m-modal.m-dark .m-modal-content p span,.m-modal.m-dark .m-modal-content strong{color:#fff}.m-modal.m-dark .m-modal-content a{color:#eaeaea}.m-modal.m-dark .m-modal-content a:not(.m-by):hover,.m-modal.m-dark .m-modal-content a:not(.m-by):focus,.m-modal.m-dark .m-modal-content a:not(.m-by):active{background-color:rgba(134,134,134,0.08);color:#eaeaea}.m-modal.m-dark .m-modal-content a.m-gmail{color:#e07d73}.m-modal.m-dark .m-modal-content a.m-gmail:hover,.m-modal.m-dark .m-modal-content a.m-gmail:focus,.m-modal.m-dark .m-modal-content a.m-gmail:active{background-color:rgba(224,125,115,0.08);color:#e07d73}.m-modal.m-dark .m-modal-content a.m-outlook{color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-outlook:hover,.m-modal.m-dark .m-modal-content a.m-outlook:focus,.m-modal.m-dark .m-modal-content a.m-outlook:active{background-color:rgba(76,156,215,0.08);color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-yahoo{color:#ac88d3}.m-modal.m-dark .m-modal-content a.m-yahoo:hover,.m-modal.m-dark .m-modal-content a.m-yahoo:focus,.m-modal.m-dark .m-modal-content a.m-yahoo:active{background-color:rgba(172,136,211,0.08);color:#ac88d3}.m-modal.m-dark .m-modal-content a.m-tg{color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-tg:hover,.m-modal.m-dark .m-modal-content a.m-tg:focus,.m-modal.m-dark .m-modal-content a.m-tg:active{background-color:rgba(76,171,219,0.08);color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-wa{color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-wa:hover,.m-modal.m-dark .m-modal-content a.m-wa:focus,.m-modal.m-dark .m-modal-content a.m-wa:active{background-color:rgba(76,210,192,0.08);color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-skype{color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-skype:hover,.m-modal.m-dark .m-modal-content a.m-skype:focus,.m-modal.m-dark .m-modal-content a.m-skype:active{background-color:rgba(76,199,244,0.08);color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-by:hover,.m-modal.m-dark .m-modal-content a.m-by:focus,.m-modal.m-dark .m-modal-content a.m-by:active{color:#fff}\n',""]),e.exports=a},476:function(e){"use strict";e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var t=e(o);return o[2]?"@media ".concat(o[2]," {").concat(t,"}"):t})).join("")},o.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(n[l]=!0)}for(var i=0;i<e.length;i++){var r=[].concat(e[i]);a&&n[r[0]]||(t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),o.push(r))}},o}},801:function(e,o,t){var a=t(91);e.exports="string"==typeof a?a:a.toString()},358:function(e,o,t){"use strict";function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){d(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function d(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}t.r(o);var l,i,r,c,m,s,p,u,f,v,g,b,y,h,k,_,C,w,L,x,A,E,O,S,j,I,M,T,R,N,U,P,D,z,H,B,G,F,q,K,J=t(249),W=J.MAILTO,Z=J.MAILGO,$=J.TEL,Y=J.CALLTO,Q=J.SMS,V=J.MAILGO_MAIL,X=J.MAILGO_TEL,ee=J.MAILGO_SMS,oe=J.CLASSIC,te=J.LESS_SPAM,ae=J.NO_MAILGO,ne=J.MOBILE,de=J.spanHTMLTag,le=J.aHTMLTag,ie=J.pHTMLTag,re=J.defaultLang,ce=t(12),me=ce.validateEmails,se=ce.validateTel,pe=ce.copyToClipboard,ue=ce.setFocusLoop,fe=t(168),ve=t(340),ge=t(43).userAgent,be=t(801).toString(),ye=re,he=ve[re],ke=new RegExp("[^0-9/]","gi"),_e=new RegExp("^0+","gi"),Ce=!1,we=!0,Le=!0,xe=!1,Ae=!0,Ee=!0,Oe=!0,Se=!0,je=!0,Ie=!0,Me=function(){var e,o;if(Ce=ge()===ne,(void 0===(null===(e=i)||void 0===e?void 0:e.desktop)||(Ae=i.desktop,Ce||Ae))&&(void 0===(null===(o=i)||void 0===o?void 0:o.mobile)||(Ee=i.mobile,!Ce||Ee))){var t=!!document.getElementById(V);if(we&&!t){var a,n;(c=Qe()).style.display="none",c.id=V,c.classList.add("m-modal"),c.setAttribute("role","dialog"),c.setAttribute("tabindex","-1"),c.setAttribute("aria-labelledby","m-title"),ro(),(null===(a=i)||void 0===a?void 0:a.dark)?to():ao();var d=Qe();d.className="m-modal-back",c.appendChild(d);var r=Qe();r.className="m-modal-content",c.appendChild(r),(w=Qe("strong")).id="m-title",w.className="m-title",r.appendChild(w);var s=Qe();s.id="m-details",s.className="m-details",(x=Qe(ie)).id="m-cc";var p=Qe(de);p.className="w-500",p.appendChild(Ve(l.cc_||he.cc_)),(j=Qe(de)).id="m-cc-value",x.appendChild(p),x.appendChild(j),s.appendChild(x),(A=Qe(ie)).id="m-bcc";var u=Qe(de);u.className="w-500",u.appendChild(Ve(l.bcc_||he.bcc_)),(I=Qe(de)).id="m-bcc-value",A.appendChild(u),A.appendChild(I),s.appendChild(A),(E=Qe(ie)).id="m-subject";var f=Qe(de);f.className="w-500",f.appendChild(Ve(l.subject_||he.subject_)),(M=Qe(de)).id="m-subject-value",E.appendChild(f),E.appendChild(M),s.appendChild(E),(O=Qe(ie)).id="m-body";var v=Qe(de);v.className="w-500",v.appendChild(Ve(l.body_||he.body_)),(T=Qe(de)).id="m-body-value",O.appendChild(v),O.appendChild(T),s.appendChild(O),r.appendChild(s),(U=Qe(le)).id="m-gmail",U.href="#mailgo-gmail",U.classList.add("m-open"),U.classList.add("m-gmail"),U.appendChild(Ve(l.open_in_||he.open_in_));var g=Qe(de);g.className="w-500",g.appendChild(Ve(l.gmail||he.gmail)),U.appendChild(g),io("gmail")&&r.appendChild(U),(P=Qe(le)).id="m-outlook",P.href="#mailgo-outlook",P.classList.add("m-open"),P.classList.add("m-outlook"),P.appendChild(Ve(l.open_in_||he.open_in_));var b=Qe(de);b.className="w-500",b.appendChild(Ve(l.outlook||he.outlook)),P.appendChild(b),io("outlook")&&r.appendChild(P),(D=Qe(le)).id="m-yahoo",D.href="#mailgo-yahoo",D.classList.add("m-open"),D.classList.add("m-yahoo"),D.appendChild(Ve(l.open_in_||he.open_in_));var y=Qe(de);y.className="w-500",y.appendChild(Ve(l.yahoo||he.yahoo)),D.appendChild(y),io("yahoo")&&r.appendChild(D),(z=Qe(le)).id="m-open",z.href="#mailgo-open",z.classList.add("m-open"),z.classList.add("m-default");var h=Qe(de);h.className="w-500",h.appendChild(Ve(l.open||he.open)),z.appendChild(h),z.appendChild(Ve(l._default||he._default)),r.appendChild(z),(q=Qe(le)).id="m-copy",q.href="#mailgo-copy",q.classList.add("m-copy"),q.classList.add("w-500"),q.appendChild(Ve(l.copy||he.copy)),r.appendChild(q),void 0!==(null===(n=i)||void 0===n?void 0:n.showFooter)&&(je=i.showFooter),je&&r.appendChild(Ye()),document.body.appendChild(c),d.addEventListener("click",Ze)}var k=!!document.getElementById(X);if(Le&&!k){var _,C;(m=Qe()).style.display="none",m.id=X,m.classList.add("m-modal"),m.setAttribute("role","dialog"),m.setAttribute("tabindex","-1"),m.setAttribute("aria-labelledby","m-tel-title"),(null===(_=i)||void 0===_?void 0:_.dark)?to():ao();var N=Qe();N.className="m-modal-back",m.appendChild(N);var J=Qe();J.className="m-modal-content",m.appendChild(J),(L=Qe("strong")).id="m-tel-title",L.className="m-title",J.appendChild(L);var W=Qe();W.id="m-tel-details",W.className="m-details",(S=Qe(ie)).id="m-msg";var Z=Qe(de);Z.className="w-500",Z.appendChild(Ve(l.body_||he.body_)),(R=Qe(de)).id="m-msg-value",S.appendChild(Z),S.appendChild(R),W.appendChild(S),J.appendChild(W),(H=Qe(le)).id="m-tg",H.href="#mailgo-telegram",H.classList.add("m-open"),H.classList.add("m-tg"),H.style.display="none",H.appendChild(Ve(l.open_in_||he.open_in_));var $=Qe(de);$.className="w-500",$.appendChild(Ve(l.telegram||he.telegram)),H.appendChild($),io("telegram")&&J.appendChild(H),(B=Qe(le)).id="m-wa",B.href="#mailgo-whatsapp",B.classList.add("m-open"),B.classList.add("m-wa"),B.appendChild(Ve(l.open_in_||he.open_in_));var Y=Qe(de);Y.className="w-500",Y.appendChild(Ve(l.whatsapp||he.whatsapp)),B.appendChild(Y),io("whatsapp")&&J.appendChild(B),(G=Qe(le)).id="m-skype",G.href="#mailgo-skype",G.classList.add("m-open"),G.classList.add("m-skype"),G.appendChild(Ve(l.open_in_||he.open_in_));var Q=Qe(de);Q.className="w-500",Q.appendChild(Ve(l.skype||he.skype)),G.appendChild(Q),io("skype")&&J.appendChild(G),(F=Qe(le)).id="m-call",F.href="#mailgo-open",F.classList.add("m-open"),F.classList.add("m-default");var ee=Qe(de);ee.className="w-500",ee.appendChild(Ve(l.call||he.call)),F.appendChild(ee),F.appendChild(Ve(l._as_default||he._as_default)),J.appendChild(F),(K=Qe(le)).id="m-tel-copy",K.href="#mailgo-copy",K.classList.add("m-copy"),K.classList.add("w-500"),K.appendChild(Ve(l.copy||he.copy)),J.appendChild(K),void 0!==(null===(C=i)||void 0===C?void 0:C.showFooter)&&(je=i.showFooter),je&&J.appendChild(Ye()),document.body.appendChild(m),N.addEventListener("click",Ze)}document.addEventListener("click",Te)}};function Te(e){if(!document.body.contains(c)||!document.body.contains(m))return!1;if($e())return!1;var o=e.composedPath&&e.composedPath()||no(e.target);return o&&o.forEach((function(o){if(o instanceof HTMLDocument||o instanceof Window)return!1;if(we||Le||xe){var t=Ke(o);if(t){var a,n=null===(a=r=t)||void 0===a?void 0:a.type;if(n&&(we&&n===V||Le&&n===X||xe&&n===ee))return e.preventDefault(),Re(o),!0}}})),!1}function Re(e){var o,t,a,n,d=null===(o=r)||void 0===o?void 0:o.type,l=null===(t=r)||void 0===t?void 0:t.installation;if(!d)return!1;if("string"==typeof e?p=e:(p=e.getAttribute("href"),n=e),d===V){var c;if(l===oe){qe(p,W)?f=decodeURIComponent(p.split("?")[0].split(W)[1].trim()):qe(p,Z)&&(f=decodeURIComponent(p.split("?")[0].split(Z)[1].trim()));try{var m=(s=new URL(p)).searchParams;v=m.get("cc"),g=m.get("bcc"),b=m.get("subject"),y=m.get("body")}catch(e){}}else if(l===te){f=n.getAttribute("data-address")&&n.getAttribute("data-domain")?n.getAttribute("data-address")+"@"+n.getAttribute("data-domain"):null;try{s=new URL(W+encodeURIComponent(f))}catch(e){}var w=[];(v=n.getAttribute("data-cc-address")?n.getAttribute("data-cc-address")+"@"+n.getAttribute("data-cc-domain"):null)&&w.push("cc="+v),(g=n.getAttribute("data-bcc-address")?n.getAttribute("data-bcc-address")+"@"+n.getAttribute("data-bcc-domain"):null)&&w.push("bcc="+g),(b=n.getAttribute("data-subject"))&&w.push("subject="+b),(y=n.getAttribute("data-body"))&&w.push("body="+y),u=lo(W+encodeURIComponent(f),w)}if(void 0!==(null===(c=i)||void 0===c?void 0:c.validateEmail)&&(Oe=i.validateEmail),Oe){if(!me(f.split(",")))return!1;v&&!me(v.split(","))&&(v=""),g&&!me(g.split(","))&&(g="")}}else if(d===X){var L;if(l===oe){qe(p,$)?h=decodeURIComponent(p.split("?")[0].split($)[1].trim()):qe(p,Y)?h=decodeURIComponent(p.split("?")[0].split(Y)[1].trim()):qe(p,Q)&&(h=decodeURIComponent(p.split("?")[0].split(Q)[1].trim()));try{var x=(s=new URL(p)).searchParams;k=x.get("body")}catch(e){}}else if(l==te){h=n.getAttribute("data-tel"),k=n.getAttribute("data-msg");try{s=new URL($+encodeURIComponent(h))}catch(e){}var A=[];k&&A.push("body="+k),u=lo($+encodeURIComponent(h),A)}if(void 0!==(null===(L=i)||void 0===L?void 0:L.validateTel)&&(Se=i.validateTel),Se&&!se(h))return;_=n&&n.hasAttribute("data-telegram")?n.getAttribute("data-telegram"):null,C=n&&n.hasAttribute("data-skype")?n.getAttribute("data-skype"):null}return n&&!(null===(a=i)||void 0===a?void 0:a.dark)&&(n.classList.contains("dark")?to():ao()),Ne(),!0}function Ne(){var e,o=null===(e=r)||void 0===e?void 0:e.type;return!!o&&(o===V?(w.innerHTML=f.split(",").join("<br/>"),v?(x.style.display="block",j.innerHTML=v.split(",").join("<br/>")):x.style.display="none",g?(A.style.display="block",I.innerHTML=g.split(",").join("<br/>")):A.style.display="none",b?(E.style.display="block",M.textContent=b):E.style.display="none",y?(O.style.display="block",T.textContent=y):O.style.display="none",U.addEventListener("click",Ue),P.addEventListener("click",Pe),D.addEventListener("click",De),z.addEventListener("click",Ge),q.addEventListener("click",Fe)):o===X&&(L.innerHTML=h,k?(S.style.display="block",R.textContent=k):S.style.display="none",B.addEventListener("click",Be),_?(document.getElementById("m-tg").style.display="block",H.addEventListener("click",ze)):document.getElementById("m-tg").style.display="none",G.addEventListener("click",He),F.addEventListener("click",Ge),K.addEventListener("click",Fe)),We(o),document.addEventListener("keydown",Je),!0)}var Ue=function(e){var o,t;e.preventDefault();var a=null===(o=r)||void 0===o?void 0:o.installation;if(a===oe)try{t=s.toString()}catch(e){t=p}else a===te&&(t=u);var n="https://mail.google.com/mail/?extsrc=mailto&url="+encodeURIComponent(t);window.open(n,"_blank","noopener, noreferrer"),Ze()},Pe=function(e){e.preventDefault();var o="https://outlook.live.com/owa/?path=/mail/action/compose&to="+encodeURIComponent(f);b&&(o=o.concat("&subject="+encodeURIComponent(b))),y&&(o=o.concat("&body="+encodeURIComponent(y))),window.open(o,"_blank","noopener, noreferrer"),Ze()},De=function(e){e.preventDefault();var o="https://compose.mail.yahoo.com/?to="+f;b&&(o=o.concat("&subject="+encodeURIComponent(b))),y&&(o=o.concat("&body="+encodeURIComponent(y))),window.open(o,"_blank","noopener, noreferrer"),Ze()},ze=function(e){if(e.preventDefault(),_){var o="https://t.me/"+encodeURIComponent(_);window.open(o,"_blank","noopener, noreferrer"),Ze()}},He=function(e){e.preventDefault();var o="skype:"+encodeURIComponent(C||h);window.open(o,"_blank","noopener, noreferrer"),Ze()},Be=function(e){e.preventDefault();var o=h.replace(ke,"").replace(_e,""),t="https://wa.me/"+encodeURIComponent(o);k&&(t=t.concat("?text="+encodeURIComponent(k))),window.open(t,"_blank","noopener, noreferrer"),Ze()},Ge=function(e){var o;e.preventDefault();var t=null===(o=r)||void 0===o?void 0:o.installation;t===oe?window.location.href=p:t===te&&(window.location.href=u),Ze()},Fe=function(e){var o,t;(e.preventDefault(),$e())&&((null===(o=r)||void 0===o?void 0:o.type)===V?(pe(f),t=q):(pe(h),t=K),t.textContent=l.copied||he.copied,setTimeout((function(){t.textContent=l.copy||he.copy,Ze()}),999))},qe=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W,t=new RegExp("^"+o+"((.)+)","gi");return t.test(e)};function Ke(e){var o,t,a,n=e.getAttribute("href");if(null===(o=e.classList)||void 0===o?void 0:o.contains(ae))return null;if(n||(null===(t=e.classList)||void 0===t?void 0:t.contains("mailgo"))){if(qe(n,W)||qe(n,Z))return{type:V,installation:oe};if(qe(n,$)||qe(n,Y))return{type:X,installation:oe};if(qe(n,Q))return{type:ee,installation:oe}}if("#mailgo"===n||(null===(a=e.classList)||void 0===a?void 0:a.contains("mailgo"))){if(e.hasAttribute("data-address")&&e.hasAttribute("data-domain"))return{type:V,installation:te};if(e.hasAttribute("data-tel"))return{type:X,installation:te};if(e.hasAttribute("data-msg"))return{type:ee,installation:te}}return null}var Je=function(e){if($e()){var o,t=null===(o=r)||void 0===o?void 0:o.type;if(t===V)switch(e.keyCode){case 27:return Ze(),!0;case 71:return Ue(),!0;case 79:return Pe(),!0;case 89:return De(),!0;case 32:case 13:return Ge(),!0;case 67:return Fe(),!0;default:return!1}else if(t===X)switch(e.keyCode){case 27:return Ze(),!0;case 84:return ze(),!0;case 87:return Be(),!0;case 83:return He(),!0;case 32:case 13:return Ge(),!0;case 67:return Fe(),!0;default:return!1}}return!1},We=function(e){oo(e,"flex")},Ze=function(){oo(V,"none"),oo(X,"none"),document.removeEventListener("keydown",Je)},$e=function(){return"flex"===eo(V)||"flex"===eo(X)},Ye=function(){var e=Qe(le);return e.href="https://mailgo.dev?ref=mailgo-modal",e.className="m-by",e.target="_blank",e.rel="noopener noreferrer",e.appendChild(Ve("mailgo.dev")),e},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(e)},Ve=function(e){return document.createTextNode(e)},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return e===X?m:c},eo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return Xe(e).style.display},oo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,o=arguments.length>1?arguments[1]:void 0,t=Xe(e);t.style.display=o,"flex"===o?(N=document.activeElement,t.setAttribute("aria-hidden","false"),t.setAttribute("tabindex","0"),t.focus(),ue(t)):(t.setAttribute("aria-hidden","true"),t.setAttribute("tabindex","-1"),N.focus())},to=function(){var e,o=null===(e=r)||void 0===e?void 0:e.type;o&&Xe(o).classList.add("m-dark")},ao=function(){var e,o=null===(e=r)||void 0===e?void 0:e.type;o&&Xe(o).classList.remove("m-dark")},no=function(e){for(var o=[];e;){if(o.push(e),"HTML"===e.tagName)return o.push(document),o.push(window),o;e=e.parentElement}},lo=function(e,o){if(u=e,o&&o.length>0){var t=o.join("&");u=u.concat("?"+t)}return u},io=function(e){var o,t;return!i||(!(!i||(null===(o=i)||void 0===o?void 0:o.actions))||(!i||!i.actions||!1!==(null===(t=i)||void 0===t?void 0:t.actions[e])))},ro=function(){var e,o="default lang";if((null===(e=i)||void 0===e?void 0:e.lang)&&-1!==fe.indexOf(i.lang))ye=i.lang,o="config lang";else{var t=document.documentElement.lang;fe.forEach((function(e){new RegExp("^"+e,"gi").test(t)&&(ye=e,o="html lang")}))}return l=ve[ye],o};function co(e){try{var o;if(i=n(n({},e),(null===(o=window)||void 0===o?void 0:o.mailgoConfig)||null),"undefined"!=typeof window){var t,a,d,l,r,c;if(void 0!==(null===(t=i)||void 0===t?void 0:t.loadCSS)&&(Ie=i.loadCSS),void 0!==(null===(a=i)||void 0===a?void 0:a.mailto)&&(we=i.mailto),void 0!==(null===(d=i)||void 0===d?void 0:d.tel)&&(Le=i.tel),void 0!==(null===(l=i)||void 0===l?void 0:l.sms)&&(xe=i.sms),Ie&&function(){if(!document.getElementById("mailgo-style")){var e=Qe("style");e.id="mailgo-style",e.type="text/css",e.appendChild(Ve(be)),document.head.appendChild(e)}}(),null===(r=i)||void 0===r?void 0:r.initEvent)(null===(c=i)||void 0===c?void 0:c.listenerOptions)?document.addEventListener(i.initEvent,Me,i.listenerOptions):document.addEventListener(i.initEvent,Me);else Me();return!0}}catch(e){}return!1}"undefined"!=typeof window&&(window.getMailgoTypeByElement=Ke,window.mailgoClickListener=Te,window.mailgoCheckRender=Te,window.mailgoPreRender=Re,window.mailgoDirectRender=function(e){return co(),qe(e,W)||qe(e,Z)?(r={type:V,installation:oe},Re(e),!0):!!(qe(e,$)||qe(e,Y)||qe(e,Q))&&(r={type:X,installation:oe},Re(e),!0)},window.mailgoRender=Ne,window.mailgo=co);co({initEvent:"DOMContentLoaded"})}},o={};function t(a){if(o[a])return o[a].exports;var n=o[a]={id:a,exports:{}};return e[a](n,n.exports,t),n.exports}return t.d=function(e,o){for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(358)}();
//# sourceMappingURL=mailgo.js.map