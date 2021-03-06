import "./projects.scss";
import { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { consts, projectdata } from "../../data";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : projectdata.length - 1
        )
      : setCurrentSlide(
          currentSlide < projectdata.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="projects" id="projects">
      <div className="heading h1">{consts[2]}</div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projectdata.map((item, idx) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="name">
                    {item.name}
                    <p>{item.description}</p>
                  </div>
                  <div className="icons">
                    <BiCodeAlt
                      className="icon"
                      onClick={() => window.open(`${item.link}`, "_blank")}
                    />
                    <DiCodeigniter
                      className="icon"
                      onClick={() => window.open(`${item.demoLink}`, "_blank")}
                    />
                  </div>
                </div>
              </div>
              <div className="right">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/p${idx + 1}.jpg`}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/arrow.png`}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/arrow.png`}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Projects;
