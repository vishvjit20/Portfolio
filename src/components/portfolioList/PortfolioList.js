import React from "react";
import "./portfolioList.scss";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "portfolio-list active" : "portfolio-list"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
