// import { useState } from "react";
import "./contact.scss"

export default function Contacts() {
//     const [message, setMessage] = useState(false)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setMessage(true)
//     }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <a href="https://www.linkedin.com/in/brendan-rottmund-587a501b2" target="_blank" rel="noopener noreferrer">
                    <img src="images/linkedin.png" alt="" />
                </a>
                <a href="https://github.com/dearg-amadaun" target="_blank" rel="noopener noreferrer">
                <img src="./images/github.png" alt="" />
                </a>
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <h3>
                    <ul id="contactInfo">
                    
                    <li className="contactItem">Email:
                        <a href="mailto:brottmund@gmail.com">
                            <div className="menulink">brottmund@gmail.com</div>
                        </a>
                    </li>
                    
                    <li className="contactItem">Resume:
                        <a href="hhttps://drive.google.com/file/d/1kw4548mBK672Z4WKZHqAfNZVVX_i0TGa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <div className="menulink">Google Drive (PDF)</div>
                        </a>
                    </li>
                        
                    </ul>
                </h3>
                {/* <form onSubmit={handleSubmit}>
                   <input type="text" placeholder="Email" />
                   <textarea placeholder="Message"></textarea>
                   <button type="submit">Send</button> 
                   {message && <span>Thank you for contacting me!</span>}
                </form> */}
            </div>
        </div>
    )
};
