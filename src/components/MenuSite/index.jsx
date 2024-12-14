import { Link } from "react-router-dom";
import { Menu } from "antd";

const items = [
  {
    key: "1",
    label: <Link to="/">Поиск</Link>,
  },
  {
    key: "2",
    label: <Link to="/favourites">Избранное</Link>,
  },
];

const MenuSite = () => {
  return <Menu mode="horizontal" items={items} />;
};

export default MenuSite;
