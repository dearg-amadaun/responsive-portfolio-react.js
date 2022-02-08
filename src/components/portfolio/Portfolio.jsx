/*Should have built the cards as a seperate component */

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

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


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
                
                <div class="card">
                    <div class="card__body">
                        
                        {/* Why can't I get the image to display just by 
                        mapping it from the data.js? It worked in the 
                        original build with hyperlink images in place of cards
                        what am I missing? If it's a pathing issue it's 
                        probably so simple I can't see it, but nothing I've 
                        tried via pathing seems to work. */}

                        <img src={ d.img } alt="" class="card__image"/>
                        <h3 class="card__title">{d.title}</h3>
                        <p class="card__description">{d.summary}</p>
                    </div>
                    <div class="card__footer">
                        <span class="card__icon">
                            <a href={d.git} target="_blank" rel="noreferrer" >
                                <GitHubIcon fontSize="large" />
                            </a>
                            <a href={d.link} target="_blank" rel="noreferrer" >
                                <LinkIcon fontSize="large" />
                            </a>
                        </span>
                    </div>
                </div>
                ))}
            </div>
            <a href="#contact">
            <ExpandMore className="Icon" id="chevronDown" style={{ fontSize: 100 }} />
            </a>
        </div>
    );
}
