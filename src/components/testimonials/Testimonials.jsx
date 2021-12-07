import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Managerius Federschwert",
      title: "Middle-manager who specifically hates *you*",
      img:
        "https://picsum.photos/200/400",
      icon: "assets/twitter.svg",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

          
    },
    {
      id: 2,
      name: "Business Mannington IV(III)",
      title: "President of Capital",
      img:
        "https://picsum.photos/350/550",
      icon: "assets/youtube.svg",
      desc:
        "Dolorem sit nihil obcaecati ullam, corrupti minus possimus deserunt placeat.",
      featured: true,
    },
    {
      id: 3,
      name: "President Business",
      title: "Supreme-Lord-of-Job-Having",
      img:
        "https://picsum.photos/600/600",
      icon: "assets/linkedin.svg",
      desc:
        "Libero incidunt aliquid unde, provident vitae qui adipisci ipsam ipsum fuga. Ipsa!",
    },
  ];

    return (
        <div className="testimonials" id="testimonials">
          <h1>Testimonials</h1>
          <div className="container">
            {data.map((d) => (
              <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img className="user" src={d.img} alt="" />
                <img className="right" src={d.icon} alt="" />
              </div>
              <div className="center">
                {d.desc}
                </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
              ))}
          </div>
        </div>
    )
}
