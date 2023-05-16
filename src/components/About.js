import React from "react";

const About = (props) => {
  const name = props.name;
  const text = props.text;
  const image = props.image;

  return (
    <div className="About">
      <p>{name}</p>
      <p>{text}</p>
      <img src={image} alt="About" />
    </div>
  );
};

export default About;
