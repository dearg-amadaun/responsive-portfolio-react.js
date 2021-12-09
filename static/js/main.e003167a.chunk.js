(this["webpackJsonpreact-folio-4"]=this["webpackJsonpreact-folio-4"]||[]).push([[0],{23:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),a=i(15),c=i.n(a),r=i(3),l=(i(23),i(43)),o=i(44),d=i(0);function j(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"Brendan Rottmund."}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{children:Object(d.jsx)("div",{id:"resLink",children:Object(d.jsx)("a",{href:"https://drive.google.com/file/d/1YAxz6LcDIYiGTsvhWodta5OWhIVZca2T/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"Resume"})})})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(o.a,{className:"icon"}),Object(d.jsx)("span",{children:"brottmund@gmail.com"})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return i(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}i(30);var m=i(17),h=i(45);function b(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){Object(m.a)(e.current,{showCursor:!0,loop:!1,strings:["Developer"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"./images/me.jpg",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Brendan Rottmund"}),Object(d.jsxs)("h3",{children:["Full Stack ",Object(d.jsx)("span",{ref:e})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)(h.a,{className:"Icon",id:"chevronDown",style:{fontSize:100}})})]})]})}i(31);function u(e){var t=e.id,i=e.title,n=e.active,s=e.setSelected;return Object(d.jsx)("li",{className:n?"portfolioList active":"portfolioList",onClick:function(){return s(t)},children:i})}i(32);var p=[{id:1,title:"Javascript, NoSQL based app for tracking workouts and fitness progress.",link:"https://calm-harbor-58560.herokuapp.com/?id=61b12e46e8999300166d89ab",img:"./images/fitness-tracker.png"},{id:2,title:"Javascript random password generator.",link:"https://dearg-amadaun.github.io/Password-Generator/",img:"./images/passwordGen.png"},{id:3,title:"Express based app that allows the user to input and save simple notes.",link:"https://note-taker-express-homework-11.herokuapp.com/",img:"./images/note-taker.png"},{id:4,title:"App that uses Inquirer and basic command line inputs to generate a Markdown README file (requires pull).",link:"https://github.com/dearg-amadaun/Readme-Generator",img:"./images/readmeGenerator.png"},{id:5,title:"Team Profile Generator, takes user input and creates a project team HTML page (requires pull).",img:"./images/teamProfileGenerator.png"},{id:6,title:"FitList, a team effort at creating a RESTful app that users can build and track workouts with. ",link:"https://boiling-headland-53434.herokuapp.com/",img:"./images/fitList.png"}],g=[{id:1,title:"First foray into HTML",link:"https://dearg-amadaun.github.io/HTML-Website/",img:"./images/firstWebsite.png"},{id:2,title:"Web page utilizing HTML and CSS",link:"https://dearg-amadaun.github.io/Portfolio-Website/",img:"./images/html-css-website.png"},{id:3,title:"A more advanced HTML/CSS portfolio made using a template. Tinkering to make it my own was a great learning experience.",link:"https://dearg-amadaun.github.io/Portfolio-Overhaul/",img:"./images/html-css-template.png"},{id:4,title:"My first simple website built using REACT.JS",link:"https://dearg-amadaun.github.io/",img:"./images/first-react.png"}];function O(){var e=Object(n.useState)("featured"),t=Object(r.a)(e,2),i=t[0],s=t[1],a=Object(n.useState)([]),c=Object(r.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){switch(i){case"featured":o(p);break;case"design":o(g);break;default:o(p)}}),[i]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"design",title:"Design"}].map((function(e){return Object(d.jsx)(u,{title:e.title,active:i===e.id,setSelected:s,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:l.map((function(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:e.img,alt:""})}),Object(d.jsx)("h3",{children:e.title})]})}))}),Object(d.jsx)("a",{href:"#contact",children:Object(d.jsx)(h.a,{className:"Icon",id:"chevronDown",style:{fontSize:100}})})]})}i(33);function f(){return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/brendan-rottmund-587a501b2",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{src:"images/linkedin.png",alt:""})}),Object(d.jsx)("a",{href:"https://github.com/dearg-amadaun",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{src:"./images/github.png",alt:""})})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact Me."}),Object(d.jsx)("h3",{children:Object(d.jsxs)("ul",{id:"contactInfo",children:[Object(d.jsxs)("li",{className:"contactItem",children:["Email:",Object(d.jsx)("a",{href:"mailto:brottmund@gmail.com",children:Object(d.jsx)("div",{className:"menulink",children:"brottmund@gmail.com"})})]}),Object(d.jsxs)("li",{className:"contactItem",children:["Resume:",Object(d.jsx)("a",{href:"https://drive.google.com/file/d/1YAxz6LcDIYiGTsvhWodta5OWhIVZca2T/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("div",{className:"menulink",children:"Google Drive (PDF)"})})]})]})})]})]})}i(34),i(35);function x(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(t&&"active"),children:Object(d.jsxs)("ul",{onClick:function(){return i(!1)},children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var v=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(j,{menuOpen:i,setMenuOpen:s}),Object(d.jsx)(x,{menuOpen:i,setMenuOpen:s}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(b,{}),Object(d.jsx)(O,{}),Object(d.jsx)(f,{})]})]})};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e003167a.chunk.js.map