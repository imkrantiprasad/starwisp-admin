(this.webpackJsonpstarwisp=this.webpackJsonpstarwisp||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(19),r=c.n(i),j=(c(26),c(27),c(11)),l=c(2),d=c(13),o=c(7);var b=function(e){e.key,e.index;var t=e.note;return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"note",children:Object(s.jsxs)("p",{children:["Title ",Object(s.jsx)("span",{className:"note-text",children:t.note})]})})})};var x=function(){var e=Object(a.useState)([{note:"Starwisp Assignment"},{note:"Learn graph data structure"}]),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),j=r[0],l=r[1],x=Object(a.useState)(""),m=Object(o.a)(x,2),h=m[0],O=m[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"search",children:Object(s.jsx)("input",{placeholder:"Search"})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"stat-box",children:[Object(s.jsxs)("div",{className:"left-stat",children:[Object(s.jsxs)("div",{className:"report-text",children:["Sales Report ",Object(s.jsx)("span",{className:"gray-text",children:"September 2020"})]}),Object(s.jsx)("img",{src:"/Images/graph.png",alt:"graph"})]}),Object(s.jsxs)("div",{className:"right-stat",children:[Object(s.jsx)("div",{className:"right-stat-head",children:"17 Sep"}),Object(s.jsxs)("div",{className:"box-1",children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"box-value",children:"$1,204.33"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"box-text",children:"Revenue"})]}),Object(s.jsxs)("div",{className:"box-2",children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"box-value",children:"$1,204.33"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"box-text",children:"Revenue"})]})]})]}),Object(s.jsxs)("div",{className:"notes",children:[Object(s.jsx)("div",{className:"note-head",children:"Notepad"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j?(!function(e){var t=[].concat(Object(d.a)(c),[{note:e}]);n(t)}(j),l("")):O("Please enter a Todo")},children:[Object(s.jsx)("input",{type:"text",value:j,onChange:function(e){h&&O(""),l(e.target.value)},placeholder:"Add note.."}),Object(s.jsx)("button",{children:" + "})]}),Object(s.jsx)("div",{className:"",children:c.map((function(e,t){return Object(s.jsx)(b,{index:t,note:e},t)}))})]})]})})};var m=function(e){e.key,e.index;var t=e.post;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"post",children:[Object(s.jsx)("img",{src:"/Images/dummy.jpg",alt:"user"}),Object(s.jsxs)("div",{className:"post-content",children:[Object(s.jsx)("div",{className:"time",children:"12:12 pm"}),Object(s.jsx)("div",{className:"name",children:"Teacher"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:t.msg})]})]})})};var h=function(){var e=Object(a.useState)([{msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliquaUtenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat"},{msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliquip ex ea commodo consequat"}]),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),j=r[0],l=r[1],b=Object(a.useState)(""),x=Object(o.a)(b,2),h=x[0],O=x[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"post-card",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j?(!function(e){var t=[].concat(Object(d.a)(c),[{msg:e}]);n(t),c.reverse()}(j),l("")):O("Please enter a Todo")},children:[Object(s.jsx)("input",{type:"text",value:j,onChange:function(e){h&&O(""),l(e.target.value)},placeholder:"Share something with your class..."}),Object(s.jsx)("div",{className:"cancel",children:Object(s.jsx)("a",{href:"##",children:"Cancel"})}),Object(s.jsx)("div",{className:"send",children:Object(s.jsx)("button",{type:"submit",children:"Share"})})]})}),Object(s.jsx)("div",{className:"posts",children:c.map((function(e,t){return Object(s.jsx)(m,{index:t,post:e},t)}))})]})})};var O=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(j.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("div",{className:"links",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{to:"/",className:"link",children:"Dashboard"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{to:"/post",className:"link",children:"Post"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{to:"/",className:"link",children:"Lorem"})})]})})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",component:x}),Object(s.jsx)(l.a,{exact:!0,path:"/post",component:h})]})]})})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),u()}},[[33,1,2]]]);
//# sourceMappingURL=main.4ef020cb.chunk.js.map