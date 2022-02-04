import "./intro.scss"
import { init } from "ityped"
import headShot from "../../assets/images/me.jpg"
import { ExpandMore } from "@mui/icons-material/";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      // backDelay:  1500,
      // backSpeed: 200,
      showCursor: true,
      loop:       false,
      
      strings: [ 'Developer' ] });
  }, []);

    return (
        <div className="intro" id="intro">
          <div className="left">
            <div className="imgContainer">
              <img src={headShot} alt="" />
            </div>
          </div>

          <div className="right">
            <div className="wrapper">
              {/* <h2></h2> */}
              <h1>Brendan Rottmund</h1>
              <h3>Full Stack <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
            <ExpandMore className="Icon" id="chevronDown" style={{ fontSize: 100 }} />
            </a>
          </div>
        </div>
    )
}
