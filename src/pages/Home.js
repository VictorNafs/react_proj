import React from "react";
import About from "../components/About.js";
import Works from "../components/Works.js";
import catImage from "../assets/cat.png";

const aboutData = [
  {
    name: "Jean",
    text:
      "Eu nisi laborum nostrud eiusmod qui sint id. Quis aliqua amet elit veniam aliqua ut do est irure. Tempor tempor amet eiusmod irure laboris sit ea Lorem sint eiusmod minim Lorem. Voluptate labore consectetur fugiat eu excepteur duis esse duis amet.",
    image: catImage,
  },
  {
    name: "Marc",
    text:
      "Tempor incididunt enim nostrud aliqua consequat enim. Nulla mollit elit cupidatat labore. Commodo cupidatat do irure amet ullamco pariatur velit. Fugiat aliqua sint mollit laboris irure ad velit proident aliquip ad sint incididunt.",
    image: catImage,
  },
  {
    name: "Pierre",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis vestibulum velit, in feugiat libero pharetra eget. Maecenas imperdiet orci vel felis tincidunt, at semper mauris dignissim. Nulla eget nulla vel erat scelerisque tempor.",
    image: catImage,
  },
];

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="pages/Home">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="components/about">About
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="components/works">Works</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {aboutData.map((data, index) => (
        <About key={index} name={data.name} text={data.text} image={data.image} />
      ))}
    </div>
  );
};

export default Home;
