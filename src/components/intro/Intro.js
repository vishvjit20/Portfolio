import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { BiChevronsDown } from "react-icons/bi";
import Stars from "../animation/Stars";

const Intro = () => {
  const textref = useRef();

  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Frontend Development",
        "Backend Development",
        "Problem Solving",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <Stars />
      <div className="wrapper">
        <h2>Hey there, I'm</h2>
        <h1>Vishwajeet</h1>
        <h3>I'm interested in</h3>
        <h3>
          <span ref={textref}></span>
        </h3>
      </div>
      <a href="#about">
        <BiChevronsDown className="icon" />
      </a>
    </div>
  );
};

export default Intro;
