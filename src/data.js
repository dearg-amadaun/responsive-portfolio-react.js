/*Directly importing each image isn't as clean as it was before,
but I just can't seem to figure out the issue here. Portfolio.jsx 
just doesn't seem to want to play nice. 

P.S. Remember to also look into the invisible .svg social icons in Contact.jsx, 
same problem but directly importing those is less of a hassle.*/

import tracker from './assets/images/fitness-tracker.png'
export const featuredPortfolio = [
    {
      id: 1,
      title: "Fitness Tracker",
      summary: "Javascript, NoSQL based app for tracking workouts and fitness progress.",
      link: "https://calm-harbor-58560.herokuapp.com/?id=61b12e46e8999300166d89ab",
      git: "https://github.com/dearg-amadaun/NOSQL-WorkoutTracker",
      // img: "./assets/images/fitness-tracker.png",
      img: tracker, 
        
        
    },
    {
      id: 2,
      title: "Password Generator",
      summary: "Javascript password generator with input controls.",
      link: "https://dearg-amadaun.github.io/Password-Generator/",
      git: "https://github.com/dearg-amadaun/Password-Generator",
      img: 'assets/images/passwordGen.png',
    },
    {
      id: 3,
      title: "Note Taker",
      summary: "Express based app that allows the user to input and save simple notes.",
      link: "https://note-taker-express-homework-11.herokuapp.com/",
      git: "https://github.com/dearg-amadaun/Express-Note-Taker",
      img:
        "/images/note-taker.png",
    },
    {
      id: 4,
      title: "Readme Generator",
      summary: "App that uses Inquirer and basic command line inputs to generate a Markdown README file (requires pull).",
      link: "https://github.com/dearg-amadaun/Readme-Generator",
      git: "https://github.com/dearg-amadaun/Readme-Generator",
      img:
        "/images/readmeGenerator.png",
    },
    {
      id: 5,
      title: "Team Profile Generator",
      summary: "Takes user input and creates a project team HTML page (requires pull).",
      link: "https://github.com/dearg-amadaun/Team-Profile-Generator",
      git: "https://github.com/dearg-amadaun/Team-Profile-Generator",
      img:
        "/images/teamProfileGenerator.png",
    },
    {
      id: 6,
      title: "FitList",
      summary: "FitList, a team effort at creating a RESTful app that users can build and track workouts with. ",
      link: "https://boiling-headland-53434.herokuapp.com/",
      git: "https://github.com/dearg-amadaun/Fitlist",
      img:
        "/images/fitList.png",
    },
  ];
  
  // export const webPortfolio = [
  //   {
  //     id: 1,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 2,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 3,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 4,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 5,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 6,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  // ];
  
  // export const mobilePortfolio = [
  //   {
  //     id: 1,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 2,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 3,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 4,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 5,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 6,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  // ];
  
  export const designPortfolio = [
    {
      id: 1,
      title: "Learning HTML",
      summary: "First foray into HTML",
      git: "https://github.com/dearg-amadaun/HTML-Website",
      link: "https://dearg-amadaun.github.io/HTML-Website/",
      img:
        "/images/firstWebsite.png",
    },
    {
      id: 2,
      title: "Learning CSS",
      summary: "Web page utilizing HTML and CSS",
      git: "https://github.com/dearg-amadaun/Portfolio-Website",
      link: "https://dearg-amadaun.github.io/Portfolio-Website/",
      img:
      "/images/html-css-website.png",
    },
    {
      id: 3,
      title: "Template Tweak",
      summary: "A more advanced HTML/CSS portfolio made using a template. Tinkering to make it my own was a great learning experience.",
      git: "https://github.com/dearg-amadaun/Portfolio-Overhaul",
      link: "https://dearg-amadaun.github.io/Portfolio-Overhaul/",
      img:
        "/images/html-css-template.png",
    },
    {
      id: 4,
      title: "Learning React",
      summary: "My first simple website built using REACT.JS",
      git: "https://github.com/dearg-amadaun/dearg-amadaun.github.io",
      link: "https://dearg-amadaun.github.io/",
      img:
        "/images/first-react.png",
    },
  ];
  
  // export const contentPortfolio = [
  //   {
  //     id: 1,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 2,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 3,
  //     title: "App",
  //     link: "",
  //     iimg:
  //     "/images/.png",
  //   },
  //   {
  //     id: 4,
  //     title: "App",
  //     link: "",
  //     iimg:
  //     "/images/.png",
  //   },
  //   {
  //     id: 5,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  //   {
  //     id: 6,
  //     title: "App",
  //     link: "",
  //     img:
  //       "/images/.png",
  //   },
  // ];