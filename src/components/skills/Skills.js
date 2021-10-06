import Item from "./Item";
import "./skills.scss";

const skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        <Item name="html" />
        <Item name="css" />
        <Item name="bootstrap" />
        <Item name="javascript" />
        <Item name="java" />
        <Item name="cpp" />
        <Item name="react" />
        <Item name="nodejs" />
        <Item name="express" />
        <Item name="mongodb" />
        <Item name="sql" />
        <Item name="github" />
      </div>
    </div>
  );
};

export default skills;
