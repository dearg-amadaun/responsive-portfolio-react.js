import React from "react";
// import { ReactDOM } from "react";


class Test extends React.Component {
  render() {
    return (
      <Card   imageScr="http://78.media.tumblr.com/88c885bec14201094f6a7fb47c1f648f/tumblr_oysy9jBlRM1qfthy3o1_500.jpg"
        imageAlt="John"
        name="John Red"
        title="CEO & Founder of Florest Trend"
        workPlace="Harvard University"
        textButton="Contact"
      />
    );
  }
}

const Card = ({
  imageScr,
  imageAlt,
  name,
  title,
  workPlace,
  textButton,
  children
}) => {
  return (
    <div className="container">
    <div className="card">
      <img src={imageScr} alt={imageAlt} />
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <p>{workPlace}</p>
      <a href="www.google.com">
        <i className="fa fa-dribbble" />
      </a>
      <a href="www.google.com">
        <i className="fa fa-twitter" />
      </a>
      <a href="www.google.com">
        <i className="fa fa-linkedin" />
      </a>
      <a href="www.google.com">
        <i className="fa fa-facebook" />
      </a>
      <p>
        <button>{textButton}</button>
      </p>
    </div>
    </div>
  );
};

// Card.propTypes = {
//   imageScr: React.PropTypes.string,
//   imageAlt: React.PropTypes.string,
//   name: React.PropTypes.string,
//   title: React.PropTypes.string,
//   workPlace: React.PropTypes.string,
//   textButton: React.PropTypes.string,
//   children: React.PropTypes.node
// };

// ReactDOM.render(<Test />, document.getElementById("root"));

export default Test;
