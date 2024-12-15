(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const xe=!1;var Tt=Array.isArray,ns=Array.from,rs=Object.defineProperty,B=Object.getOwnPropertyDescriptor,ls=Object.getOwnPropertyDescriptors,as=Object.prototype,us=Array.prototype,me=Object.getPrototypeOf;function ct(t){return typeof t=="function"}const et=()=>{};function is(t){return t()}function Et(t){for(var e=0;e<t.length;e++)t[e]()}const R=2,ye=4,_t=8,Ht=16,I=32,pt=64,Yt=128,z=256,kt=512,P=1024,V=2048,lt=4096,rt=8192,at=16384,os=32768,Nt=65536,cs=1<<17,fs=1<<19,be=1<<20,K=Symbol("$state"),we=Symbol("legacy props");function Ee(t){return t===this.v}function ke(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function $t(t){return!ke(t,this.v)}function gs(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ds(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _s(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ps(t){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function hs(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function xs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ms(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ys(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function bs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ut=!1;function ws(){ut=!0}function F(t){return{f:0,v:t,reactions:null,equals:Ee,version:0}}function Se(t,e=!1){var n;const s=F(t);return e||(s.equals=$t),ut&&m!==null&&m.l!==null&&((n=m.l).s??(n.s=[])).push(s),s}function qt(t,e=!1){return Es(Se(t,e))}function Es(t){return b!==null&&b.f&R&&(M===null?Ws([t]):M.push(t)),t}function S(t,e){return b!==null&&Jt()&&b.f&(R|Ht)&&(M===null||!M.includes(t))&&bs(),ks(t,e)}function ks(t,e){return t.equals(e)||(t.v=e,t.version=Ge(),Ae(t,V),Jt()&&x!==null&&x.f&P&&!(x.f&I)&&(D!==null&&D.includes(t)?(C(x,V),It(x)):U===null?Xs([t]):U.push(t))),e}function Ae(t,e){var s=t.reactions;if(s!==null)for(var n=Jt(),r=s.length,l=0;l<r;l++){var u=s[l],o=u.f;o&V||!n&&u===x||(C(u,e),o&(P|z)&&(o&R?Ae(u,lt):It(u)))}}const Ss=1,As=2,Os=4,Ds=8,Ps=16,Ts=1,Ns=2,T=Symbol();function Q(t,e=null,s){if(typeof t!="object"||t===null||K in t)return t;const n=me(t);if(n!==as&&n!==us)return t;var r=new Map,l=Tt(t),u=F(0);l&&r.set("length",F(t.length));var o;return new Proxy(t,{defineProperty(i,a,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&xs();var c=r.get(a);return c===void 0?(c=F(f.value),r.set(a,c)):S(c,Q(f.value,o)),!0},deleteProperty(i,a){var f=r.get(a);if(f===void 0)a in i&&r.set(a,F(T));else{if(l&&typeof a=="string"){var c=r.get("length"),g=Number(a);Number.isInteger(g)&&g<c.v&&S(c,g)}S(f,T),se(u)}return!0},get(i,a,f){var h;if(a===K)return t;var c=r.get(a),g=a in i;if(c===void 0&&(!g||(h=B(i,a))!=null&&h.writable)&&(c=F(Q(g?i[a]:T,o)),r.set(a,c)),c!==void 0){var d=k(c);return d===T?void 0:d}return Reflect.get(i,a,f)},getOwnPropertyDescriptor(i,a){var f=Reflect.getOwnPropertyDescriptor(i,a);if(f&&"value"in f){var c=r.get(a);c&&(f.value=k(c))}else if(f===void 0){var g=r.get(a),d=g==null?void 0:g.v;if(g!==void 0&&d!==T)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(i,a){var d;if(a===K)return!0;var f=r.get(a),c=f!==void 0&&f.v!==T||Reflect.has(i,a);if(f!==void 0||x!==null&&(!c||(d=B(i,a))!=null&&d.writable)){f===void 0&&(f=F(c?Q(i[a],o):T),r.set(a,f));var g=k(f);if(g===T)return!1}return c},set(i,a,f,c){var N;var g=r.get(a),d=a in i;if(l&&a==="length")for(var h=f;h<g.v;h+=1){var w=r.get(h+"");w!==void 0?S(w,T):h in i&&(w=F(T),r.set(h+"",w))}g===void 0?(!d||(N=B(i,a))!=null&&N.writable)&&(g=F(void 0),S(g,Q(f,o)),r.set(a,g)):(d=g.v!==T,S(g,Q(f,o)));var A=Reflect.getOwnPropertyDescriptor(i,a);if(A!=null&&A.set&&A.set.call(c,f),!d){if(l&&typeof a=="string"){var q=r.get("length"),j=Number(a);Number.isInteger(j)&&j>=q.v&&S(q,j+1)}se(u)}return!0},ownKeys(i){k(u);var a=Reflect.ownKeys(i).filter(g=>{var d=r.get(g);return d===void 0||d.v!==T});for(var[f,c]of r)c.v!==T&&!(f in i)&&a.push(f);return a},setPrototypeOf(){ms()}})}function se(t,e=1){S(t,t.v+e)}var ne,Oe,De;function Ls(){if(ne===void 0){ne=window;var t=Element.prototype,e=Node.prototype;Oe=B(e,"firstChild").get,De=B(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Pe(t=""){return document.createTextNode(t)}function St(t){return Oe.call(t)}function Kt(t){return De.call(t)}function Rs(t,e){return St(t)}function yt(t,e){{var s=St(t);return s instanceof Comment&&s.data===""?Kt(s):s}}function Is(t,e=1,s=!1){let n=t;for(;e--;)n=Kt(n);return n}function At(t){var e=R|V;x===null?e|=z:x.f|=be;var s=b!==null&&b.f&R?b:null;const n={children:null,ctx:m,deps:null,equals:Ee,f:e,fn:t,reactions:null,v:null,version:0,parent:s??x};return s!==null&&(s.children??(s.children=[])).push(n),n}function Cs(t){const e=At(t);return e.equals=$t,e}function Te(t){var e=t.children;if(e!==null){t.children=null;for(var s=0;s<e.length;s+=1){var n=e[s];n.f&R?Wt(n):X(n)}}}function qs(t){for(var e=t.parent;e!==null;){if(!(e.f&R))return e;e=e.parent}return null}function Ne(t){var e,s=x;Y(qs(t));try{Te(t),e=He(t)}finally{Y(s)}return e}function Le(t){var e=Ne(t),s=(tt||t.f&z)&&t.deps!==null?lt:P;C(t,s),t.equals(e)||(t.v=e,t.version=Ge())}function Wt(t){Te(t),dt(t,0),C(t,at),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Re(t){x===null&&b===null&&ds(),b!==null&&b.f&z&&vs(),Zt&&gs()}function js(t,e){var s=e.last;s===null?e.last=e.first=t:(s.next=t,t.prev=s,e.last=t)}function it(t,e,s,n=!0){var r=(t&pt)!==0,l=x,u={ctx:m,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|V,first:null,fn:e,last:null,next:null,parent:r?null:l,prev:null,teardown:null,transitions:null,version:0};if(s){var o=st;try{le(!0),ht(u),u.f|=os}catch(f){throw X(u),f}finally{le(o)}}else e!==null&&It(u);var i=s&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&be)===0;if(!i&&!r&&n&&(l!==null&&js(u,l),b!==null&&b.f&R)){var a=b;(a.children??(a.children=[])).push(u)}return u}function Fs(t){const e=it(_t,null,!1);return C(e,P),e.teardown=t,e}function Bt(t){Re();var e=x!==null&&(x.f&I)!==0&&m!==null&&!m.m;if(e){var s=m;(s.e??(s.e=[])).push({fn:t,effect:x,reaction:b})}else{var n=Xt(t);return n}}function Ms(t){return Re(),zt(t)}function Ys(t){const e=it(pt,t,!0);return(s={})=>new Promise(n=>{s.outro?Dt(e,()=>{X(e),n(void 0)}):(X(e),n(void 0))})}function Xt(t){return it(ye,t,!1)}function Bs(t,e){var s=m,n={effect:null,ran:!1};s.l.r1.push(n),n.effect=zt(()=>{t(),!n.ran&&(n.ran=!0,S(s.l.r2,!0),H(e))})}function Us(){var t=m;zt(()=>{if(k(t.l.r2)){for(var e of t.l.r1){var s=e.effect;s.f&P&&C(s,lt),ot(s)&&ht(s),e.ran=!1}t.l.r2.v=!1}})}function zt(t){return it(_t,t,!0)}function Ie(t,e=0){return it(_t|Ht|e,t,!0)}function Ot(t,e=!0){return it(_t|I,t,!0,e)}function Ce(t){var e=t.teardown;if(e!==null){const s=Zt,n=b;ae(!0),G(null);try{e.call(null)}finally{ae(s),G(n)}}}function qe(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var s=0;s<e.length;s+=1)Wt(e[s])}}function je(t,e=!1){var s=t.first;for(t.first=t.last=null;s!==null;){var n=s.next;X(s,e),s=n}}function Vs(t){for(var e=t.first;e!==null;){var s=e.next;e.f&I||X(e),e=s}}function X(t,e=!0){var s=!1;if((e||t.f&fs)&&t.nodes_start!==null){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var l=n===r?null:Kt(n);n.remove(),n=l}s=!0}je(t,e&&!s),qe(t),dt(t,0),C(t,at);var u=t.transitions;if(u!==null)for(const i of u)i.stop();Ce(t);var o=t.parent;o!==null&&o.first!==null&&Fe(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Fe(t){var e=t.parent,s=t.prev,n=t.next;s!==null&&(s.next=n),n!==null&&(n.prev=s),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=s))}function Dt(t,e){var s=[];Me(t,s,!0),Gs(s,()=>{X(t),e&&e()})}function Gs(t,e){var s=t.length;if(s>0){var n=()=>--s||e();for(var r of t)r.out(n)}else e()}function Me(t,e,s){if(!(t.f&rt)){if(t.f^=rt,t.transitions!==null)for(const u of t.transitions)(u.is_global||s)&&e.push(u);for(var n=t.first;n!==null;){var r=n.next,l=(n.f&Nt)!==0||(n.f&I)!==0;Me(n,e,l?s:!1),n=r}}}function re(t){Ye(t,!0)}function Ye(t,e){if(t.f&rt){ot(t)&&ht(t),t.f^=rt;for(var s=t.first;s!==null;){var n=s.next,r=(s.f&Nt)!==0||(s.f&I)!==0;Ye(s,r?e:!1),s=n}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&l.in()}}let Pt=!1,Ut=[];function Be(){Pt=!1;const t=Ut.slice();Ut=[],Et(t)}function Hs(t){Pt||(Pt=!0,queueMicrotask(Be)),Ut.push(t)}function $s(){Pt&&Be()}function Lt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Ue=0,Ks=1;let bt=!1,wt=Ue,gt=!1,vt=null,st=!1,Zt=!1;function le(t){st=t}function ae(t){Zt=t}let $=[],nt=0;let b=null;function G(t){b=t}let x=null;function Y(t){x=t}let M=null;function Ws(t){M=t}let D=null,L=0,U=null;function Xs(t){U=t}let Ve=0,tt=!1,m=null;function Ge(){return++Ve}function Jt(){return!ut||m!==null&&m.l===null}function ot(t){var u,o;var e=t.f;if(e&V)return!0;if(e&lt){var s=t.deps,n=(e&z)!==0;if(s!==null){var r;if(e&kt){for(r=0;r<s.length;r++)((u=s[r]).reactions??(u.reactions=[])).push(t);t.f^=kt}for(r=0;r<s.length;r++){var l=s[r];if(ot(l)&&Le(l),n&&x!==null&&!tt&&!((o=l==null?void 0:l.reactions)!=null&&o.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}n||C(t,P)}return!1}function zs(t,e){for(var s=e;s!==null;){if(s.f&Yt)try{s.fn(t);return}catch{s.f^=Yt}s=s.parent}throw bt=!1,t}function Zs(t){return(t.f&at)===0&&(t.parent===null||(t.parent.f&Yt)===0)}function Rt(t,e,s,n){if(bt){if(s===null&&(bt=!1),Zs(e))throw t;return}s!==null&&(bt=!0);{zs(t,e);return}}function He(t){var g;var e=D,s=L,n=U,r=b,l=tt,u=M,o=m,i=t.f;D=null,L=0,U=null,b=i&(I|pt)?null:t,tt=!st&&(i&z)!==0,M=null,m=t.ctx;try{var a=(0,t.fn)(),f=t.deps;if(D!==null){var c;if(dt(t,L),f!==null&&L>0)for(f.length=L+D.length,c=0;c<D.length;c++)f[L+c]=D[c];else t.deps=f=D;if(!tt)for(c=L;c<f.length;c++)((g=f[c]).reactions??(g.reactions=[])).push(t)}else f!==null&&L<f.length&&(dt(t,L),f.length=L);return a}finally{D=e,L=s,U=n,b=r,tt=l,M=u,m=o}}function Js(t,e){let s=e.reactions;if(s!==null){var n=s.indexOf(t);if(n!==-1){var r=s.length-1;r===0?s=e.reactions=null:(s[n]=s[r],s.pop())}}s===null&&e.f&R&&(D===null||!D.includes(e))&&(C(e,lt),e.f&(z|kt)||(e.f^=kt),dt(e,0))}function dt(t,e){var s=t.deps;if(s!==null)for(var n=e;n<s.length;n++)Js(t,s[n])}function ht(t){var e=t.f;if(!(e&at)){C(t,P);var s=x,n=m;x=t;try{e&Ht?Vs(t):je(t),qe(t),Ce(t);var r=He(t);t.teardown=typeof r=="function"?r:null,t.version=Ve}catch(l){Rt(l,t,s,n||t.ctx)}finally{x=s}}}function $e(){if(nt>1e3){nt=0;try{_s()}catch(t){if(vt!==null)Rt(t,vt,null);else throw t}}nt++}function Ke(t){var e=t.length;if(e!==0){$e();var s=st;st=!0;try{for(var n=0;n<e;n++){var r=t[n];r.f&P||(r.f^=P);var l=[];We(r,l),Qs(l)}}finally{st=s}}}function Qs(t){var e=t.length;if(e!==0)for(var s=0;s<e;s++){var n=t[s];if(!(n.f&(at|rt)))try{ot(n)&&(ht(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Fe(n):n.fn=null))}catch(r){Rt(r,n,null,n.ctx)}}}function tn(){if(gt=!1,nt>1001)return;const t=$;$=[],Ke(t),gt||(nt=0,vt=null)}function It(t){wt===Ue&&(gt||(gt=!0,queueMicrotask(tn))),vt=t;for(var e=t;e.parent!==null;){e=e.parent;var s=e.f;if(s&(pt|I)){if(!(s&P))return;e.f^=P}}$.push(e)}function We(t,e){var s=t.first,n=[];t:for(;s!==null;){var r=s.f,l=(r&I)!==0,u=l&&(r&P)!==0,o=s.next;if(!u&&!(r&rt))if(r&_t){if(l)s.f^=P;else try{ot(s)&&ht(s)}catch(c){Rt(c,s,null,s.ctx)}var i=s.first;if(i!==null){s=i;continue}}else r&ye&&n.push(s);if(o===null){let c=s.parent;for(;c!==null;){if(t===c)break t;var a=c.next;if(a!==null){s=a;continue t}c=c.parent}}s=o}for(var f=0;f<n.length;f++)i=n[f],e.push(i),We(i,e)}function Xe(t){var e=wt,s=$;try{$e();const r=[];wt=Ks,$=r,gt=!1,Ke(s);var n=t==null?void 0:t();return $s(),($.length>0||r.length>0)&&Xe(),nt=0,vt=null,n}finally{wt=e,$=s}}async function ze(){await Promise.resolve(),Xe()}function k(t){var f;var e=t.f,s=(e&R)!==0;if(s&&e&at){var n=Ne(t);return Wt(t),n}if(b!==null){M!==null&&M.includes(t)&&ys();var r=b.deps;D===null&&r!==null&&r[L]===t?L++:D===null?D=[t]:D.push(t),U!==null&&x!==null&&x.f&P&&!(x.f&I)&&U.includes(t)&&(C(x,V),It(x))}else if(s&&t.deps===null)for(var l=t,u=l.parent,o=l;u!==null;)if(u.f&R){var i=u;o=i,u=i.parent}else{var a=u;(f=a.deriveds)!=null&&f.includes(o)||(a.deriveds??(a.deriveds=[])).push(o);break}return s&&(l=t,ot(l)&&Le(l)),t.v}function H(t){const e=b;try{return b=null,t()}finally{b=e}}const en=~(V|lt|P);function C(t,e){t.f=t.f&en|e}function Qt(t,e=!1,s){m={p:m,c:null,e:null,m:!1,s:t,x:null,l:null},ut&&!e&&(m.l={s:null,u:null,r1:[],r2:F(!1)})}function te(t){const e=m;if(e!==null){const u=e.e;if(u!==null){var s=x,n=b;e.e=null;try{for(var r=0;r<u.length;r++){var l=u[r];Y(l.effect),G(l.reaction),Xt(l.fn)}}finally{Y(s),G(n)}}m=e.p,e.m=!0}return{}}function Ze(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)Vt(t);else if(!Array.isArray(t))for(let e in t){const s=t[e];typeof s=="object"&&s&&K in s&&Vt(s)}}}function Vt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{Vt(t[n],e)}catch{}const s=me(t);if(s!==Object.prototype&&s!==Array.prototype&&s!==Map.prototype&&s!==Set.prototype&&s!==Date.prototype){const n=ls(s);for(let r in n){const l=n[r].get;if(l)try{l.call(t)}catch{}}}}}function sn(t){var e=b,s=x;G(null),Y(null);try{return t()}finally{G(e),Y(s)}}const nn=new Set,ue=new Set;function rn(t,e,s,n){function r(l){if(n.capture||ft.call(e,l),!l.cancelBubble)return sn(()=>s.call(this,l))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Hs(()=>{e.addEventListener(t,r,n)}):e.addEventListener(t,r,n),r}function ie(t,e,s,n,r){var l={capture:n,passive:r},u=rn(t,e,s,l);(e===document.body||e===window||e===document)&&Fs(()=>{e.removeEventListener(t,u,l)})}function ft(t){var j;var e=this,s=e.ownerDocument,n=t.type,r=((j=t.composedPath)==null?void 0:j.call(t))||[],l=r[0]||t.target,u=0,o=t.__root;if(o){var i=r.indexOf(o);if(i!==-1&&(e===document||e===window)){t.__root=e;return}var a=r.indexOf(e);if(a===-1)return;i<=a&&(u=i)}if(l=r[u]||t.target,l!==e){rs(t,"currentTarget",{configurable:!0,get(){return l||s}});var f=b,c=x;G(null),Y(null);try{for(var g,d=[];l!==null;){var h=l.assignedSlot||l.parentNode||l.host||null;try{var w=l["__"+n];if(w!==void 0&&!l.disabled)if(Tt(w)){var[A,...q]=w;A.apply(l,[t,...q])}else w.call(l,t)}catch(N){g?d.push(N):g=N}if(t.cancelBubble||h===e||h===null)break;l=h}if(g){for(let N of d)queueMicrotask(()=>{throw N});throw g}}finally{t.__root=e,delete t.currentTarget,G(f),Y(c)}}}function ln(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Gt(t,e){var s=x;s.nodes_start===null&&(s.nodes_start=t,s.nodes_end=e)}function Ct(t,e){var s=(e&Ts)!==0,n=(e&Ns)!==0,r,l=!t.startsWith("<!>");return()=>{r===void 0&&(r=ln(l?t:"<!>"+t),s||(r=St(r)));var u=n?document.importNode(r,!0):r.cloneNode(!0);if(s){var o=St(u),i=u.lastChild;Gt(o,i)}else Gt(u,u);return u}}function jt(){var t=document.createDocumentFragment(),e=document.createComment(""),s=Pe();return t.append(e,s),Gt(e,s),t}function W(t,e){t!==null&&t.before(e)}const an=["touchstart","touchmove"];function un(t){return an.includes(t)}function on(t,e){return cn(t,e)}const Z=new Map;function cn(t,{target:e,anchor:s,props:n={},events:r,context:l,intro:u=!0}){Ls();var o=new Set,i=c=>{for(var g=0;g<c.length;g++){var d=c[g];if(!o.has(d)){o.add(d);var h=un(d);e.addEventListener(d,ft,{passive:h});var w=Z.get(d);w===void 0?(document.addEventListener(d,ft,{passive:h}),Z.set(d,1)):Z.set(d,w+1)}}};i(ns(nn)),ue.add(i);var a=void 0,f=Ys(()=>{var c=s??e.appendChild(Pe());return Ot(()=>{if(l){Qt({});var g=m;g.c=l}r&&(n.$$events=r),a=t(c,n)||{},l&&te()}),()=>{var h;for(var g of o){e.removeEventListener(g,ft);var d=Z.get(g);--d===0?(document.removeEventListener(g,ft),Z.delete(g)):Z.set(g,d)}ue.delete(i),c!==s&&((h=c.parentNode)==null||h.removeChild(c))}});return fn.set(a,f),a}let fn=new WeakMap;function gn(t,e,s=!1){var n=t,r=null,l=null,u=T,o=s?Nt:0,i=!1;const a=(c,g=!0)=>{i=!0,f(g,c)},f=(c,g)=>{u!==(u=c)&&(u?(r?re(r):g&&(r=Ot(()=>g(n))),l&&Dt(l,()=>{l=null})):(l?re(l):g&&(l=Ot(()=>g(n))),r&&Dt(r,()=>{r=null})))};Ie(()=>{i=!1,e(a),i||f(null,null)},o)}function oe(t,e,s){var n=t,r,l;Ie(()=>{r!==(r=e())&&(l&&(Dt(l),l=null),r&&(l=Ot(()=>s(n,r))))},Nt)}function vn(t,e,s){Xt(()=>{var n=H(()=>e(t,s==null?void 0:s())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Je(t=!1){const e=m,s=e.l.u;if(!s)return;let n=()=>Ze(e.s);if(t){let r=0,l={};const u=At(()=>{let o=!1;const i=e.s;for(const a in i)i[a]!==l[a]&&(l[a]=i[a],o=!0);return o&&r++,r});n=()=>k(u)}s.b.length&&Ms(()=>{ce(e,n),Et(s.b)}),Bt(()=>{const r=H(()=>s.m.map(is));return()=>{for(const l of r)typeof l=="function"&&l()}}),s.a.length&&Bt(()=>{ce(e,n),Et(s.a)})}function ce(t,e){if(t.l.s)for(const s of t.l.s)k(s);e()}function fe(t,e){var l;var s=(l=t.$$events)==null?void 0:l[e.type],n=Tt(s)?s.slice():s==null?[]:[s];for(var r of n)r.call(this,e)}function dn(t,e,s){if(t==null)return e(void 0),s&&s(void 0),et;const n=H(()=>t.subscribe(e,s));return n.unsubscribe?()=>n.unsubscribe():n}let mt=!1;function _n(t){var e=mt;try{return mt=!1,[t(),mt]}finally{mt=e}}const pn={get(t,e){let s=t.props.length;for(;s--;){let n=t.props[s];if(ct(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(t,e,s){let n=t.props.length;for(;n--;){let r=t.props[n];ct(r)&&(r=r());const l=B(r,e);if(l&&l.set)return l.set(s),!0}return!1},getOwnPropertyDescriptor(t,e){let s=t.props.length;for(;s--;){let n=t.props[s];if(ct(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const r=B(n,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(t,e){if(e===K||e===we)return!1;for(let s of t.props)if(ct(s)&&(s=s()),s!=null&&e in s)return!0;return!1},ownKeys(t){const e=[];for(let s of t.props){ct(s)&&(s=s());for(const n in s)e.includes(n)||e.push(n)}return e}};function ge(...t){return new Proxy({props:t},pn)}function ve(t){for(var e=x,s=x;e!==null&&!(e.f&(I|pt));)e=e.parent;try{return Y(e),t()}finally{Y(s)}}function Ft(t,e,s,n){var _;var r=(s&Ss)!==0,l=!ut||(s&As)!==0,u=(s&Ds)!==0,o=(s&Ps)!==0,i=!1,a;u?[a,i]=_n(()=>t[e]):a=t[e];var f=K in t||we in t,c=((_=B(t,e))==null?void 0:_.set)??(f&&u&&e in t?p=>t[e]=p:void 0),g=n,d=!0,h=!1,w=()=>(h=!0,d&&(d=!1,o?g=H(n):g=n),g);a===void 0&&n!==void 0&&(c&&l&&hs(),a=w(),c&&c(a));var A;if(l)A=()=>{var p=t[e];return p===void 0?w():(d=!0,h=!1,p)};else{var q=ve(()=>(r?At:Cs)(()=>t[e]));q.f|=cs,A=()=>{var p=k(q);return p!==void 0&&(g=void 0),p===void 0?g:p}}if(!(s&Os))return A;if(c){var j=t.$$legacy;return function(p,E){return arguments.length>0?((!l||!E||j||i)&&c(E?A():p),p):A()}}var N=!1,xt=!1,y=Se(a),v=ve(()=>At(()=>{var p=A(),E=k(y);return N?(N=!1,xt=!0,E):(xt=!1,y.v=p)}));return r||(v.equals=$t),function(p,E){if(arguments.length>0){const O=E?k(v):l&&u?Q(p):p;return v.equals(O)||(N=!0,S(y,O),h&&g!==void 0&&(g=O),H(()=>k(v))),p}return k(v)}}function hn(t){m===null&&Lt(),ut&&m.l!==null?Qe(m).m.push(t):Bt(()=>{const e=H(t);if(typeof e=="function")return e})}function xn(t){m===null&&Lt(),hn(()=>()=>H(t))}function mn(t,e,{bubbles:s=!1,cancelable:n=!1}={}){return new CustomEvent(t,{detail:e,bubbles:s,cancelable:n})}function yn(){const t=m;return t===null&&Lt(),(e,s,n)=>{var l;const r=(l=t.s.$$events)==null?void 0:l[e];if(r){const u=Tt(r)?r.slice():[r],o=mn(e,s,n);for(const i of u)i.call(t.x,o);return!o.defaultPrevented}return!0}}function bn(t){m===null&&Lt(),m.l===null&&ps(),Qe(m).a.push(t)}function Qe(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const wn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(wn);ws();const J=[];function ts(t,e){return{subscribe:es(t,e).subscribe}}function es(t,e=et){let s=null;const n=new Set;function r(o){if(ke(t,o)&&(t=o,s)){const i=!J.length;for(const a of n)a[1](),J.push(a,t);if(i){for(let a=0;a<J.length;a+=2)J[a][0](J[a+1]);J.length=0}}}function l(o){r(o(t))}function u(o,i=et){const a=[o,i];return n.add(a),n.size===1&&(s=e(r,l)||et),o(t),()=>{n.delete(a),n.size===0&&s&&(s(),s=null)}}return{set:r,update:l,subscribe:u}}function ss(t,e,s){const n=!Array.isArray(t),r=n?[t]:t;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return ts(s,(u,o)=>{let i=!1;const a=[];let f=0,c=et;const g=()=>{if(f)return;c();const h=e(n?a[0]:a,u,o);l?u(h):c=typeof h=="function"?h:et},d=r.map((h,w)=>dn(h,A=>{a[w]=A,f&=~(1<<w),i&&g()},()=>{f|=1<<w}));return i=!0,g(),function(){Et(d),c(),i=!1}})}function En(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var s,n,r,l,u=[],o="",i=t.split("/");for(i[0]||i.shift();r=i.shift();)s=r[0],s==="*"?(u.push("wild"),o+="/(.*)"):s===":"?(n=r.indexOf("?",1),l=r.indexOf(".",1),u.push(r.substring(1,~n?n:~l?l:r.length)),o+=~n&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(o+=(~n?"?":"")+"\\"+r.substring(l))):o+="/"+r;return{keys:u,pattern:new RegExp("^"+o+"/?$","i")}}function de(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const s=e.indexOf("?");let n="";return s>-1&&(n=e.substr(s+1),e=e.substr(0,s)),{location:e,querystring:n}}const ee=ts(null,function(e){e(de());const s=()=>{e(de())};return window.addEventListener("hashchange",s,!1),function(){window.removeEventListener("hashchange",s,!1)}});ss(ee,t=>t.location);ss(ee,t=>t.querystring);const _e=es(void 0);async function kn(t){if(t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await ze(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function Mt(t,e){if(e=he(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return pe(t,e),{update(s){s=he(s),pe(t,s)}}}function Sn(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function pe(t,e){let s=e.href||t.getAttribute("href");if(s&&s.charAt(0)=="/")s="#"+s;else if(!s||s.length<2||s.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+s);t.setAttribute("href",s),t.addEventListener("click",n=>{n.preventDefault(),e.disabled||An(n.currentTarget.getAttribute("href"))})}function he(t){return t&&typeof t=="string"?{href:t}:t||{}}function An(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}function On(t,e){Qt(e,!1);let s=Ft(e,"routes",24,()=>({})),n=Ft(e,"prefix",8,""),r=Ft(e,"restoreScrollState",8,!1);class l{constructor(v,_){if(!_||typeof _!="function"&&(typeof _!="object"||_._sveltesparouter!==!0))throw Error("Invalid component object");if(!v||typeof v=="string"&&(v.length<1||v.charAt(0)!="/"&&v.charAt(0)!="*")||typeof v=="object"&&!(v instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:p,keys:E}=En(v);this.path=v,typeof _=="object"&&_._sveltesparouter===!0?(this.component=_.component,this.conditions=_.conditions||[],this.userData=_.userData,this.props=_.props||{}):(this.component=()=>Promise.resolve(_),this.conditions=[],this.props={}),this._pattern=p,this._keys=E}match(v){if(n()){if(typeof n()=="string")if(v.startsWith(n()))v=v.substr(n().length)||"/";else return null;else if(n()instanceof RegExp){const O=v.match(n());if(O&&O[0])v=v.substr(O[0].length)||"/";else return null}}const _=this._pattern.exec(v);if(_===null)return null;if(this._keys===!1)return _;const p={};let E=0;for(;E<this._keys.length;){try{p[this._keys[E]]=decodeURIComponent(_[E+1]||"")||null}catch{p[this._keys[E]]=null}E++}return p}async checkConditions(v){for(let _=0;_<this.conditions.length;_++)if(!await this.conditions[_](v))return!1;return!0}}const u=[];s()instanceof Map?s().forEach((y,v)=>{u.push(new l(v,y))}):Object.keys(s()).forEach(y=>{u.push(new l(y,s()[y]))});let o=qt(null),i=qt(null),a=qt({});const f=yn();async function c(y,v){await ze(),f(y,v)}let g=null,d=null;r()&&(d=y=>{y.state&&(y.state.__svelte_spa_router_scrollY||y.state.__svelte_spa_router_scrollX)?g=y.state:g=null},window.addEventListener("popstate",d),bn(()=>{Sn(g)}));let h=null,w=null;const A=ee.subscribe(async y=>{h=y;let v=0;for(;v<u.length;){const _=u[v].match(y.location);if(!_){v++;continue}const p={route:u[v].path,location:y.location,querystring:y.querystring,userData:u[v].userData,params:_&&typeof _=="object"&&Object.keys(_).length?_:null};if(!await u[v].checkConditions(p)){S(o,null),w=null,c("conditionsFailed",p);return}c("routeLoading",Object.assign({},p));const E=u[v].component;if(w!=E){E.loading?(S(o,E.loading),w=E,S(i,E.loadingParams),S(a,{}),c("routeLoaded",Object.assign({},p,{component:k(o),name:k(o).name,params:k(i)}))):(S(o,null),w=null);const O=await E();if(y!=h)return;S(o,O&&O.default||O),w=E}_&&typeof _=="object"&&Object.keys(_).length?S(i,_):S(i,null),S(a,u[v].props),c("routeLoaded",Object.assign({},p,{component:k(o),name:k(o).name,params:k(i)})).then(()=>{_e.set(k(i))});return}S(o,null),w=null,_e.set(void 0)});xn(()=>{A(),d&&window.removeEventListener("popstate",d)}),Bs(()=>Ze(r()),()=>{history.scrollRestoration=r()?"manual":"auto"}),Us(),Je();var q=jt(),j=yt(q);{var N=y=>{var v=jt(),_=yt(v);oe(_,()=>k(o),(p,E)=>{E(p,ge({get params(){return k(i)}},()=>k(a),{$$events:{routeEvent(O){fe.call(this,e,O)}}}))}),W(y,v)},xt=y=>{var v=jt(),_=yt(v);oe(_,()=>k(o),(p,E)=>{E(p,ge(()=>k(a),{$$events:{routeEvent(O){fe.call(this,e,O)}}}))}),W(y,v)};gn(j,y=>{k(i)?y(N):y(xt,!1)})}W(t,q),te()}var Dn=Ct('<h1>Home!</h1> <a href="/grammar">Grammatik</a>',1);function Pn(t){var e=Dn(),s=Is(yt(e),2);vn(s,n=>Mt==null?void 0:Mt(n)),W(t,e)}var Tn=Ct('<div class="declensions svelte-1xg0u0g"><div class="category-list svelte-1xg0u0g"><div class="category svelte-1xg0u0g" id="table1"><h2 class="svelte-1xg0u0g">o - Deklination (m)</h2> <table class="svelte-1xg0u0g"><thead class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><th class="svelte-1xg0u0g"></th><th class="svelte-1xg0u0g">Singular</th><th class="svelte-1xg0u0g">Plural</th></tr></thead><tbody class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Nominativ</td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">us</span> / <strong class="svelte-1xg0u0g">os</strong></td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">i</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Genitiv</td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">i</span></td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">orum</span> / <strong class="svelte-1xg0u0g">um</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Dativ</td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">o</span></td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">is</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Akkusativ</td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">um</span> / <strong class="svelte-1xg0u0g">om</strong></td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">os</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Ablativ</td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">o</span></td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">is</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Vokativ</td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">e</span></td><td class="svelte-1xg0u0g">serv - <span class="svelte-1xg0u0g">i</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Lokativ</td><td class="svelte-1xg0u0g"></td><td class="svelte-1xg0u0g"></td></tr></tbody></table></div> <div class="category svelte-1xg0u0g" id="table2"><h2 class="svelte-1xg0u0g">o - Deklination (n)</h2> <table class="svelte-1xg0u0g"><thead class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><th class="svelte-1xg0u0g"></th><th class="svelte-1xg0u0g">Singular</th><th class="svelte-1xg0u0g">Plural</th></tr></thead><tbody class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Nominativ</td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">um</span> / <strong class="svelte-1xg0u0g">om</strong></td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">a</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Genitiv</td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">i</span></td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">orum</span> / <strong class="svelte-1xg0u0g">um</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Dativ</td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">o</span></td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">is</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Akkusativ</td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">um</span></td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">a</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Ablativ</td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">o</span></td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">is</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Vokativ</td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">um</span></td><td class="svelte-1xg0u0g">for - <span class="svelte-1xg0u0g">a</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Lokativ</td><td class="svelte-1xg0u0g"></td><td class="svelte-1xg0u0g"></td></tr></tbody></table></div> <div class="category svelte-1xg0u0g" id="table3"><h2 class="svelte-1xg0u0g">o - Deklination (m) [-er]</h2> <table class="svelte-1xg0u0g"><thead class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><th class="svelte-1xg0u0g"></th><th class="svelte-1xg0u0g">Singular</th><th class="svelte-1xg0u0g">Plural</th></tr></thead><tbody class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Nominativ</td><td class="svelte-1xg0u0g">puer</td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">i</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Genitiv</td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">i</span></td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">orum</span> / <strong class="svelte-1xg0u0g">um</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Dativ</td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">o</span></td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">is</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Akkusativ</td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">um</span> / <strong class="svelte-1xg0u0g">om</strong></td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">os</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Ablativ</td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">o</span></td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">is</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Vokativ</td><td class="svelte-1xg0u0g">puer</td><td class="svelte-1xg0u0g">puer - <span class="svelte-1xg0u0g">i</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Lokativ</td><td class="svelte-1xg0u0g"></td><td class="svelte-1xg0u0g"></td></tr></tbody></table></div> <div class="category svelte-1xg0u0g" id="table4"><h2 class="svelte-1xg0u0g">a - Deklination</h2> <table class="svelte-1xg0u0g"><thead class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><th class="svelte-1xg0u0g"></th><th class="svelte-1xg0u0g">Singular</th><th class="svelte-1xg0u0g">Plural</th></tr></thead><tbody class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Nominativ</td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">a</span></td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">ae</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Genitiv</td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">ae</span> / <strong class="svelte-1xg0u0g">ai</strong></td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">arum</span> / <strong class="svelte-1xg0u0g">um</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Dativ</td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">ae</span> / <strong class="svelte-1xg0u0g">ai</strong></td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">is</span> / <strong class="svelte-1xg0u0g">abus</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Akkusativ</td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">am</span></td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">as</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Ablativ</td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">a</span> / <strong class="svelte-1xg0u0g">ad</strong></td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">is</span> / <strong class="svelte-1xg0u0g">abus</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Vokativ</td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">a</span></td><td class="svelte-1xg0u0g">puell - <span class="svelte-1xg0u0g">ae</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Lokativ</td><td class="svelte-1xg0u0g"></td><td class="svelte-1xg0u0g"></td></tr></tbody></table></div> <div class="category svelte-1xg0u0g" id="table5"><h2 class="svelte-1xg0u0g">3. / Gemischte Deklination</h2> <table class="svelte-1xg0u0g"><thead class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><th class="svelte-1xg0u0g"></th><th class="svelte-1xg0u0g">Singular</th><th class="svelte-1xg0u0g">Plural</th></tr></thead><tbody class="svelte-1xg0u0g"><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Nominativ</td><td class="svelte-1xg0u0g">mercator</td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">es</span> / <strong class="svelte-1xg0u0g">is</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Genitiv</td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">is</span></td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">um</span> / <strong class="svelte-1xg0u0g">ium</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Dativ</td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">i</span> / <strong class="svelte-1xg0u0g">e</strong></td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">ibus</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Akkusativ</td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">em</span></td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">es</span> / <strong class="svelte-1xg0u0g">is</strong></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Ablativ</td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">e</span></td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">ibus</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Vokativ</td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">e</span></td><td class="svelte-1xg0u0g">mercator - <span class="svelte-1xg0u0g">es</span></td></tr><tr class="svelte-1xg0u0g"><td class="svelte-1xg0u0g">Lokativ</td><td class="svelte-1xg0u0g"></td><td class="svelte-1xg0u0g"></td></tr></tbody></table></div></div></div>');function Nn(t){var e=Tn();W(t,e)}var Ln=Ct('<span role="button" tabindex="0" class="svelte-1x6tj8u">Deklinationen</span>');function Rn(t,e){Qt(e,!1);function s(){kn("/grammar/declinations")}function n(l){(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),s())}Je();var r=Ln();ie("click",r,s),ie("keydown",r,n),W(t,r),te()}const In={"/":Pn,"/grammar":Rn,"/grammar/declinations":Nn};var Cn=Ct("<main><!></main>");function qn(t){var e=Cn(),s=Rs(e);On(s,{routes:In}),W(t,e)}on(qn,{target:document.getElementById("app")});
