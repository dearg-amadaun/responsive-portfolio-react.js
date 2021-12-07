import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img:
        "https://placebear.com/900/1200",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Minima dolor expedita repellat exercitationem unde, omnis nobis dolorum reiciendis repellendus aspernatur modi reprehenderit, voluptas. ",
      img:
        "https://placebear.com/400/600",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
         "Maxime sequi iste nihil ex quia. Aperiam! ",
      img:
        "https://placebear.com/800/1080",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${ currentSlide * 100 }vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrowLeft.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />

      <img
        src="assets/arrowRight.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />

    </div>
  );
}