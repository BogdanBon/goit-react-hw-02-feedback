(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,i){e.exports={container:"Statistics_container__30xuo",item_good:"Statistics_item_good__3RvlL",item_neutral:"Statistics_item_neutral__3Mnzm",item_bad:"Statistics_item_bad__1VQ6t"}},function(e,t,i){e.exports={container:"Analitics_container__3A4jz",item:"Analitics_item__16Dmn"}},,function(e,t,i){e.exports={container:"Section_container__3qas_",title:"Section_title__2oIwe"}},,,,,function(e,t,i){e.exports={btn:"FeedbackOptions_btn__1rp9P"}},function(e,t,i){e.exports={item:"Notification_item__32I2G",color:"Notification_color__x4_4-"}},,,,,,,function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),c=i(6),s=i.n(c),o=(i(18),i(7)),r=i(8),l=i(9),d=i(13),u=i(12),j=i(10),b=i.n(j),h=i(0),v=function(e){var t=e.handleIncrement,i=e.options;return Object(h.jsx)("div",{children:Object.keys(i).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:b.a.btn,type:"button",onClick:function(){return t(e)},children:e})},e)}))})},_=i(5),m=i.n(_),x=function(e){var t=e.title,i=e.children;return Object(h.jsxs)("div",{className:m.a.container,children:[Object(h.jsx)("h2",{className:m.a.title,children:t}),i]})},O=i(2),p=i.n(O),f=function(e){var t=e.onReviewGood,i=e.onReviewNeutral,n=e.onReviewBad;return Object(h.jsxs)("div",{className:p.a.container,children:[Object(h.jsxs)("p",{className:p.a.item_good,children:["Good: ",t]}),Object(h.jsxs)("p",{className:p.a.item_neutral,children:["Neutral: ",i]}),Object(h.jsxs)("p",{className:p.a.item_bad,children:["Bad: ",n]})]})},w=i(3),N=i.n(w),k=function(e){var t=e.onTotalReviews,i=e.onPositiveReviews;return Object(h.jsxs)("div",{className:N.a.container,children:[Object(h.jsxs)("p",{className:N.a.item,children:[Object(h.jsx)("span",{children:"Total reviews:"}),Object(h.jsx)("span",{children:t})]}),Object(h.jsxs)("p",{className:N.a.item,children:[Object(h.jsx)("span",{children:"Positive feedback:"}),Object(h.jsx)("span",{children:i})]})]})},g=i(11),R=i.n(g),P=function(e){var t=e.message;return Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:R.a.item,children:t})})},V=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={good:e.props.initialValueGood,neutral:e.props.initialValueNeutral,bad:e.props.initialValueBad},e.handleIncrement=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(l.a)(i,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good+this.state.neutral+this.state.bad,t=this.state.good;return"".concat(Math.round(t/e*100)," %")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:this.state,handleIncrement:this.handleIncrement})}),this.countTotalFeedback()>0?Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{title:"Reviews statistics",children:Object(h.jsx)(f,{onReviewGood:this.state.good,onReviewNeutral:this.state.neutral,onReviewBad:this.state.bad})}),Object(h.jsx)(x,{title:"Reviews analitics",children:Object(h.jsx)(k,{onTotalReviews:this.countTotalFeedback(),onPositiveReviews:this.countPositiveFeedbackPercentage()})})]}):Object(h.jsx)("div",{children:Object(h.jsx)(x,{title:"Reviews statistics",children:Object(h.jsx)(P,{message:"\ud83e\udd37\u200d\u2640\ufe0f No feedback given yet \ud83e\udd37\u200d\u2642\ufe0f"})})})]})}}]),i}(a.a.Component);V.defaultProps={initialValueGood:0,initialValueNeutral:0,initialValueBad:0};var y=V;var S=function(){return Object(h.jsx)(y,{initialValueGood:0,initialValueNeutral:0,initialValueBad:0})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.05a97a33.chunk.js.map