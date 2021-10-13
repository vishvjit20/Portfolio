import "./item.scss";

const Item = ({ name }) => {
  let path = "/assets/";
  return (
    <div className="skill-path">
      <img src={`${process.env.PUBLIC_URL}${path}${name}.png`} alt="" />
    </div>
  );
};

export default Item;
