(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const je=!1;var Pt=Array.isArray,ls=Array.from,ns=Object.defineProperty,B=Object.getOwnPropertyDescriptor,rs=Object.getOwnPropertyDescriptors,is=Object.prototype,as=Array.prototype,ge=Object.getPrototypeOf;function ut(t){return typeof t=="function"}const et=()=>{};function cs(t){return t()}function wt(t){for(var e=0;e<t.length;e++)t[e]()}const L=2,me=4,_t=8,Ht=16,R=32,ht=64,Yt=128,z=256,Et=512,D=1024,V=2048,rt=4096,nt=8192,it=16384,os=32768,Tt=65536,us=1<<17,fs=1<<19,ye=1<<20,K=Symbol("$state"),be=Symbol("legacy props");function we(t){return t===this.v}function Ee(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function $t(t){return!Ee(t,this.v)}function vs(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ps(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ds(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _s(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hs(t){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ks(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function js(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function gs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ms(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ys(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let at=!1;function bs(){at=!0}function F(t){return{f:0,v:t,reactions:null,equals:we,version:0}}function xe(t,e=!1){var l;const s=F(t);return e||(s.equals=$t),at&&g!==null&&g.l!==null&&((l=g.l).s??(l.s=[])).push(s),s}function Ct(t,e=!1){return ws(xe(t,e))}function ws(t){return y!==null&&y.f&L&&(M===null?Ws([t]):M.push(t)),t}function x(t,e){return y!==null&&Jt()&&y.f&(L|Ht)&&(M===null||!M.includes(t))&&ys(),Es(t,e)}function Es(t,e){return t.equals(e)||(t.v=e,t.version=Ge(),Se(t,V),Jt()&&j!==null&&j.f&D&&!(j.f&R)&&(O!==null&&O.includes(t)?(I(j,V),Rt(j)):U===null?Xs([t]):U.push(t))),e}function Se(t,e){var s=t.reactions;if(s!==null)for(var l=Jt(),n=s.length,r=0;r<n;r++){var a=s[r],o=a.f;o&V||!l&&a===j||(I(a,e),o&(D|z)&&(o&L?Se(a,rt):Rt(a)))}}const xs=1,Ss=2,As=4,Os=8,Ds=16,Ps=1,Ts=2,P=Symbol();function Q(t,e=null,s){if(typeof t!="object"||t===null||K in t)return t;const l=ge(t);if(l!==is&&l!==as)return t;var n=new Map,r=Pt(t),a=F(0);r&&n.set("length",F(t.length));var o;return new Proxy(t,{defineProperty(c,i,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&js();var u=n.get(i);return u===void 0?(u=F(f.value),n.set(i,u)):x(u,Q(f.value,o)),!0},deleteProperty(c,i){var f=n.get(i);if(f===void 0)i in c&&n.set(i,F(P));else{if(r&&typeof i=="string"){var u=n.get("length"),v=Number(i);Number.isInteger(v)&&v<u.v&&x(u,v)}x(f,P),se(a)}return!0},get(c,i,f){var k;if(i===K)return t;var u=n.get(i),v=i in c;if(u===void 0&&(!v||(k=B(c,i))!=null&&k.writable)&&(u=F(Q(v?c[i]:P,o)),n.set(i,u)),u!==void 0){var d=E(u);return d===P?void 0:d}return Reflect.get(c,i,f)},getOwnPropertyDescriptor(c,i){var f=Reflect.getOwnPropertyDescriptor(c,i);if(f&&"value"in f){var u=n.get(i);u&&(f.value=E(u))}else if(f===void 0){var v=n.get(i),d=v==null?void 0:v.v;if(v!==void 0&&d!==P)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(c,i){var d;if(i===K)return!0;var f=n.get(i),u=f!==void 0&&f.v!==P||Reflect.has(c,i);if(f!==void 0||j!==null&&(!u||(d=B(c,i))!=null&&d.writable)){f===void 0&&(f=F(u?Q(c[i],o):P),n.set(i,f));var v=E(f);if(v===P)return!1}return u},set(c,i,f,u){var T;var v=n.get(i),d=i in c;if(r&&i==="length")for(var k=f;k<v.v;k+=1){var b=n.get(k+"");b!==void 0?x(b,P):k in c&&(b=F(P),n.set(k+"",b))}v===void 0?(!d||(T=B(c,i))!=null&&T.writable)&&(v=F(void 0),x(v,Q(f,o)),n.set(i,v)):(d=v.v!==P,x(v,Q(f,o)));var S=Reflect.getOwnPropertyDescriptor(c,i);if(S!=null&&S.set&&S.set.call(u,f),!d){if(r&&typeof i=="string"){var C=n.get("length"),q=Number(i);Number.isInteger(q)&&q>=C.v&&x(C,q+1)}se(a)}return!0},ownKeys(c){E(a);var i=Reflect.ownKeys(c).filter(v=>{var d=n.get(v);return d===void 0||d.v!==P});for(var[f,u]of n)u.v!==P&&!(f in c)&&i.push(f);return i},setPrototypeOf(){gs()}})}function se(t,e=1){x(t,t.v+e)}var le,Ae,Oe;function Ns(){if(le===void 0){le=window;var t=Element.prototype,e=Node.prototype;Ae=B(e,"firstChild").get,Oe=B(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function De(t=""){return document.createTextNode(t)}function xt(t){return Ae.call(t)}function Kt(t){return Oe.call(t)}function Ls(t,e){return xt(t)}function mt(t,e){{var s=xt(t);return s instanceof Comment&&s.data===""?Kt(s):s}}function Rs(t,e=1,s=!1){let l=t;for(;e--;)l=Kt(l);return l}function St(t){var e=L|V;j===null?e|=z:j.f|=ye;var s=y!==null&&y.f&L?y:null;const l={children:null,ctx:g,deps:null,equals:we,f:e,fn:t,reactions:null,v:null,version:0,parent:s??j};return s!==null&&(s.children??(s.children=[])).push(l),l}function Is(t){const e=St(t);return e.equals=$t,e}function Pe(t){var e=t.children;if(e!==null){t.children=null;for(var s=0;s<e.length;s+=1){var l=e[s];l.f&L?Wt(l):X(l)}}}function Cs(t){for(var e=t.parent;e!==null;){if(!(e.f&L))return e;e=e.parent}return null}function Te(t){var e,s=j;Y(Cs(t));try{Pe(t),e=He(t)}finally{Y(s)}return e}function Ne(t){var e=Te(t),s=(tt||t.f&z)&&t.deps!==null?rt:D;I(t,s),t.equals(e)||(t.v=e,t.version=Ge())}function Wt(t){Pe(t),dt(t,0),I(t,it),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Le(t){j===null&&y===null&&ds(),y!==null&&y.f&z&&ps(),Zt&&vs()}function qs(t,e){var s=e.last;s===null?e.last=e.first=t:(s.next=t,t.prev=s,e.last=t)}function ct(t,e,s,l=!0){var n=(t&ht)!==0,r=j,a={ctx:g,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|V,first:null,fn:e,last:null,next:null,parent:n?null:r,prev:null,teardown:null,transitions:null,version:0};if(s){var o=st;try{re(!0),kt(a),a.f|=os}catch(f){throw X(a),f}finally{re(o)}}else e!==null&&Rt(a);var c=s&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&ye)===0;if(!c&&!n&&l&&(r!==null&&qs(a,r),y!==null&&y.f&L)){var i=y;(i.children??(i.children=[])).push(a)}return a}function Fs(t){const e=ct(_t,null,!1);return I(e,D),e.teardown=t,e}function Bt(t){Le();var e=j!==null&&(j.f&R)!==0&&g!==null&&!g.m;if(e){var s=g;(s.e??(s.e=[])).push({fn:t,effect:j,reaction:y})}else{var l=Xt(t);return l}}function Ms(t){return Le(),zt(t)}function Ys(t){const e=ct(ht,t,!0);return(s={})=>new Promise(l=>{s.outro?Ot(e,()=>{X(e),l(void 0)}):(X(e),l(void 0))})}function Xt(t){return ct(me,t,!1)}function Bs(t,e){var s=g,l={effect:null,ran:!1};s.l.r1.push(l),l.effect=zt(()=>{t(),!l.ran&&(l.ran=!0,x(s.l.r2,!0),H(e))})}function Us(){var t=g;zt(()=>{if(E(t.l.r2)){for(var e of t.l.r1){var s=e.effect;s.f&D&&I(s,rt),ot(s)&&kt(s),e.ran=!1}t.l.r2.v=!1}})}function zt(t){return ct(_t,t,!0)}function Re(t,e=0){return ct(_t|Ht|e,t,!0)}function At(t,e=!0){return ct(_t|R,t,!0,e)}function Ie(t){var e=t.teardown;if(e!==null){const s=Zt,l=y;ie(!0),G(null);try{e.call(null)}finally{ie(s),G(l)}}}function Ce(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var s=0;s<e.length;s+=1)Wt(e[s])}}function qe(t,e=!1){var s=t.first;for(t.first=t.last=null;s!==null;){var l=s.next;X(s,e),s=l}}function Vs(t){for(var e=t.first;e!==null;){var s=e.next;e.f&R||X(e),e=s}}function X(t,e=!0){var s=!1;if((e||t.f&fs)&&t.nodes_start!==null){for(var l=t.nodes_start,n=t.nodes_end;l!==null;){var r=l===n?null:Kt(l);l.remove(),l=r}s=!0}qe(t,e&&!s),Ce(t),dt(t,0),I(t,it);var a=t.transitions;if(a!==null)for(const c of a)c.stop();Ie(t);var o=t.parent;o!==null&&o.first!==null&&Fe(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Fe(t){var e=t.parent,s=t.prev,l=t.next;s!==null&&(s.next=l),l!==null&&(l.prev=s),e!==null&&(e.first===t&&(e.first=l),e.last===t&&(e.last=s))}function Ot(t,e){var s=[];Me(t,s,!0),Gs(s,()=>{X(t),e&&e()})}function Gs(t,e){var s=t.length;if(s>0){var l=()=>--s||e();for(var n of t)n.out(l)}else e()}function Me(t,e,s){if(!(t.f&nt)){if(t.f^=nt,t.transitions!==null)for(const a of t.transitions)(a.is_global||s)&&e.push(a);for(var l=t.first;l!==null;){var n=l.next,r=(l.f&Tt)!==0||(l.f&R)!==0;Me(l,e,r?s:!1),l=n}}}function ne(t){Ye(t,!0)}function Ye(t,e){if(t.f&nt){ot(t)&&kt(t),t.f^=nt;for(var s=t.first;s!==null;){var l=s.next,n=(s.f&Tt)!==0||(s.f&R)!==0;Ye(s,n?e:!1),s=l}if(t.transitions!==null)for(const r of t.transitions)(r.is_global||e)&&r.in()}}let Dt=!1,Ut=[];function Be(){Dt=!1;const t=Ut.slice();Ut=[],wt(t)}function Hs(t){Dt||(Dt=!0,queueMicrotask(Be)),Ut.push(t)}function $s(){Dt&&Be()}function Nt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Ue=0,Ks=1;let yt=!1,bt=Ue,vt=!1,pt=null,st=!1,Zt=!1;function re(t){st=t}function ie(t){Zt=t}let $=[],lt=0;let y=null;function G(t){y=t}let j=null;function Y(t){j=t}let M=null;function Ws(t){M=t}let O=null,N=0,U=null;function Xs(t){U=t}let Ve=0,tt=!1,g=null;function Ge(){return++Ve}function Jt(){return!at||g!==null&&g.l===null}function ot(t){var a,o;var e=t.f;if(e&V)return!0;if(e&rt){var s=t.deps,l=(e&z)!==0;if(s!==null){var n;if(e&Et){for(n=0;n<s.length;n++)((a=s[n]).reactions??(a.reactions=[])).push(t);t.f^=Et}for(n=0;n<s.length;n++){var r=s[n];if(ot(r)&&Ne(r),l&&j!==null&&!tt&&!((o=r==null?void 0:r.reactions)!=null&&o.includes(t))&&(r.reactions??(r.reactions=[])).push(t),r.version>t.version)return!0}}l||I(t,D)}return!1}function zs(t,e){for(var s=e;s!==null;){if(s.f&Yt)try{s.fn(t);return}catch{s.f^=Yt}s=s.parent}throw yt=!1,t}function Zs(t){return(t.f&it)===0&&(t.parent===null||(t.parent.f&Yt)===0)}function Lt(t,e,s,l){if(yt){if(s===null&&(yt=!1),Zs(e))throw t;return}s!==null&&(yt=!0);{zs(t,e);return}}function He(t){var v;var e=O,s=N,l=U,n=y,r=tt,a=M,o=g,c=t.f;O=null,N=0,U=null,y=c&(R|ht)?null:t,tt=!st&&(c&z)!==0,M=null,g=t.ctx;try{var i=(0,t.fn)(),f=t.deps;if(O!==null){var u;if(dt(t,N),f!==null&&N>0)for(f.length=N+O.length,u=0;u<O.length;u++)f[N+u]=O[u];else t.deps=f=O;if(!tt)for(u=N;u<f.length;u++)((v=f[u]).reactions??(v.reactions=[])).push(t)}else f!==null&&N<f.length&&(dt(t,N),f.length=N);return i}finally{O=e,N=s,U=l,y=n,tt=r,M=a,g=o}}function Js(t,e){let s=e.reactions;if(s!==null){var l=s.indexOf(t);if(l!==-1){var n=s.length-1;n===0?s=e.reactions=null:(s[l]=s[n],s.pop())}}s===null&&e.f&L&&(O===null||!O.includes(e))&&(I(e,rt),e.f&(z|Et)||(e.f^=Et),dt(e,0))}function dt(t,e){var s=t.deps;if(s!==null)for(var l=e;l<s.length;l++)Js(t,s[l])}function kt(t){var e=t.f;if(!(e&it)){I(t,D);var s=j,l=g;j=t;try{e&Ht?Vs(t):qe(t),Ce(t),Ie(t);var n=He(t);t.teardown=typeof n=="function"?n:null,t.version=Ve}catch(r){Lt(r,t,s,l||t.ctx)}finally{j=s}}}function $e(){if(lt>1e3){lt=0;try{_s()}catch(t){if(pt!==null)Lt(t,pt,null);else throw t}}lt++}function Ke(t){var e=t.length;if(e!==0){$e();var s=st;st=!0;try{for(var l=0;l<e;l++){var n=t[l];n.f&D||(n.f^=D);var r=[];We(n,r),Qs(r)}}finally{st=s}}}function Qs(t){var e=t.length;if(e!==0)for(var s=0;s<e;s++){var l=t[s];if(!(l.f&(it|nt)))try{ot(l)&&(kt(l),l.deps===null&&l.first===null&&l.nodes_start===null&&(l.teardown===null?Fe(l):l.fn=null))}catch(n){Lt(n,l,null,l.ctx)}}}function tl(){if(vt=!1,lt>1001)return;const t=$;$=[],Ke(t),vt||(lt=0,pt=null)}function Rt(t){bt===Ue&&(vt||(vt=!0,queueMicrotask(tl))),pt=t;for(var e=t;e.parent!==null;){e=e.parent;var s=e.f;if(s&(ht|R)){if(!(s&D))return;e.f^=D}}$.push(e)}function We(t,e){var s=t.first,l=[];t:for(;s!==null;){var n=s.f,r=(n&R)!==0,a=r&&(n&D)!==0,o=s.next;if(!a&&!(n&nt))if(n&_t){if(r)s.f^=D;else try{ot(s)&&kt(s)}catch(u){Lt(u,s,null,s.ctx)}var c=s.first;if(c!==null){s=c;continue}}else n&me&&l.push(s);if(o===null){let u=s.parent;for(;u!==null;){if(t===u)break t;var i=u.next;if(i!==null){s=i;continue t}u=u.parent}}s=o}for(var f=0;f<l.length;f++)c=l[f],e.push(c),We(c,e)}function Xe(t){var e=bt,s=$;try{$e();const n=[];bt=Ks,$=n,vt=!1,Ke(s);var l=t==null?void 0:t();return $s(),($.length>0||n.length>0)&&Xe(),lt=0,pt=null,l}finally{bt=e,$=s}}async function ze(){await Promise.resolve(),Xe()}function E(t){var f;var e=t.f,s=(e&L)!==0;if(s&&e&it){var l=Te(t);return Wt(t),l}if(y!==null){M!==null&&M.includes(t)&&ms();var n=y.deps;O===null&&n!==null&&n[N]===t?N++:O===null?O=[t]:O.push(t),U!==null&&j!==null&&j.f&D&&!(j.f&R)&&U.includes(t)&&(I(j,V),Rt(j))}else if(s&&t.deps===null)for(var r=t,a=r.parent,o=r;a!==null;)if(a.f&L){var c=a;o=c,a=c.parent}else{var i=a;(f=i.deriveds)!=null&&f.includes(o)||(i.deriveds??(i.deriveds=[])).push(o);break}return s&&(r=t,ot(r)&&Ne(r)),t.v}function H(t){const e=y;try{return y=null,t()}finally{y=e}}const el=~(V|rt|D);function I(t,e){t.f=t.f&el|e}function Qt(t,e=!1,s){g={p:g,c:null,e:null,m:!1,s:t,x:null,l:null},at&&!e&&(g.l={s:null,u:null,r1:[],r2:F(!1)})}function te(t){const e=g;if(e!==null){const a=e.e;if(a!==null){var s=j,l=y;e.e=null;try{for(var n=0;n<a.length;n++){var r=a[n];Y(r.effect),G(r.reaction),Xt(r.fn)}}finally{Y(s),G(l)}}g=e.p,e.m=!0}return{}}function Ze(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)Vt(t);else if(!Array.isArray(t))for(let e in t){const s=t[e];typeof s=="object"&&s&&K in s&&Vt(s)}}}function Vt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let l in t)try{Vt(t[l],e)}catch{}const s=ge(t);if(s!==Object.prototype&&s!==Array.prototype&&s!==Map.prototype&&s!==Set.prototype&&s!==Date.prototype){const l=rs(s);for(let n in l){const r=l[n].get;if(r)try{r.call(t)}catch{}}}}}function sl(t){var e=y,s=j;G(null),Y(null);try{return t()}finally{G(e),Y(s)}}const ll=new Set,ae=new Set;function nl(t,e,s,l){function n(r){if(l.capture||ft.call(e,r),!r.cancelBubble)return sl(()=>s.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Hs(()=>{e.addEventListener(t,n,l)}):e.addEventListener(t,n,l),n}function ce(t,e,s,l,n){var r={capture:l,passive:n},a=nl(t,e,s,r);(e===document.body||e===window||e===document)&&Fs(()=>{e.removeEventListener(t,a,r)})}function ft(t){var q;var e=this,s=e.ownerDocument,l=t.type,n=((q=t.composedPath)==null?void 0:q.call(t))||[],r=n[0]||t.target,a=0,o=t.__root;if(o){var c=n.indexOf(o);if(c!==-1&&(e===document||e===window)){t.__root=e;return}var i=n.indexOf(e);if(i===-1)return;c<=i&&(a=c)}if(r=n[a]||t.target,r!==e){ns(t,"currentTarget",{configurable:!0,get(){return r||s}});var f=y,u=j;G(null),Y(null);try{for(var v,d=[];r!==null;){var k=r.assignedSlot||r.parentNode||r.host||null;try{var b=r["__"+l];if(b!==void 0&&!r.disabled)if(Pt(b)){var[S,...C]=b;S.apply(r,[t,...C])}else b.call(r,t)}catch(T){v?d.push(T):v=T}if(t.cancelBubble||k===e||k===null)break;r=k}if(v){for(let T of d)queueMicrotask(()=>{throw T});throw v}}finally{t.__root=e,delete t.currentTarget,G(f),Y(u)}}}function rl(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Gt(t,e){var s=j;s.nodes_start===null&&(s.nodes_start=t,s.nodes_end=e)}function It(t,e){var s=(e&Ps)!==0,l=(e&Ts)!==0,n,r=!t.startsWith("<!>");return()=>{n===void 0&&(n=rl(r?t:"<!>"+t),s||(n=xt(n)));var a=l?document.importNode(n,!0):n.cloneNode(!0);if(s){var o=xt(a),c=a.lastChild;Gt(o,c)}else Gt(a,a);return a}}function qt(){var t=document.createDocumentFragment(),e=document.createComment(""),s=De();return t.append(e,s),Gt(e,s),t}function W(t,e){t!==null&&t.before(e)}const il=["touchstart","touchmove"];function al(t){return il.includes(t)}function cl(t,e){return ol(t,e)}const Z=new Map;function ol(t,{target:e,anchor:s,props:l={},events:n,context:r,intro:a=!0}){Ns();var o=new Set,c=u=>{for(var v=0;v<u.length;v++){var d=u[v];if(!o.has(d)){o.add(d);var k=al(d);e.addEventListener(d,ft,{passive:k});var b=Z.get(d);b===void 0?(document.addEventListener(d,ft,{passive:k}),Z.set(d,1)):Z.set(d,b+1)}}};c(ls(ll)),ae.add(c);var i=void 0,f=Ys(()=>{var u=s??e.appendChild(De());return At(()=>{if(r){Qt({});var v=g;v.c=r}n&&(l.$$events=n),i=t(u,l)||{},r&&te()}),()=>{var k;for(var v of o){e.removeEventListener(v,ft);var d=Z.get(v);--d===0?(document.removeEventListener(v,ft),Z.delete(v)):Z.set(v,d)}ae.delete(c),u!==s&&((k=u.parentNode)==null||k.removeChild(u))}});return ul.set(i,f),i}let ul=new WeakMap;function fl(t,e,s=!1){var l=t,n=null,r=null,a=P,o=s?Tt:0,c=!1;const i=(u,v=!0)=>{c=!0,f(v,u)},f=(u,v)=>{a!==(a=u)&&(a?(n?ne(n):v&&(n=At(()=>v(l))),r&&Ot(r,()=>{r=null})):(r?ne(r):v&&(r=At(()=>v(l))),n&&Ot(n,()=>{n=null})))};Re(()=>{c=!1,e(i),c||f(null,null)},o)}function oe(t,e,s){var l=t,n,r;Re(()=>{n!==(n=e())&&(r&&(Ot(r),r=null),n&&(r=At(()=>s(l,n))))},Tt)}function vl(t,e,s){Xt(()=>{var l=H(()=>e(t,s==null?void 0:s())||{});if(l!=null&&l.destroy)return()=>l.destroy()})}function Je(t=!1){const e=g,s=e.l.u;if(!s)return;let l=()=>Ze(e.s);if(t){let n=0,r={};const a=St(()=>{let o=!1;const c=e.s;for(const i in c)c[i]!==r[i]&&(r[i]=c[i],o=!0);return o&&n++,n});l=()=>E(a)}s.b.length&&Ms(()=>{ue(e,l),wt(s.b)}),Bt(()=>{const n=H(()=>s.m.map(cs));return()=>{for(const r of n)typeof r=="function"&&r()}}),s.a.length&&Bt(()=>{ue(e,l),wt(s.a)})}function ue(t,e){if(t.l.s)for(const s of t.l.s)E(s);e()}function fe(t,e){var r;var s=(r=t.$$events)==null?void 0:r[e.type],l=Pt(s)?s.slice():s==null?[]:[s];for(var n of l)n.call(this,e)}function pl(t,e,s){if(t==null)return e(void 0),s&&s(void 0),et;const l=H(()=>t.subscribe(e,s));return l.unsubscribe?()=>l.unsubscribe():l}let gt=!1;function dl(t){var e=gt;try{return gt=!1,[t(),gt]}finally{gt=e}}const _l={get(t,e){let s=t.props.length;for(;s--;){let l=t.props[s];if(ut(l)&&(l=l()),typeof l=="object"&&l!==null&&e in l)return l[e]}},set(t,e,s){let l=t.props.length;for(;l--;){let n=t.props[l];ut(n)&&(n=n());const r=B(n,e);if(r&&r.set)return r.set(s),!0}return!1},getOwnPropertyDescriptor(t,e){let s=t.props.length;for(;s--;){let l=t.props[s];if(ut(l)&&(l=l()),typeof l=="object"&&l!==null&&e in l){const n=B(l,e);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,e){if(e===K||e===be)return!1;for(let s of t.props)if(ut(s)&&(s=s()),s!=null&&e in s)return!0;return!1},ownKeys(t){const e=[];for(let s of t.props){ut(s)&&(s=s());for(const l in s)e.includes(l)||e.push(l)}return e}};function ve(...t){return new Proxy({props:t},_l)}function pe(t){for(var e=j,s=j;e!==null&&!(e.f&(R|ht));)e=e.parent;try{return Y(e),t()}finally{Y(s)}}function Ft(t,e,s,l){var _;var n=(s&xs)!==0,r=!at||(s&Ss)!==0,a=(s&Os)!==0,o=(s&Ds)!==0,c=!1,i;a?[i,c]=dl(()=>t[e]):i=t[e];var f=K in t||be in t,u=((_=B(t,e))==null?void 0:_.set)??(f&&a&&e in t?h=>t[e]=h:void 0),v=l,d=!0,k=!1,b=()=>(k=!0,d&&(d=!1,o?v=H(l):v=l),v);i===void 0&&l!==void 0&&(u&&r&&ks(),i=b(),u&&u(i));var S;if(r)S=()=>{var h=t[e];return h===void 0?b():(d=!0,k=!1,h)};else{var C=pe(()=>(n?St:Is)(()=>t[e]));C.f|=us,S=()=>{var h=E(C);return h!==void 0&&(v=void 0),h===void 0?v:h}}if(!(s&As))return S;if(u){var q=t.$$legacy;return function(h,w){return arguments.length>0?((!r||!w||q||c)&&u(w?S():h),h):S()}}var T=!1,jt=!1,m=xe(i),p=pe(()=>St(()=>{var h=S(),w=E(m);return T?(T=!1,jt=!0,w):(jt=!1,m.v=h)}));return n||(p.equals=$t),function(h,w){if(arguments.length>0){const A=w?E(p):r&&a?Q(h):h;return p.equals(A)||(T=!0,x(m,A),k&&v!==void 0&&(v=A),H(()=>E(p))),h}return E(p)}}function hl(t){g===null&&Nt(),at&&g.l!==null?Qe(g).m.push(t):Bt(()=>{const e=H(t);if(typeof e=="function")return e})}function kl(t){g===null&&Nt(),hl(()=>()=>H(t))}function jl(t,e,{bubbles:s=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:s,cancelable:l})}function gl(){const t=g;return t===null&&Nt(),(e,s,l)=>{var r;const n=(r=t.s.$$events)==null?void 0:r[e];if(n){const a=Pt(n)?n.slice():[n],o=jl(e,s,l);for(const c of a)c.call(t.x,o);return!o.defaultPrevented}return!0}}function ml(t){g===null&&Nt(),g.l===null&&hs(),Qe(g).a.push(t)}function Qe(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const yl="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(yl);bs();const J=[];function ts(t,e){return{subscribe:es(t,e).subscribe}}function es(t,e=et){let s=null;const l=new Set;function n(o){if(Ee(t,o)&&(t=o,s)){const c=!J.length;for(const i of l)i[1](),J.push(i,t);if(c){for(let i=0;i<J.length;i+=2)J[i][0](J[i+1]);J.length=0}}}function r(o){n(o(t))}function a(o,c=et){const i=[o,c];return l.add(i),l.size===1&&(s=e(n,r)||et),o(t),()=>{l.delete(i),l.size===0&&s&&(s(),s=null)}}return{set:n,update:r,subscribe:a}}function ss(t,e,s){const l=!Array.isArray(t),n=l?[t]:t;if(!n.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return ts(s,(a,o)=>{let c=!1;const i=[];let f=0,u=et;const v=()=>{if(f)return;u();const k=e(l?i[0]:i,a,o);r?a(k):u=typeof k=="function"?k:et},d=n.map((k,b)=>pl(k,S=>{i[b]=S,f&=~(1<<b),c&&v()},()=>{f|=1<<b}));return c=!0,v(),function(){wt(d),u(),c=!1}})}function bl(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var s,l,n,r,a=[],o="",c=t.split("/");for(c[0]||c.shift();n=c.shift();)s=n[0],s==="*"?(a.push("wild"),o+="/(.*)"):s===":"?(l=n.indexOf("?",1),r=n.indexOf(".",1),a.push(n.substring(1,~l?l:~r?r:n.length)),o+=~l&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(o+=(~l?"?":"")+"\\"+n.substring(r))):o+="/"+n;return{keys:a,pattern:new RegExp("^"+o+"/?$","i")}}function de(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const s=e.indexOf("?");let l="";return s>-1&&(l=e.substr(s+1),e=e.substr(0,s)),{location:e,querystring:l}}const ee=ts(null,function(e){e(de());const s=()=>{e(de())};return window.addEventListener("hashchange",s,!1),function(){window.removeEventListener("hashchange",s,!1)}});ss(ee,t=>t.location);ss(ee,t=>t.querystring);const _e=es(void 0);async function wl(t){if(t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await ze(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function Mt(t,e){if(e=ke(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return he(t,e),{update(s){s=ke(s),he(t,s)}}}function El(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function he(t,e){let s=e.href||t.getAttribute("href");if(s&&s.charAt(0)=="/")s="#"+s;else if(!s||s.length<2||s.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+s);t.setAttribute("href",s),t.addEventListener("click",l=>{l.preventDefault(),e.disabled||xl(l.currentTarget.getAttribute("href"))})}function ke(t){return t&&typeof t=="string"?{href:t}:t||{}}function xl(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}function Sl(t,e){Qt(e,!1);let s=Ft(e,"routes",24,()=>({})),l=Ft(e,"prefix",8,""),n=Ft(e,"restoreScrollState",8,!1);class r{constructor(p,_){if(!_||typeof _!="function"&&(typeof _!="object"||_._sveltesparouter!==!0))throw Error("Invalid component object");if(!p||typeof p=="string"&&(p.length<1||p.charAt(0)!="/"&&p.charAt(0)!="*")||typeof p=="object"&&!(p instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:h,keys:w}=bl(p);this.path=p,typeof _=="object"&&_._sveltesparouter===!0?(this.component=_.component,this.conditions=_.conditions||[],this.userData=_.userData,this.props=_.props||{}):(this.component=()=>Promise.resolve(_),this.conditions=[],this.props={}),this._pattern=h,this._keys=w}match(p){if(l()){if(typeof l()=="string")if(p.startsWith(l()))p=p.substr(l().length)||"/";else return null;else if(l()instanceof RegExp){const A=p.match(l());if(A&&A[0])p=p.substr(A[0].length)||"/";else return null}}const _=this._pattern.exec(p);if(_===null)return null;if(this._keys===!1)return _;const h={};let w=0;for(;w<this._keys.length;){try{h[this._keys[w]]=decodeURIComponent(_[w+1]||"")||null}catch{h[this._keys[w]]=null}w++}return h}async checkConditions(p){for(let _=0;_<this.conditions.length;_++)if(!await this.conditions[_](p))return!1;return!0}}const a=[];s()instanceof Map?s().forEach((m,p)=>{a.push(new r(p,m))}):Object.keys(s()).forEach(m=>{a.push(new r(m,s()[m]))});let o=Ct(null),c=Ct(null),i=Ct({});const f=gl();async function u(m,p){await ze(),f(m,p)}let v=null,d=null;n()&&(d=m=>{m.state&&(m.state.__svelte_spa_router_scrollY||m.state.__svelte_spa_router_scrollX)?v=m.state:v=null},window.addEventListener("popstate",d),ml(()=>{El(v)}));let k=null,b=null;const S=ee.subscribe(async m=>{k=m;let p=0;for(;p<a.length;){const _=a[p].match(m.location);if(!_){p++;continue}const h={route:a[p].path,location:m.location,querystring:m.querystring,userData:a[p].userData,params:_&&typeof _=="object"&&Object.keys(_).length?_:null};if(!await a[p].checkConditions(h)){x(o,null),b=null,u("conditionsFailed",h);return}u("routeLoading",Object.assign({},h));const w=a[p].component;if(b!=w){w.loading?(x(o,w.loading),b=w,x(c,w.loadingParams),x(i,{}),u("routeLoaded",Object.assign({},h,{component:E(o),name:E(o).name,params:E(c)}))):(x(o,null),b=null);const A=await w();if(m!=k)return;x(o,A&&A.default||A),b=w}_&&typeof _=="object"&&Object.keys(_).length?x(c,_):x(c,null),x(i,a[p].props),u("routeLoaded",Object.assign({},h,{component:E(o),name:E(o).name,params:E(c)})).then(()=>{_e.set(E(c))});return}x(o,null),b=null,_e.set(void 0)});kl(()=>{S(),d&&window.removeEventListener("popstate",d)}),Bs(()=>Ze(n()),()=>{history.scrollRestoration=n()?"manual":"auto"}),Us(),Je();var C=qt(),q=mt(C);{var T=m=>{var p=qt(),_=mt(p);oe(_,()=>E(o),(h,w)=>{w(h,ve({get params(){return E(c)}},()=>E(i),{$$events:{routeEvent(A){fe.call(this,e,A)}}}))}),W(m,p)},jt=m=>{var p=qt(),_=mt(p);oe(_,()=>E(o),(h,w)=>{w(h,ve(()=>E(i),{$$events:{routeEvent(A){fe.call(this,e,A)}}}))}),W(m,p)};fl(q,m=>{E(c)?m(T):m(jt,!1)})}W(t,C),te()}var Al=It('<h1>Home!</h1> <a href="/grammar">Grammatik</a>',1);function Ol(t){var e=Al(),s=Rs(mt(e),2);vl(s,l=>Mt==null?void 0:Mt(l)),W(t,e)}var Dl=It('<div class="declensions svelte-1ciljpk"><div class="category-list svelte-1ciljpk"><div class="category svelte-1ciljpk" id="table1"><h2 class="svelte-1ciljpk">o - Deklination (maskulinum)</h2> <table class="svelte-1ciljpk"><thead class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><th class="svelte-1ciljpk"></th><th class="svelte-1ciljpk">Singular</th><th class="svelte-1ciljpk">Plural</th></tr></thead><tbody class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Nominativ</td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">us</span> / <strong class="svelte-1ciljpk">os</strong></td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">i</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Genitiv</td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">i</span></td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">orum</span> / <strong class="svelte-1ciljpk">um</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Dativ</td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">o</span></td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">is</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Akkusativ</td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">um</span> / <strong class="svelte-1ciljpk">om</strong></td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">os</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Ablativ</td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">o</span></td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">is</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Vokativ</td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">e</span></td><td class="svelte-1ciljpk">serv - <span class="svelte-1ciljpk">i</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Lokativ</td><td class="svelte-1ciljpk"></td><td class="svelte-1ciljpk"></td></tr></tbody></table></div> <div class="category svelte-1ciljpk" id="table2"><h2 class="svelte-1ciljpk">o - Deklination (neutrum)</h2> <table class="svelte-1ciljpk"><thead class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><th class="svelte-1ciljpk"></th><th class="svelte-1ciljpk">Singular</th><th class="svelte-1ciljpk">Plural</th></tr></thead><tbody class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Nominativ</td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">um</span> / <strong class="svelte-1ciljpk">om</strong></td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">a</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Genitiv</td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">i</span></td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">orum</span> / <strong class="svelte-1ciljpk">um</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Dativ</td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">o</span></td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">is</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Akkusativ</td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">um</span></td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">a</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Ablativ</td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">o</span></td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">is</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Vokativ</td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">um</span></td><td class="svelte-1ciljpk">for - <span class="svelte-1ciljpk">a</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Lokativ</td><td class="svelte-1ciljpk"></td><td class="svelte-1ciljpk"></td></tr></tbody></table></div> <div class="category svelte-1ciljpk" id="table3"><h2 class="svelte-1ciljpk">o - Deklination (maskulinum) [-er]</h2> <table class="svelte-1ciljpk"><thead class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><th class="svelte-1ciljpk"></th><th class="svelte-1ciljpk">Singular</th><th class="svelte-1ciljpk">Plural</th></tr></thead><tbody class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Nominativ</td><td class="svelte-1ciljpk">puer</td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">i</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Genitiv</td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">i</span></td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">orum</span> / <strong class="svelte-1ciljpk">um</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Dativ</td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">o</span></td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">is</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Akkusativ</td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">um</span> / <strong class="svelte-1ciljpk">om</strong></td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">os</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Ablativ</td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">o</span></td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">is</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Vokativ</td><td class="svelte-1ciljpk">puer</td><td class="svelte-1ciljpk">puer - <span class="svelte-1ciljpk">i</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Lokativ</td><td class="svelte-1ciljpk"></td><td class="svelte-1ciljpk"></td></tr></tbody></table></div> <div class="category svelte-1ciljpk" id="table4"><h2 class="svelte-1ciljpk">a - Deklination</h2> <table class="svelte-1ciljpk"><thead class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><th class="svelte-1ciljpk"></th><th class="svelte-1ciljpk">Singular</th><th class="svelte-1ciljpk">Plural</th></tr></thead><tbody class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Nominativ</td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">a</span></td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">ae</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Genitiv</td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">ae</span> / <strong class="svelte-1ciljpk">ai</strong></td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">arum</span> / <strong class="svelte-1ciljpk">um</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Dativ</td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">ae</span> / <strong class="svelte-1ciljpk">ai</strong></td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">is</span> / <strong class="svelte-1ciljpk">abus</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Akkusativ</td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">am</span></td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">as</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Ablativ</td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">a</span> / <strong class="svelte-1ciljpk">ad</strong></td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">is</span> / <strong class="svelte-1ciljpk">abus</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Vokativ</td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">a</span></td><td class="svelte-1ciljpk">puell - <span class="svelte-1ciljpk">ae</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Lokativ</td><td class="svelte-1ciljpk"></td><td class="svelte-1ciljpk"></td></tr></tbody></table></div> <div class="category svelte-1ciljpk" id="table5"><h2 class="svelte-1ciljpk">3. / Gemischte Deklination</h2> <table class="svelte-1ciljpk"><thead class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><th class="svelte-1ciljpk"></th><th class="svelte-1ciljpk">Singular</th><th class="svelte-1ciljpk">Plural</th></tr></thead><tbody class="svelte-1ciljpk"><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Nominativ</td><td class="svelte-1ciljpk">mercator</td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">es</span> / <strong class="svelte-1ciljpk">is</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Genitiv</td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">is</span></td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">um</span> / <strong class="svelte-1ciljpk">ium</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Dativ</td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">i</span> / <strong class="svelte-1ciljpk">e</strong></td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">ibus</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Akkusativ</td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">em</span></td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">es</span> / <strong class="svelte-1ciljpk">is</strong></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Ablativ</td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">e</span></td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">ibus</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Vokativ</td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">e</span></td><td class="svelte-1ciljpk">mercator - <span class="svelte-1ciljpk">es</span></td></tr><tr class="svelte-1ciljpk"><td class="svelte-1ciljpk">Lokativ</td><td class="svelte-1ciljpk"></td><td class="svelte-1ciljpk"></td></tr></tbody></table></div></div></div>');function Pl(t){var e=Dl();W(t,e)}var Tl=It('<span role="button" tabindex="0" class="svelte-1x6tj8u">Deklinationen</span>');function Nl(t,e){Qt(e,!1);function s(){wl("/grammar/declinations")}function l(r){(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),s())}Je();var n=Tl();ce("click",n,s),ce("keydown",n,l),W(t,n),te()}const Ll={"/":Ol,"/grammar":Nl,"/grammar/declinations":Pl};var Rl=It("<main><!></main>");function Il(t){var e=Rl(),s=Ls(e);Sl(s,{routes:Ll}),W(t,e)}cl(Il,{target:document.getElementById("app")});
