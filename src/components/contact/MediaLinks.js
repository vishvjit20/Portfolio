import "./mediaLinks.scss";
import { links } from "../../data";

const MediaLinks = () => {
  return (
    <div className="links">
      <div>Links</div>
      {links.map((item, idx) => {
        return idx !== links.length - 1 && <> {item} </>;
      })}
    </div>
  );
};

export default MediaLinks;
