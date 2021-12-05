import "./intro.scss"
import { ExpandMore } from "@mui/icons-material/";

export default function intro() {
    return (
        <div className="intro" id="intro">
          <div className="left">
            <div className="imgContainer">
              <img src="../assets/me.jpg" alt="" />
            </div>
          </div>

          <div className="right">
            <div className="wrapper">
              <h2>Hi! My name is</h2>
              <h1>Brendan Rottmund</h1>
              <h3>Full Stack Web Developer</h3>
            </div>
            <a href="#portfolio">
            <ExpandMore className="Icon" id="chevronDown" style={{ fontSize: 100 }} />
            </a>
          </div>
        </div>
    )
}
