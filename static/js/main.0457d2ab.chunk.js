(this["webpackJsonpreact-folio-4"]=this["webpackJsonpreact-folio-4"]||[]).push([[0],{23:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),a=s(15),c=s.n(a),r=s(3),l=(s(23),s(43)),o=s(44),d=s(0);function j(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"Brendan Rottmund."}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{children:Object(d.jsx)("div",{id:"resLink",children:Object(d.jsx)("a",{href:"https://drive.google.com/file/d/1YAxz6LcDIYiGTsvhWodta5OWhIVZca2T/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"Resume"})})})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(o.a,{className:"icon"}),Object(d.jsx)("span",{children:"brottmund@gmail.com"})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}s(30);var h=s(17),b=s(45);function m(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(h.a)(e.current,{showCursor:!0,loop:!1,strings:["Developer"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"../assets/me.jpg",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Brendan Rottmund"}),Object(d.jsxs)("h3",{children:["Full Stack ",Object(d.jsx)("span",{ref:e})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)(b.a,{className:"Icon",id:"chevronDown",style:{fontSize:100}})})]})]})}s(31);function u(e){var t=e.id,s=e.title,i=e.active,n=e.setSelected;return Object(d.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return n(t)},children:s})}s(32);var p=[{id:1,title:"Javascript, NoSQL based app for tracking workouts and fitness progress.",link:"https://calm-harbor-58560.herokuapp.com/?id=61b12e46e8999300166d89ab",img:"../../assets/fitness-tracker.png"},{id:2,title:"Javascript random password generator.",link:"https://dearg-amadaun.github.io/Password-Generator/",img:"../../assets/passwordGen.png"},{id:3,title:"Express based app that allows the user to input and save simple notes.",link:"https://note-taker-express-homework-11.herokuapp.com/",img:"../../assets/note-taker.png"},{id:4,title:"App that uses Inquirer and basic command line inputs to generate a Markdown README file (requires pull).",link:"https://github.com/dearg-amadaun/Readme-Generator",img:"../../assets/readmeGenerator.png"},{id:5,title:"Team Profile Generator, takes user input and creates a project team HTML page (requires pull).",img:"../../assets/teamProfileGenerator.png"},{id:6,title:"FitList, a team effort at creating a RESTful app that users can build and track workouts with. ",link:"https://boiling-headland-53434.herokuapp.com/",img:"../../assets/fitList.png"}],O=[{id:1,title:"First foray into HTML",link:"https://dearg-amadaun.github.io/HTML-Website/",img:"../../assets/firstWebsite.png"},{id:2,title:"Web page utilizing HTML and CSS",link:"https://dearg-amadaun.github.io/Portfolio-Website/",img:"../../assets/html-css-website.png"},{id:3,title:"A more advanced HTML/CSS portfolio made using a template. Tinkering to make it my own was a great learning experience.",link:"https://dearg-amadaun.github.io/Portfolio-Overhaul/",img:"../../assets/html-css-template.png"},{id:4,title:"My first simple website built using REACT.JS",link:"https://dearg-amadaun.github.io/",img:"../../assets/first-react.png"}];function f(){var e=Object(i.useState)("featured"),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(i.useState)([]),c=Object(r.a)(a,2),l=c[0],o=c[1];return Object(i.useEffect)((function(){switch(s){case"featured":o(p);break;case"design":o(O);break;default:o(p)}}),[s]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"design",title:"Design"}].map((function(e){return Object(d.jsx)(u,{title:e.title,active:s===e.id,setSelected:n,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:l.map((function(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:e.img,alt:""})}),Object(d.jsx)("h3",{children:e.title})]})}))}),Object(d.jsx)("a",{href:"#contact",children:Object(d.jsx)(b.a,{className:"Icon",id:"chevronDown",style:{fontSize:100}})})]})}s(33);function g(){return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/brendan-rottmund-587a501b2",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{src:"assets/linkedin.png",alt:""})}),Object(d.jsx)("a",{href:"https://github.com/dearg-amadaun",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{src:"assets/github.png",alt:""})})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact Me."}),Object(d.jsx)("h3",{children:Object(d.jsxs)("ul",{id:"contactInfo",children:[Object(d.jsxs)("li",{className:"contactItem",children:["Email:",Object(d.jsx)("a",{href:"mailto:brottmund@gmail.com",children:Object(d.jsx)("div",{className:"menulink",children:"brottmund@gmail.com"})})]}),Object(d.jsxs)("li",{className:"contactItem",children:["Resume:",Object(d.jsx)("a",{href:"https://drive.google.com/file/d/1YAxz6LcDIYiGTsvhWodta5OWhIVZca2T/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("div",{className:"menulink",children:"Google Drive (PDF)"})})]})]})})]})]})}s(34),s(35);function x(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(t&&"active"),children:Object(d.jsxs)("ul",{onClick:function(){return s(!1)},children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var v=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(j,{menuOpen:s,setMenuOpen:n}),Object(d.jsx)(x,{menuOpen:s,setMenuOpen:n}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(m,{}),Object(d.jsx)(f,{}),Object(d.jsx)(g,{})]})]})};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.0457d2ab.chunk.js.map