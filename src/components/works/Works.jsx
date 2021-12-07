import "./works.scss"
import { Aod } from '@mui/icons-material/';


export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="iconContainer">
                                    <i id="aodIcon"><Aod style={{ fontSize: 30 }}/></i>
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis laboriosam ut repudiandae soluta. Adipisci quos eveniet qui ad omnis.
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
