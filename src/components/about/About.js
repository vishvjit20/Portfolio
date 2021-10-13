import React from "react";
import "./about.scss";
import fileSaver from "file-saver";
import { MdWork } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillPersonBadgeFill, BsPersonBoundingBox } from "react-icons/bs";
import { consts, myData } from "../../data";
// import img from "../../assets/man.jpg";

const About = () => {
  const btnClickHandler = () => {
    return fileSaver.saveAs(
      "https://drive.google.com/file/d/1vYbyHl7PLFhmb13PvjaJ7X6myZ26WtqU/view?usp=sharing",
      "my_cv.pdf"
    );
  };

  const icons = [
    <BsPersonBoundingBox />,
    <MdWork />,
    <BsFillPersonBadgeFill />,
    <HiLocationMarker />,
  ];

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src={`${process.env.PUBLIC_URL}/assets/man.jpg`} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="heading2">
          <h3>{consts[0]}</h3>
        </div>
        <div className="about-me">
          <ul>
            {icons.map((icon, idx) => {
              return (
                <li>
                  {icon}&nbsp;&nbsp;&nbsp;&nbsp;{myData[idx]}
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={btnClickHandler}>Download CV</button>
      </div>
    </div>
  );
};

export default About;
