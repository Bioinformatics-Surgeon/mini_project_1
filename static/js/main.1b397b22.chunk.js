(this.webpackJsonpmobile_ui=this.webpackJsonpmobile_ui||[]).push([[0],{159:function(e,t,n){},1683:function(e,t,n){},1686:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(12),r=n.n(i),s=(n(159),n(35)),o=n(1692),u=n(50),l=n(19),j=n(1691),d=n(1689),b=n(24),m=n(21),O=n.n(m),h=[],x=function(){for(var e=[],t=0;t<8*Math.random()+2;t++)e.push({_id:O.a.datatype.uuid(),title:O.a.commerce.productName(),body:O.a.commerce.productDescription(),from:O.a.name.findName(),email:O.a.lorem.paragraph(),time:O.a.date.recent(),isRead:O.a.datatype.boolean()});return e};!function(){for(var e=[],t=0;t<3;t++)e.push({_id:O.a.datatype.uuid(),accountName:O.a.name.findName(),userName:O.a.internet.userName(),userEmail:O.a.internet.email(),userEmails:{0:{name:"Inbox",emails:x(),_id:O.a.datatype.uuid()},1:{name:"Drafts",emails:x(),_id:O.a.datatype.uuid()},2:{name:"Sent",emails:x(),_id:O.a.datatype.uuid()},3:{name:"Trash",emails:x(),_id:O.a.datatype.uuid()},4:{name:"Junk",emails:x(),_id:O.a.datatype.uuid()},5:{name:"My Folder",emails:x(),_id:O.a.datatype.uuid()},6:{name:"Person Folder",emails:x(),_id:O.a.datatype.uuid()}}});h=[].concat(e),console.log("API ACCOUNTS :",h)}();var f={getInitialAccounts:function(){return new Promise((function(e,t){h.length>0?e(h):t("Error occured when calling getAccounts")}))},getAccount:function(e){return new Promise((function(t,n){e?t(h[e]):n("Error with handleAccount()")}))}},p=n(11),g=(b.c.Item,j.a.Panel),y=function(e){var t=Object(c.useState)({}),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),u=(o[0],o[1]),m=Object(c.useState)(!1),h=Object(s.a)(m,2),x=h[0],y=h[1],_=Object(c.useState)(void 0),v=Object(s.a)(_,2),E=(v[0],v[1]),C=Object(l.f)().id;"/account/".concat(C);return Object(c.useEffect)((function(){return f.getAccount(C).then((function(e){i(e),u(e.userEmail),y(!0)})).catch((function(e){console.log(e)})),function(){i([])}}),[]),Object(p.jsx)(p.Fragment,{children:x?Object(p.jsx)(j.a,{accordion:!0,expandIconPosition:"right",onChange:function(e){console.log(e),E(e)},children:Object.keys(a.userEmails).map((function(e){var t=a.userEmails[e].emails,n=a.userEmails[e]._id,c=a.userEmails[e].name;return Object(p.jsx)(g,{header:c,forceRender:!0,style:{padding:"0px"},children:t.map((function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.e,{size:"lg"}),Object(p.jsxs)(b.b,{full:!0,children:[Object(p.jsx)(b.b.Header,{title:Object(p.jsx)("h4",{children:e.title}),thumb:O.a.image.avatar(),thumbStyle:{width:"32px",height:"32px",borderRadius:"50%"},extra:Object(p.jsx)("h6",{children:new Date(e.time).toLocaleTimeString()})}),Object(p.jsx)(b.b.Body,{children:Object(p.jsx)("div",{children:e.body})})]},e.id)]})}))},n)}))}):Object(p.jsx)(d.a,{})})},_=n(153),v=n(151),E=b.c.Item,C=function(e){var t=e.accounts,n=e.handleClick;return Object(p.jsx)(b.c,{children:t.map((function(e,t){return Object(p.jsx)(E,{extra:Object(p.jsxs)(o.b,{children:[Object(p.jsx)(b.a,{children:e.userEmails[0].emails.filter((function(e){return!1===e.isRead})).length}),Object(p.jsx)(u.b,{to:{pathname:"/account/".concat(t)},children:Object(p.jsx)(v.a,{onClick:n,type:"primary",shape:"round",icon:Object(p.jsx)(_.a,{}),size:"small",data:t})})]}),user_id:e._id,name:e.user_id,children:e.userEmail},e._id)}))})},w=n(37),S=n(1695),k=n(154),A=n(1694),I=n(1693),R=n(1690),N=function(){return Object(p.jsx)(R.a,{allowClear:!0,placeholder:"input search text",style:{width:200}})},P={ml_1:{marginLeft:"16px"},mr_1:{marginRight:"16px"},searchBox:{display:"flex",alignItems:"center"}},z=function(e){var t=e.badgeCount,n=e.icon,a=e.text,i=void 0===a?null:a,r=Object(c.useState)(!1),u=Object(s.a)(r,2),l=u[0],j=u[1],d=function(e){switch(e){case"reload":return Object(p.jsx)(S.a,{onClick:function(){window.location.reload()},style:Object(w.a)({},P.ml_1)});case"search":return Object(p.jsx)(k.a,{onClick:function(){j(!l)},style:Object(w.a)({},P.ml_1)});case"settings":return Object(p.jsx)(A.a,{style:Object(w.a)({},P.ml_1)});case"rightOutline":return Object(p.jsx)(_.a,{style:Object(w.a)({},P.ml_1)});case"mail":return Object(p.jsx)(I.a,{style:Object(w.a)({},P.mr_1)});default:return Object(p.jsx)(p.Fragment,{})}}(n);return Object(p.jsxs)(o.b,{direction:"horizontal",children:[l&&Object(p.jsx)(N,{}),Object(p.jsxs)(b.a,{text:t,style:l?Object.assign(P.ml_1,P.searchBox):Object(w.a)({},P.ml_1),children:[i&&i,d]})]})},F=function(e){var t=e.size,n=void 0===t?"default":t,c=e.icon,a=e.text,i=e.style,r=!!c,s=!!a;return Object(p.jsxs)(v.a,{size:n,style:Object(w.a)({},i),shape:"round",type:"primary",children:[r&&c,s&&a]})},B=["search","reload","settings"],J=function(e){var t=e.unReads;return Object(p.jsx)(b.d,{style:{backgroundColor:"#000"},leftContent:Object(p.jsx)(u.b,{to:"/home",children:Object(p.jsx)(z,{badgeCount:t,text:"JQ Mail"})}),rightContent:B.map((function(e,t){return Object(p.jsx)(z,{icon:e},t)}))})},M=function(){return Object(p.jsx)(b.d,{style:{backgroundColor:"#e4e8ec",position:"fixed",bottom:0,width:"100%"},leftContent:Object(p.jsx)(F,{text:"Account",icon:Object(p.jsx)(z,{icon:"mail"})}),rightContent:Object(p.jsx)(F,{text:"Edit"})})};n(1683);var D=function(e){var t=e.accounts;return Object(p.jsx)("div",{children:Object(p.jsxs)(o.b,{direction:"vertical",style:{width:"100%"},children:[Object(p.jsx)(C,{accounts:t}),Object(p.jsx)(M,{})]})})},T=function(e){var t=Object(c.useState)(0),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),o=Object(s.a)(r,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){return f.getInitialAccounts().then((function(e){d(e)})).catch((function(e){return console.log(e)})),function(){d([])}}),[]),Object(c.useEffect)((function(){var e=0,t=[];j.forEach((function(n){t=n.userEmails[0].emails.filter((function(e){return!1===e.isRead})),e+=t.length})),i(e)}),[j]),Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(J,{unReads:a}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/account/:id",children:Object(p.jsx)(y,{})}),Object(p.jsx)(l.a,{path:"/home",children:Object(p.jsx)(D,{accounts:j})}),Object(p.jsx)(l.a,{path:"/",children:Object(p.jsx)(D,{accounts:j})})]})]})})};n(1684),n(1685);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root"))}},[[1686,1,2]]]);
//# sourceMappingURL=main.1b397b22.chunk.js.map