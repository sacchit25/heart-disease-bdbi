(this["webpackJsonpheart-disease-bdbi"]=this["webpackJsonpheart-disease-bdbi"]||[]).push([[0],{65:function(e,t,a){},66:function(e,t,a){},86:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(16),r=a.n(n),c=(a(65),a(66),a.p+"static/media/electro-blue-heart.1944c29e.jpeg"),l=a(14),o=a(18),d=a(19),j=a(22),h=a(21),m=a(13),u=a(7),b=(a(67),a(86),a(55)),p=a(0),x=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t=e.target.value,a=e.target.name,i=s.state.formData;i[a]=t,s.setState({formData:i})},s.handlePredictClick=function(e){var t=s.state.formData;s.setState({isLoading:!0}),fetch("http://127.0.0.1:5000/prediction",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){s.setState({result:e.result,isLoading:!1})}))},s.state={isLoading:!1,formData:{Age:4,Sex:"Male",CP:1,TrestBps:0,Cholesterol:0,FBS:0,restecg:0,thalach:0,exang:0,oldPeak:0},result:""},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.isLoading,t=(this.state.formData,this.state.result);return Object(p.jsx)("div",{className:"background",children:Object(p.jsxs)("div",{className:"Form",children:[Object(p.jsxs)("form",{children:[Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"Age"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{type:"text"})})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextPassword",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"Sex"}),Object(p.jsx)(u.a.Check,{type:"radio",label:"1",name:"formHoriRadios"}),Object(p.jsx)(u.a.Check,{type:"radio",label:"0",name:"formHoriRadios"})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"cp"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{type:"text"})})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"trestbps"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{type:"text"})})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"chol"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{})})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"fbs"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{})})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"restecg"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{})})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"thalach"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{})})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"exang"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{})})]}),Object(p.jsxs)(u.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",onChange:this.handleChange,children:[Object(p.jsx)(u.a.Label,{column:!0,sm:"2",children:"old peak"}),Object(p.jsx)(b.a,{sm:"10",children:Object(p.jsx)(u.a.Control,{})})]}),Object(p.jsx)(l.a,{block:!0,variant:"success",disabled:e,onClick:e?null:this.handlePredictClick,children:e?"Making prediction":"Predict"})]}),""===t?null:Object(p.jsx)(m.a,{children:Object(p.jsx)(b.a,{className:"result-container",children:Object(p.jsx)("h5",{id:"result",children:t})})})]})})}}]),a}(i.a.Component);var O=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:c,className:"img-bg",alt:"logo"}),Object(p.jsx)("p",{className:"text",children:"Heart Disease Predictor"}),Object(p.jsxs)("div",{className:"btn-wrap",children:[Object(p.jsx)(l.a,{className:"button",variant:"primary",href:"Form",children:" Start "}),Object(p.jsx)(l.a,{className:"button",variant:"primary",href:"Login",children:" Login "}),Object(p.jsx)(l.a,{className:"button",variant:"primary",href:"Registration",children:" Registration "}),Object(p.jsx)(l.a,{className:"button",variant:"primary",href:"Tips",children:" Tips "})]})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,93)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),i(e),n(e),r(e)}))},f=a(32),v=a(54),y=a(53),C=a(56),w=a(27),P=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={username:"",password:""},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"loginForm",children:Object(p.jsxs)(w.a,{fluid:"md",children:[Object(p.jsx)(m.a,{children:Object(p.jsx)("h1",{style:S.header,children:"Login"})}),Object(p.jsx)(m.a,{children:Object(p.jsxs)(u.a,{style:S.form,children:[Object(p.jsxs)(f.a,{style:S.formGroup,children:[Object(p.jsx)(v.a,{children:"Email"}),Object(p.jsx)(y.a,{type:"email",placeholder:"Email"})]}),Object(p.jsxs)(f.a,{style:S.formGroup,children:[Object(p.jsx)(v.a,{children:"Password"}),Object(p.jsx)(y.a,{type:"password",placeholder:"Password"}),Object(p.jsx)(C.a,{children:"Don't share your password with others."})]}),Object(p.jsx)(l.a,{id:"submitForm",style:S.button,children:"Submit"}),Object(p.jsx)(f.a,{children:Object(p.jsx)("a",{href:"",style:S.formGroup,children:"Forgot password?"})})]})})]})})}},{key:"onUsernameChange",value:function(e){this.state={username:e,password:this.state.password}}},{key:"onPasswordChange",value:function(e){this.state={username:this.state.username,password:e}}},{key:"handleSubmit",value:function(){}}]),a}(i.a.Component),S={header:{width:"50%",height:"3vh",fontSize:"200%",textAlign:"",paddingBottom:"4%",paddingTop:"4%",margin:"auto"},button:{},form:{paddingBottom:"1%",width:"50%",margin:"auto"},formGroup:{paddingBottom:"1%"}},N=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={username:"",password:""},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"registrationForm",children:Object(p.jsxs)(w.a,{fluid:"md",children:[Object(p.jsx)(m.a,{children:Object(p.jsx)("h1",{style:L.header,children:"Sign Up"})}),Object(p.jsx)(m.a,{children:Object(p.jsxs)(u.a,{style:L.form,children:[Object(p.jsxs)(f.a,{style:L.formGroup,children:[Object(p.jsx)(v.a,{children:"First Name"}),Object(p.jsx)(y.a,{type:"",placeholder:"First Name"})]}),Object(p.jsxs)(f.a,{style:L.formGroup,children:[Object(p.jsx)(v.a,{children:"Last Name"}),Object(p.jsx)(y.a,{type:"",placeholder:"Last Name"})]}),Object(p.jsxs)(f.a,{style:L.formGroup,children:[Object(p.jsx)(v.a,{children:"Email"}),Object(p.jsx)(y.a,{type:"email",placeholder:"Email"})]}),Object(p.jsxs)(f.a,{style:L.formGroup,children:[Object(p.jsx)(v.a,{children:"Password"}),Object(p.jsx)(y.a,{type:"password",placeholder:"Password"})]}),Object(p.jsxs)(f.a,{style:L.formGroup,children:[Object(p.jsx)(v.a,{children:"Confirm Password"}),Object(p.jsx)(y.a,{type:"password",placeholder:"Confirm Password"})]}),Object(p.jsx)(l.a,{id:"submitForm",style:L.button,children:"Submit"})]})})]})})}},{key:"onUsernameChange",value:function(e){this.state={username:e,password:this.state.password}}},{key:"onPasswordChange",value:function(e){this.state={username:this.state.username,password:e}}},{key:"handleSubmit",value:function(){}}]),a}(i.a.Component),L={header:{width:"50%",height:"3vh",fontSize:"200%",textAlign:"",paddingBottom:"4%",paddingTop:"4%",margin:"auto"},button:{},form:{paddingBottom:"1%",width:"50%",margin:"auto"},formGroup:{paddingBottom:"1%"}},k=a(60),G=a(25),I=a(24),q=a(23),A=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={tempMsgA:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia facilisis libero, vitae accumsan metus condimentum nec. Nulla bibendum posuere condimentum. Aenean lacinia nulla vitae leo volutpat finibus. Morbi finibus pretium tincidunt. Cras quis eros quis augue dictum pulvinar. Nulla tempor feugiat eros, tempus iaculis nisi. Suspendisse lacinia gravida urna, sit amet pretium ante aliquam sit amet. Etiam vel risus ullamcorper, hendrerit risus vitae, mollis turpis. Curabitur nec magna at odio molestie luctus quis eget justo. Aenean consectetur nisl quis quam placerat, ut tempus tellus ornare. Praesent sollicitudin nisi vestibulum ligula venenatis, ac pulvinar quam pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed enim nulla. Pellentesque convallis mauris quis mi varius, et tristique justo interdum. Morbi porta odio eu eros venenatis, sed feugiat enim condimentum. Fusce magna nisi, consectetur ac risus ac, efficitur consectetur purus.",tempMsgB:"TLDR: Aliquam ut orci id orci euismod posuere porta ac sapien. Praesent faucibus enim quis augue eleifend, a egestas quam bibendum. Vestibulum sit amet finibus arcu. Nam nisi massa."},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(w.a,{fluid:"md",children:[Object(p.jsx)(m.a,{style:F.rowStyle,children:Object(p.jsxs)("div",{id:"highRiskTips",style:F.tipsContainer,children:[Object(p.jsx)("h1",{id:"rHeader",style:F.rHeader,children:"Tips to reduce risk of heart disease (prevantitive measures):"}),Object(p.jsx)("p1",{id:"rParagraph",style:F.rParagraph,children:this.state.tempMsgA}),Object(p.jsxs)("u1",{style:F.list,children:[Object(p.jsx)("li",{children:"Item1"}),Object(p.jsx)("li",{children:"Item2"}),Object(p.jsx)("li",{children:"Item3"}),Object(p.jsx)("li",{children:"Item4"})]}),Object(p.jsx)("div",{id:"tldr",style:F.tldr,children:this.state.tempMsgB})]})}),Object(p.jsx)(m.a,{style:F.rowStyle,children:Object(p.jsxs)("div",{id:"lowRiskTips",style:F.tipsContainer,children:[Object(p.jsx)("h1",{id:"rHeader",style:F.rHeader,children:"Tips to maintain good health for low risk patients:"}),Object(p.jsx)("p1",{id:"rParagraph",style:F.rParagraph,children:this.state.tempMsgA}),Object(p.jsxs)("u1",{style:F.list,children:[Object(p.jsx)("li",{children:"Item1"}),Object(p.jsx)("li",{children:"Item2"}),Object(p.jsx)("li",{children:"Item3"}),Object(p.jsx)("li",{children:"Item4"})]}),Object(p.jsx)("div",{id:"tldr",style:F.tldr,children:this.state.tempMsgB})]})}),Object(p.jsx)(m.a,{style:F.rowStyle,children:Object(p.jsxs)("div",{id:"faq",children:[Object(p.jsx)("h1",{id:"rHeader",style:F.rHeader,children:"Frequently Asked Questions"}),Object(p.jsxs)(k.a,{style:F.faq,defaultActionKey:"0",children:[Object(p.jsxs)(q.a,{eventKey:"0",children:[Object(p.jsx)(I.a,{children:"Question 1"}),Object(p.jsx)(G.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia facilisis libero, vitae accumsan metus condimentum nec."})]}),Object(p.jsxs)(q.a,{eventKey:"1",children:[Object(p.jsx)(I.a,{children:"Question 2"}),Object(p.jsx)(G.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia facilisis libero, vitae accumsan metus condimentum nec."})]}),Object(p.jsxs)(q.a,{eventKey:"2",children:[Object(p.jsx)(I.a,{children:"Question 3"}),Object(p.jsx)(G.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia facilisis libero, vitae accumsan metus condimentum nec."})]}),Object(p.jsxs)(q.a,{eventKey:"3",children:[Object(p.jsx)(I.a,{children:"Question 4"}),Object(p.jsx)(G.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia facilisis libero, vitae accumsan metus condimentum nec."})]}),Object(p.jsxs)(q.a,{eventKey:"4",children:[Object(p.jsx)(I.a,{children:"Question 5"}),Object(p.jsx)(G.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia facilisis libero, vitae accumsan metus condimentum nec."})]})]})]})})]})}}]),a}(i.a.Component),F={rHeader:{width:"100%",height:"3vh",fontSize:"200%",textAlign:"center"},rParagraph:{width:"100%",height:"10vh",fontSize:"100%",textAlign:"center",padding:"0px"},tldr:{paddingTop:"0px",width:"100%",fontSize:"150%",textAlign:"center",padding:"0px"},tipsContainer:{paddingLeft:"5%",paddingRight:"5%"},list:{width:"100%",height:"10vh",fontSize:"100%",textAlign:"center",padding:"0px"},faq:{margin:"auto",width:"50%",height:"10vh",fontSize:"100%",padding:"10px"},rowStyle:{paddingBottom:"5%"}},E=(a(90),a(30)),T=a(6);r.a.render(Object(p.jsx)(E.a,{children:Object(p.jsxs)(T.c,{children:[Object(p.jsx)(T.a,{path:"/",element:Object(p.jsx)(O,{})}),Object(p.jsx)(T.a,{path:"/form",element:Object(p.jsx)(x,{})}),Object(p.jsx)(T.a,{path:"/login",element:Object(p.jsx)(P,{})}),Object(p.jsx)(T.a,{path:"/registration",element:Object(p.jsx)(N,{})}),Object(p.jsx)(T.a,{path:"/tips",element:Object(p.jsx)(A,{})})]})}),document.getElementById("root")),g()}},[[91,1,2]]]);
//# sourceMappingURL=main.55613c91.chunk.js.map