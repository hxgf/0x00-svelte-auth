import{S,i as A,s as C,k as x,e as h,t as k,m as I,c as p,a as g,h as E,d,g as y,L as u,j as N,W as F,M as H,b as w,K as V,F as K,v as L}from"../chunks/vendor-4da64e94.js";import{s as W}from"../chunks/stores-742cbc98.js";import{d as $}from"../chunks/dw-utils-e8783ecf.js";function j(f,o,s){const a=f.slice();return a[2]=o[s],a}function q(f){let o,s,a,t,n=f[0].my_email+"",_,m=f[0].developments,i=[];for(let l=0;l<m.length;l+=1)i[l]=B(j(f,m,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();o=x(),s=h("div"),a=h("br"),t=k("my email: "),_=k(n)},l(l){for(let e=0;e<i.length;e+=1)i[e].l(l);o=I(l),s=p(l,"DIV",{});var r=g(s);a=p(r,"BR",{}),t=E(r,"my email: "),_=E(r,n),r.forEach(d)},m(l,r){for(let e=0;e<i.length;e+=1)i[e].m(l,r);y(l,o,r),y(l,s,r),u(s,a),u(s,t),u(s,_)},p(l,r){if(r&1){m=l[0].developments;let e;for(e=0;e<m.length;e+=1){const c=j(l,m,e);i[e]?i[e].p(c,r):(i[e]=B(c),i[e].c(),i[e].m(o.parentNode,o))}for(;e<i.length;e+=1)i[e].d(1);i.length=m.length}r&1&&n!==(n=l[0].my_email+"")&&N(_,n)},d(l){F(i,l),l&&d(o),l&&d(s)}}}function B(f){let o=f[2].title+"",s,a;return{c(){s=k(o),a=h("br")},l(t){s=E(t,o),a=p(t,"BR",{})},m(t,n){y(t,s,n),y(t,a,n)},p(t,n){n&1&&o!==(o=t[2].title+"")&&N(s,o)},d(t){t&&d(s),t&&d(a)}}}function z(f){let o,s,a,t,n,_,m,i,l,r;document.title=o=f[1].site_title;let e=f[0]&&q(f);return{c(){s=x(),a=h("main"),t=h("div"),n=h("h1"),_=k("blu (w/ sveltekit)"),m=x(),i=h("div"),l=k("development in progress..."),r=x(),e&&e.c(),this.h()},l(c){H('[data-svelte="svelte-80v34a"]',document.head).forEach(d),s=I(c),a=p(c,"MAIN",{class:!0});var D=g(a);t=p(D,"DIV",{class:!0});var b=g(t);n=p(b,"H1",{class:!0});var M=g(n);_=E(M,"blu (w/ sveltekit)"),M.forEach(d),m=I(b),i=p(b,"DIV",{class:!0});var R=g(i);l=E(R,"development in progress..."),R.forEach(d),r=I(b),e&&e.l(b),b.forEach(d),D.forEach(d),this.h()},h(){w(n,"class","text-4xl font-bold mb-4"),w(i,"class","mb-4"),w(t,"class","flex flex-col bg-gray-300 rounded shadow-lg pr-12 pl-8 py-8"),w(a,"class","flex flex-col items-center justify-center w-screen h-screen")},m(c,v){y(c,s,v),y(c,a,v),u(a,t),u(t,n),u(n,_),u(t,m),u(t,i),u(i,l),u(t,r),e&&e.m(t,null)},p(c,[v]){v&2&&o!==(o=c[1].site_title)&&(document.title=o),c[0]?e?e.p(c,v):(e=q(c),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},i:V,o:V,d(c){c&&d(s),c&&d(a),e&&e.d()}}}function G(f,o,s){let a;K(f,W,n=>s(1,a=n));let t=!1;return L(async()=>{a.user_id&&$.api_fetch({url:"https://api.oceancompaniesok.com/blu/dashboard",authenticated:!0,data:{}}).then(n=>{n.success&&s(0,t=n)})}),[t,a]}class Q extends S{constructor(o){super();A(this,o,G,z,C,{})}}export{Q as default};