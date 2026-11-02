/* Zweisprachigkeit DE/EN: Texte werden beim Laden aus assets/i18n-en.js ersetzt. */
(function(){
var L="";try{L=localStorage.getItem("pgn-lang")||""}catch(e){}
if(L!=="de"&&L!=="en")L=((navigator.language||"de").toLowerCase().indexOf("de")===0)?"de":"en";
var EN=window.I18N_EN||{};
window.LANG=L;window.LOC=L==="en"?"en-US":"de-DE";
window.t=function(s){return L==="en"&&EN[s]!==undefined?EN[s]:s};
var INL={B:1,I:1,EM:1,STRONG:1,CODE:1,A:1,SMALL:1,SPAN:1,BR:1,SUP:1,SUB:1,U:1,MARK:1,TSPAN:1};
function key(s){return s.replace(/\s+/g," ").trim()}
function inlineOnly(e){var c=e.firstElementChild;for(;c;c=c.nextElementSibling){if(!INL[c.tagName.toUpperCase()]||!inlineOnly(c))return false}return true}
function hasText(e){for(var n=e.firstChild;n;n=n.nextSibling)if(n.nodeType===3&&/\S/.test(n.nodeValue))return true;return false}
function walk(e,fb,ft){
 var tag=e.tagName.toUpperCase();if(tag==="SCRIPT"||tag==="STYLE"||tag==="NOSCRIPT"||tag==="HEAD")return;
 var ht=hasText(e);
 if(ht&&inlineOnly(e)){fb(e);return}
 for(var n=e.firstChild;n;n=n.nextSibling){
  if(n.nodeType===1)walk(n,fb,ft);else if(n.nodeType===3&&ht&&/\S/.test(n.nodeValue))ft(n)}
}
var ATTR=["aria-label","alt","title"];
function attrs(fn){var q=document.body.querySelectorAll("[aria-label],[alt],[title]");for(var i=0;i<q.length;i++)ATTR.forEach(function(a){if(q[i].hasAttribute(a))fn(q[i],a)})}
window.i18nKeys=function(){var o=[];walk(document.body,function(e){o.push(key(e.innerHTML))},function(n){o.push(key(n.nodeValue))});
 var a=[];attrs(function(e,at){a.push(key(e.getAttribute(at)))});
 var m=document.querySelector('meta[name="description"]');return{blocks:o,attrs:a,title:document.title,desc:m?m.content:""}};
if(location.hash==="#i18nkeys")window.__K=window.i18nKeys();
document.documentElement.lang=L;
if(L==="en"){
 walk(document.body,function(e){var k=key(e.innerHTML);if(EN[k]!==undefined)e.innerHTML=EN[k]},
  function(n){var k=key(n.nodeValue);if(EN[k]!==undefined){var v=n.nodeValue;n.nodeValue=v.replace(/\S[\s\S]*\S|\S/,EN[k])}});
 attrs(function(e,a){var k=key(e.getAttribute(a));if(EN[k]!==undefined)e.setAttribute(a,EN[k])});
 var T=EN[key(document.title)];if(T)document.title=T;var m=document.querySelector('meta[name="description"]');if(m){var D2=EN[key(m.content)];if(D2)m.content=D2}
}
var bd=document.getElementById("lang-de"),be=document.getElementById("lang-en");
function sw(l){return function(){try{localStorage.setItem("pgn-lang",l)}catch(e){}location.reload()}}
if(bd){bd.setAttribute("aria-pressed",L==="de");bd.onclick=sw("de")}
if(be){be.setAttribute("aria-pressed",L==="en");be.onclick=sw("en")}
})();
