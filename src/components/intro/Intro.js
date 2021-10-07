import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { BiChevronsDown } from "react-icons/bi";
import Stars from "../animation/Stars";
import { interests, introData } from "../../data";

const Intro = () => {
  const textref = useRef();

  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: interests,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <Stars />
      <div className="wrapper">
        {introData.map((data) => (
          <>{data}</>
        ))}
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
