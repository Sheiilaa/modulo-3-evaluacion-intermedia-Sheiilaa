(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(7),s=t.n(c),l=t(6),o=t(2),r=t(8),i=(t(13),t(0));var b=function(){var e=Object(a.useState)(r),n=Object(o.a)(e,2),t=n[0],c=n[1],s=Object(a.useState)(""),b=Object(o.a)(s,2),j=b[0],d=b[1],u=Object(a.useState)(!1),O=Object(o.a)(u,2),m=O[0],h=O[1],p=Object(a.useState)(!1),x=Object(o.a)(p,2),f=x[0],k=x[1],_=Object(a.useState)("all"),N=Object(o.a)(_,2),W=N[0],v=N[1],y=function(e){e.preventDefault();var n=e.currentTarget.id;t.splice(n,1),c(Object(l.a)(t))};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{className:"header__title",children:"Mis clubs"}),Object(i.jsxs)("form",{className:"header_form",children:[Object(i.jsx)("label",{htmlFor:"club",className:"header_form__label",children:"Mostrar "}),Object(i.jsxs)("select",{value:W,onChange:function(e){v(e.target.value)},className:"header_form__select",children:[Object(i.jsx)("option",{children:"Todos"}),Object(i.jsx)("option",{children:" Los que abren entre semana"}),Object(i.jsx)("option",{children:"Los que abren el fin de semana"})]})]})]}),Object(i.jsxs)("main",{children:[Object(i.jsx)("ul",{children:t.filter((function(e){return"openOnWeekDays"===W?!0===e.openOnWeekdays:"openOnWeekend"!==W||!0===e.openOnWeekend})).map((function(e,n){return Object(i.jsxs)("li",{id:n,className:"list__club",children:[Object(i.jsx)("h3",{className:"name__club",children:e.name}),Object(i.jsxs)("p",{className:"week__day",children:["Abierto entre semana: ",!0===e.openOnWeekdays?"si":"No"]}),Object(i.jsxs)("p",{className:"week__end",children:[" Abierto los fines de semana: ",!0===e.openOnWeekend?"si":"No"]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"button__delete",onClick:y,children:"X"})})]},n)}))}),Object(i.jsxs)("section",{className:"main__section",children:[Object(i.jsx)("h2",{className:"main__tittle",children:"A\xf1adir un nuevo club"}),Object(i.jsxs)("form",{className:"main__form",onSubmit:function(e){e.preventDefault(),t.push({name:j,openOnWeekdays:m,openOnWeekend:f}),c(Object(l.a)(t))},children:[Object(i.jsx)("label",{className:"form__label-club",children:" Nombre del club "}),Object(i.jsx)("input",{className:"form__input",type:"text",name:"name",id:"name",value:j,onChange:function(e){d(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"option1",children:"\xbfAbre entre semana?"}),Object(i.jsx)("input",{type:"checkbox",name:"option1",id:"option1",onChange:function(e){h(e.target.checked)},checked:m}),Object(i.jsx)("label",{htmlFor:"option2",children:"\xbfAbre los fines de  semana?"}),Object(i.jsx)("input",{type:"checkbox",name:"option2",id:"option2",onChange:function(e){k(e.target.checked)},checked:f}),Object(i.jsx)("input",{type:"submit",value:"A\xf1adir nuevo club",className:"new_club"})]})]})]})]})};s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.74223b16.chunk.js.map