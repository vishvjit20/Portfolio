import { consts, techName } from "../../data";
import Item from "./Item";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      {/* <h1>{consts[3]}</h1> */}
      <div className="heading">{consts[3]}</div>
      <div className="container">
        {techName.map((name) => {
          return <Item name={name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
