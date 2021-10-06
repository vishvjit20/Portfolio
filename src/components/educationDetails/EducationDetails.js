import PortfolioList from "../portfolioList/PortfolioList";
import "./educationdetails.scss";
import { useState, useEffect } from "react";
import { highSchool, graduation, seniorSecondary } from "../../data";
import Education from "../education/Education";

const EducationDetails = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "grad", title: "Graduation" },
    { id: "highschool", title: "High School" },
    { id: "ssc", title: "Senior Seconday School" },
  ];

  useEffect(() => {
    switch (selected) {
      case "grad":
        setData(graduation);
        break;
      case "highschool":
        setData(highSchool);
        break;
      case "ssc":
        setData(seniorSecondary);
        break;
      default:
        setData(graduation);
    }
  }, [selected]);
  return (
    <div className="education" id="education">
      <h1>Education Background</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => {
          return (
            <Education
              marks={item.marks}
              institute={item.institute}
              yearOfPassing={item.yearOfPassing}
              branch={item.branch}
              stream={item.stream}
              city={item.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EducationDetails;
