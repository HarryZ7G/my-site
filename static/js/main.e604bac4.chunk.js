(this["webpackJsonpharry-site"]=this["webpackJsonpharry-site"]||[]).push([[0],{13:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(14),r=n.n(i),l=(n(20),n(3)),d=n(2),o=n(5),j=n(4),m=n(6),u=n.n(m),b=(n(13),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"section",children:[Object(a.jsx)(u.a,{right:!0,delay:300,children:Object(a.jsxs)("h1",{className:"section-title",children:["About ",Object(a.jsx)("br",{}),"Me"]})}),Object(a.jsxs)(u.a,{delay:600,children:[Object(a.jsx)("div",{className:"v-line"}),Object(a.jsxs)("div",{className:"section-content",children:[Object(a.jsx)("h3",{className:"section-text",children:"Currently studying at University of Toronto"}),Object(a.jsx)("h3",{className:"section-text",children:"Computer Science Specialist, Software Engineering Stream"}),Object(a.jsx)("h3",{className:"section-text",children:"4 years of software developing experience"})]})]})]})}}]),n}(c.a.Component)),h=(n(7),n(8),n(10)),O=n.n(h),f=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(O.a,{filter:"blur(15px)",className:"animate__animated animate__fadeIn animate__delay-2s",children:Object(a.jsx)("div",{className:"glass",id:"frost",children:Object(a.jsx)("h1",{className:"title animate__animated animate__fadeIn animate__delay-3s",id:"hello",children:"Hello"})})})}}]),n}(c.a.Component),x=n.p+"static/media/Profile.672f94bb.jpg",v=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(u.a,{delay:300,children:Object(a.jsx)("div",{className:"imgCon",children:Object(a.jsx)("img",{src:x,alt:"A picture of me",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"100%"}})})})}}]),n}(c.a.Component),_=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"refresh-glass animate__animated animate__fadeInDown animate__delay-3s",id:"ref",children:Object(a.jsx)("h4",{className:"message",children:"Refresh to change the picture"})})}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.count=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.count)}},{key:"tick",value:function(){8===this.state.seconds?(document.getElementById("ref").classList.remove("animate__fadeInDown","animate__delay-3s"),document.getElementById("ref").classList.add("animate__fadeOutUp"),this.setState({seconds:9})):this.state.seconds<8&&this.setState({seconds:this.state.seconds+1})}}]),n}(c.a.Component),y=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.count=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.count)}},{key:"tick",value:function(){7===this.state.seconds?(document.getElementById("message").classList.remove("animate__fadeInDown","animate__delay-4s"),document.getElementById("message").classList.add("animate__fadeOutDown","animate__slow"),this.setState({seconds:8})):this.state.seconds<11?this.setState({seconds:this.state.seconds+1}):11===this.state.seconds&&(document.getElementById("message").classList.remove("animate__fadeOutDown"),document.getElementById("message").classList.add("animate__fadeInDown"),this.setState({seconds:4}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"blackout animate__animated animate__fadeIn animate__delay-3s",children:Object(a.jsx)("h4",{className:"message animate__animated animate__fadeInDown animate__delay-4s",id:"message",style:{paddingTop:"5px"},children:"Scroll down"})})}}]),n}(c.a.Component),g=n.p+"static/media/FrontEnd.20eda6ba.svg",p=n.p+"static/media/BackEnd.de6f4cd3.svg",N=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"section",children:[Object(a.jsx)(u.a,{right:!0,delay:300,children:Object(a.jsxs)("text",{className:"section-title",style:{textAlign:"end"},children:["My",Object(a.jsx)("br",{}),"Skills"]})}),Object(a.jsx)(u.a,{delay:600,children:Object(a.jsx)("div",{className:"v-line"})}),Object(a.jsxs)("div",{className:"section-content",style:{flexDirection:"row"},children:[Object(a.jsx)(u.a,{delay:600,children:Object(a.jsxs)("div",{className:"section-icon",style:{marginLeft:"5vw"},children:[Object(a.jsx)("div",{className:"circle",children:Object(a.jsx)("img",{className:"icon-front",src:g})}),Object(a.jsx)("text",{className:"section-des",children:"Frontend"})]})}),Object(a.jsx)(u.a,{delay:800,children:Object(a.jsx)("div",{className:"h-line"})}),Object(a.jsx)(u.a,{delay:1e3,children:Object(a.jsxs)("div",{className:"section-icon",children:[Object(a.jsx)("div",{className:"circle",children:Object(a.jsx)("img",{className:"icon-back",src:p})}),Object(a.jsx)("text",{className:"section-des",children:"Backend"})]})})]})]})}}]),n}(c.a.Component),k=(n(25),n(26),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){window.addEventListener("scroll",(function(){window.pageYOffset<window.innerHeight/2?document.getElementById("back").style.filter="blur(".concat(window.pageYOffset/(window.innerHeight/2)*15,"px)"):document.getElementById("back").style.filter="blur(15px)"}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"root",id:"root",children:[Object(a.jsx)("div",{className:"background animate__animated animate__fadeIn animate__delay-1s",id:"back"}),Object(a.jsxs)("div",{className:"title-back",children:[Object(a.jsx)(_,{}),Object(a.jsx)(f,{}),Object(a.jsx)(y,{})]}),Object(a.jsxs)("div",{className:"intro animate__animated animate__fadeIn animate__delay-3s",children:[Object(a.jsx)(v,{}),Object(a.jsx)(b,{}),Object(a.jsx)(N,{})]})]})}}]),n}(c.a.Component)),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),w()},7:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.e604bac4.chunk.js.map