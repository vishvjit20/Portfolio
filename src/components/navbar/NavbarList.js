import "./navbarList.scss";

const NavbarList = ({ active, setSelected, id, link }) => {
  return (
    <div className="link" onClick={() => setSelected(id)}>
      {link}
    </div>
  );
};

export default NavbarList;
