import React from "react";
import "./about.scss";
import fileSaver from "file-saver";
import { MdWork } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillPersonBadgeFill, BsPersonBoundingBox } from "react-icons/bs";
import { consts } from "../../data";

const About = () => {
  const btnClickHandler = () => {
    return fileSaver.saveAs(
      "https://drive.google.com/file/d/1vYbyHl7PLFhmb13PvjaJ7X6myZ26WtqU/view?usp=sharing",
      "my_cv.pdf"
    );
  };
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="heading">
          <h3>{consts[0]}</h3>
        </div>
        <div className="about-me">
          <ul>
            <li>
              <BsPersonBoundingBox />
              &nbsp;&nbsp;&nbsp;&nbsp; Vishwajeet Singh Kushwah
            </li>
            <li>
              <MdWork />
              &nbsp;&nbsp;&nbsp;&nbsp;Tata Consultancy Services
            </li>
            <li>
              <BsFillPersonBadgeFill />
              &nbsp;&nbsp;&nbsp;&nbsp;Assistant System Engineer - Trainee
            </li>
            <li>
              <HiLocationMarker />
              &nbsp;&nbsp;&nbsp;&nbsp;Pune, Maharashtra
            </li>
          </ul>
        </div>
        <button onClick={btnClickHandler}>Download CV</button>
      </div>
    </div>
  );
};

export default About;
