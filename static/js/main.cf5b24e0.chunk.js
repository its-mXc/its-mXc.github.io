(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{284:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(70),r=t.n(i),c=(t(77),t(6)),s=t(7),o=t(9),m=t(8),u=t(10),d=t(71),p=t.n(d),h=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"80%"}},l.a.createElement(p.a,{params:{particles:{number:{value:50,density:{enable:!0,value_area:800}},size:{value:3}}}}),l.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"80%",marginTop:"10%"}},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#certifications"},"Certifications")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("h5",null,l.a.createElement("span",null,e.name)),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://".concat(e.website)},l.a.createElement("i",{class:"fa fa-link"}),e.website),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:".concat(e.email)},l.a.createElement("i",{class:"fa fa-envelope"}),e.email)),l.a.createElement("a",{class:"button resume",href:"https://drive.google.com/uc?export=download&id=1DQYlMzyDo0p-eqfTyZGZWXzFmVXaVF8M"},l.a.createElement("i",{class:"fa fa-download"}),"Resume"))))))}}]),a}(n.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"".concat(e.link),target:"_blank"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("a",{href:"".concat(e.link),target:"_blank"},l.a.createElement("h5",null,e.name)),l.a.createElement("p",null,e.description))))),l.a.createElement("div",{class:"project-links"},e.sourcecode&&l.a.createElement("a",{href:"".concat(e.sourcecode),target:"_blank"},l.a.createElement("i",{class:"fa fa-2x fa-github","aria-hidden":"true"})),e.link&&l.a.createElement("a",{href:"".concat(e.link),target:"_blank"},l.a.createElement("i",{class:"fa fa-2x fa-link","aria-hidden":"true"}))))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},l.a.createElement("center",null,l.a.createElement("a",{href:"mailto:".concat(e.email)},l.a.createElement("i",{class:"fa fa-3x fa-envelope email-fa"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"CONTACT ME WITH EMAIL"),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:".concat(e.email)},e.email))))))}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),k={imagebaseurl:"",name:"Uday Nayak",role:"Full Stack Engineer",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:"I am an Inquisitive, energetic Computer Science Professional with a strong foundation in math, programming logic, cross platforming coding, data analysis and full stack development.",socialLinks:[{name:"Uday Nayak",url:"https://www.linkedin.com/in/uday-nayak-518348188/",className:"fa fa-linkedin"},{name:"Uday Nayak",url:"https://github.com/its-mXc",className:"fa fa-github"}],aboutme:"I am a final year student at Gurukul Kangri Vishwavidalaya pursuing my Bachelors of Technology in Computer Science. I am a self taught full stack developer and currently doing some projects on Data Analysis and Machine Learning. I have done my internship in Computer Networks and Information Security. My Interests include Geo-politics and Aviation.",website:"its-mXc.github.io",email:"udaynayakgkv@gmail.com",address:"Gurgaon, Haryana",education:[{UniversityName:"Gurukul Kangri Vishwavidalaya",specialization:"Bachelors in Technology",MonthOfPassing:"Aug",YearOfPassing:"2020",Achievements:"Helped realize my passion in Computer Science when re-introuduced to Computer Sceince in 1st Year with C language and C++, Java in subsequent years..Got introduced to Data Structures, Algorithms, DBMS, Operating System, Computers and technologies such as .NET and cloud & became a member of Annual Tech Fest Organising Team"},{UniversityName:"Rotary Public school",specialization:"Non Medical",MonthOfPassing:"April",YearOfPassing:"2016",Achievements:"Played a significant role in my shaping my technical abilites and logical thinking.Challenged me to learn harder and work harder thus improving my skills."}],work:[{CompanyName:"Vinsol",specialization:"Intern - Ruby on Rails",MonthOfLeaving:"June",YearOfLeaving:"2020",Achievements:"Learnt Ruby, Metaprogramming in Ruby, HTML, CSS, JavaScript, Jquery, Relational Database MySQL, Version control using GIT, and full stack framework Rails, and did 2 projects in Rails Depot App and Prashna "},{CompanyName:"Yokoso Automation Private Limited",specialization:"Computer Network & Information Security",MonthOfLeaving:"Jan",YearOfLeaving:"2019",Achievements:"Hands on industry level experience regarding Computer network and information security"}],skillsDescription:"",skills:[{skillname:"HTML5"},{skillname:"SASS"},{skillname:"Reactjs"},{skillname:"Ruby"},{skillname:"Rails"},{skillname:"MySQL"}],portfolio:[{name:"Prashna",description:"Ruby on Rails",imgurl:"images/portfolio/Prashna.png",link:"https://prashna-uday.herokuapp.com/",sourcecode:"https://github.com/its-mXc/prashna"},{name:"ToDoList",description:"React SPA using firbase,context, and integration testing and node-sass",imgurl:"images/portfolio/todolist.png",sourcecode:"https://github.com/its-mXc/todolist"},{name:"Binding Sites",description:"Hierarchical clustering using average linkage and hamming affnity on DNA Dataset",imgurl:"images/portfolio/bindingsites.png",sourcecode:"https://github.com/maskedXchaotic/binding-sites"},{name:"MyTube",description:"YouTube clone using ReactJS",imgurl:"images/portfolio/mytube.png",sourcecode:"https://github.com/maskedXchaotic/youtube_react"}],certifications:[{name:"Full Stack Open",image:"images/certifications/fullstack.png"},{name:"Data Analysis with Python",image:"images/certifications/data-analysis.pdf"},{name:"Javascript Algorithms and Data Structres",image:"images/certifications/javascript.png"},{name:"Responsive Web Design",image:"images/certifications/html.png"},{name:"Artifical Intelligence",image:"images/certifications/elements-of-ai.png"}]},y=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"certifications"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h4",null,"Certifications"),l.a.createElement("div",{id:"certifications-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.certifications&&e.certifications.map(function(e){return l.a.createElement("a",{href:e.image,target:"_blank"},"\u2022  ".concat(e.name,"  "),l.a.createElement("i",{class:"fa fa-link"}))})))))}}]),a}(n.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:k}),l.a.createElement(E,{resumeData:k}),l.a.createElement(f,{resumeData:k}),l.a.createElement(g,{resumeData:k}),l.a.createElement(y,{resumeData:k}),l.a.createElement(v,{resumeData:k}),l.a.createElement(b,{resumeData:k}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,a,t){e.exports=t(284)},77:function(e,a,t){}},[[72,2,1]]]);
//# sourceMappingURL=main.cf5b24e0.chunk.js.map