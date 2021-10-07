import "./navbarList.scss";

const NavbarList = ({ active, setSelected, id, link }) => {
  return (
    <div
      className={active ? "link active" : "link"}
      onClick={() => setSelected(id)}
    >
      {link}
    </div>
  );
};

export default NavbarList;
