import "./testimonials.scss"

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
          <h1>Testimonials</h1>
          <div className="container">
            <div className="card">
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img className="user" src="https://picsum.photos/500/500" alt="" />
                <img className="right" src="assets/youtube.svg" alt="" />
              </div>
              <div className="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis deleniti repellendus qui praesentium inventore dolor?
              </div>
              <div className="bottom">
                <h3>Name</h3>
                <h4>Job Title</h4>
              </div>
            </div>
          </div>
        </div>
    )
}
