(this.webpackJsonpready=this.webpackJsonpready||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(4),u=n.n(o),i=n(2),s=n(0);function a(e){var t=e.initialCount;console.log("Render Counter");var n=Object(r.useState)(t),c=Object(i.a)(n,2),o=c[0],u=c[1],a=Object(r.useContext)(l);return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{style:a,onClick:function(){return u((function(e){return e-1}))},children:"-"}),Object(s.jsx)("span",{children:o}),Object(s.jsx)("button",{style:a,onClick:function(){return u((function(e){return e+1}))},children:"+"})]})}var l=c.a.createContext();var j=function(){console.log("Render App");var e=Object(r.useState)("red"),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(l.Provider,{value:{backgroundColor:n},children:[Object(s.jsx)(a,{initialCount:1}),Object(s.jsx)("button",{onClick:function(){return c((function(e){return"red"===e?"blue":"red"}))},children:"Toggle Theme"})]})};u.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7781260d.chunk.js.map