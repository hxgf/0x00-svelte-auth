import{S as K,i as L,s as N,k as x,e as f,t as M,M as O,d as n,m as S,c as _,a as h,h as V,b as v,g as A,L as o,j as B,K as C}from"../chunks/vendor-4da64e94.js";function P(a){let r,i,l,s,t,g,p,y,d,u,m=a[0].message+"",E,D;return document.title=r="Error: "+a[1]+" - "+a[0].message,{c(){i=x(),l=f("body"),s=f("main"),t=f("div"),g=M("Error: "),p=M(a[1]),y=x(),d=f("div"),u=f("p"),E=M(m),D=x(),this.h()},l(e){O('[data-svelte="svelte-16009l6"]',document.head).forEach(n),i=S(e),l=_(e,"BODY",{class:!0});var j=h(l);s=_(j,"MAIN",{class:!0});var b=h(s);t=_(b,"DIV",{class:!0});var I=h(t);g=V(I,"Error: "),p=V(I,a[1]),I.forEach(n),y=S(b),d=_(b,"DIV",{class:!0});var q=h(d);u=_(q,"P",{class:!0});var k=h(u);E=V(k,m),k.forEach(n),D=S(q),q.forEach(n),b.forEach(n),j.forEach(n),this.h()},h(){v(t,"class","font-semibold text-6xl mb-4"),v(u,"class","text-2xl mb-5"),v(d,"class","pl-1"),v(s,"class","p-10"),v(l,"class","bg-gray-100 text-gray-500")},m(e,c){A(e,i,c),A(e,l,c),o(l,s),o(s,t),o(t,g),o(t,p),o(s,y),o(s,d),o(d,u),o(u,E),o(d,D)},p(e,[c]){c&3&&r!==(r="Error: "+e[1]+" - "+e[0].message)&&(document.title=r),c&2&&B(p,e[1]),c&1&&m!==(m=e[0].message+"")&&B(E,m)},i:C,o:C,d(e){e&&n(i),e&&n(l)}}}function z({error:a,status:r}){return{props:{error:a,status:r}}}function Y(a,r,i){let{error:l,status:s}=r;return a.$$set=t=>{"error"in t&&i(0,l=t.error),"status"in t&&i(1,s=t.status)},[l,s]}class F extends K{constructor(r){super();L(this,r,Y,P,N,{error:0,status:1})}}export{F as default,z as load};