import "./topbar.scss";
import { Mail, Description } from "@mui/icons-material/";


export default function Topbar( {menuOpen, setMenuOpen} ) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                 <div className="left">
                     <a href="#intro" className="logo">Brendan Rottmund.</a>
                     <div className="itemContainer">
                        <Description className="icon" />
                        <span><div id="resLink"><a href="https://drive.google.com/file/d/1kw4548mBK672Z4WKZHqAfNZVVX_i0TGa/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></div></span>
                     </div>
                     <div className="itemContainer">
                         <Mail className="icon" />
                         <span> <a href="mailto:brottmund@gmail.com">brottmund@gmail.com</a></span>
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
