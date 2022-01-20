import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
// import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
// import Works from "./components/works/Works";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu";

// import Test from "./components/test/Test"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen= {menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        {/* <About /> */}
        <Portfolio />
        {/* <Works />
        <Testimonials /> */}
        <Contact />
        {/* <Test /> */}
      </div>
    </div>
  );
}

export default App;
