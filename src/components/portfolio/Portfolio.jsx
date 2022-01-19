import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { ExpandMore } from "@mui/icons-material/";
import "./portfolio.scss"
import {
    featuredPortfolio,
    // webPortfolio,
    // mobilePortfolio,
    designPortfolio,
    // contentPortfolio,
} from "../../data.js"

export default function Portfolio() {
    const [ selected, setSelected ] = useState("featured")
    const [ data, setData ] = useState([])

        const list = [
            {
                id: "featured",
                title: "Featured",
            },
            // {
            //     id: "web",
            //     title: "Web App",
            // },
            // {
            //     id: "mobile",
            //     title: "Mobile App",
            // },    
            {
                id: "design",
                title: "Design",
            },
            // {
            //     id: "content",
            //     title: "Content",
            // }, 
        ];

        useEffect(() => {

            switch(selected){
                case "featured":
                    setData(featuredPortfolio);
                    break;
                    // case "web":
                    // setData(webPortfolio);
                    // break;
                    // case "mobile":
                    // setData(mobilePortfolio);
                    // break;
                    case "design":
                    setData(designPortfolio);
                    break;
                    // case "content":
                    // setData(contentPortfolio);
                    // break;
                    default:
                        setData(featuredPortfolio);
            }

        }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                { list.map(item => (
                    <PortfolioList 
                    title= { item.title } 
                    active= { selected === item.id } 
                    setSelected= { setSelected }
                    id= { item.id }
                    />
                ))}
            </ul>
            
            
            <div className="container">
                {data.map((d) => (
                    
                    // <div className="item">
                    //     <a href={d.link} target="_blank" rel="noreferrer" ></a>
                    //     <img src={d.img} alt=""/>
                    //     <h3>{d.title}</h3>
                
                <div class="card">
                    <div class="card__body">
                        
                    
                        <img src={d.img} alt="" class="card__image"/>
                      
                        
                        <h3 class="card__title">{d.title}</h3>
                        <p class="card__description">{d.summary}</p>
                    </div>
                    
                    <div class="card__footer">
                        <button class="card__btn" onClick={d.link}>Deployed</button>
                        <button class="card__btn" onClick={d.link}>Deployed</button>
                    </div>
                    
                </div>
                
                    //</div>
                    
                
                ))}
            </div>
            
            
            <a href="#contact">
            <ExpandMore className="Icon" id="chevronDown" style={{ fontSize: 100 }} />
            </a>
        </div>
    );
}
