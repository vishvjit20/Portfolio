import "./education.scss";
import Card from "../card/Card";
import { GiGraduateCap } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";

const Education = ({
  marks,
  institute,
  yearOfPassing,
  branch,
  stream,
  city,
}) => {
  return (
    <Card className="edu">
      <div className="institute">
        {branch ? (
          <GiGraduateCap className="icon" />
        ) : (
          <FaSchool className="icon" />
        )}
        <br />
        {institute},
      </div>
      <div className="city">{city}</div>
      {stream && <div className="stream"> {stream} </div>}
      {branch && <div className="branch"> {branch} </div>}

      <div className="details"> {marks}</div>
      <div className="details"> {yearOfPassing}</div>
    </Card>
  );
};

export default Education;
