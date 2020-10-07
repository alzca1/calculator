(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(e,t,n){e.exports=n(31)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),i=n.n(l),c=n(8),s=n(6),o=n(1),u={value:null,displayValue:"0",pendingOperand:!1,symbol:null},p=function(e,t){var n=e.displayValue;return e.pendingOperand?Object(o.a)(Object(o.a)({},e),{},{displayValue:String(t),pendingOperand:!1}):Object(o.a)(Object(o.a)({},e),{},{displayValue:"0"===n?String(t):n+t})},d=function(e){var t=e.displayValue;return-1===t.indexOf(".")?Object(o.a)(Object(o.a)({},e),{},{displayValue:t+"."}):e},m=function(e){return"0"!==e.displayValue?Object(o.a)(Object(o.a)({},e),{},{displayValue:"0"}):Object(o.a)(Object(o.a)({},e),{},{displayValue:"0",value:null})},f=function(e){var t=e.displayValue;return Object(o.a)(Object(o.a)({},e),{},{displayValue:"-"===t.charAt(0)?t.substr(1):"-"+t})},b=function(e){var t=e.displayValue,n=parseFloat(t)/100;return Object(o.a)(Object(o.a)({},e),{},{displayValue:n})},y=function(e,t){var n=e.displayValue,a=e.symbol,r=e.value,l=parseFloat(n);if(null===r)return Object(o.a)(Object(o.a)({},e),{},{value:l,pendingOperand:!0,symbol:t});if(a){var i={"+":function(e,t){return e+t},"-":function(e,t){return e-t},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"=":function(e,t){return t}}[a](r||0,l);return Object(o.a)(Object(o.a)({},e),{},{value:i,displayValue:String(i),pendingOperand:!0,symbol:t})}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUTDIGIT":return p(e,t.digit);case"PERIOD":return d(e);case"CLEAR":return m(e);case"TOGGLESIGN":return f(e);case"PERCENT":return b(e);case"OPERATOR":return y(e,t.symbol);default:return e}},g=(n(25),n(26),n(2)),E=n(3),v=n(5),h=n(4),j=(n(27),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={scale:1},e}return Object(E.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.state.scale,t=this.node.offsetWidth,n=this.node.offsetParent.offsetWidth/t;e!==n&&(n<1&&this.setState({scale:n}),e<1&&this.setState({scale:1}))}},{key:"render",value:function(){var e=this,t=this.state.scale,n={position:"absolute",right:0,padding:"45px 5px 55px 10px",transform:"scale(".concat(t,", ").concat(t,")"),transformOrigin:"right",display:"inline-block"};return r.a.createElement("div",Object.assign({className:"ScalingText"},this.props),r.a.createElement("div",{style:n,ref:function(t){return e.node=t}},this.props.value))}}]),n}(a.Component)),N=(n(28),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Display"},r.a.createElement(j,{value:this.props.reduxValue}))}}]),n}(a.Component)),P=Object(s.b)((function(e){return{state:e,reduxValue:e.displayValue}}))(N),C=function(e){return r.a.createElement("div",{className:"Button"},r.a.createElement("button",e,e.label))},k=(n(29),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this,t="AC";return"0"!==this.props.displayValue&&(console.log(this.props.displayValue),t="C",console.log(t)),r.a.createElement("div",{className:"Keypad"},r.a.createElement("div",{className:"FunctionKeys"},r.a.createElement("div",{className:"UpperKeys"},r.a.createElement(C,{className:"UpperKey",onClick:this.props.onACPressed,label:t}),r.a.createElement(C,{className:"UpperKey",onClick:this.props.onToggleSign,label:"+/-"}),r.a.createElement(C,{className:"UpperKey",onClick:this.props.onAddingPercent,label:"%"})),r.a.createElement("div",{className:"DigitKeys"},r.a.createElement(C,{className:"DigitKey key0",onClick:function(){return e.props.onDigitPressed(0)},label:"0"}),r.a.createElement(C,{className:"DigitKey",onClick:this.props.onPeriodPressed,label:"."}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(1)},label:"1"}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(2)},label:"2"}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(3)},label:"3"}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(4)},label:"4"}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(5)},label:"5"}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(6)},label:"6"}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(7)},label:"7"}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(8)},label:"8"}),r.a.createElement(C,{className:"DigitKey",onClick:function(){return e.props.onDigitPressed(9)},label:"9"}))),r.a.createElement("div",{className:"OperatorKeys"},r.a.createElement(C,{className:"OperatorKey",onClick:function(){return e.props.onOperatorPressed("/")},label:"\xf7"}),r.a.createElement(C,{className:"OperatorKey",onClick:function(){return e.props.onOperatorPressed("*")},label:"x"}),r.a.createElement(C,{className:"OperatorKey",onClick:function(){return e.props.onOperatorPressed("-")},label:"-"}),r.a.createElement(C,{className:"OperatorKey",onClick:function(){return e.props.onOperatorPressed("+")},label:"+"}),r.a.createElement(C,{className:"OperatorKey",onClick:function(){return e.props.onOperatorPressed("=")},label:"="})))}}]),n}(a.Component)),D=Object(s.b)((function(e){return{value:e.value,displayValue:e.displayValue}}),(function(e){return{onDigitPressed:function(t){return e({type:"INPUTDIGIT",digit:t})},onPeriodPressed:function(){return e({type:"PERIOD"})},onACPressed:function(){return e({type:"CLEAR"})},onToggleSign:function(){return e({type:"TOGGLESIGN"})},onAddingPercent:function(){return e({type:"PERCENT"})},onOperatorPressed:function(t){return e({type:"OPERATOR",symbol:t})}}}))(k),K=(n(30),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Calculator"},r.a.createElement(P,null),r.a.createElement(D,null))}}]),n}(a.Component));var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=Object(c.b)(O);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(s.a,{store:T},r.a.createElement(V,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a67a97e2.chunk.js.map