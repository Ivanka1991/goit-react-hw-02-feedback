(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports={btn:"feedback_btn__1H9iA"}},11:function(e,t,a){e.exports={message:"notification_message__3ZG6v"}},18:function(e,t,a){},2:function(e,t,a){e.exports={statistic__info:"statistic_statistic__info__2ttxU",info__item__good:"statistic_info__item__good__3APIB",info__item__neutral:"statistic_info__item__neutral__2jhct",info__item__bad:"statistic_info__item__bad__fpRWB",info__item:"statistic_info__item__3y9FY"}},22:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(6),s=a.n(c),o=(a(18),a(7)),r=a(8),_=a(9),d=a(13),l=a(12),b=a(4),u=a.n(b),j=a(0),f=function(e){var t=e.title,a=e.children;return Object(j.jsxs)("div",{className:u.a.feedback,children:[Object(j.jsx)("h2",{className:u.a.title,children:t}),a]})},m=a(5),h=a.n(m),v=a(10),p=a.n(v),x=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)("button",{className:p.a.btn,type:"button","data-feedback":e,onClick:a,children:e},e)}))})};x.ProtoTypes={options:h.a.array,onLeaveFeedback:h.a.func.isRequired};var O=x,g=a(11),k=a.n(g);function F(e){var t=e.message;return Object(j.jsx)("p",{className:k.a.message,children:t})}var N=a(2),y=a.n(N),P=function(e){var t=e.good,a=e.neutral,n=e.bad,i=e.total,c=e.positiveFeedbackPercentage;return Object(j.jsx)(j.Fragment,{children:i?Object(j.jsxs)("ul",{className:y.a.statistic__info,children:[Object(j.jsxs)("li",{className:y.a.info__item__good,children:["Good : ",t]}),Object(j.jsxs)("li",{className:y.a.info__item__neutral,children:["Neutral : ",a]}),Object(j.jsxs)("li",{className:y.a.info__item__bad,children:["Bad : ",n]}),Object(j.jsxs)("li",{className:y.a.info__item,children:["Total : ",i]}),Object(j.jsxs)("li",{className:y.a.info__item,children:["Positive feedback : ",c," %"]})]}):Object(j.jsx)(F,{message:"No feedback given"})})},T=["good","bad","neutral"],B=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.bad+t.neutral},e.countPositiveFeedback=function(){var t=e.countTotalFeedback(),a=100*e.state.good/t;return Math.round(a)},e.handleFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e}return Object(_.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,i=this.countTotalFeedback(),c=this.countPositiveFeedback();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{title:"Please leave feedback",children:Object(j.jsx)(O,{options:T,onLeaveFeedback:this.handleFeedback})}),Object(j.jsx)(f,{title:"Statistics",children:Object(j.jsx)(P,{good:t,neutral:a,bad:n,total:i,positiveFeedbackPercentage:c})})]})}}]),a}(n.Component);s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={title:"section_title__3p8Cv"}}},[[22,1,2]]]);
//# sourceMappingURL=main.679d8bf3.chunk.js.map