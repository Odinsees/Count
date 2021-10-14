(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports={button:"Button_button__2as4r",disabled:"Button_disabled__jHtfX"}},15:function(e,t,a){e.exports={Content:"App_Content__3zI-R"}},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a(8),u=a.n(c),l=(a(21),a(7)),s=a(15),o=a.n(s),i=a(4),b=a.n(i),j=a(6),d=a.n(j),O=a(1),x=function(e){var t=e.value,a=e.maxValue;return e.warning?Object(O.jsx)("div",{className:d.a.WarningMessage,children:'Enter values and press "SET"'}):Object(O.jsx)("div",{className:t===a?"".concat(d.a.NumberMax," + ").concat(d.a.Number):d.a.Number,children:t})},p=a(13),_=a.n(p),m=function(e){var t=e.callBack,a=e.disabled,n=e.title;return Object(O.jsx)("button",{className:a?_.a.disabled:_.a.button,disabled:a,onClick:t,children:n})},g=function(e){var t=e.count===e.maxValue||e.error||e.warning,a=e.count<e.maxValue||e.error||e.warning||e.greeting;return Object(O.jsxs)("div",{className:b.a.Content,children:[Object(O.jsx)("div",{className:b.a.Number,children:e.greeting?Object(O.jsx)("div",{className:b.a.WarningMessage,children:"Hi! Set start and max value"}):e.error?Object(O.jsx)("div",{className:b.a.ErrorMessage,children:"ERROR! Incorrect value in Input!"}):Object(O.jsx)(x,{warning:e.warning,maxValue:e.maxValue,value:e.count})}),Object(O.jsxs)("div",{className:b.a.Button,children:[Object(O.jsx)("div",{className:b.a.addButton,children:Object(O.jsx)(m,{title:"inc",callBack:function(){return e.countUpHandlerCallBack()},disabled:t})}),Object(O.jsx)("div",{className:b.a.resetButtons,children:Object(O.jsx)(m,{title:"reset",callBack:function(){return e.countResetCallBack()},disabled:a})})]})]})},N=a(9),v=a.n(N),V=function(e){var t=e.value,a=e.callBack,n=e.error;return Object(O.jsx)("input",{className:n?"".concat(v.a.Input," + ").concat(v.a.ErrorInput):v.a.Input,type:"number",value:t,onChange:function(e){a(e)}})},S=a(5),E=a.n(S),f=function(e){var t=e.errorStart||e.errorMax||e.setButtonDisable;return Object(O.jsxs)("div",{className:E.a.Wrapper,children:[Object(O.jsxs)("div",{className:E.a.InputBox,children:[Object(O.jsxs)("div",{className:E.a.ValueInput,children:[Object(O.jsx)("span",{children:"Max value:"}),Object(O.jsx)(V,{value:e.maxValue,callBack:function(t){var a=+t.currentTarget.value;e.SetMaxValueCallBack(a)},error:e.errorMax})]}),Object(O.jsxs)("div",{className:E.a.ValueInput,children:[Object(O.jsx)("span",{children:"Start value:"}),Object(O.jsx)(V,{value:e.startValue,callBack:function(t){var a=+t.currentTarget.value;e.SetStartValueCallBack(a)},error:e.errorStart})]})]}),Object(O.jsx)("div",{className:E.a.Button,children:Object(O.jsx)(m,{callBack:function(){e.setItemInLocalStageCallBack()},title:"SET",disabled:t})})]})},I=a(3),B=a(2),T={startValue:0,maxValue:0,value:0,greeting:!0},C=function(e){return{type:"SET-START-VALUE",newStartValue:e}},h=function(e){return{type:"SET-MAX-VALUE",newMaxValue:e}},w=function(e){return{type:"SET-GREETING",newValue:e}},M=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.counter.startValue})),a=Object(I.c)((function(e){return e.counter.maxValue})),n=Object(I.c)((function(e){return e.counter.value})),c=Object(I.c)((function(e){return e.counter.greeting})),u=Object(r.useState)(!1),s=Object(l.a)(u,2),i=s[0],b=s[1],j=Object(r.useState)(!1),d=Object(l.a)(j,2),x=d[0],p=d[1],_=Object(r.useState)(!1),m=Object(l.a)(_,2),N=m[0],v=m[1],V=Object(r.useState)(!0),S=Object(l.a)(V,2),E=S[0],B=S[1];return Object(O.jsxs)("div",{className:o.a.Content,children:[Object(O.jsx)(f,{SetMaxValueCallBack:function(a){a>=0&&a>t&&a!==t&&t>=0?(v(!0),p(!1),b(!1),e(w(!1))):p(!0),e(h(a)),B(!1)},SetStartValueCallBack:function(t){t>=0&&t<a&&t!==a&&a>=0?(v(!0),b(!1),p(!1),e(w(!1))):b(!0),e(C(t)),B(!1)},setItemInLocalStageCallBack:function(){e(C(t)),e(h(a)),e({type:"RESET-COUNT"}),v(!1),B(!0)},maxValue:a,startValue:t,errorStart:i,errorMax:x,setButtonDisable:E}),Object(O.jsx)(g,{maxValue:a,startValue:t,count:n,countUpHandlerCallBack:function(){return n<=a&&e({type:"INCREMENT-COUNT"})},countResetCallBack:function(){return e({type:"RESET-COUNT"})},error:i||x,warning:N,greeting:c})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,u=t.getTTFB;a(e),n(e),r(e),c(e),u(e)}))},W=a(10),R=a(16),y=Object(W.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-MAX-VALUE":return Object(B.a)(Object(B.a)({},e),{},{maxValue:t.newMaxValue});case"SET-START-VALUE":return Object(B.a)(Object(B.a)({},e),{},{startValue:t.newStartValue});case"SET-COUNT-VALUE":return Object(B.a)(Object(B.a)({},e),{},{value:t.newCountValue});case"RESET-COUNT":return Object(B.a)(Object(B.a)({},e),{},{value:e.startValue});case"INCREMENT-COUNT":return Object(B.a)(Object(B.a)({},e),{},{value:e.value+1});case"SET-GREETING":return Object(B.a)(Object(B.a)({},e),{},{greeting:t.newValue});default:return e}}}),U=localStorage.getItem("appState");U&&(n=JSON.parse(U));var A=Object(W.c)(y,n,Object(W.a)(R.a));A.subscribe((function(){localStorage.setItem("appState",JSON.stringify(A.getState()))})),window.store=A,u.a.render(Object(O.jsx)(I.a,{store:A,children:Object(O.jsx)(M,{})}),document.getElementById("root")),k()},4:function(e,t,a){e.exports={Content:"NumberWindow_Content__1TAPa",Number:"NumberWindow_Number__2yGPy",Button:"NumberWindow_Button__37YlQ",ErrorMessage:"NumberWindow_ErrorMessage__2dL0F",WarningMessage:"NumberWindow_WarningMessage__tNH_S"}},5:function(e,t,a){e.exports={Wrapper:"ValueWindow_Wrapper__1Avdm",InputBox:"ValueWindow_InputBox__29O-j",ValueInput:"ValueWindow_ValueInput__1Tusj",Button:"ValueWindow_Button__1oDqz",Error:"ValueWindow_Error__3sjxQ"}},6:function(e,t,a){e.exports={Number:"Number_Number__jFJ1H",NumberMax:"Number_NumberMax__858Ir",WarningMessage:"Number_WarningMessage__2xsuR"}},9:function(e,t,a){e.exports={Input:"Input_Input__lNdxY",ErrorInput:"Input_ErrorInput__VN5gI",Error:"Input_Error__IaRD4"}}},[[27,1,2]]]);
//# sourceMappingURL=main.14504047.chunk.js.map