(this["webpackJsonpharry-site"]=this["webpackJsonpharry-site"]||[]).push([[0],{18:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(0),c=n.n(s),i=n(22),r=n.n(i),o=(n(55),n(44)),d=n(4),l=n(45),u=n(91),j=(n(56),n(90),n(89),n(87),n(88),n(92),n(84));n(38),n(57),Object(j.a)((function(e){return{root:{height:"100vh",backgroundColor:"#EEEEEE",direction:"column",flexGrow:1,justifyContent:"center"},intro:{paddingTop:500},hello:{position:"fixed",top:"500px"}}}));var m=n(8),h=n(7),b=n(10),f=n(9),O=(n(18),n(24),n(33)),x=n.n(O),_=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)(x.a,{filter:"blur(15px)",className:"animate__animated animate__fadeIn animate__delay-2s",children:Object(a.jsx)("div",{className:"glass",id:"frost",children:Object(a.jsx)("h1",{className:"title animate__animated animate__fadeIn animate__delay-3s",id:"hello",children:"Hello"})})})}}]),n}(c.a.Component),p=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"refresh-glass animate__animated animate__fadeInDown animate__delay-3s",id:"ref",children:Object(a.jsx)("h4",{className:"message",children:"Refresh to change the picture"})})}}]),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.count=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.count)}},{key:"tick",value:function(){8===this.state.seconds?(document.getElementById("ref").classList.remove("animate__fadeInDown","animate__delay-3s"),document.getElementById("ref").classList.add("animate__fadeOutUp"),this.setState({seconds:9})):this.state.seconds<8&&this.setState({seconds:this.state.seconds+1})}}]),n}(c.a.Component),v=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"blackout animate__animated animate__fadeInUp animate__delay-3s",children:Object(a.jsx)("h4",{className:"message animate__animated animate__fadeInDown animate__delay-4s",id:"message",style:{paddingTop:"5px"},children:"Scroll down"})})}}]),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.count=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.count)}},{key:"tick",value:function(){7===this.state.seconds?(document.getElementById("message").classList.remove("animate__fadeInDown","animate__delay-4s"),document.getElementById("message").classList.add("animate__fadeOutDown","animate__slow"),this.setState({seconds:8})):this.state.seconds<11?this.setState({seconds:this.state.seconds+1}):11===this.state.seconds&&(document.getElementById("message").classList.remove("animate__fadeOutDown"),document.getElementById("message").classList.add("animate__fadeInDown"),this.setState({seconds:4}))}}]),n}(c.a.Component),y=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"section",children:[Object(a.jsxs)("text",{className:"section-title",style:{textAlign:"end",marginRight:"80px"},children:["About ",Object(a.jsx)("br",{}),"Me"]}),Object(a.jsx)("div",{class:"v-line"}),Object(a.jsxs)("div",{className:"section-content",children:[Object(a.jsx)("text",{className:"section-text",children:"Currently studying at University of Toronto"}),Object(a.jsx)("text",{className:"section-text",children:"Computer Science Specialist, Software Engineering Stream"}),Object(a.jsx)("text",{className:"section-text",children:"4 years of software developing experience"})]})]})}}]),n}(c.a.Component),g=(c.a.Component,n.p+"static/media/Profile.672f94bb.jpg"),k=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"root animate__animated animate__fadeIn animate__delay-1s",id:"root",children:[Object(a.jsxs)("div",{className:"title-back",children:[Object(a.jsx)(p,{}),Object(a.jsx)(_,{}),Object(a.jsx)(v,{})]}),Object(a.jsx)(x.a,{filter:"blur(15px)",children:Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("div",{className:"imgCon",children:Object(a.jsx)("img",{src:g,alt:"A picture of me",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"100%"}})}),Object(a.jsx)(y,{})]})})]})}}]),n}(c.a.Component),I=n(43),N=n.n(I),w=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)(N.a,{children:Object(a.jsx)("h1",{children:"Some Text"})})}}]),n}(c.a.Component),C=Object(l.a)({palette:{type:"light",primary:{main:"#1976d2"},background:{default:"#fafafa",paper:"#fff"},text:{primary:"#444444"}}});var E=function(){return Object(a.jsx)(u.a,{theme:C,children:Object(a.jsx)(o.a,{children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(a.jsx)(k,{})}}),Object(a.jsx)(d.a,{exact:!0,path:"/test",render:function(){return Object(a.jsx)(w,{})}})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.29f72962.chunk.js.map