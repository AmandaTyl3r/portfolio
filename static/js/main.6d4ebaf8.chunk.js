(this["webpackJsonpamanda-portfolio"]=this["webpackJsonpamanda-portfolio"]||[]).push([[0],{14:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(29),i=c.n(a),r=(c(14),c(3)),l=c(4),o=c(6),j=c(5),d=c(0),b=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("nav",{id:"navbar",className:"navbar",children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto active",href:"/portfolio#hero",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"/portfolio#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"portfolio#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"portfolio#services",children:"Projects"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"portfolio#contact",children:"Contact"})})]}),Object(d.jsx)("i",{className:"bi bi-list mobile-nav-toggle"})]})}}]),c}(n.a.Component),h=(c(15),n.a.Component,c(17)),m=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={formData:{fName:"1, 23, 19, 8"},wasSubmitted:!1,answer:[]},e.handleSubmit=function(t){console.log(t.fName);var c=Array.from(t.fName.split(","),Number);c.sort((function(e,t){return e-t})),console.log(c),e.setState((function(e){return{prevState:e,wasSubmitted:!0,answer:c}}))},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"services section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:"Array Play"}),Object(d.jsx)("p",{children:"Enter a string of numbers to be sorted (Seperated by a comma or blank space)"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(h.d,{enableReinitialize:!0,initialValues:this.state.formData,onSubmit:this.handleSubmit,children:Object(d.jsx)(h.c,{children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("div",{className:"form-wrapper",children:[Object(d.jsx)(h.b,{type:"text",name:"fName"}),Object(d.jsx)(h.a,{name:"fName",component:"div"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})})}),this.state.wasSubmitted?Object(d.jsx)("div",{children:this.state.answer}):""]})]})})}}]),c}(n.a.Component),O=c(23);function x(e){var t=e.cham,c=Object(d.jsx)(O.a,{date:t.dueDate});console.log(c);var s=function(){return Object(d.jsx)("span",{children:"You are good to go!"})};return Object(d.jsx)("div",{className:"col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0",children:Object(d.jsxs)("div",{className:"icon-box",children:[Object(d.jsx)("img",{className:"card-img-top",src:t.img,alt:"..."}),Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("p",{children:t.type}),Object(d.jsx)("p",{children:"Due to lay eggs in:"})," ",Object(d.jsx)(O.a,{date:t.dueDate,renderer:function(e){var t=e.days,c=e.hours,n=e.minutes;e.seconds;return e.completed?Object(d.jsx)(s,{}):Object(d.jsxs)("span",{children:[t," Days ",c," Hours and ",n," minutes!"]})}})]})})}var u=n.a.memo(x),p=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={chams:[{name:"Gretchen",type:"Ambanja",dueDate:"2021-06-20T01:02:03",id:1,img:"https://i.imgur.com/2RQt8hq.jpg"},{name:"Frances",type:"Ambanja",dueDate:"2021-06-18T01:02:03",id:2,img:"https://i.imgur.com/SK01QlN.jpg"}],mappedChams:[]},e.mapChams=function(e){return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsx)(u,{cham:e})},e.id)},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){console.log("chams component mounted");var e=this.state.chams.map(this.mapChams);this.setState((function(t){return{prevState:t,mappedChams:e}}))}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"services section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:"Egg Tracker"}),Object(d.jsx)("p",{children:"Here are the chameleons we're expecting eggs from soon."})]}),Object(d.jsx)("div",{className:"row",children:this.state.mappedChams})]})})}}]),c}(n.a.Component),v=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{id:"about",className:"about",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row no-gutters",children:Object(d.jsx)("div",{className:"col-xl-10 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch",children:Object(d.jsxs)("div",{className:"content d-flex flex-column justify-content-center",children:[Object(d.jsx)("h3",{children:"About Amanda"}),Object(d.jsx)("p",{children:"I'm a recruiter turned developer, looking to join a team where I can work alongside and learn from seasoned developers."})]})})})})})}}]),c}(n.a.Component),f=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsx)("section",{id:"resume",className:"resume section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"section-title",children:Object(d.jsx)("h2",{children:"Resume"})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-lg-6",children:[Object(d.jsx)("h3",{className:"resume-title",children:"Sumary"}),Object(d.jsxs)("div",{className:"resume-item pb-0",children:[Object(d.jsx)("h4",{children:"Amanda Tyler"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Innovative full stack developer with a passion for debugging code, solving real world problems and maximizing efficiency."})}),Object(d.jsx)("p",{}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Roanoke, VA"}),Object(d.jsx)("li",{children:"(540) 520-7451"}),Object(d.jsx)("li",{children:"200AmandaTyler@gmail.com"})]}),Object(d.jsx)("p",{})]}),Object(d.jsx)("h3",{className:"resume-title",children:"Education"}),Object(d.jsxs)("div",{className:"resume-item",children:[Object(d.jsx)("h4",{children:"Bachelor of Computer Science"}),Object(d.jsx)("h5",{children:"2009 - 2013"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"James Madison University, Harrisonburg, VA"})})]})]}),Object(d.jsxs)("div",{className:"col-lg-6",children:[Object(d.jsx)("h3",{className:"resume-title",children:"Professional Experience"}),Object(d.jsxs)("div",{className:"resume-item",children:[Object(d.jsx)("h4",{children:"Full Stack Developer"}),Object(d.jsx)("h5",{children:"Feb 2021 - Present"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Host a Fan - Los Angeles, CA "})}),Object(d.jsx)("p",{}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Designed and created complex SQL tables and stored procedures that add, update, and query information."}),Object(d.jsx)("li",{children:"Built a SQL procedure that uses incoming coordinate parameters and the haversine formula to calculate a 50 mile radius and return all events within the radius. "}),Object(d.jsx)("li",{children:"Built responsive components in React that allow hosts to add / edit listing information. "}),Object(d.jsx)("li",{children:"Created React component that allows hosts to upload and edit images associated with listings."}),Object(d.jsx)("li",{children:"Used Google Maps API to generate display maps with location markers based on user input and queries."}),Object(d.jsx)("li",{children:"Used .Net Core to create API controllers, services, interfaces, and models to process front end user requests related to listings, events, venues, and properties."})]}),Object(d.jsx)("p",{})]}),Object(d.jsxs)("div",{className:"resume-item",children:[Object(d.jsx)("h4",{children:"Executive Recruiter"}),Object(d.jsx)("h5",{children:" Nov 2016 - Feb 2021"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Valor Partners - Roanoke, VA"})}),Object(d.jsx)("p",{}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Conducted research on potential client companies and their competitors to build an accurate candidate target profile."}),Object(d.jsx)("li",{children:"Guided company wide data transfer from one ATS (Applicant Tracking System) to another."}),Object(d.jsx)("li",{children:"Created custom SQL search queries in ATS, as requested by client companies."})]}),Object(d.jsx)("p",{})]})]})]})]})})}}]),c}(n.a.Component),g=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsx)("section",{id:"skills",className:"skills section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"section-title",children:Object(d.jsx)("h2",{children:"Skills"})}),Object(d.jsxs)("div",{className:"row skills-content",children:[Object(d.jsxs)("div",{className:"col-lg-4",children:[Object(d.jsx)("h5",{children:"JavaScript"}),Object(d.jsx)("p",{}),Object(d.jsx)("h5",{children:"C#"}),Object(d.jsx)("p",{}),Object(d.jsx)("h5",{children:"CSS"})]}),Object(d.jsxs)("div",{className:"col-lg-4",children:[Object(d.jsx)("h5",{children:"React.js"}),Object(d.jsx)("p",{}),Object(d.jsx)("h5",{children:".NET Core"}),Object(d.jsx)("p",{}),Object(d.jsx)("h5",{children:"Git"}),Object(d.jsx)("p",{}),Object(d.jsx)("h5",{children:"AJAX"})]}),Object(d.jsxs)("div",{className:"col-lg-4",children:[Object(d.jsx)("h5",{children:"SQL"}),Object(d.jsx)("p",{}),Object(d.jsx)("h5",{children:"RESTful API"}),Object(d.jsx)("p",{}),Object(d.jsx)("h5",{children:"C#"}),Object(d.jsx)("p",{}),Object(d.jsx)("h5",{children:"HTML"})]})]})]})})}}]),c}(n.a.Component),N=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsx)("section",{id:"contact",className:"contact section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:"Contact"}),Object(d.jsx)("p",{children:"Let's Talk!"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-4 col-md-4"}),Object(d.jsx)("div",{className:"col-lg-3 col-md-4",children:Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center mt-4",children:[Object(d.jsx)("i",{className:"bi bi-envelope"}),Object(d.jsx)("p",{children:"200AmandaTyler@gmail.com"})]}),Object(d.jsxs)("div",{className:"d-flex align-items-center mt-4",children:[Object(d.jsx)("i",{className:"bi bi-phone"}),Object(d.jsx)("p",{children:"540-520-7451"})]})]})}),Object(d.jsx)("div",{className:"col-lg-5 col-md-8",children:Object(d.jsxs)("form",{action:"forms/contact.php",method:"post",className:"php-email-form",children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name",required:!0})}),Object(d.jsx)("div",{className:"form-group mt-3",children:Object(d.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email",required:!0})}),Object(d.jsx)("div",{className:"form-group mt-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject",required:!0})}),Object(d.jsx)("div",{className:"form-group mt-3",children:Object(d.jsx)("textarea",{className:"form-control",name:"message",rows:5,placeholder:"Message",required:!0,defaultValue:""})}),Object(d.jsxs)("div",{className:"my-3",children:[Object(d.jsx)("div",{className:"loading",children:"Loading"}),Object(d.jsx)("div",{className:"error-message"}),Object(d.jsx)("div",{className:"sent-message",children:"Your message has been sent. Thank you!"})]}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{type:"submit",children:"Send Message"})})]})})]})]})})}}]),c}(n.a.Component),y=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).onClick=function(t){console.log("getting in here"),e.props.history.push("/eggtracker")},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsx)("section",{id:"services",className:"services section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:"Projects"}),Object(d.jsx)("p",{children:"Checkout these projects I'm working on."})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0",children:Object(d.jsxs)("div",{className:"icon-box",children:[Object(d.jsx)("div",{class:"icon",children:Object(d.jsx)("i",{class:"bx bxl-dribbble"})}),Object(d.jsx)("h4",{className:"title",children:Object(d.jsx)("a",{href:"/amanda&jaronswedding",children:"Wedding Website"})}),Object(d.jsx)("p",{className:"description",children:"Details about our upcoming Domican Republic wedding festivites!"})]})}),Object(d.jsx)("div",{className:"col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0",children:Object(d.jsxs)("div",{className:"icon-box",children:[Object(d.jsx)("div",{class:"icon",children:Object(d.jsx)("i",{class:"bx bxl-dribbble"})}),Object(d.jsx)("h4",{className:"title",children:Object(d.jsx)("a",{href:"/portfolio-arrayplay",children:"Array Play"})}),Object(d.jsx)("p",{className:"description",children:"Accepts an array and outputs using various functions"})]})}),Object(d.jsx)("div",{class:"col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0",children:Object(d.jsxs)("div",{class:"icon-box",children:[Object(d.jsx)("div",{class:"icon",children:Object(d.jsx)("i",{class:"bx bx-file"})}),Object(d.jsx)("h4",{class:"title",onClick:this.onClick,children:Object(d.jsx)("a",{href:"/portfolio/eggtracker",children:"Egg Tracker"})}),Object(d.jsx)("p",{class:"description",children:"See which one of my chameleons will lay eggs next!"})]})})]})]})})}}]),c}(n.a.Component),k=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"services section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:"Amanda & Jaron's wedding page woo hoo!"}),Object(d.jsx)("p",{children:"More details coming soon."})]}),Object(d.jsx)("div",{className:"row"})]})})}}]),c}(n.a.Component),w=c(7),C=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{id:"hero",className:"d-flex flex-column align-items-center justify-content-center",children:[Object(d.jsx)("h1",{children:"Hi, I'm Amanda!"}),Object(d.jsx)("h2",{children:"I'm a Full Stack Developer"}),Object(d.jsx)("a",{href:"#about",className:"btn-get-started scrollto",children:Object(d.jsx)("i",{className:"bi bi-chevron-double-down"})})]})}}]),c}(s.Component),S=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){console.log("App componenet mounted")}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(w.a,{path:"/portfolio",exact:!0,component:C}),Object(d.jsxs)("main",{id:"main",children:[Object(d.jsx)(w.a,{path:"/portfolio",exact:!0,component:v}),Object(d.jsx)(w.a,{path:"/portfolio",exact:!0,component:g}),Object(d.jsx)(w.a,{path:"/portfolio",exact:!0,component:f}),Object(d.jsx)(w.a,{path:"/portfolio",component:y}),Object(d.jsx)(w.a,{path:"/eggtracker",exact:!0,component:p}),Object(d.jsx)(w.a,{path:"/arrayplay",exact:!0,component:m}),Object(d.jsx)(w.a,{path:"/portfolio",component:N}),Object(d.jsx)(w.a,{path:"/amanda&jaronswedding",exact:!0,component:k})]})]})}}]),c}(s.Component),A=Object(w.e)(S),T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))},D=c(18);i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(D.a,{children:Object(d.jsx)(A,{})})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.6d4ebaf8.chunk.js.map