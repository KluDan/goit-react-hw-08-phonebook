"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[85],{669:function(n,e,t){t.d(e,{M:function(){return s}});var i,r=t(168),a=t(6487).ZP.button(i||(i=(0,r.Z)(["\n  margin-top: 30px;\n  font-size: clamp(1rem, 0.3rem + 2vw, 1.5rem);\n  font-weight: 600;\n  width: 100%;\n  padding: 12px 20px;\n  outline: none;\n  border: none;\n  border-radius: 15px;\n  background-color: #d4ae7a;\n  color: #000;\n  text-transform: uppercase;\n  @media screen and (max-width: 768px) {\n    display: block;\n    max-width: 300px;\n    margin: 20px auto;\n  }\n"]))),o=t(3329),s=function(n){var e=n.name;return(0,o.jsx)(a,{children:e})}},1576:function(n,e,t){t.r(e),t.d(e,{default:function(){return Fn}});var i,r,a,o,s,d,l,c,p,x,u,m,h,f,g,b,j,v,Z,w,y,C,k,P,z,S=t(9434),A=t(2791),F=t(208),I=t(6907),N=t(9439),q=t(6355),E=t(168),L=t(6487),T=L.ZP.div(i||(i=(0,E.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    background-color: transparent;\n    border: none;\n    svg {\n      width: 20px;\n      height: 20px;\n      @media screen and (min-width: 769px) and (max-width: 940px) {\n        width: 16px;\n        height: 16px;\n      }\n    }\n  }\n"]))),B=L.ZP.div(r||(r=(0,E.Z)(["\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-right: auto;\n  max-width: 240px;\n  width: 50%;\n  :first-child {\n    /*     width: clamp(6rem, 2rem + 10vw, 14rem); */\n    font-size: 24px;\n    font-weight: 600;\n    white-space: wrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  @media screen and (max-width: 768px) {\n    :first-child {\n      font-size: 20px;\n      max-width: 400px;\n      width: 100%;\n    }\n  }\n  @media screen and (min-width: 769px) and (max-width: 990px) {\n    font-size: 18px;\n    :first-child {\n      width: clamp(3rem, 2rem + 10vw, 16rem);\n      font-size: 20px;\n    }\n  }\n"]))),M=L.ZP.div(a||(a=(0,E.Z)(["\n  font-size: 26px;\n  letter-spacing: 2px;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background-color: #cdcbc7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 20px;\n  @media screen and (min-width: 769px) and (max-width: 990px) {\n    width: 60px;\n    height: 60px;\n    margin-right: 15px;\n  }\n"]))),_=t(3329),J=function(n){var e=n.contact,t=n.onEditClick,i=(0,S.I0)(),r=e.name.split(" ").map((function(n){return n[0]})).join("");return(0,_.jsxs)(T,{children:[(0,_.jsx)(M,{children:r}),(0,_.jsxs)(B,{children:[(0,_.jsx)("p",{children:e.name}),(0,_.jsx)("p",{children:e.number})]}),(0,_.jsx)("button",{onClick:function(){return e.id,void i((0,F.GK)(e.id))},children:(0,_.jsx)(q.Xm5,{})}),(0,_.jsx)("button",{onClick:function(){t(e)},children:(0,_.jsx)(q.fmQ,{})})]})},X=L.ZP.ul(o||(o=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  list-style: none;\n  padding: 20px 40px;\n  @media screen and (max-width: 940px) {\n    padding: 20px 20px;\n  }\n"]))),D=L.ZP.li(s||(s=(0,E.Z)(["\n  padding-bottom: 10px;\n  border-bottom: 1px solid black;\n"]))),R=t(5345),V=function(n){var e=n.onEditClick,t=(0,S.v9)(R.DI).slice().sort((function(n,e){var t=n.name.toLowerCase(),i=e.name.toLowerCase();return t.localeCompare(i)}));return(0,_.jsx)(X,{children:t.map((function(n){return(0,_.jsx)(D,{children:(0,_.jsx)(J,{contact:n,onEditClick:e})},n.id)}))})},K=t(4165),U=t(1413),$=t(5861),G=t(5705),Q=t(6727),W=(0,L.ZP)(G.l0)(d||(d=(0,E.Z)(["\n  width: 400px;\n  padding: 50px 30px 30px;\n  border-radius: 10px;\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  background: rgba(182, 145, 119, 0.6);\n  position: relative;\n  @media screen and (max-width: 480px) {\n    width: 100%;\n    max-width: 380px;\n    padding: 40px 20px;\n    gap: 30px;\n  }\n"]))),Y=L.ZP.div(l||(l=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  position: relative;\n"]))),H=(0,L.ZP)(G.gN)(c||(c=(0,E.Z)(["\n  width: 100%;\n  padding: 15px 10px;\n  border: none;\n  border-radius: 10px;\n  font-size: 24px;\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n"]))),O=(0,L.ZP)(G.Bc)(p||(p=(0,E.Z)(["\n  position: absolute;\n  top: 100%;\n  left: 12%;\n  color: red;\n  margin-top: 2px;\n  font-size: 18px;\n"]))),nn=L.ZP.label(x||(x=(0,E.Z)(["\n  display: block;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),en=t(669),tn=t(8820),rn=(0,L.ZP)(G.l0)(u||(u=(0,E.Z)(["\n  width: 400px;\n  padding: 50px 30px 30px;\n  border-radius: 10px;\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  background: rgba(182, 145, 119, 0.6);\n  position: relative;\n  @media screen and (max-width: 480px) {\n    width: 100%;\n    max-width: 380px;\n    padding: 40px 20px;\n    gap: 30px;\n  }\n"]))),an=L.ZP.div(m||(m=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  position: relative;\n"]))),on=(0,L.ZP)(G.gN)(h||(h=(0,E.Z)(["\n  width: 100%;\n  padding: 15px 10px;\n  border: none;\n  border-radius: 10px;\n  font-size: 24px;\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n"]))),sn=(0,L.ZP)(G.Bc)(f||(f=(0,E.Z)(["\n  position: absolute;\n  top: 100%;\n  left: 12%;\n  color: red;\n  margin-top: 2px;\n  font-size: 18px;\n"]))),dn=L.ZP.label(g||(g=(0,E.Z)(["\n  display: block;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ln=(0,L.ZP)(tn.SV5)(b||(b=(0,E.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  background-color: transparent;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n"]))),cn=L.ZP.div(j||(j=(0,E.Z)(["\n  font-size: 24px;\n  color: #0f5132;\n  width: 100%;\n  position: absolute;\n  bottom: 32%;\n  left: 50%;\n  transform: translateX(-35%);\n"]))),pn=function(n){var e=n.message,t=n.onClose,i=n.show;return(0,A.useEffect)((function(){if(i){var n=setTimeout((function(){t()}),3e3);return function(){return clearTimeout(n)}}}),[t,i]),i?(0,_.jsx)(cn,{children:e}):null},xn=Q.Ry().shape({name:Q.Z_().min(2,"Too Short!").required("It is a required field!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid")}),un=function(n){var e=n.onClose,t=(0,S.I0)(),i=(0,A.useState)(""),r=(0,N.Z)(i,2),a=r[0],o=r[1],s=(0,A.useState)(!1),d=(0,N.Z)(s,2),l=d[0],c=d[1],p=function(){var n=(0,$.Z)((0,K.Z)().mark((function n(e,i){var r;return(0,K.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.resetForm,n.next=3,t((0,F.uK)((0,U.Z)((0,U.Z)({},e),{},{number:a})));case 3:r(),o(""),c(!0);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(G.J9,{initialValues:{name:"",number:""},validationSchema:xn,onSubmit:p,children:(0,_.jsxs)(W,{children:[(0,_.jsx)(ln,{onClick:e}),(0,_.jsxs)(Y,{children:[(0,_.jsx)(nn,{htmlFor:"name",children:(0,_.jsx)(q.Xws,{})}),(0,_.jsx)(H,{id:"name",type:"text",name:"name",placeholder:"Name",title:"Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,_.jsx)(O,{name:"name",component:"div"})]}),(0,_.jsxs)(Y,{children:[(0,_.jsx)(nn,{htmlFor:"number",children:(0,_.jsx)(q.I7T,{})}),(0,_.jsx)(H,{id:"number",name:"number",type:"tel",placeholder:"Phone Number",title:"Phone number must be digits",value:a,onChange:function(n){var e=n.target.value.replace(/[^0-9]/g,""),t=e;e.length>=4&&"-"!==e.charAt(3)&&(t=e.slice(0,3)+"-"+e.slice(3)),e.length>=7&&"-"!==e.charAt(6)&&(t=t.slice(0,7)+"-"+t.slice(7)),t.length>12&&(t=t.slice(0,12)),o(t)},required:!0}),(0,_.jsx)(O,{name:"number",component:"div"})]}),(0,_.jsx)(en.M,{type:"submit",name:"add contact"}),(0,_.jsx)(pn,{message:"Contact successfully added!",onClose:function(){return c(!1)},show:l})]})})})},mn=t(348),hn=L.ZP.div(v||(v=(0,E.Z)(["\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background-color: #b39b86;\n  padding: 30px 40px;\n  input {\n    font-size: 24px;\n    width: 100%;\n    padding: 10px 10px 10px 35px;\n    border: 1px solid #d4ae7a;\n    border-radius: 10px;\n    position: relative;\n    &:focus {\n      outline: none;\n    }\n  }\n  svg {\n    width: 25px;\n    height: 25px;\n    position: absolute;\n    top: 50%;\n    left: 48px;\n    transform: translateY(-50%);\n    z-index: 20;\n  }\n"]))),fn=function(){var n=(0,S.v9)((function(n){return n.phonebook.filter})),e=(0,S.I0)();return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(hn,{children:[(0,_.jsx)(tn.RB5,{}),(0,_.jsx)("input",{type:"text",value:n,onChange:function(n){var t=n.target.value;e((0,R.Tv)(t))},placeholder:"Find contact"})]})})},gn=L.ZP.div(Z||(Z=(0,E.Z)(["\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n  padding-inline: 20px;\n  display: flex;\n  height: 93vh;\n  overflow: hidden;\n"]))),bn=L.ZP.div(w||(w=(0,E.Z)(["\n  flex: 0 1 40%;\n  background-color: rgba(153, 121, 94, 0.7);\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  overflow-y: auto;\n  position: relative;\n  @media screen and (max-width: 768px) {\n    flex: 100%;\n    width: 100%;\n  }\n"]))),jn=L.ZP.div(y||(y=(0,E.Z)(["\n  flex: 0 1 60%;\n\n  position: relative;\n  @media screen and (max-width: 768px) {\n    flex: 1;\n  }\n"]))),vn=L.ZP.div(C||(C=(0,E.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  @media screen and (max-width: 768px) {\n    position: static;\n    transform: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding-top: 100px;\n  }\n"]))),Zn=L.ZP.img(k||(k=(0,E.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 50%;\n"]))),wn=L.ZP.h2(P||(P=(0,E.Z)(["\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 50px;\n  @media screen and (max-width: 768px) {\n    font-size: clamp(2rem, 1rem + 4vw, 3rem);\n  }\n"]))),yn=L.ZP.div(z||(z=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  svg {\n    width: 30px;\n    height: 30px;\n  }\n  p {\n    font-size: 26px;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),Cn=t.p+"static/media/PhonebookImg.27787026a9b9cb68da84.jpg",kn=Q.Ry().shape({name:Q.Z_().min(2,"Too Short!").required("It is a required field!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid")}),Pn=function(n){var e=n.contactId,t=n.contactData,i=n.onClose,r=(0,S.I0)(),a=(0,A.useState)(t.number||""),o=(0,N.Z)(a,2),s=o[0],d=o[1],l=(0,A.useState)(!1),c=(0,N.Z)(l,2),p=c[0],x=c[1],u=function(){var n=(0,$.Z)((0,K.Z)().mark((function n(t){return(0,K.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r((0,F.mP)((0,U.Z)((0,U.Z)({id:e},t),{},{number:s})));case 2:x(!0);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(G.J9,{initialValues:{name:t.name||"",number:t.number||""},validationSchema:kn,onSubmit:u,children:(0,_.jsxs)(rn,{children:[(0,_.jsx)(ln,{onClick:i}),(0,_.jsxs)(an,{children:[(0,_.jsx)(dn,{htmlFor:"name",children:(0,_.jsx)(q.Xws,{})}),(0,_.jsx)(on,{id:"name",type:"text",name:"name",placeholder:"Name",title:"Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,_.jsx)(sn,{name:"name",component:"div"})]}),(0,_.jsxs)(an,{children:[(0,_.jsx)(dn,{htmlFor:"number",children:(0,_.jsx)(q.I7T,{})}),(0,_.jsx)(on,{id:"number",name:"number",type:"tel",placeholder:"Phone Number",title:"Phone number must be digits",value:s,onChange:function(n){var e=n.target.value.replace(/[^0-9]/g,""),t=e;e.length>=4&&"-"!==e.charAt(3)&&(t=e.slice(0,3)+"-"+e.slice(3)),e.length>=7&&"-"!==e.charAt(6)&&(t=t.slice(0,7)+"-"+t.slice(7)),t.length>12&&(t=t.slice(0,12)),d(t)},required:!0}),(0,_.jsx)(sn,{name:"number",component:"div"})]}),(0,_.jsx)(pn,{message:"Contact successfully edited!",onClose:function(){return x(!1)},show:p}),(0,_.jsx)(en.M,{type:"submit",name:"Edit contact"})]})})})},zn=t(8307),Sn=function(){return(0,_.jsx)("div",{children:(0,_.jsx)(zn.Fe,{height:"70",width:"100",color:"#090a09",ariaLabel:"line-wave",wrapperStyle:{padding:"0",marginLeft:"100px"},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""})})},An=function(){var n=(0,S.v9)(R.xU),e=(0,S.v9)(R.zh),t=(0,mn.a)("only screen and (max-width: 768px)",{initial:!0}),i=(0,A.useState)(!1),r=(0,N.Z)(i,2),a=r[0],o=r[1],s=(0,A.useState)(null),d=(0,N.Z)(s,2),l=d[0],c=d[1],p=(0,A.useState)(!1),x=(0,N.Z)(p,2),u=x[0],m=x[1],h=(0,A.useState)(!1),f=(0,N.Z)(h,2),g=f[0],b=f[1],j=(0,A.useState)(!0),v=(0,N.Z)(j,2),Z=v[0],w=v[1],y=(0,A.useState)(!t),C=(0,N.Z)(y,2),k=C[0],P=C[1],z=function(n){o(!0),c(n),m(!0),b(!1),t&&(w(!1),P(!0))},F=function(){o(!1),c(null),m(!1),b(!1),t&&(w(!0),P(!1))};return(0,_.jsxs)(gn,{children:[(0,_.jsxs)(bn,{style:{display:t&&!Z?"none":"flex"},children:[(0,_.jsx)(fn,{}),n&&!e&&(0,_.jsx)(Sn,{}),(0,_.jsxs)(yn,{children:[(0,_.jsx)(tn.vM4,{}),(0,_.jsx)("p",{onClick:function(){b(!0),m(!1),t&&(w(!1),P(!0))},children:"Add new contact"})]}),(0,_.jsx)(V,{onEditClick:z,onContactClick:function(n){a?c(n):z(n)}})]}),(0,_.jsxs)(jn,{style:{display:t&&!k?"none":"block"},children:[(0,_.jsx)(Zn,{src:Cn,alt:"Work table"}),(0,_.jsx)(vn,{children:g?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(wn,{children:"Create contact"}),(0,_.jsx)(un,{onClose:F})]}):u&&null!==l?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(wn,{children:"Update contact"}),(0,_.jsx)(Pn,{contactId:l.id,contactData:l,onClose:F})]}):null})]})]})};function Fn(){var n=(0,S.I0)();return(0,A.useEffect)((function(){n((0,F.yF)())}),[n]),(0,_.jsxs)(I.B6,{children:[(0,_.jsx)(I.ql,{children:(0,_.jsx)("title",{children:"Phonebook"})}),(0,_.jsx)(An,{})]})}}}]);
//# sourceMappingURL=85.6326e912.chunk.js.map