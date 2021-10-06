import "./social.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { mediaLinks } from "../../data";

const Social = () => {
  const mediaIcons = [
    <BsLinkedin className="icon" />,
    <BsGithub className="icon" />,
    <RiInstagramFill className="icon" />,
    <FaTwitter className="icon" />,
  ];
  return (
    <div className="social">
      {mediaLinks.map((item, idx) => {
        return (
          <a href={item} target="_blank">
            {mediaIcons[idx]}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
