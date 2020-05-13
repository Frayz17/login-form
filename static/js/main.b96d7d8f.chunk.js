(this["webpackJsonplogin-form"]=this["webpackJsonplogin-form"]||[]).push([[0],{110:function(e,a,t){e.exports=t(120)},120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),i=t.n(o),c=t(163),l=t(159),m=t(123),s=t(154),d=Object(s.a)((function(){return{caption:{fontSize:11,color:"#43425d"}}})),u=function(){var e=d();return r.a.createElement(m.a,{className:e.caption,align:"center"},"Term of use. Privacy policy")},p=t(162),f=t(157),g=t(164),b=t(158),h=t(3),v=t(86),E=t(85),w=t(24),x=Object(s.a)((function(e){var a;return a={form:{display:"flex",width:400,flexDirection:"column",alignItems:"center"},input:{fontSize:15,marginBotton:50},params:{marginTop:20,marginBottom:100,color:"#43425d",fontFamily:"Poppins",fontSize:14,display:"flex",justifyContent:"space-between",width:"100%"},rememberMeWrapper:{display:"flex",flexDirection:"row",alignItems:"center"},checkboxLabel:{fontFamily:"Poppins",fontSize:14,marginLeft:6},forgotPassword:{color:"#43425d",fontFamily:"Poppins",textTransform:"none"},submit:{marginBottom:65,width:268,height:56,borderRadius:40,textTransform:"none",fontFamily:"Poppins",fontWeight:600},error:{color:"red",minHeight:20}},Object(w.a)(a,e.breakpoints.down("xs"),{form:{width:"85%"}}),Object(w.a)(a,"checkboxRoot",{"&:hover":{backgroundColor:"transparent"}}),Object(w.a)(a,"icon",{width:18,height:18,border:"1px solid #43425d",borderRadius:4,cursor:"pointer","input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}}),Object(w.a)(a,"checkedIcon",{backgroundColor:"#5fa01b","&:before":{display:"block",width:18,height:18,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"#568f1a"}}),a})),k=E.a({username:E.b().min(3).max(15).required(),password:E.b().min(8).max(60).required()}),y=function(){var e=x();return r.a.createElement(v.b,{initialValues:{username:"",password:""},validationSchema:k,onSubmit:function(e,a){setTimeout((function(){alert(JSON.stringify(e,null,2)),a.setSubmitting(!1)}),1e3)}},(function(a){var t=a.values,n=a.handleSubmit,o=a.handleChange,i=a.handleBlur;return r.a.createElement("form",{className:e.form,onSubmit:n},r.a.createElement(p.a,{variant:"standard",margin:"normal",name:"username",type:"text",fullWidth:!0,className:e.input,onChange:o,onBlur:i,value:t.name,placeholder:"Username"}),r.a.createElement("div",{className:e.error},r.a.createElement(v.a,{name:"username"})),r.a.createElement(p.a,{variant:"standard",margin:"normal",name:"password",fullWidth:!0,className:e.input,onChange:o,onBlur:i,value:t.password,placeholder:"Password"}),r.a.createElement("div",{className:e.error},r.a.createElement(v.a,{name:"password"})),r.a.createElement(c.a,{className:e.params},r.a.createElement(f.a,{control:r.a.createElement(g.a,{className:e.checkboxRoot,checkedIcon:r.a.createElement("span",{className:Object(h.a)(e.icon,e.checkedIcon)}),icon:r.a.createElement("span",{className:e.icon}),value:"remember",color:"primary"}),label:r.a.createElement(m.a,{className:e.checkboxLabel},"Remember Me")}),r.a.createElement(b.a,{className:e.forgotPassword},"Forgot Password")),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Login"))}))},N=t(98),j=t.n(N),O=t(99),C=t.n(O),S=Object(s.a)((function(e){var a;return a={root:{minHeight:"100vh"},actionPanel:{display:"flex",flexDirection:"column",justifyContent:"space-between",paddingBottom:20},image:{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},Object(w.a)(a,e.breakpoints.up("md"),{image:{backgroundImage:"url(".concat(C.a,")")}}),Object(w.a)(a,e.breakpoints.down("md"),{image:{backgroundImage:"url(".concat(j.a,")")}}),Object(w.a)(a,"header",{paddingTop:"10rem",display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Poppins",color:"#43425d"}),Object(w.a)(a,"title",{width:235,fontSize:36,fontWeight:300,textTransform:"uppercase",margin:0}),Object(w.a)(a,"titleCart",{color:"#5fa01b",fontWeight:800}),Object(w.a)(a,"role",{marginTop:20,marginBottom:65,color:"#A6A7AD",fontSize:18,fontWeight:400,textAlign:"center"}),a})),P=function(){var e=S();return r.a.createElement(l.a,{container:!0,component:"main",className:e.root},r.a.createElement(l.a,{item:!0,sm:!1,md:6,className:e.image}),r.a.createElement(l.a,{className:e.actionPanel,item:!0,xs:12,sm:12,md:6,elevation:6},r.a.createElement(c.a,{className:e.header},r.a.createElement(c.a,null,r.a.createElement("h2",{className:e.title},r.a.createElement("span",{className:e.titleCart},"Cart"),"&Order"),r.a.createElement(c.a,{className:e.role},"Admin")),r.a.createElement(y,null)),r.a.createElement(c.a,null,r.a.createElement(u,null))))},B=t(160);var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null),r.a.createElement(P,null))},W=t(100),z=t(161);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=Object(W.a)({typography:{fontFamily:["Poppins","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")},palette:{primary:{main:"#5fa01b"}}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z.a,{theme:F},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,a,t){e.exports=t.p+"static/media/background.20c11024.jpg"},99:function(e,a,t){e.exports=t.p+"static/media/background@2x.419119ec.jpg"}},[[110,1,2]]]);
//# sourceMappingURL=main.b96d7d8f.chunk.js.map