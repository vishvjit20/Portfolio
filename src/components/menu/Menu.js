import { links } from "../../data";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {links.map((item) => {
          return <li onClick={() => setMenuOpen(false)}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Menu;
