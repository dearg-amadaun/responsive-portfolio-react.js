import "./topbar.scss";
import {Person, Mail, Description} from "@mui/icons-material/";


export default function Topbar( {menuOpen, setMenuOpen} ) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                 <div className="left">
                     <a href="#intro" className="logo">Brendan Rottmund.</a>
                     {/* <div className="itemContainer">
                        <Person className="icon" />
                        <span>(000)000-0000</span>
                     </div> */}
                     <div className="itemContainer">
                        <Description className="icon" />
                        <span><div id="resLink"><a href="">Resume</a></div></span>
                     </div>
                     <div className="itemContainer">
                         <Mail className="icon" />
                         <span>brottmund@gmail.com</span>
                     </div>
                 </div>
                 <div className="right">
                     <div className="hamburger" onClick={ () => setMenuOpen (!menuOpen) }>
                         <span className="line1"></span>
                         <span className="line2"></span>
                         <span className="line3"></span>
                     </div>
                 </div>
            </div>
        </div>
    )
}
