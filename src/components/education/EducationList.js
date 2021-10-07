import React from "react";
import "./educationList.scss";

const EducationList = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "education-list active" : "education-list"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default EducationList;
